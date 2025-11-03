# Building Components! 

- Start our project how we did it in Chapter 1! 

- Adding Files in Angular via Static Files
    -Images, Sounds

- Angular Components
    - All Angular apps are made of multiple different components! 
    - Each component is designed to implement one "thing", in the app that is visible on the screen. 
    - A component wraps up all the HTML and code to make one little widget work correctly
    - A component can be reused multiple times in the same application. 
    - Components can be nested, or shown inside of each other
    - Every app has a component called the "App" component and it is always the most parent component
    - Each component has its own Component Class, Template, CSS Files and Spec File. 
    - It's smart to make a diagram of all of our components and how they interact with each other! 
    
- Creating a Component
    - Use ng generate component <name> in the command line to generate our component files
    - In order for this component to show on our screen we need to nest it inside of another. In case we need to nest it within the app component.

- How to nest a component inside of another
    - <app-card></app-card> use HTML to nest our component, and put this at the top of our parent component
    - Then we need to import our component into the parent .ts file. 
    - See App.ts for an example of us using the Card Import

- Selector
    - Anytime it sees the selector in the HTML element, it will create the component in the DOM. 
    - We need to have a Root component in the DOM so that Angular knows what to load, and this is called the Host Element, which contains all of our application HTML. 

- More on CSS Scoping
    - Our CSS files are scoped per the component, and our Components are tied to the specific CSS files

- Tying Data to a specific component
    - First create our data inside of our app component or the parent component. 
    - This can be grabbed from an array or from a API
    - Then we want to pass the data down to the cards

- Accepting Data from one component to another
    - In the HTML file we can use the property binding syntax to pass down data from one component to another. 
    - Pass our data from the parent class into the child component from the front end. 
    - It's important to make sure we pass the correct data type throughout the 2 components. See App and Cards for an example. 
    - For the child component to consume what is being passed down from the parent, we should use @Input and ngFor (in case what we are passing is an array)

- Building Lists (*ngFor)
    - ngFor which is nice since it will update based off of the items in the array
    - We can use Structural Directives which adds or removes HTML elements
    - mgFor ="let item of array" - here's the syntax!

- 2 notes for ngFor
    - our Array will be a direct reference to our component class, and we can also refer to different methods as well which would return an array of items. 

- Conditional Rendering
    -use @if(condition){HTML} for conditional rendoring instead of NgIf
    - We can likely use the @for as well
    
- CSS Files are subject to their components! so App.css will style all elements inside of the App component, same for Cards and Same for the Root