# Stack Emberflow

Stack Emberflow is a website where you can ask questions about code issues and receive answers from other people.

## Specifications

* __It can list out all questions on homepage__
    * Example Input: user visits home page _
    * Example Output: returns full list of questions
* __It can add a new question__
  * Example Input: "Help!", "Sam", "I have a code issue."
  * Example Output: Question: Help! by Sam, "I have a code issue"
* __It can edit questions__
    * Example Input: "[nevermind, fixed]", "Sam", "Thanks Joe you saved my life"
    * Example Output: Question: [nevermind, fixed] by Sam, "Thanks Joe you saved my life"
* __It can add an answer to a question__
  * Example Input: in "Help!" question, user adds answer. User: "Joe", Answer content: "Here is a fix!"
  * Example Output: displayed in "Help!" question: "Joe's answer to 'Help!'", "Here is a fix!"
* __It can delete answers__
  * Example Input: user deletes Joe's answer (the only one listed in "Help!" question)
  * Example Output: No answers listed  
* __It can delete questions and linked answers__
  * Example Input: in "Help!" question, user adds answer. User then deletes the entire question.
  * Example Output: Question & listed answers deleted.

## Prerequisites

You will need the following things properly installed on your computer:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/georgeolson92/Ember-Message-Board.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
