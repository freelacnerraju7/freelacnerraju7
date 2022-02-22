$(document).ready (function() {
			
	$(".dark").click (function() {
		$(".dark").text("Click to lite_mode");	
		
	$(".lite_mode").toggleClass("dark_mode");
		
	$(".services").toggleClass("dark_services");
	$(".my-signup").toggleClass("dark_my-signup");
	$(".contact").toggleClass("dark_contact");
	$(".main_box").toggleClass("dark_main_box");
	$(".my_self").toggleClass("dark_my_self");
	$(".for_fixed").toggleClass("dark_for_fixed");
	
	
	
			
	});
			
});// end of jQuery


function change() {
		
	if(document.getElementsByClassName("slideritem")[0].classList.contains("show")) {
	
	document.getElementsByClassName("slideritem")[1].classList.add("show");
	document.getElementsByClassName("slideritem")[0].classList.remove("show");
	
}else if(document.getElementsByClassName("slideritem")[1].classList.contains("show")) {
	
	document.getElementsByClassName("slideritem")[2].classList.add("show");
	document.getElementsByClassName("slideritem")[1].classList.remove("show");
	
	
}else if (document.getElementsByClassName("slideritem")[2].classList.contains("show")){
	
	document.getElementsByClassName("slideritem")[3].classList.add("show");
	document.getElementsByClassName("slideritem")[2].classList.remove("show");
	
	
}else if (document.getElementsByClassName("slideritem")[3].classList.contains("show")){
	
	document.getElementsByClassName("slideritem")[0].classList.add("show");
	document.getElementsByClassName("slideritem")[3].classList.remove("show");
	
}

}

setInterval(change,2000);



document.querySelector("#my_custom").addEventListener(click);

function showme() {
	
	document.querySelector(".alert-success").setAttribute("style","opacity:1;transition:all 1s;")
	
	
}










