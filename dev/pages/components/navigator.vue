<template>
  <div class="c-navigator">
    <k-container flex>
      <k-container w="1/3"
                   mr="5%">
        <k-navigator :items="data"
                     v-model="value"
                     :blank="blank"
                     :prevent-default="prevent"
                     @item-click="onItemClick"
                     @change="onUpdate"></k-navigator>
      </k-container>
      <k-container>
        <k-checkbox label="one level"
                    :checked.sync="oneLevel"></k-checkbox>
        <br>
        <k-checkbox label="prevent-default"
                    :checked.sync="prevent"></k-checkbox>
        <br>
        <k-checkbox label="blank"
                    :checked.sync="blank"></k-checkbox>
        <br>
        <p>value: {{value}}</p>
      </k-container>
    </k-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        multiLevelData: [
          {
            text: 'Straight',
            children: [
              {
                text: 'Asian',
                href: 'https://www.pornhub.com/video?c=1',
                children: [
                  { text: 'Japanese', href: 'https://www.pornhub.com/video?c=111' },
                  { text: 'Korean', href: 'https://www.pornhub.com/video?c=103' },
                  { text: 'India', href: 'https://www.pornhub.com/video?c=101' }
                ]
              },
              { text: 'Mature', href: 'https://www.pornhub.com/video?c=28' },
              { text: 'Cartoon', href: 'https://www.pornhub.com/video?c=86' },
              { text: 'Big Tits', href: 'https://www.pornhub.com/video?c=8' },
              { text: 'Amateur', href: 'https://www.pornhub.com/video?c=3' },
              { text: 'Celebrity', href: 'https://www.pornhub.com/video?c=12' },
              { text: 'Hidden Section', icon: 'unview' }
            ]
          },
          {
            text: 'Gay',
            children: [
              { text: 'Asian', href: 'https://www.pornhub.com/gay/video?c=48' },
              { text: 'Bareback', href: 'https://www.pornhub.com/gay/video?c=40' },
              { text: 'Big Dick', href: 'https://www.pornhub.com/gay/video?c=58' },
              { text: 'Blowjob', href: 'https://www.pornhub.com/gay/video?c=56' },
              { text: 'Collage', href: 'https://www.pornhub.com/gay/video?c=68' },
              { text: 'Group', href: 'https://www.pornhub.com/gay/video?c=62' },
              { text: 'Latino', href: 'https://www.pornhub.com/gay/video?c=50' },
              { text: 'Military', href: 'https://www.pornhub.com/gay/video?c=402' },
              { text: 'Public', href: 'https://www.pornhub.com/gay/video?c=84' },
              { text: 'Twink', href: 'https://www.pornhub.com/gay/video?c=49' }
            ]
          }
        ],

        oneLevelData: [{ text: 'Straight' }, { text: 'Gay' }],

        value: [0, 2],

        oneLevel: false,
        prevent: true,
        blank: true
      }
    },

    computed: {
      data () {
        return this.oneLevel ? this.oneLevelData : this.multiLevelData
      }
    },

    watch: {
      oneLevel: function (val) {
        if (val) {
          this.value = Array.isArray(this.value) ? this.value[0] : this.value
        } else {
          this.value = [this.value]
        }
      }
    },

    methods: {
      onItemClick (item, index, level, parent, parentIndex) {
        // let active = !!item.active
        // item.active = !active
        // if (level === 0) {
        //   this.$set(this.data, index, item)
        // } else if (level === 1) {
        //   parent.children[index] = item
        //   this.$set(this.data, parentIndex, parent)
        // }
      },

      onUpdate (payload) {
        console.log('hiihih')
      }
    }
  }
</script>
