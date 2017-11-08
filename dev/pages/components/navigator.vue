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
            text: '一级',
            children: [
              {
                text: '二级',
                href: 'https://www.baidu.com/',
                children: [
                  { text: '三级', href: 'https://www.baidu.com/', badge: 51 },
                  { text: '三级', href: 'https://www.baidu.com/' },
                  { text: '三级', href: 'https://www.baidu.com/' }
                ]
              },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', icon: 'unview' }
            ]
          },
          {
            text: '一级',
            children: [
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' },
              { text: '二级', href: 'https://www.baidu.com/' }
            ]
          },
          {
            text: '一级',
            badge: 'new',
            badgeColor: '$state-error'
          }
        ],

        oneLevelData: [
          { text: '一级' },
          { text: '一级' },
          {
            text: '一级',
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
