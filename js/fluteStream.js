var FluteStream = function() {
  this.particleGroup = new SPE.Group({
    texture: {
      value: textureLoader.load("../assets/smokeparticle.png")
    },
    blending: THREE.NormalBlending,
    maxParticleCount: 1000000,
  });

  this.emitter = new SPE.Emitter({
    maxAge: {
      value: 10
    },
    position: {
      value: new THREE.Vector3(57, -36, 0)
    },
    size: {
      value: [100, 100, 100]
    },
    wiggle: {
      value: 30,
    },
    drag: {
      value: 1,
    },
    rotation: {
      angle: Math.PI * 4
    },
    angle: {
      value: [0, Math.PI, Math.PI * 2]
    },
    particleCount: 10000,
    velocity: {
      value: new THREE.Vector3(50, 0, 0),
        spread: new THREE.Vector3(10, 10, 0)
    },
    // acceleration: {
    //   spread: new THREE.Vector3(4, 4, 4)
    // },
    color: {
      value: [getRandomColor(), getRandomColor()]
    }
  });
  this.particleGroup.addEmitter(this.emitter);

  this.particleGroup.mesh.frustumCulled = false;
  scene.add(this.particleGroup.mesh);

}

FluteStream.prototype.setPosition = function(newPosition) {
  this.emitter.position.value = newPosition;

}

FluteStream.prototype.update = function() {
  this.particleGroup.tick();
}