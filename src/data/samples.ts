import badMetronomePng from '../assets/bad-metronome.png';
import badMetronomeWebp from '../assets/bad-metronome.webp';
import breatheCalmlyPng from '../assets/breathe-calmly.png';
import breatheCalmlyWebp from '../assets/breathe-calmly.webp';
import rollPwdPng from '../assets/roll-pwd.png';
import rollPwdWebp from '../assets/roll-pwd.webp';
import simpleChordsPng from '../assets/simple-chords.png';
import simpleChordsWebp from '../assets/simple-chords.webp';
import simpleQrCreatePng from '../assets/simple-qr-create.png';
import simpleQrCreateWebp from '../assets/simple-qr-create.webp';
import simpleScalesPng from '../assets/simple-scales.png';
import simpleScalesWebp from '../assets/simple-scales.webp';
import underwindPng from '../assets/underwind.png';
import underwindWebp from '../assets/underwind.webp';
import type { Sample } from '../types';

export const SampleData: Sample[] = [
	{
		title: 'Breathe Calmly',
		source: 'https://github.com/kylemichaelsullivan/breathe-calmly',
		interactive: 'https://breathecalmly.com/',
		imagePng: breatheCalmlyPng,
		imageWebp: breatheCalmlyWebp,
	},
	{
		title: 'Roll Password Generator',
		source: 'https://github.com/kylemichaelsullivan/roll-pwd',
		interactive: 'https://rollpwd.vercel.app/',
		imagePng: rollPwdPng,
		imageWebp: rollPwdWebp,
	},
	{
		title: 'Simple Scales',
		source: 'https://github.com/kylemichaelsullivan/simple-scales',
		interactive: 'https://simplescales.vercel.app/',
		imagePng: simpleScalesPng,
		imageWebp: simpleScalesWebp,
	},
	{
		title: 'Simple Chords',
		source: 'https://github.com/kylemichaelsullivan/simple-chords',
		interactive: 'https://simplechords.vercel.app/',
		imagePng: simpleChordsPng,
		imageWebp: simpleChordsWebp,
	},
	{
		title: 'Bad Metronome',
		source: 'https://github.com/kylemichaelsullivan/bad-metronome',
		interactive: 'https://badmetronome.com/',
		imagePng: badMetronomePng,
		imageWebp: badMetronomeWebp,
	},
	{
		title: 'Simple QR Create',
		source: 'https://github.com/kylemichaelsullivan/simple-qr-create',
		interactive: 'https://simple-qr-create.vercel.app/',
		imagePng: simpleQrCreatePng,
		imageWebp: simpleQrCreateWebp,
	},
	{
		title: 'Underwind',
		source: 'https://github.com/kylemichaelsullivan/underwind',
		imagePng: underwindPng,
		imageWebp: underwindWebp,
	},
];
