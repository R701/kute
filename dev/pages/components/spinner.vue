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
    <named-block name="grad">
      <k-spinner grad></k-spinner>
    </named-block>
    <br>
    <named-block name="grad, d: 50px">
      <k-spinner grad
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

