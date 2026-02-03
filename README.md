# 🔍 Analisador de Texto

Aplicativo desenvolvido em **React Native (Expo)** para análise de palavras e frases, exibindo a quantidade de **vogais**, **consoantes** e **palíndromos** encontrados, em uma interface simples com tema escuro.

O projeto foi criado como prática de **lógica de programação**, **manipulação de strings** e **uso básico de estado no React Native**.

---

## ✨ Funcionalidades

- Inserção de palavras ou frases para análise
- Contagem de vogais e consoantes
- Identificação e listagem de palíndromos
- Interface com tema escuro e destaque visual para resultados

---

## 🧱 Tecnologias

- React Native (Expo)
- JavaScript
- React Hooks (`useState`)
- `FlatList` para renderização de listas

---

## 📂 Estrutura do projeto

```text
.
├── App.js                 # Componente principal
├── utils/
│   └── analisadorTexto.js # Funções de análise de texto
├── assets/                # Imagens ou GIFs do app (opcional)
├── components/            # Componentes reutilizáveis (se aplicável)
├── package.json
└── README.md
🚀 Como executar
Requer Node.js e Expo CLI instalados.

Instale as dependências:

npm install
Inicie o projeto:

npm start
Execute no ambiente desejado:

Android: npm run android

iOS: npm run ios

Web: npm run web

🧪 Scripts disponíveis
npm start — inicia o Expo

npm run android — executa no emulador Android

npm run ios — executa no simulador iOS

npm run web — executa no navegador
