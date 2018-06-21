$(document).ready(function(){
  loginRegister();
  ageVerif();
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

  let ageVerif = prompt("Please enter your age !");

  if (ageVerif < 18) {
    document.location.href="https://www.imdb.com/";
  } else if (!Number(ageVerif)) {
    alert('This is not a number !')
    ageVerif = prompt("Please enter your age !");
  }

}

// AGE VERIFICATION //
