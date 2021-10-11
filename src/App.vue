<template>
    <div>
        <router-view><div class="header"></div></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
    // import Header from './components/header.vue'
    // import Content from './components/content.vue'
    import Footer from './components/footer.vue'
import Header from './components/header.vue'
    export default {
        name:'shop',
        components:{Footer},
    }

                Header</script>
<style lang="stylus" scoped>
</style>
