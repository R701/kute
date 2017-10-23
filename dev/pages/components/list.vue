<template>
  <div class="c-list">
    <k-container class="controller"
      pa="1em">
      <div class="field slider-field">
        <span>data length</span>
        <k-slider :min="1"
          :max="50"
          :step="1"
          :length="500"
          v-model="length"
          tip
          :precision="0"></k-slider>
        <span>{{length}}</span>
      </div>
      <br>
      <div class="field slider-field">
        <span>xgap</span>
        <k-slider :min="1"
          :max="50"
          :length="500"
          v-model="xgap"
          :precision="2"></k-slider>
        <span>{{xgap}}</span>
      </div>
      <br>
      <div class="field slider-field">
        <span>ygap</span>
        <k-slider :min="1"
          :max="50"
          :length="500"
          v-model="ygap"
          :precision="2"></k-slider>
        <span>{{ygap}}</span>
      </div>
      <br>
      <div class="field slider-field">
        <span>cols</span>
        <k-slider :min="1"
          :max="10"
          :length="500"
          :step="1"
          v-model="cols"
          :precision="0"></k-slider>
        <span>{{cols}}</span>
      </div>
      <br>
      <div class="field">
        <k-checkbox label="flex"
          :checked.sync="flex"></k-checkbox>
        <k-checkbox label="wrap"
          :checked.sync="wrap"></k-checkbox>
        <k-checkbox label="reverse"
          :checked.sync="reverse"></k-checkbox>
        <k-checkbox label="sortable"
          :checked.sync="sortable"></k-checkbox>
        <k-checkbox label="balanced"
          :checked.sync="balanced"></k-checkbox>
      </div>
      <br>
      <div class="field">
        <k-radio name="list-style"
          v-for="(s, i) in listStyles"
          :key="i"
          :label="s"
          v-model="listStyle"></k-radio>
      </div>
      <br>
      <div class="field">
        <k-group>
          <k-input type="number"
            v-model="swapItem1"
            placeholder="swap item index 1"></k-input>
          <k-input type="number"
            v-model="swapItem2"
            placeholder="swap item index 2"></k-input>
          <k-button @click="$refs.list.swap(swapItem1, swapItem2)">swap</k-button>
        </k-group>
      </div>
      <br>
      <p>{{list}}</p>
    </k-container>
    <br>
    <k-list v-model="list"
      :listStyle="listStyle"
      :cols="cols"
      :xgap="xgap"
      :ygap="ygap"
      :wrap="wrap"
      :flex="flex"
      :reverse="reverse"
      :sortable="sortable"
      :balanced="balanced"
      ref="list">
      <template scope="props">
        <div :class="`item ${props.index}`">
          {{props.item}}
        </div>
      </template>
    </k-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        length: 10,
        listStyle: 'none',
        flex: false,
        wrap: true,
        reverse: false,
        sortable: false,
        xgap: 15,
        ygap: 15,
        cols: 4,
        balanced: false,
        listStyles: [
          'none',
          'square',
          'disc',
          'circle',
          'decimal',
          'lower-greek',
          'disc inside',
          'decimal inside'
        ],
        swapItem1: 2,
        swapItem2: 8
      }
    },
    mounted () {
      window.onresize = () => {
        this.$refs.list.forceUpdate()
      }
    },
    watch: {
      length (val) {
        var arr = []
        for (var i = 0; i < val; i++) {
          arr.push(i)
        }

        this.list = arr
      }
    }
  }
</script>


<style lang="stylus">
  .c-list
    .item
      background $grey
      text-align center

    .field
      &.slider-field
        span
          vertical-align middle

          &:first-child
            margin-right 1em

          &:last-child
            margin-left 1em

      .radio, .checkbox
        margin-right 15px

    .controller
      border 1px solid $white
</style>
