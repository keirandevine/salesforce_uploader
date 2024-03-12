import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerService {
  private folderPath = 'C:\\test'; // Specify your full log folder path here

  logToFile(message: string): void {
    const logFolderPath = path.join(this.folderPath, 'logs');
    const logFilePath = path.join(logFolderPath, 'logfile.txt');

    // Create logs directory if it doesn't already exist
    if (!fs.existsSync(logFolderPath)) {
      fs.mkdirSync(logFolderPath, { recursive: true }); // Use recursive option to create parent directories if they don't exist
    }

    // Append message to the log file
    fs.appendFile(logFilePath, message + '\n', (err) => {
      if (err) {
        console.error('Error writing to log file: ', err);
      }
    });
  }
}
