//define functions here
function getIt(){
  alert("Hey!")
}
function frameIt(){
  $( 'img' ).addClass( "tasty" );
}
function pressIt(){
  
    alert('G was pressed');
  
}
function submitIt(){
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){
  $ ("p").on('click', getIt);
  $ ('img').on('load', frameIt);
  $ ('form').on('keydowm', pressIt);
  $ ('form').on("submit", submitIt);
});
