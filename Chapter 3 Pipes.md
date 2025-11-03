# Mastering Pipes!

- Pipes Overview

- Pipes
    - Functions that format data for use in a template
    - Only used in a template
    - Some pipes are built into Angular (check the API for this info)
    - We can build our own pipes very easily
    - Like many other angular features, you do not have to use pipes, but they are recommended!

- What pipes come with ANGULAR
    - These are the functions coming from the Angular API
    - We can use string | pipe, import it in our component, then we can use it in our app. 
    - Use the API to see how to use the pipes, but they are essentially premade format functions with Pipe in the name. We must import them inorder to use them! 
    - Search for pipe examples but most of this comes from the Angular API

- JSON Pipe
    - Used for debugging purposes, and takes some data structure and will display it as JSON, similar to a console log
    - Allows us to print out our data as JSON on the front end

- Creating Custom Pipes
    - In our command line we can run ng generate pipe "pipename"
    - Super useful for transforming data!
    - We can also provide some custom arguments to customize our pipes even more

- Neat things about pipes: 
    - We can use pipes literally anywhere in our template, and we can chain them like so
    - value | pipe1: 'stuff' | pipe2: 'stuff'