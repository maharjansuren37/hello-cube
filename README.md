# Learn Three.js

## 1. Create Cube

## 2. Transform objects
Before animating our scene, we need to know how to transform objects in our scene. We have already done that with the camera by moving it backward using `camera.position.z = 3`.

There are four porperties to transform objects in our scene
 - position (to move the object)
 - scale (to resize the object)
 - rotation (to rotate the object)
 - quaternion (to also rotate the object)

We are going to use Class `Object3D > PerspectiveCamera or Mesh`

`mesh.position.z = 1`
- the distance of 1 unit is arbitrary too.
- decide depending on the situation

You can put the mesh position code before the render function otherwise it will not work.

To get the length of the vector which is the distance centre of the scene and the object. 
    `console.log(mesh.position.length());` 

To know the distance from the camera to the object
    `console.log(mesh.position.distanceTo(camera.position));`

To normalize the value
`mesh.position.normalize()`