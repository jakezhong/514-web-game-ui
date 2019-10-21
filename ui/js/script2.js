/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */
jQuery(function($){
	game();
	
	function game() {
		var datas = $('.game-datas');
		var lives = $(datas).data('lives');
		var attempts = $(datas).data('attempts');
		var previous = $(datas).data('previous');
		var misses = $(datas).data('misses');
		
		$('.info-previous').text(previous);
		$('.info-misses').text(misses);
		$('.info-lives').text(lives);
		
		if (attempts == lives) {
			$('.popup').fadeIn(300);
		}
		if ($('#hangman').length > 0) {
			hangman(datas);
		} else if ($('#mastermind').length > 0) {
			mastermind(datas);
		}
		$('.play-again').on('click', function() {
    		location.reload();
		});
	}
	
	function hangman(datas) {
		var lives = $(datas).data('lives');
		var attempts = $(datas).data('attempts');
//		$('.guess').on('change', function(e) {
//			attempts ++;
//			$('.man').addClass('man' + attempts);
//			if (attempts == lives) {
//				$('.popup').fadeIn(300);
//			}
//		});
		if (attempts > 0 && attempts <= lives) {
			$('.man').addClass('man' + attempts);
		}
	}
	
	function mastermind(datas) {
		var lives = $(datas).data('lives');
		var attempts = $(datas).data('attempts');
		$('.guess').on('change', function(e) {
			attempts ++;
			if (attempts == lives) {
				$('.popup').fadeIn(300);
			}
		});
	}
});