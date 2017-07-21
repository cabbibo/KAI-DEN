function Choreographer(events){

  this.events=events;
  
}

/*Choreographer.prototype.addEvent = function( variableName , startVal , endVal , startTime , endTime ){

  this.events.push({
    name      : variableName,
    startVal  : startVal,
    endVal    : endVal,
    startTime : startTime,
    endTime   : endTime,
  })

}*/

Choreographer.prototype.update = function ( time ){

  //console.log( time );

  var closestTime  = 1000000;
  var closestEvent = this.events[this.events.length-1];

   // console.log( time );

  for( var i = 0; i < this.events.length; i++ ){
    
    var currEvent = this.events[i];
    //console.log( currEvent );

    if( time > currEvent.startTime && time < currEvent.endTime ){

      closestEvent = currEvent;
      closestTime = 0;
      break;

    }else{

      var closer = Math.min( Math.abs(currEvent.startTime - time) , Math.abs( currEvent.endTime - time ));

      if( closestTime > closer){
        closestTime = closer;
        closestEvent = currEvent;
      } 

    }
    //console.log( G.uniforms[e.name].value );
  }

  var e = closestEvent;

  if( e == this.events[this.events.length-1]){
   // console.log( "unchanged");
  }


  for( var i = 0; i < e.events.length; i++ ){
   
    var name = e.events[i][0];
   
    var sV = e.events[i][1];
    var eV  = e.events[i][2];

   //3 console.log( name );

    if( time < e.startTime ){
      G.uniforms[name].value = sV;
    }else if( time > e.endTime ){
      G.uniforms[name].value = eV;
    }else{
      var nTime = (time - e.startTime) / (e.endTime - e.startTime);
      G.uniforms[name].value = sV + ( eV - sV ) * nTime;
    }
  }

}