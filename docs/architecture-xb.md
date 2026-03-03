# Implementation Documentation

## useGames Hook

**What does this hook do?**
Fetches games from GameService, optionally filters them, and manages the games state in React. Returns games array, error state, and a toggleFeaturedGame function.

**How did you decide what logic to include and how does it separate concerns?**
The hook handles only React state management and data management. Business logic is delegated to GameService and data access to GameRepository. Logic for the hook was included based on what is required by components that implement it.

**Where is this implementation made use of in the project and how?**
The PopularGames component uses it to fetch and display only featured games. GameListPage uses it to fetch games with dynamic filtering options. The hook re-fetches data when dependencies change or when toggleFeaturedGame is called.

## gameService Module

**What does this service do?**
gameService provides validated game operations: fetchGames, fetchGameById, addGame, removeGame, toggleFeaturedGame, and updateGame. Validates input (like checking game title is not empty) and delegates to GameRepository.

**How did you decide what logic to include and how does it separate concerns?**
The service validates inputs before passing them to the repository, keeping all business rules in one layer. The majority of the logic in the service is not currently being used by the application's components, instead being added in case they are needed in future sprint additions.

**Where is this implementation made use of in the project and how?**
gameService is called by useGames hook for all game operations. When useGames needs games, it calls GameService.fetchGames(). When toggling featured status, useGames calls GameService.toggleFeaturedGame(). Service then calls the associated repository methods to actually perform the operations.

## gameRepo Module

**What does this repository do?**
Handles all data access for games: fetchGames, fetchGameById, addGame, removeGame, toggleFeaturedGame, and updateGame. Currently reads from sample data in gameData.ts, but may make use of data from an API in the future.

**How did you decide what logic to include and how does it separate concerns?**
The repository only handles data access, with no validation or business logic. This isolation means the data source can change (from sample data to API to database) without affecting GameService or components. Logic was implemented with the same thought process as gameService, most of the functionality isn't used at the moment, but may be in the future.

**Where is this implementation made use of in the project and how?**
Only called by GameService methods. GameService validates input first, then calls the appropriate repository method. Repository returns raw game objects. Example: GameService validates a game title, then calls GameRepo.addGame() to create it.
