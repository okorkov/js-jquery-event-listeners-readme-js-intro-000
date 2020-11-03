//define functions here
function getIt(){
  alert("Hey!")
}
function frameIt(){
  $( 'img' ).addClass( "tasty" );
}
function pressIt(){
  if( $("form") === 71)
    alert('G was pressed');

}
function submitIt(){
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){
  $ ("p").on('click', getIt);
  $ ('img').on('load', frameIt);
  $ ('form').keydown(pressIt);
  $ ('form').on("submit", submitIt);
});
