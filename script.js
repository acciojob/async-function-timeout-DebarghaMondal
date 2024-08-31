//your JS code here. If required.
function delay(ms){
	return new Promise (resolve =>
		setTimeout(resolve,ms));
}

async function handleFormSubmit(event){
	event.preventDefault();

	const text = document.getElementById('text').value;
	const delayMs = parseInt(document.getElementById('delay').value, 10);

	if(isNaN(delayMs) || delayMs < 0){
		alert('Please enter a valid positive number for delay.');
		return;
	}

	await delay(delayMs);

	document.getElementById('output').textContent = text;
}

document.getElementById('form').addEventListener('submit', handleFormSubmit);