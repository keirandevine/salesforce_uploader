import { Module } from '@nestjs/common';
import { SalesforceService } from './salesforce.service';
import { SalesforceController } from './salesforce.controller';
import { PdfModule } from 'src/pdf/pdf.module';
import { PdfService } from 'src/pdf/pdf.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  providers: [SalesforceService, PdfService, LoggerService],
  controllers: [SalesforceController]
})
export class SalesforceModule {}
