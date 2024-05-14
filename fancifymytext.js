function showAlert() {
    alert("hello world");
}

function getBigger() {
    alert("Getting bigger");
    document.getElementById("inputText").style.fontSize = "24pt";
}

function getMoo(){
    alert("Getting Moo'd");
    document.getElementById("inputText").value = document.getElementById("inputText").value.toUpperCase();
    let str = document.getElementById("inputText").value.split(".");
    let str2 = str.join("-Moo");
    document.getElementById("inputText").value = str2;
}

function changeFancytext() {
    alert("Applying fancy stuff");
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}

function changeBoringtext() {
    alert("Switching to normal");
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "initial";
    document.getElementById("inputText").style.textDecoration = "none";
}