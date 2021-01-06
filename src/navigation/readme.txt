1. As the name suggests, all the routing logic resides here.
2. Our app uses “react-router-dom” for routing implementation.
3. Mainly 2 types of routes are included, public & private, where private being the ones that require authentication.
4. “RouterConfig.js” will have all the routes of the application defined within at one place.
5. “PrivatRoute.js” is a component to add a check for user authentication for secure/private routes.
6. CONSTANTS.js consists of all the constants for various available routes within our app. Reason is simply to avoid typos and easy renaming of routes when required.
7. “/components” directory can be added to hold all the navigation specific components like header, nav-bar, side navbar, like so