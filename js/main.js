// Properties

var p = {
  animation: 'slide',
  back: document.querySelector('#slide #back'),
  formatLoop: false,
  imgSlide: document.querySelectorAll('#slide ul li'),
  item: 0,
  next: document.querySelector('#slide #next'),
  pagination: document.querySelectorAll('#pagination li'),
  slideSpeed: 3000,
  wrapper: document.querySelector('#slide ul')
};

// Methods

var m = {
  back: function() { // Back arrows
    if (p.item == 0) {
      p.item = p.imgSlide.length - 1;
    } else {
      p.item--;
    }

    m.slideMovement(p.item);
  },

  init: function() { // Init function
    for (var i = 0; i < p.pagination.length; i++) {
      p.pagination[i].addEventListener('click', m.paginationSlide);
      p.imgSlide[i].style.width = (100 / p.pagination.length) + '%';
    }

    p.back.addEventListener('click', m.back);
    p.next.addEventListener('click', m.next);

    m.timeInterval();

    // Dinamic width
    p.wrapper.style.width = (p.pagination.length * 100) + '%';
  },

  next: function() { // Next arrows
    if (p.item == p.imgSlide.length - 1) {
      p.item = 0;
    } else {
      p.item++;
    }

    m.slideMovement(p.item);
  },

  paginationSlide: function(item) { // Control pagination with images
    p.item = item.target.parentNode.getAttribute('item') - 1;

    m.slideMovement(p.item);
  },

  slideMovement: function(item) { // Movement for pagination and arrows
    p.formatLoop = true;

    p.wrapper.style.left = item * -100 + '%';

    for (var i = 0; i < p.pagination.length; i++) {
      p.pagination[i].style.opacity = 0.5;
    }

    p.pagination[item].style.opacity = 1;

    // Animations
    if (p.animation === 'slide') {
      p.wrapper.style.transition = '0.7s left ease-in-out';
    }

    if (p.animation === 'fade') {
      p.imgSlide[item].style.opacity = 0;
      p.imgSlide[item].style.transition = '0.7s opacity ease-in-out';

      setTimeOut(function() {
        p.imgSlide[item].style.opacity = 1;
      }, 100);
    }
  },

  timeInterval: function() { // Automatic movement when loading
    setInterval(function() {
      if (p.formatLoop) {
        p.formatLoop = false;
      } else {
        m.next();
      }
    }, p.slideSpeed);
  }
};

m.init();
