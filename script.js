//your JS code here. If required.

const sounds = ["rain", "ocean", "bird", "wind", "fire"];

const buttonContainer = document.getElementById("buttons");

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText =sound;

	btn.addEventListener("click", () => {
		stopAllSound();
		const audio = new Audio(`sound/${sound}.mp3`);
		audio.play();
		btn.currentAudio = audio;
	})

	buttonContainer.appendChild(btn);
})

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener('click', stopAllSounds);
buttonContainer.appendChild(stopBtn);

function stopAllSound() {
	const audios = document.querySelector('audio');
	audios.forEach(a => a.pause());
}
