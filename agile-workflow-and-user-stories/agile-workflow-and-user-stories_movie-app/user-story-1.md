# Title

## Value Proposition

**As a** user <br>
**I want to** see a list of movies <br>
**so that** I can find a movie to watch <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- On the home page, the user should see a list of movies
- Each movie should have a title, a poster image, and a rating
- If there is an loading error, the user should see a message

## Tasks

- Create a feature branch called movie-list
- Fetch the movies from the DB API
- Implement an error handling with a message if there is a loading issue
- Create a Movie component, which renders the movie title, poster image, and rating
- Create a MovieList component, in which a mapping function is used to render the Movie component for each movie
- Render the MovieList component in the Home component
