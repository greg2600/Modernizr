/*!
{
  "name": "Web Cryptography",
  "property": "cryptography",
  "caniuse": "cryptography",
  "tags": ["crypto"],
  "authors": ["roblarsen"],
  "notes": [{
    "name": "W3C Editor's Draft Spec",
    "href": "https://www.w3.org/TR/WebCryptoAPI/"
  }]
}
!*/
/* DOC
Detects support for the cryptographic functionality available under window.crypto.subtle
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  var crypto = prefixed('crypto', window);
  Modernizr.addTest('crypto', !!prefixed('subtle', crypto));
});
