# Luhn checksum validate/generate

You need to validate and generate Luhn check digits for payment cards or internal IDs. I wrote this in plain TypeScript using only the standard library. There are no external packages to install and no network calls to make. Keeping dependencies out of your bundle matters when you are optimizing for latency and token costs.

```
luhn.ts
```
Look at the test file sitting right next to the implementation. It provides concrete usage examples so you can get back to shipping.