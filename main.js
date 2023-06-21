window.addEventListener('load', function () {
    const progressBarTag = document.getElementsByClassName('progress-bar')[0];
    progressBarTag.addEventListener("click", (event) => {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // everything else will be executed automatically
    });
});

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
            'onReady': onPlayerReady//,
            // 'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log("starting video...");
    document.getElementsByClassName('circle')[0].hidden = true;
    event.target.playVideo();
}