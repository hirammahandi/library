# Library App

This application is still in development, taking into account that the features of editing books and editing authors and doing some code refactoring have yet to be finished. Even so, all the functionalities that are in charge of managing the services with graphql are defined.
To edit books and authors, all that remains is to reuse the code to create books or authors as appropriate.

## Tools and Technologies

To mock a graphql server, the Baas (Backend as a Service) services of [Grafbase ](https://grafbase.com/) were used.
For the management of graphql on the client side, Apollo Client was used following good practices with the Nextjs framework for handling SSR (Server Side Render) and CSR (Client Side Render) requests, making use of the Apollo client cache management. For the styles of the interfaces, the liberia styled-components was used, with which reusable components were created simulating the UI framework. For the handling of forms, the react-hook-form library was used and for the validations the zod library. As part of the architecture, atomic-design was used together with the Model Container Presenter design pattern to abstract the implementation logic which allows for easier and more manageable implementation of unit tests.

> Language: Typescript
