"use strict"
//Modal Elements
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
//Image Elements
let imageArray = document.querySelectorAll(".array");
let modalImage = document.querySelector("#modalImage");
//Button Elements
let leftButton = document.getElementsByClassName(".left");
let rightButton = document.getElementsByClassName(".right");

const backgroundMusic = document.getElementById("bgMusic");
backgroundMusic.load();
backgroundMusic.play();
backgroundMusic.volume=.05;

//Array Itteration
let i = 0;

function left () {
    if (i > 0 && i <= 6) {
        i--;
        modalImage.src = imageArray[i].src;
        console.log(i);
    }
}

function right () {
    if (i >= 0 && i < 6) {
        i++;
        modalImage.src = imageArray[i].src;
        console.log(i);
    }
}

//Open/Close Modal
openModal.addEventListener("click", () => {
    modal.showModal();
    modalImage.src = imageArray[0].src;
})

closeModal.addEventListener("click", () => {
    modal.close();
})

//Testing Section

