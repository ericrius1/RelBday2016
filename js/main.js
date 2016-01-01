
var camera, renderer, scene, controls, clock, textureLoader, raycaster, mouse, stats;
var painting, fluteStream;

var controlsEnabled = false;
// var controlsEnabled = true;

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

  stats = new Stats();
  document.body.appendChild(stats.domElement);

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
  stats.update();
  // if (controlsEnabled) {
  //   controls.update();
  // }

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
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  var intersections = raycaster.intersectObjects([painting.background]);
  // fluteStream.flutter(event);
  if(intersections.length > 0) {
    fluteStream.toTarget(intersections[0].point);
  }

}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mouseup', onMouseUp, false);


