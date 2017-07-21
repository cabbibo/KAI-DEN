


attribute vec2 uv2;
uniform float time;
uniform float life;
uniform vec3 suck;
uniform sampler2D audio;

uniform vec3 centerPos;

uniform vec3 clickLocation;
uniform float v_explode;


uniform float v_closeLine;
uniform float v_farLine;



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


varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;
varying vec3 vEye;
varying vec3 vNorm;
varying float vEndNoiseVal;



$simplex

void main(){

  vec3 pos = position;

  vUv = uv;
  

  if( length(centerPos - position) > v_closeLine ){
  
    if( uv.x == 0. ){
      pos = centerPos;
    }else{


     /* vec3 mP = ( modelMatrix * vec4( pos , 1. ) ).xyz;

      float nVal = snoise( pos * .1 + life  + time  ) * life;
      
      vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);

      vEye = normalize(cameraPosition - mP );

      float m = (sin(dot( vEye , vNorm ) * 10.)+1.) / 2.;

      vec4 a = texture2D( audio , vec2( sin(uv2.x * 20.) * .5  + .5 , 0. ));


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
      }*/

      pos = position;

      pos = -normalize( pos - centerPos ) * v_closeLine + pos;


      
    }
  }else{
    pos = centerPos;
  }



 // pos

  //pos += normalize(cDir) * 10. * life ;//200. * cDir * length( cDir );

  vMPos = ( modelMatrix * vec4( pos , 1. ) ).xyz;


  //vMPos = pos.xyz;
  vPos = pos;

  //vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);
  vEye = normalize(cameraPosition - vMPos);

  vMVPPos = projectionMatrix * modelViewMatrix * vec4( pos , 1. );

  gl_Position = vMVPPos;


}
