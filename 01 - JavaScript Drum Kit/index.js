//look for an audio element whose data-key element is
//equal to the key pressed and if found play it.
function playSound(keyCode) {
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0; //reset the audio if the key is pressed again before it ends
	audio.play();
}

//look for an element of class key whose data-key
//element is equal to the key pressed and if found start the transition.
function playKeyEffect(keyCode) {
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
	if (!key) return;
	key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
//for each key add an event listener that reverts the transition
//given from the class playing at its end
keys.forEach(key =>
	key.addEventListener('transitionend', e => {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	})
);

window.addEventListener('keydown', e => {
	playSound(e.keyCode);
	playKeyEffect(e.keyCode);
});
