export class Player {
	private context: AudioContext;

	private buffer: AudioBuffer;

	init() {
		this.context = this.createAudioContext();
	}

	async load() {
		const response = await fetch('./jump.mp3');
		const audio = await response.arrayBuffer();
		this.buffer = await this.context.decodeAudioData(audio);
		return this.buffer;
	}

	play(offsetMs: number) {
		const source = this.context.createBufferSource();
		source.buffer = this.buffer;
		source.connect(this.context.destination);
		source.start(this.context.currentTime + offsetMs);
	}

	private createAudioContext(): AudioContext {
		const win = window as any;
		const AudioContext = win.AudioContext || win.webkitAudioContext;
		return new AudioContext();
	}
}
