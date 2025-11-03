# Restarting Angular Course!

    - Setting Up Git!
    - Run a npm line for angular, it's globally installed so we shouldn't need too many extra things! 

    - Generating a new project:
        -ng new <app name> and use this inside of our terminal, then answer the relevant questions

    - To start a new project we can use npm start, to stop a project we will use Control + C

    - Updating A Component Template
        - Templates are just HTML files and HTML code! 
        - We can update a template a few ways: 
            - We can use the handlebar syntax {{method or property from class}}
            - We can set the value: <input [value] = "property or method">
            - We can set up event listeners: <button (click)="method()">

    - Using Event Listeners! 
        - On the element we can use "() = methodName()" and each time that specific event runs it will run the method! 
        - For input events we must use this for example: (input)="onChangeLength($event)"
        - We need the $ to access the event object for the elements
        - We can also use: (input)="onChangeLength($event.target.value)


    - How to use Bulma with Angular: 
        - NPM Install Bulma
        - Read Docs


    -Structural Directive
        -Allows us to toggle certain elements based on a condition
        -Show or hide a element in our template
        -Adds or Removes HTML Elements
        -Can also write our own Directives as well

    -Attribute Directive
        - Changes the properties of the HTML element it gets applied to
        - Can also write our own Directives as well

    - Deploying our Angular Apps
        - To share our applications we can easily deploy our application called now.sh via the command line
        - npm i now -g now so that it installs globally
        - Then after log in we can run "now", then it will deploy everything 
        - This can be done via Docker or other Deployment apps too but Now seems to be the easiest. 

    - Terminogy Review
        - Component Template: Contains the HTML that gets displayed
        - Component Class: Contains code to run when important events occur
        - Property Binding: Sets a property on a HTML element
        - Event Binding: Sets up an event handler on an HTML element
        - Interpolation: Prints out information in a template, can access any property or method from our component class
            - {{length}} for example
        - Structural Directive: HTML elements that are shown or hidden based on *ngIf
    