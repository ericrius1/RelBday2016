var Painting = function() {


    this.geometry = new THREE.PlaneGeometry(540, 960);
    this.material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/rel.png"),
        transparent: true,
        opacity: 1,
        // side: THREE.DoubleSide
        alphaTest: 0.5
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    scene.add(this.mesh);

}