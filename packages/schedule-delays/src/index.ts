import { AudioClip } from '@devpaul/webaudio-common';
import { createAudioContext } from '@devpaul/webaudio-common';

const context = createAudioContext();
const sound = new AudioClip('./assets/jump.mp3', context);
sound.load().then(() => {
	init();
});

function init() {
	const button = document.getElementById('sound');
	button!.addEventListener('click', () => {
		const delayNode = document.getElementById('delay') as HTMLFormElement;
		let delay = Number(delayNode!.value);

		if (typeof delay !== 'number' || isNaN(delay) || delay <= 0) {
			alert(`Invalid delay ${ delay }`);
		}
		else {
			sound.play(delay);
			hang(delay + 1);
		}
	});
}

function hang(seconds: number) {
	const start = performance.now();
	const end = start + seconds * 1000;

	console.log(`hang started ${ start }`);
	while (performance.now() < end) { }
	console.log(`hang complete ${ end }`);
}
