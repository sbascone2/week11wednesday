window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
    document.querySelector("#volume").innerText = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("In slower");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("In faster");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 1.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.loop = true;
	console.log("The duration is " + video.duration);
	console.log("Current location is " + video.currentTime);
	video.currentTime = video.currentTime + 10;
	console.log("New location is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("In mute");
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").innerText = "Mute";
        console.log("Video is unmuted");
    } else {
        video.muted = true;
        document.querySelector("#mute").innerText = "Unmute";
        console.log("Video is muted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    let volumeValue = document.querySelector("#slider").value;
    video.volume = volumeValue / 100;
    document.querySelector("#volume").innerText = volumeValue + "%";
    console.log("Volume set to: " + volumeValue + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original");
    video.classList.remove("oldSchool");
});
message.txt