



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


////////////


  ////////////////




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

 // about us page
 function bigImg(x){
    x.style.width = "270px";
    x.style.height = "270px";
 }

//payment


$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if(owner.val().length < 5){
            alert("Enter a valid full name");
        } else if (!isCardValid) {
            alert("Enter a valid card number");
        } else if (!isCvvValid) {
            alert("Enter a valid CVV");
        } else {
            // Everything is correct. Add your form submission code here.
            alert("Purchase Successful");
            localStorage.removeItem('cartNumbers');
            window.location.href='order.html';
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('totalCost');
        }
    });
    
       
    
  
});

function sendEmail() {
    console.log("Name is : " + document.getElementById("contactname").value
        + "Email is: " + document.getElementById("contactemail").value
        + "Subject is: " + document.getElementById("subject").value
        + "Message is: " + document.getElementById("message").value);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "alentest@gmail.com",
        Password: "6A27528C08CC8CB7C392290F071F20C4A62E",
        To: "devuauma1996@gmail.com",
        From: document.getElementById("contactemail").value,
        Subject: document.getElementById("subject").value,
        Body: "Name is : " + document.getElementById("contactname").value
            + " Email is: " + document.getElementById("contactemail").value
            + " Subject is: " + document.getElementById("subject").value
            + " Message is: " + document.getElementById("message").value,
    }).then(
    alert("Mail sent successfully"));
}

function validationz() {
    var name = document.getElementById("contactname").value;
    if (validateTexts(document.getElementById("contactname"))==false) {
        alert("Please Enter the Name correct ");
        document.getElementById("contactname").focus();
        return;
    }
    var emailid = document.getElementById("contactemail").value;
    var subj = document.getElementById("subject").value;
    if (validateTexts(document.getElementById("subject")) == false) {
        alert("Please Enter the Subject correct ");
        document.getElementById("subject").focus();
        return;
    }
  /*  var feedback = document.getElementById("message").value;
    if (validateTexts(document.getElementById("message")) == false) {
        alert("Please Enter the Feedbacks correct ");
        document.getElementById("message").focus();
        return;
    }
*/
    
    sendEmail();

}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        alert("Valid email address!");
       // document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        //document.form1.text1.focus();
        return false;
    }
}

function validateTexts(input) {
    var regEx = /^[A-Za-z]+$/;
    inputval = input.value;
    if (inputval.match(regEx)) {
        return true;
    } else {
        alert("Only Alphabets are allowed");
        return false;
    }
   // var re = /^[\w ]+$/;

}