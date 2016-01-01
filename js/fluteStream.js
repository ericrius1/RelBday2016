var FluteStream = function() {
  this.particleGroupAdditive = new SPE.Group({
    texture: {
      value: textureLoader.load("./assets/smokeparticle.png")
    },
    blending: THREE.AdditiveBlending,
    maxParticleCount: 100000,
  });

  this.originalVelocity = new THREE.Vector3(50, 50, 0);
  this.position = new THREE.Vector3(-90, -120, 10);
  this.direction = new THREE.Vector3();

  var emitterProps = {
    maxAge: {
      value: 20
    },
    position: {
      value: this.position,
      spread: new THREE.Vector3(10, 10, 0)
    },
    size: {
      value: [80, 40, 40],
      spread: [10, 10, 30]
    },

    rotation: {
      angle: Math.PI/3,
      angleSpread: Math.PI/6
    },
    opacity: {
      value: [0.8, 0.4, 0.8]
    },
    angle: {
      value: [0, Math.PI, Math.PI * 2]
    },
    acceleration: {
      spread: new THREE.Vector3(2, 1, 1)
    },
    // activeMultiplier: 1,
    particleCount: 2000,
    velocity: {
      value: this.originalVelocity,
        spread: new THREE.Vector3(5, 5, 5)
    },
    color: {
      value: [convertColor(255, 134, 129), convertColor(77, 72, 68)]
    }
  };

  this.emitter = new SPE.Emitter(emitterProps);
  this.particleGroupAdditive.addEmitter(this.emitter);

  emitterProps.position.value.x += 20;
  emitterProps.position.value.y += 10;
  emitterProps.color = {value: [convertColor(142, 146, 157), convertColor(246, 238, 137), convertColor(246, 238, 137)]}
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
  this.direction.multiplyScalar(.5);
  this.emitter.velocity.value = this.direction;
  this.emitter2.velocity.value = this.direction;
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



