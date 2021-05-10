function showElementAnimation() {
    let element = document.getElementsByClassName('box_move');

    if(!element) return;

    let showTiming = window.innerHeight >  768 ? 200 : 40;
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;
    console.log(windowH);

    for(let i=0; i < element.length; i++) {
        // elementに関連づけられているCSSの境界ボックス(DOMRect)が返される。
        let elmClientRect = element[i].getBoundingClientRect();
        // windowの右上からスクロールした量 + elementのy座標
        let elemY = scrollY + elmClientRect.top;

        if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if(scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}

showElementAnimation();
window.addEventListener('scroll', showElementAnimation);