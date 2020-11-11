<template>
  <div class="leftside-layout">
    <div class="l-info">
      <img src="../../assets/images/avatar.png"
           width="50"
           class="l-info-avatar" />
      <div class="l-info-name">
        <span class="name">南雫</span>
        <span class="name-sub">Minami Shizuku</span>
      </div>
    </div>
    <ul class="l-menus">
      <li v-for="item in menus"
          :key="item.menuId"
          @click="$router.push(item.path)"
          class="l-menus-item"
          :class="{ isActive: $route.path == item.path }">
        {{ item.menuName }}
        <i :class="['iconfont', item.icon]"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import menu from '@/mock/menu.json'

export default {
  data () {
    return {
      menus: menu.menu
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.leftside-layout
  box-sizing: border-box
  border-right: 2px solid $textBg
  padding: 50px 12px 34px 20px
  background: $background
  box-shadow: 0 0 10px 10px  $textBg
  @include wh(260px, 100%)
  @include position($position:fixed)
  .l-info
    margin-bottom: 36px
    @include flex($just:flex-start)
    .l-info-avatar
      margin-left: 16px
    .l-info-name
      margin-left: 16px
      @include flex($dire: column, $align: flex-start)
      .name
        font-weight: 600
      .name-sub
        font-size: 13px
        font-weight: 300

  .l-menus
    .l-menus-item
      color: #9593A0
      padding: 16px
      margin: 5px 0
      cursor: pointer
      border-radius: 16px
      @include flex($just:space-between)
      &:hover,&.isActive
        transition: all 0.8s ease
        background-color: $textStrong
        color: #fff
</style>
