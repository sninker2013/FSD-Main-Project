# Architecture Layout - D Synkiw

## Hooks

### useReviews

1. This hook is responsible for keeping reviews in a consistent state, as well as handling the creation of a new review with the form. notably it does not handle any validation.

2. The logic that is included here is simply to be a link between the reviews state, the service/repository that interacts with it, and any component that utilizes reviews, the only logic utilized here is using useEffect to update the reviews state when this hook is rendered.

3. For now, this hook is used in the review page of the website, displaying all of the reviews in the data, in the future, this can be utilized to display reviews from specific users or games.

### useSearch

1. This hook manages searches that are made, probably on a searchBar component, it can pass the search to the search service for validation, as well as navigate to a new page with the search results with the newPageSearch constant, though I'm not 100% sold on my implementation of that.

2. The logic that was used in this hook is to keep the search stateValue state, send the search to the service, and navigate to a new page if desired. These are all very reusable logistics, it can be used when searching for friends usernames, or games, publishers, etc.

3. This hook is used for both of the search bars in our function, the one in the landing page constantly updates (after the debouncer allows it) with games that match the search term, while the search bar in the header opens a new page with the matching games only when the search button is clicked using newPageSearch.

## Services

### reviewService

1. The review servie handles the business logic of reviews, this can be the data that is passed from a repository, or from the user when they use a form to make a review.

2. The logic used here is very simple. Any validation that needs to be made runs through here, for now this is simply the form validation, but there may need to be more once the repository uses external data.

3. This service is used in between calls to the repository layer, in case any validation is required. As well as before the form is submitted to confirm the form to write a review is valid.

## Repositories

### reviewRepo

1. This repository gathers and manipulates the reviews data.

2. This logic is only concerned with interacting with the Review objects, for example, when a review is submitted with the form, it is the repository that turns that into a Review object and will eventually save it to a database.

3. So far it only creates review objects and returns them for the form submission, and gets the test data from the data folder when the page is rendered.
