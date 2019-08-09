import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display.js';

describe('<Display />', () => {
    it('renders without crashing', () => {
       render (<Display />)
    });
    it('props work', () => {
        const display = render(<Display />)
        display.queryByText(/main/i)
    })
})