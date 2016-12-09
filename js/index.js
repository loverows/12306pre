(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/500;
ss=250*(1-s);

//$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');
document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$("#gd_img").swipeUp(function(){
	this.scrollTop += 180;
})
$("#gd_img").swipeDown(function(){
	this.scrollTop -= 180;
})



$(document).swipeUp(function(){
	if (isAnimating) return;
	//last.row = now.row;
	//last.col = now.col;
	//if (last.row != 5) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}	
})

$(document).swipeDown(function(){
	if (isAnimating) return;
	//last.row = now.row;
	//last.col = now.col;
	//if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}	
})

$(document).swipeLeft(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==0) { now.row = last.row; now.col = 1; pageMove(towards.left);}
	if (last.row>0 && last.row<8 && last.col==1) { now.row = last.row; now.col = 2; pageMove(towards.left);}
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 3; pageMove(towards.left);}	
	if (last.row>0 && last.row<8 && last.col==3) { now.row = last.row; now.col = 4; pageMove(towards.left);}	
	if (last.row>0 && last.row<8 && last.col==4) { now.row = last.row; now.col = 5; pageMove(towards.left); $(".img_1_mb").addClass("pt-page-rotatePushRight1 pt-page-delay700"); $(".img_6_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}	
	if (last.row>0 && last.row<8 && last.col==5) { now.row = last.row; now.col = 6; pageMove(towards.left); $(".tp_pic2_mb").addClass("pt-page-rotatePushBottom1  pt-page-delay1800"); $(".tp_pic3_mb").addClass("pt-page-rotatePushRight1 pt-page-delay2500");}	
	if (last.row>0 && last.row<8 && last.col==6) { now.row = last.row; now.col = 7; pageMove(towards.left); $(".gq_pic3_mb").addClass("pt-page-rotatePushRight1 pt-page-delay2500");$(".gq_pic4_mb").addClass("pt-page-rotatePushRight1 pt-page-delay3500");$(".gq_pic5_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}	
	if (last.row>0 && last.row<8 && last.col==7) { now.row = last.row; now.col = 8; pageMove(towards.left);}
	if (last.row>0 && last.row<9 && last.col==8) { now.row = last.row; now.col = 1; pageMove(towards.left);}

})

$(document).swipeRight(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==8) { now.row = last.row; now.col = 7; pageMove(towards.right);$(".gq_pic3_mb").addClass("pt-page-rotatePushRight1 pt-page-delay2500");$(".gq_pic4_mb").addClass("pt-page-rotatePushRight1 pt-page-delay3500");$(".gq_pic5_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}	
	if (last.row>0 && last.row<8 && last.col==7) { now.row = last.row; now.col = 6; pageMove(towards.right);}	
	if (last.row>0 && last.row<8 && last.col==6) { now.row = last.row; now.col = 5; pageMove(towards.right); $(".img_1_mb").addClass("pt-page-rotatePushRight1 pt-page-delay700"); $(".img_6_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}	
	if (last.row>0 && last.row<8 && last.col==5) { now.row = last.row; now.col = 4; pageMove(towards.right);}
	if (last.row>0 && last.row<8 && last.col==4) { now.row = last.row; now.col = 3; pageMove(towards.right);}	
	if (last.row>0 && last.row<8 && last.col==3) { now.row = last.row; now.col = 2; pageMove(towards.right);}	
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 1; pageMove(towards.right);}		
})

$("#gp_date").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 3; pageMove(towards.left);}
});
$("#gp_back").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==3) { now.row = last.row; now.col = 2; pageMove(towards.right);}
});

$("#sy_jl").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 4; pageMove(towards.left);}
});
$("#sy_back").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==4) { now.row = last.row; now.col = 2; pageMove(towards.right);}
});

$("#lc_gohome").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 5; pageMove(towards.left); $(".img_1_mb").addClass("pt-page-rotatePushRight1 pt-page-delay700"); $(".img_6_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}
});
$("#lc_back").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==5) { now.row = last.row; now.col = 2; pageMove(towards.right);}
});

$("#tp_newg").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 6; pageMove(towards.left); $(".tp_pic2_mb").addClass("pt-page-rotatePushBottom1  pt-page-delay1800"); $(".tp_pic3_mb").addClass("pt-page-rotatePushRight1 pt-page-delay2500");}
});
$("#tp_back").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==6) { now.row = last.row; now.col = 2; pageMove(towards.right);}
});

$("#gq_newg").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==2) { now.row = last.row; now.col = 7; pageMove(towards.left);$(".gq_pic3_mb").addClass("pt-page-rotatePushRight1 pt-page-delay2500");$(".gq_pic4_mb").addClass("pt-page-rotatePushRight1 pt-page-delay3500");$(".gq_pic5_mb").addClass("pt-page-rotatePushRight1 pt-page-delay4500");}
});
$("#gq_back").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==7) { now.row = last.row; now.col = 2; pageMove(towards.right);}
});





$("#list2").tap(function(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	if (last.row>0 && last.row<8 && last.col==5) { now.row = last.row; now.col = 2; pageMove(towards.right);}
})

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).find("img").addClass("hide");
		$(lastPage).find("div").addClass("hide");
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");

		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		$(nowPage).find("div").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();
