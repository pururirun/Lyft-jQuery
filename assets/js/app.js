$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(100);
   }, 2000);
});

//Modal 1
$('#singUp').click(function(){
         $('.verify, .logIn, .register').hide();
         $('.singUp').show();
     });

     $('.btnBack').click(function(){
         $('.logIn').show();
         $('.verify, .singUp, .register').hide();
     });

//Botón de verificación
 $('.btnNext').click(function(){
    var input = $('.inputNumber').val();
    $('.inputNumber').val("");

          if(input === ""){
              $('.btnNext').attr("disabled", true);

            }else{
//Modal 2
    $('.btnNext').attr("disabled", false);
        alert('LAB:12345');
    $('.verify').show();
    $('.logIn, .singUp, .register').hide();
    }
  });

  //Modal 3

  $('.btnNextTwo').click(function(){
           $('.verify, .logIn, .register').hide();
           $('.register').show();
       });

  //Final

  $('.btnNext3').click(function(){
           $('.verify, .logIn, .register').hide();
           $('.registerFinish').show();
       });
