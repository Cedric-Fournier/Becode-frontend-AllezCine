// Sercive Worker //
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
 .register('service-worker.js')
 .then(function() { console.log('Service Worker Registered'); });
}
// Sercive Worker //
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
// FEATURED MOVIES //

function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

function showMovies(data) {
  let img = data[i].url;
  let year = data[i].date;
  let title = data[i].name;
  let y = data.indexOf(data[i]);
  let entry = '<div class="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"><img class="card-img-top" src=' + img + ' alt=' + title + '><div class="card-footer"><div class="text-center txt1 filmouf">' + title + '</div><br><div class=txt1>' + year + '</div></div></div>';
  if(y > 11) {
    $(entry).appendTo($('.wrapperJson3'));
  }
  else if(y > 5) {
    $(entry).appendTo($('.wrapperJson2'));
  } else {
    $(entry).appendTo($('.wrapperJson'));
  }
}

function clearMovies() {
  $(".wrapperJson").empty();
  $(".wrapperJson2").empty();
  $(".wrapperJson3").empty();
}

function moviesSelect(json) {
  clearMovies();
  $.getJSON(json, function(data){
    for(i in data) {
      showMovies(data);
    }
  });
}

function allMovies() {
  clearMovies();
  $.getJSON("./Assets/bibliotheque/JSON/movies.json", function(data){
    let test = Shuffle(data);
    for(i in data) {
      showMovies(data);
    }
  });
}

// FEATURED MOVIES //
// SHOP MOVIE //

function shop(num1, num2) {
  $.getJSON('./Assets/bibliotheque/JSON/movies.json', function(data){
    for(i = num1; i <= num2; i++){
      let img = data[i].url;
      let title = data[i].name;
      let year = data[i].date;
      let price = data[i].price;
      let id = 'movieID' + i
      let entry = '<div class="col-12 col-md-3 col-sm-6 col-lg-3"><div class="card imgclick" id=' + id + '><img class="card-img-top imgclick2" src=' + img + ' alt=' + title + '><div class="card-footer"><div class="text-center txt1 filmouf">' + title + '</div><br><div class="row"><div class="col txt1">' + year + '</div><div class="col txt1 prix">' + price + '</div></div></div></div></div>';
      if(i % 2 === 0){
        $(entry).appendTo($('.wrapperShop1'));
      } else {
        $(entry).appendTo($('.wrapperShop2'));
      }
    }
  });
}

shop(0, 7);
let x = 0;
let y = 7;
$('#shopForward').click(function(){
  $(".wrapperShop1").empty();
  $(".wrapperShop2").empty();
  x += 8;
  y += 8;
  if(x<24){
    shop(x, y);
    $('#shopBack').removeAttr("disabled");
  } else {
    shop(24, 30);
    $(this).attr("disabled", "true");
  }
});

$('#shopBack').click(function(){
  $(".wrapperShop1").empty();
  $(".wrapperShop2").empty();
  x -= 8;
  y -= 8;
  if(x <= 0) {
    $(this).attr("disabled", "true");
    shop(0, 7);
  } else {
    shop(x, y);
    $('#shopForward').removeAttr("disabled");
  }
});

$(document).on("click", ".imgclick", function(){
  let source = $(this).attr("id");
  let index2 = Number(source.slice(7));
  $.getJSON('./Assets/bibliotheque/JSON/movies.json', function(data){
    let trailer = data[index2].trailer;
    $('#embed1').attr('src', trailer);
    $('#embed2').html(data[index2].name);
    $('#embed3').html(data[index2].storyline);
    $('#embed4').html(data[index2].date);
    $('#embed5').html(data[index2].genre);
    $('#embed6').html(data[index2].price);
  });
});

// SHOP MOVIE //
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
  ageVerif();
  buttonUp();
  allMovies();
  $("#actionButton").click(function(){
    moviesSelect("./Assets/bibliotheque/JSON/action.json");
  });
  $("#comedieButton").click(function(){
    moviesSelect("./Assets/bibliotheque/JSON/comedie.json");
  });
  $("#scifiButton").click(function(){
    moviesSelect("./Assets/bibliotheque/JSON/scifi.json");
  });
  $("#allButton").click(function(){
    allMovies();
  });
  $("#theshowmust").click(function(){
  let hideshow = $(".hiddenRow").css("display");
  $(".showmore, .showless").toggle(function(){
    if(hideshow == "none") {
      $('.hiddenRow').css("display", "flex");
    } else {
      $('.hiddenRow').css("display", "none");
    }
  });
});
});

// LAUNCHER //
