let count = 0;
let secondes = 0;
let on = false;
let reset = false;
let player = "";
let gameTime = 10;

$(document).ready(function () {
	// Récupère le nom du joueur
	$(".btnPlayer").click(function () {
		player = $(".namePlayer").val();
	});

	// Début du jeu
	$(".start").click(function () {
		// On lance le chrono
		StartChrono();

		//On affiche le pseudo du joueur

		player = $(".namePlayer").val();
		console.log(player);

		$(".count").text("Score : " + 0);

		//On cache toutes les taupes
		$(".taupe").hide();

		// On génère un nombre aléatoire de 1 à 9 toutes les 1.5 secondes
		let random = setInterval(function () {
			let number = 1 + Math.floor(Math.random() * 9);
			console.log(number);

			// On ajoute le nombre aléatoire à la classe
			// On montre la classe 1 secondes puis on la cache
			$(".n" + number)
				.show(1)
				.delay(800)
				.hide(1);

			if (gameTime === 10) {
				clearInterval(random);
			}
		}, 1000); // every 1.5 second
	});

	//Lance le chrono
	$(".start").click(function () {
		let time = setInterval(function () {
			gameTime++;

			//On affiche le compteur
			$(".timer").html(gameTime);

			//On Limite le chrono a 30 secondes
			if (gameTime === 10) {
				// $(".playerScore").text(
				// 	player +
				// 		" " +
				// 		"vous avez réussi a toucher " +
				// 		count +
				// 		" taupes"
				// );
				console.log();
				endGame();
				clearInterval(time);
			}

			console.log(gameTime);
		}, 1000);
	});

	$(".taupe").click(function () {
		//On ajoute +1 au compteur de points quand on touche une taupe
		count++;
		$(this).hide();
		$(".count").text("Score : " + count);
	});

	$(".stop").click(function () {
		endGame();
	});
	function endGame() {
		clearInterval(time);
		gameTime = 0;
		count = 0;
	}

	// function addScorePlayer() {
	// 	$(".playerScore").text("vous avez réussi un score de :" + count);
	// }

	// console.log($(".playerScore"));

	function StartChrono() {
		timerID = setInterval(chrono, 1000);
		on = true;
		reset = false;

		setTimeout(function () {
			clearInterval(timerID);
			$("#timer").text("Temps écoulé...");
			reset = true;
		}, 11000);
	}

	// functionnalités chrono
	$("#play").click(function () {
		StartChrono();
	});

	$("#reset").click(function () {
		Reset();
	});
	$("#new").click(function () {
		New();
	});

	function chrono() {
		gameTime -= 1;
		$("#timer").text(gameTime);
	}

	function Reset() {
		if (reset === false) {
			clearInterval(timerID);
			$("#timer").text(10);
			gameTime = 10;
			reset = true;
		}
	}

	function New() {
		setTimeout(function () {
			clearInterval(timerID);
			$("#timer").text(10);
			gameTime = 10;
			reset = true;
		});
	}
});
