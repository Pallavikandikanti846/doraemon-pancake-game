// Window onload assigning function
window.onload = pageReady;

// Starting the function on page load
function pageReady() {
  // Getting a;ll the required HTML elements
  var imageDiv = document.getElementById("backgroundImage");
  var startBtn = document.getElementById("startBtn");
  var doraemonStanding = document.getElementById("doraemonStanding");
  var doraemonWalking = document.getElementById("doraemonWalking");
  var bush = document.getElementById("bush");
  var flowerPot = document.getElementById("flowerPot");
  var mailBox = document.getElementById("mailBox");
  var dogHouse = document.getElementById("dogHouse");
  var foodCart = document.getElementById("foodCart");
  var grass = document.getElementById("grass");
  var bench = document.getElementById("bench");
  var cat = document.getElementById("cat");
  var bgMusic = document.getElementById("backgroundMusic");
  var onclickSound = document.getElementById("clickMusic");

  // On click of start function
  startBtn.onclick = function () {
    startBtn.style.display = "none";
    doraemonStarts();
    bgMusic.load();
    // bgMusic.currentTime=0.2;
    bgMusic.currentTime = 0.8;
    bgMusic.play();
  }
  // click Function starts here
  function doraemonStarts() {

    // Setting the Doraemon Image 
    doraemonStanding.style.display = "none";
    doraemonWalking.style.display = "block";
    doraemonWalking.style.animation = "moveDoraemon 10s linear forwards, walkDoraemon 0.5s ease-in-out infinite";
    doraemonWalking.style.animationPlayState = "running";
    doraemonWalking.style.zIndex = "10";

    // removing objects disabled class once the Doraemon starts walking
    $("#bush").removeClass("disabled");
    $("#flowerPot").removeClass("disabled");
    $("#dogHouse").removeClass("disabled");
    $("#mailBox").removeClass("disabled");
    $("#foodCart").removeClass("disabled");
    $("#rock").removeClass("disabled");
    $("#grass").removeClass("disabled");
    $("#bench").removeClass("disabled");
    $("#cat").removeClass("disabled");


  }
  // Function to display message when there are no pancakes
  function noPancake(bottom, right) {
    $("#message").css({
      "bottom": bottom,
      "right": right
    });
    $("#message").html("No Pancakes🙁").css("display", "block").fadeIn("slow");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonsad.png";

    setTimeout(function () {
      $("#message").fadeOut("slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  }
  // Function for playing and pausing music
  function objectMusic() {
    onclickSound.currentTime = 0;
    onclickSound.play();
    setTimeout(function () {
      onclickSound.pause();
      onclickSound.currentTime = 0;
    }, 1000);
  }
  // On click of bush object assigning function
  $("#bush").on("click", function () {

    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    $("#doraCake1").css("zIndex", "1");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonpancake.png";
    $("#doraCake1").fadeIn("slow");

    setTimeout(function () {
      $("#doraCake1").fadeOut("slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  });
  // On click of mailbox object assigning function
  $("#mailBox").on("click", function () {

    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    $("#doraCake2").css("zIndex", "1");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonpancake.png";
    $("#doraCake2").fadeIn("slow");

    setTimeout(function () {
      $("#doraCake2").fadeOut("slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  });
  // On click of rock object assigning function
  $("#rock").on("click", function () {

    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    $("#doraCake3").css("zIndex", "1");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonpancake.png";
    $("#doraCake3").fadeIn("slow");

    setTimeout(function () {
      $("#doraCake3").fadeOut("slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  });
  // On click of cat object assigning function
  $("#cat").on("click", function () {

    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    $("#doraCake4").css("zIndex", "1");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonpancake.png";
    $("#doraCake4").fadeIn("slow");

    setTimeout(function () {
      $("#doraCake4").fadeOut("slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  });
  // On click of dog house object assigning function
  $("#dogHouse").on("click", function () {

    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    $("#doraCake5").css("zIndex", "1");
    doraemonWalking.style.animationPlayState = "paused";
    doraemonWalking.src = "./Images/doraemonpancake.png";
    $("#doraCake5").fadeIn("slow");

    setTimeout(function () {
      $("#doraCake5").fadeOut("Slow");
      bgMusic.play();
      doraemonWalking.src = "./Images/doraemonwalking.png";
      doraemonWalking.style.animationPlayState = "running";
    }, 1000);
  });
  // On click of food cart object assigning function
  $("#foodCart").on("click", function () {
    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    noPancake("15%", "23vw");
  });
  // On click of flower pot object assigning function
  $("#flowerPot").on("click", function () {
    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    noPancake("42%", "39.583vw");
  });
  // On click of grass object assigning function
  $("#grass").on("click", function () {
    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    noPancake("13%", "43vw");
  });
  // On click of bench object assigning function
  $("#bench").on("click", function () {
    $(this).addClass("clicked");
    bgMusic.pause();
    objectMusic();
    noPancake("19%", "12vw");
  });
  // assigning function once the animation ends
  doraemonWalking.addEventListener("animationend", restartGame);

  // Function to trigger when animation stops
  function restartGame() {
    doraemonWalking.style.display = "none";
    doraemonWalking.style.animation = "none";

    $("#happyDora").css("display", "block");
    $("#happyDora").css("left", "2.083vw");

    $("#thanksMessage").css("display", "block");

    setTimeout(function () {
      $("#happyDora").css("display", "none");
      $("#happyDora").css("animation", "none");
      doraemonStanding.style.display = "block";
      doraemonStanding.style.left = "0px";
      bgMusic.pause();
      bgMusic.currentTime = 0;
      startBtn.style.display = "block";
      $("#thanksMessage").css("display", "none");
    }, 3590);

    $("#bush").addClass("disabled").removeClass("clicked");
    $("#flowerPot").addClass("disabled").removeClass("clicked");
    $("#dogHouse").addClass("disabled").removeClass("clicked");
    $("#mailBox").addClass("disabled").removeClass("clicked");
    $("#foodCart").addClass("disabled").removeClass("clicked");
    $("#rock").addClass("disabled").removeClass("clicked");
    $("#grass").addClass("disabled").removeClass("clicked");
    $("#bench").addClass("disabled").removeClass("clicked");
    $("#cat").addClass("disabled").removeClass("clicked");
  }
}
