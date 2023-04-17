<template>
	<footer class="clearfix">
    <div class="cont">
      <div class="pc">
        <h3>司马图（厦门）文化传媒有限公司</h3>
        <p class="addr"><span>Add. 福建省厦门市思明区观音山商务</span><span>Tel. 0592-5917068</span><span>Cel. 131-5910-2568 (王先生)</span></p>
      </div>
      <div class="mob">
        <h3>司马图（厦门）文化传媒有限公司</h3>
        <p class="addr"><span>Add. 福建省厦门市思明区观音山商务营运中心18号楼层</span></p>
        <p><span style="margin-right: 4vw">Tel. 0592-5917068</span><span>Cel. 131-5910-2568 (王先生)</span></p>
      </div>
    </div>
  </footer>
</template>

<script>
import '../font/style.css'

export default {
  name: 'app-footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  /*底部*/
  footer {
    height: 17.59vh;
    text-align: center;
    background-color: #232526;
  }
  footer .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  footer h3 {
    margin-bottom: 1.2vh;
    color: #A9A9A9;
    font-size: 1.56vw;
  }
  footer p {
    color: #9E9898;
    line-height: 1.61vw; 
    font-size: 1.04vw;
  }
  footer .addr span {
    display: inline-block;
    margin-right: 2vw;
  } 
  .footer_mob {
      display: none;
  }
  @media screen and (max-width: 750px) {
    footer {
      height: 20.84vh;
    }
    footer h3 {
      text-align: center;
      font-size: 4.56vw;
    }
    footer p {
      line-height: 5.61vw;
      font-size: 3.04vw;
    }
  }
</style>