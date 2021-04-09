function getTodoList(){
    return localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : false;
}

function setTodoList(arr){
    localStorage.setItem('todoList', JSON.stringify(arr));
}

if(!getTodoList()) localStorage.setItem('todoList','[]');

const todoList = getTodoList();

function deleteItem(i){
    const newTodoList = todoList.filter((item,index)=> index != i);
    setTodoList(newTodoList);
    window.location.reload();
}

function maxDisplayChars(str){
    if(str.length > 50) return `${str.substring(0,25)}...`;
    return str;
}

function extractStatus(str){
    if(str == '1') return `Inserted`;
    if(str == '2') return `In Process`;
    if(str == '3') return `Completed`;
}

function extractStatusColor(str){
    if(str == '1') return `warning`;
    if(str == '2') return `primary`;
    if(str == '3') return `success`;
}