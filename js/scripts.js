$(document).ready(function() {


    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var promoBottomCoord

    // ----------------------------

    var seoDropdownMenu;

    // ----------------------------

    var popupAttrName;
    var popupBlock;

    // ----------------------------

    getAdaptivePositionElements();

    getSeoBlocksParam();

    getRespMenuButtonParam();

    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getRespMenuButtonParam();

        getAdaptivePositionElements();

        getSeoBlocksParam();

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

            if( $("#promo").length > 0 ) {

                promoBottomCoord = $("#promo").offset().top + $("#promo").height();

            } else {

                promoBottomCoord = $(".header-site").height();

            }

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


        $(".resp-nav-block a").click(function() {

            $(".responsive-header").fadeOut(300);
            $(".respmenubtn").removeClass("active");

            if( bodyWidth > 900  &&  promoBottomCoord > $(window).scrollTop()
                &&  $(".respmenubtn-block").is(":visible")) {

                $(".respmenubtn-block").fadeOut(300);

            }

        });

    });


    $(function() {

        $(".seo-block h3").click(function() {

            if( bodyWidth <= 768 ) {

                seoDropdownMenu = $(this).closest(".seo-block").find(".seo-list");

                if( seoDropdownMenu.is(":hidden") ) {

                    seoDropdownMenu.slideDown(400);

                    $(this).addClass("active");

                    seoDropdownMenu.addClass("active");

                } else {

                    seoDropdownMenu.slideUp(400);

                    $(this).removeClass("active");

                    seoDropdownMenu.removeClass("active");

                }

            }

        });

    });

    // ----------------------------------------------

    $(function() {

        // var popupAttrName;
        // var popupBlock;

        $(".show-popup").click(function(e) {

            e.preventDefault();

            popupAttrName = $(this).attr("data-popup-name");

            popupBlock = $(".popup").filter("[data-popup = '"+ popupAttrName +"']");

            if( popupBlock.is(":hidden") ) {

                popupBlock.fadeIn(400);

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup");

            popupBlock.fadeOut(400);

        });


        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".popup").each(function() {

                    if ( $(this).is(":visible") ) {

                        $(this).fadeOut(500);

                    }

                });

                if ( $(".responsive-header").is(":visible") ) {

                    $(".responsive-header").fadeOut(500);

                    $(".respmenubtn").removeClass("active");

                    if( bodyWidth > 900  &&  promoBottomCoord > $(window).scrollTop()
                    &&  $(".respmenubtn-block").is(":visible")) {

                        $(".respmenubtn-block").fadeOut(300);

                    }

                }


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


    function getGalleryImagesParams() {

        var maxWidthBox, maxHeightBox;
        var widthImg, heightImg;
        var galleryImage;

        // $(".gallery").each(function() {

        //     $(this).find(".img-box").each(function() {

        //         maxWidth = $(this).width();
        //         maxHeight = $(this).height();

        //         galleryImage = $(this).find("img");

        //         widthImg = galleryImage.width();
        //         heightImg = galleryImage.height();

        //         if(widthImg < maxWidth) {

        //             galleryImage.css({
        //                 "min-width" : maxWidth + "px"
        //             });

        //         }

        //         if(heightImg < maxHeight) {

        //             galleryImage.css({
        //                 "min-height" : maxHeight + "px"
        //             });

        //         }

        //         if(widthImg > maxWidth && heigthImg > maxHeight) {

        //             galleryImage.css({
        //                 "-width" : maxWidth + "px"
        //             });

        //         }

        //     });

        // });

    }

    function getSeoBlocksParam() {

        if( bodyWidth <= 768 ) {

            $(".seo-block").each(function() {

                if( $(this).is(":visible") && !$(this).find(".seo-list").hasClass("active") ) {

                    $(this).find(".seo-list").slideUp(80);

                } else {

                    $(this).find(".seo-list").slideDown(80);

                }

            });

        } else {

            $(".seo-block").each(function() {

                if( $(this).is(":hidden") ) {

                    $(this).find(".seo-list").slideDown(80);

                }

            });

        }

    }

    function getRespMenuButtonParam() {

        if( $("#promo").length > 0 ) {

            promoBottomCoord = $("#promo").offset().top + $("#promo").height();

        } else {

            promoBottomCoord = $(".header-site").height();

        }

        if( $(window).scrollTop() < promoBottomCoord ) {

            if( $("#promo").length > 0 ) {

                $(".respmenubtn-block").addClass("light");

            } else {

                $(".respmenubtn-block").removeClass("light");

            }

            if(bodyWidth > 900 && $(".respmenubtn-block").is(":visible") && !$(".respmenubtn-block").find(".respmenubtn").hasClass("active")) {
                $(".respmenubtn-block").fadeOut(300);
            }

        } else {

            $(".respmenubtn-block").removeClass("light");

            if(bodyWidth > 900 || $(".respmenubtn-block").is(":hidden") ) {
                $(".respmenubtn-block").fadeIn(300);
            }

        }

    }


});
