<template>
  <div class="panel">
    <div class="panel-head"
         v-if="$slots.header || header"
         @click="onHeaderClick">
      <slot name="header"
            v-if="$slots.header"></slot>
      <template v-else>
        <i :class="`icon ${iconClassPrefix}${icon}`"
           v-if="icon"></i>
        <span class="title">{{header}}</span>
      </template>
    </div>
    <div :class="['panel__bd', {expanded}]">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div class="panel__ft"
         v-if="$slots.footer">
      <slot name="footer"
            v-if="$slots.footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    mixins: [require('~mixins/with-icon')]
  }
</script>


<style lang="stylus" scoped>
.panel
  box-shadow $shadow-material
  border-radius 4px
  background-color $black-lighter
</style>

