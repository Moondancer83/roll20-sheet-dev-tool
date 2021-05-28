# Character sheer development tool for Roll20

## How to use

- Download the toolkit
- Create a folder for your character sheet project under `src`
- Create `sheet.html` for the sheet itself
- Create `sheet.css` for the styles
- Open up toolbox/index.html in a browser
  - If you have npm installed on your machine you can run the tool with the following commands
    - `npm run start:windows`
    - `npm run start:mac`
    - `npm run start:linux`
    - `npm run start:cygwin`
- Select add your project name and hit enter
- Your character sheet is shown

## Capabilities

- Provides all Roll20 custom style rules
- Provides sandbox environment for building your Character sheet
- Separates document structure (HTML) and styles (CSS)
- Easy reload without the need of searching for files

## Features to come

- Renders sheet in iframe as in production
- Free-hand resizing of sheet
- Builds sheet for deployment (rename files to convention)
- Imitating Roll20 scripting language
