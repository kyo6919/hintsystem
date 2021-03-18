const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const contentBox = document.querySelector(".contentbox");
const puzzleboxContainer = document.querySelector("#puzzlebox-container");

const puzzleboxes = [];
//puzzle hint contents
const hintarr = [
	[
		"Looks like I need to lead the ball somewhere.",
		"There are holes in the screen, looks like I need to put something in to redirect the ball.",
		"There are 3 blockers hidden throughout the room that you can use to guide the ball into the middle hole.",
	],
	[
		"Lets take a look around the room to see if I can find the password.",
		"There's a board on the wall. I don't remember what that means.",
		"The board on the wall will decipher the 4 digit password for you",
	],
	[
		"The plant creature looks thirsty.",
		"you must find a water source.",
		"the water source is hidden inside the locker.",
	],
	[
		"Oh no there isn't any power in the spaceship, lets see if we can find the parts to power the panel.",
		"Do the parts need to go a certain way.",
		"Find all 3 parts to power the panel.",
	],
	[
		"Looks like they used this to navigate the ship. Lets try to find the right coordinates.",
		"What planet were we heading to last? I think there was a planet in the first room.",
		"There was a red planet in the first room, lets check where the red planet is on the side map.",
	],
	[
		"Alright, I need to find the key to turn this machine on.",
		"Why is there a red circle on the top, do I need to put something there?",
		"Alright I need to hold the START button for something to happen.",
	],
	[
		"Why is there a hole in the middle.",
		"I think I remember seeing the red circle somewhere else in this room.",
		"I need to use a light source to power the machine.",
	],
	[
		"Alright the memory game is activated, I remember it being 5-7-9 patterns.",
		"If you fail the patterns reset. Ask a friend to help you remember some.",
		"The more friends you have, the easier it is to remember.",
	],
	[
		"There is a secret compartment here that needs to be unlocked",
		"The red square looks like its missing a part.",
		"You must find a cube shaped key to open this secret compartment",
	],
	[
		"It looks like we need to drop 3 large balls into this puzzle",
		"There are 2 stages to this puzzle",
		"All balls must land at the same time.",
	],
	[
		"It looks like the Energy Crystal is inside!",
		"I think we need to blast this open somehow.",
		"Is there a gun locked away in another compartment?",
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
	var fiveMinutes = 60 * 60,
		display = document.querySelector("#time");
	document.querySelector("button").addEventListener("click", function () {
		startTimer(fiveMinutes, display);
		this.style.display = "none";
	});
};

//----//online clock code
