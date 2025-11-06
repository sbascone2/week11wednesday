var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerText = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video")
    video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster")
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate =  video.playbackRate * 1.1
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower")
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate =  video.playbackRate / 1.1
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is", video.currentTime);
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 15;
	}
	console.log("New location is", video.currentTime);
	video.play();
});


document.querySelector("#mute").addEventListener("click", function() {
    console.log("mute");
    if (video.muted) {
        video.muted = false;
        this.innerText = "Mute";
    } else {
        video.muted = true;
        this.innerText = "Unmute";
    }
    console.log("Muted:", video.muted);
});

document.querySelector("#slider").addEventListener("input", function() {
	let volumeValue = document.querySelector("#slider").value;
    video.volume = volumeValue / 100;
    document.querySelector("#volume").innerText = volumeValue + "%";
	console.log("In volume slider");
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("In vintage");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("In original");
    video.classList.remove("oldSchool");
});

