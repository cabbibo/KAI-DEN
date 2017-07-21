

uniform float time;
uniform float life;
uniform vec3 suck;
uniform sampler2D audio;
uniform float isBG;
uniform vec3 clickLocation;
uniform float v_explode;


       /*   v_bg:{type:"f",value:0},
          v_on:{type:"f",value:0},
          v_suckDisform:{type:"f",value:0},
          v_audioDisform:{type:"f",value:0},
          v_texture:{type:"f",value:0},
          v_project:{type:"f",value:0},
          v_refract:{type:"f",value:0},
          v_rainbow:{type:"f",value:0},
          v_audioMix:{ type:"f",value:0},
          v_endNoise:{type:"f",value:0},
          v_rimAudio:{type:"f",value:0},
          v_aoAudio:{type:"f",value:0}*/


uniform float v_suckDisform;
uniform float v_audioDisform;
uniform float v_endNoise;
uniform float v_on;
uniform float v_fullProject;



varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;
varying vec3 vEye;
varying vec3 vNorm;
varying float vEndNoiseVal;

varying vec3 vDifVec;

varying vec3 vSuck;
varying float vPosNoise;



$simplex

void main(){

  vec3 pos = position;

  if( isBG < .5 ){
    pos *= 1.-v_fullProject;
  }

  vUv = uv;
  


  vec3 mP = ( modelMatrix * vec4( pos , 1. ) ).xyz;

  float nVal = snoise( pos * .1 + life  + time  ) * life;
  
  vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);

  vEye = normalize(cameraPosition - mP );

  float m = (sin(dot( vEye , vNorm ) * 10.)+1.) / 2.;

    vec4 a = texture2D( audio , vec2( sin(vUv.x * 20.) * .5  + .5 , 0. ));


  float pVal = snoise( mP * .5 + vec3(time,0.,0.));
  pVal = mix(1., (1. + pVal) *.5 ,v_endNoise);
  vEndNoiseVal = pVal * pVal * pVal;//pVal;


  pos += normal * length( a ) * .05* v_audioDisform * max(0.,vEndNoiseVal);// * length( a ) * length( a ) * .3;


  //pos += normal * nVal * length( a ) * 1.;

  vec3 cDir = normalize( suck - mP );
   pos += normalize(cDir) * 1. * v_suckDisform * max(0.,vEndNoiseVal);



  vec3 dif = clickLocation - mP;
  float difL = length( dif );

  float iE = 1.-v_explode;

  if(abs(difL - iE * 2.) < .2 ){
    pos += vec3( 0., 0., v_explode * 2. * abs((abs(difL - iE * 2.)-.2)));
  }

  vSuck = mP - suck;

 // pos

  //pos += normalize(cDir) * 10. * life ;//200. * cDir * length( cDir );

  vMPos = ( modelMatrix * vec4( pos , 1. ) ).xyz;


  //vMPos = pos.xyz;
  vPos = pos;

  vPosNoise = snoise( mP * 1.);

  //vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);
  vEye = normalize(cameraPosition - vMPos);

  vMVPPos = projectionMatrix * modelViewMatrix * vec4( pos , 1. );

  gl_Position = vMVPPos;


}

