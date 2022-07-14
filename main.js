import Chaos from './classes/chaos';
import GUI from 'lil-gui';

const gui = new GUI();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let chaos;

const settings = {
	points: 3,
};

gui.add(settings, 'points', 3, 10, 1).onFinishChange(() => {
	setup();
});

const setup = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	chaos = new Chaos(settings.points, ctx);

	// start animation
	requestAnimationFrame(animate);
};

const animate = () => {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// start main loop
	chaos.addPoint(ctx);
	// end main loop
	requestAnimationFrame(animate);
};

/* ---------------------------
   ----- EVENT LISTENERS -----
   --------------------------- */

window.onload = () => {
	setup();
};

// change canvas size as browser window resizes
window.addEventListener('resize', () => {
	setup();
});
