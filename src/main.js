import { createApp } from 'vue';
import App from './App.vue';
import UI from 'components/UI';
import components from 'components';
import directives from 'directives/index.js';
import { router } from './router/router.js';

const app = createApp(App);

UI.forEach(component => app.component(component.name, component));

components.forEach(component => app.component(component.name, component));

directives.forEach(directive => app.directive(directive.name, directive));

app
  .use(router)
  .mount('#app');
