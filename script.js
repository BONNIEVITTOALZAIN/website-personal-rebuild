function resetAnimation() {
    var text = document.querySelector('.text-berjalan');
    text.style.animation = 'none';
    text.offsetHeight; 
    text.style.animation = 'typing 5s steps(40, end), blink-caret .75s step-end infinite';
  }

  document.addEventListener('DOMContentLoaded', function() {
    var text = document.querySelector('.text-berjalan');
    text.addEventListener('animationend', function() {
      resetAnimation();
    });
  });

