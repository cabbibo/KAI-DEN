
uniform sampler2D t_video;
uniform sampler2D audio;
uniform sampler2D t_texture;
uniform sampler2D t_normal;
uniform sampler2D t_depth;
uniform float life;
uniform vec3 suck;

varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;

varying vec3 vEye;
varying vec3 vNorm;

$uvNormalMap

void main(){


  vec3 col = vec3(1.);


  vec3 fNorm = uvNormalMap( t_normal, vMPos , vUv , vNorm , 1. ,10.  );
  vec3 refractedRay = refract( -vEye , fNorm ,.95);

  float m = dot( vEye , fNorm );

  vec3 suckDir = normalize(vMPos - suck);
  vec3 reflSuck = reflect( suckDir , fNorm );
  float rM = dot( vEye , reflSuck );

  vec3 fPos = refractedRay * 2.;

  vec2 ss = vMVPPos.xy / vMVPPos.w; //postTransformVertexCoord.xy/postTransformVertexCoord.w

  vec4 vCol = texture2D(t_video, fPos.xy * .4 + vec2(.5,.5));
  vec4 vCol1 = texture2D(t_video, vMPos.xy * .4 + vec2(.5,.5));

  col = vCol.xyz;

  vec3 col1 = vCol.xyz + vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;
  vec3 col2 = normalize(1.-vCol1.xyz +  fNorm) * .5 + .5;//+ vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;
  //col += vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;

  col = mix( col1 , col2 , life);

  col = texture2D( t_texture , vUv).xyz;
  col += vCol1.xyz;

  col = fNorm * .5 + .5;
  col *= rM;

  vec3 aCol = texture2D( audio , vec2(sin(vUv.x *10.) * .25 + .25,0.) ).xyz;
  col += (reflSuck*.5+.5)*aCol*aCol*aCol*aCol;
  gl_FragColor =  vec4( col  , 1.  );


  //gl_FragColor = vec4( normalize( vEye ) * .5 + .5 , 1. );
  //gl_FragColor = vec4( vTang , 1. ); 

}


