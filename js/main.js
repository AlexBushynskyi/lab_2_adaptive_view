$(window).scroll(function() {
  	if ($(this).scrollTop() > 0) {
    	$("#hide_scroll").fadeOut(50);
    	$("#scroll").css({
    		'top': $(this).scrollTop() - 2 + 'px'
    	})
  	} else {
    	$("#hide_scroll").fadeIn(50);
    	$("#scroll").css({'top': 0})
	}
});

click_menu = 0;

$("#menu_click").click(function() {
	if (click_menu == 0){
		$(".float_menu").css("visibility", "visible");
		click_menu = 1;
	}
	else {
		$(".float_menu").css("visibility", "hidden");
		click_menu = 0;
	}
});


$(".call_back").click(function() {
  $("#form-call-back,#over").addClass("showFlex");
  $("body").css("overflow", "hidden");
  $("#form_text").focus();
});

$("#confidentian").click(function(){
    $("#confid,#over").addClass("showFlex");
    $("#confid").focus();
});

$("#confidentian_mob").click(function(){
    $("#confid,#over").addClass("showFlex");
    $("#confid").focus();
});

$(".close").click(function() {
  $("#form-call-back,#confid,#over").removeClass("showFlex");
  $("body").css("overflow", "auto");
  $(".all").focus();
});


element_id = "";

$(".hiden").mouseover(function() {
	element_id = '#' + $(this).attr('id');
	$(this).css({"height": "0px", "visibility": "hidden"});
});



$(".rotating").mouseout(function() {
	$(element_id).css({"height": "370px", "visibility": "visible"});
	element_id = "";
});

new_mod = 1;
popul_mod = 0;

$(".new_model").mouseover(function() {
	if (new_mod == 1){
		$(".new_model").css("color", "black");
	}
});

$(".new_model").mouseout(function() {
	if (new_mod == 1){
		$(".new_model").css("color", "white");
	}
});

$(".popul_model").mouseover(function() {
	if (popul_mod == 1){
		$(".popul_model").css("color", "black");
	}
});

$(".popul_model").mouseout(function() {
	if (popul_mod == 1){
		$(".popul_model").css("color", "white");
	}
});


function new_model(){
	$(".new_model").css("color", "white");
	$(".popul_model").css("color", "black");
	new_mod = 1;
	popul_mod = 0;
	$("#slider_5_1_func").css({"visibility": "visible", "height": "370px"});
	$("#slider_5_2_func").css({"visibility": "hidden", "height": "0px"});
};

function popul_model(){
	$(".new_model").css("color", "black");
	$(".popul_model").css("color", "white");
	new_mod = 0;
	popul_mod = 1;
	$("#slider_5_1_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_5_2_func").css({"visibility": "visible", "height": "370px"});
};

function massiv(){
	$("#massiv").css("color", "black");
	$("#eko_pv").css("color", "red");
	$("#eko").css("color", "red");
	$("#slider_3_1_func").css({"visibility": "visible", "height": "400px"});
	$("#slider_3_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_3_3_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_1_func").css({"visibility": "visible", "height": "380px"});
	$("#slider_4_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_3_func").css({"visibility": "hidden", "height": "0px"});
};

function eko_pv(){
	$("#massiv").css("color", "red");
	$("#eko_pv").css("color", "black");
	$("#eko").css("color", "red");
	$("#slider_3_1_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_3_2_func").css({"visibility": "visible", "height": "400px"});
	$("#slider_3_3_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_1_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_2_func").css({"visibility": "visible", "height": "380px"});
	$("#slider_4_3_func").css({"visibility": "hidden", "height": "0px"});
};

function eko(){
	$("#massiv").css("color", "red");
	$("#eko_pv").css("color", "red");
	$("#eko").css("color", "black");
	$("#slider_3_1_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_3_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_3_3_func").css({"visibility": "visible", "height": "400px"});
	$("#slider_4_1_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_3_func").css({"visibility": "visible", "height": "380px"});
};

$(".popup_block_two").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true
	}
});

$(".slider_2").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true
	}
});

/*$("all_galary").click(function(){
	$(".slider_2").magnificPopup({
		delegate: ".slick-track a",
		type: "image",
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true
		}
	});
});*/

$(".slider_3_1, .slider_3_2, .slider_3_3").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true
	}
});

$(".efter_sliders").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true
	}
});

$(".slider_6").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true
	}
});

/*$("#all_galary").magnificPopup({
	items: {
		src: 'img/slick_2_1.jpg',
		src: 'img/slick_2_2.jpg',
		src: 'img/slick_2_3.jpg',
		src: 'img/slick_2_4.jpg'
	},
	type: 'image',
	gallery: {
		enabled: true
    },
    zoom: {
		enabled: true
	}
});*/




$(document).ready(function(){
	$("#slider_3_1_func").css({"visibility": "visible", "height": "400px"});
	$("#slider_3_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_3_3_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_1_func").css({"visibility": "visible", "height": "380px"});
	$("#slider_4_2_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_4_3_func").css({"visibility": "hidden", "height": "0px"});
	$("#slider_5_1_func").css({"visibility": "visible", "height": "370px"});
	$("#slider_5_2_func").css({"visibility": "hidden", "height": "0px"});
	$(".slider_1").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		adaptiveHeight: true
	});
	$('.slider_2').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 601,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1025,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	$(".slider_3_1, .slider_3_2, .slider_3_3").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					arrows: false
				}
			}
		]
	});

	$(".slider_4_1, .slider_4_2, .slider_4_3").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 6,
		arrows: false,
		dots: false,
		slidesToScroll: 6,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
	
	$(".slider_5_1, .slider_5_2").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		arrows: false,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
	$(".slider_6").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
		slidesPerRow: 1, 
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					slidesPerRow: 2,
					dots: false
				}
			}
		]
	});
});