## Vintrace Code Test. 

It's fully server side rendered using NextJS's latest `getStaticProps` method, which makes it performance enhanced. It has a  customised the development environment including a custom webpack. It makes heavy use of Prettier and es-lint to ensure nice code. And it's nicely accessible. 

### Tech used

1. React `16.13.1`
2. TypeScript `3.8.3`
3. Jest `25.4.0`
4. React Testing Library `10.0.2`
5. Styled-components `5.1.0`
6. NextJS `9.4.1`

### What would I do to make it better? 

1. DO MORE TESTING
2. DO BETTER TESTING
3. Fix the bar chart to be actually useful. 
4. Fix the chart layout to handle different length lists
5. Use MongoDB Atlas rather than reading the JSON file
6. Add Mongoose for the schema
7. Make it properly responsive
8. Improve the search filter - add global state so it can be easily used everywhere. 

**Ugh that's a lot**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run mockserver
npm run dev
```
To run tests:

```bash
npm run mockserver
npm run test
```
