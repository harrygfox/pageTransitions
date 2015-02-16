// Called immediately
(function($){
    'use strict';
    var $body = $('html', 'body');
    var content = $('#main').smoothState({
    // Instantiate SmoothState and pass callbacks:
        // Ran when a link has been activated, a "click".
        onStart: {
            duration: 250,
            render: function() {
                // Alternate-reverse the css animations 
                // Used to restart css animations with a class.
                content.toggleAnimationClass('is-exiting');

                // And then scroll user to the top
                $body.animate({ 
                    'scrollTop': 0 
                });
            }
        }


    }).data('smoothState');

})(jQuery);