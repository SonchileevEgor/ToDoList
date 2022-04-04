var list = document.querySelector('ul');
var todos;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

function OnSaveEdited()
{
    var elems = document.querySelectorAll('li');
    elems.forEach(element => {
        element.firstChild.disabled = true;
        element.firstChild.setAttribute('value', element.firstChild.value);
    });
    toLocal();
}

function OnEdit()
{
    var elems = document.querySelectorAll('li');
    elems.forEach(element => {
        element.firstChild.disabled = false;
    });
}

function clearToDelete()
{
    var toDelete = document.querySelectorAll('input[type=checkbox]');
    toDelete.forEach(el => {
        if (el.checked)
            el.parentNode.remove();
    });
    toLocal();
}

function clearAll()
{
    localStorage.clear();
    window.location.reload();
}

list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
       toLocal();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createElement('input');
    t.disabled = true;
    t.setAttribute('value', inputValue);
    t.id = "taskText";
    li.appendChild(t);
    if(inputValue == "") {
       alert("Enter your task!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checker";
    li.appendChild(checkbox);
    toLocal();
}

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}