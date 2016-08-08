# Tiny Build

Tired of dealing with a front-end mess for tiny websites or prototyping? Tiny Build aims to solve that problem.

Say hello to Tiny Build:

- NPM for package management (duh!)
- NPM to run the scripts
- Browserify to bundle the javascript
- Babel the ES6 to ES5 transpiler
- cssnext for transpiling the css
- React for UI components

## Run the scripts

Boot: Installs packages and builds ```npm run boot```

Boot and watch: Installs the packages and then watches for changes ```npm run boot:watch```

Build: Builds the project ```npm run build```

Watch: Watches the project and rebuilds ```npm run watch```

## Clean the slate

Wipe: Deletes the build and node_modules dirs ```npm run wipe```

Clean: Deletes just the build dir ```npm run clean```

## Server

Superstatic is a cool simple webserver that supports HTML pushState.

Start the webserver.

```superstatic -p 4000 public```

For single page apps add a ```superstatic.json``` file to the root of your project.

```
{
  "rewrites": [
    {
      "source": "**",
      "destination": "/index.html"
    }
  ]
}
```

