
require('../css/index.css');
$(function() {
	var y,m;

  $( "#datepicker" ).datepicker();

	$('#four').on('change', function() {
		if($(this).val() == '3') {
			boxFadeIN('吸烟有害健康，请尽早戒烟')
			$('#page4').find('a').eq(1).attr('href','#page7');
			$('#page7').find('a').eq(0).attr('href','#page4');
		} else {
			$('#page4').find('a').eq(1).attr('href','#page5');
			$('#page7').find('a').eq(0).attr('href','#page6');
		}
	})
	
	$('#five').on('change', function() {
		if($(this).val() < '3' && $(this).val() > '0') {
			$('.tip').css('display', 'none');
			boxFadeIN('烟草有害健康，请坚持远离烟草');
			$('#page5').find('a').eq(1).attr('href','#page7');
			$('#page7').find('a').eq(0).attr('href','#page5');

		} else {
			$('#page5').find('a').eq(1).attr('href','#page6');
			$('#page7').find('a').eq(0).attr('href','#page6');
			$('.tip').css('display', 'block');
			$('.year').on('blur', function () {
					y = $(this).val();
				$('.mounth').on('blur', function () {
					m = $(this).val();
				});
			});
		}
	})
	
	$('#six').on('change', function() {
		if($(this).val() > '1' && $('#five').val() == '3') {
			boxFadeIN("您已戒烟"+ y+ "年"+m+"月,请坚持远离烟草")
		} else if($(this).val() == '1' && $('#five').val() == '3') {
			boxFadeIN("烟草已经影响您的健康，请即使就医接受适当的治疗;您已戒烟"+ y +"年"+m +"月请坚持远离烟草")
			
		}
	})
	
	$('.num').on('blur', function(){
		var all = 15;
		if(!isNaN(parseInt($(this).val()))) {
			var sum = parseInt($(this).val()) + parseInt($('#seven').val()) +parseInt($('#eight').val());
			boxFadeIN('您的直系亲属中，目前已有'+ sum +'人发生急性心梗')
			
			var data = sum/15 >=1? '100%' : Math.floor(100*sum/15) +'%'
			$('.progress').css('display','block');
			$('.progress-bar').attr('aria-valuenow', sum/15);
			$('.progress-bar').html(data);
			$('.progress-bar').css('backgroundColor','#E6421A');
			$('.progress-bar').css('width',data);	
		}
		
	})
	
	
	$('.weight').on('blur', function(){
		var a = parseInt($(this).val());
		var b = parseInt($('.tall').val());
		if(!isNaN(a) && !isNaN(b)) {
			var BMI= a/(b/100);
			switch (true){
				case (BMI < 18.5):
					boxFadeIN('低体重，很多疾病的发生风险增加');
					break;
				case (BMI >= 18.5 && BMI <= 23.9):
					boxFadeIN('体重正常，为了您的长期健康，请保持正常的体重');
					break;
				case (BMI >= 24.0 && BMI <= 27.9):
					boxFadeIN('超重，很多慢性病的发生风险增加');
					break;
				case (BMI >= 28.0):
					boxFadeIN('肥胖，很多慢性病的发生风险增加');
					break;
				default:
					break;
			}
		}
		
	})
	
	var boxFadeIN = function(str) {
			$('.box').html(str).fadeIn('300', function() {
				setTimeout(function(){
					$('.box').fadeOut('40000');
				},1000)
			});	
	}

})