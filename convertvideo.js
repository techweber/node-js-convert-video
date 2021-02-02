const hbjs = require('handbrake-js');

hbjs.spawn({input: 'something.mp4', output: 'something.avi'})
.on('error',err=>{
	console.log(err);
})
.on('progress',progress=>{
	console.log(
		'Percent complete: %s, ETA: %s',
		progress.percentComplete,
		progress.eta
	);
});