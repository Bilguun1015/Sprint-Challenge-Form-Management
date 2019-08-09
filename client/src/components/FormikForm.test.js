import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import FormikRegistration from './FormikForm';

describe('<FormikRegistration />', () => {
    it('renders without crashing', () => {
       render (<FormikRegistration />)
    });
    it('submit', () => {
        const {getByText} = render (< FormikRegistration/>)
        const submitButton = getByText(/submit/i)
        fireEvent.click(submitButton)
    })
})