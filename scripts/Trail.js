function Trail(size, pointerObject , geo , mat , meshes ){

  this.springLength = .00000001;
  this.objects = [];
  this.size = size;

  for( var i = 0; i < size; i++ ){
    var m = new THREE.Mesh( geo , mat );
    m.scale.multiplyScalar( 2 );
    m.velocity = new THREE.Vector3();
    if( i != 0 ){
      m.up = this.objects[i-1];
    }else{
      m.up = pointerObject;
    }


    this.objects[i] = m;
    this.objects[i].lines = this.createLines( i , this.objects[i] , meshes );

    scene.add( m );
  }
  

}

Trail.prototype.createLines = function(id, object, meshes){
  //var bufferGeometry();

  //console.log( meshes );
  var m = meshes[ Math.floor( Math.random() * meshes.length ) ];
  //var geo = 

  //penis
  //console.log( m );

  var segments = 100;

  var geometry = new THREE.BufferGeometry();
  var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });

  var positions = new Float32Array( segments * 3 );
  var normals = new Float32Array( segments * 3 );
  var colors = new Float32Array( segments * 3 );
  var uvs = new Float32Array( segments * 2 );
  var uvs2 = new Float32Array( segments * 2 );

  var r = 60;
  for ( var i = 0; i < segments; i ++ ) {


    var arrayID = Math.floor( Math.random() * Math.floor( m.geometry.attributes.position.array.length / 3 )  );
   // m.geometry.attributes.position.array



    var x = m.geometry.attributes.position.array[ arrayID*3 + 0];//Math.random() * r - r / 2;
    var y = m.geometry.attributes.position.array[ arrayID*3 + 1];
    var z = m.geometry.attributes.position.array[ arrayID*3 + 2];

    G.v1.set(x,y,z);
    G.v1.applyMatrix4( m.matrix );

    // positions
    positions[ i * 3 ] = G.v1.x;
    positions[ i * 3 + 1 ] = G.v1.y;
    positions[ i * 3 + 2 ] = G.v1.z;

    normals[ i * 3 ] =  m.geometry.attributes.normal.array[ arrayID*3 + 0]
    normals[ i * 3 + 1 ] = m.geometry.attributes.normal.array[ arrayID*3 + 1];
    normals[ i * 3 + 2 ] = m.geometry.attributes.normal.array[ arrayID*3 + 2];

    // colors
    colors[ i * 3 ] = ( x / r ) + 0.5;
    colors[ i * 3 + 1 ] = ( y / r ) + 0.5;
    colors[ i * 3 + 2 ] = ( z / r ) + 0.5;

    uvs[i*2] = i % 2;
    uvs[i*2+1] = i/segments;

    uvs2[i*2] = m.geometry.attributes.uv.array[ arrayID*2 + 0];
    uvs2[i*2+1] = m.geometry.attributes.uv.array[ arrayID*2 + 1];

  }

  geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  geometry.addAttribute( 'normal' , new THREE.BufferAttribute( normals, 3 ) );
  geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
  geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
  geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs2, 2 ) );

  geometry.computeBoundingSphere();

  var material = new THREE.ShaderMaterial({
    uniforms:{
      centerPos:{type:"v3", value:new THREE.Vector3()},
      audio:G.uniforms.audio,

     // t_video:{ type:"t" , value: videoTexture },
      //t_normal:{ type:"t" , value: n },
      //t_texture:{ type:"t" , value: t  },
      //t_ao:{ type:"t" , value: ao },
      life: G.uniforms.life,
      time: G.uniforms.time,
      suck: G.uniforms.suck,
      //audio: G.uniforms.audio,

      clickLocation : G.uniforms.clickLocation,
      v_explode: G.uniforms.v_explode,
      v_clickVal:G.uniforms.v_clickVal,
      v_lastClickTime: G.uniforms.v_lastClickTime,

      v_closeLine : G.uniforms.v_closeLine,
      v_farLine : G.uniforms.v_farLine,
      
      v_bg:G.uniforms.v_bg,
      v_on:G.uniforms.v_on,
      v_suckDisform:G.uniforms.v_suckDisform,
      v_audioDisform:G.uniforms.v_audioDisform,
      v_project:G.uniforms.v_project,
      v_texture:G.uniforms.v_texture,

      v_refract:G.uniforms.v_refract,
      v_rainbow:G.uniforms.v_rainbow,
      v_rimAudio:G.uniforms.v_rimAudio,
      v_aoAudio:G.uniforms.v_aoAudio,
      v_audioMix:G.uniforms.v_audioMix,
      v_endNoise:G.uniforms.v_endNoise,
      v_reflRainbow:G.uniforms.v_reflRainbow

    },
    //blending: THREE.MultiplyBlending,
    transparent: true,

    vertexShader:   shaders.vertexShaders.lines,
    fragmentShader: shaders.fragmentShaders.lines,
  })

  //console.log( shaders.vertexShaders.lines );


  var mesh = new THREE.Line( geometry, material );
  scene.add( mesh );

  return mesh;

}

Trail.prototype.update = function(){


  for( var i = 0; i < this.size; i++ ){

    var o = this.objects[i];



    G.v1.copy( o.position );
    G.v1.sub( o.up.position );
    var l = G.v1.length();
    l -= this.springLength;
    G.v1.normalize();
    G.v1.multiplyScalar( -l * .01);
    o.velocity.add( G.v1 );
    o.position.add( o.velocity );
    G.v1.copy( o.position );
    G.v1.add( o.velocity );
    o.lookAt( G.v1 );
    o.velocity.multiplyScalar( .8 );

    this.objects[i].lines.material.uniforms.centerPos.value.copy( o.position );


  }

}