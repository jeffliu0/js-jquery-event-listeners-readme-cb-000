//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey')
  })
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
  })
}

$(document).ready(function(){

// call functions here
  getIt()
});
