const main = {
  defaultActiveKey: {
    type: null
  },
  currentKey: {
    type: null
  },
  type: {
    type: String,
    default: 'default'
  },
  width: {
    type: String,
    default: '250px'
  },
  gap: {
    type: String,
    default: '5px'
  }
}

const nav = {
  panes: Array,
  activeKey: null,
  width: {
    type: String,
    default: '250px'
  },
  gap: {
    type: String,
    default: '5px'
  }
}

const pane = {
  tabKey: String,
  label: String,
  disabled: Boolean
}

export { main, nav, pane }
