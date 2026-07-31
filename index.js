var input = document.getElementById('diaryinput');
var button = document.getElementById('SAVE');
var past=document.getElementById('past')
var historydiv = document.getElementById('history');

button.onclick =function() {
   var oldtext =  localStorage.getItem('all diary')
   if (oldtext===null){oldtext=""}
oldtext=oldtext+ input.value + "<hr>"
   localStorage.setItem('all diary', oldtext);
   historydiv.innerHTML = '<p>PREVIOUSLY SAVED</p>';
   input.value=""
}   
past.onclick =function() {
   var diary= localStorage.getItem('all diary')
   if (diary===null){
    historydiv.innerHTML = '<p>NO PREVIOUSLY SAVED</p>';
   }else{
    historydiv.innerHTML = diary
}
}