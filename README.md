## Experience

I Have worked with Express for almost 6 months and have implemented basic cricket scoring Web app with React, and I have worked for more than 1 year 3 months with React and React-Native.

My overall work experience is 4 years and I have been working as a developer from past 1 years 5 months.

## `API Routes.`

`url:https://still-sea-81590.herokuapp.com`

## `Get Request`

`url/boards` will return all the Project Items and different status from Database.

## `Post Request`

`url/boards` inside the body containing the new Project data.
`{title: {type: String}, status: {type: String, enum:['on track', 'delayed', 'on hold']}, completionStatus: {type: String, optional} }`.
title: new project title.<br/>
status: only the values which are mentioned in the enums will be able to add.<br/>
date: the projects added date.<br/>
completionStatus: to display how much of the content is completed.<br/>

This will return the array of project item from the Database.

## Improvization and Mistake.

The schema can be improvised.

1. Database Should have a Board Schema which will have an array of the Project items inside that board and vice-versa.
2. The Project item should have the individual schema where those Object id's refrence will be added in the Board schema and populated when required.
3. According to This the Board UI will be rendered and boards projects will be rendered.
