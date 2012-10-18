 /**
  * Article class
  * @return Class
  */
( function( App ) {
  var Article = Ember.Object.extend({
    id: null,
    title: null,
    content: null,

    // Handle Generation of the slug as a property
    slug: function() {
      var slug = this.get( 'title' ).toLowerCase();
      return slug.replace( /\s+?/g, '-' );
    }.property( 'title' ).cacheable(),

    // Constructor
    init: function() {
      var id = Date.now();

      this._super();

      this.set( 'id', id );
      Article.db[ id ] = this;

      return this;
    }
  });

  Article.reopenClass({
    db: {},

    find: function( id ) {
      return this.db[ id ];
    },

    all: function() {
      return this.db;
    }

  });

  return App.Article = Article;
} )( window.EmBlog );
