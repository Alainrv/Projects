//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');


//Image is added to Overlay
$overlay.append($image);
//Caption is added to Overlay
$overlay.append($caption);
//Overlay is added to Doc
$('body').append($overlay);





// Recognize clik on an image
$("#imageGallery a").click(function(event){
	event.preventDefault();

	//Image has the right src
	var imageSource = $(this).attr('href');
	$image.attr('src', imageSource);

	//Image has the right caption
	//The image Alt text is inserted in imageCaption Variable
	var imageCaption = $(this).children("img").attr("alt");
	//Caption takes the imageCaption Content
	$caption.text(imageCaption);


	//overlay is shown
	$overlay.show();

});

//On click of an overlay 
$overlay.click(function(){
	//The overlay hides
	$overlay.hide();
})








