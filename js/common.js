$(document).ready(function() {


$('.item-nav__head').click(function() {
		$(this).siblings(".item-nav__content").slideToggle(200);
		$(this).parent().toggleClass('active');
	}); 



	/*input file*/
	$("input[type='file']").change(function(){
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	$('#fullpage').fullpage({
		normalScrollElements: '.header',
		responsiveHeight: 600,
		controlArrows: true,
		responsiveWidth: 1200,
		scrollingSpeed: 1000,
		menu: '.nav-fullpage'

	});

	$('.arrow-up').click(function(){
		$.fn.fullpage.moveSectionUp();
	});

	$('.arrow-down').click(function(){
		$.fn.fullpage.moveSectionDown();
	});

//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".nav-article li a").mPageScroll2id({
		offset: 80
	});


	//слайдер

	$('.slider-billbord').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
	});

	$('.slider-portfolio').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true,
				adaptiveHeight: true,
			}
		}
		]
	});

	$('.row_steps').slick({
		mobileFirst: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: "unslick",
			variableWidth: true,
			slidesToShow: 1,
			arrows: false,
		}
		]
	});

	$('.slider-reviews').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		rows: 2,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				rows: 1,
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-clients').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow:4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow:3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow:2,
			}
		}
		]
	});

	$('.slider-card').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
	});

	$('.slider-images').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM43 7L1 7L1 9L43 9L43 7Z" fill="#13447E"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7071 7.2929C43.0976 7.68342 43.0976 8.31659 42.7071 8.70711L36.3431 15.0711C35.9526 15.4616 35.3195 15.4616 34.9289 15.0711C34.5384 14.6805 34.5384 14.0474 34.9289 13.6569L40.5858 8L34.9289 2.34315C34.5384 1.95262 34.5384 1.31946 34.9289 0.928935C35.3195 0.538411 35.9526 0.538411 36.3431 0.928935L42.7071 7.2929ZM8.74228e-08 7L42 7L42 9L-8.74228e-08 9L8.74228e-08 7Z" fill="#13447E"/></svg><div/>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});


	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().parent().parent().find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parent().parent().parent().find(".slider-portfolio").slick('setPosition');
		$(this).parent().parent().parent().find(".row_steps").slick('setPosition');
	}); 

	$('.tabs-page li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().parent().parent().find(".tab-pane-page").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	}); 

	$(".service-block").mouseover(function() {
		$(this).siblings(".service-block").removeClass("active");
		$(this).addClass("active");
	});

	$(".item-step").mouseover(function() {
		$(this).parent().siblings().find(".item-step").removeClass("active");
		$(this).addClass("active");
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});
		}
	}


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

