# Title

## Value Proposition

**As a** user <br>
**I want to** add a movie to my watchlist <br>
**so that** I can keep track of movies I want to watch <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- There is a navigation bar that allows the user to navigate to the home page and the watchlist page
- The navigation bar is fixed on the bottom of the screen
- The navigation bar has a visual indicator of the current page
- The watchlist page has a list of movies that the user has added to their watchlist
- When the watchlist page is empty, the user should see a message that the watchlist is empty
- The user can select a movie on the watchlist page to see the movie details
- The user can add a movie to their watchlist by clicking on the "Add to Watchlist" button on the movie details page
- The user can remove a movie from their watchlist by clicking on the "Remove from Watchlist" button on the movie details page, when the movie is already in the watchlist

## Tasks

- Create a feature branch called watchlist
- Create a navigation bar component
- Add a Link for the home page and the watchlist page
- Add a visual indicator for the current page
- Render the navigation bar in the \_app.js
- Update the MovieDetails component and add a button to add the movie to the watchlist
- Create a switch to the button, which adds or removes the movie from the watchlist
- Create a WatchList component
- Reuse the MovieList component to render the watchlist
- Create a useState hook in the \_app.js to store the watchlist
- Create a function to add a movie to the watchlist
- Create a function to remove a movie from the watchlist
- Display a message when the watchlist is empty
- Add a button to go back to the home page
