
function querySelector(selector) {
    return document.querySelector(selector)
}


const arrayOfSiderImages = ["./images/11.jpg", "./images/12.jpg", "./images/13.jpg", "./images/14.jpg", "./images/15.jpg"];

const sliderContent = querySelector(".container__slider");
const leftBtn = querySelector(".container__left-arrow");
const rightBtn = querySelector(".container__right-arrow");
const playBtn = querySelector("#play");
const stopBtn = querySelector("#stopPlay");

let index = 0;
let playByInterval;
const imgBoxes = document.querySelectorAll(".gallery__img-box");
const arrayOfImgBoxes = Array.from(imgBoxes);

for (let i = 0; i < arrayOfImgBoxes.length; i++) {
    arrayOfImgBoxes[i].innerHTML = `<img src="${arrayOfSiderImages[i]}" alt="photo">`
}

function changeImgOfSlider(index) {
    sliderContent.innerHTML = `<img src="${arrayOfSiderImages[index]}" alt="photo">`;
}

changeImgOfSlider(index);

arrayOfImgBoxes.map(elem => elem.addEventListener("click", function showImageFromGallery() {
    index = arrayOfImgBoxes.indexOf(elem);

    arrayOfImgBoxes.map(elem => elem.style.border = "");

    arrayOfImgBoxes[index].style.border = '2px solid gray';
    
    changeImgOfSlider(index)
}))

function nextImages() {
    if (playByInterval) {
        stopPlay();
    }
    index++
    if (index > (arrayOfImgBoxes.length - 1)) {
        index = 0;
    }
    changeImgOfSlider(index);
}

function previousImages() {
    if (playByInterval) {
        stopPlay();
    }
    index--
    if (index < 0) {
        index = (arrayOfImgBoxes.length - 1);
    }
    changeImgOfSlider(index);
}


const autoPlay = function () {
    if (!playByInterval) {
        playByInterval = setInterval(() => {
            index++
            if (index > (arrayOfImgBoxes.length - 1)) {
                index = 0;
            }
            changeImgOfSlider(index);
        }, 1000);
    }
}

function stopPlay() {
    clearInterval(playByInterval);
    playByInterval = null;
}

playBtn.addEventListener("click", autoPlay);
stopBtn.addEventListener("click", stopPlay);
leftBtn.addEventListener("click", previousImages);
rightBtn.addEventListener("click", nextImages)
