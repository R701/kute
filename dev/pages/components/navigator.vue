<template>
  <div class="c-navigator">
    <k-container flex>
      <k-container w="1/3"
                   mr="5%">
        <k-navigator :items="pornSite"
                     :active-index="activeIndex"
                     :blank="blank"
                     :prevent-default="prevent"
                     @item-click="onItemClick"></k-navigator>
      </k-container>
      <k-container>
        <k-checkbox label="prevent-default"
                    :checked.sync="prevent"></k-checkbox>
        <br>
        <k-checkbox label="blank"
                    :checked.sync="blank"></k-checkbox>
      </k-container>
    </k-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pornSite: [
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
        ],

        activeIndex: 5,

        prevent: true,
        blank: true
      }
    },

    methods: {
      onItemClick (item, index) {
        this.activeIndex = index
      }
    }
  }
</script>
