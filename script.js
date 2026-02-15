<link rel="stylesheet" href="styles.css">

var button = document.getElementById("addBtn");
var input = document.getElementById("textInput");
var dynamic = document.getElementById("dynamic");

if (button && input && dynamic) {
    var ul = document.getElementById("myList");
    
    button.onclick = function () {
        var text = input.value.trim();

        if (text != "") {
            var li = document.createElement("li");
            li.textContent = text;
            ul.appendChild(li);
            input.value = "";
        }
};

