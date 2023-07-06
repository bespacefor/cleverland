import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: coral;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 15px 0;
  @media ${({ theme }) => theme.media.tablet} {
    margin: 32px 0 24px 0;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 24px 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 120px;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Title = styled.h3`
  font: ${({ theme }) => theme.fonts.h3};
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.mobileH3};
  }
`;
