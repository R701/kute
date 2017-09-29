<template lang="html">
  <div class="c-panel">
    <k-container>
      <br>  <br>
      <k-progress :percent="10" size="xsmall">
      </k-progress>
      <br>  <br>
      <k-progress :percent="20" size="small">
      </k-progress>
      <br>  <br>
      <k-progress :percent="50"/>
      <br>  <br>
      <k-progress  :percent="percent" size="large">
      </k-progress>
      <br>  <br>
      <k-progress :percent="90" :state="state">
      </k-progress>
      <br>  <br>
      <k-progress state="success"  :percent="100" type="circle" size="xsmall">
      </k-progress>
      <k-progress state="success"  :percent="100" type="circle" size="small">
      </k-progress>
      <k-progress :percent="percent"  type="circle">
      </k-progress>

      <k-progress state="success"  :percent="100" type="circle">
      </k-progress>
      <k-progress :percent="30" :state="state" type="circle">
      </k-progress>
      <k-progress   :percent="30" type="circle" size="large" state='error'>
      </k-progress>
    </k-container>
  </div>
</template>
<script>

export default {
  data () {
    return {
      percent: 0,
      state: 'failed'
    }
  },
  mounted () {
    this.id = window.setInterval(() => this.percent++, 300)
  },
  destoryed () {
    window.clearTimeOut(this.id)
  }
}
</script>
