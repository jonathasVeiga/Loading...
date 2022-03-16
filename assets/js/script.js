 //O MENU
 const $menu = document.querySelectorAll('#menu');
 const $a = document.querySelectorAll("#link");
 
 const $div = document.getElementById('navbarNavDropdown');
 const $button = document.getElementById('btn');

 $menu.forEach($coin => $coin.addEventListener('click',handleAddCLass));
 $a.forEach($coin => $coin.addEventListener('click',handleAddCLass));

 $button.addEventListener('click',handleRemoveClass)
 
 function handleAddCLass(e){
         $div.style.display = 'none'
 }
 function handleRemoveClass(e){
     $div.style.display = 'block'
 }


 //O MODAL

 let video = document.getElementsByClassName("videoY")[0];

 function play(){
   video.onPlayerReadyonReady();
 }