function showElementAnimation() {

    var element = document.getElementsByClassName('box_move');

    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整

    // windowの左上を(0, 0)とし、下向きを正と取り、今いる場所のy座標を取ったもの。
    var scrollY = window.pageYOffset;

    // ブラウザの縦の長さ（px)
    var windowH = window.innerHeight;

    
    for(let i = 0; i < element.length; i++) { 
        // Elementとして指定したクラスのオブジェクトをとってくる。（これでtop, bottom, right, leftが使える)
        let elemClientRect = element[i].getBoundingClientRect(); 
        //  elementClientRect.topは注意：ターゲットの左上のy座標と取った時, 今いるWindowの右上との差分を表す。（上が正）
        // elemY : ターゲットのy座標を表す。
        let elemY = scrollY + elemClientRect.top; 
        // console.log(element[0].getBoundingClientRect().top);

        // 今いる場所のY座標 + Windowの縦の長さ - タイミング > ターゲットのy座標
        // → ターゲットのy座標がWindowの下からタイミングpx分の位置にきた場合
        if(scrollY + windowH - showTiming > elemY) {
            // ターゲットにcssのクラスを追加する。
            element[i].classList.add('is-show');
        } else if(scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

  