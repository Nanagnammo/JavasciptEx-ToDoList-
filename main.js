let input = prompt('what would you like to do?');

//////////  ARRAY WITH TODO ITEMS  //////////
const todo = ['Buy Groceries', 'Take car from mechanic']

//////////  QUIT COMMAND  //////////
while(input !== 'quit' && input !== 'q'){

//////////  LIST COMMAND  //////////
    if (input === 'list'){

        console.log('----------');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('----------');

//////////  NEW COMMAND  //////////
    } else if (input ==='new'){

        const newTodo = prompt('Add new todo item');
        todo.push(newTodo);
        console.log(`${newTodo} has been added to the list`);

//////////  DELETE COMMAND  //////////
    }else if (input === 'delete'){

        const delTodo = parseInt(prompt('Which todo item would you like to remove? Insert the Index'));

        if(!Number.isNaN(delTodo)){

            const deleted = todo.splice(delTodo, 1);
            console.log(`${deleted[0]} has been removed from the list`);

        } else {
        
            console.log('Unknown Index');
        }
    }
    input = prompt('what would you like to do?');
}
console.log('Okay! You quit the app');