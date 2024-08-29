## Clickjacking demo

Demonstrates an application that is vulnerable to the _clickjacking_ attack, then shows how you can secure the application against it.

### Installing

Within this subdirectory, run `npm install`

### Vulnerable mode

`npm run start-vulnerable`

Browse to http://localhost:8080/ and click the "Redeem" button.
In the JavaScript Console, observe money being transferred from your account.

### Secured mode

`npm run start-secured`

Browse to http://localhost:8080/ and click the "Redeem" button.
In the JavaScript Console, observe that the browser has blocked the iframe document from loading thanks to the additional headers.


