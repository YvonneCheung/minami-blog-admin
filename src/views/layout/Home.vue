<template>
  <div class="wrapper">
    <leftside></leftside>
    <div class="container">
      <transition name="el-fade-in-linear" v-if="isRefresh">
        <div class="image-blocks animated fadeInUp">
          <image-block v-for="index of maxNum" :key="index"></image-block>
        </div>
      </transition>
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Leftside from './Leftside'
import ImageBlock from '@/components/ImageBlock'

export default {
  components: { Leftside, ImageBlock },
  data() {
    return {
      isRefresh: true,
      clientWidth: 0
    }
  },
  computed: {
    maxNum() {
      return parseInt(this.clientWidth / 200)
    }
  },
  watch: {
    '$route.path'(val) {
      this.isRefresh = false
      if (val !== '/dashboard') {
        this.$nextTick(() => {
          this.isRefresh = true
        })
      }
    }
  },
  mounted() {
    this.clientWidth = document.body.getElementsByClassName(
      'container'
    )[0].clientWidth
    window.onresize = () => {
      this.clientWidth = document.body.getElementsByClassName(
        'container'
      )[0].clientWidth
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.wrapper 
  overflow: hidden
  @include wh(100%, 100%)
  .container
    margin-left: 260px
    padding: 20px 40px
    height: 100%
    .image-blocks
      @include flex  
</style>
