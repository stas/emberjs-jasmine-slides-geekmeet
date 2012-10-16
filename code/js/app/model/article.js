 /**
  * Article class
  * @return Class
  */
( function( App ) {
  var Article = Ember.Object.extend({
    id: null,
    title: null,
    content: null,
    storeNameSpace: 'articles',
    store: $( App.get( 'rootElement' ) ),
    db: {},

    // Handle Generation of the slug as a property
    slug: function() {
      var slug = this.get( 'title' ).toLowerCase();
      return slug.replace( /\s+?/g, '-' );
    }.property( 'title' ).cacheable(),

    // Ideally this should be created using `Ember.Object.reopenClass()`
    load: function() {
      return this.set( 'db',
        this.get( 'store' ).data( this.get( 'storeNameSpace' ) )
      );
    },

    save: function() {
      this.get( 'store' ).data(
        this.get( 'storeNameSpace' ),
        this.get( 'db' )
      );
    },

    find: function( id ) {
      return this.get( 'db' )[ id ];
    },

    findAll: function() {
      return this.get( 'db' );
    },

    // Constructor
    init: function() {
      var db = this.get( 'db' ),
        id = Date.now();

      this._super();

      this.set( 'id', id );
      db[ id ] = this;

      return this;
    }
  });

  return App.Article = Article;
} )( window.EmBlog );
