import { Player } from './Player';

const sound = new Player();
sound.init();
sound.load().then(() => {
	sound.play(5);
});
