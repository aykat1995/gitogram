<template>
  <messageItem
    v-for="message in messageList"
    :key="message.id"
    :name="message.name"
    :message="message.message"
  />
</template>

<script>
import messageItem from '../messageItem/messageItem.vue'
import message from '../../pages/feeds/message.json'
export default {
  name: 'messageList',
  components: { messageItem },
  data () {
    return {
      messageList: message
    }
  }
}
</script>
