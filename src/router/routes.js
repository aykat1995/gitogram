import feedsPage from '../pages/feeds/feedsPage.vue'
import sliderComp from '../components/sliderComp/sliderComp.vue'

export default [{
  path: '/',
  component: feedsPage,
  name: 'home'
},
{
  path: '/stories',
  component: sliderComp,
  name: 'stories',
  children: {
    path: '/stories/:initialSlide',
    component: sliderComp,
    name: 'storiesInitialSlide'
  }
}]
