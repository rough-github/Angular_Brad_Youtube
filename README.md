# Angular_Brad_Youtube
Angular Crash Course of Brad on Youtube.

## Let's study RxJS
Qiita -> https://qiita.com/agajo/items/7942743a0130f7a0f30b

## What s Angular?
Angular is an application design framework and development platform for creating efficient and sophisticated single-page-apps.

* Angular, like other frontend frameworks, is generally used to create single-page apps that run on the client, but can be used to create full stack applications by making HTTP requests to a backend server(eg. MERN stack)
* Angular can be run on the server-side with something like Angular Universal

## Why use Angular
* Create dynamic frontend apps & UIs
* Full featured framework (router, http, etc)
* Integrated TypeScript (optional)
* RxJS - efficient, asynchronous programming
* Test-friendly
* Popular in enterprise business

## Angular Components
Components are pieces of the UI including the template(html), ligic and styling  
Components are resusable and can be embedded into the template as an XML-like tag

## Angular Serviecs
Angular distinguishs components from services to increase modularity and reusability  

By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient  

A components can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console

## Angular CLI
Standard tooling for Angular development

* Command line interface for creating Angular apps

```txt
npm i -g @angular/cli
```

```txt
ng new my-app
```

* Dev server and easy production build
* Commands to generate componnets, services, etc