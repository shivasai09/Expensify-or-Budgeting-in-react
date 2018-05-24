import React from 'react';
import {shallow} from 'enzyme';
import  '../setupTests.js';
import NotFoundPage from '../../components/NotFoundPage';

describe('test suite for not found page',()=>{
    it('firs spec',()=>{
        const wrapper  = new shallow(<NotFoundPage/>)
        expect(wrapper.find('div').length).toBe(1)
    })
})