## Live demo

https://iridescent-rugelach-fe0236.netlify.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction
The Git Repo Search project is a web application that allows users to search for repositories on GitHub. The project is built using Next.js, a React framework, and TypeScript for type-checking. The application makes use of custom hooks - useThrottle and useFetch - to handle search throttling and API requests respectively.

## Folder Structure

pages/ - Contains the Next.js pages for the application
_app.tsx - Next.js App component
index.tsx - Home page component
components/ - Contains React components used in the application
Pagination.tsx - Component for displaying pagination navigation
RepoCard.tsx - Component for displaying a repository card
SearchInput.tsx - Component for handling search input
hooks/ - Contains custom hooks used in the application
useFetch.ts - Hook for making API requests
useThrottle.ts - Hook for throttling search input
types/ - Contains TypeScript types used in the application
Repo.ts - Type for a GitHub repository
api.ts - Type for search results
pagination.ts - Type for pagination component
search.ts - Type for search component

## Custom Hooks:
The application makes use of two custom hooks: useFetch and useThrottle.

### useFetch:
The useFetch hook is used to make API requests to the GitHub API. It takes a URL as an argument and returns an object with the following properties: isLoading, error, and data. isLoading is a boolean that indicates whether the API request is still loading. error is a string that contains any errors that occurred during the API request. data is the data returned by the API.

### useThrottle:
The useThrottle hook is used to throttle search input. It takes a value and a delay as arguments and returns a throttled value. The value is only updated after the delay has passed. This is useful for preventing excessive API requests when the user is typing quickly.

### Usage:
To use the custom hooks, import them into a component and call them as follows:

#### useFetch:

typescript
Copy code
const { isLoading, error, data } = useFetch(url);

#### useThrottle:

typescript
Copy code
const throttledValue = useThrottle(value, delay);
Conclusion:
The Git Repo Search project is a web application built using Next.js, TypeScript, and custom hooks. The useThrottle hook is used to throttle search input and the useFetch hook is used to make API requests to the GitHub API. The application allows users to search for repositories on GitHub and displays the results in a responsive manner.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
