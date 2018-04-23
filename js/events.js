//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey')
  })
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
    $('img').addClass('tasty')
  })
}

function

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});
