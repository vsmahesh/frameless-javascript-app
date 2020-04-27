# FL - Framework less

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
