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