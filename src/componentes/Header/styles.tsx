import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 6vw;
  background: rgba(12, 18, 33, 0.88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(107, 214, 255, 0.2);
`;

export const BrandStyle = styled.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-decoration: none;
`;

export const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;

export const LiStyle = styled.li`
  a {
    display: block;
    color: #d9ebff;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    border-radius: 10px;
    font-size: 0.95rem;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  a:hover {
    background-color: rgba(107, 214, 255, 0.16);
    color: #ffffff;
  }
`;

export const AStyle = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
`;