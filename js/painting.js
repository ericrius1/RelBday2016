var Painting = function() {


    this.geometry = new THREE.PlaneBufferGeometry(540, 960);
    this.material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/arielle.jpg")
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    scene.add(this.mesh);

    window.mesh = this.mesh
}