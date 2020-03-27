let BABYLON = require('babylonjs')

var canvas = document.getElementById('renderCanvas') // Get the canvas element
var engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

export const createScene = function() {

    // Create the scene space
    var scene = new BABYLON.Scene(engine)

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene)
    camera.attachControl(canvas, true)

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene)
    var light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), scene)

    // Add and manipulate meshes in the scene
    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene)

    return scene
}