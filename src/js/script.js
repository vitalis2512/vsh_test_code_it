//"use strict";

//= libs/overthrow.min.js
//= plugins/jquery.nanoscroller.js
//= plugins/owl.carousel.min.js
//= plugins/jquery.arcticmodal.js
//= plugins/jquery.mousewheel.js

//= components/section_header.js
//= components/section_slider.js
//= components/section_sidebar.js
//= components/section_products.js


var $master = $("#wrapper"),
    $hcm = $(".headerWrapMobile"),
    $slideMenu = $("#slideMenu"),
    $nano = $('.nano'),
    $header = $(".header"),
    $headerHelper = $(".headerHelper");


function Height_header(hh, h){
    var $header_height = hh.outerHeight();
    h.css({
        "height" : $header_height
    });
    hh.css({
        "position" : "fixed",
        "top" : 0,
        "left" : 0,
        "width" : "100%",
        "z-index" : 2
    });
}Height_header($header, $headerHelper);


    // nanoScroller
    $nano.nanoScroller({
        preventPageScrolling: true,
        alwaysVisible: false,
        iOSNativeScrolling: true
    });
    $('.slideMenuClose').on('click', function () {
        $hcm.removeClass('active');
        $master.removeClass('slided');
        $slideMenu.removeClass('slided');
        return false;
    });
    $hcm.on('click', function () {
        $hcm.toggleClass("active");
        $master.toggleClass("slided");
        $slideMenu.toggleClass("slided");
        return false;
    });


$(window).resize(function(){
    Height_header($header, $headerHelper);
});

var feedbackModule = function feedbackModule() {
    function validateFeedbackForm(fields) {
        var hasError = false;
        var errorMessages = {
            required: 'is required',
            phone: 'invalid phone number. Format is +XX XXXX XXXX',
            email: 'is mandatory field'
        };

        var validationRules = {
            required: function(val) {
                return !!val;
            },
            phone: function(val) {
                return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(val);
            },
            email: function(val) {
                return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
            }
        };

        function validate(field) {
            for(var i = 0, j = field.validations.length; i < j; i++) {
                if(!validationRules[field.validations[i]](field.$el.val())) {
                    hasError = true;
                    field.$el.val(field.name + ' ' + errorMessages[field.validations[i]]);
                    field.$el.addClass('error');
                    return;
                } else {
                    field.$el.removeClass('error');
                }
            }
        }

        fields.forEach(function(field) {
            validate(field);
        });

        return hasError;

    }

    $('#feedback').on("click" ,function() {
        var c = $('<div class="box-modal" />');
        c.html($('.b-text').html());
        c.prepend('<div class="box-modal_close arcticmodal-close">закрыть</div>');
        $.arcticmodal({
            content: c
        });
    });

    $(document).on('click', '.arcticmodal-container #button', function() {
        var fields = [
            {
                name: 'name',
                $el: $('.arcticmodal-container #name'),
                validations: ['required']
            },
            {
                name: 'phone',
                $el: $('.arcticmodal-container #phone'),
                validations: ['required', 'phone']
            },
            {
                name: 'email',
                $el: $('.arcticmodal-container #email'),
                validations: ['required', 'email']
            }
        ];
        var error = validateFeedbackForm(fields);
        console.log('Form has error ' + error);
        return error;
    });
};
feedbackModule();