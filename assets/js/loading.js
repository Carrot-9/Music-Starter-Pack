
//Loads Main Page
window.onload = setTimeout(() => {
    window.location.replace("index.html")
}, 8000)

//Typing Effect
let i = 0;
const text = "Present Day...";
const speed = 200;
const PDElements = document.getElementById("PresentDayID");

function foo() {
    try {
        if (i < text.length) {
            PDElements.textContent += text.charAt(i);
            i++;
            setTimeout(foo, speed);
        }
    } catch (error) {
        alert("An Error has occured:", error.message);
    }
  }

setTimeout(() => {
    foo();
} , 2000 );

let j = 0;
const txt = "Present Time...";
const PTElements = document.getElementById("PresentTimeID");

function bar() {
    try {
        if (j < txt.length) {
            PTElements.textContent += txt.charAt(j);
            j++;
            setTimeout(bar, speed);
        }
    } catch (error) {
        alert("An Error has occured:", error);
    }
}

setTimeout(() => {
    bar();
} ,4000 );


