score = 0;
cross = true;

// Audio = new Audio("audio.wav");
// Audiogo = new Audio("gameOver.wav");
// setTimeout(() => {
//     Audio.play()
// }, 1000);

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino")
        dino.classList.add("animateDino")
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = dinox + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector(".dino")
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left = (dinox - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector(".dino")
    gameOver = document.querySelector(".gameOver")
    obstacle = document.querySelector(".obstacle")

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)
    if (offsetX < 113 && offsetY < 50) {
        gameOver.style.visibility = "visible"
        obstacle.classList.remove("obstacleAni")
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(dino, null).getPropertyValue("animation-duration"))
            newDuration = aniDuration - 0.1;
            obstacle.style.aniDur = newDuration + "s";

        }, 500);
    }
}, 10);

function updateScore(score) {
    scorecontainer.innerHTML = "Your score:" + score
}