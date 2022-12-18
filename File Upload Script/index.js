const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "415ed63e-59cd-42e8-b470-a2893e81f6f4",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/415ed63e-59cd-42e8-b470-a2893e81f6f4",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TXMFO56HT/20221218/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20221218T112801Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEB0aDL1po2yXAXxOq07JQCLkATXBG7YclHBx4Qp8N6Lxibsml1zbg89TxpWuTxzSE+3QMLu156Viw4buxezfLJGbVDqGZHvSpP1cR+D/jcGdNoQK1x7/9PFtM0ch8arOGE2wyCkb/VRnq5Jx5hk0vy6fwuedVXTZyKAK8PI6/ItYwgDfzLjpfOCP4KsRMMkPVtjmZknQhkCAXJkOthE2ctcmiZvMoc1I4W/RvXFHnhQ0RDlUazfdfCOvMgK/v6HScYGvsXOXEC5D9hhUy8TevNt8L3rW8RzqSkI+plH8LJjeDqx6p20Bn95JUpfc38etXYPqnamnxyjB8vucBjItLfoludOMwhlrK+a+/Zlr+DRFCdoa9+kdelsx3nNBV1H4p5ETmRs1lmLFO45o",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMi0xMi0xOFQxMjoyODowMVoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC80MTVlZDYzZS01OWNkLTQyZTgtYjQ3MC1hMjg5M2U4MWY2ZjQifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRYTUZPNTZIVC8yMDIyMTIxOC9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMjEyMThUMTEyODAxWiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFQjBhREwxcG8yeVhBWHhPcTA3SlFDTGtBVFhCRzdZY2xIQng0UXA4TjZMeGlic21sMXpiZzg5VHhwV3VUeHpTRSszUU1MdTE1NlZpdzRidXhlemZMSkdiVkRxR1pIdlNwUDFjUitEL2pjR2ROb1FLMXg3LzlQRnRNMGNoOGFyT0dFMnd5Q2tiL1ZSbnE1Sng1aGswdnk2Znd1ZWRWWFRaeUtBSzhQSTYvSXRZd2dEZnpManBmT0NQNEtzUk1Na1BWdGptWmtuUWhrQ0FYSmtPdGhFMmN0Y21pWnZNb2MxSTRXL1J2WEZIbmhRMFJEbFVhemZkZkNPdk1nSy92NkhTY1lHdnNYT1hFQzVEOWhoVXk4VGV2TnQ4TDNyVzhSenFTa0krcGxIOExKamVEcXg2cDIwQm45NUpVcGZjMzhldFhZUHFuYW1ueHlqQjh2dWNCakl0TGZvbHVkT013aGxySythKy9abHIrRFJGQ2RvYTkra2RlbHN4M25OQlYxSDRwNUVUbVJzMWxtTEZPNDVvIn1dfQ==",
          "X-Amz-Signature": "f2d7999497fe3d44f2ab43a38151802d0dc4d3dc7923da755265b4f8c6f646cd"
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
form.append('file', fs.readFileSync('./mapCalcInputs'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba