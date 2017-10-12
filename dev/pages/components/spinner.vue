<template>
  <div class="c-spinner">
    <named-block name="default">
      <k-spinner></k-spinner>
    </named-block>
    <br>
    <named-block name="#E5B547">
      <k-spinner color="#E5B547"></k-spinner>
    </named-block>
    <br>
    <named-block name="rainbow">
      <k-spinner rainbow></k-spinner>
    </named-block>
    <br>
    <named-block name="rainbow, d: 50px">
      <k-spinner rainbow
                 d="50px"></k-spinner>
    </named-block>
    <br>
    <named-block name="rainbow, d: 50px, duration: 6">
      <k-spinner rainbow
                 :duration="6"
                 d="50px"></k-spinner>
    </named-block>
    <br>
    <named-block name="rainbow, d: 50px, stoke-width: 8">
      <k-spinner rainbow
                 d="50px"
                 :stroke-width="8"></k-spinner>
    </named-block>
  </div>
</template>

<script>
  import NamedBlock from '@/components/NamedBlock'

  export default {
    components: {
      NamedBlock
    }
  }
</script>

