function randomCharactor(c, p) {

    //跳ねさせる要素をすべて取得
    var randomChar = document.getElementsByClassName(c);

    //for で総当たり
    for (var i = 0; i < randomChar.length; i++) {

        //クロージャー
        (function(i) {

            //i 番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;

            //何番目の文字を跳ねさせるかをランダムで決める
            var Num = p;

            //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;
            if(p == randomCharLength) {
                p = 0;
            } else {
                p = p + 1;
            }
            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c, p)
            }, false)
        })(i)
    }
}

//クラス名が pyonpyon のクラスを跳ねさせる
randomCharactor("pyonpyon", 0);