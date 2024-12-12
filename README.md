# Template for Flow Launcher Plugins

This repository provides a starting template for developing plugins for [Flow Launcher](https://www.flowlauncher.com) using [flow-plugin](https://www.npmjs.com/package/flow-plugin), a productivity tool for Windows. The template uses TypeScript to deliver a structured, type-safe environment for plugin creation.

## Features

- **TypeScript Support**: Ensures type safety and modern JavaScript features.
- **Preconfigured Tools**: Includes ESLint, Prettier, and tsconfig for a seamless development experience.
- **Plugin.json Configuration**: Easily customizable metadata and settings for your Flow Launcher plugin.

## Getting Started

### Quick Start

```bash
cd %APPDATA%\FlowLauncher\Plugins
git clone https://github.com/DrafaKiller/Template-flow.plugin.git PluginName-flow.plugin
cd PluginName-flow.plugin
npm install
code ./
```

### Installation

1. _(Optional)_ Place the plugin in the Flow Launcher plugin directory, which is usually located at:

   ```bash
   cd %APPDATA%\FlowLauncher\Plugins
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/DrafaKiller/Template-flow.plugin.git PluginName-flow.plugin
   cd PluginName-flow.plugin
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Update the `plugin.json` file with your plugin's metadata, following the development instructions below.

5. Restart Flow Launcher to load the plugin. You can use the Flow Launcher command `"Restart Flow Launcher"`.

## Development

1. Update the `plugin.json` file with your plugin's metadata:

   - **`<plugin_id>`**: A unique identifier for your plugin. You can generate one using [uuidgenerator.net](https://www.uuidgenerator.net/).
   - **`<plugin_name>`**: The name of your plugin.
   - **`<plugin_slug>`**: The name of your plugin for urls, without spaces. Replace the spaces with `-`, `_` or remove.
   - **`<plugin_description>`**: A brief description of your plugin.
   - **`<author_name>`**: Your name or organization.
   - **`ActionKeyword`**: The keyword that will trigger your plugin. To trigger your plugin on every query, remove it.

2. Implement your plugin's logic in the `src/` directory.

3. Development commands:

   - **`npm run build`**: Build the plugin for production.
   - **`npm run watch`**: Watch for changes and rebuild automatically.

### File Structure

- **`plugin.json`**: Configures plugin metadata for Flow Launcher.
- **`src/`**: Contains the main source code.
- **`assets/`**: Stores assets like images, or other files.

## Publishing

_This section is in progress. It will be updated with instructions on how to package, distribute, and manage your plugin once it's ready for publication._

_All the data you need is in the `package.json` file, `plugin.json` file, `assets` directory, and `build` directory._
