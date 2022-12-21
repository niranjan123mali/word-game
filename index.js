var display_text=document.getElementById("display-text");
var word_hint=document.getElementById("word-hint");
var refresh_btn=document.getElementById("refresh-btn");
var check_btn=document.getElementById("check-btn");
var user_input=document.getElementById("user-input");
var time_text =document.getElementById("timer");
var correct_word;
var timer;

function timer_func(maxTime){
    clearInterval(timer);
timer=setInterval(function(){
   if(maxTime>0){
    maxTime--;
   return time_text.innerText=maxTime+" s";
   }
   clearInterval(timer);
   alert("Time Off "+correct_word+" is the correct word");
   game();
},1000)
}
function game()
{
    timer_func(30);
var word_obj=words[Math.floor(Math.random()*words.length)];
var word_array =word_obj.word.split("");
var i,j;
for(i=word_array.length-1;i>0;i--)
{
    j=Math.floor(Math.random()*(i+1));
    [word_array[i],word_array[j]]=[word_array[j],word_array[i]];
}
display_text.innerText=word_array.join("");
word_hint.innerText=word_obj.hint;
correct_word=word_obj.word;
user_input.value="";
user_input.setAttribute("maxlength",word_array.length)
console.log(word_array);
}
game();
 function check_word(){
      var user_word=user_input.value.toLocaleLowerCase();
        if(user_word !=""){
            if(user_word==correct_word)  
            {
                alert("congrates "+user_word+" is the correct word");
                game();
            }
        else{
            alert("Oops "+user_word+" is not the correct word");
            game();
        }
        }
        else{
            alert("input field is empty");
        }
    }
     refresh_btn.onclick=function(){
        game();
    }
    refresh_btn.onclick = function(){
        check_word();
    }
    