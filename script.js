jQuery(window).on('load', function(){

    const width = jQuery(window).width();
    const unEnCircle = '南山大学'+'<br>'+'環境系サークル';
    const thisContact = 'お問い合わせは'+'<br>'+'こちらから';
    const contactMessage = '要件とお名前を'+'<br>'+'記入してくださいね！';

    if(width < 750){
        jQuery('.loading_titleTop').html(unEnCircle);
        jQuery('.board_text__jobTitle').html(unEnCircle);

        jQuery('.cta_title__conPage').html(thisContact);
        jQuery('.cta_text__conPage').html(contactMessage);
    }

    setTimeout(function() {
        jQuery('.l-loadingPage').addClass('l-loadingPage__is-hidden');
        jQuery('.l-loadingPage').attr("aria-hidden", "true");

        jQuery('.l-mainPage').fadeIn(2000); 
        jQuery('.l-mainPage').attr("aria-hidden", "false");
    },2000);

    jQuery(window).on('scroll', function() {
    
            const width = jQuery(window).width();
            const scrollPos = jQuery(window).scrollTop();
            const windowHeight = jQuery(window).height();

            if(width < 750)/*スマホ用*/{
                //下層ページ
                if (scrollPos > 100) {
                
                    jQuery('.l-header__subpage').addClass('l-header__subpage__is-open');

                    jQuery('.l-header__subpage').attr("aria-hidden", "false");

                }if(scrollPos > 300){

                    jQuery('.nav__sp__subpage').css({
                        'background-color': 'transparent',
                        'box-shadow': 'none'
                    })

                }if(scrollPos <= 300){
                    jQuery('.nav__sp__subpage').css({
                        'background-color': 'white',
                        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)'
                    })
                }

                //トップページ
                if (scrollPos > 300) {
                    jQuery('.l-header').addClass('l-header__is-open');

                    jQuery('.l-header').attr("aria-hidden", "false");

                }if(scrollPos > 500){
                    jQuery('.nav__sp__toppage').css({
                        'background-color': 'transparent',
                        'box-shadow': 'none'
                    })

                }if(scrollPos <= 500){
                    jQuery('.nav__sp__toppage').css({
                        'background-color': 'white',
                        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)'
                    })
                }
                
            }else/*PC用*/{
                //下層ページ
                if (scrollPos > 200) {
                    jQuery('.l-header__subpage').addClass('l-header__subpage__is-open');

                    jQuery('.l-header__subpage').attr("aria-hidden", "false");
                }
            
                //トップページ
                if (scrollPos > 500) {
                    jQuery('.l-header').addClass('l-header__is-open');

                    jQuery('.l-header').attr("aria-hidden", "false");
                }
            }

            jQuery('.subheadText').each(function() {
                const elemPos = jQuery(this).offset().top;

                if (scrollPos > elemPos - windowHeight*.9) {
                    jQuery(this).addClass('subheadText__is-open');
                    jQuery(this).attr("aria-hidden", "false");
                } 
            });
            jQuery('.subheadText__r').each(function() {
                const elemPos = jQuery(this).offset().top; 

                if (scrollPos > elemPos - windowHeight*.9) {
                    jQuery(this).addClass('subheadText__r__is-open');
                    jQuery(this).attr("aria-hidden", "false");
                } 
            });
            
        });

    jQuery('.skipLink_text').focus(
        function() {
            jQuery('.skipLink').addClass('skipLink__is-focused');
            jQuery('.skipLink').attr("aria-hidden", "false");

            jQuery('.l-header__subpage').addClass('l-header__subpage__is-open');
            jQuery('.l-header__subpage').attr("aria-hidden", "false");
            jQuery('.l-header').addClass('l-header__is-open');
            jQuery('.l-header').attr("aria-hidden", "false");
        }
    ).blur(
        function() {
            jQuery('.skipLink').removeClass('skipLink__is-focused');
            jQuery('.skipLink').attr("aria-hidden", "true");
        }
    );

    jQuery('.navSp_hamburger').click(
        function(){
            jQuery('.line1').addClass('line1__is-active');
            jQuery('.line2').addClass('line2__is-active');
            jQuery('.line3').addClass('line3__is-active');
            jQuery('.navSp_dropdown').addClass('navSp_dropdown__is-open');

            jQuery(this).attr("aria-expanded", "false");
            jQuery('.navSp_dropdown').attr("aria-hidden", "false");
        }
    );
    jQuery('.navSp_hamburger').keydown(
        function(){
            jQuery('.line1').addClass('line1__is-active');
            jQuery('.line2').addClass('line2__is-active');
            jQuery('.line3').addClass('line3__is-active');
            jQuery('.navSp_dropdown').addClass('navSp_dropdown__is-open');
        }
    );

    jQuery('.dropdown_itemText__close').click(
        function(){
            jQuery('.line1').removeClass('line1__is-active');
            jQuery('.line2').removeClass('line2__is-active');
            jQuery('.line3').removeClass('line3__is-active');
            jQuery('.navSp_dropdown').removeClass('navSp_dropdown__is-open');

            jQuery('.navSp_hamburger').attr("aria-expanded", "true");
            jQuery('.navSp_dropdown').attr("aria-hidden", "true");
        }
    );
    jQuery('.dropdown_itemText__close').keydown(
        function(){
            jQuery('.line1').removeClass('line1__is-active');
            jQuery('.line2').removeClass('line2__is-active');
            jQuery('.line3').removeClass('line3__is-active');
            jQuery('.navSp_dropdown').removeClass('navSp_dropdown__is-open');
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
