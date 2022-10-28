<template>
  <div class="following">
    <div class="loader" v-if="loading">
      <spinnerComp></spinnerComp>
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="c-following__header">
        <div class="title">Following</div>
        <div class="count">{{starred.length}}</div>
      </div>
<!--          <pre>{{starred}}</pre>-->
      <ul class="following__list">
        <li
          class="following__item"
          v-for="{ id, owner, following} in starred"
          :key="id"
        >
          <subscriptionComp
            :username="owner.login"
            :avatarUrl="owner.avatar_url"
            :following="following"
            :type="owner.type"
            :id="id"
            @onFollow="starRepo(id)"
            @onUnFollow="unStarRepo(id)"
          ></subscriptionComp>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import spinnerComp from '../../components/spinner/spinnerComp.vue'
import subscriptionComp from '../../components/subscription/subscription.vue'

export default {
  name: 'followingComp',
  components: {
    spinnerComp,
    subscriptionComp
  },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
      starRepo: 'starred/starRepo',
      unStarRepo: 'starred/unStarRepo'
    })
  },
  async created () {
    this.loading = true
    try {
      await this.fetchStarred()
    } catch (e) {
      this.error = e.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style src="./followingComp.scss" scoped lang="scss"></style>
