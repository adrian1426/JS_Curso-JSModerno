import { App } from './src/todos/app';
import todoStore from './src/store/todoStore';
import './style.css';

todoStore.initStore();
App('#app');
