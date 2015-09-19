$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos = $(".contacttitle").position().top; 
    $triggered_times = 0;

    if(y_scroll_pos > scroll_pos && $triggered_times == 0) {
        
        slideinform();
        $triggered_times = 1;
    }
});


function slideinform(){
	var form = $("#cform");
	form.animate({left: "10%"}, 500, function(){

	});
}