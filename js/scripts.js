



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

   // Search bar 
   $("#search-input").on("keyup", function() {
    var g = $(this).val();
    $(".card").each( function() {
    var s = $(this).attr('id');
    if (s.indexOf(g)!=-1) {
    $(this).show();
    }
    else {
    $(this).hide();
    }
    });
    });

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

 // Button click on email
 function  sendMail(){
    var sub = $("input[id^='subject']").val();
    var message = $("textarea[id^='message']").val()
    window.location.href = "mailto:jainjosephmuttar@gmail.com&subject=" + sub + "&body=" + message;

    $('#share-bar').share();
}
