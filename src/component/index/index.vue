<template>
  <section>
      <v-swipe></v-swipe>
      <v-nav></v-nav>
      <v-cont></v-cont>
  </section>
</template>

<script>
   
    import Cswipe from './swipe.vue'
    import Cnav from './nav.vue'
    import Ccont from './cont.vue'
    export default {
        components:{
            'v-swipe':Cswipe,
            'v-nav' :Cnav,
            'v-cont':Ccont
        },
    }
</script>

<style lang="less">
   
.ico_strategy,
.ico_news,
.ico_video,
.ico_more,
.ico_play,
.ico_read_num,
.v_infor .ico_video_num {
    display: inline-block;
    overflow: hidden;
    background: url(../../images/index.png) no-repeat;
    background-size: 4rem 4rem;
}

.ico_strategy {
    width: 0.26rem;
    height: 0.28rem;
    background-position: 0 -1.08rem;
}

.ico_news {
    width: 0.26rem;
    height: 0.26rem;
    background-position: 0 -0rem;
}

.ico_video {
    width: 0.26rem;
    height: 0.24rem;
    background-position: 0 -0.55rem;
}

.ico_more {
    width: 0.83rem;
    height: 0.34rem;
    background-position: 0 -1.66rem;
}

.ico_play {
    width: 0.59rem;
    height: 0.57rem;
    background-position: -0.54rem 0;
}

.ico_read_num {
    width: 0.24rem;
    height: 0.22rem;
    margin-left: 0.05rem;
    vertical-align: middle;
    background-position: -0.71rem -0.63rem;
}

.v_infor .ico_video_num {
    width: 0.23rem;
    height: 0.16rem;
    margin: 0.06rem 0.05rem 0 0.1rem;
    background-position: -0.72rem -0.93rem;
}

@-webkit-keyframes move {
    from {
        -webkit-transform: translate3d(0, 0, 0)
    }
    25% {
        -webkit-transform: translate3d(0, 5px, 0)
    }
    50% {
        -webkit-transform: translate3d(0, 0, 0)
    }
    75% {
        -webkit-transform: translate3d(0, -5px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0)
    }
}

@keyframes move {
    from {
        transform: translate3d(0, 0, 0)
    }
    25% {
        transform: translate3d(0, 5px, 0)
    }
    50% {
        transform: translate3d(0, 0, 0)
    }
    75% {
        transform: translate3d(0, -5px, 0)
    }
    to {
        transform: translate3d(0, 0, 0)
    }
}


body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    margin: 0;
    padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
    word-wrap: break-word;
}

body,
button,
input,
select,
textarea {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, '\5FAE\8F6F\96C5\9ED1', sans-serif;
    font-size: 1rem;
    color: #000;
}

th {
    text-align: inherit;
}

ol,
ul {
    list-style: none;
}

fieldset,
img {
    border: 0;
    vertical-align: middle;
}

caption,
th {
    text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 500;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

ins,
a {
    color: #000;
    text-decoration: none;
}

a,
img {
    -webkit-touch-callout: none;
}

table {
    border-collapse: collapse;
}

i {
    font-style: normal;
}

* {
    padding: 0;
    margin: 0;
}

.clearfix {
    *zoom: 1
}

.clearfix:after {
    content: '\20';
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both
}

body {
    min-width: 320px;
    height: 100%;
    width: 100%;
    background: #F1F1F1;
}

img {
    width: 100%;
    display: block
}

.clearfloat {
    clear: both;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.content {
    padding-bottom: 1.2rem;
    padding-top: 45px;
    overflow: hidden;
    overflow-y: auto;
}


</style>