
uniform sampler2D t_video;
uniform sampler2D audio;
uniform sampler2D t_texture;
uniform sampler2D t_normal;
uniform sampler2D t_ao;
uniform float life;
uniform vec3 suck;

uniform float v_on;
uniform float v_bg;
uniform float v_texture;
uniform float v_project;
uniform float v_refract;
uniform float v_rainbow;
uniform float v_audioMix;
uniform float v_endNoise;
uniform float v_aoAudio;
uniform float v_rimAudio;
uniform float v_reflRainbow;
uniform float v_fullProject;

uniform float v_clickVal;
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



varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;

varying vec3 vEye;
varying vec3 vNorm;

varying vec3 vSuck;
varying vec3 vDifVec;

varying float vEndNoiseVal;
varying float vPosNoise;

$uvNormalMap
$hsv

void main(){


  vec3 col = vec3(0.);


  vec3 fNorm = normalize(uvNormalMap( t_normal, vMPos , vUv , vNorm , 1. ,10.  ));
  vec3 refractedRay = refract( -vEye , fNorm ,.98);

  float m = dot( vEye , fNorm );

  //vec3 suckVec = vMPos - suck;
  vec3 suckDir = normalize(vSuck);

  vec3 reflSuck = normalize(reflect( suckDir , fNorm ));
  
  float rM = dot( vEye , reflSuck );
  float rS = dot( suckDir , fNorm );

  vec3 fPos = refractedRay * 2.;

  vec3 vidTex = texture2D(t_video, vMPos.xy * .16 * vec2( 1. , 2.)+ vec2(.5,.5)).xyz;

  vec3 cRefract = texture2D(t_video, fPos.xy * .4 * vec2( 1. , 2.) + vec2(.5,.5)).xyz;
  vec3 cProject = (1.+rM) * vidTex;
  vec3 cTexture = (2.+rS) * texture2D(t_texture, vUv).xyz;
  vec3 cAO      = texture2D(t_ao, vUv).xyz;

  vec3 cRimAudio = texture2D( audio , vec2(m , 0.)).xyz;
  vec3 cAOAudio = texture2D( audio , vec2( cAO.x , 0.)).xyz;
  vec3 cAudio = texture2D( audio , vec2( abs(sin(vUv.x * 10.)) * .7 , 0.)).xyz;



  vec3 rainbowCol = fNorm * .5 + .5;
  rainbowCol *= abs(rM);
  rainbowCol += (reflSuck*.5+.5)*cAudio*cAOAudio*cAOAudio*cAOAudio;

  vec3 aRainbowCol =  cAudio * cAOAudio * cRimAudio * 2.;

  //vec3 colF1 = aRainbowCol;
//vEndNoiseVal;

vec3 fNoiseCol = mix(cProject+cTexture , cRefract * cProject + cTexture , vEndNoiseVal * .5 );
fNoiseCol = mix( fNoiseCol , aRainbowCol , max((vEndNoiseVal-.5) * 2.,0.)  );
fNoiseCol = mix( cTexture * .5 + cProject * .5 , aRainbowCol + rainbowCol * cRefract * 2. , vEndNoiseVal * 2. );

//fNoiseCol = mix(reflSuck*.5+.5;

  col += cTexture * v_texture;
  col += cProject * v_project;
  col += cRefract * v_refract;
  col += aRainbowCol * v_aoAudio;
  col += cRimAudio * v_rimAudio;
  col += rainbowCol * v_rainbow;
  col += (reflSuck*.5+.5) * v_reflRainbow;

  col = mix( col , col * aRainbowCol , v_audioMix );

  col = mix( col , fNoiseCol , v_endNoise );

   

  col = mix( vec3( 0.), col, v_on);
  if( mod(v_clickVal, 2.) == 0. ){
   // col = vec3(1.,1.,1.) - col;//vec3(1.,0.,0.);
  }

  col *= hsv( v_clickVal / 10. , .3,1.);

  col = mix( col , normalize(col), v_explode);




  float explodeVal = max(v_explode - length(vDifVec) * .3 ,0.);
  float hoverVal = max( 0. , 1.-(length(vSuck) * length( vSuck) * .4 + vPosNoise * .4 ));

  col = mix( col , vidTex ,clamp( explodeVal + hoverVal + v_fullProject, 0. , 1.));// cProject;
  //col = mix( col , vidTex ,clamp( v_fullProject, 0. , 1.));// cProject;

  

//col = vec3( v_endNoise );
  //col = cTexture * v_texture * cAO;

  gl_FragColor =  vec4( col  , 1.  );




}