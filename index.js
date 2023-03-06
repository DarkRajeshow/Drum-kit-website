//This is for to find the number of drum kits in the screen
let numberofdrums = document.querySelectorAll(".drum").length;

//This is for to add click event listener to the all drum kits(block). 
for (let i = 0; i < numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        //This is for to play the sound and to add some hover effect to the drums when someone clicks on the drum-kit
        sound(this.innerHTML);
        hovereffect(this.innerHTML);
    })
}

//This is for to add keypress event listener to the all drum kits(block), to play the sound when someone clicks on the specified keys on the keyboard.
document.addEventListener("keypress", function (event) {
    event = event.key;
    sound(event);
    hovereffect(event);
})

//This is for to play corrent sound according to the block of drum kit.
function sound(event) {
    let tom1 = new Audio('sounds/tom-1.mp3')
    let tom2 = new Audio('sounds/tom-2.mp3');
    let tom3 = new Audio('sounds/tom-3.mp3');
    let tom4 = new Audio('sounds/tom-4.mp3');
    let snare = new Audio('sounds/snare.mp3');
    let crash = new Audio('sounds/crash.mp3');
    let kick = new Audio('sounds/kick-bass.mp3');
    switch (event) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kick.play();
            break;
        default:
            break;
    }
}

// this is for to add the hover effect to the blocks.
function hovereffect(event) {
    document.querySelector("." + event).classList.add("hoverEffect");
    setTimeout(() => {
        document.querySelector("." + event).classList.remove("hoverEffect");
    }, 200);
}