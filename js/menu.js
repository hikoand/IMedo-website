//아코디언 메뉴

$(function () {
  /* script 영역  jquery 아코디언 예*/

  //display를 쓰면 애니메이션X

  $('dd:not(:first)').css('display', 'none');
  $('dl dt').on('click', function () {
    // 1. 간단하지만 display를 쓰면 애니메이션X

    // if( $(this).next().css("display") == "none" ){
    //   $("dl dd").css("display","none");
    //   $(this).next().css("display","block");
    // }else{
    //   $(this).next().css("display","none");
    // }

    // 2. .slideUp() : 높이를 없애는 메서드

    // this의 바로 뒤 요소

    // dt(this)에 뒤에있는 dd
    if ($('+dd', this).css('display') == 'none') {
      // 선택하지 않은 dd 사라지게함
      $('dl dd').slideUp('slow');
      // 선택한 dd 나타나게0
      $('+dd', this).slideDown('slow');
    }
  });
});

// $(function () {
//   let countHeightObj = $('.countNum').offset();
//   let counterHeight = countHeightObj[Object.keys(countHeightObj)[0]];
//   let f = true;

//   $(window).scroll(function () {
//     let scTop = $(this).scrollTop();
//     // console.log(scTop);
//     // console.log(counterHeight);
//   });

//   scTop = $(this).scrollTop();
//   // console.log(scTop);

//   if (scTop > counterHeight) {
//     console.log('oka');
//     if (f == true) {
//       // 1. each(): 복수의 .count를 각각 받아온다.
//       $('.countNum').each(function () {
//         // 2. prop(), Counter라는 속성을 생성한 뒤 0으로 초기화 한다.
//         $(this)
//           .prop('Counter', 0)
//           // 3. animate(), 각각의 text를 받아와 Counter에 넣어 애니메이트한다.
//           .animate(
//             {
//               Counter: $(this).text(),
//             },
//             // 4. 부드러운 애니메이션을 만들기 위해 속성을 지정한다.
//             {
//               duration: 3000,
//               easing: 'swing',
//               // 5. step(), 애니메이션 과정을 받아온다.
//               step: function (now) {
//                 // 6. 소숫점을 올려서 반환된 정수를 표시한다.
//                 $(this).text(Math.ceil(now));
//                 f = false;
//               },
//             }
//           );
//       });
//     }
//   }
// });

$(function () {
  let a = 0;
  $(window).scroll(function () {
    console.log(`elem offsetTop : ${$('.countNum').offset().top}`);
    console.log(`window heihgt : ${window.innerHeight}`);

    let oTop = $('.countNum').offset().top - window.innerHeight;
    console.log(oTop);

    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.countNum').each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 3000,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
                a = 1;
              },
            }
          );
      });
    }
  });
});
