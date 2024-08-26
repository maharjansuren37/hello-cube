import * as THREE from 'three';

// Four elements: scene, object(geometry), camera, renderer, 
// Mesh = geometry(the shape) and material(how it looks)

// element to render => canvas 
const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// mesh (object) = geometry + material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'lightblue'});
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true});
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7
// mesh.position.y = -0.6;
// mesh.position.z = 1;

mesh.position.set(0.7, -0.6, -1);
mesh.rotation.set(1, 1, 1);

scene.add(mesh);

// camera
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

// function render(time) {
//     time *= 0.001;

//     mesh.rotation.x = time;
//     mesh.rotation.y = time;

//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
// }

// requestAnimationFrame(render);

// function main() {
//     const canvas = document.getElementById('c');
//     const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
//     const fov = 75 // field of view - in this case 75 degrees in the vertical dimension *with websites 35 is recommended
//     const aspect = 2 // the canvas default 300 X 150 pixels which makes the aspect ration 300/150 or 2
//     const near = 0.1
//     const far = 5 // near and far represent the space in front of the camera that will be rendered. Anything before that range or after that range will be clipped (not drawn)
//     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

//     camera.position.z = 2;

//     const scene = new THREE.Scene();

//     const boxWidth = 1;
//     const boxHeight = 1;
//     const boxDepth = 1;
//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

//     const material = new THREE.MeshBasicMaterial({color: 0x000000});

//     const cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     renderer.render(scene, camera);
// }

// main();