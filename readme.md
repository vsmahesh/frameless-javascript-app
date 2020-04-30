# FL - Framework less

## Step 6

### Move Component html into an html file

- Refactor the header component
  - Move html to a different file
  - Webpack loader configuration for html import
    - `npm install -D html-loader`
    - changes in webpack.config.js
- Refactor the navigation component

### Goals from last step

- &#9745; Writing html in javascript! Not feeling good.
  <!-- - &#9745;&#9744; -->

### Problems

- CSS inside the html affecting other components
- DRY again
  - Setting the innerHTML from the html file
  - Line to Define the component. It is kind of repeating; isn't it?
- Limitations of the current modal

### Next Steps

- Shadow DOM

---

## Step 5

### Get rid of the component master register

- Define process should be inside the component itself
  - Move `customElements.define` into component js file
  - Find a workaround for tree-shaking
- ComponentModule will be just a module that wraps a set of components
  - Is this the same reason why angular also has a component array in the module?

### Goals from last step

- &#9744; Writing html in javascript! Not feeling good.

- &#9745; There is a master list of components; earlier model was better.
  <!-- - &#9745;&#9744; -->

### Problems

- Writing html in javascript! Not feeling good.

### Next Steps

- html in '.html' file & javascript in '.js' file

---

## Step 4 - B

### Improving code organisation

- Introducing `dist` folder for output
  - Stategy for copying static files
    - install webpack plugin `npm install -D copy-webpack-plugin`
    - webpack config changes
- Compile other applications as well
  - Use Logger
  - Configuring Webpack
- Refer web components the same way

### Goals from last step

- &#9745; Have to refering each component js files and its reference files into html
- &#9744; Writing html in javascript! Not feeling good.
  <!-- - &#9745;&#9744; -->

### Problems

- Writing html in javascript! Not feeling good.

- There is a master list of components; earlier model was better.

### Next Steps

- Get rid of the master list of components

---

## Step 4 - A

### Introducing module bundler

- Module bundler need a way to identify the dependencies
  - Useful by the IDE as well
  - ES Modules
    - https://exploringjs.com/es6/ch_modules.html
    - https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
  - Logger example
- Configuring Webpack
  - npm install & script configuration
    - `npm install -D webpack webpack-cli`
  - webpack.config.js

### Goals from last step

- &#9744;Have to refering each component js files and its reference files into html
  - The original problem is not solved; but now we have a way
- &#9744;Writing html in javascript! Not feeling good.
  <!-- - &#9745;&#9744; -->

### Problems

- Have to refering each component js files and its reference files into html
- Writing html in javascript! Not feeling good.
- Better way to organise the files

### Next Steps

- Improvements on code organisation

---

## Step 3 - B

### Let's improve our web components

- Improvements on the navigation component
  - Moving logic to ConnectedCallback
  - introduced logic to show selection based on active attribute
  - Creating elements instead of innerHtml
- Webcomponent for extending existing components
- Adding a library

### Goals from last step

- &#9745; Violation of DRY principle
  <!-- - &#9745;&#9744; -->

### Problems

- Have to refering each component js files and its reference files into html
- Writing html in javascript! Not feeling good.

### Next Steps

- Javascript Module bundler

---

## Step 3 - A

### Let's build web components

- Hello world component
- Bottom components

### Goals from last step

- &#9744; Violation of DRY principle
  - Achieved partially but there are problems
  <!-- - &#9745;&#9744; Stop this session -->

### Problems

- No way to set active status on a page level

### Next Steps

- More into Webcomponents

---

## Step 2

### Let's have a webserver

- npm - for package management
- Install http-server npm package
  - `npm install http-server`
  - `node_modules` folder & `package-lock.json` file
- How to start the server?
  - Initialize node project file
    - `npm init -y`
    - `package.json` file
  - Configure npm run command
    - `npm run serve`
- Adding .gitignore to exclude node_modules
  - `package.json` & `package-lock.json` are required

### Problems

- Violation DRY principle - https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

### Goals from last step

- &#9745; Introduce Webserver
<!-- - &#9744; Stop this session -->

### Next Steps

- Webcomponents - https://developer.mozilla.org/en-US/docs/Web/Web_Components

---

## Step 1

This is a simple mobile web that contains three pages - Home, Gallery, Contact and Settings.

- There is an src folder that contains everything.
- Use Ratchet as the style library - http://goratchet.com/getting-started/
- Home and Gallery pages loads data from placeholder APIs
- Contact and Settings page do nothing specific
- Each pages has its own html and code behind javascript

### Problems

- Unable to navigate to other pages by clicking the bottom link

### Next Steps

- Serve in a webserver
