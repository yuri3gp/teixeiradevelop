import React from 'react';
import { LegalPage, LegalCard, UpdateDate } from './styles';

export default function PrivacyPolicy() {
  return (
    <LegalPage>
      <LegalCard>
        <h1>Politica de Privacidade</h1>
        <UpdateDate>Ultima atualizacao: 29 de marco de 2026</UpdateDate>

        <h2>1. Introducao</h2>
        <p>
          A EsteticPlex ("nos", "nosso" ou "plataforma") e um sistema de gestao online voltado para
          clinicas de estetica. Esta Politica de Privacidade descreve como coletamos, usamos,
          armazenamos, compartilhamos e protegemos os dados pessoais dos usuarios e dos
          clientes/pacientes cadastrados por eles, em conformidade com a LGPD (Lei no 13.709/2018).
        </p>
        <p>
          Ao utilizar nossos servicos, voce concorda com as praticas descritas nesta politica. Se nao
          concordar, interrompa o uso da plataforma.
        </p>

        <h2>2. Dados que coletamos</h2>
        <h3>2.1 Dados do titular da conta (clinica/profissional)</h3>
        <ul>
          <li>Nome completo ou razao social</li>
          <li>Endereco de e-mail</li>
          <li>Numero de telefone/WhatsApp</li>
          <li>Senha de acesso (armazenada de forma criptografada)</li>
          <li>Dados de autenticacao via Google (nome, e-mail e foto de perfil), quando aplicavel</li>
          <li>Dados do plano de assinatura e periodo de teste</li>
        </ul>

        <h3>2.2 Dados de pacientes/clientes cadastrados</h3>
        <ul>
          <li>Nome completo</li>
          <li>CPF (documento de identificacao)</li>
          <li>Data de nascimento</li>
          <li>Endereco de e-mail e telefone</li>
          <li>Endereco residencial</li>
          <li>Dados de convenio/seguro saude</li>
          <li>Observacoes clinicas</li>
        </ul>

        <h3>2.3 Dados de saude (dados sensiveis)</h3>
        <ul>
          <li>Diagnosticos e avaliacoes clinicas</li>
          <li>Tratamentos e procedimentos realizados</li>
          <li>Observacoes medicas e de acompanhamento</li>
          <li>Historico completo de atendimentos</li>
        </ul>
        <p>
          Esses dados sao classificados como dados pessoais sensiveis pela LGPD e recebem protecao
          reforcada.
        </p>

        <h3>2.4 Dados financeiros</h3>
        <ul>
          <li>Registros de receitas e despesas da clinica</li>
          <li>Valores de consultas e procedimentos</li>
          <li>Metodos de pagamento utilizados (PIX, cartao, dinheiro etc.)</li>
          <li>Historico de transacoes</li>
        </ul>
        <p>
          Nao armazenamos dados de cartao de credito ou debito dos pacientes. Os dados financeiros
          referem-se ao controle interno da clinica.
        </p>

        <h3>2.5 Dados de navegacao e uso</h3>
        <ul>
          <li>Dados de acesso ao site (Google Analytics/Google Ads), incluindo paginas visitadas</li>
          <li>Dados de origem de trafego (UTM: source, medium, campaign)</li>
          <li>Consentimento de cookies armazenado localmente no navegador</li>
          <li>Token de autenticacao (JWT) armazenado localmente para manter a sessao</li>
        </ul>

        <h2>3. Como usamos seus dados</h2>
        <ul>
          <li>Prestacao do servico: agendamentos, prontuarios, controle financeiro e funcionalidades</li>
          <li>Criacao e manutencao da conta: cadastro, autenticacao e recuperacao de senha</li>
          <li>Comunicacoes: e-mails transacionais e avisos relacionados ao servico</li>
          <li>Melhoria do servico: analise agregada de uso para aprimorar funcionalidades</li>
          <li>Marketing e publicidade: medicao de conversoes com consentimento</li>
          <li>Obrigacoes legais: cumprimento de exigencias legais e regulatorias</li>
        </ul>

        <h2>4. Base legal para o tratamento</h2>
        <ul>
          <li>Execucao de contrato (Art. 7, V)</li>
          <li>Consentimento (Art. 7, I / Art. 11, I)</li>
          <li>Legitimo interesse (Art. 7, IX)</li>
          <li>Obrigacao legal (Art. 7, II)</li>
        </ul>

        <h2>5. Compartilhamento de dados</h2>
        <ul>
          <li>Resend: envio de e-mails transacionais</li>
          <li>Google Ads/Analytics: dados anonimizados de navegacao, com consentimento</li>
          <li>Google OAuth: dados basicos de perfil para login social</li>
          <li>WhatsApp (Meta): uso do numero de telefone para abertura de conversa via API</li>
          <li>Firebase (Google): hospedagem do site institucional</li>
        </ul>
        <p>Nao vendemos, alugamos ou comercializamos dados pessoais para marketing de terceiros.</p>

        <h2>6. Cookies e tecnologias de rastreamento</h2>
        <ul>
          <li>Google Ads (gtag.js), ativado somente apos consentimento</li>
          <li>localStorage para token de sessao (JWT) e preferencia de consentimento</li>
          <li>sessionStorage para parametros temporarios de navegacao</li>
        </ul>

        <h2>7. Armazenamento e seguranca</h2>
        <ul>
          <li>Dados armazenados em banco PostgreSQL com acesso restrito</li>
          <li>Senhas criptografadas com bcrypt</li>
          <li>Comunicacao protegida por HTTPS/TLS</li>
          <li>Tokens JWT com expiracao definida</li>
          <li>Protecao contra forca bruta com rate limiting</li>
          <li>Controle de acesso baseado em funcao (RBAC)</li>
        </ul>

        <h2>8. Retencao de dados</h2>
        <p>
          Os dados pessoais sao retidos enquanto a conta estiver ativa ou pelo tempo necessario para as
          finalidades desta politica. Em caso de encerramento da conta, aplicamos exclusao,
          anonimizacao e retencoes legais cabiveis.
        </p>

        <h2>9. Seus direitos (LGPD)</h2>
        <ul>
          <li>Confirmacao e acesso</li>
          <li>Correcao de dados incompletos ou desatualizados</li>
          <li>Anonimizacao ou exclusao</li>
          <li>Portabilidade</li>
          <li>Eliminacao de dados tratados com consentimento</li>
          <li>Revogacao do consentimento</li>
          <li>Oposicao ao tratamento por legitimo interesse</li>
        </ul>

        <h2>10. Responsabilidades do profissional</h2>
        <p>
          O profissional usuario da plataforma atua como controlador dos dados de seus
          pacientes/clientes. A EsteticPlex atua como operadora, processando os dados conforme as
          instrucoes do profissional.
        </p>

        <h2>11. Alteracoes nesta politica</h2>
        <p>
          Podemos atualizar esta politica periodicamente. Em mudancas relevantes, notificaremos os
          usuarios por e-mail ou aviso na plataforma.
        </p>

        <h2>12. Contato</h2>
        <p>
          Para duvidas, solicitacoes ou exercicio de direitos sobre privacidade e protecao de dados,
          entre em contato:
        </p>
        <ul>
          <li>E-mail: contato@esteticplex.com</li>
          <li>WhatsApp: +55 (31) 99730-0623</li>
        </ul>
      </LegalCard>
    </LegalPage>
  );
}
