
var camera, renderer, scene, controls, clock, textureLoader, raycaster, mouse;
var painting, fluteStream;

var controlsEnabled = false;

init();
animate();

function init() {

  var w = window.innerWidth;
  var h = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
  camera.position.set(0, 0, 1000)

  scene = new THREE.Scene();
  textureLoader = new THREE.TextureLoader();

  var dpr = window.devicePixelRatio || 1;
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setClearColor(0xff0000)

  document.body.appendChild(renderer.domElement);

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0;

  clock = new THREE.Clock();

  if (controlsEnabled) {
    controls = new THREE.OrbitControls(camera);
  }

  painting = new Painting();
  fluteStream = new FluteStream();


}


function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  if (controlsEnabled) {
    controls.update();
  }

  fluteStream.update();
}


function onMouseDown() {

  fluteStream.activateStream();
}
function onMouseUp() {
  fluteStream.deactivateStream();
}


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function onMouseMove(event) {
  fluteStream.flutter(event);

}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mouseup', onMouseUp, false);


