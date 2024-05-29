

// 전역변수사용은 가급적 피하기 
const list = document.getElementById("lists");

// es6부터는 function대시 화살표함수를 사용해요 
const addSomeTodoList = () => {
    // 암묵적 전역변수 피하기 
    // test라는 이름은 명확히 의도를 알수없어서 피하기 
    // test = window.prompt("入力してください", "");
    const inputText = window.prompt("입력해 주세요", "");
    if (inputText !== null) {
        // var 사용은 권장하지않음. scope와 호이스팅에 대해 알아보시면 이유를 알수있어요 
        //  var addList = document.createElement("li");
        const list = document.querySelector("#todoList");  // 예시로 #todoList라는 id를 가진 요소를 선택
        //  var children = list.children.length + 1
        const newItem = document.createElement("li");

        // setAttribute를 사용할때 문자열 연결 대신 템플릿 레터렁 사용하기 
        // 템플릿 레터럴을 사용하는게 좀 더 가독성이 좋아요 
        // addList.setAttribute("id", "element" + children);
        // 입력받은 텍스트를 새로운 목록 항목에 추가합니다.
        // createTextNode와 appendChild 대신 textContent를 사용하여 간결하게 텍스트를 추가할 수 있어요
        newItem.textContent = inputText;  // createTextNode와 appendChild 대신 textContent 사용
        const newId = `element${list.children.length + 1}`;
        newItem.id = newId;
        list.appendChild(newItem);
    }
}


// ES6 문법을 사용한 리팩토링 포인트:
// 1. var 대신 const와 let 사용: var는 변수의 유효 범위와 호이스팅 문제를 일으킬 수 있어서 사용을 권장하지않음 
// const는 불변할때, let은 다른데서 수정이 가능할때 사용 
// 2. 템플릿 리터럴: 문자열 연결 시 + 대신 `${}`를 사용하여 가독성을 높입니다.
// 3. 화살표 함수: function 키워드 대신 화살표 함수를 사용하여 코드의 일관성과 간결성을 유지합니다.
//  최근 es6에서는 function대신 화살표함수를 많이 사용하고있어요. 자세한건 찾아보세용~. 가독성 측면에도 권장합니다. 
// 4. 전역 변수 사용 최소화: 전역 변수를 줄이고, 필요한 경우 함수 내부에서 변수를 선언합니다.
// 기본적으로 사용하는 위치와 가장 가까운데서 변수를 선언하는게 나중에 디버깅하기편해요
// 5. 명확한 변수명: 변수명은 그 용도를 명확하게 나타내도록 선택합니다.

// 화살표함수로 바꾸기 
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