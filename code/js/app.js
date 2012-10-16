/**
 * Application Loader
 * @return Class
 */
( function( w ) {
  var App = Ember.Application.create({
    VERSION: '0.1',
    rootElement: '#content',
    ApplicationController: Ember.Controller.extend(),
    ArticleController: Ember.Controller.extend()
  });

  return w.EmBlog = App;
} )( window );
