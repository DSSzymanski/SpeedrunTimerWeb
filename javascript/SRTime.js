//convert ms to hrs
const toHrs = 3600 * 1000;
//convert ms to mins
const toMins = 60 * 1000;

//timeStr = "xx:xx:xx"
let formatTimeMS = (timeStr) => {
	let timeArr = timeStr.split(':');
	return (parseInt(timeArr[0]) * toHrs) + (parseInt(timeArr[1]) * toMins) + (parseInt(timeArr[2]));
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

let calculateBestTime = (timeDiv, btimeDiv) => {
	if(formatTimeMS(timeDiv.innerText) > formatTimeMS(btimeDiv.innerText)) {
		btimeDiv.innerText = timeDiv.innerText;
	}
}
