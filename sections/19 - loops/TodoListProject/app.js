let option;
const todos = [];

do {
	option = parseInt(prompt('Digite uma opção:'));
	
	if (option === 1) {
		let todo = prompt('Digita a atividade a fazer:');
		todos.push(todo);
		console.log(`${todo} adicionado à lista`)
		
	} else if (option === 2) {
		listTodoItems(todos);
		
	} else if (option === 3) {
		listTodoItems(todos);
		let indexToDelete = parseInt(prompt('Digite o número da atividade a ser deletada'));
		
		if (indexToDelete && indexToDelete < todos.length) {
			let deleted = todos.splice(indexToDelete, 1);
			console.log(`${deleted[0]} removido da lista`);
		}
	}
} while (option != 4);

function listTodoItems(items) {
	console.log('===========================');
	for (let i = 0; i < items.length; i++) {
		console.log(`${i}: ${todos[i]}`);
	}
}