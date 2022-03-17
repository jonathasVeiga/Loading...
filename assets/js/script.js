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
 }

 //O MODAL

 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: '7cfgTZGdxHg',
        });
      }

      function play(){
        player.playVideo();
      }

      function stopVideo() {
        player.stopVideo();
      }
