import { shallowMount } from '@vue/test-utils'
import togglerItem from './togglerItem.vue'

describe('toggler component', () => {
  it('изменяет надпись при клике', async () => {
    const wrapper = shallowMount(togglerItem)

    expect(wrapper.find('.text').text()).toBe('Show issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
