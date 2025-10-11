jQuery(window).on('load', function(){

    const width = jQuery(window).width();
    const unEnCircle = '南山大学'+'<br>'+'環境系サークル';
    const echoConstraction = 'ECHO'+'<br>'+'建設工事中';
    const thisContact = 'お問い合わせは'+'<br>'+'こちらから'
    const contactMessage = '要件とお名前を'+'<br>'+'記入してくださいね！'

    if(width < 750){
        jQuery('.loading_titleTop').html(unEnCircle);
        jQuery('.board_text__jobTitle').html(unEnCircle);

        jQuery('.board_text__name').html(echoConstraction);

        jQuery('.cta_title__conPage').html(thisContact);
        jQuery('.cta_text__conPage').html(contactMessage);
    }

    setTimeout(function() {
    jQuery('.l-loadingPage').addClass('l-loadingPage__is-active');

    jQuery('.l-mainPage').fadeIn(2000); 
    },2000);

    jQuery(window).on('scroll', function() {
    
            const width = jQuery(window).width();
            const scrollPos = jQuery(window).scrollTop();
            const windowHeight = jQuery(window).height();

            if(width < 750){
                if (scrollPos > 300) {
                    jQuery('.l-header__subpage').addClass('l-header__subpage__is-open');
                }
                else {
                    jQuery('.l-header__subpage').removeClass('l-header__subpage__is-open');
                }

                if (scrollPos > 700) {
                    jQuery('.l-header').addClass('l-header__is-open');
                }
                else {
                    jQuery('.l-header').removeClass('l-header__is-open');
                }
            }else{
                if (scrollPos > 500) {
                    jQuery('.l-header__subpage').addClass('l-header__subpage__is-open');
                }
                else {
                    jQuery('.l-header__subpage').removeClass('l-header__subpage__is-open');
                }
            
                if (scrollPos > 800) {
                    jQuery('.l-header').addClass('l-header__is-open');
                }
                else {
                    jQuery('.l-header').removeClass('l-header__is-open');
                }
            }

            jQuery('.subheadText').each(function() {
                const elemPos = jQuery(this).offset().top;

                if (scrollPos > elemPos - windowHeight*.9) {
                    jQuery(this).addClass('subheadText__is-open');
                } 
            });
            jQuery('.subheadText__r').each(function() {
                const elemPos = jQuery(this).offset().top; 

                if (scrollPos > elemPos - windowHeight*.9) {
                    jQuery(this).addClass('subheadText__r__is-open');
                } 
            });
            
        });

    jQuery('.navSp_hamburger').click(
        function(){
            jQuery('.line1').toggleClass('line1__is-active');
            jQuery('.line2').toggleClass('line2__is-active');
            jQuery('.line3').toggleClass('line3__is-active');
            jQuery('.navSp_dropdown').toggleClass('navSp_dropdown__is-open');
        }
    );

    jQuery('.navSp_contact').click(
        function(){
            jQuery(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform .2s'
            });
            setTimeout(() => {
                jQuery(this).css({
                    'transform': 'scale(1)',
                    'transition': 'transform .2s'
            });
        }, 1000);
    });

    jQuery('.dropdown_item').click(
        function(){
            jQuery(this).css({
                'transform': 'scale(1.05)',
                'transition': 'transform .2s'
            });
            setTimeout(() => {
                jQuery(this).css({
                    'transform': 'scale(1)',
                    'transition': 'transform .2s'
                });
        }, 1000);
    });

    jQuery('.topNews_item').click(
        function(){
            jQuery(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform .5s'
            });
            setTimeout(() => {
                jQuery(this).css({
                    'transform': 'scale(1)',
                    'transition': 'transform .5s'
            });
        }, 1000)
    });

})
    
        

    

//const width = jQuery(window).width();
/*
jQuery(window).on('load', function(){
    
        setTimeout(function() {
        jQuery('.l-loadingPage').addClass('l-loadingPage__is-active');

        jQuery('.l-mainPage').fadeIn(2000); 
        },2000);

    }),

*/ 