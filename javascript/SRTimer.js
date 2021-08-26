//global variable that stores the time the timer is clicked in ms.
var startTime;

var storedTime = 0;
//interval variable for main timer
var timerInterval;
//const used for interval increments
const timeIntMS = 100;
//convert ms to hrs
const toHrs = 3600 * 1000;
//convert ms to mins
const toMins = 60 * 1000;

let startClick = () => {
	let btn = document.getElementById('mainBtn');
	btn.innerText = 'Split';
	startTime = Date.now();
	btn.onclick = splitClick;
	startTimer();
}

let splitClick = () => {
	console.log(Date.now() - startTime);
}

let stopClick = () => {
	let btn = document.getElementById('mainBtn');
	btn.innerText = 'Start';
	btn.onclick = startClick;
	clearInterval(timerInterval);
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
}

let startTimer = () => {
	timerInterval = setInterval(() => {
		let hours = document.getElementById('hrs');
		let mins = document.getElementById('mins');
		let secs = document.getElementById('secs');
		let timeElapsed = (Date.now() - startTime) + storedTime;

		let hr = Math.floor(timeElapsed / toHrs);
		timeElapsed -= hr * toHrs;
		hours.innerText = formatTime(hr);

		let min = Math.floor(timeElapsed / toMins);
		timeElapsed -= min * toMins;
		mins.innerText = formatTime(min);

		let sec = Math.floor(timeElapsed / 1000);
		secs.innerText = formatTime(sec);
	}, timeIntMS);
}

let formatTime = (val) => {
	if(val / 10 < 1) {
		return '0' + val;
	}
	return val;
}
