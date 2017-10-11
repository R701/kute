<template lang="html">
  <k-container>
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
      <br />
          <k-breadcrumb separator='>'>
            <k-breadcrumb-item>
              GV
            </k-breadcrumb-item>
            <k-breadcrumb-item>
              GV
            </k-breadcrumb-item>
          </k-breadcrumb>
    <br />
        <k-breadcrumb>
        </k-breadcrumb>
  </k-container>

</template>

<script>

export default {
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>

</style>
