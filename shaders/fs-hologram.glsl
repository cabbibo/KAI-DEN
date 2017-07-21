
uniform sampler2D t_video;
uniform float life;


varying vec2 vUv;

varying vec3 vMPos;
varying vec3 vPos;
varying vec4 vMVPPos;

varying vec3 vEye;
varying vec3 vNorm;

void main(){


  vec3 col = vec3(1.);

  vec3 refractedRay = refract( -vEye , vNorm ,.95);

  float m = dot( vEye , vNorm );

  vec3 fPos = refractedRay * 2.;

  vec2 ss = vMVPPos.xy / vMVPPos.w; //postTransformVertexCoord.xy/postTransformVertexCoord.w

  vec4 vCol = texture2D(t_video, fPos.xy * .4 + vec2(.5,.5));
  vec4 vCol1 = texture2D(t_video, vMPos.xy * .4 + vec2(.5,.5));

  col = vCol.xyz;

  vec3 col1 = vCol.xyz + vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;
  vec3 col2 = normalize(1.-vCol1.xyz +  vNorm) * .5 + .5;//+ vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;
  //col += vec3( .2 , .8 , 1) * (1.-m) * (1.-m) * 2.;

  col = mix( col1 , col2 , life);
  gl_FragColor =  vec4( col  , 1.  );


  //gl_FragColor = vec4( normalize( vEye ) * .5 + .5 , 1. );
  //gl_FragColor = vec4( vTang , 1. ); 

}
