<template>
  <div class="c-toast">
    <k-button @click="onDefaultClick">default</k-button>
    <k-button>closable</k-button>
    <k-button>loading</k-button>
    <k-button>success</k-button>
    <k-button>warn</k-button>
    <k-button>error</k-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onDefaultClick () {
        this.$showToast({
          message: '解锁成功',
          closable: false
        })
      }
    }
  }
</script>
