Cats of Reddit

Target: 60-90 minutes

Use create-react-app to create a boilerplate React project and add Redux.  Feel free to add any other npm module dependencies you are comfortable with when building.


Create a single page react-app (no routing or backend required) that fetches a list of cat posts from reddit and displays the titles of the top 20

https://www.reddit.com/r/cats/top/.json?count=20

Clicking on a post title should open it on reddit.com in a new tab.  

Place a “pin” icon to the left of each title.  

Allow the user to click the “pin” icon to indicate they have saved that post.  Saved posts should display their pin in an active state and move to the top of the list - unfavorited posts should display below any pinned posts.  You can use font-awesome, material design, or your favorite icon-font/svg library for this.

Save the list of all pinned posts in redux.  Redux should back up its saved state into local storage.

When the page refreshes, hydrate the redux store with any previously saved redux state from local storage.

On load, the app should display any previously pinned posts still at the top of the list, even if those posts are no longer returned from reddit.  The post should not occur a second time in the results returned from reddit.  The pinning can be modified further, and persist between page refreshes.

Deliver the results in a compressed archive (.gz or .zip) without node_modules included.  The app should start by someone uncompressing the archive, changing into the directory, and running `yarn && yarn start`