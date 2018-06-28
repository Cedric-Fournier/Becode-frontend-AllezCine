$(document).ready(function(){
  loginRegister();
  // ageVerif();
});

// LOGIN - REGISTER //

function loginRegister() {

  $("#mySignIn").click(function(){
    $("#myModalSignIn").modal();
  });

  $("#mySignInRegister").click(function(){
    // $("#myModalSignIn").hide() && $("#myModalSignUp").modal();
    $("#myModalSignIn").modal("hide") && $("#myModalSignUp").modal();
  });

  $("#mySignUp").click(function(){
    $("#myModalSignUp").modal();
  });

};

// LOGIN - REGISTER //
// AGE VERIFICATION //

function ageVerif() {

  let age = prompt("Please enter your age !");
  age = parseInt(age);

  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
          age = prompt("Please enter your age !");
      }

      if(age < 18){
          window.location.href = "https://www.imdb.com";
          break;
      }
  }
}

// AGE VERIFICATION //
// MODAL FILMS //

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

// MODAL FILMS //

// FILMS SELECTIONS //
/*
$('.btn1').click(function(){
    $(this).text(function(i,old){
        return old=='PLUS DE FILMS' ?  'MOINS DE FILMS' : 'PLUS DE FILMS';
    });
}); */

// FILMS SELECTIONS //

// FILMS FILTER //

$("#showall").on("click", function(){
    $("#b1, #b2, #b3").addClass("cachee");
    $("#c1, #c2, #c3").addClass("cachee");
    $("#a1, #a2").removeClass("cachee");
});

$("#showaction").on("click", function(){
    $("#a1, #a2, #a3").addClass("cachee");
    $("#c1, #c2, #c3").addClass("cachee");
    $("#b1, #b2").removeClass("cachee");
});

$("#showaventure").on("click", function(){
    $("#a1, #a2, #a3").addClass("cachee");
    $("#b1, #b2, #b3").addClass("cachee");
    $("#c1, #c2").removeClass("cachee");
});

$("#showmore").on("click", function(){
    if($("#b1").attr("class") == "row cachee" && $("#c1").attr("class") == "row cachee"){
        $("#a3").removeClass('cachee');
    }
    else if($("#a1").attr("class") == "row cachee" && $("#c1").attr("class") == "row cachee"){
        $("#b3").removeClass('cachee');
    }
    else {
        $("#c3").removeClass('cachee');
    }
    $('#showless').removeClass('cachee');
    $('#showmore').addClass('cachee');
});

$("#showless").on("click", function(){
    if($('#a3').attr('class') == "row"){
        $('#a3').addClass("cachee");
    }
    else if($('#b3').attr('class') == "row"){
        $('#b3').addClass("cachee");
    }
    else {
        $('#c3').addClass("cachee");
    }
    $('#showmore').removeClass('cachee');
    $('#showless').addClass('cachee');
});
/*$(function() {
    $('.post').hide();
    $("#filter button").on("click", function(){
        var filtertag = $(this).attr('class');
        $('.post').hide().filter('.' + filtertag).show();
    })
        [0].click();
});*/

// FILMS FILTER //
