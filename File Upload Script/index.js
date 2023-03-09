const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "993f31b4-f1f5-440c-867b-bd856dee16c2",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/993f31b4-f1f5-440c-867b-bd856dee16c2",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TXDJOS5EZ/20230309/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20230309T105004Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzELT//////////wEaDJ5ZHUMXGQFB5N47QyLkAYzqcUCGQJDFkMiFOGXmqQKfCBLJlIG4NoDAmVjQ6+w7gNJTr+lJ64A9RYLu/PsirD6BFmF/DUGwRWqWhPRPsLImZPDxI123Bw1slXvAZ7/Bo5w0aRqywBpAeajOHAyr39K64efadlaUXM3KkTERtS7BLNA//hbd9EXbtP5bWvruogPelt7JGJNAUAljuQrJB8fnimdangfOE+WzE/AFSjOIclr1FllsylDbJntVqNWNhhaOBssmcgCxh61/4vmpscsJ98wKjhgnxF8vjS9jNwGTUhwgeytGbHDioC0Pqt5jdRBTqCjc86agBjItuZVSY8lFI883roCwPi2WRfPm0YicTqoR9Kn8UAyvEEiT32CcxeQGGNhB1Jg4",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wMy0wOVQxMTo1MDowNFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC85OTNmMzFiNC1mMWY1LTQ0MGMtODY3Yi1iZDg1NmRlZTE2YzIifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRYREpPUzVFWi8yMDIzMDMwOS9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzAzMDlUMTA1MDA0WiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFTFQvLy8vLy8vLy8vd0VhREo1WkhVTVhHUUZCNU40N1F5TGtBWXpxY1VDR1FKREZrTWlGT0dYbXFRS2ZDQkxKbElHNE5vREFtVmpRNit3N2dOSlRyK2xKNjRBOVJZTHUvUHNpckQ2QkZtRi9EVUd3UldxV2hQUlBzTEltWlBEeEkxMjNCdzFzbFh2QVo3L0JvNXcwYVJxeXdCcEFlYWpPSEF5cjM5SzY0ZWZhZGxhVVhNM0trVEVSdFM3QkxOQS8vaGJkOUVYYnRQNWJXdnJ1b2dQZWx0N0pHSk5BVUFsanVRckpCOGZuaW1kYW5nZk9FK1d6RS9BRlNqT0ljbHIxRmxsc3lsRGJKbnRWcU5XTmhoYU9Cc3NtY2dDeGg2MS80dm1wc2NzSjk4d0tqaGdueEY4dmpTOWpOd0dUVWh3Z2V5dEdiSERpb0MwUHF0NWpkUkJUcUNqYzg2YWdCakl0dVpWU1k4bEZJODgzcm9Dd1BpMldSZlBtMFlpY1Rxb1I5S244VUF5dkVFaVQzMkNjeGVRR0dOaEIxSmc0In1dfQ==",
          "X-Amz-Signature": "b213176c6385e533ad118ae43ee48eece81456680a6b5b224156a97b4b08eb7e"
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
form.append('Content-Type', 'application/pdf');
form.append('file', fs.readFileSync('../PDFs/Cert Template - UK.pdf'));
// form.append('file', fs.readFileSync('./mapFinalBoundQuotes'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba