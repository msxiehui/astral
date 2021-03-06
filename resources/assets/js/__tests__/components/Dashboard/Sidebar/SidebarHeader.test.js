import { shallowMount } from '@vue/test-utils'
import SidebarHeader from '@/components/Dashboard/Sidebar/SidebarHeader'

describe('Sidebar Header', () => {
  it('sets the title', () => {
    const wrapper = shallowMount(SidebarHeader, {
      propsData: {
        title: 'Stars'
      }
    })

    expect(wrapper.find('h3').text()).toBe('Stars')
  })
})
