const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const contentBox = document.querySelector(".contentbox");
const puzzleboxContainer = document.querySelector("#puzzlebox-container");

const puzzleboxes = [];
//puzzle hint contents
const hintarr = [
	[
		"Someone has left their mark in the worst possible way",
		"Someone put their hands on this dresser for a reason",
		"Put your hands on the two bloody handprints",
	],
	[
		"There seems to be a hole at the top of this depiction.",
		"What can fit in the hole above the goat? (make sure you lift the cloth up)",
		"Use the cross in the hole",
	],
	[
		"The pentagram is now lit up. Is there another pentagram in the room?",
		"The candle seems to have some effect on the lights.",
		"Use the red candle and touch the words beside the lights. You'll want to change each light to match the colours shown on the cabinet that has a pentagram drawn on it. Orange, yellow, blue, green, purple",
	],
	[
		"I think I've seen this before..",
		"It seems to match the dial",
		"Touch the dial that is identical to this picture",
	],
	[
		"It looks as though something goes here",
		"A periodic table would help determine where the test tubes go",
		"Use the periodic table to find the number associated with each test tube",
	],
	[
		"There is a slightly raised part on this desk... maybe something was placed here",
		"Hmmm.. The raised part looks like the outline of a book.",
		"Place the bible on the raised piece on the desk。",
	],
	[
		"I like to dance",
		"All of my passwords I write in my diary",
		"Use the dance steps on the diary scrap to unlock the phone.",
	],
	[
		"Hmmm... these bloody pictures look like they may have a purpose",
		"Maybe the phone can be used to help you",
		"Touch the back of the phone to the bloody pictures to discover the 4 digit code.",
	],
	[
		"Shhhh.. do you hear that?",
		"Perhaps a piece of this dollhouse can replicate the sound you keep hearing.",
		"Use the chimney to replicate the knocking you hear on the roof of the dollhouse",
	],
	[
		"press the 3 buttons",
		"all green lights must match the green triangle",
		"get 2 sides finished first.",
	],
	[
		"You need to solve the light puzzle first",
		"The right side is locked... maybe the 5 jars of body parts can help unlock it",
		"Place the 5 jars in the correct order in the spots above the light puzzle once you solve it. Use the map in the right cabinet to help you",
	],
	[
		"You need to solve the light puzzle and open the cabinet on the left first.",
		"It looks like something bloody was here previously.. gross",
		"Use the baby's head and stick it on the pike",
	],
	[
		"Retina scanner",
		"Your eye won't unlock the door",
		"Find the eye that can unlock the door",
	],
	[
		"You need to solve the light puzzle first",
		"Each drawer needs to be pulled out to a certain position.",
		"The second drawer is pulled out the most, while the bottom drawer is pulled out the least. The third drawer needs to be pulled out a bit further than bottom drawer, and the fourth drawer needs to be pulled out a bit further than the third drawer. There are markings on the right side of the drawers to help guide you.",
	],
	[
		"Looks like something can fit in the center",
		"It almost looks like the outline of a spider...",
		"Find all the pieces of the spider and place them in the spot on this desk",
	],
	[
		"Poor Lucious... Maybe one more ritual can free him",
		"Maybe the white candles can complete the ritual",
		"Place the candles at the points of the Pentagram and ignite each flame",
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
	"asset/13.jpg",
	"asset/14.jpg",
	"asset/15.jpg",
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
