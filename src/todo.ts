import './styles/style.css';
import { FilterStatus } from './emus';


interface Todo {
    id: number;
    content: string;
    isDone: boolean;
}

type FilterStatusType = typeof FilterStatus[keyof typeof FilterStatus];

export default class TodoApp {
    todoList: Todo[];
    constructor(){
        this.todoList = []; // 초기 배열값 초기화
        this.initEvent();
    }


    // event를 붙이는 부분 -> 
    initEvent(){
        const inputEl = <HTMLInputElement>document.querySelector('.todo-input');
        const todoControlsEl = document.querySelectorAll('.todo-controls button');
        
        if(inputEl){
            inputEl.addEventListener('keypress', this.addTodo.bind(this));
        }

        todoControlsEl.forEach(btn => {
            const [btnClass] = btn.classList.value.split(' ');
            btn.addEventListener('click', (event: MouseEventInit) => {
                const currentTodoList = this.getTodoListByFilter(btnClass);
                this.toggleActiveStatus(event);
                this.render(currentTodoList);
            })
        })
    }



    toggleActiveStatus(event: MouseEventInit){
        //active가 class가 있는 button을 포함한 모든 버튼 classList 초기화
        const todoControlsEl = document.querySelectorAll('.todo-controls button');
        todoControlsEl.forEach(btn => btn.classList.remove('active'));

        ((event as MouseEvent).target as HTMLButtonElement).classList.add('active');
    }


    // jsdoc에 명세를 text로 했지만, event를 받아와야 하기 때문에, text가 아닌 event를 받을 예정
    addTodo(event: KeyboardEventInit){
        if (event.key !== 'Enter'){
            return;
        }
        const Target = <HTMLInputElement>(event as KeyboardEvent).target;
        if (!Target.value){
            return;
        }
        this.todoList.push({
            id: this.todoList.length + 1,
            content: Target.value,
            isDone: false,
        })
        Target.value = '';

        this.render(this.todoList);
    }


    getTodoListByFilter(filterType: FilterStatusType){
        if(filterType === FilterStatus.All){return this.todoList};
        if(filterType === FilterStatus.Completed){
            return this.todoList.filter(todo => todo.isDone == true)
        }
        if(filterType === FilterStatus.InProgress){
            return this.todoList.filter(todo => todo.isDone == false)
        }
        return;
    }


    updateTodoContent(event : MouseEventInit, selectedId: Todo['id']){
        const onLoadText = (event as MouseEvent) && ((event as MouseEvent).target as HTMLElement).innerText;

        if(!onLoadText){
            return;
        }

        const selectedIndex = this.todoList.findIndex((todo) => todo.id = selectedId);

        const selectedTodo = this.todoList[selectedIndex];
        const newTodo = {
            ...selectedTodo,
            content: onLoadText
        }

        this.todoList.splice(selectedIndex, 1, newTodo); // 기존에 변경되기 전 요소를 삭제
        this.render(this.todoList);
    }


    updateTodoStatus(selectedId:Todo['id']){
        const selectedIndexStatus = this.todoList.findIndex((todo) => todo.id = selectedId);
        const selectedTodo = this.todoList[selectedIndexStatus];
        const newTodo = {
            ...selectedTodo,
            isDone: !selectedTodo.isDone, // change 될 때마다 boolean 뒤집기
        }

        this.todoList.splice(selectedIndexStatus, 1, newTodo)
        this.render(this.todoList);
    }


    removeTodo(selectedId: Todo['id']){
        console.log(selectedId);

        this.todoList = this.todoList.filter(todo => todo.id !== selectedId);

        this.render(this.todoList);
    }


    generateTodoList(todo : Todo){
        const containerEl = document.createElement('div');
        const todoTemplate = `
            <input type="checkbox" class="checkbox" ${todo.isDone && "checked"}/>
            <p class="content ${todo.isDone && 'checked'}" contentEditable>${todo.content}</p>
            <button type="button" class="delete-btn">X</button>
        `

        containerEl.classList.add('item-div');
        containerEl.innerHTML= todoTemplate;

        const checkboxEl = containerEl.querySelector('.checkbox');
        const contentEl = containerEl.querySelector('.content');
        const deleteBtn = containerEl.querySelector('.item-div .delete-btn');
        if(!contentEl){
            return;
        }
        
        checkboxEl?.addEventListener('change', () => this.updateTodoStatus(todo.id))
        contentEl.addEventListener('blur', (event) => this.updateTodoContent(event, todo.id) )
        deleteBtn?.addEventListener('click', () => this.removeTodo(todo.id));
        if (deleteBtn){
            containerEl.appendChild(deleteBtn);
        }
        
        return containerEl;
    }

    
    // todoList를 받아서 render 해주는데 이 때, 매개변수에 타입을 Todo[]로 지정하고, 초깃값을 []빈배열로 지정
    render(todoList: Todo[] = []){
        const todoListEl = document.querySelector('.todo-items');
        const todoCountEl = <HTMLSpanElement>document.querySelector('#todo-count');

        todoListEl?.replaceChildren(); // 값이 들어오지 않았을 때는 삭제하는 것

        const fragment = document.createDocumentFragment(); // 가상의 DOM
        const todoListComponent = todoList?.map((todo) => this.generateTodoList(todo))
        // todoList.shift();
        
        if(todoListComponent){
            fragment.append(...todoListComponent);
        }
        if(todoListEl){
            todoListEl.appendChild(fragment);
        }
        if (todoCountEl){
            todoCountEl.innerText = String(todoList.length);
        }
    }
}



