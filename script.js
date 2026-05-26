document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('menu-toggle');
  var nav=document.querySelector('.nav');
  if(toggle){toggle.addEventListener('click',function(){
    if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'}
  })}

  var form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=form.elements['name'].value || 'Pengguna';
    alert('Terima kasih, '+name+'! Kami akan menghubungi Anda secepatnya.');
    form.reset();
  })}
});
