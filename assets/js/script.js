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

 function autoPlayYouTubeModal() {
    var triggerOpen = $("body").find('[data-tagVideo]');
    triggerOpen.click(function() {
      var theModal = $(this).data("bs-target"),
        videoSRC = $(this).attr("data-tagVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.btn-close').click(function() {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }