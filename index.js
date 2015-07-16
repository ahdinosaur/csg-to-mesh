var reindex = require('mesh-reindex')

module.exports = csgToMesh

// convert from CSG solid to simplical complex mesh
// original source: https://github.com/thibauts/csg.js/blob/4964e9907c4750d497852a58769c08fe0e247916/tests/viewer.js#L8-L26
function csgToMesh (csg) {
  var vertices = []

  csg.toPolygons().forEach(function(polygon) {
    var indices = polygon.vertices
    for (var i = 2; i < indices.length; i++) {
      vertices.push(indices[0], indices[i - 1], indices[i])
    }
  })

  var mesh = reindex(
    vertices.map(vertexToPosArray)
  )

  return mesh
}

function vertexToPosArray (vertex) {
  return [vertex.pos.x, vertex.pos.y, vertex.pos.z]
}
