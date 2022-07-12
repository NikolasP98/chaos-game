import Vector from './vector';

export default class Chaos {
	constructor(points, ctx) {
		this.ctx = ctx;

		this.points = [];
		for (let i = 0; i < points; i++) {
			this.points.push(this.randomLocation());
		}

		this.currentPoint = this.selectRandomPoint();
		this.points.forEach((point) => {
			this.drawPoint(ctx, point, '#ff0000');
		});
	}

	randomLocation() {
		return new Vector(
			Math.random() * (this.ctx.canvas.width - 50) + 50,
			Math.random() * (this.ctx.canvas.height - 50) + 50
		);
	}

	selectRandomPoint() {
		return this.points[Math.floor(Math.random() * this.points.length)];
	}

	addPoint(ctx) {
		const randomPoint = this.selectRandomPoint();
		const newPoint = Vector.midpoint(this.currentPoint, randomPoint);
		this.drawPoint(ctx, newPoint);
		this.currentPoint = newPoint;
	}

	drawPoint(ctx, point, color = '#fff') {
		ctx.fillStyle = color;

		// draw elipse
		ctx.beginPath();
		ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
		ctx.fill();
	}
}
