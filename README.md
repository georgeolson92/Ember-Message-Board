# Stack Emberflow

Stack Emberflow is a website where you can ask questions about code issues and receive answers from other people.

## Specifications

* It can list out all questions on homepage
    * _Example Input: user visits home page _
    * _Example Output: returns full list of questions_
* It can add a new question
  * _Example Input: "Help!", "Sam", "I have a code issue."_
  * _Example Output: Question: Help! by Sam, "I have a code issue"_
* It can edit questions
    * _Example Input: "Help! [nevermind, fixed]", "Sam", "I have a code issue [THANX JOE U SAVED MY LYFE"_
    * _Example Output: Question: Help! [nevermind, fixed] by Sam, "I have a code issue [THANKS JOE U SAVED MY LYFE"_  
* It can add an answer to a question
  * _Example Input: in "Help!" question, user adds answer. User: "Joe", Answer content: "Here is a fix!"_
  * _Example Output: displayed in "Help!" question: "Joe's answer to 'Help!'", "Here is a fix!"_  
* It can delete answers
* _Example Input: user deletes Joe's answer (the only one listed in "Help!" question)_
* _Example Output: No answers listed_  
* It can delete questions and linked answers
* _Example Input: in "Help!" question, user adds answer. User then deletes the entire question._
* _Example Output: Question & listed answers deleted._ 

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
