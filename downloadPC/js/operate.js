$(function(){

// if($('#poimg_lct01')[0].getBoundingClientRect().top>700){
// 	$('#poimg_lct01').addClass('addScale');
// };
// if($('#poimg_lct02')[0].getBoundingClientRect().top>700){
// 	$('#poimg_lct02').addClass('translateXY');
// };

$(window).scroll(function(event) {
	/* Act on the event */
var animate1=$('#poimg_lct01')[0];	
var bounding=animate1.getBoundingClientRect();
var top1=bounding.top;
var animate2=$('#poimg_lct02')[0];
var bounding2=animate2.getBoundingClientRect();
var top2=bounding2.top;
if(top1<700){
	$('#poimg_lct01').addClass('addScale');
};
if(top2<1000){
	$('#poimg_lct02').addClass('translateXY');
};

});
});