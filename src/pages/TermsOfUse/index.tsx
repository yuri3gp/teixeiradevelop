import React from 'react';
import { LegalPage, LegalCard, UpdateDate } from './styles';

export default function TermsOfUse() {
  return (
    <LegalPage>
      <LegalCard>
        <h1>Termos de Uso</h1>
        <UpdateDate>Ultima atualizacao: 29 de marco de 2026</UpdateDate>

        <h2>1. Aceitacao dos termos</h2>
        <p>
          Estes Termos de Uso regulam o acesso e o uso da plataforma EsteticPlex. Ao criar conta,
          acessar ou utilizar os servicos, voce declara que leu, compreendeu e concorda com estes
          termos.
        </p>

        <h2>2. Sobre a plataforma</h2>
        <p>
          A EsteticPlex e um sistema online para gestao de clinicas de estetica, com recursos de
          agenda, cadastro de pacientes, prontuarios, controle financeiro e comunicacao com
          pacientes.
        </p>

        <h2>3. Elegibilidade e cadastro</h2>
        <ul>
          <li>O usuario deve fornecer informacoes verdadeiras, completas e atualizadas.</li>
          <li>O acesso a conta e pessoal e intransferivel.</li>
          <li>O usuario e responsavel pela guarda de credenciais e pela seguranca da conta.</li>
        </ul>

        <h2>4. Uso permitido</h2>
        <p>O usuario concorda em utilizar a plataforma apenas para finalidades licitas e legitimas.</p>
        <ul>
          <li>Utilizar dados de pacientes com base legal adequada.</li>
          <li>Nao inserir conteudo ilicito, ofensivo ou que viole direitos de terceiros.</li>
          <li>Nao tentar acessar areas restritas sem autorizacao.</li>
          <li>Nao comprometer a seguranca, disponibilidade ou integridade da plataforma.</li>
        </ul>

        <h2>5. Uso do WhatsApp e integracoes</h2>
        <p>
          Quando o usuario utiliza funcionalidades relacionadas ao WhatsApp, ele e responsavel por
          cumprir as regras da Meta e por obter consentimento dos contatos quando necessario.
        </p>

        <h2>6. Planos, testes e pagamentos</h2>
        <p>
          A plataforma pode oferecer periodo de teste e planos pagos. Valores, forma de cobranca,
          renovacao e cancelamento sao informados no momento da contratacao.
        </p>

        <h2>7. Propriedade intelectual</h2>
        <p>
          Todo o software, layout, marcas, nome comercial, conteudo e tecnologia da EsteticPlex sao
          protegidos por legislacao aplicavel e pertencem aos seus titulares de direito.
        </p>

        <h2>8. Privacidade e protecao de dados</h2>
        <p>
          O tratamento de dados pessoais e realizado conforme nossa Politica de Privacidade e a LGPD.
          Ao usar a plataforma, o usuario reconhece e concorda com esse tratamento.
        </p>

        <h2>9. Disponibilidade e limitacao de responsabilidade</h2>
        <p>
          Buscamos manter a plataforma disponivel e segura, mas nao garantimos disponibilidade
          ininterrupta. Nao nos responsabilizamos por falhas decorrentes de terceiros, internet,
          indisponibilidade de provedores ou uso inadequado da plataforma pelo usuario.
        </p>

        <h2>10. Suspensao e encerramento</h2>
        <p>
          Podemos suspender ou encerrar contas em caso de violacao destes termos, suspeita de fraude,
          uso abusivo ou exigencia legal.
        </p>

        <h2>11. Alteracoes dos termos</h2>
        <p>
          Estes termos podem ser atualizados a qualquer momento. Alteracoes relevantes serao
          comunicadas por e-mail ou aviso na plataforma.
        </p>

        <h2>12. Legislacao e foro</h2>
        <p>
          Estes termos sao regidos pelas leis da Republica Federativa do Brasil. Fica eleito o foro da
          comarca do usuario, quando aplicavel, para dirimir eventuais conflitos.
        </p>

        <h2>13. Contato</h2>
        <ul>
          <li>E-mail: contato@esteticplex.com</li>
          <li>WhatsApp: +55 (31) 99730-0623</li>
        </ul>
      </LegalCard>
    </LegalPage>
  );
}
