//Create a select and append to nav
var $select = $("<select></select>");
$("#top").append($select);


//Cycle over nav links
$("#top a").each(function() {
	var $anchor = $(this);
	// create an option
	var $option = $("<option></option>");
	
	//Deal with selected options depending on current page
	if($anchor.parent().hasClass("selected")) {
	$option.prop("selected", true);
	}
	//option's value is the href
	$option.val($anchor.attr("href"));
	//option's text is the text of link
	$option.text($anchor.text());
	//append option to select
	$select.append($option);
}); //each of .each

	//Create button
	var $button = $("<button>Go</button>");
	$("#top").append($button);
	//Bind click to button
	$button.click(function(){
		//Go to select's location
		window.location = $select.val();

	});


