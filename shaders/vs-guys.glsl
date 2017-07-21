

uniform float time;
uniform float life;
uniform vec3 suck;
uniform sampler2D audio;
uniform float v_explode;
uniform vec3 clickLocation;

varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;
varying vec3 vEye;
varying vec3 vNorm;

$simplex

void main(){

  vec3 pos = position;

  vUv = uv;
  


  vec3 mP = ( modelMatrix * vec4( pos , 1. ) ).xyz;

  float nVal = snoise( pos * .1 + life  + time  ) * life;
  
  vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);

  vEye = normalize(cameraPosition - mP );

  float m = (sin(dot( vEye , vNorm ) * 10.)+1.) / 2.;

    vec4 a = texture2D( audio , vec2( sin( normal.x * normal.y * normal.z  * 200.) * .5  + .5 , 0. ));

  pos += (sin( time  * .1  + 1.)*sin( time  * .1  + 1.)) * 3. * normal * length( a ) * length( a ) * length( a ) * .01;




  //pos += normal * nVal * length( a ) * 1.;

  vec3 cDir = normalize( suck - mP );


 // pos

 pos += normalize(cDir) * 1. * sin( time * .04  + 2.)* sin( time * .04  + 2.);

   vec3 dif = clickLocation - mP;
  float difL = length( dif );

  float iE = 1.-v_explode;

  if(abs(difL - iE * 2.) < 2.2 ){
    pos += v_explode * 4. * abs(abs(difL - iE * 2.)-.2) * normalize(dif);
  }

  //pos += normalize(cDir) * 10. * life ;//200. * cDir * length( cDir );

  vMPos = ( modelMatrix * vec4( pos , 1. ) ).xyz;


  //vMPos = pos.xyz;
  vPos = pos;

  //vNorm =  normalize(( modelMatrix * vec4( normal , 0. ) ).xyz);
  vEye = normalize(cameraPosition - vMPos);

  vMVPPos = projectionMatrix * modelViewMatrix * vec4( pos , 1. );

  gl_Position = vMVPPos;


}