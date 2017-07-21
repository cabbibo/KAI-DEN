
uniform sampler2D audio;
uniform float life;
uniform vec3 centerPos;

varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;



void main(){


  vec4 col;// = vec3(1. , vUv.x , vUv.y );

  col = texture2D(audio,vec2(vUv.x,0.));

  gl_FragColor =  col;;// vec4( col  , 1.  );


  //gl_FragColor = vec4( normalize( vEye ) * .5 + .5 , 1. );
  //gl_FragColor = vec4( vTang , 1. ); 

}
