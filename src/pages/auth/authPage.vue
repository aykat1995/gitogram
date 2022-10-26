<template>
  <div class="auth">
    <div class="auth__top">
      <logoComp />
      <div class="auth__content">More than just one repository.
        This is our digital world.</div>
      <button
        class="auth__btn"
        @click="redirectToGhAuth"
      >
        <span class="text">Authorize with github</span>
        <div class="icon icon_github">
          <iconComp name="githubIcon"></iconComp>
        </div>
      </button>
    </div>
    <div class="auth__bottom">
      <img src="../../assets/comp.png" alt="macbook" class="auth__img">
      <div class="copyright">© Gitogram from Loftschool</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import * as api from '@/api'
import logoComp from '../../components/logo/logoComp.vue'
import { iconComp } from '../../icons'
// import env from '../../../env'
import axios from 'axios'

export default {
  name: 'AuthPage',
  components: {
    logoComp,
    iconComp
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
    // getCode () {
    //   const githubAuthApi = 'https://github.com/login/oauth/authorize'
    //   const params = new URLSearchParams()
    //   params.append('client_id', clientId)
    //   params.append('scope', 'repo:status read:user')
    //   window.location.href = `${githubAuthApi}?${params}`
    // }
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserByCode(code)
      localStorage.setItem('token', token)
      axios.defaults.headers.Authorization = `token ${token}`
      this.$router.replace({ name: 'home', query: { search: '' } })
      // window.location = env.redirect_url
    }
  }
  // async created () {
  //   const code = new URLSearchParams(window.location.search).get('code')
  //   if (code) {
  //     try {
  //       const responce = await fetch('http://localhost:8000/github', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           clientId,
  //           code,
  //           clientSecret
  //         })
  //       })
  //       const { token } = await responce.json()
  //       localStorage.setItem('token', token)
  //       this.$router.replace({ name: 'feedsPage' })
  //       console.log(token)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }
}
</script>

<style src="./authPage.scss" scoped lang="scss"></style>
