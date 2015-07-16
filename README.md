# csg-to-mesh

convert a [csg.js](https://npmjs.org/csg) model to a [simplicial complex](https://npmjs.org/simplicial-complex) [mesh](https://npmjs.org/browse/keyword/mesh).

## install

with [npm](https://npmjs.org), do:

```
npm i --save csg-to-mesh
```

## usage

```
var csg = require('csg')
var csgToMesh = require('csg-to-mesh')

var cube = csg.cube({
  center: [0, 0, 0],
  radius: [1, 2, 3]
})
var mesh = csgToMesh(cube)
console.log(JSON.stringify(mesh, null, 2))
```

## license

ISC
