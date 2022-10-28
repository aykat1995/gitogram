<template>
  <div class="repos">
    <div class="loader" v-if="loading">
      <spinnerComp></spinnerComp>
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="repos__header">
        <div class="title">Repositories</div>
        <div class="count">{{repos.length}}</div>
      </div>
<!--          <pre>{{repos}}</pre>-->
      <ul class="repos__list">
        <li
          class="repo__item"
          v-for="{ id, name, description, stargazers_count, forks_count } in repos"
          :key="id"
        >
          <repositoryDescription
            :reponame="name"
            :repodescription="description"
            :likesCount="stargazers_count"
            :followers="forks_count"
          ></repositoryDescription>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import spinnerComp from '../../components/spinner/spinnerComp.vue'
import repositoryDescription from '../../components/repositoryDescription/repositoryDescription.vue'

import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
  name: 'reposPage',
  components: {
    spinnerComp,
    repositoryDescription
  },
  setup () {
    const loading = ref(false)
    const error = ref(null)
    //
    const { dispatch, state } = useStore()
    //
    dispatch('repos/fetchRepos')
    //
    const fetchRepos = async () => {
      loading.value = true
      try {
        await dispatch('repos/fetchRepos')
      } catch (e) {
        error.value = e.message
      } finally {
        loading.value = false
      }
    }
    //
    return {
      loading,
      error,
      repos: computed(() => state.repos.data),
      fetchRepos
    }
  }
  // data () {
  //   return {
  //     loading: false,
  //     error: null
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     repos: (state) => state.repos.data
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     fetchRepos: 'repos/fetchRepos'
  //   })
  // },
  // async created () {
  //   this.loading = true
  //   try {
  //     await this.fetchRepos()
  //   } catch (e) {
  //     this.error = e.message
  //   } finally {
  //     this.loading = false
  //   }
  // }
}
</script>

<style src="./repos.scss" scoped lang="scss"></style>
