var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', './../video/mov_bbb.mp4');

video.appendChild(source);
video.play();

setTimeout(function () {
    // video.pause();

    source.setAttribute('src', './../video/SampleVideo_640x360_2mb.mp4');

    video.load();
    video.play();
}, 5000);




// function playNext(src) {
//     source.setAttribute('src', src);
//     video.load();
//     video.play();
// }

// playNext("./../video/SampleVideo_640x360_2mb.mp4");