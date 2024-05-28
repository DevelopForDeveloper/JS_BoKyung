const list = document.getElementById("lists");

function addSomeTodoList() {
    test = window.prompt("入力してください", "");
    if (test != null) {
        var addList = document.createElement("li");
        var children = list.children.length + 1
        addList.appendChild(document.createTextNode(test));
        addList.setAttribute("id", "element" + children);
        list.appendChild(addList);
    } 
}

function deleteTargetTodoList() {
    /*TODO*/
}

function modifyTargetTodoList() {
    /*TODO*/
}

function allClearTodoList() {
    while (list.hasChildNodes) {
        list.removeChild(list.firstChild);
    }
}