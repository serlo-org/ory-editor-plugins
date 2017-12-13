# ory-editor-plugins

This is a monorepo for all plugins for the [Ory Editor](https://github.com/ory/editor) created for the E-Learning Website [www.serlo.org](https://de.serlo.org).

## Run the example page
To run the example page run the following commands:

```
yarn install
yarn start
```

## Adding new plugins
### File structure
To add a new plugin you create a folder in `plugins/layout` for LayoutPlugins or `plugins/content` for ContentPlugins
(details for these types are documented by Ory in the [User Guide on gitbook](https://ory.gitbooks.io/editor/content/#how-it-works).)

In the folder you need a few things (they can be copied as templates from the folder `plugins/template`:

- `package.json`: with `name` as used for import, `"version": "0.0.0"` (so it is resolved correctly by `lerna`), scripts as in the other plugins and `peerDependencies` to `react` and `react-dom`
- `README.md`: with the package name for later npm export
- `src` folder with the source files for the plugin.

### Test new plugins in the example
For testing it in the example add to the `example/package.json` a dependency to your package with version `0.0.0`,
 import it using the package name and then add it to `const plugins`.

Thats it. Run the code as above with
```
yarn install
yarn start
```

It will build the scripts in watch mode, and automatically reload the page on file changes.

## FAQ
### What does Lerna do?
Lerna is a tool to manage multiple packages in one repository. (In our case the multiple packages are yarn workspaces defined in the `package.json`). We want to be able to import every plugin on its own, so we need a tool which links the different packages together.
This is where Lerna comes into play. It automatically resolves local packages in the dependencies and and links them correctly, so they can be imported and handled like any published npm package (e.g without knowledge about the file structure).
Lerna also provides the possibility to run a script in all packages, so `lerna run build:watch` executes the `build:watch` script in every package, so you don't have to call them all by yourself.