$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['Landing', 'Training', 'Professional', 'WhyC', 'Contact'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['Landing', 'Training', 'Professional', 'WhyC', 'Contact'],
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '.college,.slide-box, .kbra-Essay, .kbra-Images, .start_Up, .Why-C',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : true,
        sectionsColor : ['#005382', '#E1E1E1','#E1E1E1', '#E1E1E1','#005382'],
        paddingTop: '0',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});