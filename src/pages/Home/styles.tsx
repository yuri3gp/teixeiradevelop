import styled from "styled-components";

export const HomeStyle = styled.section`
    min-height: 100vh;
    background:
        radial-gradient(circle at 20% -10%, rgba(0, 224, 199, 0.2), transparent 40%),
        radial-gradient(circle at 90% 20%, rgba(49, 140, 231, 0.25), transparent 30%),
        linear-gradient(160deg, #050a14 0%, #0b1933 55%, #0c1c3d 100%);
    color: #f4f8ff;
`;

export const HeroSection = styled.section`
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    gap: 28px;
    padding: 72px 6vw 28px;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
        padding-top: 48px;
    }
`;

export const HeroText = styled.div`
    h1 {
        margin: 14px 0 14px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(2.1rem, 4.8vw, 4rem);
        line-height: 1.05;
        letter-spacing: 0.01em;
    }

    p {
        max-width: 620px;
        color: #d8e4ff;
        font-size: 1.1rem;
        line-height: 1.7;
    }
`;

export const Badge = styled.span`
    display: inline-block;
    border: 1px solid rgba(0, 224, 199, 0.6);
    color: #8df8ea;
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

export const CTAGroup = styled.div`
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const CTAButton = styled.a`
    display: inline-block;
    text-decoration: none;
    background: linear-gradient(120deg, #00d3b8, #00a6f6);
    color: #061127;
    font-weight: 700;
    padding: 12px 18px;
    border-radius: 12px;
`;

export const SecondaryButton = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #ecf5ff;
    border: 1px solid rgba(236, 245, 255, 0.36);
    padding: 12px 18px;
    border-radius: 12px;
`;

export const InfoCard = styled.aside`
    align-self: start;
    border: 1px solid rgba(138, 210, 255, 0.3);
    background: rgba(9, 22, 46, 0.8);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 14px 40px rgba(3, 8, 20, 0.35);

    h3 {
        margin-top: 0;
        margin-bottom: 14px;
        font-family: 'Space Grotesk', sans-serif;
    }

    p {
        margin: 0 0 10px;
        color: #d7e7ff;
    }
`;

export const Section = styled.section`
    padding: 56px 6vw 14px;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 20px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.55rem, 2.5vw, 2.3rem);
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;

export const ServiceCard = styled.article`
    border: 1px solid rgba(143, 211, 255, 0.32);
    border-radius: 16px;
    padding: 20px;
    background: rgba(8, 21, 43, 0.7);

    h3 {
        margin: 0 0 8px;
    }

    p {
        margin: 0 0 12px;
        color: #d4e6ff;
        line-height: 1.65;
    }

    small {
        color: #89f0e3;
        font-weight: 600;
    }
`;

export const CompanyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;

export const CompanyItem = styled.div`
    border: 1px solid rgba(161, 203, 255, 0.25);
    background: rgba(8, 20, 40, 0.62);
    border-radius: 12px;
    padding: 14px;
    color: #dce9ff;
`;

export const ContactCard = styled.div`
    border: 1px solid rgba(133, 221, 255, 0.35);
    border-radius: 16px;
    padding: 20px;
    background: rgba(7, 20, 43, 0.75);

    p {
        margin: 0 0 12px;
        color: #dce9ff;
        line-height: 1.65;
    }

    a {
        color: #89f0e3;
        text-decoration: none;
        font-weight: 700;
    }
`;

export const LegalNote = styled.p`
    margin-top: 12px;
    color: #a5c4e7;
    font-size: 0.9rem;
`;