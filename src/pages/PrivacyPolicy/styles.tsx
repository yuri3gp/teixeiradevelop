import styled from 'styled-components';

export const LegalPage = styled.main`
  min-height: calc(100vh - 220px);
  padding: 40px 6vw;
  color: #d8e8ff;
`;

export const LegalCard = styled.article`
  max-width: 980px;
  margin: 0 auto;
  padding: 28px 24px;
  border: 1px solid rgba(127, 207, 255, 0.24);
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(12, 20, 38, 0.96), rgba(7, 12, 22, 0.95));

  h1 {
    margin: 0 0 8px;
    font-family: 'Space Grotesk', sans-serif;
    color: #ffffff;
  }

  h2 {
    margin: 24px 0 10px;
    font-family: 'Space Grotesk', sans-serif;
    color: #9fd2ff;
    font-size: 1.1rem;
  }

  h3 {
    margin: 16px 0 8px;
    color: #b7ddff;
    font-size: 1rem;
  }

  p {
    margin: 0 0 10px;
    line-height: 1.65;
  }

  ul {
    margin: 0 0 14px 18px;
    padding: 0;
  }

  li {
    margin: 0 0 8px;
    line-height: 1.6;
  }

  strong {
    color: #ffffff;
  }

  a {
    color: #8df8ea;
  }
`;

export const UpdateDate = styled.p`
  margin: 0 0 20px;
  color: #93b8e4;
`;
