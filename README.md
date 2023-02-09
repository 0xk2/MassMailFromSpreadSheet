# Mass Mail From SpreadSheet

Send email from Google SpreadSheet.

## Step 1: Create a spreadsheet

The file must contains sheet "Data".

Within "Data", there must be 4 columns with title:
Receipient	| Subject |	Content |	Status

## Step 2: Create script

Click `Extensions` > `Apps Script`

```
/**
 * Send Emails from sheet "Data"
 * Data should be put in column "Receipient", "Subject", "Content"
 * Status of the mailing process will be updated in column "Status"
 */
function sendMail() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
  var lr = sh.getLastRow();
  var data = sh.getRange('A1:D' + lr).getValues();
  var i = 1;
  data.forEach(row => {
    if(i>1){
      console.log('send mail to '+row[0]+', title: '+row[1]);
      GmailApp.sendEmail(row[0],row[1],row[2]);
      sh.getRange(i, 4).setValue('Sent');
    }
    i ++;
  })
}
```

## Step 3: Update data

Paste your real data set.
Then run.
Voila!
