import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// to add textures or images
const loader = new THREE.TextureLoader();

const geometry = new THREE.IcosahedronGeometry(1, 16);

const material = new THREE.MeshStandardMaterial({ 
    // color: 'lightblue',
    map: loader.load('/textures/moonmap4k.jpg'),
    // flatShading: true
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// if you need wireframe
// const wireMat = new THREE.MeshBasicMaterial({
//     color: 'white',
//     wireframe: true
// });

// const wireMesh = new THREE.Mesh(geometry, wireMat);

// mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight();
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);

scene.add(hemiLight);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);

    // mesh.rotation.x = t + 0.0001;
    mesh.rotation.y += 0.001;

    renderer.render(scene, camera);
    controls.update();
}

animate();