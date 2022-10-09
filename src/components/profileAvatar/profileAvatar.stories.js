import profileAvatar from './profileAvatar.vue'

export default {
  title: 'avatar',
  components: {
    profileAvatar
  }
}

export const defaultView = () => ({
  components: { profileAvatar },
  template: `<div class=storybook-wrapp style="width: 150px;height:150px; display:flex; align-items:center"><profileAvatar :avatarUrl="'https://png.pngtree.com/element_origin_min_pic/16/09/11/1157d4c8bbe76b3.jpg'" :nickname="'Nickname'"/></>`
});

