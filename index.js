var shallowEqual = require('shallowequal')

module.exports = csgToMesh

// convert from CSG solid to simplical complex mesh
// original source: https://github.com/thibauts/csg.js/blob/4964e9907c4750d497852a58769c08fe0e247916/tests/viewer.js#L8-L26
function csgToMesh (csg) {
  var vertices = []
  var triangles = []

  csg.toPolygons().forEach(function(polygon) {
    var indices = polygon.vertices.map(function (vertex) {
      return addVertex(vertices, vertex)
    })

    for (var i = 2; i < indices.length; i++) {
      triangles.push(
        [indices[0], indices[i - 1], indices[i]]
      )
    }
  })

  var mesh = {
    positions: vertices.map(vertexToPosArray),
    cells: triangles
  }

  return mesh
}

function vertexToPosArray (vertex) {
  return [vertex.pos.x, vertex.pos.y, vertex.pos.z]
}

function addVertex (vertices, vertex) {
  for (var i = 0; i < vertices.length; i++) {
    if (shallowEqual(vertices[i], vertex)) {
      return i
    }
  }
  vertices.push(vertex)
  return vertices.length - 1
}
