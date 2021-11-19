const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
//포커스 될때 placeholder 추가 
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})
//포커스 없어질때 내용 삭제
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        // badgeEl.style.display = 'none';
       // gsap.to(요소, 지속시간, 옵션)
       gsap.to(badgeEl, .6 , {
          opacity: 0,
          display: 'none'
       });
    }else {
        //배지 보이기 
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6 , {
            opacity: 100,
            display: 'block'
         });
    }
}, 300));