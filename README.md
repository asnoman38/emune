emune
=====

A basic JavaScript [key mirror]() / enum utility.

> [`mune`](https://www.npmjs.com/package/mune) was taken. Kudos!


## Usage

```bash
$ npm install mune
```

```js
import emune from 'emune'

// Using an Array of keys
console.log(
  emune(['blackhawks', 'islanders', 'bruins'])
) // => {blackhawks: 'blackhawks', islanders: 'islanders', bruins: 'bruins'}

// Using an Object
console.log(
  emune({cubs: null, mets: null, 'red sox': null})
) // => {cubs: 'cubs', mets: 'mets', 'red sox': 'red sox'}
```

## Tests

```bash
$ npm t
```
