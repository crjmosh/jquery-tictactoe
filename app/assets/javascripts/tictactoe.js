$(document).ready(function() {

	var $squares = $('.square');
	var $square1 = $('#one');
	var $square2 = $('#two');
	var $square3 = $('#three');
	var $square4 = $('#four');
	var $square5 = $('#five');
	var $square6 = $('#six');
	var $square7 = $('#seven');
	var $square8 = $('#eight');
	var $square9 = $('#nine');
	var $currentTurn = $('#current-turn');
	var $gameOver = $('#game-over');
	var $winText = $('#win-text');
	var $playAgain = $('#play-again')

	var turn = 1;
	var endGame = false;

	$squares.click(function() {
		if(!endGame) {
			if(!$(this).hasClass('taken')) {
				if(turn === 1) {
					$(this).addClass('ex');
					$(this).addClass('taken');
					turn = 2;
					$currentTurn.text('O');
					$currentTurn.addClass('blue-text');
					$currentTurn.removeClass('red-text');
				} else if(turn === 2) {
					$(this).addClass('oh');
					$(this).addClass('taken');
					turn = 1;
					$currentTurn.text('X');
					$currentTurn.addClass('red-text');
					$currentTurn.removeClass('blue-text');
				}
			}
			victoryChecks();
		}
	});

	$playAgain.click(function() {
		$squares.each(function() {
			$(this).removeClass('ex');
			$(this).removeClass('oh');
			$(this).removeClass('taken');
		});
		endGame = false;
		turn = 1;
		$gameOver.css("display", "none");
		$squares.css("cursor", "pointer");
		$currentTurn.text('X');
		$currentTurn.addClass('red-text');
		$currentTurn.removeClass('blue-text');
	});

	function victoryChecks() {
		if($square1.hasClass('ex') && $square2.hasClass('ex') && $square3.hasClass('ex')) {
			winner("X");
		} else if ($square1.hasClass('oh') && $square2.hasClass('oh') && $square3.hasClass('oh')){
			winner("O");
		}

		if($square4.hasClass('ex') && $square5.hasClass('ex') && $square6.hasClass('ex')) {
			winner("X");
		} else if ($square4.hasClass('oh') && $square5.hasClass('oh') && $square6.hasClass('oh')){
			winner("O");
		}

		if($square7.hasClass('ex') && $square8.hasClass('ex') && $square9.hasClass('ex')) {
			winner("X");
		} else if ($square7.hasClass('oh') && $square8.hasClass('oh') && $square9.hasClass('oh')){
			winner("O");
		}

		if($square1.hasClass('ex') && $square4.hasClass('ex') && $square7.hasClass('ex')) {
			winner("X");
		} else if ($square1.hasClass('oh') && $square4.hasClass('oh') && $square7.hasClass('oh')){
			winner("O");
		}

		if($square2.hasClass('ex') && $square5.hasClass('ex') && $square8.hasClass('ex')) {
			winner("X");
		} else if ($square2.hasClass('oh') && $square5.hasClass('oh') && $square8.hasClass('oh')){
			winner("O");
		}

		if($square3.hasClass('ex') && $square6.hasClass('ex') && $square9.hasClass('ex')) {
			winner("X");
		} else if ($square3.hasClass('oh') && $square6.hasClass('oh') && $square9.hasClass('oh')){
			winner("O");
		}

		if($square1.hasClass('ex') && $square5.hasClass('ex') && $square9.hasClass('ex')) {
			winner("X");
		} else if ($square1.hasClass('oh') && $square5.hasClass('oh') && $square9.hasClass('oh')){
			winner("O");
		}

		if($square3.hasClass('ex') && $square5.hasClass('ex') && $square7.hasClass('ex')) {
			winner("X");
		} else if ($square3.hasClass('oh') && $square5.hasClass('oh') && $square7.hasClass('oh')){
			winner("O");
		}

		if(endGame === false && $square1.hasClass('taken')
				&& $square2.hasClass('taken') && $square3.hasClass('taken')
				&& $square4.hasClass('taken') && $square5.hasClass('taken')
				&& $square6.hasClass('taken') && $square7.hasClass('taken')
				&& $square8.hasClass('taken') && $square9.hasClass('taken')) {
			winner("draw");
		}
	}

	function winner(letter) {
		if(letter === "draw") {
			$winText.text("It's a draw!");
		} else {
			$winText.text(letter + "'s win!");
		}
		endGame = true;
		$currentTurn.text('--');
		$squares.css("cursor", "default");
		$gameOver.css("display", "block");
	}

});