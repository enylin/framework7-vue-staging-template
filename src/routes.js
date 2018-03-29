import IndexPage from './pages/index'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import NotFoundPage from './pages/not-found.vue'
import PanelLeftPage from './pages/panel-left'
import PanelRightPage from './pages/panel-right'

export default [{
  path: '/',
  component: IndexPage
}, {
  path: '/page1',
  component: Page1
}, {
  path: '/page2',
  component: Page2
}, {
  path: '/page3',
  component: Page3
}, {
  path: '/panel-left',
  component: PanelLeftPage
}, {
  path: '/panel-right',
  component: PanelRightPage
}, {
  path: '(.*)',
  component: NotFoundPage
}]
