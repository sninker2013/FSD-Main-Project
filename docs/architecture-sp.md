# Architecture Layout Document - Shannon

# Specific Uses:

## Hooks

### useFriendsInput

1. What does this hook do?
- This hook takes the input from the Friends Form and makes it so that you don't need to reset the input box.

2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- I decided on what logic to include in that implementation by looking at what the logic that I used for lab-3.1 which we also needed to create an input for a form.

- It correctly separate solution concerns by letting the hook take care of the useState so that I don't need to keep on setting the useState so that it is easier
to use and change the input without having to worry about missing any of the useStates.

3. Where is this implementation made use of in the project and how?

- The implementation is made use of in the project in the friends-form.tsx file, the way that I used it is that I used it to replace the useState that I had originally
had implemented in the the friends-form file to allow the friends-file to work correctly.

## Services

### friendsService

1. What does this service do?

- This service implements the validation logic to the friends-form.

2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- How I decided on what logic I included in the implementation was that I took what I wanted to check was valid from the friends-form and
then took that structure to the friendsService so that I could than validate it. It correctly separate solution concerns because with the
friendsService I could than reuse the validation that I have created without having to place it directly in the files where I would want said
interaction to take place in.

3. Where is this implementation made use of in the project and how?

- The implementation is made use of in the friends-form file where it checks the validation for the friends-form, where if the input is valid
it will allow the form to submit and if it doesn't pass validation the form will not be allowed to submit and it will tell you that something is
wrong beneath the form.

### searchService

1. What does this service do?

- This service checks the validation for the search.

2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- I decided to include the validation logic to the implementation so that if we were to have another file that needed to use
the search validation it it be more easily implemented if it is in its own service than just having it attached in another way.

- It correctly separates concerns because it takes all of the logic necessary to validate for the search functions and keeps all 
of the validation together so that it can be more easily used in other places if that was necessary.

3. Where is this implementation made use of in the project and how?

- The implementation is made use of in the useSearch hook where it checks if the input that a user has put in is correct and if it is
than it will search and if it isn't it will get the user to try again.

## Repositories

### friendsRepo

1. What does this repository do?

- This repository has the CRUD functions and a function that initializes the friendsdata.

- The initializeFriends takes the friendsData that has been stored in the data folder and initializes it in the file.

- The getFriends function just takes the friendsData and returns it as a list on the page.

- The addFriend function takes the logic used to create a new Friend so that you can create a friend.

- The updateFriendFavourite updates whether or not the friend has been favourited or not.

- The deleteFriend deletes a friend

2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

- How I decided on which logic to include in the implementation I looked at what logic I originally had in the friends-list file and the friends-form file and saw
what logic that I used to get the friends list to show on the page and how to create a new friend in the friends-form file.

- How it correctly separate solution concerns is that I used the repo to create the functions that I would need or had been using within the friends-list file originally
like the getFriends in the friends_list file is now in the friendsRepo, I did this so that if I needed to use any of the CRUD functions in another file I would be able 
to just use the repository and use that to use any of the CRUD functions that I needed to use.

3. Where is this implementation made use of in the project and how?

- This implementation of the CRUD functions are made use of in the friends-list file and replaces the original functions that I had in the friends_list file that would get, create,
updateFriendsFavourite, and deleteFriend from the friends list that I created on the page.