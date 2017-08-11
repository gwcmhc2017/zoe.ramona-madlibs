$(document).ready(function() {







  $('#submit').click(function() {

    var Adj1 = $('#Adj1').val();
    var verbIng= $('#verbIng').val();
    var Adj2= $('#Adj2').val();
    var Adj3= $('#Adj3').val();
    var noun1= $('#noun1').val();
    var noun2= $('#noun2').val();
    var noun3= $('#noun3').val();
    var noun4= $('#noun4').val();
    var pronounS= $('#pronounS').val();
    var noun5= $('#noun5').val();
    var noun6= $('#noun6').val();
    var noun7= $('#noun7').val();
    var celeb= $('#celeb').val();
    var verb= $('#verb').val();
    var Adj4= $('#Adj4').val();

    $('#result').append('It was a ' + Adj1 + ' day and I was ' + verbIng + ' some food.<br/>');
    $('#result').append('I was ' + Adj2 + ' and ' + Adj3 + ' because ' + noun1 + ' wouldnt feed the ' + noun2 + ' inside me.<br/>');
     $('#result').append('This caused ' + noun3 + ' to get soggy.<br/>');
      $('#result').append('Just then my ' + noun4 + ' ran through the door with ' + noun5 + ' on ' + pronounS + ' head,' + noun6 + ' threw a ' + noun7 + ' at the window <br/>');
    $('#result').append('Then ' + celeb + ' came home and ' + verb + ' me.<br/>');
     $('#result').append('Now Im ' + Adj4 + '<br/>');



$('#result').append()
  });

$('#playagain').click(function() {

  // $('#okay').append()
  console.log("play again was clicked");
  $()
});
});
