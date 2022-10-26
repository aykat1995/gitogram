import feedsPage from '../pages/feeds/feedsPage.vue'
import sliderComp from '../components/sliderComp/sliderComp.vue'
import authPage from '../pages/auth/authPage.vue'

export default [{
  path: '/',
  component: feedsPage,
  name: 'home'
},
{
  path: '/stories/:initialSlide',
  component: sliderComp,
  name: 'stories'
},
{
  path: '/auth',
  component: authPage,
  name: 'auth'
}]
