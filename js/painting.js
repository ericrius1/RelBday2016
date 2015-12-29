var Painting = function() {


    this.geometry = new THREE.PlaneGeometry(540, 960);
    this.material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/rel3.png"),
        transparent: true,
        opacity: 1,
        // side: THREE.DoubleSide
        alphaTest: 0.5
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    scene.add(this.mesh);

    var geometry = new THREE.PlaneGeometry(960, 720);
    var material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/sunset2.png"),
        transparent: true,
        opacity: 1,
        // side: THREE.DoubleSide
        alphaTest: 0.5
    });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z -= 1000;
    mesh.scale.multiplyScalar(3.5);

    scene.add(mesh);



}