const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  },
  type: {
    type: String,
    default: 'normal'
  }
}
const breadcrumbItemProps = {
  path: {
    type: String
  }
}
export {breadcrumbProps, breadcrumbItemProps}
