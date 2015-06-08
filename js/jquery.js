$(document).ready(function(){

	// $(window).scroll(function(){
	// $scroll = $('#header-links');
	// $triangle = $('#triangle-icon');

	// 	if($(window).scrollTop()>100 && $(window).scrollTop()<1500){
	// 		$scroll.toggleClass('lowerheader-normal lowerheader-static');
	// 		$triangle.css({'display':'initial'});
	// 	}
	// 	else{
	// 		$scroll.toggleClass('lowerheader-static lowerheader-normal');
	// 		$triangle.css({'display':'none'});
	// 	}
	// });

	$photoessay = $('.slide-img');  
	var $x = [];

	n = $('.slide-img>ul').length+1;
	for(var i=1; i<n;i++){ 
		$x[i] = $('.slide-img ul.multi-links:nth-child('+i+')');
		console.log($x[i]);
	}

	$phfirstchild = $photoessay.children().first().index();
	$phlastchild = $photoessay.children().last().index();
	$multil1 = $('.slide-img ul.multi-links:nth-child(1)');

	if($photoessay.children().length > 1){

		$('.next').hover(function(){
			$(this).css({'background-color':'#e7d4cb'});
		},function(){
			$(this).css({'background-color':'#f7f1ee'});
		});

		$('.prev').hover(function(){
			$(this).css({'background-color':'#f7f1ee'});
		});

		$multil2 = $('.slide-img ul.multi-links:nth-child(2)');
		$multil3 = $('.slide-img ul.multi-links:nth-child(3)');

		$multil1.addClass('enter active');
		$multil2.addClass('wait disabled');
		$multil3.addClass('leave disabled');

		// $('.photoessay-links>ul.multi-links:nth-child(0)').hide();

		$('.next').click(function(){
			if($multil1.hasClass('active') || $multil1.hasClass('enter')){

				$selectnext = $multil1.index();

				$multil1.removeClass();
				$multil2.removeClass();
				$multil3.removeClass();

				$('.prev').hover(function(){
					$(this).css({'background-color':'#e7d4cb'});
				},function(){
					$(this).css({'background-color':'#f7f1ee'});
				});

				// $multil1.toggleClass('enter active leave disabled');
				// $multil2.toggleClass('wait disabled enter active');
				// $multil3.toggleClass('leave wait');

				$multil1.addClass('multi-links leave disabled');
				$multil2.addClass('multi-links enter active');
				$multil3.addClass('multi-links wait disabled');
			}
			else if($multil2.hasClass('active') || $multil2.hasClass('enter')){

				$selectnext = $multil2.index()+1;

				if($phlastchild == $selectnext){

					$(".next").prop('disabled',true);
					$('.next').hover(function(){
						$(this).css({'background-color':'#f7f1ee'});
					}); 

					// $multil1.toggleClass('leave wait');
					// $multil1.toggleClass('wait disabled enter active');
					// $multil2.toggleClass('enter active wait disabled');
					// $multil3.toggleClass('leave disabled enter active');

					// $setTimeout(function() {$multil1.toggleClass('multi-links leave wait disabled'); }, 0.2);
					
					// $multil1.addClass('multi-links enter active');
					// $multil2.addClass('multi-links wait disabled');
					// $multil3.addClass('multi-links wait disabled');
				}

				$multil1.removeClass();
				$multil2.removeClass();
				$multil3.removeClass();	

				$multil1.addClass('multi-links wait disabled');
				$multil2.addClass('multi-links leave disabled');
				$multil3.addClass('multi-links enter active');
				// $multil1.addClass('leave wait');
				// $multil2.addClass('enter active leave disabled');
				// $multil3.addClass('wait disabled enter active');
			}

			// else if($multil3.hasClass('active') || $multil3.hasClass('enter')){

			// 	$selectnext = $multil3.index(); 

			// 	if($phlastchild == $selectnext){
			// 		// $multil1.toggleClass('wait disabled enter active');
			// 		// $multil2.toggleClass('leave wait');
			// 		// $multil3.toggleClass('leave disabled enter active');

			// 		$(".next").prop('disabled',true);
			// 		$('.next').hover(function(){
			// 			$(this).css({'background-color':'#f7f1ee'});
			// 		});
			// 	}
			// 	else{
					
			// 		$multil1.removeClass();
			// 		$multil2.removeClass();
			// 		$multil3.removeClass();	

			// 		$multil1.addClass('multi-links wait disabled');
			// 		$multil2.addClass('multi-links leave disabled');
			// 		$multil3.addClass('multi-links enter active');

			// 		// $multil1.toggleClass('wait disabled enter active');
			// 		// $multil2.toggleClass('leave wait');
			// 		// $multil3.toggleClass('leave disabled enter active');
			// 	}
				
			// }
		});	

		$('.prev').click(function(){
			if($multil3.hasClass('active') || $multil3.hasClass('enter')){

				$multil1.removeClass();
				$multil2.removeClass();
				$multil3.removeClass();	

				$multil1.addClass('multi-links leave disabled');
				$multil2.addClass('multi-links enter active');
				$multil3.addClass('multi-links wait disabled');
			}
			else if($multil2.hasClass('active') || $multil2.hasClass('enter')){

				$selectprev = $multil2.index()-1;

				if($selectprev == $phfirstchild){  
					$('.prev').hover(function(){
						$(this).css({'background-color':'#f7f1ee'});
					});
					$('.next').hover(function(){
						$(this).css({'background-color':'#e7d4cb'});
					},function(){
						$(this).css({'background-color':'#f7f1ee'});
					});
				}

				$multil1.removeClass();
				$multil2.removeClass();
				$multil3.removeClass();	

				$multil1.addClass('multi-links enter active');
				$multil2.addClass('multi-links wait active');
				$multil3.addClass('multi-links wait disabled');
			}
			// else if($multil1.hasClass('active') || $multil1.hasClass('enter')){

			// 	$selectprev = $multil1.index()-1;

			// 	console.log('$selectprev addasdasdasdas'+$selectprev);
			// 	console.log('$phfirstchild'+$phfirstchild);

			// 	if($selectprev == $phfirstchild){ 
			// 		$('.prev').hover(function(){
			// 			$('.prev').css({'background-color':'#f7f1ee'});
			// 		});
			// 	}
			// }
		});	
	}

	else{
		$('.next').hover(function(){
			$(this).css({'background-color':'#f7f1ee'});
		});
		$('.prev').hover(function(){
			$(this).css({'background-color':'#f7f1ee'});
		});
	}
});


// $.fn.removeClasses = function()
// {
// 	$multil1.removeClass();
// 	$multil2.removeClass();
// 	$multil3.removeClass();	
// }
// $photoessay.removeClasses();


// $(document).ready(function(){
// 	$photoessay = $('.multi-links');
// 	$phlastchild = $('.multi-links').children().last().attr('id');
// 	$multil1 = $('.multi-links:nth-child(1)');
// 	$multil2 = $('.multi-links:nth-child(2)');
// 	$multil3 = $('.multi-links:nth-child(3)');

// 	console.log($multil1);
// 	console.log($multil2);
// 	console.log($multil3);

// 	$multil1.addClass('enter active');
// 	$multil2.addClass('wait disabled');
// 	$multil3.addClass('wait disabled');

// 	$('.right-scroll-move11').click(function(){
// 		if($multil1.hasClass('active') || $multil1.hasClass('enter')){
			
// 			$multil1.removeClass();
// 			$multil2.removeClass();
// 			$multil3.removeClass();

// 			$multil1.addClass('leave disabled');
// 			$multil2.addClass('enter active');
// 			$multil3.addClass('wait disabled');

// 			$select = $multil1.attr('id');
// 		}
// 		else if($multil2.hasClass('active') || $multil2.hasClass('enter')){

// 			$multil1.removeClass();
// 			$multil2.removeClass();
// 			$multil3.removeClass();


// 			$multil1.addClass('wait disabled');
// 			$multil2.addClass('leave disabled');
// 			$multil3.addClass('enter active');

// 			$select = $multil2.attr('id');
// 		}
// 		else if($multil3.hasClass('active') || $multil3.hasClass('enter')){
// 			// $multil1.removeClass();
// 			// $multil2.removeClass();
// 			// $multil3.removeClass();

// 			// $multil1.addClass('enter active');
// 			// $multil2.addClass('wait disabled');
// 			// $multil3.addClass('leave disabled');

// 			// $select = $multil2.attr('id');

// 			if($phlastchild == $select){

// 			$multil1.removeClass();
// 			$multil2.removeClass();
// 			$multil3.removeClass();

// 			$multil1.addClass('enter active');
// 			$multil2.addClass('wait disabled');
// 			$multil3.addClass('wait disabled');

// 			console.log('sdad');
// 		}

// 		if($phlastchild == $select){

// 			$multil1.removeClass();
// 			$multil2.removeClass();
// 			$multil3.removeClass();

// 			$multil1.addClass('enter active');
// 			$multil2.addClass('wait disabled');
// 			$multil3.addClass('wait disabled');

// 			console.log('sdad');
// 		}

// 		// console.log($phlastchild);
// 		// console.log($multil1.attr('id'));
// 		// console.log($('#photoessay-links').children());
// 	});
// });


// $.fn.addremovefns = function(myid)
// {
// 	$myid.addClass('enter active');
// }
// $('#myId').addremovefns($multil1);





