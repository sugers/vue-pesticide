<template>
    <section>
        <div class="home_bottom">
            <ul class="clearfix">
                <li class="currentL">
                    <a href="index.html">首页</a>
                </li>            
                <li>
                    <a href="video.html">视频</a>
                </li>
                <li>
                    <a href="strategy.html">攻略/a&gt;
                </a></li><a href="strategy.html">
                </a><li><a href="strategy.html">
                    </a><a href="match.html">赛事</a>
                </li>
         </ul>
    </div>
    </section>
</template>


<script type="text/javascript">
        var deviceWidth = document.documentElement.clientWidth;
        if(deviceWidth > 750) deviceWidth = 750;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
</script>


<style lang="css">
    .home_bottom {
    background: url('/src/images/navnew11.png') no-repeat 50% 0;
    left: 0;
    top: auto;
    height: 0.87rem;
    width: 100%;
    bottom: 0;
    background-size: 100% auto;
    font-size: 0;
    z-index: 10;
    position: fixed;
}

.home_bottom a {
    width: 100%;
    text-indent: -9999px;
    overflow: hidden;
    height: 100%;
    display: inline-block;
}

.home_bottom ul {
    height: 100%;
}

.home_bottom ul li {
    width: 25%;
    height: 0.87rem;
    float: left;
}

.currentL {
    background: url('/src/images/navnew2.png') no-repeat 50% 0;
    background-size: 400% auto;
}

.home_bottom ul li:nth-child(1).currentL {
    background-position: 0 50%
}

.home_bottom ul li:nth-child(2).currentL {
    background-position: 33.5% 49%
}

.home_bottom ul li:nth-child(3).currentL {
    background-position: 67% 49%
}

.home_bottom ul li:nth-child(4).currentL {
    background-position: 100% 49%
}
@-webkit-keyframes maskAni {
    0% {
        -webkit-transform: rotate(-90deg);
    }
    30% {
        -webkit-transform: rotate(-90deg);
    }
    70% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
    }
}
</style>