/**
 * Application Loader/Namespace
 * @return Class
 */
( function( w ) {
  var App = Ember.Application.create({
    VERSION: '0.1.0',
    rootElement: '#content',
    ApplicationController: Ember.Controller.extend(),
    ArticleController: Ember.Controller.extend(),
    ApplicationView: Ember.View.extend({
      template: Ember.Handlebars.compile( '{{outlet}}' )
    })
    // The rest of the Models/Controllers/Views
    // will self append to this namespace
  });

  // expose application globally
  w.EmBlog = App;

  return App;
} )( window );
