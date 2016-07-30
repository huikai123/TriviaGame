$(document).ready(function(){
	var t = 2 * 60;
	var interval;
	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	//set a timer
	function timer() {
	    interval = setInterval(function() {
	    	t--;
	    	if(t === 0) {
	    		clearInterval(interval);
	    		$(".wrap").hide();
    			$(".last").css("display","block");
	    		var inputs = $('input[data-correct]:checked');
	    		correctAnswers = inputs.length;
	    		inCorrectAnswers = 20 - correctAnswers;
	    		
	    		console.log(correctAnswers, inCorrectAnswers);
	    	}
	    	$('#seconds-left').text(t);
	    }, 1000);
	}

	

	// click "start" to begin the game
    $(".start").click(function(){
        $(".wrap").css("display","block");  
	
    	$(".start").hide();
    	timer();
	});	

    // click "done" to submit the answers and stop the timer
    $(".submit").click(function(){
    	clearInterval(interval);
    	$(".wrap").hide();
    	$(".last").css("display","block");

    	var checked = $('input:checked')
    	
    	$.each(checked, function(index, input) {
    		console.log(index, input);

    		if($(input).data('correct')) {
    			correctAnswers++;
    			console.log('correct answer!')
    		} else {
    			inCorrectAnswers++;
    		}
    	})

    	console.log(correctAnswers, inCorrectAnswers);
    });	

    // click "replay" to restart the game without reloading.
    function reset(){
		t = 2*60;
		clearInterval(interval);
		$(".wrap").css("display","none");  
	
    	$(".start").show();

    	$('input:checked').attr('checked', false);
	}

    $(".replay").click(function(){
    	reset();

    });

    //create array for answer banks
    var answers = [];


    //loop through 

});