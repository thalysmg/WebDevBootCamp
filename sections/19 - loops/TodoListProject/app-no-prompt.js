let opcao;
let numItems = 0;

document.getElementById('abrePrompt').addEventListener('click', function(event) {
    opcao = parseInt(prompt('Digite aqui a opção'));
    
    if (opcao == 1) {
        document.getElementById('insertTodo').hidden = false;

        let list = '';
        let deleteInput = 'delete';
        let insertTodo = '';

        hideCamposById({list, deleteInput, insertTodo});
    
    } else if (opcao == 2) {

        document.getElementById('list').hidden = !document.getElementById('list').hidden;
        
        let insertTodo = 'insertTodo';
        let deleteInput = 'delete';
        let list = '';
        hideCamposById({insertTodo, deleteInput, list});

    } else if (opcao == 3) {
        document.getElementById('delete').hidden = false;    

        let insertTodo = 'insertTodo';
        let list = '';
        let deleteInput = '';
        hideCamposById({insertTodo, list, deleteInput});
    }
});

function hideCamposById(campos) {
    if (campos.list) document.getElementById(campos.list).hidden = true;
    if (campos.deleteInput) document.getElementById(campos.deleteInput).hidden = true;
    if (campos.insertTodo) document.getElementById(campos.insertTodo).hidden = true;
}

document.getElementById('salvaTodo').addEventListener('click', function(event) {
    let todo = document.getElementById('input-insert').value;
    console.log(todo);

    document.getElementById('todoList').innerHTML += `<li id="${numItems}">${numItems} - ${todo}</li>`;
    numItems++;
});

document.getElementById('deleteTodo').addEventListener('click', function(event) {
    let num = document.getElementById('input-delete').value;
    document.getElementById(num).remove();
    numItems--;
});