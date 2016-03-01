sliderInt=1;
sliderNext=2;
count = 0;
val=1;
descountera=0;
descounter = 0;
flagg = false;
$(document).ready(function(){
	$("#slider>img#1").fadeIn(200);
	startSlider();

});
count=$("#slider>img").size();

function startSlider(){
	
	count=$("#slider>img").size();

	if(descounter==10){
		descounter = 0;
	}
	if(flagg){
		descounter = descountera;
		flagg = false;
	}
			$("#description span").text(""+desc[descounter++]);	
	
	loop = setInterval(function(){

	if(descounter==10){
		descounter = 0;
	}
		if(sliderNext>count)
		{
			sliderNext=1;
			sliderInt=1;
		}
		$("#description span").text(""+desc[descounter]);
		$("#slider>img").fadeOut(200);
		$("#slider>img#" + sliderNext).fadeIn(200);

		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
		descounter++;


	}, 2000);
}

function prev(){

		newSlide = sliderInt - 1;
		showSlide(newSlide);
			
}

function next(){
	
	newSlide = sliderInt + 1;
	showSlide(newSlide);

	
	
}

function stopLoop(){

	window.clearInterval(loop);
}

var desc = ['Image-1','Image-2','Image-3', 'Image-4','Image-5','Image-6', 'Image-7','Image-8','Image-9','Image-10'];

function showSlide(id){
	flagg = true;
	stopLoop();
	if(id > count)
		{
			id = 1;
		}
		else if (id<1) 
		{
			id = count;
		}

		$("#slider>img").fadeOut(200);
		$("#slider>img#"+id).fadeIn(200);

		sliderInt=id;
		sliderNext=id+1; 
		descountera = id-1;
		$("#description span").text(""+desc[descountera]);
		


}


$("#slider").hover(
	function(){
		
		stopLoop();
	},
	function(){
		descounter--;
		startSlider();
	}
);
