<template>
   <section>
      <div class="home_top">
            <div class="logo_cont">
                <a class="logo_img" href="/index.html">
                    <img src="src/images/logo.png" alt="LOGO">
                </a>
                <div class="logo_title">
                    <h1>王者荣耀</h1>
                    <p>王者相见，打成一片</p>
                </div>
            </div>
            <div class="download">
                <a href="/m/m201606/play.shtml"></a>
            </div>
        </div>
   </section>
</template>

<script>
    
</script>

<style lang="less">
  .home_top {
            margin: 0 auto;
            left: 0;
            top: 0;
            height: 45px;
            width: 100%;
            background-size: 100% 45px;
            font-size: 0;
            z-index: 10;
            position: fixed;
            background: url('/src/images/hd.jpg') no-repeat 50% 0;

         .logo_cont {
                position: absolute;
                width: 150px;
                height: 30px;
                top: 8px;
                left: 17px;
                padding-left: 40px;
                   .logo_img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 30px;
                        height: 30px;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                    }

              .logo_title {
                  
                    h1 {
                        font-size: 12px;
                        line-height: 17px;
                        color: #ffffff;
                        margin:0;
                    }      

                   p{
                        font-size: 11px;
                        color: #7e859e;
                        margin:0;
                   } 
              }
                        
        }   
    .download {
            position: absolute;
            width: 87px;
            height: 30px;
            top: 8px;
            right: 16px;
               a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: url('/src/images/down.png') no-repeat center 0;
                    background-size: 87px 30px;
             }
        }
}
</style>