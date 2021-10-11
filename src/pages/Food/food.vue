<template>
  <div>
    <section>
      <slot name="head">
        <div class="header">
          <i class="iconfont icon-biaoqiankuozhan_chazhao-108"></i>
          <span>{{address}}</span>
          <span>登录|注册</span>  
        </div>
      </slot>
      <nav class="nav">

      </nav>
      <div class="list">

      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name:'food',
        data() {
          return {
            address:'南昌市东华理工大学',
          }
        },
    }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  section
    .header
        header()
        display flex
        justify-content space-evenly
        color white
        line-height 45px
        font-size 20px
        i 
          color white
          font-size 22px

</style>