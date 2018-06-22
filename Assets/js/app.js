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