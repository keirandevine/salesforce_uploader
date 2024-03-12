import { Controller, Post, Body } from '@nestjs/common';
import { SalesforceService } from './salesforce.service';
import { LoggerService } from 'src/logger/logger.service';

@Controller('salesforce')
export class SalesforceController {

  constructor(
    private salesforceService: SalesforceService,
    private loggerService: LoggerService // Inject LoggerService
  ) {}

  @Post('connect')
  async createConnectionToSalesforce() {
    try {
      await this.salesforceService.establishConnection();
      this.loggerService.logToFile('Successfully established connection to Salesforce.');
      return { success: true, message: 'Connection to Salesforce established.' };
    } catch (error) {
      this.loggerService.logToFile('Failed to establish connection to Salesforce.');
      return { success: false, message: 'Failed to establish connection to Salesforce.', error: error.message };
    }
  }


  @Post('login')
  async loginToSalesforce(@Body() credentials: { username: string, password: string }) {
    try {
      const { username, password } = credentials;
      await this.salesforceService.login();
      this.loggerService.logToFile('Logged in to Salesforce successfully.');
      return { success: true, message: 'Logged in to Salesforce successfully.' };
    } catch (error) {
      this.loggerService.logToFile('Failed to login to Salesforce.');
      return { success: false, message: 'Failed to login to Salesforce.', error: error.message };
    }
  }

  @Post('upload')
  async uploadPdfsToSalesforce() {
    try {
      await this.salesforceService.uploadPdfs();
      this.loggerService.logToFile('PDFs uploaded to Salesforce successfully');
      return { success: true, message: 'PDFs uploaded to Salesforce successfully.' };
    } catch (error) {
      this.loggerService.logToFile('Failed to upload PDFs to Salesforce');
      return { success: false, message: 'Failed to upload PDFs to Salesforce.', error: error.message };
    }
  }



}
