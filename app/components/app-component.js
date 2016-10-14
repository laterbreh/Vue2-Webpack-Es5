var template = require('./partials/app-component-template.html');

Vue.component('todo-item', {
	props: ['todo'],
	template: template
})
