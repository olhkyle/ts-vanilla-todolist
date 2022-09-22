import './styles/style.css';
import TodoApp from './todo'




window.addEventListener('DOMContentLoaded', () => {
    const todoApp = new TodoApp();
    todoApp.render();
})