# StriveM7D4
Jobs Search Engine
    You are in charge of building a "Search Engine" for Job Posting.
    The application should have a search page where the user can set the position (or tech) and the location.
    
   *START FROM YESTERDAY'S WORK*
    It's time to split our single reducer into multiple ones and introduce redux-thunk in our app for performing asynchronous action dispatching.
    Create two separate reducers: one will continue to store our favourites, and the other will be dedicated to host the array coming from the jobs search results.
    To fill this portion of the redux store, move your fetch method into a thunk action creator like we did this morning for dispatching the right action just when the search results are fully loaded.
    Keep intact the rest of the functionalities, and if you didn't already, give the user the ability to remove a job from the favourites list.