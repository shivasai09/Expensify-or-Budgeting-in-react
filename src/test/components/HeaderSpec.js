import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
import  '../setupTests.js';



describe('A test suite for Header .js',()=>{
    it('first testing',()=>{
        const wrapper= shallow(<Header/>)
        expect(wrapper.find('h1').length).toBe(1);
    })
})