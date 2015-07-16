var test = require('tape')
var Csg = require('csg')

var csgToMesh = require('./')

test('cube to mesh', function (t) {
  var cube = Csg.cube({
    center: [0, 0, 0],
    radius: 1
  })
  var mesh = csgToMesh(cube)
  t.ok(mesh)
  t.end()
})
