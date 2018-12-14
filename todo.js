const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

let toDo = []; // 'let': because the number of toDo list may be changed later on.

function deleteToDo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDo.filter(function(toDo)
    {
        return toDo.id !== parseInt(li.id);
    });
    toDo = cleanToDo;
    saveToDo();
}

function saveToDo()
{
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function paintToDo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button"); // delete button
    const span = document.createElement("span");
    const newId = toDo.length + 1;
    delBtn.innerText = "🌪";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = 
    {
        text: text,
        id: newId
    };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo()
{
    const loadedToDo = localStorage.getItem(TODO_LS);
    if (loadedToDo !== null)
    {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo)
        {
            paintToDo(toDo.text);
        });
    }
}

function init()
{
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();