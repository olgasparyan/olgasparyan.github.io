document.querySelector('#b1').addEventListener('click', function() {
  document.querySelector('#c1').style.height = 'auto';
  this.style.display = 'none';
});

document.querySelector('#b2').addEventListener('click', function() {
  document.querySelector('#c2').style.height = 'auto';
  this.style.display = 'none';
});

$(document).ready(function(){
  $( "div" ).each(function( index ) {
    if($(this)[0].scrollHeight <= $(this)[0].offsetHeight){
      $(this).next().hide();
    }
  });
});
