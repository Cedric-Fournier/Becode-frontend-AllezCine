// LOGIN - REGISTER //

let loginRegister = () => {

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

let ageVerif = () => {

  let age = prompt("Please enter your age !");
  age = parseInt(age);

  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
          age = prompt("Please enter your age !");
      }

      else if(age < 18){
          window.location.href = "https://www.imdb.com";
          break;
      }
  }
}

// AGE VERIFICATION //
// MODAL MOVIES //

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

// MODAL MOVIES //
// CONTACT //

let submitContact = () => {

  let lastname = document.getElementById("inputLastName").value;
  let firstname = document.getElementById("inputFirstName").value;
  let email = document.getElementById("inputEmail").value;
  let sujet = document.getElementById("inputSujet").value;
  let message = document.getElementById("inputMessage").value;

  alert("Nom : " + lastname + "\nPrénom : " + firstname + "\nEmail : " + email + "\nSujet : " + sujet +  "\nMessage : " + message);

}

function GoogleMap() {
  $("#myGoogleMap").click(function(){
    $("#myModalGoogleMap").modal();
  });
}


// CONTACT //
// SHOP MOVIE //


// SHOP MOVIE //
// BUTTON UP //

let buttonUp = () =>{

  let button = document.createElement("A");
  let icon = document.createElement("I");

  icon.setAttribute("class", "fas fa-arrow-up buttonUp");
  button.appendChild(icon);

  let location = document.getElementById("footer");
  button.setAttribute("href", "#top");
  location.insertAdjacentElement("beforeend", button);

  $(window).on("scroll", function(){
    sT = $(this).scrollTop();
    if (sT > 200) {
      button.setAttribute("class", "btn btn-link fixed-bottom upstyle");
    } else {
      button.setAttribute("class", "btn btn-link upstyle");
    }
  });
};

// BUTTON UP
// LAUNCHER //

$(document).ready(function(){
  loginRegister();
  GoogleMap();
  //ageVerif();
  // buttonUp();
});

// LAUNCHER //
