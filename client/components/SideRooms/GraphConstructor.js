


export default class Graph {
  constructor(initialDialogue) {
    this.noOfVertices = 0;
    this.AdjList = new Map();

    if (initialDialogue) {
      for (let i = 0; i < initialDialogue.length; i++) {
        this.addVertex(initialDialogue[i][0], initialDialogue[i][1])
      }
    }
  }

  addVertex(id, dialogue = "null") {
    this.noOfVertices++;
    this.AdjList.set(id, { dialogue: dialogue, choice: [] });
  }

  addEdge(id, next, choice = null) {
    let value = this.AdjList.get(id);
    value.choice.push({ to: next, choice: choice });

    //for undirected
    //this.Adjlist.get(w).push(v);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();

    for (var i of get_keys) {

      var get_values = this.AdjList.get(i).choice;
      var conc = "";

      for (var j of get_values) {
        conc += j.to + " ";
      }

      console.log(i + " => " + conc);
    }
  }
}



// var vertices = [
//   ["A", "A_TEXT"], ["B", "B_TEXT"], ["C", "C_TEXT"], ["D", "D_TEXT"], ["E", "E_TEXT"], ["F", "F_TEXT"]
// ]
// var g = new Graph(vertices);

// // adding vertices 
// // for (var i = 0; i < vertices.length; i++) {
// //   g.addVertex(vertices[i]);
// // }

// // adding edges 
// g.addEdge('A', 'B', "Greetings Adventurer");
// g.addEdge('A', 'D', "You will perish");
// g.addEdge('A', 'E', "Goodbye");
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// // prints all vertex and 
// // its adjacency list 
// // A -> B D E 
// // B -> A C 
// // C -> B E F 
// // D -> A E 
// // E -> A D F C 
// // F -> E C 
// g.printGraph();
// // console.log(g.AdjList);