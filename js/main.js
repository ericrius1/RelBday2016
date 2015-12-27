
var camera, renderer, scene, controls, clock, textureLoader, raycaster, mouse;
var painting;

var controlsEnabled = true;

init();
animate();

function init() {

  var w = window.innerWidth;
  var h = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
  camera.position.set(0, 0, 3000)

  scene = new THREE.Scene();
  textureLoader = new THREE.TextureLoader();

  var dpr = window.devicePixelRatio || 1;
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();

  clock = new THREE.Clock();

  if (controlsEnabled) {
    controls = new THREE.OrbitControls(camera);
  }

  painting = new Painting();


}


function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  if (controlsEnabled) {
    controls.update();
  }

}


function onMouseDown() {
  console.log("YAAAR")
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    var intersections = raycaster.intersectObjects(scene.children);
    console.log(intersections);
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousedown', onMouseDown, false);


