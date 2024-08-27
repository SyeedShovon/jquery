// alert('alhamdillah');
// document.querySelector("h1").innerHTML = "All okay";

// $("h1").text("Second jquery");

// $(".my-div h1").text("jQuery class done");

// $("#p1").text("Id jQuery done");


// $("#p1, h1").text("all in comma");

// $("#p1").html("<b>id BOLD</b>").append(" and checked").prepend("Prepended ");

// var myPara = $("<p></p>").text("After before testing");
// $("#p1").before(myPara);

// var query_var = document.querySelector("a").getAttribute("href");
// console.log(query_var);

// $("a").attr("href");
// $("a").removeAttr("href");

// document.querySelector("a").setAttribute("href","https://www.jaina.com");

// $("a").attr("href","https://www.youtube.com");

// $("h3").css("color","red");
// $("h3").css("font-size","2rem");
// $("h3").css("font-style","italic");

// $("h3").css({
//     "color":"red",
//     "font-style":"italic",
//     "font-size":"3rem"
// });

// document.querySelector("h3").classList.add("style1");
// document.querySelector("h3").classList.remove("style1");

// $("h3").addClass("style1");
// $("h3").addClass("style1 style2");


// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector("h3").innerHTML= "You have clicked the button";
// })
// $("button").click(function(){
//     $("h3").text("You have clicked the button jQuery");
//     $("h3").toggleClass("style1");
// })

// var btn_count = document.querySelectorAll(".mybutton").length;
// for(i=0;i<btn_count;i++){
//     document.querySelectorAll(".mybutton")[i].addEventListener("click",function () {
//         var text = this.innerHTML;
//         document.querySelector("h3").innerHTML = text + " is clicked";
//         // console.log(text);
//      })
// }
// $(".mybutton").click(function(){
//     var btn_text = this.innerHTML;
//     $("h3").text(btn_text + " is clicked");
// })
$(".mybutton").on("mouseover",function(){
    var btn_text = this.innerHTML;
    $("h3").text("By button " + btn_text + " is clicked");
})
