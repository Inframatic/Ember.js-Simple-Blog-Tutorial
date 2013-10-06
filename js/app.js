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
	body: "Did you hear theyre making a Mega-Charizard?"
	},  {
	id: '2',
	title: "A tail of on Rail",
	author: { name: 'Blastoise'},
	date: new Date('11-22-2012'),
	excerpt: "The cannons on my back",
	body: "The installation of the cannons on my back was a 2 month surgery"
	}];
  
App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});