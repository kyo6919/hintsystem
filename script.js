function togglePuzzleboxContainer() {
	const x = document.getElementById("puzzlebox-container");
	const y = document.getElementById("backtopuzzle");
	const z = document.getElementById("hintbox-container");
	if (x.style.display === "none") {
		x.style.display = "flex";
		y.style.display = "none";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "flex";
	}
}

function toggleHintboxContainer() {
	const x = document.getElementById("hintbox-container");
	const y = document.getElementById("backtohint");
	const yy = document.getElementById("backtopuzzle");
	const z = document.getElementById("hintcontent-container");

	if (x.style.display === "none") {
		x.style.display = "flex";
		y.style.display = "none";
		yy.style.display = "block";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		y.style.display = "block";
		yy.style.display = "none";
		z.style.display = "flex";
	}
}

const puzzleboxes = document.querySelectorAll(".puzzlebox");
for (var i = 0; i < puzzleboxes.length; i++) {
	puzzleboxes[i].addEventListener("click", togglePuzzleboxContainer);
}

const hintboxes = document.querySelectorAll(".hintbox");
for (var i = 0; i < hintboxes.length; i++) {
	hintboxes[i].addEventListener("click", toggleHintboxContainer);
}

//online clock code
function startTimer(duration, display) {
	var timer = duration,
		minutes,
		seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

window.onload = function () {
	var Minutes = 60 * 1,
		display = document.querySelector("#time");
	startTimer(Minutes, display);
};
//----//online clock code
