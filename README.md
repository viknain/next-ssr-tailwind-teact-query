

### How to start? ###

* yarn (will install all dependencies)
* yarn dev (Browse the app on: http://localhost:3000/)

### How to create components/pages? ###

* For a new page always create under folder "pages". File name will act as route for ex: index.js will act as home route, pages/my-list/index.js will act as http://localhost:3000/my-list
* For common styling to all pages please user layout from components
* Different section of page will go to component folder.
* Shared library: Please use the folder shared/ui-components to create the common components like Button, Input, Checkbox etc. Create new folder 
* helper functions: Please use shared/utils/helper/index.ts to crate your functions like(Converting data or some data logic)
* API services and api calling: To call our backend there is common axios hook created with name useAxios inside shared/utils/services/useAxios.ts
* Keep all api routes seperate as per page under shared/utils/services/hooks/[pageName].ts

### Styling ###

* For colors use the theme varibale defined in /styles/themes/default/default.scss
* For every component create a seperate scss file in same folder where component is created
* For global stylling use the globals.scss file

### Redux/PersistorGate ###

* We are using readux with persistorgate(To maintain the redux state even if page get refreshed)
* If you want persist and data then whitelist your reducer in store.ts

### TS types and interfaces ###

* Use file shares/types/index.ts to define interfaces and types

### Fonst and assets ###

* Use public directory to save the assets and fonts