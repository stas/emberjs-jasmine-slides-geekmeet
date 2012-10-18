// Tests for publish screen controller class
( function( App ){
  describe( 'PublishController', function() {
    var controller, view;

    beforeEach( function() {
      view = App.PublishView.create();
      controller = App.PublishController.create({
        namespace: Ember.Object.create({
          router: Ember.Object.create({})
        })
      });

      view.set( 'controller', controller );
    } );

    it( 'handles article publication', function() {
      var transitionSpy = jasmine.createSpy();
      var count = Object.keys( App.Article.all() ).length;
      var newCount;

      controller.set( 'namespace.router.transitionTo', transitionSpy );
      view.set( 'title', 'A title' );
      view.set( 'content', 'Some content...' );

      controller.publish.apply( view.get( 'buttonView' ) );

      newCount = Object.keys( App.Article.all() ).length;
      expect( transitionSpy ).toHaveBeenCalled();

      expect( newCount ).toEqual( count + 1 );
    });

  });
})( window.EmBlog );
