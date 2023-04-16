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

To make it your own, run:
```sh
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

To start the app, in the project directory run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`yarn build`

Builds the app for production to the `build` folder.

#### Using UI Libraries 

To set up a UI library add the library's context provider to `./providers/index.jsx`

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

The application has been bootstrapped  using `Vite`

#### Absolute imports

I have configured absolute imports to make it easier to move files around and avoid messy import paths such as `../../../../Component`. After moving a file, all imports will remain intact. Here is how I have configured it in this project:

In the `vite.config.ts` file, added:
```sh
resolve: {
    alias: {
      "@": "/src",
    },
  },
```

and in the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
}
```

We can then import a component without the relative slashes by starting from `src`. For example from anywhere in the project, we can use this:

`import { MainLayout } from "@/layouts";`

#### Routing

The app uses the `React-router v6.10.0`.

The root router (`appRouter`) for the app is found at `src/routes`. It uses the `createBrowserRouter` function to combine app-wide routes defined at `src/routes/app-routes.js` with all the feature specific routes such as the example-feature routes defined at `src/features/example-feature/routes`. The `appRouter` is used to create the `AppProvider` component that then wraps the whole app.

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
+-- globalPages       # e.g global error page.
|
+-- hooks             # shared hooks used across the entire application
|
+-- layout            # Global wrapper layouts containing for example the nav, footer
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers e.g router providers, state providers, UI library providers, etc.
|
+-- routes            # any global routes configuration or pages
|
+-- stores            # global redux state stores
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
+-- api         # exported API request declarations related to a specific feature
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

`import {ExampleComponent} from "@/features/example-feature"`

Example features for a standard app include `/auth`, `/users`, etc.

## 🧱 Components And Styling

1. Keep things as close as possible to where it's being used

Keep components, functions, styles, close to components it is being used. In the `components` directory, each component should have its own folder with everything related to it

2. Use modularized styles (`Component.module.css`) and add all global styles to `index.css`

This prevents clashing of class names in the app. To use the css in the component:

`import styles from "Component.module.css"`
`<div className={styles.main} />`

3. Abstract shared components to `src/components` to be part of the app's component library.

4. To use UI Libraries, replace the relevant provider in `./providers` to use the one you've chosen. I currently have providers for Chakra and Mantine.

Wrap third party components to adapt them to the applications needs.

## 📡 API Layer

I am creating API request declarations on a feature by feature basis. For the example feature, its API can be found at `src/features/example-feature/example-api.js`

For this API to work, you need relevant environment variables. For example your `.env` file needs

```sh
VITE_API_URL=<API_URL>
...
```

These are used to set up the project at `src/config`.

## 🗃️ State Management

Instead of maintaining a single centralized store, I'm using different types of state for different needs of the app to make it easy to maintain and scale

#### Component State

This is the state that only a component needs, and it is not meant to be shared anywhere else. But you can pass it as prop to children components if needed. Start from here and lift the state up if needed elsewhere. For this type of state, we need:

- `useState` - for simpler states that are independent
- Redux's `useSelector/useDispatch` - for more complex states.

#### Application State

This is the state that controls interactive parts of an application. Opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. Don't make everything global out of the box.

I prefer `Redux` with `Redux-toolkit`. The project already has redux toolkit set up to manage global state at `src/stores/redux/globalStore.js`.

Each individual feature then has individual slices. An example redux slice is shown in `src/features/example-feature/counterSlice.js`

#### Server Cache State

This is the state that comes from the server which is being cached on the client for further usage. It is possible to store remote data inside a state management store such as redux, but there are better solutions for that. I personally prefer `react-query` (REST+GraphQL)

#### Form State

This is a state that tracks users inputs in a form.

Forms in React can be controlled (`useState`) and uncontrolled (`useRef`). I'm using `React-router v6` `Form` component that wraps around html's form component so that form actions are tightly coupled with routing

#### URL State

State that is being kept in the address bar of the browser. It is usually tracked via url params (`/app/${dynamicParam}`) or query params (`/app?dynamicParam=1`). It is accessed and controlled via the routing solution `react-router-dom`.

## 🧪 Testing

I plan to set up `Vitest` some time in the future.

## ⚠️ Error Handling

The app uses React Router V6 for global error handling: Any uncaught or unhandled error does not break the app, instead a nice message is shown to the user before they are redirected.

## 🌐 Deployment

Some options for hosting the production build of this app are:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Google Firebase Hosting](https://firebase.google.com/docs/hosting)
- etc.
