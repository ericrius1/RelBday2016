var FluteStream = function() {
  this.particleGroup = new SPE.Group({
    texture: {
      value: textureLoader.load("../assets/smokeparticle.png")
    },
    blending: THREE.NormalBlending,
    maxParticleCount: 10000
  });

  this.emitter = new SPE.Emitter({
    maxAge: 5,
    position: {
      value: new THREE.Vector3(53, -36, 10)
    },
    size: {
      value: [0, 100, 0]
    },
    particleCount: 1000,
    velocity: {
      spread: new THREE.Vector3(10, 10, 0)
    },
    acceleration: {
      spread: new THREE.Vector3(4, 4, 4)
    },
    color: {
        value: [getRandomColor(), getRandomColor()]
    }
  });
  this.particleGroup.addEmitter(this.emitter);

  scene.add(this.particleGroup.mesh);

}

FluteStream.prototype.setPosition = function(newPosition) {
    this.emitter.position.value = newPosition;

}

FluteStream.prototype.update = function() {
  this.particleGroup.tick();
}