const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const contentBox = document.querySelector(".contentbox");

//puzzle hint contents
const hintarr = [
	[
		"This shape looks odd, Maybe it needs a few more pieces to complete a shape.",
		"There is 5 pieces in total.",
		"You need to make a cube with matching patterns",
	],
	[
		"Shhhh. Everyone needs to be quiet",
		"Listen to the tune every 3 minutes and repeat it",
		"Each note is used only once.",
	],
	[
		"The symbol of top of the box looks familiar",
		"the carvings on the wall seem useful to open this box",
		"turn the 3 dials to match the pictures to unlock the box",
	],
	[
		"Just like in the movies ... I believe the eye needs some light",
		"What tools do I have that provides light",
		"Use the box with the laser and the mirror you've found",
	],
	[
		"Find the piece missing from the center first. Take the wheel and roll it down the box. Make sure you use the decoded information.",
		"Remember Hand and Arrow will guide you, so look for them.",
		"Make sure to match the blue and white fingers respectively before you roll down the wheel, then the arrows will lead you the correct path.",
	],
	[
		"Insert the scarabs into the holes .... something should happen.",
		"You'll need to find the scarabs and puzzle pieces.",
		"Must find the missing pieces, and the items must be in the correct spot.",
	],
	[
		"Must find the missing Gods, and they must be in the correct spot.",
		"Be sure to look all over each pillar for the four symbols underneath each God, the symbols are NOT in a line. Each pillar can only belong to one God. Once you hear a click, there will be a secret path; be sure to check around the room.",
		'The "Big Nose" God lives on the back-left pillar.',
	],
	[
		"The tablets across the hall from the lever looks  useful.",
		"try mentally stacking them together.",
		"look at each row by themselves..",
	],
	[
		"the top of this box needs to be organized",
		"surrender your hands to the mouth",
		"the blue side must be facing you.",
	],
	[
		"You must find the missing artifacts first.",
		"3 pieces is all you need",
		"This is the final puzzle",
	],
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
		y.style.display = "flex";
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
		yy.style.display = "flex";
		z.style.display = "none";
	} else {
		x.style.display = "none";
		y.style.display = "flex";
		yy.style.display = "none";
		z.style.display = "flex";
	}
}

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
];

const puzzleboxes = document.querySelectorAll(".puzzlebox");
for (let i = 0; i < puzzleboxes.length; i++) {
	puzzleboxes[i].addEventListener("click", togglePuzzleboxContainer);

	let img = document.createElement("img"); //create <img>
	img.setAttribute("src", imgurl[i]); // set img src
	puzzleboxes[i].appendChild(img);
}

const hintboxes = document.querySelectorAll(".hintbox");
for (let i = 0; i < hintboxes.length; i++) {
	hintboxes[i].addEventListener("click", toggleHintboxContainer);
}

//make h2 dynamic
let h2 = document.createElement("h2");
contentBox.appendChild(h2);
for (let i = 0; i < puzzleboxes.length; i++) {
	const puzzle = puzzleboxes[i];
	puzzle.addEventListener("click", () => {
		easy.addEventListener("click", () => {
			h2.textContent = hintarr[i][0];
		});
		medium.addEventListener("click", () => {
			h2.textContent = hintarr[i][1];
		});
		hard.addEventListener("click", () => {
			h2.textContent = hintarr[i][2];
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
	var fiveMinutes = 60 * 1,
		display = document.querySelector("#time");
	document.querySelector("button").addEventListener("click", function () {
		startTimer(fiveMinutes, display);
		this.style.display = "none";
	});
};

//----//online clock code
