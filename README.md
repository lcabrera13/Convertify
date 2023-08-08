# Convertify

## About The Project

Convertify is a powerful Google Chrome extension designed to simplify currency conversions for users worldwide. With a seamless integration into your browser, this handy tool allows you to effortlessly convert between different currencies with just a few clicks.

### Built With

- [![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)

## Getting Started

### Prerequisites

```sh
# install npm
npm install npm@8.19.2 -g

# install angular CLI
npm install @angular/cli@15.2.9 -g
```

### How to run the project

1. Clone the repo & install dependencies

   ```sh
   # Clone project
   git clone https://github.com/lcabrera13/convertify-project

   # Navigate to project
   cd convertify-project

   # Install NPM packages
   npm install
   ```

2. Create `.env` file using `.env-template` file as a reference

   ```shell
   BASE_URL="https://currency-converter5.p.rapidapi.com/currency"
   API_KEY="ENTER_YOUR_API_KEY_RAPIDAPI"
   API_HOST="currency-converter5.p.rapidapi.com"
   ```

3. Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### How to build the project

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### How to run the project unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### How to run the project end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
