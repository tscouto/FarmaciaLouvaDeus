# Farmácia Louva Deus

## Descrição do Projeto
O projeto **Farmácia Louva Deus** é um aplicativo desenvolvido em React Native, com o objetivo de facilitar a gestão de uma farmácia, permitindo que usuários realizem cadastros de medicamentos, consultas e gerenciem suas informações de forma prática e eficiente. O aplicativo foi projetado para ser intuitivo e acessível, promovendo uma experiência de usuário agradável.

## Funcionalidades
- **Cadastro de Usuários**: Permite que novos usuários se cadastrem no sistema, escolhendo entre diferentes perfis (motorista ou filial) e fornecendo as informações necessárias, como nome, documento (CPF/CNPJ), endereço, email e senha.
- **Cadastro de Motorista**: Específico para motoristas, permitindo que eles se cadastrem com informações adicionais relacionadas ao seu perfil.
- **Formulário de Medicamentos**: Os usuários podem adicionar medicamentos ao sistema, especificando detalhes como nome, descrição, dosagem e quantidade disponível.
- **Consulta de Medicamentos**: Permite que os usuários busquem medicamentos cadastrados, facilitando a visualização das informações relevantes.
- **Lista de Tarefas**: Os usuários podem gerenciar suas tarefas diárias relacionadas à farmácia, como reabastecimento de estoque e acompanhamento de pedidos.
- **Tela de Login**: Usuários existentes podem acessar suas contas utilizando email e senha.
- **Tela de Login da Filial**: Permite que usuários da filial façam login em suas contas.
- **Tela de Splash Screen**: Uma tela inicial que é exibida enquanto o aplicativo está carregando.
- **Tela de Entrega de Medicamentos**: Permite o registro e confirmação da entrega de medicamentos.

## Detalhes das Telas

### 1. Tela de Splash Screen
- **Função**: Tela inicial exibida durante o carregamento do aplicativo.
- **Ação**: Apresenta o logo da farmácia e uma breve mensagem de boas-vindas, antes de redirecionar para a tela de login.

### 2. Tela de Login
- **Função**: Permite que usuários existentes façam login em suas contas.
- **Campos**: Email e Senha.
- **Ação**: O usuário insere suas credenciais para acessar o sistema. Se as informações estiverem corretas, é redirecionado para a tela principal do aplicativo.

### 3. Tela de Cadastro de Usuário
- **Função**: Permite que novos usuários se cadastrem no sistema.
- **Campos**: Nome, CPF/CNPJ, Endereço, Email e Senha.
- **Ação**: O usuário pode criar sua conta, escolhendo entre os perfis de motorista ou filial.

### 4. Tela de Cadastro de Motorista
- **Função**: Específica para motoristas se cadastrarem no sistema.
- **Campos**: Nome, CPF, Endereço, Telefone, Email e Senha.
- **Ação**: O motorista fornece suas informações e pode se cadastrar, permitindo o acesso ao sistema com um perfil especializado.

### 5. Tela de Entrega de Medicamentos
- **Função**: Permite o registro e confirmação da entrega de medicamentos.
- **Informações**: O usuário visualiza a lista de medicamentos que estão aguardando entrega.
- **Ação**: O usuário pode usar a câmera do dispositivo para escanear o código de barras do medicamento, confirmando assim a entrega. Após a confirmação, o status do medicamento é atualizado para "entregue".

### 6. Tela de Cadastro de Entrega
- **Função**: Facilita o registro de novas entregas por filial no sistema.
- **Campos**: Nome do medicamento, descrição, dosagem e quantidade disponível.
- **Ação**: Após preencher os dados, o usuário pode salvar o medicamento na lista de produtos da farmácia.

### 7. Tela de Consulta de Medicamentos
- **Função**: Permite a busca e visualização de medicamentos cadastrados.
- **Recursos**: O usuário pode pesquisar por nome ou categoria e visualizar detalhes de cada medicamento.
- **Ação**: Informações como descrição e dosagem são exibidas para ajudar o usuário a identificar rapidamente os medicamentos.



## Tecnologias Utilizadas
- **React Native**: Framework utilizado para o desenvolvimento do aplicativo, permitindo a criação de interfaces nativas para Android e iOS.
- **Axios**: Biblioteca utilizada para fazer requisições HTTP para a API backend, facilitando a comunicação entre o aplicativo e o servidor.
- **React Navigation**: Utilizado para gerenciar a navegação entre diferentes telas do aplicativo.
- **TextInputMask**: Biblioteca para a aplicação de máscaras em campos de entrada, como CPF e CNPJ, garantindo que os dados sejam inseridos corretamente.
- **Environment Variables**: Utilização de variáveis de ambiente para gerenciar as URLs da API, garantindo a segurança e flexibilidade no código.

## Capturas de Tela
Você pode visualizar as capturas de tela do projeto nos seguintes links:
- [Tela de Splash Screen](https://github.com/user-attachments/assets/d4388046-454e-4544-9bc0-d772729ce9ba)
- [Tela de Login](https://github.com/user-attachments/assets/900a3b43-571c-408d-a554-d87d13427dbf)
- [Tela de Cadastro de Entrega do Login Filial](https://github.com/user-attachments/assets/558c46f7-280a-483c-9b1c-4108c89341f5)
- [Tela de Cadastro de Usuário](https://github.com/user-attachments/assets/593da9f6-d8a8-4cf5-b884-c0f4d3a50a39)
- [Tela de Cadastro de Motorista](https://github.com/user-attachments/assets/e3850278-edfe-4689-a995-9bf412e6ab9a)
- [Tela de Entrega de Medicamentos](https://github.com/user-attachments/assets/1af327a8-851f-4348-8a2a-6865638b7f0a)
- [Tela de Consulta de Medicamentos](https://github.com/user-attachments/assets/5c96b7c4-c4dc-414d-baec-3ecb4a8d9548)

### Pré-requisitos

1. **Node.js** e **npm** instalados
2. **Expo CLI** para executar o app em ambiente de desenvolvimento
3. Configuração do backend local disponível no seu IP

### Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/tscouto/ProjetoModulo_01_Tiago.git
   
2. **Instale as dependências:**
   ```bash
   cd Farmacia Louva Deus npm install

3. **Execute o projeto:**
   ```bash
   expo start


 ##  📈 Melhorias Futuras
- Integração com mapa para acompanhamento das rotas de entrega.
- Implementação de push notifications para alertas de novas movimentações e mudanças de status.
- Feedback visual em tempo real no cadastro de usuários e produtos.
- Melhorias na tela de pesquisa de produtos com sugestões automáticas e filtros adicionais.

-[![Assista ao vídeo do projeto](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg)](https://drive.google.com/file/d/1s5Fb18jLHLM7g1sJW2mEqLh77IBtdk_f/view?usp=sharing)




## Conclusão
O projeto **Farmácia Louva Deus** visa proporcionar uma solução prática e eficiente para a gestão de farmácias, facilitando a experiência do usuário e otimizando os processos internos. Através das tecnologias utilizadas, buscamos criar um aplicativo robusto e fácil de usar.
