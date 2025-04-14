```markdown
# 🚀 Projeto Automoção Python e AWS

Este projeto implementa um sistema de login e registro com autenticação JWT, redirecionamento entre telas e integração com o SDK da AWS para autenticação de credenciais.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-16+-brightgreen?style=flat-square" alt="Node.js Version" />
  <img src="https://img.shields.io/badge/AWS-SDK-blue?style=flat-square" alt="AWS Integration" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square" alt="MIT License" />
</p>

---

## 🌟 Funcionalidades

✅ **Tela de Registro**  
Permite que os usuários se registrem fornecendo nome, e-mail e senha. Após o registro bem-sucedido, o usuário é redirecionado para a tela de login.

🔑 **Tela de Login**  
Permite que os usuários façam login usando seu e-mail e senha. Após o login bem-sucedido, o usuário é redirecionado para a página de boas-vindas.

🎉 **Página de Boas-Vindas**  
Exibe uma mensagem de boas-vindas após o login. Permite que o usuário insira suas credenciais da AWS (Access Key e Secret Key) para autenticação.

🔒 **Autenticação JWT**  
Implementa tokens JWT para autenticar os usuários após o login.

☁️ **Integração com AWS**  
O sistema usa o SDK da AWS para verificar as credenciais do usuário. Futuramente, poderá ser expandido para interagir com serviços como Lambda, S3, etc.

---

## 📋 Fluxo das Funções

1. **Registro**  
   - O usuário acessa a tela de registro (`/register`).  
   - Os dados são enviados para o backend via POST.  
   - O backend valida os dados, criptografa a senha e salva o usuário no banco de dados SQLite.  
   - Após o registro bem-sucedido, o usuário é redirecionado para a tela de login (`/login`).

2. **Login**  
   - O usuário acessa a tela de login (`/login`).  
   - Os dados são enviados para o backend via POST.  
   - O backend verifica as credenciais e gera um token JWT.  
   - Após o login bem-sucedido, o usuário é redirecionado para a página de boas-vindas (`/welcome`).

3. **Autenticação AWS**  
   - Na página de boas-vindas, o usuário insere suas credenciais da AWS.  
   - O frontend usa o SDK da AWS para verificar as credenciais.  
   - Se as credenciais forem válidas, o sistema informa ao usuário que a autenticação foi bem-sucedida.

---

## 🛠️ Requisitos do Projeto

### Backend
- Node.js (v16 ou superior)
- Dependências do Node.js listadas abaixo.

### Frontend
- Navegador moderno (Chrome, Firefox, Edge, etc.).

### AWS
- Uma conta AWS ativa.
- Credenciais válidas (Access Key e Secret Key).

---

## 🚀 Instalação e Configuração

### 1. Clonar o Repositório 📥
Clique no botão abaixo para copiar o comando:
```bash
git clone https://github.com/Sergio-Sena/Projeto-Automo-o-python-e-aws.git
cd Projeto-Automo-o-python-e-aws
```
<details>
  <summary>📋 Copiar Comando</summary>
  ```bash
  git clone https://github.com/Sergio-Sena/Projeto-Automo-o-python-e-aws.git && cd Projeto-Automo-o-python-e-aws
  ```
</details>

---

### 2. Instalar Dependências do Backend 📦
Execute o seguinte comando para instalar as dependências do Node.js:
```bash
npm install
```
<details>
  <summary>📋 Copiar Comando</summary>
  ```bash
  npm install
  ```
</details>

---

### 3. Iniciar o Servidor ▶️
Inicie o servidor localmente:
```bash
node backend/src/server.js
```
<details>
  <summary>📋 Copiar Comando</summary>
  ```bash
  node backend/src/server.js
  ```
</details>

---

### 4. Acessar o Sistema 🌐
Abra o navegador e acesse:
- Tela de Login: [http://localhost:5500/login](http://localhost:5500/login)  
- Tela de Registro: [http://localhost:5500/register](http://localhost:5500/register)

---

## 📦 Dependências (requirements.txt)

As dependências do backend estão listadas abaixo. Para instalá-las, use o comando `npm install`.

```plaintext
bcryptjs
body-parser
cors
express
jsonwebtoken
sqlite3
```

---

## 📂 Estrutura do Projeto

```
C:/Projetos Git/Projeto-Automo-o-python-e-aws/
├── backend/               # Código-fonte do backend
│   ├── src/
│   │   ├── database.js    # Configuração do banco de dados
│   │   ├── auth.js        # Lógica de autenticação (JWT)
│   │   └── server.js      # Servidor Express
│   └── package.json       # Dependências do backend
├── frontend/              # Arquivos estáticos do frontend
│   ├── index.html         # Tela de login
│   ├── register.html      # Tela de registro
│   ├── welcome.html       # Página de boas-vindas
│   └── main.css           # Estilos unificados
└── README.md              # Documentação do projeto
```

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🤝 Contribuições

Contribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorar este projeto.

---

## 📢 Contato

Para dúvidas ou sugestões, entre em contato:
- Email: [senanetworker@gmail.com](mailto:senanetworker@gmail.com)
- LinkedIn: [linkedin.com/in/sergio-sena-cloud](https://www.linkedin.com/in/sergio-sena-cloud)😊✨
