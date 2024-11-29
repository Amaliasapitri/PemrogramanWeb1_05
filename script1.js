$(document).ready(function() {
    //1. Dasar Selektor
    $('#header').css('textAlign','center');//Mengubah align text pada header
   $('li').css('margin','5px');memberi margin pada semua <li>

   //2. selector atribut
   $('img[alt="Alumni photo 1"]').css('border','2px solid');//Mengubah border pada gambar dengan alt='Alumni Photo 1'

   //3. selector hiraki
   $('#alumniList li').css('font-size','18px');//Mengubah font size pada semua <li> di dalam #alumniList

   //4. selector Filter
   $('li:even').css('color','blue');//Mengubah warna teks pada elemen <li> genap
   $('.featured').addClass('highlight');//Menambahkan class highlight pada elemen dengan class featured

   //event Heandling untuk galeri foto
   $('.gallery img').on('click',function(){
       var src = $(this).attr('src');
       $('#modalimage').attr('src',src);
       $('#myModal').fadeIn();
   });
   $('.modal.close').on('click',function(){
       $('#myModal').fadeOut();
   });
   $(window).on('click',function(event){
       if($(event.target).is('#myModal')){
           $('#myModal').fadeOut();
       }
   });
});