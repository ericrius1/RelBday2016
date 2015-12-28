var FluteStream = function() {
  this.particleGroup = new SPE.Group({
    texture: {
      value: textureLoader.load("../assets/smokeparticle.png")
    },
    blending: THREE.AdditiveBlending,
    maxParticleCount: 1000000,
  });

  var emitterProps = {
    maxAge: {
      value: 50
    },
    position: {
      value: new THREE.Vector3(57, -36, 0)
    },
    size: {
      value: [100, 100, 100]
    },
    wiggle: {
      value: 100,
    },
    drag: {
      value: 1,
    },
    rotation: {
      angle: Math.PI * 13,
      angleSpread: Math.PI * 3
    },
    opacity: {
      value: [0.0, 0.5, 0.1]
    },
    angle: {
      value: [0, Math.PI, Math.PI * 2]
    },
    particleCount: 100000,
    velocity: {
      value: new THREE.Vector3(50, 50, 0),
        spread: new THREE.Vector3(10, 10, 0)
    },
    // acceleration: {
    //   spread: new THREE.Vector3(4, 4, 4)
    // },
    color: {
      value: [getRandomColor(), getRandomColor()]
    }
  };

  this.emitter = new SPE.Emitter(emitterProps);
  this.particleGroup.addEmitter(this.emitter);

  emitterProps.position.value.x -= 10;
  emitterProps.color = {value: [getRandomColor(), getRandomColor()]}
  var emitter = new SPE.Emitter(emitterProps);
  this.particleGroup.addEmitter(emitter);

  this.particleGroup.mesh.frustumCulled = false;
  scene.add(this.particleGroup.mesh);

}

FluteStream.prototype.setPosition = function(newPosition) {
  this.emitter.position.value = newPosition;

}

FluteStream.prototype.update = function() {
  this.particleGroup.tick();
}