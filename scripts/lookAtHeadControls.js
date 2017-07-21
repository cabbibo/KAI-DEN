function LookAtHeadControls(object){
   
  this.object = object;
  this.object.rotation.reorder( "YXZ" );
  this.deviceOrientation;
  this.screenOrientation;

  this.object.position.set( 0 , 0 , 3 );
  this.center = new THREE.Vector3();
  this.speed = .01;

  this.x=0;
  this.y=0;
  this.z=0;


  this.lookX=0;
  this.lookY=0;
  this.lookZ=0;

  this.zee = new THREE.Vector3( 0, 0, 1 );
  this.euler = new THREE.Euler();
  this.q0 = new THREE.Quaternion();
  this.q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); 
  this.v = new THREE.Vector3();

  this.alphaOffsetAngle = 0;

  this.quaternion = new THREE.Quaternion();
  this.lookQuaternion = new THREE.Quaternion();
  this.deltaQuaternion = new THREE.Quaternion();

  console.log("quate");
  console.log( this.q0 );

  this.onScreenOrientationChangeEvent(); // run once on load
  //this.onDeviceOrientationChangeEvent(); // run once on load

  this.ResetLookDir();

  window.addEventListener( 'orientationchange', this.onScreenOrientationChangeEvent.bind( this ), false );
  window.addEventListener( 'deviceorientation', this.onDeviceOrientationChangeEvent.bind( this ), false );

}

LookAtHeadControls.prototype.ResetLookDir = function(){

  this.lookX = this.x;
  this.lookY = this.y;
  this.lookZ = this.z;


  this.setAQuat( this.lookQuaternion );

  //}

}

LookAtHeadControls.prototype.setAQuat = function( quaternion ){
   if( this.deviceOrientation ){

    var alpha = this.deviceOrientation.alpha ? THREE.Math.degToRad( this.deviceOrientation.alpha ) + this.alphaOffsetAngle : 0; // Z
    var beta = this.deviceOrientation.beta ? THREE.Math.degToRad( this.deviceOrientation.beta ) : 0; // X'
    var gamma = this.deviceOrientation.gamma ? THREE.Math.degToRad( this.deviceOrientation.gamma ) : 0; // Y''
    var orient = this.screenOrientation ? THREE.Math.degToRad( this.screenOrientation ) : 0;

    this.setQuaternion( quaternion , alpha, beta,gamma,orient);

  }
}

LookAtHeadControls.prototype.update = function(){


  if( this.deviceOrientation){

    this.setAQuat( this.quaternion );
    this.deltaQuaternion.multiplyQuaternions(this.quaternion,this.lookQuaternion.inverse());
    this.v.set(0,0,1);
    this.v.applyQuaternion( this.deltaQuaternion);
    //console.log( this.v );
    

    this.object.position.x += ( ( this.v.x* this.v.x * Math.sign( this.v.x )* 5- this.object.position.x ) ) * this.speed;
    this.object.position.y += ( ( this.v.y* this.v.y * Math.sign( this.v.y )* 5- this.object.position.y ) ) * this.speed;

    this.object.position.x *= .99;
    this.object.position.y *= .99;

    this.object.lookAt( this.center ); 
    /*if( this.x != null  && this.lookX  != null){
    /*if( this.x != null  && this.lookX  != null){

      var difX = this.x - this.lookX;
      var difY = this.y - this.lookY;

      //console.log( difX);


      this.object.position.x += difX * .0001;//* .01;
      this.object.position.y += difY * .0001;//* .01;

      if( this.object.position.x < -5 ){
        this.object.position.x = -5;
      }
      if( this.object.position.x > 5 ){
        this.object.position.x = 5;
      }


      if( this.object.position.y < -5 ){
        this.object.position.y = -5;
      }
      if( this.object.position.y > 5 ){
        this.object.position.y = 5;
      }

      this.object.lookAt( this.center ); 




    } */

  }


}

LookAtHeadControls.prototype.updateAlphaOffsetAngle = function( angle ) {

    this.alphaOffsetAngle = angle;
    this.update();

  };

LookAtHeadControls.prototype.setQuaternion = function( quaternion, alpha, beta, gamma, orient ){


    //var quaternion = new THREE.Quaternion();
    this.q0.set(0,0,0,1)

    this.euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

    quaternion.setFromEuler( this.euler ); // orient the device

    quaternion.multiply( this.q1 ); // camera looks out the back of the device, not the top

    quaternion.multiply( this.q0.setFromAxisAngle( this.zee, - orient ) ); // adjust for screen orientation

    //return quaternion;

}


LookAtHeadControls.prototype.onDeviceOrientationChangeEvent = function( event ) {


    this.deviceOrientation = event;
    //console.log( this.deviceOrientation );

    this.y =  this.deviceOrientation.beta;
    this.x =  this.deviceOrientation.gamma;
    this.z =  this.deviceOrientation.alpha;

  };

LookAtHeadControls.prototype.onScreenOrientationChangeEvent = function() {

    this.screenOrientation = window.orientation || 0;
    console.log( "screm changdss");
    console.log( this.screenOrientation );

    this.ResetLookDir();

  };