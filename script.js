var index = 1;
var text = document.getElementsByClassName("notetext");
var viewNote = document.getElementsByClassName("card");
var popText = document.querySelector(".modal");
var popBg = document.querySelector(".backgroundB");
var len = text.length;
var oText = [];
var current;

function Add() {
    let inputText = document.getElementById("note").value;
    oText[index - 1] = inputText;
    if (index > len) {
        alert("Maximum number reached");
    }
    if (inputText.length > 100) {
        text[index - 1].innerText = inputText.substr(0, 100) + "...";
        viewNote[index - 1].style.display = "inline-block";
        index++;
    }
    else if (inputText.length == 0) {
        alert("Note is empty");
    }
    else {
        text[index - 1].innerText = inputText;
        viewNote[index - 1].style.display = "inline-block";
        index++;
    }
}

function Detail(n) {
    // document.getElementsByClassName("modal")[0].style.display = "block";
    current = n;
    popText.style.display = "block";

    // document.getElementsByClassName("backgroundB")[0].style.display = "block";

    popBg.style.display = "block";

    // let dText = document.getElementsByClassName("textdetail");
    // dText[0].innerText = oText[n];

    document.querySelector(".textdetail").innerText = oText[n];
}

function Close() {
    popText.style.display = "none";
    popBg.style.display = "none";
}

function Delete() {
    popText.style.display = "none";
    popBg.style.display = "none";
    if (current == len - 1) {
        viewNote[current].style.display = "none";
        index--;
    }
    else {
        for (let i = current; i < index - 2; i++) {
            text[i].innerText = text[i + 1].innerText;
            oText[i] = oText[i + 1];
        }
        viewNote[index - 2].style.display = "none";
        index--;
    }
}

function vCounter() {
    let vText = document.getElementById("note").value;
    let vSum = 0;
    if (vText.match(/[aeiou]/gi) != null) {
        vSum = vText.match(/[aeiou]/gi).length;
    }
    alert("Number of vowels: " + vSum);
}
