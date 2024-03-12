import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { SalesforceModule } from './salesforce/salesforce.module';
import { LoggerModule } from './logger/logger.module';
import { config as dotenvConfig } from 'dotenv';

// Load environment variables from .env file
dotenvConfig();

@Module({
  imports: [PdfModule, SalesforceModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
