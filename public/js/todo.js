document.addEventListener('DOMContentLoaded', function () {

    const ItemForm = document.getElementById('ItemForm');
    let item = todoList[itemIndex];
    ItemForm.elements["title"].value = item.title; 
    ItemForm.elements["description"].value = item.description; 
    ItemForm.elements["status"].value = item.status; 
    ItemForm.elements["expirationDate"].value = item.expirationDate; 
    

    ItemForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        formData = new FormData(ItemForm);
        const newTodoItem = new TodoItem(
            formData.get('title'),
            formData.get('description'),
            formData.get('status'),
            formData.get('expirationDate')
        );
        item = Object.assign(item,newTodoItem)
        const newTodoList = [...todoList];
        setTodoList(newTodoList);
        window.location.href = '/';
    })

});