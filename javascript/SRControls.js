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
		let timeDiv = document.getElementById('time');

		//get time in arr format [hours, minutes, seconds]
		let time = formatTimeString((Date.now() - startTime) + storedTime);

		timeDiv.innerText = time;
	}, timeIntMS);
}

let formatTimeString = (timeInMS) => {
	let hr = Math.floor(timeInMS / toHrs);
	timeInMS -= hr * toHrs;
	let min = Math.floor(timeInMS / toMins);
	timeInMS -= min * toMins;
	let sec = Math.floor(timeInMS / 1000);
	return "" + addZeroes(hr) + ":" + addZeroes(min) + ":" + addZeroes(sec);
}

let addZeroes = (val) => {
	if(val / 10 < 1) {
		return '0' + val;
	}
	return val;
}
