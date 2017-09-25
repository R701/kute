<template>
  <div class="c-navigator">
    <k-container flex>
      <k-container w="1/3"
                   mr="5%">
        <k-navigator :items="data"
                     v-model="value"
                     @select="onSelect"
                     :blank="blank"
                     :initial-toggle-indexes="[0, 1]"
                     :auto-toggle="autoToggle"
                     :prevent-default="prevent"></k-navigator>
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
        <k-checkbox label="autoToggle"
                    :checked.sync="autoToggle"></k-checkbox>
        <br>
        <p>value: {{value}}</p>
      </k-container>
    </k-container>
    <k-divider margin="3em"
               :direct-parent="false"></k-divider>
    <k-container flex>
      <k-container w="1/3"
                   mr="5%">
        <k-navigator :items="horizontalData"
                     :horizontal="horizontal"
                     :horizontal-item-width="setWidth ? '1/4' : null"
                     :horizontal-gap="setGap ? 5 : null"
                     prevent-default
                     :auto-toggle="autoToggle"
                     :united="united"
                     v-model="value2"
                     @select="onSelect2"></k-navigator>
        <br><br><br><br>
        <k-navigator :items="horizontalData2"
                     :horizontal="horizontal"
                     :horizontal-item-width="setWidth ? '1/4' : null"
                     :horizontal-gap="setGap ? 5 : null"
                     prevent-default
                     :auto-toggle="autoToggle"
                     :united="united"
                     v-model="value3"
                     @select="onSelect2"></k-navigator>
      </k-container>
      <k-container>
        <k-checkbox label="horizontal"
                    :checked.sync="horizontal"></k-checkbox>
        <br>
        <k-checkbox label="set width: 1/4"
                    :checked.sync="setWidth"></k-checkbox>
        <br>
        <k-checkbox label="set gap: 5"
                    :checked.sync="setGap"></k-checkbox>
        <br>
        <k-checkbox label="united"
                    :checked.sync="united"></k-checkbox>
        <br>
        <k-checkbox label="autoToggle"
                    :checked.sync="autoToggle"></k-checkbox>
        <br>
        <p>
          <br>
          <span style="display: inline-block; min-width: 10em">value2: {{value2}}</span>
          <span style="display: inline-block; min-width: 10em">value3: {{value3}}</span>
        </p>
      </k-container>
    </k-container>
    <k-divider margin="3em"
               :direct-parent="false"></k-divider>
    <h3>Small</h3>
    <br>
    <k-container>
      <k-navigator :items="horizontalData2"
                   :horizontal="horizontal"
                   :horizontal-item-width="setWidth ? '1/4' : null"
                   :horizontal-gap="setGap ? 5 : null"
                   prevent-default
                   :auto-toggle="autoToggle"
                   :united="united"
                   size="small"
                   v-model="value4"></k-navigator>
    </k-container>
    <k-divider v-if="!horizontal"></k-divider>
    <br v-else>
    <h3>Default Size</h3>
    <br>
    <k-container>
      <k-navigator :items="horizontalData2"
                   :horizontal="horizontal"
                   :horizontal-item-width="setWidth ? '1/4' : null"
                   :horizontal-gap="setGap ? 5 : null"
                   prevent-default
                   :auto-toggle="autoToggle"
                   :united="united"
                   size="default"
                   v-model="value5"></k-navigator>
    </k-container>
    <k-divider v-if="!horizontal"></k-divider>
    <br v-else>
    <h3>Large</h3>
    <br>
    <k-container>
      <k-navigator :items="horizontalData2"
                   :horizontal="horizontal"
                   :horizontal-item-width="setWidth ? '1/4' : null"
                   :horizontal-gap="setGap ? 5 : null"
                   prevent-default
                   :auto-toggle="autoToggle"
                   :united="united"
                   size="large"
                   v-model="value6"></k-navigator>
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
                  { text: 'Japanese', href: 'https://www.pornhub.com/video?c=111', badge: 51 },
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
          },
          {
            text: 'Bi',
            badge: 'new',
            badgeColor: '$state-error'
          }
        ],

        oneLevelData: [
          { text: 'Straight' },
          { text: 'Gay' },
          {
            text: 'Bi',
            badge: 'new',
            badgeColor: '$state-error'
          }
        ],

        value: [0, 0, 2],

        oneLevel: false,
        prevent: true,
        blank: true,
        autoToggle: true,

        horizontalData: [
          {
            text: 'SEO',
            children: [
              { text: 'Rankings' },
              { text: 'Competitive Analysis' },
              { text: 'Optimizations' },
              {
                text: 'Backlinks',
                children: [
                  { text: 'Explore' },
                  { text: 'Monitor' }
                ]
              }
            ]
          },
          { text: 'Analytics' },
          { text: 'Social' },
          { text: 'Ads' }
        ],

        horizontalData2: [
          {
            text: 'SEO',
            icon: 'search',
            children: [
              { text: 'Rankings' },
              { text: 'Competitive Analysis' },
              { text: 'Optimizations' },
              {
                text: 'Backlinks',
                children: [
                  { text: 'Explore' },
                  {
                    text: 'Monitor',
                    children: [
                      { text: 'Explore' },
                      { text: 'Monitor' }
                    ]
                  }
                ]
              }
            ]
          },
          { text: 'Analytics (Long Text)' },
          { text: 'Social', badge: 56 },
          { text: 'Ads', disabled: true }
        ],

        horizontal: true,
        setWidth: false,
        setGap: false,
        united: true,

        value2: [2],
        value3: [2],
        value4: [2],
        value5: [2],
        value6: [2]
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
      onSelect ({ level, index }, value) {
        console.log({ level, index }, value)

        if (level === 0 && index === 2) {
          this.$set(this.multiLevelData, '2', {
            text: 'Bi'
          })
        }
      },
      onSelect2 ({ level, index }, value) {
        console.log({ level, index }, value)
      }
    }
  }
</script>
