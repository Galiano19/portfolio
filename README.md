# portfolio

-- Following informtion is just to note decision i've been taking, this need to be rewritten:

- add a subfolder portfolio-app because the project can be extended with a backend in further iterations
- decided to dynamically route the projects by ID in Admin dashboard (less url friendly, but no need to make it url friendly for the dashboard)
- decided to add console.errors in fetchings for readability in the browser, a better strategy could be explore for that
- decided to add mapper for the response of the API in order to migrate from the mockapi to a real one in the future the safest way possible
- useProjects is merefully Tanstack oriented, for the client side part, therefore, testing is add in the fetching functions and mapping part alone
- project listing under Projects is SSR since content wont change that much
- added picsum.photos as source of images in config for mocking purposes
- To improve: create an image component using Image from NextJs, so if the requests fails, a placeholder can be displayed
