export function createAudioContext(): AudioContext {
	const win = window as any;
	const AudioContext = win.AudioContext || win.webkitAudioContext;
	return new AudioContext();
}
