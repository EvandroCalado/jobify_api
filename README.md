# Jobify API

Bem-vindo ao projeto Jobify API! Esta API oferece funcionalidades robustas para gerenciar usuários e empregos, com endpoints intuitivos e recursos avançados. 

## Funcionalidades Principais

### 🔒 Autenticação
- **POST /api/v1/auth/register**: Cria um novo usuário.
- **POST /api/v1/auth/login**: Realiza o login do usuário, salva o JWT no cookie em modo http-only.
- **POST /api/v1/auth/logout**: Desloga o usuário e expira o token.

### 🔒 Usuários
- **GET /api/v1/users/current-user**: Obtém informações do usuário atual.
- **GET /api/v1/users/app-stats**: Obtém estatísticas dos empregos (apenas para administradores).
- **PUT /api/v1/users/update-user**: Atualiza as informações do usuário.

### 💻 Empregos
- **GET /api/v1/jobs**: Obtém todos os empregos disponíveis.
- **GET /api/v1/jobs/:id**: Obtém detalhes de um emprego específico.
- **POST /api/v1/jobs**: Cria um novo emprego.
- **PUT /api/v1/jobs/update/:id**: Atualiza as informações de um emprego existente.
- **DELETE /api/v1/jobs/delete/:id**: Apaga um emprego existente.

## Recursos Adicionais

- **Validações de Campos**: Todas as validações de campos são realizadas pelo backend, garantindo integridade e segurança.
- **Admin Automático**: O primeiro usuário cadastrado se torna automaticamente administrador.
- **Swagger Documentation**: A documentação completa da API está disponível no Swagger para facilitar o entendimento e utilização.

## Como Iniciar

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure as variáveis de ambiente.
4. Execute o servidor: `npm run server`.

## Documentação

A documentação detalhada da API está disponível no Swagger. Para acessar, vá para [Jobify API](https://jobifyapi-production.up.railway.app/api/v1/docs/).

Sinta-se à vontade para contribuir, relatar problemas ou propor melhorias. Boa busca de emprego! 🚀
