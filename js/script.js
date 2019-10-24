$( "document" ).ready(function() {
$("button").click(function(){
let text = $("input").val();
alert(text);
let words = text.split(" ");
let beg1 = words[0].charAt(0);
let beg2 = words[1].charAt(1);

let end1 = words[0].slice(1, words[0].lenght);
let end2 = words[1].slice(1, words[1].lenght);
$("#result").append(beg2 = end1 =''+ beg1 + end2);
});
});
$()