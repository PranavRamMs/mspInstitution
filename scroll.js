var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 10000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function send_data(){
    var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
    var i;
    var data = [];
    for(i=0; i<form_data.length; i++){
      data.push(form_data[i].value);
    }
    google.script.run.saveData(data); // send to google app script
    document.getElementById("form").style.display = "none"; // make form invisible
    document.getElementById("completion-msg").style.display = "block"; // Optional if you want to give a completion feedback!
  }
  function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
  }
  
  // App Script function to save data to sheet
  function saveData(data) {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(data);
  }
  
