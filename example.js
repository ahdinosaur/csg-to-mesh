var { CSG } = require('@jscad/csg')
var csgToMesh = require('./')

var cube = CSG.cube({
  center: [0, 0, 0],
  radius: [0.25, 0.5, 1]
})
var mesh = csgToMesh(cube)
console.log(JSON.stringify(mesh, null, 2))
