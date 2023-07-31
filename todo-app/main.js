import { App } from './src/todos/app';
import todoStore from './src/store/todoStore';
import './style.css';

App('#app');

todoStore.initStore();
