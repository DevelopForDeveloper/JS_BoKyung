const addSomeTodoList = () => {
  // 'ul' 요소를 선택합니다.
  const list = document.querySelector("ul");
  console.log({ list });
  // 사용자에게 입력을 받는 창을 표시합니다.
  const input = window.prompt("입력해주세요", "");

  if (!input) {
    alert("태스크를 입력해주세요");
    return;
  }

  // 새로운 목록 항목(li 요소)을 생성합니다.
  const addList = document.createElement("li");

  // 입력받은 텍스트를 새로운 목록 항목에 추가합니다.
  addList.textContent = input;

  const newId = `element${Date.now()}`;
  addList.setAttribute("id", newId);

  // 리스트에 클릭이벤트를 추가
  addList.addEventListener("click", () => {
    console.log(`클릭한 리스트 내용: ${addList.textContent}`);
    // alert에서 확인은 삭제를, 취소는 수정을 처리
    const isConfirm = confirm("삭제는 확인, 수정은 취소를 눌러주세요");
    if (isConfirm) {
      list.removeChild(addList);
      deleteTodoList(addList.id);
    } else {
      const newInput = window.prompt("수정해주세요", "");
      // 수정사항 없을시, 그대로 둔다
      if (!newInput) {
        alert("입력한 내용이 없습니다");
        return;
      }
      // 수정사항 반영
      addList.textContent = newInput;
      modifyTodoList(addList);
    }
    renderTodoList();
  });

  // 새로운 항목을 목록에 추가합니다.
  list.appendChild(addList);

  // 리스트를 로컬스토리지에 저장
  const savedTodoList = loadTodoList();
  savedTodoList.push({ id: newId, text: input });
  saveTodoList(savedTodoList);
};

const deleteTodoList = (targetId) => {
  const savedTodoList = loadTodoList();
  const updatedTodoList = savedTodoList.filter(todo => todo.id !== targetId);
  console.log('선택한 리스트가 삭제되었습니다');
  saveTodoList(updatedTodoList);
}

const modifyTodoList = (targetList) => {
  const savedTodoList = loadTodoList();
  const updatedTodoList = savedTodoList.map(list => {
    if (list.id == targetList.id) {
      return { ...list, text: targetList.textContent };
    }
    return list;
  })
  saveTodoList(updatedTodoList);
  console.log('선택한 리스트가 수정되었습니다');
}

const allClearTodoList = () => {
  // ul list 가져오기
  const list = document.querySelector("ul");
  // list가 있는지 확인
  console.log(`삭제할 리스트 목록:${list.textContent}`);

  // 리스트가 없는 경우 alert처리
  if (list.childNodes.length == 0) {
    alert("삭제할 리스트가 없습니다.");
    return;
  }

  // 리스트가 있을 경우, 리스트 전체 제거
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  saveTodoList([]);

};

const saveTodoList = (todoList) => {
  sessionStorage.setItem("id", JSON.stringify(todoList));
  console.log(`리스트가 저장되었습니다:${JSON.stringify(todoList)}`);
};

const loadTodoList = () => {
  const todoList = sessionStorage.getItem("id");
  if (!todoList) {
    console.log(`리스트가 없습니다:${todoList}`)
    return [];
  }
  console.log(`리스트가 load되었습니다:${todoList}`)
  return JSON.parse(todoList);
};

const renderTodoList = () => {
  const lists = document.querySelector("ul");

  const savedTodoList = loadTodoList();

  savedTodoList.forEach(list => {
    const addList = document.createElement("li");
    addList.textContent = list.text;
    addList.setAttribute("id", list.id);
    lists.appendChild(addList);

    // 리스트에 클릭이벤트를 추가
    addList.addEventListener("click", () => {
      console.log(`클릭한 리스트 내용: ${addList.textContent}`);
      // alert에서 확인은 삭제를, 취소는 수정을 처리
      const isConfirm = confirm("삭제는 확인, 수정은 취소를 눌러주세요");
      if (isConfirm) {
        lists.removeChild(addList);
        // 해당 리스트 지우기
        deleteTodoList(addList.id);
      } else {
        const newInput = window.prompt("수정해주세요", "");
        // 수정사항 없을시, 그대로 둔다
        if (!newInput) {
          alert("입력한 내용이 없습니다");
          return;
        }
        // 수정사항 반영
        addList.textContent = newInput;
        modifyTodoList(addList);
    }});
  });
}

window.onload = renderTodoList;
