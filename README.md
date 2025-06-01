# Visualizzatore API JSON

Questa applicazione consente di inserire un URL pubblico di un'API REST che restituisce dati in formato JSON e visualizzarne il contenuto.

# Tecnologie utilizzate

- React + TypeScript
- Ant Design (UI components)
- Vite (per il build tool moderno)
- LocalStorage per cronologia API
- Vercel per deploy

# Requisiti implementati:

- Input testuale per inserire l'URL dell'API.
- Pulsante per inviare la richiesta HTTP `GET`.
- Validazione dell’URL prima della chiamata.
- Visualizzazione dei dati JSON:
  - Tabella per array di oggetti.
  - Lista key-value per oggetti semplici.
  - Vista ad albero per oggetti/array annidati.
- Gestione completa degli errori (404, JSON non valido, timeout, ecc.).
- Spinner di caricamento durante la fetch dei dati.

# Funzionalità extra implementate:

- Cronologia delle chiamate API recenti con localStorage.
- Vista JSON "pretty-printed" espandibile/collassabile (con Collapse di Ant Design).
- Validazione immediata dell’URL inserito.

# Installazione e uso

1. Clona il repository
   git clone

2. Entra nella cartella
   cd visualizzatore-api

3. Installa le dipendenze
   npm install

4. Avvia l'app in sviluppo
   npm run dev

# Link visualizzazione online

https://visualizzatore-api-generico.vercel.app/
