// Tests for publish screen controller class
( function( App ){
  describe( 'PublishController', function() {

    it( 'handles article publication', function() {
      var transitionSpy = jasmine.createSpy();
      var controller = App.PublishController.create({
        namespace: Ember.Object.create({
          router: Ember.Object.create({
            transitionTo: transitionSpy
          })
        })
      });

      var view = App.PublishView.create();
      var count = Object.keys( App.Article.prototype.findAll() ).length;
      var newCount;

      view.set( 'controller', controller );
      view.set( 'title', 'A title' );
      view.set( 'content', 'Some content...' );

      controller.publish.apply( view.get( 'buttonView' ) );

      newCount = Object.keys( App.Article.prototype.findAll() ).length;
      expect( transitionSpy ).toHaveBeenCalled();

      expect( newCount ).toEqual( count + 1 );
    });

  });
})( window.EmBlog );
