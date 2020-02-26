# jsExtract
jsExtract is a javascript function which mimics the `extract()` function in PHP.

## The jsExtract Function

```
const jsExtract = (myObject) => {

  for (let entry of Object.entries(myObject)) {

    window[entry[0]] = entry[1];
  }
}
```
