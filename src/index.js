import 'packages/index.css'
// import Actionsheet from 'packages/actionsheet'
import Article from 'packages/article'
// import Badge from 'packages/badge'
// import Button from 'packages/button'
// import Cell from 'packages/cell'
// import Checklist from 'packages/checklist'
import ConfirmBox from 'packages/message/confirm-box'
// import DatetimePicker from 'packages/datetime-picker'
// import Field from 'packages/field'
// import Indicator from 'packages/indicator'
// import InfiniteScroll from 'packages/infinite-scroll'
import Input from 'packages/input'
// import Lazyload from 'packages/lazyload'
import Loading from 'packages/loading'
import LoadingComp from 'packages/loading/loading'
import MessageBox from 'packages/message-box'
import Nav from 'packages/nav'
// import Navbar from 'packages/navbar'
// import Picker from 'packages/picker'
import PointItem from 'packages/point-item'
// import Popup from 'packages/popup'
// import Progress from 'packages/progress'
// import Radio from 'packages/radio'
// import range from 'packages/range'
import RangePicker from 'packages/range-picker'
import SearchBar from 'packages/search-bar'
// import Spinner from 'packages/spinner'
// import Swipe from 'packages/swipe'
// import Switch from 'packages/switch'
import Tag from 'packages/tag'
import Toast from 'packages/toast'
// import MToast from 'packages/toast-mint'
import merge from './utils/merge';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


const version = '0.1.4'

const components = [
  MintUI.Header,
  MintUI.Button,
  MintUI.Cell,
  MintUI.CellSwipe,
  MintUI.Field,
  MintUI.Badge,
  MintUI.Switch,
  MintUI.Spinner,
  MintUI.TabItem,
  MintUI.TabContainerItem,
  MintUI.TabContainer,
  MintUI.Navbar,
  MintUI.Tabbar,
  MintUI.Search,
  MintUI.Checklist,
  MintUI.Radio,
  MintUI.Loadmore,
  MintUI.Actionsheet,
  MintUI.Popup,
  MintUI.Swipe,
  MintUI.SwipeItem,
  MintUI.Range,
  MintUI.Picker,
  MintUI.Progress,
  MintUI.DatetimePicker,
  MintUI.IndexList,
  MintUI.IndexSection,
  MintUI.PaletteButton,
  Article,
  ConfirmBox,
  Input,
  LoadingComp,
  Nav,
  PointItem,
  RangePicker,
  SearchBar,
  Tag,
]

const install = function (Vue, config = {}) {
  if (install.installed) { return }

  components.map(component => {
    const name = component.name.replace('mt-', 'otter-')
    console.log(name)
    Vue.component(name, component)
  })

  Vue.use(MintUI.InfiniteScroll);
  Vue.use(MintUI.Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$loading = Vue.prototype.$loading = Loading
  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$mtoast = Vue.prototype.$mtoast= MintUI.Toast
  Vue.$indicator = Vue.prototype.$indicator = MintUI.Indicator
}

export default {
  version,
  install,
  InfiniteScroll: MintUI.InfiniteScroll,
  Lazyload: MintUI.Lazyload,
  Loading,
  MessageBox,
  Toast,
  Indicator: MintUI.Indicator,
  ...components
}
