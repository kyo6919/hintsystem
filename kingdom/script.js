const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const contentBox = document.querySelector(".contentbox");
const puzzleboxContainer = document.querySelector("#puzzlebox-container");

const puzzleboxes = [];
//puzzle hint contents
const hintarr = [
	["Alignment is key", "There is 5 pieces in total.", "Find the dragon"],
	[
		"Build the wall that separates the kingdoms",
		"This looks like jigsaw puzzle pieces",
		"Use all the pieces.",
	],
	[
		"Each sword should be a different length",
		"Look around for the names that match the sword",
		"Look near the castles and cogs",
	],
	[
		"The medallion and lights will guide you home",
		"A piece of land is missing in the kingdoms",
		"Use memory and the medallion. Touch all the red lights, then blue lights, then green lights, then purple lights",
	],
	[
		"It looks like somethings are missing.",
		"Find the missing pieces.",
		"Three additional gears will help you on your journey.",
	],
	["Claim the Iron Throne", "Claim the Iron Throne", "Claim the Iron Throne"],
	[
		"We need to make a few adjustments",
		"Perhaps there should be a depiction of something here",
		"Rearrange the spider",
	],
	[
		"This can be used to solve another puzzle",
		"This can be used to solve another puzzle",
		"This can be used to solve another puzzle",
	],
	[
		"Group the tiles together while reading through the journal you found. Use the empty table behind you to keep things separated. The only information for these tiles is in this book, and process of elimination is key.",
		'The "Oak Castle", "Dragon", and "Nobody but Us" tiles get placed based on the information in the book. After those are placed, the "Spider", "Strength in Unity", and the "Fish" will only have 1 option for placement on the board.',
		'The "Fish" belongs to house Atlas.',
	],
	[
		"Refer to the runic shield.",
		"Find the 5 pairs of runic text around the room and compare to the runic shield",
		"The 5 runes in the first room must be translated using the runic shield",
	],
	[
		"The crests show important depictions",
		"Perhaps the symbols are replicated elsewhere",
		"This flag should be referenced for the chest with the map",
	],
	[
		"You must decode the cylinder before opening the chest.",
		"Perhaps the symbols are replicated elsewhere",
		"Look to the flag with the crests to aide your journey. There are items within the crests that are also on the map.",
	],
	[
		"Unite the four kingdoms",
		"Shapes are outlined here",
		"Four artifacts from the kingdoms are missing",
	],
];
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
	"asset/12.jpg",
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

//count # of image from array and make same # of element
for (let i = 0; i < imgurl.length; i++) {
	let puzzlebox = document.createElement("div");
	puzzlebox.classList.add("puzzlebox");
	puzzlebox.addEventListener("click", togglePuzzleboxContainer);
	let img = document.createElement("img"); //create <img>
	img.setAttribute("src", imgurl[i]); // set img src
	puzzlebox.appendChild(img);
	puzzleboxContainer.appendChild(puzzlebox);
	puzzleboxes.push(puzzlebox); //creates arrary
}

//--add event listener to all hintboxes
const hintboxes = document.querySelectorAll(".hintbox");
for (let i = 0; i < hintboxes.length; i++) {
	hintboxes[i].addEventListener("click", toggleHintboxContainer);
}

//add hint content into box
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
var timerId = null;
function startTimer(duration, display) {
	var timer = duration,
		minutes,
		seconds;
	if (timerId != null) {
		clearInterval(timerId);
	}
	timerId = setInterval(() => {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		//check for single digit minutes
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

window.onload = () => {
	const oneHour = 60 * 60;
	const display = document.querySelector("#time");
	document
		.querySelector("#startbutton")
		.addEventListener("click", function () {
			startTimer(oneHour, display);
			this.style.display = "none";
		});
};

document.querySelector("#resetbutton").addEventListener("click", () => {
	clearInterval(timerId);
	document.querySelector("#time").textContent = "60:00";
	document.querySelector("#startbutton").style.display = "block";
});

//----//online clock code
