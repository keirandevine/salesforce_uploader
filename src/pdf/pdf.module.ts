import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { SalesforceModule } from 'src/salesforce/salesforce.module';
import { SalesforceService } from 'src/salesforce/salesforce.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [SalesforceModule],
  providers: [PdfService, SalesforceService, LoggerService],
  controllers: [PdfController],
  exports: [PdfService], // Export PdfService and PdfController
})

export class PdfModule { }
