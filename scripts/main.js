$('image_container').hide()
var aud = $('#audio_player');
aud.oncanplaythrough = function() {
	$('image_container').show()
};