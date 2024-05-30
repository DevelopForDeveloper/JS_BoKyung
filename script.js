const addSomeTodoList = () => {
    // 'ul' 요소를 선택합니다.
    // 함수가 호출될때마다 기존의 list를 불러오기때문에 새로운 리스트를 만들지안항도 ok
    const list = document.querySelector('ul');
    // 해당코드를 작성하면 매번 list_item배열이 초기화되는 현상이 발생해요 
    // const list_items = []
    console.log({ list })
    // 사용자에게 입력을 받는 창을 표시합니다.
    const input = window.prompt('入力してください', '');

    // !input 이면 null, undefined, ''을 모두 커버할수있어요 
    // if안에 동작을 넣는것보다 에러패턴을 먼저 작성하는 얼리패턴이 개인 취향이지만 최근에 많이 사용되고있어요 
    // 얼리리턴패턴을 사용하는 가장 큰 이유는 가독성을 높일 수 있어요 
    if (!input) {
        alert('태스크를 입력해주세요');
        return;
    }
    // 새로운 목록 항목(li 요소)을 생성합니다.
    const addList = document.createElement('li');
    // 입력받은 텍스트를 새로운 목록 항목에 추가합니다.
    addList.textContent = input;

    // 불필요한 forEach 사용: list_items 배열에 하나의 요소만 추가된 후 즉시 반복문을 사용하므로, 실제로 반복문의 필요없어보여요
    // list_items.forEach(function (contents, index) {

    // id는 index같은걸 쓰는걸 기본 권장하지않아요. 여기선 간단히 데이트로 만들었는데 
    // 일반적으론 uuid를 많이 사용해요 (여러 모듈 제공함)
    // 그리고 +1 이런방식보다 요샌  템플릿 리터럴: 문자열 연결 시 + 대신 `${}`를 사용하여 가독성을 높이는 편이에요 
    const newId = `element${Date.now()}`;
    //  addList.setAttribute('id', 'element' + (index + 1));
    addList.setAttribute('id', newId);

    // 새로운 항목을 목록에 추가합니다.
    list.appendChild(addList);

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