$("h1").css("color","blue"); //minify JS or CSS by using -- www.minifier.org
$("body").addClass("big-title");

$("button").html("Lord Loves Kate"); 

$(document).keypress(function(event) {
    $("h1").text(event.key);
}); 



// Change <h1> color to purple on hover
$("h1").on("mouseover", function(){
    $(this).css("color", "purple");
}).on("mouseout", function(){
    $(this).css("color", ""); // Reset to original color when the mouse leaves
});

// Change <button> color to blue on hover
$("button").on("mouseover", function(){
    $(this).css("color", "blue");
}).on("mouseout", function(){
    $(this).css("color", ""); // Reset to original color when the mouse leaves
});


