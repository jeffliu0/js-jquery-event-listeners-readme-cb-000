//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey')
  })
}

function frameIt(){
  $('p').on('load', function(){
  //actions you want to happen
    $('img').addClass('tasty')
  })
}

$(document).ready(function(){

// call functions here
  getIt()
});
