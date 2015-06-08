

var SomeConst = function(rootEl) {
	this.rootEl = $(rootEl);

	this.childNode1 = this.rootEl.find('childNode1');

	this.nextEl = this.rootEl.find( '.next' );
	this.prevEl = this.rootEl.find( '.prev' );

	this.nextEl.on('click', function() {
		this.move('next');
	}.bind(this));

	this.prevEl.on('click', function() {
		this.move('prev');
	}.bind(this));
};

SomeConst.prototype.move = function(dir) {
	// body... 1 class for css and many here
};


var inst1 = new SomeConst( '.inst1' );  

var inst2 = new SomeConst( '.inst2' );

/////////////////////////////////////////////////////////////////////////////////////////

var show = function(rootEl){
	this.rootEl		=	$(rootEl);

	this.prevEl 	=	this.rootEl.find('.prev');
	this.nextEl		=	this.rootEl.find('next');	
	this.slideImg	=	this.rootEl.find('.slide-img');

	this.multiLink	=	this.slideImg.find( '.multi-links' );

	this.multiLink.first().addClass('enter active');
	var this.active   = this.slideImg.find( '.active' ),
		this.nextActive;

	this.nextEl.on('click',function(){
		this.move('next');
	}.bind(this));

	this.prevEl.on('click',function(){
		this.move('prev');
	}.bind(this));
};

show.prototype.move = function( dir ) {
	if ( dir === 'next' ) { 
			this.nextActive = this.active.next( 'ul' ).length ? this.active.next( 'ul' ) : this.multiLink.last(); 
		}
	else if( dir === 'prev' ) {
			this.nextActive = this.active.prev( 'ul' ).length ? this.active.prev( 'ul' ) : this.multiLink.first();
			this.slideImg.addClass( 'reverse' );
		};
};

var ph1 = new show( '.photoessay-links' );



