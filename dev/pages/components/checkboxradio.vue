<template>
  <div class="c-checkboxradio">
    <k-container flex>
      <k-container>
        <k-checkbox label="手表"
                    name="goods"
                    :size="size"
                    :checked.sync="watch"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="台灯"
                    name="goods"
                    :size="size"
                    state="warn"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="杯子"
                    name="goods"
                    :size="size"
                    state="success"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="锅"
                    name="goods"
                    :size="size"
                    state="error"
                    disabled
                    v-model="goods"></k-checkbox>
        <br><br>
        <output>{{goods}}</output>
      </k-container>
      <k-container>
        <k-radio label="手表"
                 name="oneOfGoods"
                 :size="size"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="台灯"
                 name="oneOfGoods"
                 :size="size"
                 state="warn"
                 :checked.sync="lamp"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="杯子"
                 name="oneOfGoods"
                 :size="size"
                 state="success"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="锅"
                 name="oneOfGoods"
                 :size="size"
                 disabled
                 state="error"
                 v-model="oneOfGoods"></k-radio>
        <br><br>
        <output>{{oneOfGoods}}</output>
      </k-container>
    </k-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        goods: ['手表', '杯子'],
        watch: true,
        oneOfGoods: '台灯',
        lamp: true,
        size: 'default'
      }
    }
  }
</script>


