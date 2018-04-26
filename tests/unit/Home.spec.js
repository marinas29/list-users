import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import Home from '_views/Home.vue'

describe('Home.vue', () => {
    it('Home test', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('h1').text()).contains('List Users')
    })
})
