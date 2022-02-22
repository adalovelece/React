import React from 'react';
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements';
const Index = ({ isOpen, toggle}) => {
    console.log(isOpen)

    
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
               <SidebarMenu>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='work'>Work</SidebarLink>
                <SidebarLink to='contact'>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
      
        </SidebarContainer>
    ) 
}

export default Index