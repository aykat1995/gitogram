import feedsPage from '../pages/feeds/feedsPage.vue'
import sliderComp from '../components/sliderComp/sliderComp.vue'
import authPage from '../pages/auth/authPage.vue'
import followingComp from '../pages/following/followingComp.vue'
import reposPage from '../pages/repos/repos.vue'
import userPage from '../pages/userPage/userPage.vue'

export default [
{
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
},
{
  path: '/userPage',
    name: 'userPage',
    component: userPage,
    children: [{
      path: '',
      component: reposPage,
      name: 'repos',
      props: {
        pageTitle: 'Repositories'
      }
    }, {
      path: 'following',
      component: followingComp,
      name: 'following',
      props: {
        pageTitle: 'Following'
      }
    }]
}
]
