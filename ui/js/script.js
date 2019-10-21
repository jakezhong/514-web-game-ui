/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */
jQuery(function($){
	game();
	
	function game() {
		if ($('#hangman').length || $('#mastermind').length > 0) {
			
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
		$('.form-check').on('click', function(e) {
			$(this).addClass('checked');
//			attempts ++;
//			$('.man').addClass('man' + attempts);
//			if (attempts == lives) {
//				$('.popup').fadeIn(300);
//			}
		});
		if (attempts > 0 && attempts <= lives) {
			$('.man').addClass('man' + attempts);
		}
	}
	
	function mastermind(datas) {
		var lives = $(datas).data('lives');
		var attempts = $(datas).data('attempts');
		var guess_length = $(datas).data('length');
		var index = 0;
		$('.board-center .board-row').eq(attempts).addClass('active');
		$('.game-controller .ball').on('click', function() {
			if (index < guess_length) {
				var color = $(this).data('color');
				var guess = $(this).data('guess');
				$('.board-center .board-row.active .row-left li').eq(index).find('.ball').addClass('active').attr('data-color', color);
				$('.guess').val($('.guess').val() + guess);
				index ++;
			}
		});
		$('.game-controller .delete').on('click', function() {
			$('.board-center .board-row.active .row-left li .ball').attr('data-color', '').removeClass('active');
			index = 0;
		})
	}
});