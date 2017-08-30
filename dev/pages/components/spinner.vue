<template>
  <div class="c-spinner">
    <named-block name="default">
      <k-spinner></k-spinner>
    </named-block>
    <br>
    <named-block name="colored">
      <k-spinner colored></k-spinner>
    </named-block>
    <br>
    <named-block name="colored, d: 50px">
      <k-spinner colored
                 d="50px"></k-spinner>
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

