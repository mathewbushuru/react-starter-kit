## Table Of Contents:

- 💻 Application Overview
- ⚙️ Project Configuration
- 🗄️ Project Structure
- 🧱 Components And Styling
- 📡 API Layer
- 🗃️ State Management
- 🧪 Testing
- ⚠️ Error Handling
- 🌐 Deployment

## 💻 Application Overview

[Visit the deployed app.](https://github.com/mathewbushuru/)

#### Getting Started with Codebase

Prerequisites:

- Yarn 1.22+

To set up the app execute the following commands

```bash
git clone <this_repo>
cd <this_repo>
cp .env.example .env
yarn install
```

In the project directory

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##### `yarn test`

Launches the test runner in the interactive watch mode.

##### `yarn build`

Builds the app for production to the `build` folder.

#### Data model

- User - can have one of these roles:

  - `GUEST` can:
    - visit ...

  - `USER` - can:
    - edit own profile
    - create/delete own ...
  - `ADMIN` can:
    - create/edit/delete ...
    - create/delete all ...
    - delete users
    - edit own profile

- ...

## ⚙️ Project Configuration

The application has been bootstrapped using `Create React App`.

#### Absolute imports

I have configured absolute imports so that imports in this react project work similar to NextJS imports. This makes it easier to move files around and avoid messy import paths such as `../../../../Component`. After moving a file, all imports will remain intact. Here is how I have configured it in this project:

In the `jsconfig.json` file:

```json
{
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["./src"]
}
```

We can then import a component without the relative slashes by starting from `src`. For example from anywhere in the project, we can use this:

`import { MainLayout } from "layouts";`

#### Routing

The app uses the `React-router v6.8.1`.

The root router (`appRouter`) for the app is found at `src/routes`. It uses the `createBrowserRouter` function to combine app-wide routes defined at `src/routes/app-routes.js` with all the feature specific routes such as the search routes defined at `src/features/search/routes`. The `appRouter` is used to create the `AppProvider` component that then wraps the whole app.

When defining the routes and their corresponding paths and elements, remember to also include an error element component that handles any errors that occur for that path.

If nested routes are needed, pass them as an array to the children key. Remember to include the `Outlet` component in the parent route if you want it to to be embedded in the parent component

Use `action` functions to define what happens when forms are submitted. As a result an example routes array would look like

```sh
const searchRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <GlobalErrorPage />,
    action: rootAction,
    children: [
      {
        errorElement: <ChildrenErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "dashboard",
            element: <Dashboard />,
            action: dashboardAction,
          },
          /* the rest of the routes */
        ],
      },
    ]
  },
];
```

To enable active link styling use `NavLink` instead of `Link`. When the user is at the url, the class name would be `active`.

```sh
<NavLink
  to={`/gmail`}
  className={({ isActive, isPending }) =>
    isActive
      ? "active"
      : isPending
      ? "loading"
      : ""
  }
>
  Home
</NavLink>
```

As you have noticed, I prefer to configure routes with objects but you can also do it with JSX elements as shown in react-router's documentation:

```sh
createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
```

## 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, etc.
|
+-- components        # shared components used across the entire application - app's component library
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- layout            # Global wrapper layouts containing for example the nav, footer
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers e.g react-router providers
|
+-- routes/pages      # any global routes configuration or pages
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- utils             # shared utility functions
```

We keep most of the code in the `features` directory. The feature-based folders contain domain specific code for those specific features. This makes it easy to maintain and scale the application.

The directory below shows an example feature

```sh
src/features/example-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- layout      # Feature specific layouts
|
+-- pages       # Pages that will be rendered on corresponding routes
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- utils       # utility functions for a specific feature
|
+-- index.js    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

We then import stuff from other features using:

`import {ExampleComponent} from "features/example-feature"`

Example features for a standard app include `/auth`, `/users`, etc.

## 🧱 Components And Styling

1. Keep things as close as possible to where it's being used

Keep components, functions, styles, close to components it is being used. In the `components` directory, each component should have its own folder with everything related to it

2. Use modularized styles (`Component.module.css`) and add all global styles to `index.css`

This prevents clashing of class names in the app. To use the css in the component:

`import styles from "Component.module.css"`
`<div className={styles.main} />`

3. Abstract shared components to `src/components` to be part of the app's component library.

Wrap third party components to adapt them to the applications needs

4. I prefer styling components from scratch instead of component libraries like MUI/AntD as it is easier to customize and understand how the whole app is working.

However if I have to, I prefer headless component libraries like Radix UI that have unstyled components

## 📡 API Layer

I am creating API request declarations on a feature by feature basis. For the example feature, its API can be found at `src/features/example-feature/example-api.js`

For this API to work, you need relevant environment variables. In particular your `.env` file needs

```sh
REACT_APP_SEARCH_API_URL=<API_URL>
...
```

These are used to set up the project at `src/config`. 

## 🗃️ State Management

Instead of maintaining a single centralized store, I'm using different types of state for different needs of the app to make it easy to maintain and scale

#### Component State

This is the state that only a component needs, and it is not meant to be shared anywhere else. But you can pass it as prop to children components if needed. Start from here and lift the state up if needed elsewhere. For this type of state, we need:

- `useState` - for simpler states that are independent
- `useReducer` - for more complex states where on a single action you want to update several pieces of state

#### Application State

This is the state that controls interactive parts of an application. Opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. Don't make everything global out of the box.

I prefer `Redux` with `Redux-toolkit` but React's `Context` also works.

#### Server Cache State

This is the state that comes from the server which is being cached on the client for further usage. It is possible to store remote data inside a state management store such as redux, but there are better solutions for that. I personally prefer `react-query` (REST+GraphQL)

#### Form State

This is a state that tracks users inputs in a form.

Forms in React can be controlled (`useState`) and uncontrolled (`useRef`). I'm using `React-router v6` `Form` component that wraps around html's form component so that form actions are tightly coupled with routing

#### URL State

State that is being kept in the address bar of the browser. It is usually tracked via url params (`/app/${dynamicParam}`) or query params (`/app?dynamicParam=1`). It is accessed and controlled via the routing solution `react-router-dom`.

## 🧪 Testing

I am using CRA's default testing set up: `Testing Library` and `Jest`

## ⚠️ Error Handling

The app uses React Router V6 for global error handling: Any uncaught or unhandled error does not break the app, instead a nice message is shown to the user before they are redirected.

## 🌐 Deployment

This project is hosted on Vercel. See a demo [here](https://googly-lovat.vercel.app/)
