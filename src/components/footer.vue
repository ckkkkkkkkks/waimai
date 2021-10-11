<template>
  <div>
      <div class="footer">
        <span v-for="(item,index) in list" :key=index @click="In(index)" :class="{On:$route.path===item.path}">
            <i class="iconfont" :class="item.icon" @click="click(item.route)"> </i>
            {{item.name}}
        </span>
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                list:[
                    {name:'外卖',icon:'icon-meishi',route:'Food',path:'/food'},
                    {name:'搜索',icon:'icon-biaoqiankuozhan_chazhao-108',route:'Search',path:'/search'},
                    {name:'订单',icon:'icon-quanbudingdan',route:'Order',path:'/order'},
                    {name:'我的',icon:'icon-gerenzhongxin',route:'User',path:'/user'}
                ],
                num:0
                // list:['外卖','搜索','订单','我的'],
                // icon:['icon-dingdanyichenggong','icon-jurassic_user','icon-sousuo','icon-tableware']
            }
        },
        methods: {
            click(route){
                this.$router.replace({
                    name:route,
                })
            },
            In(index){
                this.num=index
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '../common/stylus/mixins.styl'
    div
        width 100%
        color #999
        position fixed 
        display flex
        justify-content space-around
        bottom 0
        left 0
        .footer 
            display flex
            flex-direction row
            height 50px
            top-border-1px(#cccccc)
            span
                display flex
                flex-direction column
                i
                    font-size 25px
                    margin-top 5px
            .On
                color $green
</style>
