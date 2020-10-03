# ✨ Respondent Ranker ✨

## To Run with npm and Node >= v12.x.x

1. Navigate into the root directory of the project
2. Run `$ npm i` to install dependencies
3. Run `$ npm run app` to run the typescript compiler and run the application

## To Run with Docker

1. Navigate into the root directory of the project
2. To make sure docker daemon is running, run `$ docker -v`
3. Build the image with `$ docker build -t marksauerutley/solution .`
4. To run the app, run `$ docker run --name msu marksauerutley/solution`

To remove the image and container afterwards, run `$ docker container rm msu && docker image rm marksauerutley/solution`

## Testing

To run the tests, first make sure to install the dependencies with `$ npm i`, then run `$ npm test`.

To get a coverage report, run `$ npm run test:coverage`.

## Approach

I stuctured the code as a bunch of modules according to their responsibility.

- The `lib/project` folder contains the code for loading and parsing the `project.json` file.
- The `lib/respondents` folder contains code for loading, parsing, and ranking the respondents from the csv file.
- The `lib/utils` folder contains utility functions for sorting arrays, calculating distance between two points on a sphere, and generating test data.
- The `lib/app.ts` file defines the main function that runs the app.
- The `start.ts` file runs the main function and exits the process.

I felt that treating each of these things as modules of functions would make the code easier to reason about.
I tried to keep as many of the functions as possible pure so that the app would be easy to test and maintain.

## Performance

To test the performance of the app, I increased the size of the csv file from 500 rows to 100,000 rows.
When I did this, the app only took a couple of seconds to rank the top 8. Because of this, I feel good about the
performance and scalability of this solution.

## Extensibility

Because the rankers are each their own separate function and get called by the `getScore` function,
adding new mechanisms for scoring respondents based on different attributes should not be difficult.
We would just need to create a new ranker function and plug it into the `getScore` function in `lib/respondents/respondent.ts`.

## Thank you for reading :)
