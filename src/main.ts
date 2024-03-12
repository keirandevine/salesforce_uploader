import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // Import NestExpressApplication
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const expressApp = express(); // Create an Express instance

  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(expressApp)); // Use NestExpressApplication with ExpressAdapter
  app.useStaticAssets(join(__dirname, 'public'));

  await app.listen(3000);
}
bootstrap();