const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "1ad1b379-ab58-4d1f-8f0f-f266e47f568b",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/1ad1b379-ab58-4d1f-8f0f-f266e47f568b",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TX4L2ZLOT/20230219/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20230219T104816Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEAQaDGlMtxNtc1kidLeN+iLkAbcubFUtutWZdVKsCCKkv4ceZ2NZ1uhgxBwD+84oexDAliwux47ClIcmL2FGamzU+rwxctgf5RNjYupSqEOuxLnSJq8LijAnb0Xti7zLV4NxjF+UvSDip6wrkv67ftUYCxvCtz3JG28spyar1EryWzbUOVOxzyxJ6PSpeNXkm7M1fBLuQlmMUSjqsMaZHhTsFN629JHRPwGdVx6Oy2+zLH3tV4Ufg+lJIH3oD9QPJ7MbErwzcWkUGL1z0DfqGpYrBPba8IoLYuA8xePYSK/T+6uZfu5siWWeQMCkK5jp8XRjzOTaVSjv/MefBjItPQArG8xNDm9kR1BGFyF6k0adfZ5QpDNYLmMSbOvlMIWmyuNa/vVerAkQEurf",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wMi0xOVQxMTo0ODoxNloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC8xYWQxYjM3OS1hYjU4LTRkMWYtOGYwZi1mMjY2ZTQ3ZjU2OGIifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRYNEwyWkxPVC8yMDIzMDIxOS9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzAyMTlUMTA0ODE2WiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFQVFhREdsTXR4TnRjMWtpZExlTitpTGtBYmN1YkZVdHV0V1pkVktzQ0NLa3Y0Y2VaMk5aMXVoZ3hCd0QrODRvZXhEQWxpd3V4NDdDbEljbUwyRkdhbXpVK3J3eGN0Z2Y1Uk5qWXVwU3FFT3V4TG5TSnE4TGlqQW5iMFh0aTd6TFY0TnhqRitVdlNEaXA2d3JrdjY3ZnRVWUN4dkN0ejNKRzI4c3B5YXIxRXJ5V3piVU9WT3h6eXhKNlBTcGVOWGttN00xZkJMdVFsbU1VU2pxc01hWkhoVHNGTjYyOUpIUlB3R2RWeDZPeTIrekxIM3RWNFVmZytsSklIM29EOVFQSjdNYkVyd3pjV2tVR0wxejBEZnFHcFlyQlBiYThJb0xZdUE4eGVQWVNLL1QrNnVaZnU1c2lXV2VRTUNrSzVqcDhYUmp6T1RhVlNqdi9NZWZCakl0UFFBckc4eE5EbTlrUjFCR0Z5RjZrMGFkZlo1UXBETllMbU1TYk92bE1JV215dU5hL3ZWZXJBa1FFdXJmIn1dfQ==",
          "X-Amz-Signature": "27af72d0525120fa46f62e726560bced118ced6f16e87e3e5be572241dc09412"
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
form.append('file', fs.readFileSync('../PDFs/Quote Template - UK.pdf'));
// form.append('file', fs.readFileSync('./mapQuotePdfInputs'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba