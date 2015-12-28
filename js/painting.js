var Painting = function() {


    this.geometry = new THREE.BoxGeometry(540, 960, 500);
    this.material = new THREE.MeshBasicMaterial({
        map: textureLoader.load("assets/rel.png"),
        transparent: true,
        // opacity: .4
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = -100
    scene.add(this.mesh);


    var geometry = new THREE.BoxGeometry(540, 960, 500);
    var material = new THREE.MeshBasicMaterial({
        // map: textureLoader.load("assets/rel.png"),
        color: 0x0000ff,
        transparent: true,
        opacity: .4,
        // side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geometry,material);
    mesh.position.z -=100;
    mesh.rotation.y = Math.PI/2;

    // scene.add(mesh);


}