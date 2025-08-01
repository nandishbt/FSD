$("h1").css("color", "blue");
$("h1").css("display", "inline-block");

//check css props
console.log($("h1").css("color")); //rgb(0, 0, 255)

//add classes
$("h1").addClass("big margin-50");

//remove classes
$("h1").removeClass("big margin-50");

//check class
console.log($("h1").hasClass("big margin-50")); //false





// text ,iinerhtml
$("h1").text("HI GUYS");
$("h1").html("<i> hello </i>");





//get and set attributes
$("h1").attr("title", "Admin");
$("h1").attr("title"); //Admin






//event listener
$("button").click(() => {
  //selects all buttons
  $("h1").css("color", "yellow");
});

$(document).keypress((e) => {
  $("h2").text(e.key);
});

$("h1").on("mouseover", () => {
  $("h1").css("color", "red");
});






//create html elements

$("h1").before("<p>this is before paragraph</p>");
$("h1").after("<p>this is after paragraph</p>");
$("h1").prepend("<span>this is prepend span</span>"); //before its content
$("h1").append("<span>this is  append span</span>"); // after its content
