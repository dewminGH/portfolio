import styled from 'styled-components';

export const HorizontalIconCard = styled.div<{
  width: string;
  height: string;
  border?: string;
  background?: string;
}>`
  display: flex;
  padding: 16px;
  gap: 16px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => (border ? border : 'unset')};
  background: ${({ background }) => (background ? background : 'transparent')};
`;

export const IconContainer = styled.div``;

export const DetailsContainer = styled.div``;
