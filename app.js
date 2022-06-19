const videoJs = document.getElementById('video-player')
let mp4Vid = document.getElementById('mp4Source')
const videoSrc = [
    './hd1649.mp4',
    './Metal_Wind_Chimes_at_Sunset.mp4'
]
const activeVideo = videoSrc.length
let i = 0

const videoPlay = (num) => {
    console.log(videoSrc[num])
    mp4Vid.setAttribute("src", videoSrc[num])
    mp4Vid.load
    mp4Vid.play
}

const videoHandler = (e) => {
    i++
    const vidPlay = (num) => {
        videoJs.setAttribute("src", videoSrc[num])
        videoJs.load
    }
    vidPlay(i)
    if (i == activeVideo) {
        // videoJs.removeEventListener
        console.log(i)
        i = 0
        vidPlay(i)
    }
    else {
        videoPlay(i)
    }
}

videoPlay(0)
document.getElementById('video-player').addEventListener("ended", videoHandler, false)