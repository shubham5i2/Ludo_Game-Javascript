const buttonClicked = document.getElementById("btn");
const diceImage1 = document.getElementById("diceImg1");
const diceImage2 = document.getElementById("diceImg2");
const displayMessage = document.getElementById("display");

function changeImage() {
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    const newImage1 = `dice${randomNumber1}.png`;
    const newImage2 = `dice${randomNumber2}.png`;
    diceImage1.setAttribute("src", newImage1);
    diceImage2.setAttribute("src", newImage2);

    if (randomNumber1 > randomNumber2) {
        displayMessage.innerHTML = "Player 1 wins";
    }
    else if (randomNumber1 < randomNumber2) {
        displayMessage.innerHTML = "Player 2 wins";
    }
    else {
        displayMessage.innerHTML = "Draw";
    }
}

buttonClicked.addEventListener("click", function () {
    changeImage();
})