# Automated Pictures for Short Stories

Utilizing Open-AI's API (DALL-E model) to generate dynamic images to mimic illustrations you would see in stories that contain no pictures. 
Used MeaningCloud API to generate specific summaries of text that is pushed into the Open-AI's API prompt. Allows for quick, accurate, and automated results.

# Tech Stack
- React Native (Expo)
- MongoDB (to store books and user information)
- Node.js and Express

# To operate
- Retrieve an Open-AI API and MeaningCloud API key and store it in ./backend/.env
  ```js
   const OPEN_AI_KEY = 'ENTER YOUR API';
   ```
    ```js
   const MC_API = 'ENTER YOUR API';
   ```
- For iOS, install ngrok and create a temporary url connected to backend localhost. Then use...
  ```js
   expo-cli start --tunnel
   ```
- For web/android emulators...
    ```js
   npm start
   ```
