//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
  

//An image to overlay
$overlay.append($image);


//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  
  getCurrentImage(this);

  //Show the overlay.
  $overlay.show();
});



//Lightbox Gallery Navigation
var $leftArrow = $("<div id='leftArrow'></div>");
var $rightArrow = $("<div id='rightArrow'></div>");
var $closeLightbox = $("<div id='closeLightbox'></div><div style='clear:both'></div>");

 
$image.before($closeLightbox);
$image.before($leftArrow);
$image.after($rightArrow);


$leftArrow.click(function(){
  getPrevImage();
});

$rightArrow.click(function(){
  getNextImage();
});

function getCurrentImage (currentImage) {  
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");
   
    $image.attr("src", imageLocation);

    
    var captionText = $(currentImage).children("img").attr("alt");
    $caption.text(captionText);
}

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if(imageParent.length!=0){
      thisImage = $(imageParent).children("a");
    // imageLocation = $(thisImage).attr("href");
    // $image.attr("src", imageLocation);
    }
    getCurrentImage(thisImage);
    
}

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.length!=0){
    thisImage = $(imageParent).children("a");
      // imageLocation = $(thisImage).attr("href");
      // $image.attr("src", imageLocation);
    }
    getCurrentImage(thisImage);
}

//When overlay is clicked
$closeLightbox.click(function(){
  //Hide the overlay
  $overlay.hide();
});

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up-lg',
    outClass: 'fade-out-up-lg',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


