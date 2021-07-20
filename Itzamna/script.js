var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");
var contentBox = document.querySelector(".contentbox");
var puzzleboxContainer = document.querySelector("#puzzlebox-container");
var display = document.getElementById("time");
var startbutton = document.getElementById("startbutton");
var resetbutton = document.getElementById("resetbutton");
var currentId = 0;
var hinttext = document.getElementById("hinttext");
const hintarr = [
	[
		"This shape looks odd, Maybe it needs a few more pieces to compvare a shape.",
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
		"The tabvars across the hall from the lever looks  useful.",
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
var imgurl = [
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

function getId(id) {
	currentId = id;
	console.log(currentId);
}

function togglePuzzleboxContainer() {
	var x = document.getElementById("puzzlebox-container");
	var y = document.getElementById("backtopuzzle");
	var z = document.getElementById("hintbox-container");
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
	var x = document.getElementById("hintbox-container");
	var y = document.getElementById("backtohint");
	var yy = document.getElementById("backtopuzzle");
	var z = document.getElementById("hintcontent-container");

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

//--add event listener to all puzzleboxes
var puzzleboxes = document.querySelectorAll(".puzzlebox");
for (var i = 0; i < puzzleboxes.length; i++) {
	puzzleboxes[i].addEventListener("click", togglePuzzleboxContainer);
}

//--add event listener to all hintboxes
var hintboxes = document.querySelectorAll(".hintbox");
for (var i = 0; i < hintboxes.length; i++) {
	hintboxes[i].addEventListener("click", toggleHintboxContainer);
}

//add hint content into box
function addEasyContent() {
	hinttext.textContent = hintarr[currentId][0];
}
function addMediumContent() {
	hinttext.textContent = hintarr[currentId][1];
}
function addHardContent() {
	hinttext.textContent = hintarr[currentId][2];
}
easy.addEventListener("click", addEasyContent);
medium.addEventListener("click", addMediumContent);
hard.addEventListener("click", addHardContent);


//timer code
var count = 3600;
var counter = null;
startbutton.addEventListener("click", function () {
	counter = setInterval(timer, 1000); //1000 will  run it every 1 second
	startbutton.style.display = "none";
});

function timer() {
	var minutes;
	var seconds;
	count = count - 1;
	if (count <= 0) {
		clearInterval(counter);
		return;
	}
	minutes = parseInt(count / 60, 10);
	seconds = parseInt(count % 60, 10);
	document.getElementById("timer").innerHTML = minutes + ":" + seconds; // watch for spelling
}

resetbutton.addEventListener("click", function () {
	clearInterval(counter);
	count = 3600;
	document.getElementById("timer").textContent = "60:00";
	document.getElementById("startbutton").style.display = "block";
});

//----//online clock code
