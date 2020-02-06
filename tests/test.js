const assert = require('chai').assert;
var chai = require('chai');
var expect = chai.expect;
const Conversation = require('./conversationTest.js');

// var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
// var g = new Conversation(textDialogues);
// g.addEdge("ROOT", "A", "I think I should probably get going...");
// g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
// g.addEdge("A", "C", "You too. Goodbye!");


describe('Basic Conversation', function () {
  let g;
  beforeEach(function () {
    var textDialogues = [["ROOT", "Well hello there"], ["A", "I hope you have a nice day"], ["B", "HOW DARE YOU SAY SUCH A THING, GET OUT!!!"], ["C", "Goodbye"]];
    g = new Conversation(textDialogues);
    g.addEdge("ROOT", "A", "I think I should probably get going...");
    g.addEdge("ROOT", "B", "Your mother was a hamster, and your father smelled of elderberries!");
    g.addEdge("A", "C", "You too. Goodbye!");
  })

  describe('Basic Methods', function () {

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
  });
});