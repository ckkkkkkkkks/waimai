<template>
  <div>
    <section>
      <slot></slot>
      <nav class="nav">

      </nav>
      <div class="list">

      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name:'order',
    }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'
    section
      .header
        header()
</style>