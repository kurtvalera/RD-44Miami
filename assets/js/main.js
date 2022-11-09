$(document).ready(function () {
    $(".nav-avatar").click(function () {
      $(".body-avatar").css('display', 'flex');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-body').css('background-image', "url('assets/images/avatar-bg.png')");
      $('.container-body').css('background-size', "cover");
      
      $(".nav-private").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });

    $(".nav-private").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'flex');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-body').css('background-image', "url('assets/images/private-bg.png')");
      $('.container-body').css('background-size', "cover");

      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");   

    });

    $(".nav-space").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'flex');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'none');
      $('.container-body').css('background-image', "url('assets/images/space-bg.png')");
      $('.container-body').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
      
    });

    $(".nav-physical").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'flex');
      $(".body-luxury").css('display', 'none');
      $('.container-body').css('background-image', "url('assets/images/physical-bg.png')");
      $('.container-body').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(".nav-luxury").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });

    $(".nav-luxury").click(function () {
      $(".body-avatar").css('display', 'none');
      $(".body-private").css('display', 'none');
      $(".body-space").css('display', 'none');
      $(".body-physical").css('display', 'none');
      $(".body-luxury").css('display', 'flex');
      $('.container-body').css('background-image', "url('assets/images/luxury-bg.png')");
      $('.container-body').css('background-size', "cover");
      $(".nav-avatar").removeClass("nav-active");
      $(".nav-space").removeClass("nav-active");
      $(".nav-physical").removeClass("nav-active");
      $(".nav-private").removeClass("nav-active");
      $(this).addClass("nav-active");  
    });
  });