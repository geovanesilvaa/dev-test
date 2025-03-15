# 🚀 Guia para Rodar o Projeto React.js

## 📌 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:

- **Node.js** 🟢 ([Baixar aqui](https://nodejs.org/))
- **Gerenciador de pacotes** (NPM ou Yarn)
- **Um navegador atualizado** 🌐 (Google Chrome, Firefox, Edge, etc.)

---

## 🏁 Passo a Passo

### 1️⃣ Criar ou Navegar até o Projeto React.js

1. Se ainda não tem um projeto, crie um com Create React App:
   ```sh
   npx create-react-app meu-projeto
   cd meu-projeto
   ```
2. Se já tem um projeto, navegue até a pasta do projeto:
   ```sh
   cd caminho/do/projeto
   ```

---

### 2️⃣ Instalar Dependências

Se ainda não instalou as dependências do projeto, execute:
```sh
npm install
```
ou, se estiver usando Yarn:
```sh
yarn install
```

---

### 3️⃣ Iniciar o Servidor de Desenvolvimento

Para rodar o projeto localmente, execute:
```sh
npm start
```
ou
```sh
yarn start
```

Isso abrirá automaticamente o navegador em `http://localhost:3000/`, onde você verá seu app React.js rodando. 🎉

---

## 🛠️ Possíveis Erros e Soluções

❌ **Erro: "Port 3000 already in use"**
🔹 Solução: Tente rodar o projeto em outra porta:
```sh
PORT=3001 npm start
```

❌ **Erro: "Module not found"**
🔹 Solução: Reinstale as dependências do projeto:
```sh
rm -rf node_modules package-lock.json && npm install
```

❌ **Erro: "Browserslist: caniuse-lite is outdated"**
🔹 Solução: Atualize o banco de dados do Browserslist:
```sh
npx update-browserslist-db@latest
```

---

## 🎯 Comandos Úteis

| Comando | Descrição |
|---------|------------|
| `npm start` | Inicia o servidor de desenvolvimento 🚀 |
| `npm run build` | Gera a versão otimizada para produção 📦 |
| `npm test` | Roda os testes configurados 🧪 |
| `npm run lint` | Verifica possíveis erros de código 🔍 |

---

💡 **Agora você está pronto para rodar seu projeto React.js no navegador!** 🚀

