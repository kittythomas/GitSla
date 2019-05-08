# slack-git-bot
A slack bot for github notifications

# API URL
[Heroku](gitsla.herokuapp.com)

## Git Notify
This is a Node.js application integrated with Express, MongoDB, SlackAPI and GitHub API. The application has endpoints to add users to the database and fetch all a user's github notifications.
The app is meant to send a user any personal unread notifications on github to their Slack handles, for example, changes requested on their PR or a comment left that they need to address.

## Motivation
The motivation behind this project arises from the need to respond promptly to issues arising on github that are usually sent to a user's email address.

## Setting up
- clone the repo using `git clone https://github.com/kittythomas/GitSla.git`
- use the .env.example to create a .env file
- set up ngrok to expose the localhost
- start the server using `yarn start:dev`
- setup the a slack APP with a bit user on any workspace and use the command `/*botname*` to interact with the application

## Features available so far
- add user to MongoDB using endpoint
- send user all unread notifications using both an endpoint and on slack
- hosting on heroku
