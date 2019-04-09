(function () {

    var player = document.getElementById('player');
    var p1 = document.getElementById('p1');

    // 判断是移动端还是桌面端
    if ('ontouchstart' in document.documentElement) {
        player.addEventListener('touchstart', touchPlayer, false);  // 监听播放器的触摸事件
        p1.addEventListener('touchstart', touchPage1, false);       // 监听第一页的触摸事件
    } else {
        // 桌面端采用点击代替触摸
        p1.addEventListener('click', touchPage1, false);
        player.addEventListener('click', touchPlayer, false);
    }


    function touchPlayer() {
        var music = document.getElementById('music');
        var player_disc = document.getElementById('player_disc');
        
        if (music.paused) {
            music.play();
            player_disc.classList.remove('paused');
        } else {
            music.pause();
            player_disc.classList.add('paused');
        };
    }


    function touchPage1() {
        var p2 = document.getElementById('p2');
        var p3 = document.getElementById('p3');

        p1.classList.add('hide');
        p2.classList.remove('hide');
        p3.classList.remove('hide');

        setTimeout(function () {
            p2.classList.add('fadeout');
            p3.classList.add('fadein');
        }, 5500);
    }
}());
