import styled from 'styled-components/macro';
import * as variables from '../../../Variables';
export const Inner = styled.div`
  display: flex;
  max-width: ${variables.PC};
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};

  @media (max-width: ${variables.PC}){
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  &:nth-child(1){
    width: calc(52% - 1.5rem);
  }
  &:nth-child(2){
    width: calc(48% - 1.5rem);
  }

  @media (max-width: ${variables.PC}){
    &:nth-child(1){
      width: 100%;
    }
    &:nth-child(2){
      width: 100%;
    }
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: .5rem;
  color: #fff;
  margin-top: 0;

  @media (max-width: ${variables.TB}){
    font-size: 2.5rem;
  }

  @media (max-width: ${variables.MB}){
    font-size: 1.625rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
  color: #fff;

  @media (max-width: ${variables.TB}){
    font-size: 1.25rem;
  }

  @media (max-width: ${variables.MB}){
    font-size: 1.125rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Item = styled.section`
  position: relative;
  padding: 70px 45px;
  border-bottom: 8px solid #222;

  @media (max-width: ${variables.MB}){
    padding: 50px 5%;
  }


`;

export const Container = styled.div`
  @media (max-width: ${variables.TB}) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
