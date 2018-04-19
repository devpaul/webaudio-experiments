export class AudioClip {
	private buffer?: AudioBuffer;

	constructor(
		private readonly asset: string,
		private readonly context: AudioContext
	) { }

	async load() {
		const response = await fetch(this.asset);
		const audio = await response.arrayBuffer();
		this.buffer = await this.context.decodeAudioData(audio);
		return this.buffer;
	}

	getSource() {
		const source = this.context.createBufferSource();
		if (this.buffer) {
			source.buffer = this.buffer;
		}
		return source;
	}

	play(offsetMs: number) {
		const source = this.getSource();
		source.connect(this.context.destination);
		source.start(this.context.currentTime + offsetMs);
	}
}
