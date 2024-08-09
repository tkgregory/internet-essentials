## Clickjacking

First run `npm install`

### Vulnerable mode

`npm run start-vulnerable`

Click the "Redeem" button and observe money being transferred from your account in the JavaScript Console.

### Secured mode

`npm run start-secure`

Open the JavaScript Console and observe that the browser has blocked the iframe document from loading because of the headers.


