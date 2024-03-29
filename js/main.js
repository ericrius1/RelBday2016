
var camera, renderer, scene, controls, clock;


var controlsEnabled = true;

init();
animate();

function init() {

  var w = window.innerWidth;
  var h = window.innerHeight;

  camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 10000);
  camera.position.set(0, 11, 1)

  scene = new THREE.Scene();

  var dpr = window.devicePixelRatio || 1;
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);

  clock = new THREE.Clock();

  if (controlsEnabled) {
    controls = new THREE.OrbitControls(camera);
  }

  var box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2));
  scene.add(box);

}


function animate() {

  requestAnimationFrame(animate);


  renderer.render(scene, camera);

  if (controlsEnabled) {
    controls.update();
  }

}


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}