import React from 'react';
import {
    HomeStyle,
    HeroSection,
    HeroText,
    Badge,
    CTAGroup,
    CTAButton,
    SecondaryButton,
    InfoCard,
    Section,
    SectionTitle,
    ServicesGrid,
    ServiceCard,
    CompanyGrid,
    CompanyItem,
    ContactCard,
    LegalNote
} from './styles';

export default function Home()
{
    return(
        <>
            <HomeStyle>
                                <HeroSection id="inicio">
                                    <HeroText>
                                        <Badge>Software proprio para clinicas de estetica</Badge>
                                        <h1>Teixeira Develop</h1>
                                        <p>
                                            A Teixeira Develop desenvolve seu proprio produto digital,
                                            com foco em gestao de clinicas de estetica.
                                        </p>
                                        <CTAGroup>
                                            <CTAButton href="#contato">Falar com especialista</CTAButton>
                                            <SecondaryButton href="#produto">Conhecer produto</SecondaryButton>
                                        </CTAGroup>
                                    </HeroText>
                                    <InfoCard>
                                        <h3>Dados da empresa</h3>
                                        <p><strong>CNPJ:</strong> 50.313.157/0001-45</p>
                                        <p><strong>Razao social:</strong> Y Rodrigues Teixeira</p>
                                        <p><strong>Nome fantasia:</strong> Teixeira Develop</p>
                                        <p><strong>Porte:</strong> ME</p>
                                        <p><strong>Situacao:</strong> Ativa desde 13/04/2023</p>
                                    </InfoCard>
                                </HeroSection>

                                <Section id="produto">
                                    <SectionTitle>Produto principal</SectionTitle>
                                    <ServicesGrid>
                                        <ServiceCard>
                                            <h3>EsteticPlex</h3>
                                            <p>
                                                Plataforma focada na operacao de clinicas de estetica.
                                            </p>
                                            <small>https://esteticplex.com</small>
                                        </ServiceCard>
                                        <ServiceCard>
                                            <h3>Gestao completa da clinica</h3>
                                            <p>
                                                Recursos para rotina comercial, controle operacional e acompanhamento da equipe.
                                            </p>
                                            <small>Carro-chefe da Teixeira Develop</small>
                                        </ServiceCard>
                                        <ServiceCard>
                                            <h3>Evolucao continua</h3>
                                            <p>
                                                O software evolui continuamente para atender as necessidades reais do segmento estetico.
                                            </p>
                                            <small>Produto proprio da empresa</small>
                                        </ServiceCard>
                                    </ServicesGrid>
                                </Section>

                                <Section id="empresa">
                                    <SectionTitle>Informacoes empresariais</SectionTitle>
                                    <CompanyGrid>
                                        <CompanyItem><strong>Natureza juridica:</strong> 213-5 - Empresario (Individual)</CompanyItem>
                                        <CompanyItem><strong>Abertura:</strong> 13/04/2023</CompanyItem>
                                        <CompanyItem><strong>Endereco:</strong> Av Sao Sebastiao, 1657, Sala 03 Anexo 02</CompanyItem>
                                        <CompanyItem><strong>Bairro:</strong> Nossa Senhora de Fatima</CompanyItem>
                                        <CompanyItem><strong>Cidade/UF:</strong> Parnaiba - PI</CompanyItem>
                                        <CompanyItem><strong>CEP:</strong> 64.202-020</CompanyItem>
                                    </CompanyGrid>
                                </Section>

                                <Section id="contato">
                                    <SectionTitle>Contato</SectionTitle>
                                    <ContactCard>
                                        <p><strong>Email:</strong> <a href="mailto:yuri3gp@gmail.com">yuri3gp@gmail.com</a></p>
                                        <p><strong>Telefone:</strong> <a href="tel:+553197300623">(31) 9730-0623</a></p>
                                        <p><strong>WhatsApp:</strong> <a href="https://wa.me/55319973006233" target="_blank" rel="noreferrer">Conversar no WhatsApp</a></p>
                                        <p>
                                            Pronto para iniciar seu projeto? Entre em contato e receba uma proposta
                                            alinhada ao seu negocio.
                                        </p>
                                    </ContactCard>
                                    <LegalNote>
                                        Comprovante CNPJ emitido em 14/04/2023, 14:26 (Brasilia), pagina 1/1.
                                    </LegalNote>
                                </Section>
            </HomeStyle>
        </>
    )
}