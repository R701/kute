<template>
  <div class="c-checkboxradio">
    <k-container flex>
      <k-container>
        <k-checkbox label="手表"
                    name="goods"
                    :checked.sync="watch"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="台灯"
                    name="goods"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="杯子"
                    name="goods"
                    v-model="goods"></k-checkbox>
        <br>
        <k-checkbox label="锅"
                    name="goods"
                    v-model="goods"></k-checkbox>
        <br><br>
        <output>{{goods}}</output>
      </k-container>
      <k-container>
        <k-radio label="手表"
                 name="oneOfGoods"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="台灯"
                 name="oneOfGoods"
                 :checked.sync="lamp"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="杯子"
                 name="oneOfGoods"
                 v-model="oneOfGoods"></k-radio>
        <br>
        <k-radio label="锅"
                 name="oneOfGoods"
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
        lamp: true
      }
    }
  }
</script>


