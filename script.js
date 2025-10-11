//your JS code here. If required.

const sounds = ["rain", "ocean", "bird", "wind", "fire", "ground"];

const buttonContainer = document.getElementById("buttons");
let playingAudios = [];

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText =sound;

	btn.addEventListener("click", () => {
		stopAllSounds();
		const audio = new Audio(`sounds/${sound}.mp3`);
		playingAudios.push(audio)
		audio.play();
	})

	buttonContainer.appendChild(btn);
})

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";

stopBtn.addEventListener('click', stopAllSounds);
buttonContainer.appendChild(stopBtn);

function stopAllSounds() {
	playingAudios.forEach((audio)=> {
		audio.pause();
		audio.currentTime = 0;
	})
	playingAudios = []
}
