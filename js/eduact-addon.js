(function ($) {
  "use strict";

  var WidgetDefaultHandler = function ($scope) {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }

    if ($scope.find(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    if ($scope.find(".eduact-masonary").length) {
      $scope.find(".eduact-masonary").imagesLoaded(function () {
        $scope.find(".eduact-masonary").isotope({
          layoutMode: "masonry"
        });
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".eduact-filter").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
    }

    if ($scope.find(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".eduact-filter").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">(' + count + ")</span>");
      });
    }

    if ($scope.find(".masonary-layout").length) {
      $scope.find(".masonary-layout").isotope({
        layoutMode: "masonry"
      });
    }
    if ($scope.find(".post-filter").length) {
      $scope
        .find(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
    }

    if ($scope.find(".tabs-box").length) {
      $scope.find(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          target
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn");
          $(this).addClass("active-btn");
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .fadeOut(0);
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab");
          $(target).fadeIn(300);
          $(target).addClass("active-tab");
        }
      });
    }

    if ($scope.find(".neighborhoods__faq").length) {
      $scope
        .find(".neighborhoods__faq")
        .find(".accrodion")
        .each(function () {
          $(this).on("click", function () {
            let tabName = $(this).data("name");
            $(".neighborhoods__img-box")
              .find(".neighborhoods__location-1")
              .removeClass("active");
            $(".neighborhoods__img-box")
              .find(".neighborhoods__location-1." + tabName)
              .addClass("active");
          });
        });
    }

    // Accrodion
    if ($scope.find(".eduact-accrodion").length) {
      var accrodionGrp = $(".eduact-accrodion");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                $(".eduact-accrodion." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".eduact-accrodion." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find(".accrodion-content").slideDown();
              }
            });
        });
      });
    }

    // Popular Causes Progress Bar
    if ($scope.find(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50
        }
      );
    }

    // Popular Causes Progress Bar
    if ($scope.find(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }

    //Fact Counter + Text Count
    if ($scope.find(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate(
              {
                countNum: n
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                }
              }
            );
          }
        },
        {
          accY: 0
        }
      );
    }

    let thmSwiperSliders = $scope.find(".thm-swiper__slider");
    if (thmSwiperSliders.length) {
      thmSwiperSliders.each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(
          elm,
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlCarousels = $scope.find(".eduact-owl__carousel");
    if (thmOwlCarousels.length) {
      thmOwlCarousels.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlNavCarousels = $scope.find(".thm-owl__carousel--custom-nav");
    if (thmOwlNavCarousels.length) {
      thmOwlNavCarousels.each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }

    if ($scope.find("#testimonials-two__thumb").length) {
      let testimonialsThumb = new Swiper("#testimonials-two__thumb", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 5000
        }
      });

      let testimonialsCarousel = new Swiper("#testimonials-two__carousel", {
        observer: true,
        observeParents: true,
        speed: 1400,
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        thumbs: {
          swiper: testimonialsThumb
        },
        pagination: {
          el: "#testimonials-one__carousel-pagination",
          type: "bullets",
          clickable: true
        }
      });
    }
    if ($scope.find(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }
    if ($scope.find(".curved-circle--item").length) {
      $(".curved-circle--item").circleType();
    }

    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }

    if ($("#datepicker2").length) {
      $("#datepicker2").datepicker();
    }

    eduact_stretch();

    function eduact_stretch() {
      var i = $(window).width();
      if ($scope.find(".row .eduact-stretch-element-inside-column").length) {
        $scope
          .find(".row .eduact-stretch-element-inside-column")
          .each(function () {
            var $this = $(this),
              row = $this.closest(".row"),
              cols = $this.closest('[class^="col-"]'),
              colsheight = $this.closest('[class^="col-"]').height(),
              rect = this.getBoundingClientRect(),
              l = row[0].getBoundingClientRect(),
              s = cols[0].getBoundingClientRect(),
              r = rect.left,
              d = i - rect.right,
              c = l.left + (parseFloat(row.css("padding-left")) || 0),
              u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
              p = s.left,
              f = i - s.right,
              styles = {
                "margin-left": 0,
                "margin-right": 0
              };
            if (Math.round(c) === Math.round(p)) {
              var h = parseFloat($this.css("margin-left") || 0);
              styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
              var w = parseFloat($this.css("margin-right") || 0);
              styles["margin-right"] = w - d;
            }
            $this.css(styles);
          });
      }
    }

    /*-- Countdown --*/
    let countDownList = $scope.find(".counter-one__list");
    if (countDownList.length) {
      countDownList.each(function () {
        let self = $(this);
        let mainDate = self.data("deadline-date");
        let yearsCondition =
          undefined == self.data("enable-years")
            ? false
            : self.data("enable-years");
        let daysCondition =
          undefined == self.data("enable-days")
            ? true
            : self.data("enable-days");
        let leadingZeros = self.data("leading-zeros");
        let deadLine =
          "dynamicDate" == mainDate
            ? new Date(Date.parse(new Date()) + 31 * 24 * 60 * 60 * 1000)
            : "dynamicHour" == mainDate
            ? new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000)
            : mainDate;

        self.countdown({
          date: deadLine,
          leadingZeros: true,
          render: function (date) {
            this.el.innerHTML =
              (true == yearsCondition
                ? "<li> <span class='years'> " +
                  (true == leadingZeros
                    ? this.leadingZeros(date.years)
                    : date.years) +
                  " <i> Years </i> </span> </li>"
                : " ") +
              (true == daysCondition
                ? "<li> <span class='days'> " +
                  (true == leadingZeros
                    ? this.leadingZeros(date.days)
                    : date.days) +
                  " <i> Days </i> </span> </li>"
                : " ") +
              "<li> <span class='hours'>" +
              (true == leadingZeros
                ? this.leadingZeros(date.hours)
                : date.hours) +
              " <i> Hours </i> </span> </li>" +
              "<li> <span class='minutes'> " +
              (true == leadingZeros ? this.leadingZeros(date.min) : date.min) +
              " <i> Min </i> </span> </li>" +
              "<li> <span class='seconds'>" +
              (true == leadingZeros ? this.leadingZeros(date.sec) : date.sec) +
              " <i> Secs </i> </span> </li>";
          }
        });
      });
    }

    function showPopupWithWarning() {
      $("#eduact-popup").css("background-color", "#f57005"); // Set warning background color
      $("#eduact-popup").fadeIn();

      // Hide the popup after 5 seconds (adjust as needed)
      setTimeout(function () {
        $("#eduact-popup").fadeOut();
      }, 3000); // 5000 milliseconds = 5 seconds
    }

    // Show the popup when the element is clicked
    $(".cart-required-login").click(function () {
      showPopupWithWarning();
    });

    let LesionDuration = $scope.find(".total-duration");
    if (LesionDuration.length) {
      var durationElements = $(".total-duration");

      // Loop through each element
      durationElements.each(function () {
        // Get the value of the 'data-duration' attribute
        var durationValue = $(this).data("duration");

        // Find the corresponding .total-duration-display element
        var displayElement = $(this)
          .closest(".tutor-accordion-item")
          .find(".total-duration-display");

        // Display the duration value in the .total-duration-display element
        displayElement.text(durationValue);
      });
    }
  };

  var WidgetFaqHandler = function ($scope) {
    if ($scope.find(".accrodion-grp").length) {
      var accrodionGrp = $(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find(".accrodion-content").slideDown();
              }
            });
        });
      });
    }
  };

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      var Self = $(this);
      var mcURL = Self.data("url");
      var mcResp = Self.parent().find(".mc-form__response");

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + "</p>";
          });
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            Self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            Self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        }
      });
    });
  }

  if ($("#history-one__thumb").length) {
    let testimonialsThumb = new Swiper("#history-one__thumb", {
      slidesPerView: 5,
      spaceBetween: 0,
      speed: 1400,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 5000
      }
    });

    let testimonialsCarousel = new Swiper("#history-one__carousel", {
      observer: true,
      observeParents: true,
      loop: true,
      speed: 1400,
      mousewheel: false,
      slidesPerView: 1,
      spaceBetween: 72,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: testimonialsThumb
      },
      pagination: {
        el: "#testimonials-one__carousel-pagination",
        type: "bullets",
        clickable: true
      },

      navigation: {
        nextEl: "#history-one__swiper-button-next",
        prevEl: "#history-one__swiper-button-prev"
      }
    });
  }

  var WidgetFooterSubscribeHandler = function ($scope) {
    // mailchimp form
    if ($scope.find(".mc-form").length) {
      $(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          }
        });
      });
    }
  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/eduact-faq.default",
      WidgetFaqHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/footer-subscribe.default",
      WidgetFooterSubscribeHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/eduact-subscribe.default",
      WidgetFooterSubscribeHandler
    );
  });

  // login
  $("#eduact-login").submit(function (event) {
    event.preventDefault();

    var login = "action=signup_paragon&param=login&" + $(this).serialize();
    $.ajax({
      type: "POST",
      url: eduact_login_object.ajaxurl,
      data: login,
      beforeSend: function () {
        // setting a timeout
        $(".login-result").addClass("loading");
      },
      success: function (data) {
        $(".login-result").removeClass("loading");
        if (data.status == 2) {
          $(".login-result").removeClass("alert alert-warning");
          $(".login-result").html(data.message).addClass("alert alert-success");
          window.location.href = eduact_login_object.login_redirect_url;
        } else if (data.status == 1) {
          $(".login-result").html(data.message).addClass("alert alert-warning");
        } else {
          $(".login-result")
            .html(eduact_login_object.message)
            .addClass("alert alert-warning");
        }
      }
    });
  }); //end login

  // register
  $("#eduact-registration").submit(function (event) {
    event.preventDefault();

    var signupForm =
      "action=signup_paragon&param=register&" + $(this).serialize();
    $.ajax({
      type: "POST",
      url: eduact_login_object.ajaxurl,
      data: signupForm,
      beforeSend: function () {
        // setting a timeout
        $(".registration-result").addClass("loading");
      },
      success: function (data) {
        $(".registration-result").removeClass("loading");
        if (data.status == 2) {
          $(".registration-result").removeClass("alert alert-warning");
          $(".registration-result")
            .html(data.message)
            .addClass("alert alert-success");
          window.location.href = eduact_login_object.registration_redirect_url;
        } else {
          $(".registration-result")
            .html(data.message)
            .addClass("alert alert-warning");
        }
      }
    });
  }); //end register

  $(document).on("click", ".eduact-ajax-pagination a", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    var container = $(this)
      .parents(".eduact-ajax-pagination")
      .data("post-container");
    $.get(link, function (data) {
      var posts = $(data).find(container).html();
      $(container).html(posts);
    });
  });
})(jQuery);