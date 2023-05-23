//Task N1
const btnElement = document.createElement("button");
const divElement = document.createElement("div");
const textElement = document.createTextNode("Hello there. You are on my page");
const btnText = document.createTextNode("BUTTON");

btnElement.setAttribute('id', "mybtn");
divElement.setAttribute('id', "mydiv");

divElement.appendChild(textElement);
btnElement.appendChild(btnText);
document.body.append(divElement, btnElement);

btnElement.addEventListener("click", () => {
    divElement.style.display = 'none';
})

// console.log(divElement)

//Task N2
const divElement2 = document.createElement("div");
const h2Element = document.createElement("h2");
const aElement = document.createElement("a");
const textElement2 = document.createTextNode("Gandalf");
const textElement3 = document.createTextNode("Go to profile");

divElement2.setAttribute('id', "card");
aElement.setAttribute('href', "#");
h2Element.appendChild(textElement2);
aElement.appendChild(textElement3);
divElement2.append(h2Element, aElement);
document.body.appendChild(divElement2);

//Task N3 and Task N4
const wrongAnswers = document.querySelectorAll("#false");
const rightAnswers = document.querySelectorAll("#true");

let ans = 0;

for(let i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", () => {
        wrongAnswers[i].style.background = "red";
    });
}

document.getElementById("myscore").innerHTML = ans;
for(let i = 0; i < rightAnswers.length; i++) {
    rightAnswers[i].addEventListener("click", () => {
        rightAnswers[i].style.background = "green";
        ans += 1;
        document.getElementById("myscore").innerHTML = ans;
    });
}
