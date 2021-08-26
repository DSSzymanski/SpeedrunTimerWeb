var startTime;

let startClick = () => {
	btn = document.getElementById('mainBtn');
	btn.innerText = 'Split';
	startTime = Date.now();
	btn.onclick = splitClick;
}

let splitClick = () => {
	console.log(Date.now() - startTime);
}