Server-side template with NextJS, Express and Babel

Check:
1. For beginners: for learning purposes
2. Setup guide: for template

1. For beginners (Do it yourself): 
This template is taken from: https://developerhandbook.com/react/getting-started-nextjs/ (without babel)Credits to developer: Jon Preece. Thanks. 

1. Set up next create app (using yarn) you can change to npm 

yarn create next-app 
--it will ask your project name

2. Install express 
-- To run express and next tgether the json file needs to contain the two dependencies

--disadvantage: All dependencies are in one json file (backend and frontend)

use: yarn add express 

3. create a folder called server (optional name)

4. create index.js and set up express (use code from server/index.js as reference)

5. Change dev :"next dev" for "node server/index.js" (it reference our server with calls our app)

6. run using yarn dev (or any other setting)

--With nodemon settings 

1. Add nodemon: yarn add --dev nodemon
2. Create a nodemon.json file (add settings code)
--understand nodemon 
    a. watch = check the file server for changes 
    b. exec = execute node server/index.js
    c. ext = find any extension with js
3. Update the packages.json (add nodemon in dev)
4. nodemon will connect to the json file 

--With babel settings  
1. Add the following dependencies
@babel/core @babel/node @babel/preset-env
as dependencies 

2. Create a .babelrc (copy the sample code)
--understanding .babelrc
    a. presets: preset environment / add the features we need to this environment
    b. plugins: use to transform other syntax in the projects (in this case jsx)

3. Add babel-node instead of node in nodemon 
4. Change variables require to import 
5. Execute the server: yarn dev