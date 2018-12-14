import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from './Footer'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

Enzyme.configure({ adapter: new Adapter() })

describe('<Footer />', () => {

    let mounted;

    const Component = () => {
        if (!mounted) 
             mounted = mount(<Footer />)
        return mounted 
    }

    it('deve conter botao de adicionar', () => 
        expect(Component().find(Fab)).toHaveLength(1)
    )

    it('o botao de adicionar deve conter icone', () => {
        const button = Component().find(Fab)
        expect(button.children(AddIcon).exists).toBeTruthy()
    })

    it('deve conter propriedades', () => {
        const Component = mount(<Footer a={ jest.fn() } />)
        expect(Object.keys(Component.props()).length).toBeGreaterThan(0)
    })

    it('o botão de adicionar deve ser clicavel', () => {
        const mockHandleClick = jest.fn()
        const Component = mount(<Footer onClickAddHandler={ mockHandleClick } />)
        Component.find(Fab).simulate('click')
        expect(mockHandleClick).toHaveBeenCalledTimes(1)
    })

})