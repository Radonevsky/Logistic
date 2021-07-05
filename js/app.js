$(function () {
  let intro = $("#intro");
  let header = $("#header");
  let introH = intro.innerHeight();
  let headerH = header.innerHeight();
  let scrollTop = $(window).scrollTop();
  


  /* Header scroll
  ================================================================*/

  headerScroll();

  $(window).on("scroll resize", function () {
    headerScroll();
  });

  function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();

    scrollTop = $(this).scrollTop();

    if (scrollTop >= introH - headerH) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }


  /* Smooth scroll to sections
  ================================================================*/

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let scrollEl = $(this).data("scroll");
    let scrollElPosition = $(scrollEl).offset().top;

    $("html, body").animate({
      scrollTop: scrollElPosition - headerH
    }, 500)

  })


    /* ScrollSpy
  ================================================================*/
  let windowHeight = $(window).height();

  scrollSpy(scrollTop);

  $(window).on("scroll", function() {

    scrollTop = $(this).scrollTop();

    scrollSpy(scrollTop);

  })

  function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function() {

      let $this = $(this);
      let sectionId = $(this).data('scrollspy');
      let sectionOffset = $this.offset().top;
      sectionOffsetForScrollSpy = sectionOffset - (windowHeight * 0.3)
      
      if (scrollTop >= sectionOffsetForScrollSpy) {
        $('#nav [data-scroll]').removeClass('active');
        $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
      }

      if (scrollTop <= headerH) {
        $('#nav [data-scroll]').removeClass('active');
      }

    })
  }

});
