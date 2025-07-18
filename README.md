# Easy-Split

Easy-Split is a single-page application built using React with Typescript and styled using Tailwind CSS. It leverages the NextJS framework for a seamless deployment process.

## About

Easy-Split is designed to be a simple yet functional application for splitting payments. It takes in total amount and individual contributions and calculates how much each person owes. The app is optimized for mobile use, offering an intuitive and colorful interface.

Previous payment splits are saved into the local browser storage using IndexedDB and are displayed under the calculator for easy reference.

## Getting Started

To get Easy-Split up and running on your local machine, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/thomas-elliott/easy-split.git
```

2. Navigate to the repository:

```sh
cd easy-split
```

This project requires **Node.js 22** or later.

3. Install the dependencies:

```sh
npm install
```

4. Start the local development server:

```sh
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Available Scripts

- `npm run dev` Runs the app in the development mode.
- `npm run build` Builds the app for production to the `.next` folder.
- `npm run start` Starts the production server.
- `npm run lint` Lints the codebase.

## Dependencies

- React and React-DOM
- NextJS
- Tailwind CSS for styling
- Typescript
- IDB for interacting with IndexedDB

## License

Easy-Split is licensed under MIT License.
