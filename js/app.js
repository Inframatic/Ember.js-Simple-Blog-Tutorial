App = Ember.Application.create();

App.Router.map(function () {
	this.resource('about');
	this.resource('forums');
});

var posts = [{
	id:'1',
	title: "All Hail Rails",
	author: { name: 'Charizard'},
	date: new Date('10-03-2013'),
	excerpt: "I was born a Charmander",
	body: "Did you hear theyre making a Mega-Charizard? Wtf."
}]