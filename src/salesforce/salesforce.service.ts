import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { PdfService } from 'src/pdf/pdf.service';

const jsforce = require('jsforce');
const fs = require('fs');
const path = require('path');

@Injectable()
export class SalesforceService {
  private conn: any;

  constructor(
    private pdfService: PdfService,
    private loggerService: LoggerService) { }

  async establishConnection() {

    this.conn = new jsforce.Connection({
      loginUrl: process.env.SALESFORCE_LOGIN_URL
    });
  }


  async login() {
    if (!this.conn) {
      this.loggerService.logToFile('Connection not established');
      throw new Error('Connection not established.');
    }

    const username = process.env.SALESFORCE_USERNAME;
    const password = process.env.SALESFORCE_PASSWORD;

    if (!username || !password) {
      this.loggerService.logToFile('Salesforce credentials not provided.');
      throw new Error('Salesforce credentials not provided.');
    }

    await this.conn.login(username, password, (err: any) => {
      if (err) {
        this.loggerService.logToFile(`Failed to login to Salesforce: ${err}`);
        throw new Error(`Failed to login to Salesforce: ${err}`);
      }
    });
  }







  async uploadPdfs() {
    try {
      await this.pdfService.getPdfs();
      const pdfPaths = await this.pdfService.getPdfPaths(); // Await the result of getPdfPaths()
      console.log(pdfPaths);

      // Check if the connection is established
      if (!this.conn) {
        throw new Error('Connection with Salesforce not established.');
      }

      // Iterate through each PDF path and upload to Salesforce
      for (const pdfPath of pdfPaths) {
        try {
          const pdfData = await fs.promises.readFile(pdfPath); // Read PDF file asynchronously

          // Prepare payload for file upload
          const payload = {
            Description: "PDF files uploaded from the C:/test folder",
            Title: path.basename(pdfPath),
            PathOnClient: pdfPath,
            VersionData: pdfData.toString('base64')
          };

          // Upload the file to Salesforce
          const result = await this.conn.sobject('ContentVersion').create(payload);

          console.log(`PDF ${pdfPath} uploaded to Salesforce. Result:`, result);
        } catch (error) {
          console.error(`Failed to upload PDF ${pdfPath} to Salesforce:`, error);
          // Handle error
          throw new Error(`Failed to upload PDF ${pdfPath} to Salesforce: ${error.message}`);
        }
      }
    } catch (error) {
      console.error('Error fetching PDF paths:', error);
      // Handle error
      throw new Error(`Failed to fetch PDF paths: ${error.message}`);
    }
  }



}
