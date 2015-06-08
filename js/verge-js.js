search = document.getElementById("search");
drop = document.getElementById("header-dropdown");

window.onscroll = function () {
            	scroll = document.getElementById("header-links");
            	triangle=document.getElementById("triangle-icon");
                if(window.pageYOffset>100 && window.pageYOffset< 1500){               	
                	scroll.className= "lowerheader-static";
                	triangle.style.display = "initial";
                }
                else{
                	scroll.className= "lowerheader-normal";
                	triangle.style.display = "none";
                }	
            }

function rightscrollnav(){
	// photoessay = document.getElementById('photoessay-links');
	// multil1 = document.getElementById('multi-link1');
	// multil2 = document.getElementById('multi-link2');
	// multil3 = document.getElementById('multi-link3');

	// if(multil1.className == "enter active"){
	// 	multil1.className = "leave disabled";
	// 	multil2.className = "enter active";
	// 	multil3.className = "wait disabled";
	// }
	// else if (multil2.className == "enter active"){		
	// 	multil2.className = "leave disabled";
	// 	multil3.className = "enter active";
	// 	multil1.className = "wait disabled";
	// }
	// else if (multil3.className == "enter active"){		
	// 	multil3.className = "leave disabled";
	// 	multil1.className = "enter active";
	// 	multil2.className = "wait disabled";
	// }

	
	// else if (photoessay.lastChild){
	// 	multil1.className = "enter active";
	// 	multil2.className = "wait disabled";
	// 	multil3.className = "wait disabled";
	// }
	// console.log(photoessay.children.lastElementChild);

	// while (lastChildElement && lastChildElement.nodeType !== 1) {
	//    lastChildElement = lastChildElement.previousSibling;
	// }

	// if (lastChildElement) {
	//     // Do something
	// }
}

function searchonclick(){	
	 if(search.style.display=="none" || search.style.display==""){
	 	search.style.display="initial";
	 	search.value="";
	 }
	 else{
	 	search.style.display="none";
	 	// drop.style.display="none";
	 	search.value="";
	 }

	 if(drop.style.display!="none"){
	 	drop.style.display = "none";
	 }

}

function droponclick(){
	drop = document.getElementById("header-dropdown");
	 if(drop.style.display=="none" || drop.style.display==""){
	 	drop.style.display="initial";
	 	drop.value="";
	 }
	 else{
	 	drop.style.display="none";
	 	// search.style.display="none";
	 	drop.value="";
	 }
	 if(search.style.display!="none"){
	 	search.style.display = "none";
	 }
}

function rightscroll(){
	scroll2 = document.getElementById("multi-photoessay-content2");
	scroll1 = document.getElementById("multi-photoessay-content1");

	// if(scroll2.className == "hide" || scroll2.className == ""){
	// 	scroll2.className = "show";
	// 	scroll2.style.display = "initial";
	// 	scroll1.className = "hide";
	// }
	// else if(scroll2.className == "show"){
	// 	scroll1.className = "show";
	// 	scroll1.style.display = "initial";
	// 	scroll2.className = "hide";
	// 	scroll2.style.display = "none";
	// }
	// else{
	// 	scroll1.className = "show";
	// 	scroll2.className = "hide";
	// }


}

function storyrightscroll1(){
	scrollsec1 = document.getElementById('multi-content-sec4');
	if(scrollsec1.style.display == "none" || scrollsec1.style.display == ""){
		scrollsec1.style.display = "initial";
	}	
	else{
		scrollsec1.style.display = "none";
	}

	// scrollsec1 = document.getElementById('multi-content-sec1');//.getElementsByClassName('multi-content1');
	// console[0].log(scrollsec1);
}

function storyrightscroll2(){
	scrollsec2 = document.getElementById('multi-content-sec5');
	if(scrollsec2.style.display == "none" || scrollsec2.style.display == ""){
		scrollsec2.style.display = "initial";
	}	
	else{
		scrollsec2.style.display = "none";
	}
}

function storyrightscroll3(){
	scrollsec3 = document.getElementById('multi-content-sec6');
	if(scrollsec3.style.display == "none" || scrollsec3.style.display == ""){
		scrollsec3.style.display = "initial";
	}	
	else{
		scrollsec3.style.display = "none";
	}
}