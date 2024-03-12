Project Title
Salesforce PDF Uploader

Description
When this program runs, a HTML index page is served at localhost:3000. The webpage presents 4 buttons:
1) Check C:/test for PDFs
2) Connect To SalesForce
3) Login To Salesforce
4) Upload PDFs To Salesforce
When any button gets clicked the server response gets displayed on screen. 



Getting Started
Dependencies
@nestjs/common
@nestjs/core
@nestjs/platform-express
dotenv
express
jsforce
reflect-metadata
rxjs

Installing
To use the Salesforce PDF uploader follow these steps: 
1) Download the project files from the Github repository
2) Navigate to the project root folder in the CLI
3) Run the command npm run start:dev to start the nest app running at localhost:3000
4) Navigate to localhost:3000 in the web browser
5) Click on the buttons to detect pdfs, establish a connection with Salesforce, login to Salesforce, and upload PDFs to Salesforce



Testing Program
1) Prepare a Salesforce account with permission granted to upload files
2) Copy some PDF files into the C:/test/ folder of your local machine
3) Enter a Salesforce username, password and login url as environment variables
4) In the CLI, navigate to the project root folder, run the command npm run start:dev, click the buttons to detect pdfs, establish a connection with Salesforce, login to Salesforce, and upload PDFs to Salesforce. 
5) Login to your Salesforce account and navigate to the Files section to verify that the upload was successful
6) Test edge cases such as uploading large files or uploading files in bulk to ensure that the application handles them successfully


Troubleshooting 
If you run into any problems when using the Salesforce PDF Uploader, consider these troubleshooting tips:
1) Double check the Salesforce username, password, and login url configured as environmental variables
2) Ensure a stable internet connection and verify that there are no firewall or network restrictions blocking the connection
3) Ensure that your user account has the necessary permissions to read files from the folder C:/test/
4) Check C:/test/logs/logfile.txt or debug console for error messages

If you continue to experience problems, consider seeking assistance from the project contributors or consulting relevant documentation for further guidance.




Authors
Contributors names and contact info

Keiran Devine - teacherkeiran@gmail.com
Mahmoud Diab - mahmoud@weareprodigy.com
Cian Connolly - Cian.Connolly@weareprodigy.com

Version History 
0.1 - Initial Release

Acknowledgements
This software could not have been built without the patience and guidance of both Mahmoud Diab and Cian Connolly. The following resources were also invaluable:
https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm
https://github.com/ccoenraets/forcejs/blob/master/README.md
https://docs.nestjs.com/
https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm



