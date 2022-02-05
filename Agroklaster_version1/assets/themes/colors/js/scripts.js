
$(function(){

    var $container = $('#container');
    $container.imagesLoaded( function() {
        $container.isotope();
    });
    
    
});


$(function() {
    var $container = $('#container');
    $container.isotope({
        itemSelector: '.photo'
    });
    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});
$(document).ready(function() {
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('.paralax1').parallax("50%", 0.3);
    $('.paralax2').parallax("50%", 0.3);
    $('.paralax3').parallax("50%", 0.3);
    $('.paralax4').parallax("50%", 0.3);
    $('.paralax5').parallax("50%", 0.3);
    $('.paralax6').parallax("50%", 0.3);
    $('.paralax7').parallax("50%", 0.3);
    $('.paralax8').parallax("50%", 0.3);
})
$(document).ready(function() {
    $("#owl-demo1").owlCarousel({
        navigation: true,
        autoPlay: true,
        responsiveRefreshRate: 200,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: false
    });
});
$(document).ready(function() {
    $("#owl-demo2").owlCarousel({
        navigation: true,
        autoPlay: true,
        responsiveRefreshRate: 200,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsTablet: [768, 4],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: false
    });
});
$(document).ready(function() {
    $("#owl-demo3").owlCarousel({
        navigation: true,
        autoPlay: true,
        responsiveRefreshRate: 200,
        items: 3,
        pagination: false,
        navigationText: false
    });
});
$(".collapse").collapse({
    toggle: true
})
$(document).ready(function() {
    $('#bxslider').bxSlider();
});
$(document).ready(function() {
    $('#bxslider1').bxSlider();
});
$(document).ready(function() {
    $('#bxslider2').bxSlider();
});
$(document).ready(function() {
    var menu = $('.navbar');
    $(window).scroll(function() {
        var y = $(this).scrollTop();
        var z = $('.section2').offset().top;
       
    });
   
    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function() {
            window.location.hash = target;
        });
 

    });
});


$('.toplinkwrapper a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function() {
            window.location.hash = target;
        });

});

$('.secondlinkdown a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1600, 'swing', function() {
            window.location.hash = target;
        });

});

new cbpScroller(document.getElementById('cbp-so-scroller'));
$(document).ready(function() {
    $(".iframe").colorbox({
        iframe: true,
        slideshow: false,
        width: "100%",
        height: "100%"
    });
});


$(".group4").colorbox({
    rel: 'group4'
});
jQuery(document).ready(function() {
    $(document).bind('cbox_open', function() {
        $('html').css({
            overflow: 'hidden', position: 'fixed'
        });
    }).bind('cbox_closed', function() {
        $('html').css({
            overflow: 'visible', position: 'relative'

        });
    });
});

(function ($){
$(function (){
 $smallscreen_colorbox();

$(window).resize(function () {
            $smallscreen_colorbox()
        });

    });

    $smallscreen_colorbox = function ()
    {
        if ( $(window).width() <= 767 ) {
            $('.colorbox').colorbox.remove();
        } else {
            $('.colorbox').colorbox({rel:'colorbox'});
        }            
    }

})(jQuery);





function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}