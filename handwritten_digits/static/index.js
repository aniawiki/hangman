let model; // Zmienna do przechowywania wczytanego modelu
const classifierElement = document.getElementById('classifier');

async function load_model() {
	console.log("loading")
    model = await tf.loadLayersModel('/static/model/model.json');
	console.log("loaded")
}

async function predict() {
    const img = document.getElementById('img');
	const tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([28, 28]).mean(2).toFloat().expandDims(0);
	const normalizedImg = tensorImg.div(255.0);

	let y_probs = model.predict(normalizedImg);
	let y_preds = y_probs.argMax(axis=1).dataSync()[0];
	alert(y_preds);
}

function changeImage() {
    var imageDisplay = document.getElementById('img');
	var uploadedImage = document.getElementById('file_selector').files[0];
	imageDisplay.src = URL.createObjectURL(uploadedImage);
}

console.log("hello!!");
load_model();
