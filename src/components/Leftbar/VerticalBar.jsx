import React from 'react';
import styled from 'styled-components';

import SvgGitlab from '../../assets/Gitlab';
import SvgDocker from '../../assets/Docker';
import SvgLinkeding from '../../assets/Linkedin';

const icons = [{ name: "Gitlab", component: SvgGitlab },
{ name: "Docker", component: SvgDocker },
{ name: "LinkedIn", component: SvgLinkeding },];

const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  fill: #DED9D9;
`;

const Icon = ({ icon }) => {
  const IconComponent = icon.component;

  return (
    <StyledIcon>
      <IconComponent style={{ width: "40px", height: "40px" }} />
    </StyledIcon>
  );
};

const VerticalBar = ({leftWidth}) => {
  return (
    <Container leftWidth={leftWidth}>
      <IconsContainer>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </IconsContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${props => props.leftWidth}%;
  background: rgba(0, 0, 0, 0.28);
  z-index: 1;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
  padding-bottom: 10px;
`;

export default VerticalBar;
