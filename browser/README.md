## Clickjacking demo

Demonstrates an application that is vulnerable to the _clickjacking_ attack, then shows how you can secure the application against it.

### Installing

First run `npm install`

### Vulnerable mode

`npm run start-vulnerable`

Click the "Redeem" button and observe money being transferred from your account in the JavaScript Console.

### Secured mode

`npm run start-secure`

Open the JavaScript Console and observe that the browser has blocked the iframe document from loading thanks to the additional headers.


