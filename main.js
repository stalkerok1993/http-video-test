var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    console.log("creating player...");
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'j4fUhUDDKBE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("starting video...");
    event.target.playVideo();
}

 var done = false;
function onPlayerStateChange(event) {
    console.log("state changed.");
    if (event.data == YT.PlayerState.PLAYING && !done) {
        console.log("setting timeout to stop...");
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    console.log("stopping video...");
    player.stopVideo();
}