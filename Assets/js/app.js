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

//show more or less movies on shop section

shop(0, 7);
let x = 0;
let y = 7;
$('#shopForward').click(function(){
  $(".wrapperShop1").empty();
  $(".wrapperShop2").empty();
  x += 8;
  y += 8;
  if(x<32){
    shop(x, y);
    $('#shopBack').removeAttr("disabled");
  } else {
    shop(32, 39);
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

//get trailer for card in shop section

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
  shop();
});

// LAUNCHER //
=======
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
