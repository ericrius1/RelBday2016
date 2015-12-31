var FluteStream = function() {
  this.particleGroupAdditive = new SPE.Group({
    texture: {
      value: textureLoader.load("../assets/smokeparticle.png")
    },
    blending: THREE.AdditiveBlending,
    maxParticleCount: 1000000,
  });

  this.originalVelocity = new THREE.Vector3(50, 50, 0);

  this.particleGroupNormal= new SPE.Group({
    texture: {
      value: textureLoader.load("../assets/smokeparticle.png")
    },
    blending: THREE.NormalBlending,
    maxParticleCount: 1000000,
  });

  var emitterProps = {
    maxAge: {
      value: 50
    },
    position: {
      value: new THREE.Vector3(-95, -140, 0)
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
    activeMultiplier: 0,
    particleCount: 50000,
    velocity: {
      value: this.originalVelocity,
        spread: new THREE.Vector3(10, 10, 0)
    },
    color: {
      value: [convertColor(255, 134, 129)]
    }
  };

  this.emitter = new SPE.Emitter(emitterProps);
  this.particleGroupAdditive.addEmitter(this.emitter);

  emitterProps.particleCount = 20000;
  emitterProps.position.value.x -= 10;
  emitterProps.color = {value: [convertColor(142, 146, 157)]}
  emitterProps.size.values = [50, 70, 20];
  this.emitter2 = new SPE.Emitter(emitterProps);
  this.particleGroupNormal.addEmitter(this.emitter2);

  scene.add(this.particleGroupAdditive.mesh);
  scene.add(this.particleGroupNormal.mesh);



}

FluteStream.prototype.setPosition = function(newPosition) {
  this.emitter.position.value = newPosition;

}

FluteStream.prototype.update = function() {
  this.particleGroupAdditive.tick();
  this.particleGroupNormal.tick();
}

FluteStream.prototype.activateStream = function() {
    this.emitter.activeMultiplier = 1;
    this.emitter2.activeMultiplier = 1;
    this.emitter.velocity.value = this.originalVelocity;
    this.emitter2.velocity.value = this.originalVelocity;
}

FluteStream.prototype.deactivateStream = function() {
  this.emitter.activeMultiplier = 0;
  this.emitter2.activeMultiplier = 0;
}

FluteStream.prototype.flutter = function(event) {
  var deltaY = -event.movementY/10;
  var deltaX = event.movementX/100;
  var newVelocity = this.emitter.velocity.value.clone();
  newVelocity.y += deltaY;
  newVelocity.x += deltaX;
    this.emitter.velocity.value = newVelocity;
    this.emitter2.velocity.value = newVelocity;
}



