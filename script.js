$(document).ready(function () {
  $(".menu-button").click(function () {
    $(".navbar-links").slideToggle(2000);
  })

})


// Smooth Scrolling
$('.btn a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});