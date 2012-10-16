// Tests for Article class
( function( App, $ ){
  describe( 'Article', function() {

    it( 'must have a set of empty attributes', function() {
      var article = App.get( 'Article' ).create();

      expect( article.get( 'id' ) ).toMatch( /\d+/ );
      expect( article.get( 'title' ) ).toBeNull();
      expect( article.get( 'content' ) ).toBeNull();
      expect( function(){ article.get( 'slug' ) } ).toThrow(
        new TypeError( 'Cannot call method \'toLowerCase\' of null' ) );
    });

    it( 'creates a valid object with custom values', function() {
      var article = App.get( 'Article' ).create({
        title: 'Test Article', content: 'Some content...'
      });

      var todayish = Date.now().toString().match(/\d{10}/);

      expect( article.get( 'id' ).toString() ).toMatch( todayish );
      expect( article.get( 'title' ) ).toEqual( 'Test Article' );
      expect( article.get( 'slug' ) ).toEqual( 'test-article' );
      expect( article.get( 'content' ) ).toEqual( 'Some content...' );
    });

    it( 'should find an existing object', function() {
      var article = App.get( 'Article' ).create({
        title: 'Test Article', content: 'Some content...'
      });

      var foundArticle = App.get( 'Article' ).prototype.find( article.get( 'id' ) );

      expect( foundArticle.get( 'slug' ) ).toEqual( article.get( 'slug' ) );

    });
  });
})( window.EmBlog, window.jQuery );
