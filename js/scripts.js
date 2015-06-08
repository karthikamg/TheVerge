
// when DOM is ready

// $(function() {

// 	var $photoessayLinks = $( '.photoessay-links' ),
// 		$prev            = $photoessayLinks.find( '.prev' ),
// 		$next            = $photoessayLinks.find( '.next' ),
// 		$slideImg        = $photoessayLinks.find( '.slide-img' ),
// 		$active          = $slideImg.find( '.active' );

// 	var show = function(dir) {
// 		var $nextActive,
// 			animDuration = 0.55;

// 		if ( dir == 'next' ) {
// 			$nextActive = $active.next( 'ul' ).length ? $active.next( 'ul' ) : $slideImg.find( ':first-child' );
// 		} else ( dir == 'prev' ) {
// 			$nextActive = $active.prev( 'ul' ).length ? $active.prev( 'ul' ) : $slideImg.find( ':last-child' );
// 			$slideImg.addClass( 'reverse' );
// 		};

// 		$active.addClass( 'leave' );
// 		$nextActive.addClass( 'enter' );

// 		setTimeout(function() {
// 			$active.removeClass( 'active')
// 				.removeClass( 'enter');

// 			$nextActive.removeClass( 'leave' )
// 				.addClass( 'active' );

// 			$slideImg.removeClass( 'reverse' );

// 			$active = $nextActive;
// 		}, animDuration);
// 	};

// 	$prev.on('click', function() {
// 		show('prev');
// 	});	

// 	$next.on('click', function() {
// 		show('next');
// 	});
// });

///////////////////////////////////////////////////////////////////

$(function() {

var animLock = false;

var show = function(rootEl){  

	this.rootEl		=	$(rootEl);

	this.prevEl 	=	this.rootEl.find('.prev');
	this.nextEl		=	this.rootEl.find('.next');	
	this.slideImg	=	this.rootEl.find('.slide-img');

	this.multiLink	=	this.slideImg.find( '.multi-links' ); 
	this.multiLink.slice(1).addClass('wait');

	this.multiLink.first().addClass('enter active'); 
	this.active   = this.slideImg.find( '.active' );
	this.nextActive = undefined;

	// this.nextEl.on('click',function(){
	// 	this.move('next');
	// }.bind(this));

	// this.prevEl.on('click',function(){
	// 	this.move('prev');
	// }.bind(this));

	var self = this;

	this.rootEl.on( 'click','div', function(event) {
		var main = $(this);
		event.preventDefault();

		if( main.is( '.prev') ){
			self.move('prev');
		}
		else if( main.is( '.next') ){
			self.move('next');
		}
	});

};

show.prototype.move = function( dir ) {

	if(animLock){ 
		return;
	}

	var animDuration = 0.55;

	if ( dir == 'next' ) { 
			this.nextActive = this.active.next( 'ul' ).length ? this.active.next( 'ul' ) : this.multiLink.last();
			if( this.active.next( 'ul' ).length) { 
				this.active.addClass('leave'); 
				this.nextActive.removeClass('wait');
			}			 
		}
	else if( dir == 'prev' ) {
			this.nextActive = this.active.prev( 'ul' ).length ? this.active.prev( 'ul' ) : this.multiLink.first();
			// this.slideImg.addClass( 'reverse' );
			this.active.addClass( 'wait' );
			this.nextActive.removeClass('wait');  
		};

	// this.active.addClass( 'leave' );  
	this.nextActive.addClass( 'enter' );

	var that = this;

	setTimeout(function () { 

		that.active.removeClass( 'active') 
		.removeClass( 'enter'); 

		that.nextActive.removeClass( 'leave' )
			.addClass( 'active' );

		that.slideImg.removeClass( 'reverse' ); 

		that.active = that.nextActive;

		animLock = false;

	}, animDuration);
};

var ph1 = new show( ".inst1" );
var ph2 = new show( ".inst2" );
var ph3 = new show( ".inst3" );
var ph4 = new show( ".inst4" );
var ph5 = new show( ".inst5" );

var search = $('.search');
search.click( function(){
	
});

});