# 🚀 Guia para Rodar o Projeto React Native com Expo

## 📌 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:

- **Node.js** 🟢 ([Baixar aqui](https://nodejs.org/))
- **Expo CLI** 🌎 (`npm install -g expo-cli`)
- **Android Studio** 🤖 ([Baixar aqui](https://developer.android.com/studio))
- **Emulador configurado** 📱 (ou dispositivo físico com o aplicativo Expo Go instalado)

---

## 🏁 Passo a Passo

### 1️⃣ Abrir o Emulador Android

1. **Abrir o Android Studio** ⚙️
2. Ir até **AVD Manager** (Android Virtual Device) 📱
3. Selecionar um emulador configurado e clicar em **Start** ▶️

💡 **Dica:** Se o AVD Manager não aparecer, acesse via terminal:
```sh
cd ~/Android/Sdk/emulator
./emulator -list-avds  # Lista os emuladores disponíveis
./emulator -avd NOME_DO_EMULADOR
```

---

### 2️⃣ Iniciar o Projeto Expo

1. Navegue até a pasta do projeto 📂
   ```sh
   cd caminho/do/projeto
   ```
2. Instale as dependências 🔄
   ```sh
   npm install
   ```
   ou, se estiver usando Yarn:
   ```sh
   yarn install
   ```

---

### 3️⃣ Iniciar o Servidor Expo

O **Expo Dev Server** precisa estar rodando antes de iniciar o aplicativo:
```sh
npx expo start
```

Isso abrirá uma interface no navegador onde você pode escolher rodar no **Emulador Android**, **iOS** (se estiver no Mac) ou em um dispositivo físico. ⚡

---

### 4️⃣ Rodar o Aplicativo no Emulador
Com o emulador ativo, pressione **"Run on Android device/emulator"** na interface do Expo ou execute:
```sh
npx expo run:android
```

🔄 Aguarde a compilação e pronto! O app será iniciado no emulador. 🎉

---

## 🛠️ Possíveis Erros e Soluções

❌ **Erro: "SDK location not found"**
🔹 Solução: Configure o caminho do SDK no `local.properties` do Android Studio:
```
sdk.dir=/Users/seu_usuario/Library/Android/sdk  # Mac/Linux
sdk.dir=C:\Users\seu_usuario\AppData\Local\Android\Sdk  # Windows
```

❌ **Erro: "No connected devices!"**
🔹 Solução: Certifique-se de que o emulador está ativo ou conecte um dispositivo físico com **Expo Go** instalado.

---

## 🎯 Comandos Úteis

| Comando | Descrição |
|---------|------------|
| `npx expo start` | Inicia o servidor do Expo 🚀 |
| `npx expo run:android` | Roda o app no emulador 🤖 |
| `adb devices` | Lista os dispositivos conectados 📱 |
| `npx expo logs` | Mostra logs do app no terminal 📜 |

---

💡 **Agora você está pronto para rodar seu app Expo no emulador!** 🚀

