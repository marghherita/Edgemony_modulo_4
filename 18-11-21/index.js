const move = document.querySelector(".move");
const btnRight = document.querySelector("#btn-dx");
const btnLeft = document.querySelector("#btn-sx");
const btnUp = document.querySelector("#btn-up");
const btnDown = document.querySelector("#btn-down");
const image = document.querySelector('#container');

let bottom = 0;
let left = 100;
let backgroundPositionY = 0;
let backgroundPositionX = 0;


const moveUpDwn = (index) => {
    bottom += index;
    move.style.bottom = `${bottom}px`;
}

const bgUpDown = (index) => {
    backgroundPositionY += index;
    image.style.backgroundPositionY = `${backgroundPositionY}px`;
}



btnUp.addEventListener('click', () => {
    if (bottom != 350) {
        moveUpDwn(5);
        bgUpDown(5);


        move.classList.toggle('move-up')



    }
});

btnDown.addEventListener('click', () => {
    if (bottom != 0) {
        moveUpDwn(-5);
        bgUpDown(-5);


        move.classList.toggle('move-down')
    }
});



const moveLeftRight = (index) => {
    left += index;
    move.style.left = `${left}px`;
}

const bgLeftRight = (index) => {
    backgroundPositionX += index;
    image.style.backgroundPositionX = `${backgroundPositionX}px`;
}


btnRight.addEventListener('click', () => {
    if (left != 550) {
        moveLeftRight(5);
        bgLeftRight(-5);

        setInterval(() => {
            move.classList.add('move')
        }, 10);

    }


});

btnLeft.addEventListener('click', () => {
    if (left != 0) {
        moveLeftRight(-5);
        bgLeftRight(5);

        setInterval(() => {
            move.classList.add('move-left')
        }, 10);
    }
});