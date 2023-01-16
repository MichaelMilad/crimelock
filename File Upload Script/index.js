const fetch = require('node-fetch');
const fs = require('fs');
const formData = require('form-data');

const contactsPost = {
  "uploadRef": "4b4e271b-c878-46cc-9d18-8e6b1993ff40",
  "uploadForm": {
      "url": "https://s3.ca-central-1.amazonaws.com/client-bestinsurance-trufla-sta",
      "fields": {
          "Key": "trudocs/transient/external/4b4e271b-c878-46cc-9d18-8e6b1993ff40",
          "bucket": "client-bestinsurance-trufla-sta",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": "ASIA246AQD4T7ZJEZYDF/20230105/ca-central-1/s3/aws4_request",
          "X-Amz-Date": "20230105T121014Z",
          "X-Amz-Security-Token": "FwoGZXIvYXdzEM7//////////wEaDLbEryDt/peuZW38OiLkAdm4EN71WQ4cJl19tGkKGczwatZ2kP0B1JRLOB/wafgLb3Vj7oxe1CnlxSKHl2zCQz6cJJ9hxroti+tP5v1AMv/yBK1618nJ09GLhNds1/nUkUNHE7SA0MN4vHapywFVNe+LwX/6/x4e08bLTnne39wuVM9N2DyvUp+kPG0JPUW0Nwy/VDjmNVxGB1hzBzSgioRqJVVzjm60A+CJakAo3anX/fjuQaeo+Hx8cLpZiMr44Uuem1+OAURapKxyopiE+O5DKsCKbECyJMl/B3foiN4RWR7BLNGe+WlzJYYGLs7G4Po6nSim/NqdBjIt/JH7XkhubFa3dYghPwd20cCpAcmjHZ7WgDgJQJ8iOqMRa4l4IsiZsUbWwe0g",
          "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wMS0wNVQxMzoxMDoxNFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJLZXkiOiJ0cnVkb2NzL3RyYW5zaWVudC9leHRlcm5hbC80YjRlMjcxYi1jODc4LTQ2Y2MtOWQxOC04ZTZiMTk5M2ZmNDAifSx7ImJ1Y2tldCI6ImNsaWVudC1iZXN0aW5zdXJhbmNlLXRydWZsYS1zdGEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBU0lBMjQ2QVFENFQ3WkpFWllERi8yMDIzMDEwNS9jYS1jZW50cmFsLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzAxMDVUMTIxMDE0WiJ9LHsiWC1BbXotU2VjdXJpdHktVG9rZW4iOiJGd29HWlhJdllYZHpFTTcvLy8vLy8vLy8vd0VhRExiRXJ5RHQvcGV1WlczOE9pTGtBZG00RU43MVdRNGNKbDE5dEdrS0djendhdFoya1AwQjFKUkxPQi93YWZnTGIzVmo3b3hlMUNubHhTS0hsMnpDUXo2Y0pKOWh4cm90aSt0UDV2MUFNdi95QksxNjE4bkowOUdMaE5kczEvblVrVU5IRTdTQTBNTjR2SGFweXdGVk5lK0x3WC82L3g0ZTA4YkxUbm5lMzl3dVZNOU4yRHl2VXAra1BHMEpQVVcwTnd5L1ZEam1OVnhHQjFoekJ6U2dpb1JxSlZWemptNjBBK0NKYWtBbzNhblgvZmp1UWFlbytIeDhjTHBaaU1yNDRVdWVtMStPQVVSYXBLeHlvcGlFK081REtzQ0tiRUN5Sk1sL0IzZm9pTjRSV1I3QkxOR2UrV2x6SllZR0xzN0c0UG82blNpbS9OcWRCakl0L0pIN1hraHViRmEzZFlnaFB3ZDIwY0NwQWNtakhaN1dnRGdKUUo4aU9xTVJhNGw0SXNpWnNVYld3ZTBnIn1dfQ==",
          "X-Amz-Signature": "5738994f39927a0d9e8b1a5af998c9e223778fcc0db7fceb5c4c8cdf8fbb8f49"
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
form.append('file', fs.readFileSync('./mapReferralReasons'));

fetch(contactsPost.uploadForm.url, { method: 'POST', body: form })
  .then(res => res.text())
  .then(body => { console.log(body) })
  .catch(error => { console.log(error) })


//AU => "key": "46763ab1-b23e-4bde-9c15-654e13e5a720"
// Other =>  52dc49c4-0661-4bfc-a77c-cbda995dceba