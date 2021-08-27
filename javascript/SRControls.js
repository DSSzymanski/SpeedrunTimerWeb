//global variable that stores the time the timer is clicked in ms.
var startTime;

var storedTime = 0;
//interval variable for main timer
var timerInterval;
//const used for interval increments
const timeIntMS = 100;

let startClick = () => {
	let btn = document.getElementById('mainBtn');
	btn.innerText = 'Split';
	startTime = Date.now();
	btn.onclick = splitClick;
	startTimer();
}

let splitClick = () => {
	console.log(Date.now() - startTime);
	let test = formatTimeString(Date.now() - startTime);
	console.log(formatTimeMS(test));
}

let stopClick = () => {
	let btn = document.getElementById('mainBtn');
	btn.innerText = 'Start';
	btn.onclick = startClick;
	clearInterval(timerInterval);
	calculateBestTime(document.getElementById('time'), document.getElementById('btime'));
	storedTime = 0;
}

let pauseClick = () => {
	storedTime = (Date.now() - startTime) + storedTime;
	clearInterval(timerInterval);

	let mainBtn = document.getElementById('mainBtn');
	mainBtn.innerText = 'Continue';
	mainBtn.onclick = continueClick;

	let pauseBtn = document.getElementById('pauseBtn');
	pauseBtn.innerText = 'Reset';
	pauseBtn.onclick = resetClick;
}

let continueClick = () => {
	let pauseBtn = document.getElementById('pauseBtn');
	pauseBtn.innerText = 'Pause';
	pauseBtn.onclick = pauseClick;

	startClick();
}

let resetClick = () => {
	storedTime = 0;

	let pauseBtn = document.getElementById('pauseBtn');
	pauseBtn.innerText = 'Pause';
	pauseBtn.onclick = pauseClick;

	let btn = document.getElementById('mainBtn');
	btn.innerText = 'Start';
	btn.onclick = startClick;

	document.getElementById('time').innerText = "00:00:00";
}

let startTimer = () => {
	timerInterval = setInterval(() => {
		let timeDiv = document.getElementById('time');

		//get time in arr format [hours, minutes, seconds]
		let time = formatTimeString((Date.now() - startTime) + storedTime);

		timeDiv.innerText = time;
	}, timeIntMS);
}
