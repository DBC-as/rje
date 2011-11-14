// # Prototype of scrolling implemented in JavaScript
// Mobile platforms often do not support position:fixed,
// so if we want to have fixed headers and footers
// we need to implement scrolling ourselves.

$(function() {
    // create a container and a content div, 
    // which will be used as scrolling element
    var $container = $('<div>');
    var $content = $('<div>');
    var $body = $('body');
    $body.append($container);
    $container.append($content);
    
    // fill some content in $content,
    // such that we actually need to scroll
    (function() {
        var s = [];
        for(var i = 0; i < 10000; ++i) {
            s.push(i);
        }
        $content.text(s.join(" "));
    })();
    
    // Style setup
    $body
        .css('margin', '0px')
        .css('pading', '0px');
    $container
        .css('overflow', 'hidden')
        .css('top', '0px')
        .css('left', '0px')
        .css('width', '100%')
        .css('height', ($(window).height()) + 'px')
        .css('margin', '0px')
        .css('padding', '0px');
    $content.css('position', 'relative');
    
    
    // debug styling
    //$content.css('background-color', 'rgba(255, 0, 0, .5)');
    //$container.css('background-color', 'rgba(0, 255, 0, .5)');
    //$body.css('background-color', 'rgba(0, 0, 255, .5)');
    
    // actual scroll code
    var prevy = 0;
    var posy = 0;
    function pressY(y) {        
        prevy = y;
    }
    function releaseY(y) {
        
    }
    function moveY(y) {
        var delta = y - prevy;
        posy += delta;
        $content.css('top', posy + 'px');
        prevy = y;
    }
    
    // event delegation
    var pressed = false;
    $container.bind('mousedown', function(e) {
        pressed = true;
        pressY(e.pageY);        
        return true;
    });
    $container.bind('mouseleave mouseup', function(e) {
        pressed = false;
        return true;
    });
    $container.bind('mousemove', function(e) {
        if(pressed) {
            moveY(e.pageY);
        }
        return true;
    });
    $container.bind('touchstart', function(e) {
        pressed = true;
        pressY(e.originalEvent.touches[0].pageY);
        return true;
    });
    $container.bind('touchmove', function(e) {
        e.preventDefault();
        if(pressed) moveY(e.originalEvent.touches[0].pageY);
        return true;
    });
    $container.bind('touchend', function(e) {
        pressed = false;
        releaseY(e.originalEvent.touches[0].pageY);
        return true;
    });
});