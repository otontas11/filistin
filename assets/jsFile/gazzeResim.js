let gazze = [ 1,2,3,4,5,6,7,8,9,10,11,13,14 ];



gazze.forEach((element) => {
  $("#gazzeResimleri").append(` 
  

  <div class=" col-md-6 mb-3 mb-md-0"> 
<div class="img-gallery-item">
    <a href="./assets/images/gazze/image${element}.jpg" title="Gazze Resimleri">
        <div class="gallery-content">
            <div class="tag"><span>Adım Adım Kudüs</span></div>
            <h3>Gazze Resimleri</h3>
            <div class="img-open">
                <i data-feather="plus-circle"></i>
            </div>
        </div>
        <img src="./assets/images/gazze/image${element}.jpg" alt="">
    </a>
</div> 
</div>
  
  
  `);
});



