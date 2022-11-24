# Install Angular if you haven't before
npm install -g @angular/cli

# Create a blank new Angular app with Angular CLI
ng new todo-list --routing --styles=scss
cd todo-list

# Install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -> generates tailwind.config.js

#Add the paths to all of your template files in your tailwind.config.js file.
content: [
    "./src/**/*.{html,ts}",
],

# Add the Tailwind directives to your CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

#Use the CLI to generate some components and a service
ng generate component
ng generate service
