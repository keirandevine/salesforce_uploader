import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  private pdfPaths: string[] = [];

  async getPdfs(): Promise<string[]> {
    const folderPath = "C:/test";

    try {
      const files = await fs.promises.readdir(folderPath);

      this.pdfPaths = files
        .filter(file => path.extname(file).toLowerCase() === '.pdf')
        .map(file => path.join(folderPath, file)); // Concatenate folder path with file name
      console.log(this.pdfPaths)
      return this.pdfPaths;
    } catch (error) {
      throw new NotFoundException('Failed to read PDF files.');
    }
  }

  getPdfPaths(): string[] {
    return this.pdfPaths;
  }
}
