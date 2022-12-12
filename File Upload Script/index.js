const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "9402e871-8b5e-4ac2-80ae-18028883cab7",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/9402e871-8b5e-4ac2-80ae-18028883cab7",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TUC6IE5WV/20221212/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20221212T140112Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEI///////////wEaDF+L8OFJueFK/Rrj4CLkAdQn5i9h4h3XsAW7HcLbflVl4AuEtW/7uKZanmfg+duBcs1w6VBALS+Jveqz5Vds4PWUwwuMn5OBEnN7pjXjJiZraSlP1ZBnER67G4FdfnqRwl03X4NZUM/mImYiQ4kKmLhYv7W0BY7L1trKaRSITsp3ll1CHzDMKQVg28pTr1BQpDC8E8JDcXhC+yyVjgWE1JtbctEwUgMBzc3mzjVrj8faSEG47qOuLJGp/2NH20CDr1dGIeMzjXpcfNuOvMvuwAStPHbYazLq+o3nljcRNNCHEcLPcKpA0u/9wLm03uZSUWtmoCio6NycBjItFdaWaqrxalkqS4FnqXT9+6OYrhPwF74GmJM8y7ApJx7b7Q3ar2W8N9gyG5bi",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0xMlQxNTowMToxMloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC85NDAyZTg3MS04YjVlLTRhYzItODBhZS0xODAyODg4M2NhYjcifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRVQzZJRTVXVi8yMDIyMTIxMi9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMjEyMTJUMTQwMTEyWiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFSS8vLy8vLy8vLy8vd0VhREYrTDhPRkp1ZUZLL1JyajRDTGtBZFFuNWk5aDRoM1hzQVc3SGNMYmZsVmw0QXVFdFcvN3VLWmFubWZnK2R1QmNzMXc2VkJBTFMrSnZlcXo1VmRzNFBXVXd3dU1uNU9CRW5ON3BqWGpKaVpyYVNsUDFaQm5FUjY3RzRGZGZucVJ3bDAzWDROWlVNL21JbVlpUTRrS21MaFl2N1cwQlk3TDF0ckthUlNJVHNwM2xsMUNIekRNS1FWZzI4cFRyMUJRcERDOEU4SkRjWGhDK3l5VmpnV0UxSnRiY3RFd1VnTUJ6YzNtempWcmo4ZmFTRUc0N3FPdUxKR3AvMk5IMjBDRHIxZEdJZU16alhwY2ZOdU92TXZ1d0FTdFBIYllhekxxK28zbmxqY1JOTkNIRWNMUGNLcEEwdS85d0xtMDN1WlNVV3Rtb0NpbzZOeWNCakl0RmRhV2FxcnhhbGtxUzRGbnFYVDkrNk9ZcmhQd0Y3NEdtSk04eTdBcEp4N2I3UTNhcjJXOE45Z3lHNWJpIn1dfQ==",
          "X-Amz-Signature": "b4320e3ed6ef4c608454dbe790c962075477cf6bea4bed655a6f9d92c4cb4182"
      }
  }
}
const form = new formData();

Object
  .entries(contactsPost.uploadForm.fields)
  .forEach((kv => {
    form.append(kv[0], kv[1]);
  }))
//3d4dd041-72f6-40bd-bdc6-91745577f55e
form.append('Content-Type', 'application/text');
form.append('file', fs.readFileSync('./mapQuoteArray'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba