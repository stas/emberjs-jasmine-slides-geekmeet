// Tests for article screen controller class
( function( App ){
  describe( 'ArticleController', function() {
    var controller, view;

    beforeEach( function(){
      controller = App.ArticleController.create();
      view = App.ArticleView.create();

      view.set( 'controller', controller );
    });

    it( 'handles article screen', function() {
      var article = App.Article.create({
        title: 'Testing title', content: 'Some content...'
      });

      controller.set( 'content', article );
      view.createElement();

      expect( view.$().find( 'h3' ).length ).toEqual( 1 );
      expect( view.$().find( 'h3' ).text() ).toEqual( 'Testing title' );
      expect( view.$().find( 'p' ).length ).toEqual( 1 );
      expect( view.$().find( 'p' ).text() ).toEqual( 'Some content...' );
    });

  });
})( window.EmBlog );
