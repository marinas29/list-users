import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import Home from '_views/Home.vue'

describe('Home.vue', () => {
    it('Home test', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('div').text()).contains('ABCD')
    })

    it('Home test 2', () => {
        const wrapper = shallow(Home)
        expect(wrapper.find('div').text()).contains('Home')
    })
})
