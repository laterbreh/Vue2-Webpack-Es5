var AppComponent = require('./components/app-component');
new Vue({
  el: '#app',
  data: {
  	message: 'Hello World: ' + window.variable,
  	todos: [
 	  { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
  	]
  },
  mounted: function() {
  	$('.jqme').html('Jquery Used to change this text on mounted')
  }
}); 

