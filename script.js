const puzzle1 = document.querySelector("#puzzle1");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const contentBox = document.querySelector(".contentbox");
const hintarr = [
	[111, 222, 333],
	[444, 555, 666],
];

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
// const puzzle = document.querySelectorAll('.puzzlebox')
// for (var i = 0; i < puzzleboxes.length; i++) {
// 	puzzleboxes[i].);

let imgurl = [
	"asset/0.jpg",
	"asset/1.jpg",
	"asset/2.jpg",
	"asset/3.jpg",
	"asset/4.jpg",
	"asset/5.jpg",
	"asset/6.jpg",
	"asset/7.jpg",
	"asset/8.jpg",
	"asset/9.jpg",
	"asset/10.jpg",
	"asset/11.jpg",
];

const puzzleboxes = document.querySelectorAll(".puzzlebox");
for (let i = 0; i < puzzleboxes.length; i++) {
	puzzleboxes[i].addEventListener("click", togglePuzzleboxContainer);
	puzzleboxes[i].id = "puzzle" + i;

	let img = document.createElement("img"); //create <img>
	img.setAttribute("src", imgurl[i]); // set img src
	puzzleboxes[i].appendChild(img);
}

const hintboxes = document.querySelectorAll(".hintbox");
for (let i = 0; i < hintboxes.length; i++) {
	hintboxes[i].addEventListener("click", toggleHintboxContainer);
}

for (let i = 0; i < puzzleboxes.length; i++) {
	const puzzle = puzzleboxes[i];
	puzzle.addEventListener("click", () => {
		easy.addEventListener("click", () => {
			contentBox.textContent = hintarr[i][0];
			count ++
		});
		medium.addEventListener("click", () => {
			contentBox.textContent = hintarr[i][1];
		});
		hard.addEventListener("click", () => {
			contentBox.textContent = hintarr[i][2];
		});
	});
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

//puzzlebox[0]{easy: hint1, meidum:sdsad, hard: hereerfew}
//puzzlebox[1]{easy: hint234324, meidum:4353456, hard: 453453}
