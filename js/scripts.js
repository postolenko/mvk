$(document).ready(function() {


    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var promoBottomCoord

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------    

    getAdaptivePositionElements();

    getSeoBlocksParam();

    getRespMenuButtonParam();

    getFooterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getRespMenuButtonParam();

        getAdaptivePositionElements();

    });

    $(document).scroll(function() {

        getRespMenuButtonParam();

    });


    $(function() {

        $(".scrolldown").click(function(e) {

            e.preventDefault();

            $("body, html").animate({
                scrollTop: $("#promo").offset().top + $("#promo").height()
            }, 1000);

        });

    });


    $(function() {

        $(".respmenubtn").click(function() {

            promoBottomCoord = $("#promo").offset().top + $("#promo").height();

            parentBlock = $(this).closest(".respmenubtn-block");

            if($(".responsive-header").is(":hidden")) {

                $(".responsive-header").fadeIn(300);
                $(this).addClass("active");

            } else {

                $(".responsive-header").fadeOut(300);
                $(this).removeClass("active");

                if( bodyWidth > 900  &&  promoBottomCoord > $(window).scrollTop()
                    &&  parentBlock.is(":visible")) {

                    parentBlock.fadeOut(300);

                }

            }

        });

    });


    $(function() {

        $(".seo-block h3").click(function() {

            var seoDropdownMenu = $(this).closest(".seo-block").find(".seo-list");

            if( seoDropdownMenu.is(":hidden") ) {

                seoDropdownMenu.slideDown(400);
                $(this).addClass("active");

            } else {

                seoDropdownMenu.slideUp(400);
                $(this).removeClass("active");

            }

        });

    });

    // ----------------------------------------------

    //  Gradient Animation

    var colors = new Array(
      [62,35,255],
      [60,255,60],
      [255,35,98],
      [45,175,230],
      [255,0,255],
      [255,128,0]);

    var step = 0;

    var colorIndices = [0,1,2,3];

    var gradientSpeed = 0.002;

    function updateGradient()
    {
      
      if ( $===undefined ) return;
      
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

     $('.gradient').css({
       background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
      
      step += gradientSpeed;
      if ( step >= 1 )
      {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        
      }
    }

    setInterval(updateGradient,10);



    // -----------------------------------------------


    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                screenParam = parseInt( $(this).attr("data-min-screen") );

                indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }

    function getSeoBlocksParam() {

        if( bodyWidth <= 768 ) {

            $(".seo-block").each(function() {

                $(this).find(".seo-list").slideUp(80);

            });

        }

    }

    function getRespMenuButtonParam() {

        if( $("#promo").length > 0 ) {

            promoBottomCoord = $("#promo").offset().top + $("#promo").height();

            if( $(window).scrollTop() < promoBottomCoord ) {

                $(".respmenubtn-block").addClass("light");

                if( bodyWidth > 900 && $(".respmenubtn-block").is(":visible") && !$(".respmenubtn-block").find(".respmenubtn").hasClass("active")) {
                    $(".respmenubtn-block").fadeOut(300);
                }

            } else {

                $(".respmenubtn-block").removeClass("light");

                if( bodyWidth > 900 || $(".respmenubtn-block").is(":hidden") ) {
                    $(".respmenubtn-block").fadeIn(300);
                }

            }

        }

    }


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            setFooterPositionInterval = setInterval(function() {

                contentCoor = $(".content").offset().top + $(".content").height();
                footerCoor = $(".footer").offset().top;

                if( contentCoor != footerCoor ) {

                    $(".wrapper").css({"min-height" : $(window).height() + "px"});

                    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                    clearInterval(setFooterPositionInterval);

                }

            }, 35);

        }

    }


});
