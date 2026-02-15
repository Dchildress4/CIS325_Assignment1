document.getElementById('js-test').textContent = 'JavaScript file linked'
console.log('Script is running!')

var button = document.getElementById("addBtn")
var input = document.getElementById("textInput")
var dynamic = document.getElementById("dynamic")

var ul = document.createElement("ul")
dynamic.appendChild(ul)

button.onclick = function () {
    var li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ""
}
