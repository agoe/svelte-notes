//import App from './App.svelte';
import "./assets/global.css";
import App from './spa-router/App.svelte';

const app = new App({
  target: document.getElementById('app')
})

export default app;
