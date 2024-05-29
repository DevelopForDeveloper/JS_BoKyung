const addSomeTodoList = () => {
    const list = document.querySelector('ul');
    const list_items = []
    const input = window.prompt('入力してください', '');
    if (input != null) {
        list_items.push(document.createTextNode(input));
        list_items.forEach (function(contents, index) {
            const addList = document.createElement('li');
            addList.appendChild(contents);
            /* TODO：配列を関数の中に配置するとindexが増加しない、配列をグローバルに設定しておいてfilterかifを使うのか？ */
            addList.setAttribute('id', 'element' + (index + 1));
            list.appendChild(addList);
        });
    } 
}

const deleteTargetTodoList = () => {
    /*選択したリストを削除する、該当リストを選択し、削除確認画面を出す、Yes->削除、No→そのまま*/
}

const modifyTargetTodoList = () => {
    /*TODO*/
}

const allClearTodoList = () => {
    while (list.hasChildNodes) {
        list.removeChild(list.firstChild);
    }
}