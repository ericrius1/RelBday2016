var FluteStream = function() {
  this.particleGroupAdditive = new SPE.Group({
    texture: {
      value: textureLoader.load("./assets/smokeparticle.png")
    },
    blending: THREE.AdditiveBlending,
    maxParticleCount: 100000,
  });

  this.originalVelocity = new THREE.Vector3(50, 50, 0);
  this.position = new THREE.Vector3(-9, -12, 1);
  this.direction = new THREE.Vector3();

  var emitterProps = {
    maxAge: {
      value: 30
    },
    position: {
      value: this.position,
      spread: new THREE.Vector3(1.4, 1.4, 0)
    },
    size: {
      value: [8, 4.0, 15.0],
      spread: [1, 1, 10]
    },

    rotation: {
      angle: Math.PI*1.5,
      angleSpread: Math.PI/4
    },
    opacity: {
      value: [0.8, 1.0, 0.4]
    },
    acceleration: {
      spread: new THREE.Vector3(.6, .6, .2)
    },
    activeMultiplier: 0,
    particleCount: 5000,
    velocity: {
      value: this.originalVelocity,
        spread: new THREE.Vector3(.5, .5, .5)
    },
    color: {
      value: [convertColor(255, 134, 129), convertColor(77, 72, 68)]
    }
  };

  this.emitter = new SPE.Emitter(emitterProps);
  this.particleGroupAdditive.addEmitter(this.emitter);

  emitterProps.position.value.x += 2;
  emitterProps.position.value.y += 1;
  emitterProps.color = {value: [convertColor(84, 12, 62), convertColor(246, 238, 137), convertColor(246, 238, 137)]}
  this.emitter2 = new SPE.Emitter(emitterProps);
  this.particleGroupAdditive.addEmitter(this.emitter2);

  scene.add(this.particleGroupAdditive.mesh);


}

FluteStream.prototype.setPosition = function(newPosition) {
  this.emitter.position.value = newPosition;

}

FluteStream.prototype.update = function() {
  this.particleGroupAdditive.tick();
}

FluteStream.prototype.activateStream = function() {
    this.emitter.activeMultiplier = 1;
    this.emitter2.activeMultiplier = 1;
}

FluteStream.prototype.deactivateStream = function() {
  this.emitter.activeMultiplier = 0;
  this.emitter2.activeMultiplier = 0;
}

FluteStream.prototype.toTarget = function(point) {
  //calclulate direction from flute end to point
  this.direction = point.sub(this.position);
  this.direction.z = 10;
  this.direction.multiplyScalar(.2);
  this.emitter.velocity.value = this.direction;
  this.emitter2.velocity.value = this.direction;
}


