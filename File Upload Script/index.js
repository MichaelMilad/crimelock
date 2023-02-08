const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "a86fe496-e317-4842-862f-2e87f1773002",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/a86fe496-e317-4842-862f-2e87f1773002",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4TVAQ25PHZ/20230207/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20230207T211156Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEO///////////wEaDJClF9fFx4IQSLrKqiLkAdf/L1ZCu45Rl5p7kAFVu0Y/N2GlG+QO1w/TFIHJaNmW4dQIv0T/H0LDcSae32hWB9mWO47OkAwRU3tkODedP92mhYyUdrkWwqOPji99heDPOzmlS9dwe5ePlpKb5x9jStVefH7kyH2EnRdgmA0AZt+CgwG2xsDNmBkd6bcMTk8oftfU9eiJ4YfimkYLeuMPftSMy/KtD06cSJ8RNMAuBAiH8rN+hHlrASjfXOJeoILv37zYjNceeEwwHYe+fb3ws1GlqNmgohgup1f8nEVtz3pcTACnsK6inZ5qjq5nN115bh921yic/YqfBjItQyiUGXeswJWuRRwHZRoq1Z6466RaMex8yRkg71AeXkeiyyrp6BuASD8Mqz3n",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wMi0wN1QyMjoxMTo1NloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC9hODZmZTQ5Ni1lMzE3LTQ4NDItODYyZi0yZTg3ZjE3NzMwMDIifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFRWQVEyNVBIWi8yMDIzMDIwNy9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzAyMDdUMjExMTU2WiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFTy8vLy8vLy8vLy8vd0VhREpDbEY5ZkZ4NElRU0xyS3FpTGtBZGYvTDFaQ3U0NVJsNXA3a0FGVnUwWS9OMkdsRytRTzF3L1RGSUhKYU5tVzRkUUl2MFQvSDBMRGNTYWUzMmhXQjltV080N09rQXdSVTN0a09EZWRQOTJtaFl5VWRya1d3cU9Qamk5OWhlRFBPem1sUzlkd2U1ZVBscEtiNXg5alN0VmVmSDdreUgyRW5SZGdtQTBBWnQrQ2d3RzJ4c0RObUJrZDZiY01UazhvZnRmVTllaUo0WWZpbWtZTGV1TVBmdFNNeS9LdEQwNmNTSjhSTk1BdUJBaUg4ck4raEhsckFTamZYT0plb0lMdjM3ellqTmNlZUV3d0hZZStmYjN3czFHbHFObWdvaGd1cDFmOG5FVnR6M3BjVEFDbnNLNmluWjVxanE1bk4xMTViaDkyMXlpYy9ZcWZCakl0UXlpVUdYZXN3Sld1UlJ3SFpSb3ExWjY0NjZSYU1leDh5UmtnNzFBZVhrZWl5eXJwNkJ1QVNEOE1xejNuIn1dfQ==",
          "X-Amz-Signature": "e264cf5618335e0f52e20f5cbee3a4fd42181f6e08cee0a9fd4c515cc4b3e93f"
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
form.append('file', fs.readFileSync('../PDFs/Quote Template - US.pdf'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba