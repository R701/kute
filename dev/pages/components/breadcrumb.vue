<template lang="html">
  <k-container class="breadcrumb">
    <named-block position='right' name="default">
      <k-breadcrumb>
        <k-breadcrumb-item>
          Movie
        </k-breadcrumb-item>
        <k-breadcrumb-item>
          Cartoon
        </k-breadcrumb-item>
        <k-breadcrumb-item>
          GV
        </k-breadcrumb-item>
      </k-breadcrumb>
    </named-block>
    <named-block position='right' name="customized separator">
      <k-breadcrumb separator='>'>
        <k-breadcrumb-item icon='share'>
          GV
        </k-breadcrumb-item>
        <k-breadcrumb-item>
          GV
        </k-breadcrumb-item>
      </k-breadcrumb>
    </named-block>
    <named-block position='right' name="generated by vue router">
      <k-breadcrumb/>
    </named-block>
    <named-block position='right' name="with icon">
      <k-breadcrumb separator='>' type='tab'>
        <k-breadcrumb-item icon='share'>
          cartoion
        </k-breadcrumb-item>
        <k-breadcrumb-item icon='share'>
          cartoion
        </k-breadcrumb-item>
        <k-breadcrumb-item icon='share'>
          cartoion
        </k-breadcrumb-item>
        <k-breadcrumb-item icon='share'>
          cartoion
        </k-breadcrumb-item>
        <k-breadcrumb-item icon='share'>
          cartoion
        </k-breadcrumb-item>
        <k-breadcrumb-item>
          active
        </k-breadcrumb-item>
      </k-breadcrumb>
    </named-block>
    <named-block position='right' name="tab">
      <k-breadcrumb type='tab'>
      </k-breadcrumb>
    </named-block>
  </k-container>
</template>

<script>
  import NamedBlock from '@/components/NamedBlock'
export default {
    components: {
      NamedBlock
    }
  }
</script>

<style lang="stylus" scoped>
  .named-block.right
    >>>.named-block-name
      margin-left 35px
</style>
