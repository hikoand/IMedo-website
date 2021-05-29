# IMedo-website
IMedo-website

## 🔎주요로직
1. counter animation
지정해둔 숫자까지 카운팅되는 애니메이션을 animatie()메서드를 이용해 구현한다.

```javascript
$(function () {
  // 1. each(): 복수의 .count를 각각 받아온다.
  $('.flex_box .count').each(function () {
    // console.log($(this));

    // 2. prop(), Counter라는 속성을 생성한 뒤 0으로 초기화 한다.
    $(this)
      .prop('Counter', 0)
      // 3. animate(), 각각의 text를 받아와 Counter에 넣어 애니메이트한다.
      .animate(
        {
          Counter: $(this).text(),
        },
        // 4. 부드러운 애니메이션을 만들기 위해 속성을 지정한다.
        {
          duration: 4000,
          easing: 'swing',
          // 5. step(), 애니메이션 과정을 받아온다.
          step: function (now) {
            // 6. 소숫점을 올려서 반환된 정수를 표시한다.
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
```

2. 순수 JS silder
```javascript
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

// 실행, 함수호출
setLayout();

// 복제부를 배치하고 초기값을 설정한다.
function setLayout() {
  // 복제부 영역을 더한 총 길이를 설정
  list.style.width = `${100 * newIndex}%`;
  // 복제부 추가
  //  Node.cloneNode() 메서드는 이 메서드를 호출한 Node의 복제된 Node를 반환한다
  //  text node까지 복제
  let fristclone = slide[0].cloneNode(true);
  let lastclone = slide[slide.length - 1].cloneNode(true);

  // list 마지막에 복제한 1을 붙이고
  // list 처음에 복제한 4을 붙인다.
  list.appendChild(fristclone);
  list.prepend(lastclone);

  // 복제부를 포함한 모든 슬라이드를 배열에 담고 너비값을 준다.
  const newSlide = document.querySelectorAll('.slide');

  //100%를 슬라이드 수 만큼 나눈 값
  for (value of newSlide) {
    value.style.width = `${newWidth}%`;
  }

  //복제되어 index 0 이 "4"가 된 상태라 1을 보여주기 위해
  // 슬라이드 하나만큼 이동함
  currentIndex = 1;
  list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
}

// 이벤트 리스너 등록
// next btn
nextBtn.addEventListener('click', () => {
  // 트렌지션 등록
  list.style.transition = `${transitionTime}ms`;

  //클릭할때마다 인덱스가 증가
  currentIndex++;
  //   console.log(currentIndex);

  // slide 갯수보다 많이 클릭했을 때 체크
  if (currentIndex == slide.length + 1) {
    // 복제본으로 간다.
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    //복제본1로 간다(애니메이션 노출) -> index 1로 리셋 -> 200ms경과
    // 트랜지션 숨김 -> 1로 이동 (reset() 실행문)

    currentIndex = 1;
    // 복제본으로 가고 다시 처음으로 가는 초기화 함수.
    reset();
  } else {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;
  }
});

// prev btn
prevBtn.addEventListener('click', () => {
  // 트랜지션 등록
  list.style.transition = `${transitionTime}ms`;
  // 인덱스 감소
  currentIndex--;
  // 인덱스가 0이하일 떄 (복제한 4에 있을 때)
  if (currentIndex <= 0) {
    list.style.transform = `translateX(-${newWidth * currentIndex}%)`;

    //복제본4로 간다(애니메이션 노출) -> index4 로 리셋 -> 200ms경과
    // 트랜지션 숨김 -> 4로 이동 (reset() 실행문)

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
