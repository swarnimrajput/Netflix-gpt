# Netflix GPT

Netflix GPT is a React-based web application that mimics Netflix's interface, featuring movie recommendations and trailers. It integrates Google Firebase for authentication and TMDB's API for fetching movie data. Additionally, it uses Google Gemini AI to provide movie recommendations based on user input. The entire project is styled using Tailwind CSS.

## Features

- **User Authentication**: Sign up and sign in with Google Firebase.
- **Home Page**: Displays a list of movie cards fetched from TMDB's API.
- **Top-Rated Movie Trailer**: Plays a trailer of one of the top-rated movies on the homepage.
- **Movie Recommendations**: Uses Google Gemini AI to suggest top 5 movies based on user search queries.
- **State Management**: Utilizes Redux for efficient state management.
- **Tailwind CSS**: Styled using Tailwind CSS for rapid and responsive design.

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
2.Install Dependencies:
npm install 

3.Create Firebase Project:
Go to the Firebase Console.
Create a new project.
Set up authentication (Google sign-in).
Obtain your Firebase config object and replace the placeholders in the firebaseConfig.js file.

4.Set Up TMDB API:
Go to the TMDB website.
Sign up and get your API key.
Replace the placeholder in the tmdbConfig.js file with your API key.

5.Set Up Google Gemini AI:
Obtain the necessary API key or credentials for Google Gemini AI.
Replace the placeholder in the geminiConfig.js file with your API key.

6.Install Tailwind CSS:
npm install -D tailwindcss
npx tailwindcss init

7.Start the Application:
npm start

Usage

Sign Up/Sign In: Use Google Firebase authentication to sign up or sign in.
Home Page: View a list of movies displayed in a Netflix-style UI.
Top-Rated Movie Trailer: Watch the trailer of a top-rated movie on the homepage.
Get Recommendations: Use the GPT feature to get movie recommendations. For example, search for "funny Indian movies" and view the results as cards with movie posters, titles, and details.
State Management: All application state is efficiently managed using Redux.


Dependencies
React: Frontend library.
Redux: State management.
Firebase: Authentication and database.
TMDB API: Movie data.
Google Gemini AI: AI-based recommendations.
Tailwind CSS: Utility-first CSS framework for styling.
Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes.

License

This project is licensed under the MIT License.

Acknowledgments

TMDB for the movie data.
Firebase for authentication and database services.
Google Gemini AI for the AI recommendations.
Tailwind CSS for the styling framework

