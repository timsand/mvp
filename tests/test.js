const assert = require('chai').assert;
const chai = require('chai');
const expect = chai.expect;
const Conversation = require('./conversationTest.js');

// var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
// var g = new Conversation(textDialogues);
// g.addEdge("ROOT", "A", "I think I should probably get going...");
// g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
// g.addEdge("A", "C", "You too. Goodbye!");


describe('Basic Conversation', function () {
  let g;
  let verbose;

  describe('Basic Methods', function () {
    beforeEach(function () {
      var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
      g = new Conversation(textDialogues);
      g.addEdge("ROOT", "A", "I think I should probably get going...");
      g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
      g.addEdge("A", "C", "You too. Goodbye!");
    })
    it('should return the following options at ROOT', function () {
      let choicesArr = g.getChoices("ROOT");
      let choices = [];
      choicesArr.forEach((val) => { choices.push(val.choice) });

      expect(choices).to.include('I think I should probably get going...')
      expect(choices).to.include('Your mother was a hamster, and your father smelled of elderberries!')
      assert.equal(choices.length, 2);
    });

    it('should include the following options at node A', function () {
      let choices = g.getChoices("A");
      assert.include(choices[0].choice, "Goodbye");
      assert.equal(choices.length, 1);
    })

    it('should display the appropriate text at given nodes', function () {
      let text = g.getCurrentText("ROOT");
      expect(text).to.equal("Well hello there");
      text = g.getCurrentText("A");
      expect(text).to.equal("I hope you have a nice day");
      text = g.getCurrentText("B");
      expect(text).to.equal("HOW DARE YOU SAY SUCH A THING, GET OUT!!!");
      text = g.getCurrentText("C");
      expect(text).to.equal("Goodbye");
    })
  });

  describe("Complicated data sets", () => {
    beforeEach(() => {
      let textDialogues = [
        ["ROOT", "A dark day friend... What ails you?"],
        ["A", "Well I hope that you take care of yourself now... It's dark out there."],
        ["B", "Ask your questions then, and I'll do my best to answer what I can."],
        ["Questions_A", "I don't know, but I wouldn't go there. Place creeps me out."],
        ["Questions_B", "'Fraid not. Don't have any to spare."],
        ["Questions_C", "Er... I'm sorry, I just don't know much."],
        ["Questions_Follow_A", "Well, alright. I think that they're you know... Not livin if you catch me drift..."],
        ["END", "Goodbye"]
      ];
      verbose = new Conversation(textDialogues);
      verbose.addEdge("ROOT", "A", "Not much that you can take care of I'm afraid.");
      verbose.addEdge("ROOT", "B", "Thoughts on my mind.. Hoping you had some answers...")
      verbose.addEdge("B", "Questions_A", "What's out there, by that creepy shack?")
      verbose.addEdge("B", "Questions_B", "Can I have some money please?")
      verbose.addEdge("B", "Questions_C", "What do you think about those weird figures over there?");
      verbose.addEdge("Questions_C", "Questions_Follow_A", "What aren't you telling me right now?");
      verbose.addEdge("Questions_C", "B", "Sorry I asked. Got some more questions for you, if you're willing to answer.");
      verbose.addEdge("Questions_Follow_A", "END", "I appreciate your candor. I'll take my leave");
      verbose.addEdge("Questions_Follow_A", "B", "Got more on my mind...");
      verbose.addEdge("Questions_B", "B", "Got more questions");
      verbose.addEdge("Questions_A", "B", "Got more questions");
      verbose.addEdge("B", "END", "Thank you. I'll take my leave");
    })
    it('should loop back to question sub-menu when directed (for current text)', () => {
      let currentText = verbose.getCurrentText("ROOT");
      expect(currentText).to.equal("A dark day friend... What ails you?");
      currentText = verbose.getCurrentText("B");
      expect(currentText).to.equal("Ask your questions then, and I'll do my best to answer what I can.");
      currentText = verbose.getCurrentText("Questions_A");
      expect(currentText).to.equal("I don't know, but I wouldn't go there. Place creeps me out.");
      currentText = verbose.getCurrentText("Questions_B");
      expect(currentText).to.equal("'Fraid not. Don't have any to spare.");
      currentText = verbose.getCurrentText("Questions_C");
      expect(currentText).to.equal("Er... I'm sorry, I just don't know much.");
      currentText = verbose.getCurrentText("Questions_Follow_A");
      expect(currentText).to.equal("Well, alright. I think that they're you know... Not livin if you catch me drift...");
      currentText = verbose.getCurrentText("END");
      expect(currentText).to.equal("Goodbye");
    })

    it('should provide the appropriate choices to navigate at any given point', () => {
      let choicesArr = verbose.getChoices("ROOT");
      let choices = [];
      choicesArr.forEach((val) => { choices.push(val.choice) });
      expect(choices).to.include("Not much that you can take care of I'm afraid.");
      expect(choices).to.include("Thoughts on my mind.. Hoping you had some answers...");

      choices = [];
      choicesArr = verbose.getChoices("B");
      choicesArr.forEach((val) => { choices.push(val.choice) });
      expect(choices).to.include("What's out there, by that creepy shack?");
      expect(choices).to.include("Can I have some money please?");
      expect(choices).to.include("What do you think about those weird figures over there?");

      choices = [];
      choicesArr = verbose.getChoices("Questions_Follow_A");
      choicesArr.forEach((val) => { choices.push(val.choice) });
      expect(choices).to.include("I appreciate your candor. I'll take my leave");
      expect(choices).to.include("Got more on my mind...");


    })

    it('should provide the appropriate routes to the correct nodes', () => {
      let choicesArr = verbose.getChoices("ROOT");
      let choices = [];
      choicesArr.forEach((val) => { choices.push(val.to) });
      expect(choices).to.include("A");
      expect(choices).to.include("B");

      choices = [];
      choicesArr = verbose.getChoices("B");
      choicesArr.forEach((val) => { choices.push(val.to) });
      expect(choices).to.include("Questions_A");
      expect(choices).to.include("Questions_B");
      expect(choices).to.include("Questions_C");

      choices = [];
      choicesArr = verbose.getChoices("Questions_Follow_A");
      choicesArr.forEach((val) => { choices.push(val.to) });
      expect(choices).to.include("B");
      expect(choices).to.include("END");
    })
  })
});


//Root -> A Not much, just looking about
//Root -> B I have questions
//A -> Questions
//Questions_C -> Question_Follow_A
