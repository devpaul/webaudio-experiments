import { createAudioContext } from '@devpaul/webaudio-common';
import { AudioClip } from '@devpaul/webaudio-common';

const context = createAudioContext();
const sound = new AudioClip('./assets/meow.mp3', context);
sound.load().then(() => {
	init();
});

function init() {
	const button = document.getElementById('play');
	button!.addEventListener('click', play);

	[
		document.getElementById('x') as HTMLInputElement,
		document.getElementById('y') as HTMLInputElement,
		document.getElementById('z') as HTMLInputElement,
	].forEach((input) => {
		input.addEventListener('change', (event) => {
			const target = event.target as HTMLInputElement;
			const direction = target.id;
			const value = target.value;
			update(direction, value);
		});
	});
}

function play() {
	const x = Number((document.getElementById('x') as HTMLInputElement).value);
	const y = Number((document.getElementById('y') as HTMLInputElement).value);
	const z = Number((document.getElementById('z') as HTMLInputElement).value);
	const panner = context.createPanner();
	panner.setPosition(x, y, z);
	const source = sound.getSource();
	source.connect(panner);
	panner.connect(context.destination);
	source.start(0);
}

function update(direction: string, value: string) {
	console.log(direction, value);
}
