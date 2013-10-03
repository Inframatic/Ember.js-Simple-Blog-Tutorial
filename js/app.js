App = Ember.Application.create();

App.Router.map(function () {
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', { path: ':post_id'});
	});
	
});

App.PostsRoute = Ember.Route.extend ({
	model: function() {
		return posts;
	}
});

var posts = [{
	id:'1',
	title: "All Hail Rails",
	author: { name: 'Charizard'},
	date: new Date('10-03-2013'),
	excerpt: "I was born a Charmander",
	body: "Did you hear theyre making a Mega-Charizard? Wtf."
	},  {
	id: '2',
	title: "A tail of on Rail",
	author: { name: 'Blastoise'},
	date: new Date('11-22-2012'),
	excerpt: "The cannons on my back",
	body: "The installation of the cannons on my back was a 2 month surgery"
	}];