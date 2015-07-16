var test = require('tape')
var Csg = require('csg')

var csgToMesh = require('./')

test('cube to mesh', function (t) {

  var cube = Csg.cube({
    center: [0, 0, 0],
    radius: 1
  })
  var expected = {
    positions: [
      [ -1, -1, -1 ],
      [ -1, -1, 1 ],
      [ -1, 1, 1 ],
      [ -1, 1, -1 ],
      [ 1, -1, -1 ],
      [ 1, 1, -1 ],
      [ 1, 1, 1 ],
      [ 1, -1, 1 ],
      [ -1, -1, -1 ],
      [ 1, -1, -1 ],
      [ 1, -1, 1 ],
      [ -1, -1, 1 ],
      [ -1, 1, -1 ],
      [ -1, 1, 1 ],
      [ 1, 1, 1 ],
      [ 1, 1, -1 ],
      [ -1, -1, -1 ],
      [ -1, 1, -1 ],
      [ 1, 1, -1 ],
      [ 1, -1, -1 ],
      [ -1, -1, 1 ],
      [ 1, -1, 1 ],
      [ 1, 1, 1 ],
      [ -1, 1, 1 ]
    ],
    cells: [
      [ 0, 1, 2 ],
      [ 0, 2, 3 ],
      [ 4, 5, 6 ],
      [ 4, 6, 7 ],
      [ 8, 9, 10 ],
      [ 8, 10, 11 ],
      [ 12, 13, 14 ],
      [ 12, 14, 15 ],
      [ 16, 17, 18 ],
      [ 16, 18, 19 ],
      [ 20, 21, 22 ],
      [ 20, 22, 23 ]
    ]
}
  var actual = csgToMesh(cube)
  t.deepEqual(actual, expected, 'mesh is correct')
  t.end()
})
