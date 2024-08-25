import * as THREE from 'three';

function main() {
    const canvas = document.getElementById('c');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    const fov = 75 // field of view - in this case 75 degrees in the vertical dimension
    const aspect = 2 // the canvas default 300 X 150 pixels which makes the aspect ration 300/150 or 2
    const near = 0.1
    const far = 5 // near and far represent the space in front of the camera that will be rendered. Anything before that range or after that range will be clipped (not drawn)
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2;

    const scene = new THREE.Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshBasicMaterial({color: 0x000000});

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    renderer.render(scene, camera);
}

main();