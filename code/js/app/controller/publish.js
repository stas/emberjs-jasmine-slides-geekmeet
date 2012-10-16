/**
 * Publish screen controller class
 * @return Class
 */
( function( App ) {
  var PublishController = Ember.Controller.extend({
    publish: function() {
      var article = App.Article.create({
        title: this.get( 'parentView.title' ),
        content: this.get( 'parentView.content' )
      });

      this.set( 'parentView.title', '' );
      this.set( 'parentView.content', '' );

      this.get( 'controller.namespace.router' ).transitionTo(
        'article', article );
    },
  });

  return App.PublishController = PublishController;
} )( window.EmBlog );
