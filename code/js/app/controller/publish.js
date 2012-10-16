/**
 * Publish screen controller class
 * @return Class
 */
( function( App ) {
  var PublishController = Ember.Controller.extend({
    publish: function() {
      var article = App.get( 'Article' ).create({
        title: this.get( '_parentView.title' ),
        content: this.get( '_parentView.content' )
      });

      this.set( '_parentView.title', '' );
      this.set( '_parentView.content', '' );

      this.get( 'controller.namespace.router' ).transitionTo(
        'article', article );
    },
  });

  return App.set( 'PublishController', PublishController );
} )( window.EmBlog );
