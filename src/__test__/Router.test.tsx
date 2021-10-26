import React from 'react'
import { shallow } from 'enzyme'
import Routes from '../routes';
describe('<AppRouter />', () => {
    let component

    beforeEach(() => {
        component = shallow(<Routes />)
    })

    test('renders without crashing', () => {
        expect(component.length).toBe(1)
    })
})