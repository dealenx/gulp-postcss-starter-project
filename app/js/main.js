/**
* @Author: Daniil Godoriloff
* @Date:   2016-10-31T20:20:47+07:00
* @Last modified by:   Daniil Godoriloff
* @Last modified time: 2017-01-14T22:40:57+07:00
*/



jQuery(function($){



	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/fusion.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_1"
	});

	$("#jquery_jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/dissolution.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_2"
	});

	$("#jquery_jplayer_3").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/immersion.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_3"
	});

	$("#jquery_jplayer_4").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/Алкосекс.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_4"
	});

	$("#jquery_jplayer_5").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/Я Снова Горю.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_5"
	});

	$("#jquery_jplayer_6").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "upload/По швам.mp3",
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "/js",
		supplied: "mp3",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		cssSelectorAncestor: "#jp_container_6"
	});


	// bind event handlers to modal triggers
	function getModal(name_of_modal,link) {
	  $('body').on('click', link, function(e){
			e.preventDefault();
			$(name_of_modal).modal().open();
		});

		  // attach modal close handler
		$('.modal .close').on('click', function(e){
			e.preventDefault();
			$.modal().close();
		});
	}

	getModal('#id-link-modal','.id-link-modal');
	getModal('#id-link-modal1','.id-link-modal1');
	getModal('#id-link-modal2','.id-link-modal2');
	getModal('#id-link-modal3','.id-link-modal3');

	getModal('#id-link-form3','.id-link-form3');


	$('body').on('click', '.faq', function(e){
			e.preventDefault();
			$('#faq').modal().open();
			$('.themodal-overlay').addClass('bg-faq');
		});

		  // attach modal close handler
		$('.modal .close').on('click', function(e){
			e.preventDefault();
			$.modal().close();
			$('.themodal-overlay').removeClass('bg-faq');
		});
});
