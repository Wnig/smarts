<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Light',"Arial","Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Light',"Arial","Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  html {
    overflow-x: hidden;
  }
  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  /*侧边返回顶部*/
  .sider-nav {
    position: fixed;
    right: 2.45vw;
    top: 50vh;
    z-index: 1000;
  }
  .sider-nav ul {
    cursor: pointer;
  }
  .sider-nav ul li:hover {
    background-color: #fff;
    color: #161519;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .sider-nav ul:hover li p {
    width: 9.7vw;
    padding-left: 0.6vw;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  .sider-nav li {
    height: 2.5vw;
    padding: 0 0.6vw;
    color: #fff;
    line-height: 2.5vw;
    font-size: 0.63vw;
    background: #46B5D8;
  }
  .sider-nav p {
    float: left;
    overflow: hidden;
    width: 0vw;
    height: 2.5vw;
    line-height: 2.5vw;
  }
  .sider-nav i {
    float: left;
    text-align: center;
    line-height: 2.5vw;
    font-size: 1.67vw;
  }
  .sider-nav .nav-li-top {
    background: #161519;
  }
  /*箭头*/
  .down-btn {
    overflow: hidden;
    position: absolute;
    left: 6.35vw;
    bottom: 15vh;
    width: 2.4vw;
    height: 2.4vw;
    border: 1px solid #fff;
    border-radius: 100%;
    outline: none;
    color: #fff;
    background: 0 0;
    z-index: 100;
    cursor: pointer;
  }
  .down-btn i {
    display: block;
    font-size: 1.35vw;
    -webkit-animation: fall .6s infinite;
    animation: fall .6s infinite;
  }
  .discr-con {
    position: relative;
    text-align: center;
    z-index: 2;
  }
  .tit {
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: 2.34vw;
    font-family: 'PingFangSC-Regular';
  }
  .tit:after {
    content: '';
    position: absolute;
    left: -0.52vw;
    top: 0;
    width: 5.21vw;
    height: 1.09vw;
    background: url('./assets/ico_bor.png') center center no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }
  
  .discr {
    width: 100%;
    padding-top: 6.48vh;
    text-align: center;
    color: #fff;
    font-size: 1.56vw;
  }

  /*swiper*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .mob {
    display: none;
  }
  
  @media screen and (max-width: 750px) {
    .pc {
      display: none;
    }
    .mob {
      display: block;
    }
    .tit {
      padding: 0;
      font-size: 6.67vw;
      font-family: 'PingFangSC-Medium';
    }
    .tit:after {
      left: -2vw;
      width: 18vw;
      height: 5vw;
    }
    .discr {
      width: 100%;
      font-size: 3.56vw;
    }
    .down-btn {
      left: 8.35vw;
      bottom: 15vh;
      width: 9.4vw;
      height: 9.4vw;
      text-align: center;
    }
    .down-btn i {
      font-size: 4.35vw;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
      bottom: 3vh;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
      width: 9px;
      height: 9px;
      margin: 0 2.8vw;
      background: #000;
      opacity: 0.2;
    }
    .selection-5 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
      background: #fff;
      opacity: 0.2;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
      opacity: 1;
      background: #5EB4D9;
    }
    .selection-5 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
      opacity: 1;
      background: #5EB4D9;
    }
    .selection-2 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
      background: #fff;
      opacity: 0.2;
    }
    .selection-2 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
      opacity: 1;
      background: #5EB4D9;
    }
  }
  @media screen and (min-width: 751px) {
    .selection {
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
  }

  /*向下效果*/
  @-webkit-keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(45px);
      -moz-transform: translateY(45px);
      -ms-transform: translateY(45px);
      -o-transform: translateY(45px);
    }
  }
  @keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(45px);
      -moz-transform: translateY(45px);
      -ms-transform: translateY(45px);
      -o-transform: translateY(45px);
    }
  }
</style>
