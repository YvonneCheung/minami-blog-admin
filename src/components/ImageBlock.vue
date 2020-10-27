<template>
  <div class="image-block fadeInDown animated" :style="backgroundImage"></div>
</template>

<script>
import setBgImg from '@/utils/backgroundImg'

export default {
  components: {},
  props: {},
  data() {
    return {
      backgroundImage: setBgImg()
    }
  }
}
</script>
<style lang="sass" scoped>
.image-block
  @include wh(200px,150px)
</style>
