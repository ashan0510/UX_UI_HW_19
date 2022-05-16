$(".skillEmpathy").hover (function (){
    console.log("You hovered");
    $("#empathyText").css("display", "block");
},
function(){
    $("#empathyText").css("display", "none");
});

$(".skillDesign").hover (function (){
    console.log("You hovered");
    $("#designText").css("display", "block");
},
function(){
    $("#designText").css("display", "none");
});