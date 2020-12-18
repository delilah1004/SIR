$(document).ready(function(){

	

})

$(function(){
  // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#floatMenu").css('top'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		/* 애니메이션 없이 바로 따라감
		 $("#floatMenu").css('top', newPosition);
		 */

		//스크롤 - 부드러운 애니메이션
		$("#floatMenu").stop().animate({
			"top" : newPosition
		}, 500);

	}).scroll();
})

function openCloseToc() {
  if(document.getElementById('toc-content').style.display === 'block') {
    document.getElementById('toc-content').style.display = 'none';
    document.getElementById('toc-toggle').textContent = '더보기';
  } else {
    document.getElementById('toc-content').style.display = 'block';
    document.getElementById('toc-toggle').textContent = '접기';
  }
}
