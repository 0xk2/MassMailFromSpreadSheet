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
