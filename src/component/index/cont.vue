<template>
    <section>
       <div class="index_cont">
                    <div class="index_cont_title">
                        <span class="ico_news"></span>
                        <h3>热点资讯</h3>
                        <router-link to='/news/getnews' class="ico_more">more</router-link>
                    </div>
                    <ul class="news_list">
                        <li>
                            <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24988/m15626/201706/598754.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news1'});">
					        <span class="category">新闻</span>
					        <span class="split">|</span>
					        <span class="title">妲己情报站——新版本大爆料！社交优化抢先看</span>
					        <span class="time">06/21</span>
					    </a>
                        </li>
                        <li>
                            <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24991/m15626/201706/598476.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news2'});">
					        <span class="category">赛事</span>
					        <span class="split">|</span>
					        <span class="title">KPL每周话题：四强出炉，谁主沉浮？</span>
					        <span class="time">06/21</span>
					    </a>
                        </li>
                        <li>
                            <a href="http://pvp.qq.com/webplat/info/news_version3/15592/24418/24987/24989/m15626/201706/598019.shtml" onclick="pgvSendClick({hottag:'mobile.newsList.news3'});">
					        <span class="category">公告</span>
					        <span class="split">|</span>
					        <span class="title">6月20日全服不停机更新公告</span>
					        <span class="time">06/20</span>
					    </a>
                        </li>
                    </ul>
                </div>
    </section>
</template>

<script>
    export default{

    }
</script>

<style lang="css">
    .index_cont {
    margin-top: 0.25rem;
    padding: 0 0.34rem;
    border-bottom: 1px solid #d4d9de;
}

.index_cont_title {
    zoom: 1;
    padding-left: 0.36rem;
    position: relative;
    height: 0.39rem;
    line-height: 0.39rem;
    overflow: hidden;
    margin-bottom: 0.24rem;
}

.ico_strategy,
.ico_news,
.ico_video {
    position: absolute;
    top: 50%;
    left: 0rem;
}

.ico_news {
    margin-top: -0.14rem;
}

.ico_video {
    margin-top: -0.13rem;
}

.ico_strategy {
    margin-top: -0.14rem;
}

.index_cont_title h3 {
    font-size: 0.32rem;
    color: #212222;
}

.index_cont_title .ico_more {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 99999px;
    overflow: hidden;
}

.news_list li {
    position: relative;
    height: 0.38rem;
    line-height: 0.38rem;
    margin-bottom: 0.3rem;
    font-size: 0.28rem;
}

.news_list li:hover {
    background: #e3e6ea;
    border-radius: 6px;
}

.news_list li:hover a {
    color: #8a9bc7;
}

.news_list li a {
    display: inline-block;
    width: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.index_cont a {
    color: #333333;
}

.index_cont .category {
    color: #464f73;
}

.index_cont .split {
    display: none;
    height: 0.38rem;
    display: inline-block;
    margin: 0 0.02rem;
}

.index_cont .title {
    width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.index_cont .time {
    position: absolute;
    right: 0;
    color: #777777;
}



</style>