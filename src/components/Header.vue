<template>
	<header class="header">
    <div class="pc">
      <div class="cont">
        <a class="logo" @click="jump" ><img src="../assets/1.svg" alt=""></a>
        <nav>
          <ul>
              <li class="backstage">
                <a>后台登录</a>
              </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="mob">
        <div class="cont">
        <a class="logo" @click="jump" ><img src="../assets/1.svg" alt=""></a>
        <div class="list-con clearfix" @click="isShow">
          <img src="../assets/menu.svg" alt="">
        </div>
        <div class="nav-con" v-if="show" @click="isShow">
            <nav>
              <ul>
                  <li class="btn_sel">
                    <a @click="jump">首页</a>
                  </li>
                  <li>
                      <a>后台登录</a>
                  </li>
              </ul>
              <div class="hot">
                  <p>咨询热线</p>
                  <h2>131-5910-2568</h2>
               </div>
            </nav>
        </div>
        </div>
    </div>
  </header> 
</template>

<script>
import '../font/style.css'
let storage = window.sessionStorage;

export default {
  name: 'app-header',
  data () {
    return {
      navData: [],
      num: '',
      show: false
    }
  },
  created: function() {
  },
  methods: {
    selMenus(index) {
      storage['selNumsmart'] = index;
      this.show = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.show = ! this.show;
    },
    jump() {
      storage['selNumsmart'] = 0;
      this.show = false;
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style scoped>
  /*头部LOGO导航*/
  .header {
    width: 100%;
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    margin: 0 auto;
  }
  .logo {
    flex: 1;
  }
  .logo img {
    width: 13.07vw;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav li a {
    display: block;
    padding: 3vw 0;
    color: #fff;
    font-size: 1.3vw;
    font-family: 'PingFangSC-Regular';
    cursor: pointer;
  }
  nav .backstage {
    padding-right: 3vw;
  }
  


  @media screen and (max-width: 750px) {
    .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 92%;
      margin: 0 auto;
    }
    .logo img {
      width: 45.07vw;
      height: 14vh;
    }
    .list-con {
      padding-right: 2vw;
    }
    .list-con img {
      display: block;
      width: 8vw;
    }

    .nav-con {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.65);
      z-index: 9999999999;
    }
    nav {
      position: relative;
      display: block;
      text-align: left;
      width: 61.67vw;
      height: 100vh;
      background: #FFFFFF;
      box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.44);
    }
    nav ul {
      padding-top: 16.64vh;
      padding-left: 7.47vw;
    }
    nav li {
      width: 100%;
      margin: 0 0 5.83vh 0;
    }
    nav li a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 10vw;
      color: #000000;
      font-size: 5.33vw;
      font-family: 'PingFangSC-Light';
    }
    nav .btn_sel a {
      color: #5BB8DE;
      font-size: 6.67vw;
      font-family: 'PingFangSC-Semibold';
    }
    nav p {
        margin-bottom: 1.05vh;
        color: #797979;
        font-size: 3.2vw;
    }
    nav h2 {
      color: #000000;
      line-height: 6.67vw;
      font-size: 6.5vw;
      font-family: 'PingFangSC-Semibold';
    }
    nav .hot {
      position: absolute;
      left: 7.47vw;
      bottom: 9.45vh;
    }  
  }
  @media screen and (min-width: 751px) {
    nav li:hover a {
      color: #46B5D8;
    }
  }
</style>