
$(function(){
  "use strict";
  
      // Define Some Elements
      var allWindow = $(window),
          body = $('body'),
          top = allWindow.scrollTop(),
          navBar = $(".nav-wrapper");
  
  /*------------------------------------------------
    Javascript Function for The Preloader
  --------------------------------------------------*/
  
      allWindow.on("load", function() {
          $('.loader').fadeOut('slow');
      });
  
  
  
      function scrollFunctions() {
        stikyNav();
        ChangeClass();
        parallax();
        progressFunction();
      }
  
      // add Event listener to window
      allWindow.on('scroll', function() {
        scrollFunctions();
      });
  
  /*---------------------------------------------------------------------
  // Define stikyNav Function
  ----------------------------------------------------------------------*/
  function stikyNav() {
  
    top = allWindow.scrollTop();
  
    if ( top >= 100 ) {
      navBar.addClass("nav-sticky");
  
    } else {
      navBar.removeClass("nav-sticky");
    }
  
    // SHow Also Scroll up Button
    if ( top >= 1000 ) {
      $('.scroll-up').addClass("show-up-btn");
    } else {
      $('.scroll-up').removeClass("show-up-btn");
    }
  }
  
  
  /*----------------------------------------------------------------
    Javascript Function For Change active Class on navigation bar
  -----------------------------------------------------------------*/
  
  var sections = $('.one-page-section'),
  navList = navBar.find("ul.navbar-nav");
  
  // Define ChangeClass Function
  function ChangeClass() {
  
  top = allWindow.scrollTop();
  
  $.each(sections, function(i,val) {
  
    var section = $(this),
        section_top = section.offset().top - 10,
        bottom = section_top + section.height();
  
      if (top >= section_top && top <= bottom) {
  
        var naItems = navList.find('li');
  
        $.each(naItems ,function(i,val) {
          var item = $(this);
          item.find("a").removeClass("active");
        });
  
        navList.find('li [href="#' + section.attr('id') + '"]').addClass('active');
      }
  
  });
  
  } // End of ChangeClass Function
  
  /*---------------------------------------------------
    Javascript Function FOR PARALLAX EFFECT
  ---------------------------------------------------*/
  
      // create variables
      var backgrounds = $('.parallax');
  
      function parallax() {
  
        // for each of background parallax element
        $.each( backgrounds, function( i, val ) {
  
          var backgroundObj = $(this),
            backgroundObjTop = backgroundObj.offset().top,
            backgroundHeight = backgroundObj.height();
  
          // update positions
          top = allWindow.scrollTop();
  
            var yPos = ((top - backgroundObjTop))/2;
  
            if ( yPos <= backgroundHeight + backgroundObjTop ) {
              backgroundObj.css({
                backgroundPosition: '50% ' + yPos + 'px'
              });
            }
  
        });
      };
  
  /*---------------------------------------------------------------------
    SMOOTH SCROLLING
  ----------------------------------------------------------------------*/
  
        // Select all links with hashes
        $('a.scroll').on('click', function(event) {
            // On-page links
            if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
              // Figure out element to scroll to
              var target = $(this.hash),
                  speed= $(this).data("speed") || 800;
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, speed);
              }
            }
        }); 
  
        /*-----------------------------------------------------------------
    Javascript Function for PROGRESS BAR LINES  SCRIPT
  ------------------------------------------------------------------*/
  
      var linesHead = $(".skills-set"),
      line = $(".progress-bar-line");
      
  //Progress Bars function
  function progressFunction(e) {
  
    if ( linesHead.length ) {
  
      if (!linesHead.hasClass("done")) {
  
        var linesHeadTop = linesHead.offset().top,
            top = allWindow.scrollTop(),
            winH = allWindow.height() - 160;
  
        if (top >= linesHeadTop - winH) {
  
          linesHead.addClass("done");
          $.each( line, function( i, val ) {
  
          var thisLine = $(this),
            value = thisLine.data("percent"),
            progressCont = $(thisLine).closest('.progress-bar-linear').find(".progress-percentage-text span");
  
            thisLine.css("width",value + "%");
            progressCont.html(value + "%")
  
          });
        }
      }
    }
  } //End progressFunction Fuction
  });