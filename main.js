import * as THREE from 'three'; // importing everything from three as THREE

/** We need three things to be able to display something in three.js; a scence, a camera, and a renderer **/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000) //field of view, aspect ratio, can't view after something this close, can't view if something's this far

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // setting size of the renderer
renderer.setAnimationLoop(animate); // this animation loop function will be called
renderer.setClearColor(0xffffff); // the default threejs background color is black, this makes it white
document.body.appendChild(renderer.domElement); // this adds the renderer element to the visible DOM

/** Now we need to add what we'll actually render **/

const geometry = new THREE.BoxGeometry(1,1,1); // 1,1,1 gets us a cube
const material = new THREE.MeshBasicMaterial( { color: 0x87CEEB } );
const cube = new THREE.Mesh(geometry, material);

scene.add(cube); // adding the cube to the scene

camera.position.z = 5; //how close you want the camera to the actual scene

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera) // you render the scene using your camera
}