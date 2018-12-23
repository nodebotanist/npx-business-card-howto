# npx business card template

This template is for those of you who'd like to make you own npx business cards. This card is for Ace the cat, but feel free to turn it into your own card!

## Setting up your dev environment

1. clone this repo: `git clone https://github.com/nodebotanist/npx-business-card-howto.git` OR fork it and download your fork.
1. use your terminal application to navigate to the folder
1. run `npm i` to install the dev dependencies
1. open the folder in your code editor of choice
1. in the terminal, run `npm run dev` to have automatic build/output of your changes (thanks again @mtheoryx)

## Publishing your business card

1. go into `package.json` with your favorite text editor
1. change the `"name"` field from `"ace-the-cat"` to the name you would like to use for your business card
  * Note: it's handy to use a username that people know you by so your card is easy to find
1. change the `"author"` field to your npm username
  * Head to npmjs.org to create an account if you do not have a username
1. login to npm in the cli by running `npm login`
1. Set your card to version 1 by running `npm version major`
  * Note: This will change the `package.json` for you and create a git commit and tag it for you!
1. run `npm publish` to put your card in the npm registry
1. Make sure it works by running `npx whatever-you-named-your-card`