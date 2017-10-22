$(document).ready(function() {


    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

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

            if($(".responsive-header").is(":hidden")) {

                $(".responsive-header").fadeIn(300);
                $(this).addClass("active");

            } else {

                $(".responsive-header").fadeOut(300);
                $(this).removeClass("active");

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

            var promoBottomCoord = $("#promo").offset().top + $("#promo").height();

            if( promoBottomCoord >= $(window).scrollTop() ) {

                $(".respmenubtn").removeClass("ligth");

            } else {

                $(".respmenubtn").addClass("ligth");

            }

            console.log($("#promo").offset().top + $("#promo").height() +"    "+ $(document).scrollTop());

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
