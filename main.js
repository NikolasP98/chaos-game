import Chaos from './classes/chaos';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let chaos;

const setup = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	chaos = new Chaos(3, ctx);

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
