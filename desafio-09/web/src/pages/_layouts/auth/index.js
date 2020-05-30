import React from 'react';
import PropTypes from 'prop-types';
import Footer from '~/components/Footer';
import { Content, Wrapper } from './style';

export default function AuthLayout({ children }) {
    return(
        <Wrapper>
            <Content>
                {children}
            </Content>
            <Footer/>
        </Wrapper>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};