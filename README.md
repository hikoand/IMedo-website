# IMedo-website
IMedo-website

## ๐์ฃผ์๋ก์ง
1. counter animation
์ง์ ํด๋ ์ซ์๊น์ง ์นด์ดํ๋๋ ์ ๋๋ฉ์ด์์ animatie()๋ฉ์๋๋ฅผ ์ด์ฉํด ๊ตฌํํ๋ค.

```javascript
$(function () {
  // 1. each(): ๋ณต์์ .count๋ฅผ ๊ฐ๊ฐ ๋ฐ์์จ๋ค.
  $('.flex_box .count').each(function () {
    // console.log($(this));

    // 2. prop(), Counter๋ผ๋ ์์ฑ์ ์์ฑํ ๋ค 0์ผ๋ก ์ด๊ธฐํ ํ๋ค.
    $(this)
      .prop('Counter', 0)
      // 3. animate(), ๊ฐ๊ฐ์ text๋ฅผ ๋ฐ์์ Counter์ ๋ฃ์ด ์ ๋๋ฉ์ดํธํ๋ค.
      .animate(
        {
          Counter: $(this).text(),
        },
        // 4. ๋ถ๋๋ฌ์ด ์ ๋๋ฉ์ด์์ ๋ง๋ค๊ธฐ ์ํด ์์ฑ์ ์ง์ ํ๋ค.
        {
          duration: 4000,
          easing: 'swing',
          // 5. step(), ์ ๋๋ฉ์ด์ ๊ณผ์ ์ ๋ฐ์์จ๋ค.
          step: function (now) {
            // 6. ์์ซ์ ์ ์ฌ๋ ค์ ๋ฐํ๋ ์ ์๋ฅผ ํ์ํ๋ค.
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
```

2. ์์ JS silder
```javascript
// DOM ๋ณ์
const contanier = document.querySelector('.slide__contanier');
const list = document.querySelector('.slide__list');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.btn__next');
const prevBtn = document.querySelector('.btn__prev');

// slide ๊ตฌํ ๋ณ์
const transitionTime = 200;
let currentIndex = 0;
let newIndex = slide.length + 2;
let newWidth = 100 / newIndex;

// ์คํ, ํจ์ํธ์ถ
setLayout();

// ๋ณต์ ๋ถ๋ฅผ ๋ฐฐ์นํ๊ณ  ์ด๊ธฐ๊ฐ์ ์ค์ ํ๋ค.
function setLayout() {
  // ๋ณต์ ๋ถ ์์ญ์ ๋ํ ์ด ๊ธธ์ด๋ฅผ ์ค์ 
  list.style.width = `${100 * newIndex}%`;
  // ๋ณต์ ๋ถ ์ถ๊ฐ
  //  Node.cloneNode() ๋ฉ์๋๋ ์ด ๋ฉ์๋๋ฅผ ํธ์ถํ Node์ ๋ณต์ ๋ Node๋ฅผ ๋ฐํํ๋ค
  //  text node๊น์ง ๋ณต์ 
  let fristclone = slide[0].cloneNode(true);
  let lastclone = slide[slide.length - 1].cloneNode(true);

  // list ๋ง์ง๋ง์ ๋ณต์ ํ 1์ ๋ถ์ด๊ณ 
  // list ์ฒ์์ ๋ณต์ ํ 4์ ๋ถ์ธ๋ค.
  list.appendChild(fristclone);
  list.prepend(lastclone);

  // ๋ณต์ ๋ถ๋ฅผ ํฌํจํ ๋ชจ๋  ์ฌ๋ผ์ด๋๋ฅผ ๋ฐฐ์ด์ ๋ด๊ณ  ๋๋น๊ฐ์ ์ค๋ค.
  const newSlide = document.querySelectorAll('.slide');

  //100%๋ฅผ ์ฌ๋ผ์ด๋ ์ ๋งํผ ๋๋ ๊ฐ
  for (value of newSlide) {
    value.style.width = `${newWidth}%`;
  }

  //๋ณต์ ๋์ด index 0 ์ด "4"๊ฐ ๋ ์ํ๋ผ 1์ ๋ณด์ฌ์ฃผ๊ธฐ ์ํด
  // ์ฌ๋ผ์ด๋ ํ๋๋งํผ ์ด๋ํจ
  currentIndex = 1;
  list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
}

// ์ด๋ฒคํธ ๋ฆฌ์ค๋ ๋ฑ๋ก
// next btn
nextBtn.addEventListener('click', () => {
  // ํธ๋ ์ง์ ๋ฑ๋ก
  list.style.transition = `${transitionTime}ms`;

  //ํด๋ฆญํ ๋๋ง๋ค ์ธ๋ฑ์ค๊ฐ ์ฆ๊ฐ
  currentIndex++;
  //   console.log(currentIndex);

  // slide ๊ฐฏ์๋ณด๋ค ๋ง์ด ํด๋ฆญํ์ ๋ ์ฒดํฌ
  if (currentIndex == slide.length + 1) {
    // ๋ณต์ ๋ณธ์ผ๋ก ๊ฐ๋ค.
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    //๋ณต์ ๋ณธ1๋ก ๊ฐ๋ค(์ ๋๋ฉ์ด์ ๋ธ์ถ) -> index 1๋ก ๋ฆฌ์ -> 200ms๊ฒฝ๊ณผ
    // ํธ๋์ง์ ์จ๊น -> 1๋ก ์ด๋ (reset() ์คํ๋ฌธ)

    currentIndex = 1;
    // ๋ณต์ ๋ณธ์ผ๋ก ๊ฐ๊ณ  ๋ค์ ์ฒ์์ผ๋ก ๊ฐ๋ ์ด๊ธฐํ ํจ์.
    reset();
  } else {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
  }
});

// prev btn
prevBtn.addEventListener('click', () => {
  // ํธ๋์ง์ ๋ฑ๋ก
  list.style.transition = `${transitionTime}ms`;
  // ์ธ๋ฑ์ค ๊ฐ์
  currentIndex--;
  // ์ธ๋ฑ์ค๊ฐ 0์ดํ์ผ ๋ (๋ณต์ ํ 4์ ์์ ๋)
  if (currentIndex <= 0) {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    //๋ณต์ ๋ณธ4๋ก ๊ฐ๋ค(์ ๋๋ฉ์ด์ ๋ธ์ถ) -> index4 ๋ก ๋ฆฌ์ -> 200ms๊ฒฝ๊ณผ
    // ํธ๋์ง์ ์จ๊น -> 4๋ก ์ด๋ (reset() ์คํ๋ฌธ)

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

```
