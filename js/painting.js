var Painting = function() {


    this.geometry = new THREE.PlaneGeometry(540, 960);
    this.material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/rel.png"),
        transparent: true,
        opacity: 1.0,
        // side: THREE.DoubleSide
        alphaTest: 0.5
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    scene.add(this.mesh);

    var geometry = new THREE.PlaneGeometry(960, 720);
    var material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/sunset2.png"),
        transparent: true,
        opacity: 0.5,
        // side: THREE.DoubleSide
        alphaTest: 0.5,
        depthTest: false
    });
    this.background = new THREE.Mesh(geometry, material);
    this.background.position.z -= 1000;
    this.background.scale.multiplyScalar(3.5);

    scene.add(this.background);



}