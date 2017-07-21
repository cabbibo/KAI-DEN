function Background( size , geo , mat ){

  var fGeo = new THREE.Geometry();

  for(var i = 0;  i < size; i++){
    var m = new THREE.Mesh( geo );
    m.position.x = (Math.random() - .5 ) * 40; 
    m.position.y = (Math.random() - .5 ) * 40; 
    m.position.z = -(Math.random() ) * 20 - 2; 

    m.scale.x = Math.random() * .6 + .7;
    m.scale.y = Math.random() * .6 + .7;
    m.scale.z = Math.random() * .6 + .7;
    
    m.rotation.x = Math.random() * 3.14159;
    m.rotation.y = Math.random() * 3.14159;
    m.rotation.z = Math.random() * 3.14159;

    m.updateMatrix();
    fGeo.merge( geo , m.matrix );
  }



  this.mesh = new THREE.Mesh( fGeo , mat );
  scene.add( this.mesh );

}

Background.prototype.update = function(){
  
}