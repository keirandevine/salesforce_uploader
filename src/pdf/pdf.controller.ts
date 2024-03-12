import { Controller, Post, Get, NotFoundException } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { SalesforceModule } from 'src/salesforce/salesforce.module';
import { SalesforceService } from 'src/salesforce/salesforce.service';
import { LoggerService } from 'src/logger/logger.service';

@Controller('pdf')
export class PdfController {
  constructor(
    private pdfService: PdfService,
    private salesforceService: SalesforceService,
    private loggerService: LoggerService // Inject LoggerService
  ) {}
  

  // Route for calling findPdfs method and returns a list of pdfFile paths
  @Get('/find')
  async findPdfs(){
    try {
      const pdfList = await this.pdfService.getPdfs();
      this.loggerService.logToFile('Successfully found PDFs: ' + pdfList.join(', ')); // Log successful operation
      return { success: true, data: pdfList };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      this.loggerService.logToFile('Failed to find PDFs: ' + error.message); // Log failed operation
      // Handle other types of errors here
      throw new NotFoundException('Failed to find PDFs.'); // Generic error message for unknown errors
    }
  }



}
