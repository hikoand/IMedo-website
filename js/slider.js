// DOM 변수
const contanier = document.querySelector('.slide__contanier');
const list = document.querySelector('.slide__list');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn__next');
const prevBtn = document.querySelector('.btn__prev');

// slide 구현 변수
const transitionTime = 200;
let currentIndex = 0;
let newIndex = slide.length + 2;
let newWidth = 100 / newIndex;

// 함수호출
setLayout();

function setLayout() {
  list.style.width = `${100 * newIndex}%`;
  let fristclone = slide[0].cloneNode(true);
  let lastclone = slide[slide.length - 1].cloneNode(true);

  list.appendChild(fristclone);
  list.prepend(lastclone);

  const newSlide = document.querySelectorAll('.slide');

  for (value of newSlide) {
    value.style.width = `${newWidth}%`;
  }

  currentIndex = 1;
  list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
}

// 이벤트 리스너 등록
nextBtn.addEventListener('click', () => {
  list.style.transition = `${transitionTime}ms`;
  currentIndex++;

  if (currentIndex == slide.length + 1) {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    currentIndex = 1;

    reset();
  } else {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
  }
});

// prev btn
prevBtn.addEventListener('click', () => {
  list.style.transition = `${transitionTime}ms`;
  currentIndex--;
  if (currentIndex <= 0) {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    currentIndex = 4;
    reset();
  } else {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
  }
});
function reset() {
  setTimeout(() => {
    list.style.transition = `none`;
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
  }, transitionTime);
}
