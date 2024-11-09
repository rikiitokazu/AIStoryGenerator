# About this project

Programmed a mobile application using Open-AI's API (DALL-E model) to generate dynamic images for stories that do not have illustrations.

Used MeaningCloud API to generate specific summaries of text that is pushed into the Open-AI's API prompt. Allows for quick, accurate, and automated results.

# Tech Stack
- React Native (Expo)
- MongoDB (to store books and user information)
- Node.js and Express

# To operate
- Retrieve an Open-AI API and MeaningCloud API key and store it in ./backend/.env
  ```js
  const OPEN_AI_API = 'ENTER YOUR API';
   ```
    ```js
   const MC_API = 'ENTER YOUR API';
   ```
- For iOS, install ngrok to create backend localhost. Then use...
  ```js
  expo-cli start --tunnel
   ```
- For web/android emulators...
    ```js
   npm start
   ```

# Roadmap
- [x] Include more genres
- [x] Increase accuracy/consistency of images
- [x] Include more books
- [ ] Include a component where a user can input prompts for a customizable story
- [ ] Add user component that allows pdfs to be extracted
