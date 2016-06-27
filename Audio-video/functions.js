var video = document.getElementsByTagName("video")[0];
var setVideoSecondsButton = document.getElementById("setVideo");
var setLoopButton = document.getElementById("loop");
var replayButton = document.getElementById("replay");

setVideoSecondsButton.addEventListener("click", setVideoSeconds);
setLoopButton.addEventListener("click", setVideoLoop);
replayButton.addEventListener("click", replayVideo);
video.addEventListener("click", playVideo);

function playVideo(){
	video.play();
}

function setVideoSeconds(){
	video.currentTime = 5;
}

function setVideoLoop(){
	video.hasAttribute("loop") ? video.removeAttribute("loop") : video.setAttribute("loop",true);
}

function replayVideo(){
	video.currentTime = 0;
	video.play();
}