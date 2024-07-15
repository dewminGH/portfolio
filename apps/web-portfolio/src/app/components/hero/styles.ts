import styled from 'styled-components';

export const HeroMain = styled.div`
  height: 50svh;
  background: red;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 30svh;
  }
  @media (max-width: 460px) {
    height: 20svh;
  }
`;

export const StyleTriangle = styled.div<{ isLeft?: boolean }>`
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  /* margin-bottom: -4%; */
  border-top: 20svh solid transparent;
  border-bottom: 0 solid transparent;
  // responsive
  @media (max-width: 768px) {
    border-top: 15svh solid transparent;
  }
  @media (max-width: 460px) {
    border-top: 12svh solid transparent;
  }
  ${({ isLeft }) => {
    if (isLeft) {
      return {
        left: 0,
        borderLeft: '50svw solid #3a3a4e',
      };
    } else {
      return {
        right: 0,
        borderRight: '50svw solid #3a3a4e',
      };
    }
  }}
`;
