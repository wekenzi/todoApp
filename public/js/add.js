document.addEventListener('DOMContentLoaded', function () {

    const addItemForm = document.getElementById('addItemForm');

    addItemForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        formData = new FormData(addItemForm);
        const newTodoItem = new TodoItem(
            formData.get('title'),
            formData.get('description'),
            formData.get('status'),
            formData.get('expirationDate')
        );
        const newTodoList = [...todoList, newTodoItem];
        setTodoList(newTodoList);
        window.location.href = '/';
    })

});