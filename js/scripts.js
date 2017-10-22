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
