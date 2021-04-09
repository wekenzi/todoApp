document.addEventListener('DOMContentLoaded', function () {

    const list = document.getElementById('list');
    const listOfItems = [];

    todoList.map((todo,i)=>{
        let status = extractStatus(todo.status);
        let item =  `
        <li class="list-group-item">
            <div class="item-option">
                <a href="todo/${i}">
                    <i class="fa fa-cog text-info mx-1" class="itemEdit"></i>
                </a>
                <i class="fa fa-trash text-danger" onclick="deleteItem(${i})"></i>
            </div>
            <span class="badge badge-${extractStatusColor(todo.status)} mr-2">
                ${status}
            </span>
            <span>${maxDisplayChars(todo.title)}</span>
        </li>
        `;
        listOfItems.push(item);
    })

    list.innerHTML = listOfItems.join('');
});