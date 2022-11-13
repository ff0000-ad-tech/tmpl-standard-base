export default {
	particleModels: [
		{
			type: 'Image',
			id: 'model0',
			width: 10,
			image: '160over90-logo-small',
			probability: 2,
			properties: {},
		},
		{
			type: 'Image',
			id: 'model1',
			width: 20,
			image: '160over90-logo-small',
			probability: 5,
			properties: {},
		},
	],
	pickRandomModel: false,
	maxParticleAmount: 260,
	emitRate: 0.04,
	emitAmount: 3,
	killIfOutOfCanvas: true,
	background: {
		type: 'color',
		color: '#1dabca',
		image: 'steamBG',
		alpha: 1,
	},
	clearCanvas: true,
	world: {
		active: false,
		value: [6, 300, 212, 250],
	},
	globalForce: {
		angle: 198,
		amount: 0.5,
	},
	gravityAmount: -5,
	bounceAmount: 0,
	origin: {
		value: {
			x: 146.89395752301903,
			y: 235.11656964017425,
		},
		range: {
			x: 66.16695908786647,
			y: 2,
		},
		shape: 'oval',
	},
	lifeSpan: {
		value: 4,
		range: 3,
	},
	velocityAngle: {
		value: 269,
		range: 87,
	},
	speed: {
		value: 1.9,
		range: 0.4,
	},
	turbulence: {
		rate: 0.01,
		xAmplitude: 0.2,
		yAmplitude: 0.2,
	},
	maxSpeed: 8.700000000000001,
	acceleration: 0.06,
	alpha: {
		value: 0.65,
		range: 0.2,
	},
	scale: {
		value: 6,
		range: 3,
	},
	rotation: {
		value: 0,
		range: 360,
	},
	transformOrigin: {
		x: 0.09,
		y: 0.52,
	},
	color: {
		value: [200, 200, 200],
		range: [90, 90, 90],
	},
	animations: {
		alpha: {
			loop: false,
			duration: 'max',
			steps: [
				{
					s: 0,
					v: 0,
				},
				{
					s: 0.15,
					v: 1,
				},
				{
					s: 0.9,
					v: 0.5,
				},
				{
					s: 1,
					v: 0,
				},
			],
		},
		scale: {
			loop: true,
			duration: 'max',
			steps: [
				{
					s: 0,
					v: 1,
				},
				{
					s: 0.8,
					v: 0.5,
				},
				{
					s: 1,
					v: 0.2,
				},
			],
		},
		rotation: {
			loop: true,
			duration: 0.5,
			steps: [],
		},
	},
}
