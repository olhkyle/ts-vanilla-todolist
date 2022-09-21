import './style.css';

interface Todo {
    id: number;
    content: string;
    isDone: boolean;
}

class TodoApp {
    todoList: Todo[];
    constructor(){
        
    }
    initEvent(){
        const inputEl = document.querySelector('.todo-input');
        inputEl?.addEventListener('keydown', this.addTodo.bind(this));
    }
    addTodo(event:any){
        if (event.key !== 'Enter'){
            return;
        }
            const target = event.target;

            if (!target.value){
                return;
            }
            this.todoList.push({
                id: this.todoList.length + 1,
                isDone: false,
                content: target.value,
            })
            this.render();
    }

    /**
     * 
     * 모든 할 일을 조회할 수 있다.
     * @returns {Todo[]} 전체 할 일
     */
    getTodoList(){
        // return this.todoList;
        return [
          {
            id: 2,
            content: 'T',
            isDone: false,
        },
        {
          id: 1,
          content: 'T',
          isDone: false,
        },
      ]
    }

    /**
     * 모든 할 일을 필터링하여 조회할 수 있다.
     * 
     * @param {string} filterType
     * @returns {Todo[]} 필터링 된 할 일
     */
    getTodoListByFilter(filterType){

    }

    /**
     * 할 일의 내용과 상태를 수정할 수 있다.
     * 
     * 
     * @param {Object} todo - 수정될 할 일
     * @param {string} [todo.text] - 수정될 내용
     * @param {string} [todo.status] - 수정될 상태
     */

    updateTodo({text, status}){

    }


    /**
     * 특정 할 일을 제거할 수 있다.
     * 
     * @param {number} id 
     */
    removeTodo(id){

    }

    generateTodoList(todoList:Todo){
        const containerEl = document.createElement('div');
        const todoTemplate = `<div class="item-div">
            <input type="checkbox" ${todoList.isDone && 'checked'}/>
            <div class="content ${todoList.isDone && 'checked'}" contentEditable${todoList.content}></div>
            <button type="button">X</button>
        </div>`


        containerEl.classList.add('item');
        containerEl.innerHTML= todoTemplate;

        return containerEl;
    }

    render(){
        const todoListEl = document.querySelector('.todo-items');

        const fragment = document.createDocumentFragment();
        const todoListComponent =  this.getTodoList().map((todo) => this.generateTodoList(todo))
        fragment.append(...todoListComponent);
        todoListEl?.appendChild(fragment);
    }
}

const todoApp = new TodoApp();
todoApp.render();