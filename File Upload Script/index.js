const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "0376bf70-9f43-49dc-9c63-1161db6347e5",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-lockton-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/0376bf70-9f43-49dc-9c63-1161db6347e5",
          "bucket": "client-lockton-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TRHVHNZMX/20230326/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20230326T152016Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEFEaDLkHv7gUps3sPV015iLkAZJVfSRaNbTx/BzHo+ULDQADxxM0lfxN/KcwmXzo/Cx4H9Qe168Kj7XtpOEVLl2toNQD7IMnc/yoIYUUvND3lB33J06CL6w0/G9TGwY8jyLwpaxKPU9O3y4TjvFq3rMvI2JAce5MziVLO0ezUO7af57uqx1MF4mDik3itFeUnip2CR1xRgbB1mQBzGStt/IV7BR8PCthJCdOffqCtAODxA2sJ9ocfVrD5y8UQ6SOnqpRWxW7yYBhxpABPR1z4Ywr7jB72VgiW+AuJDySANDb17IcRYJqLZLCwgEv5y5RG1GQ4TTSJyiwxYGhBjItkWxFcWAEKrvo/TMTEnnPHsBn4PUhkXc0HK2F07uh3TFb6jfDLrS4xo/ge80a",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wMy0yNlQxNjoyMDoxNloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC8wMzc2YmY3MC05ZjQzLTQ5ZGMtOWM2My0xMTYxZGI2MzQ3ZTUifSx7ImJ1Y2tldCI6ImNsaWVudC1sb2NrdG9uLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRSSFZITlpNWC8yMDIzMDMyNi9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzAzMjZUMTUyMDE2WiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFRkVhRExrSHY3Z1VwczNzUFYwMTVpTGtBWkpWZlNSYU5iVHgvQnpIbytVTERRQUR4eE0wbGZ4Ti9LY3dtWHpvL0N4NEg5UWUxNjhLajdYdHBPRVZMbDJ0b05RRDdJTW5jL3lvSVlVVXZORDNsQjMzSjA2Q0w2dzAvRzlUR3dZOGp5THdwYXhLUFU5TzN5NFRqdkZxM3JNdkkySkFjZTVNemlWTE8wZXpVTzdhZjU3dXF4MU1GNG1EaWszaXRGZVVuaXAyQ1IxeFJnYkIxbVFCekdTdHQvSVY3QlI4UEN0aEpDZE9mZnFDdEFPRHhBMnNKOW9jZlZyRDV5OFVRNlNPbnFwUld4Vzd5WUJoeHBBQlBSMXo0WXdyN2pCNzJWZ2lXK0F1SkR5U0FORGIxN0ljUllKcUxaTEN3Z0V2NXk1UkcxR1E0VFRTSnlpd3hZR2hCakl0a1d4RmNXQUVLcnZvL1RNVEVublBIc0JuNFBVaGtYYzBISzJGMDd1aDNURmI2amZETHJTNHhvL2dlODBhIn1dfQ==",
          "X-Amz-Signature": "07ec5d70a0f1de2db7d419f890629920a19c839bbfc9eb0f0b47fa9c8acca577"
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
// form.append('file', fs.readFileSync('../PDFs/Cert Template - UK.pdf'));
form.append('file', fs.readFileSync('./mapPolicyPdfInputs'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba