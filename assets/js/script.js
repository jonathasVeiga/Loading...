 //O MENU
 const $menu = document.querySelectorAll('#menu');
 const $a = document.querySelectorAll("#link");
 
 const $div = document.getElementById('navbarNavDropdown');
 const $button = document.getElementById('btn');

 $menu.forEach($coin => $coin.addEventListener('click',handleAddCLass));
 $a.forEach($coin => $coin.addEventListener('click',handleAddCLass));

 $button.addEventListener('click',handleRemoveClass)
 
 function handleAddCLass(){
    $div.style.display = 'none'
 }

 function handleRemoveClass(){
     $div.style.display === 'block' ? $div.style.display ='none' : $div.style.display ='block'
     console.log()
 }

 //O MODAL

 