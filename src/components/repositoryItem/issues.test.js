import { mount } from '@vue/test-utils'
import repositoryItem from './repositoryItem.vue'

describe('issue component', () => {
  // Мок для axios
  jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
      issues: {
        title: 'Test comment text',
        user: {
          login: 'Test user'
        }
      }
    }))
  }))

  // Tets 1
  it('выполняет эмит события loadContent', async () => {
    const wrapper = mount(repositoryItem)

    await wrapper.find('.toggler-wrapp button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })
  // Test 2
  it('отрисует список элементов', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }
    const wrapper = mount(repositoryItem, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)

    await wrapper.find('.toggler-wrapp button').trigger('click')

    expect(wrapper.findAll('.comments__item').length).toBe(6)
  })

  // test 3
  it('Не вызывает событие contentLoaded если внутри есть issues', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }
    const wrapper = mount(repositoryItem, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })
    await wrapper.find('.toggler-wrapp button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
