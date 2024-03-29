(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'../www.googletagmanager.com/gtm5445.html?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WC53SQD');

$(document).ready(function(){
    $(window).scroll(function(){
      $("img.lazy").each(function(){
          //if($(this).attr('src')!==null && $(this).attr('src')!==undefined){
              if ($(this).is(':in-viewport')) {
                  $(this).attr('src',$(this).attr('data-original'));
              } else {
                  
              } 
          //}
      });
    });
  });
  
  $(document).ready(function(){
  
      if(window.location.hash=='#notification'){
          $('#dropdownNotification').find('span.badge').hide();
          parent.location.hash = '';
      }
  
      if($('#videostories').length){
          $('#videostories').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 220,
              slideshowSpeed: 3000,
              move: 1,
              itemMargin: 7
          });
      }
      if($('#photoStories').length){
          $('#photoStories').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 220,
              slideshowSpeed: 3000,
              move: 1,
              itemMargin: 7
          });
      }
  
      if($('#static_opinion').length){
          $('#static_opinion').flexslider({
              animation: "slide",
              controlNav: true,
              directionNav:false,
              animationLoop: false,
              slideshow: false,
              //itemWidth: 280,
              slideshowSpeed: 3000,
              move: 1
          });
      }
  
      if($('.internationalSubnewsFlex').length){
          for(var i=1; i<= $('.internationalSubnewsFlex').length;i++) {
              $('.internationalSubnewsFlex_'+i).flexslider({
                  animation: "slide",
                  controlNav: false,
                  animationLoop: false,
                  slideshow: false,
                  itemWidth: 180,
                  slideshowSpeed: 3000,
                  move: 1
              });
          }
      }
      
      if($('#podcastFlex').length){
          $('#podcastFlex').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 400,
              slideshowSpeed: 3000,
              move: 1,
              itemMargin: 6
          });
      }
  
      if($('#topnewsFlex').length){
          $('#topnewsFlex').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 312,
              slideshowSpeed: 3000,
              move: 1,
              itemMargin: 15
          });
      }
  
      if($('#videoFlex').length){
          $('#videoFlex').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 300,
              slideshowSpeed: 3000,
              move: 1,
              itemMargin: 15
          });
      }
      
      $("img.lazy").each(function(){
          $(this).attr('src','assets/images/lazy-logopng.html');
      });
      
      /*$("img.lazy").lazyload({
          effect : "show",
          event  : 'scroll',
      });*/
      /**
       **** Sticky function
       */
      $("#back-top").hide();
      $(window).scroll(function() {
          if ($(window).scrollTop() > 180) {
              $('#back-top').fadeIn();
              //$('header.non-sticky').hide();
              $('header.sticky').show();
          } else {
              $('#back-top').fadeOut();
              $('header.sticky').hide();
              //$('header.non-sticky').show();
          }
      });
      $('#back-top').click(function(){
          $('body,html').animate({scrollTop:0},'fast');return false;
      });
      // ******************************//
      /**
       * SEARCH FUNCTION
       */
      function google_search(srchInputElm){
          var keyword = srchInputElm.val().trim().toLowerCase().replace(/\s/g,'+');
          if(keyword==''){
              srchInputElm.css({'background':'#FF9','color':'#444'}).focus()
          }else{
              var URL = 'https://www.kalbela.com/search/google/?q='+keyword;
              window.location.href = URL;
          }
      }
      //if($('.srch_keyword').is(':visible')){
          $('.search_button').click(function(){
              google_search($(this).parent('div').find('.srch_keyword'));
          });
          $('.srch_keyword').keypress(function(e) {
              var p = e.which;
              if(p==13) google_search($(this));
          });
  
      //}
  
      // Show header search box
  
      $('.search_icon').click(function(){
          $('div.search_box').show();
      });
      $('.cross_btn').click(function(){
          $('div.search_box').hide();
      });
  
      //Megamenu
  
      $("#all_menu").click(function(){
          //$(".megaMenuWrapper").toggle();
          if ($(".megaMenuWrapper").css("display")=="none"){
              $(".megaMenuWrapper").show();
              $( "#all_menu" ).find( "i" ).removeClass('fa-bars');
              $( "#all_menu" ).find( "i" ).addClass('fa-times');
  
          } else {
              $(".megaMenuWrapper").hide();
              $( "#all_menu" ).find( "i" ).addClass('fa-bars');
  
          }
      });
  
      $(".subnavbtn").hover(function(){
          //$(".megaMenuWrapper").toggle();
          if ($(this).parent('.subnav').find(".subnav-content").css("display")=="none"){
              //$(this).parent('.subnav').find(".subnav-content").show();
              // $( "#subnavbtn" ).find( "i" ).removeClass('fa-bars');
              // $( "#all_menu" ).find( "i" ).addClass('fa-times');
              $(this).find('i').animate(
                  { deg: 180 },
                  {
                  duration: 500,
                      step: function(now) {
                          $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                  }
              );
  
          } else {
              //$(this).parent('.subnav').find(".subnav-content").hide();
              //$( "#all_menu" ).find( "i" ).addClass('fa-bars');
              $(this).find('i').animate(
                  { deg: 0 },
                  {
                  duration: 500,
                      step: function(now) {
                          $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                  }
              );
          }
      });
  
      // breadcumb
      $(".cat_list ul li a,#site_map ol li").css({"font-size": "17px"});
  
      $('.breaking-news-close').on('click',function(){
          $('section#breaking-news').hide();
      });
  
      $('.just-news-close').on('click',function(){
          $('section#just-news').hide();
      });
  
      $(".dropdown").hover(function(){
          var dropdownMenu = $(this).children(".dropdown-menu");
          if(dropdownMenu.is(":visible")){
              dropdownMenu.parent().toggleClass("open");
          }
      });
  
      $('#dropdownNotification').hover(function(){
          $(this).find('span.badge').hide();
      });
  
  
  
      $('.dropdown_menu_hover').hover(function(){
          $(this).parent('div').find('nav').css({'opacity':'0'});
          $(this).find(".dropdown_menu").fadeIn();
          
          var w = (parseInt($(this).find('a:first-child').width()) - (parseInt($(this).find('a:first-child').css('padding-left').replace('px','')) + parseInt($(this).find('a:first-child').css('padding-right').replace('px','')))) /2 + parseInt($(this).offset().left);
          var ww = parseInt($(this).find(".dropdown_menu").offset().left)/* + parseInt($(this).css('padding-left').replace('px',''))*/;
          
          w = w - ww;
          
          $('body').find('#dynamicArrow').remove();
          var css = '.dropdown-menu:before{ left:'+w+'px !important; right:'+(w+10)+'px !important;}.dropdown-menu:after{ left:'+(w+1)+'px !important; right:'+(w+11)+'px !important}';
          $('body').append('<div id="dynamicArrow"><style>'+css+'</style></div>');
      }, function(){
          $(this).parent('div').find('nav').css({'opacity':'1'});
          $(this).find(".dropdown_menu").hide();
          $('body').find('#dynamicArrow').remove();
      });
  
      $('.dy-video-play').on('click',function (){
          $('.dy-video-play').removeClass('active');
          $(this).addClass('active');
          var embedCode = $(this).find('.flex-grow-1 .embed-code').html();
          var videoSummery = $(this).find('.flex-grow-1 .video-summery').html();
          var menuLink = $(this).find('.flex-grow-1 .menu-link').html();
          var menuLinkHref = $(this).find('.flex-grow-1 .menu-link-href').html();
          var title = $(this).find('.flex-grow-1 .title').html();
          var videoLink = $(this).find('.flex-grow-1 .video-link').html();
  
          $(this).parents('.dy-video-play-parent').find('.lead-video .embed-code').html(decodeURIComponent(embedCode).replaceAll('+',' '));
          $(this).parents('.dy-video-play-parent').find('.lead-video .video-summery').html(videoSummery);
          $(this).parents('.dy-video-play-parent').find('.lead-video .menu-link').html(menuLink);
          $(this).parents('.dy-video-play-parent').find('.lead-video .menu-link').attr('href',menuLinkHref);
          $(this).parents('.dy-video-play-parent').find('.lead-video .link').attr('href',videoLink);
          $(this).parents('.dy-video-play-parent').find('.lead-video .title').html(title);
      });
  
  
  // for detail page large img
      $('#dtl_part').lightGallery({
          rotate:false,
          selector:'.detailImg',
          download:false
      });
  
      // for detail page large img
      $('#photo_dtl_content').lightGallery({
          rotate:false,
          selector:'.album_img',
          download:false
      });
      
  
  });
  
  // for detail page copy button
  function copyToClipboard() {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(window.location.href).select();
          document.execCommand("copy");
          $temp.remove();
      }
  
  //window.instgrm.Embeds.process();

           /* When the user clicks on the button, 
         toggle between hiding and showing the dropdown content */
         function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

          var dropdown_search_open = false, click_srch_allow = true;
          $('#dropdownSearch').on('click', function(){
              // console.log(click_srch_allow)
              if(click_srch_allow){            
                  click_srch_allow = false
                  if(dropdown_search_open) {
                      $('.open_icon',this).show()
                      $('.close_icon',this).hide();
                      $('.dropdownSearch').slideUp();
                      dropdown_search_open = false
                  }else
                  {
                      $('.open_icon',this).hide()
                      $('.close_icon',this).show();
                      $('.dropdownSearch').slideDown()
                      dropdown_search_open = true
                  }
          
                  var srchClickInterval = setInterval(function(){
                      click_srch_allow = true; clearInterval(srchClickInterval)
                  },500);
              }
          });
          
          $('#dark-mode').on('click',function(){
              if($(this).attr('data-mode')=='light'){
                  $('body').addClass('dark'); 
                  $(this).addClass('fa-solid');
                  $(this).removeClass('fa-regular');
                  $(this).attr('data-mode','dark');
              }else{
                  $('body').removeClass('dark');
                  $(this).addClass('fa-regular');
                  $(this).removeClass('fa-solid');
                  $(this).attr('data-mode','light');
              }
          });

          var dropdown_menu_open = false, click_allow = true;
                        $('.dropdownAllMenuBut').on('click', function(){
                            // console.log(click_allow)
                            if(click_allow){            
                                click_allow = false
                                if(dropdown_menu_open) {
                                    //$('.open_icon',this).show()
                                    //$('.close_icon',this).hide();
                                    $('.dropdownAllMenu').slideUp();
                                    dropdown_menu_open = false
                                }else
                                {
                                    //$('.open_icon',this).hide()
                                    //$('.close_icon',this).show();
                                    $('.dropdownAllMenu').slideDown()
                                    dropdown_menu_open = true
                                }
                        
                                var menuClickInterval = setInterval(function(){
                                    click_allow = true; clearInterval(menuClickInterval)
                                },500);
                            }
                        })

                        var dropdown_menu_open = false, click_allow = true;
                        $('.dropdownAllMenuBut').on('click', function(){
                            // console.log(click_allow)
                            if(click_allow){            
                                click_allow = false
                                if(dropdown_menu_open) {
                                    //$('.open_icon',this).show()
                                    //$('.close_icon',this).hide();
                                    $('.dropdownAllMenu').slideUp();
                                    dropdown_menu_open = false
                                }else
                                {
                                    //$('.open_icon',this).hide()
                                    //$('.close_icon',this).show();
                                    $('.dropdownAllMenu').slideDown()
                                    dropdown_menu_open = true
                                }
                        
                                var menuClickInterval = setInterval(function(){
                                    click_allow = true; clearInterval(menuClickInterval)
                                },500);
                            }
                        })

                        function closeadsbottom(){
                            $('#bottom_ads').animate({
                            'bottom' : '-135px'
                            },1000);
                            }
                            function closeadsfeatureimage(){
                            $('#featureimage_ads').animate({
                            'display' : 'none',
                                    opacity : 0
                            },1000);
                            }