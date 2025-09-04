document.addEventListener('DOMContentLoaded', function(){
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  menuToggle.addEventListener('click', function(){
    nav.classList.toggle('show');
  });

  // Плавный скролл для внутренних ссылок
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });

  // Простая валидация формы (демо)
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMessage');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.elements['name'].value.trim();
    var phone = form.elements['phone'].value.trim();
    if(!name || !phone){
      msg.textContent = 'Пожалуйста, заполните имя и телефон.';
      msg.style.color = 'crimson';
      return;
    }
    // Симуляция отправки
    msg.style.color = 'green';
    msg.textContent = 'Спасибо! Ваша заявка отправлена. Мы свяжемся в ближайшее время.';
    form.reset();
  });
});
