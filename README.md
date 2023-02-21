# My React Starter Kit

I have spun up a new React app so many times and it always involves the same time-consuming process - remove boilerplate, add my preferred directory structure, etc.

This repo is just my starting point for future projects following my examples I have found on the web and my preferences on how to build react apps. I plan to use this to also use this to keep my custom hooks, components, util functions, etc.


## Table Of Contents:

- 💻 Application Overview
- ⚙️ Project Configuration
- 🗄️ Project Structure
- 🧱 Components And Styling
- 📡 API Layer
- 🗃️ State Management
- 🧪 Testing

## 💻 Application Overview

...
[Demo](https://mathewbushuru.me/#portfolio)

### Data model

- User - can have one of these roles:

  - `ADMIN` can:
    - create/edit/delete ...
    - create/delete all ...
    - delete users
    - edit own profile
  - `USER` - can:
    - edit own profile
    - create/delete own ...

- ...

### Getting Started with Codebase

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

## ⚙️ Project Configuration

The application has been bootstrapped using `Create React App` for simplicity.

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

We can then import a component without the relative slashes by starting from `src`. For example from anywhere in the  project, we can use this:

`import { MainLayout } from "layouts";`

## 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- layout            # Global wrapper layouts containing eg nav, footer
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- pages             # screens/web pages in the app
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- utils             # shared utility functions
```

We keep most of the code in the `features` folder which contains different feature-based things. The feature-based folders contain domain specific code for those specific features. This makes it easy to maintain and scale the application .

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
+-- layout      # Feature specific layouts containing eg nav, footer
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

Wrap third party components to adapt them to the applications needs

4. I prefer styling components from scratch instead of component libraries like MUI/AntD as it is easier to customize and understand how the whole app is working.

However if I have to, I prefer headless component libraries like Radix UI that have unstyled components

## 📡 API Layer

...

## 🗃️ State Management

There is no need to keep all of the state in a single centralized store. There are different needs for different types of state that can be split into several types:

#### Component State

This is the state that only a component needs, and it is not meant to be shared anywhere else. But you can pass it as prop to children components if needed. Most of the time, you want to start from here and lift the state up if needed elsewhere. For this type of state, you will usually need:

- useState - for simpler states that are independent
- useReducer - for more complex states where on a single action you want to update several pieces of state

#### Application State

This is the state that controls interactive parts of an application. Opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. Don't make everything global out of the box.

I prefer Redux with Redux Toolkit but React's Context also works.

#### Server Cache State

This is the state that comes from the server which is being cached on the client for further usage. It is possible to store remote data inside a state management store such as redux, but there are better solutions for that. I personally prefer `react-query` (REST+GraphQL)

#### Form State

This is a state that tracks users inputs in a form.

Forms in React can be controlled (`useState`) and uncontrolled (`useRef`). In addition to just using React, some other solutions include

- React Hook Form
- Formik
- React Final Form

#### URL State

State that is being kept in the address bar of the browser. It is usually tracked via url params (`/app/${dynamicParam}`) or query params (`/app?dynamicParam=1`). It can be accessed and controlled via your routing solution such as `react-router-dom`.

## 🧪 Testing

- Jest
- Testing Library
  ...
