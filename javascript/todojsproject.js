// "new" Add A Todo
// "list" List All Todos
// "delete" Remove Specific Todo
// "quit" Quit App

const todoList = ["Buy New table"];
let input = prompt("What would you like to do?");

while (input !== "quit" && input !== "q") {
    input = prompt("What would you like to do?")
    if (input === "new") {
        const todo = prompt("Enter new todo");
        todoList.push(todo);
        console.log(`${todo} added to list`);
    } else if (input === "list") {
        console.log("********")
        for (i = 0; i < todoList.length; i++) {
            console.log(`${i}:${todoList[i]}`);
        }
        console.log("********")
    } else if (input === "delete") {
        const index = parseInt(prompt("Enter index of todoList to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todoList.splice(index, 1);
            console.log(`${deleted[0]} is deleted`);
        } else {
            console.log("invalid index")
        }
    }
}
console.log("Ok, you quit the app.")
