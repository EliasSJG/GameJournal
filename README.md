# Game Journal
 A game app to track your games with a status, and add reviews and rating on them. 
## About The Project

## ✨ Features
- Add review and rating on games
- Add games
- Amount of games with diffrent status

## ✨ Future Features
- Search function
- Custom navbar
- Fully working editing function
  
## 🛠️ Tech Stack

- React Native
- Expo
- TypeScript

## 📁 Project Folder Structure

```plaintext
📦 .expo/
📦 app/
├── 📂 (tabs)/
│   ├── 📄 addGame.tsx
│   ├── 📄 index.tsx
│   ├── 📄 statistics.tsx
├── 📂 gamePage/
│   ├── 📄 [title].tsx
├── 📂 theme/
│   ├── 📄 colors.ts
│   ├── 📄 index.ts
└── 📄 _layout.tsx
│ 
│ 📦 components/
├── 📂 buttons/
│   ├── 📄 button.tsx
├── 📂 datePicker/
│   ├── 📄 datePicker.tsx
├── 📂 dropdown/
│   ├── 📄 statusPicker.tsx
├── 📂 gameCard/
│   ├── 📄 gameCard.tsx
├── 📂 input/
│   ├── 📄 input.tsx
│   ├── 📄 searchInput.tsx
├── 📂 statusSymbols/
│   ├── 📄 statusSymbol.tsx
└──── 📂 xpBar/
│   ├── 📄 xpBar.tsx
│
└─  📦 context/
│   ├── 📄 gameContext.tsx
│
└─ 📦 types/
│   ├── 📄 types.tsx



```

## 🚀 Getting Started

1. Clone the project

```bash
https://github.com/EliasSJG/GameJournal.git
```
```bash
cd GameJournal
```
```bash
npm install
```
```bash
npx expo start
```
OR if npx expo start doesnt work try
```bash
npx expo start --tunnel
```

## 📱 Running The App

Once running

Option 1: Expo Go

Install Expo Go on your iOS or Android device.

Scan the QR code that appears in your terminal.

Option 2: Android Emulator

Install Android Studio and create a virtual device.

Start the emulator.

Press a in the terminal to launch the app.

## 📄 License

This project is licensed under the MIT License.
