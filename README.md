# humba-mail-lib
> NodeJS lib for sending mails via sendgrid.

## Get started
- create .env with the SENDGRID_API_KEY
- include the lib in your code
```javascript
const mail = require('./humba-mail.js');
```

## Functions
### Send verification mail
```javascript
mail.sendVerificationMail("Vorname Nachname", "vorname.nachname@humboldtschule-berlin.eu", "https://api.hu.mba/email/verify/be93249169be7b2519336245be93249169be7b2519336245")
```
