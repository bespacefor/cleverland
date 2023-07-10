import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    padding: 16px 0 8px;
    gap: 16px;
  }
`;

export const Text = styled.p`
  font: ${({ theme }) => theme.fonts.bodyLarge};
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.mobileBodyLarge};
    text-align: center;
  }
`;
