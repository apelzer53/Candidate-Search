# Candidate Search

This is a candidate search application that fetches and displays developer profiles from GitHub. Users can browse through candidates, save them for later review, or reject them. The app stores saved candidates using local storage.

## Features
- Fetches candidates from the GitHub API
- Displays candidate information including name, username, location, avatar, email, GitHub profile, and company
- Allows users to save candidates
- Provides an option to skip candidates
- Displays saved candidates on a separate page
- Persists saved candidates using local storage

## Technologies Used
- React
- TypeScript
- Vite
- React Router
- GitHub API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/apelzer53/Candidate-Search.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Candidate-Search
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create an `.env` file and add your GitHub Personal Access Token:
   ```bash
   VITE_GITHUB_TOKEN=your_personal_access_token
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment
This application is deployed on Render. To deploy manually, push your changes to the main branch, and Render will automatically redeploy the app.

For Render deployment, ensure your **start command** in the Render service settings is:
   ```bash
   npm run build && npm run preview
   ```

Also, ensure your `vite.config.ts` includes:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    allowedHosts: ['candidate-search-laxp.onrender.com'],
  },
});
```

## Usage
1. Open the app in your browser.
2. Browse candidates and view their profiles.
3. Click the **+ (Save)** button to add a candidate to your saved list.
4. Click the **- (Reject)** button to move to the next candidate.
5. Navigate to the **Saved Candidates** page to view saved profiles.

## Future Enhancements
- Implement filtering options (e.g., by location, company, or programming language)
- Add a backend to store saved candidates persistently
- Improve UI/UX with better animations and styling

## Link
https://candidate-search-laxp.onrender.com
<img width="1710" alt="Screenshot 2025-03-04 at 12 24 25 AM" src="https://github.com/user-attachments/assets/b42b9319-f71b-47f1-8215-f5a7be9ffbb4" />


<img width="1710" alt="Screenshot 2025-03-04 at 12 24 33 AM" src="https://github.com/user-attachments/assets/1ace825a-95db-4b34-b1a7-38290ccebf23" />

## License
This project is open-source and available under the [MIT License](LICENSE).

