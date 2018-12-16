import React from 'react';
import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-x: hidden;
  
  @media screen {
    transform: translateY(@navbar-height);
    background-color: @body-background-color;
  }
`;

export const Main = styled.main`
  flex: 1 1;
  min-width: 0;
  transition: margin-left .25s, margin-right .25s;
  @media screen {
    margin-left: @sidebar-width;
    margin-left: if(@sidebarMini, @sidebar-minimized-width);
    margin-left: if(@sidebarCollapse, 0);
    margin-right: if(@rightSidebarCollapse, 0, @aside-menu-width);
  }
`;

export const Content = styled.div`
    @media screen {
      padding: 4px;
    }
    position: relative;
`;
