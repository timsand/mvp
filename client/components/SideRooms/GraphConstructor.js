


class Graph {
  constructor() {
    this.noOfVertices = 0;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.noOfVertices++;
    this.AdjList.set(v, []);
  }

  addEdge(v, w, choice = null) {
    this.AdjList.get(v).push({ to: w, choice: choice });

    //for undirected
    //this.Adjlist.get(w).push(v);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();

    for (var i of get_keys) {

      var get_values = this.AdjList.get(i);
      var conc = "";

      for (var j of get_values) {
        conc += j.to + " ";
      }

      console.log(i + " => " + conc);
    }
  }
}



var g = new Graph();
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices 
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges 
g.addEdge('A', 'B', "Greetings Adventurer");
g.addEdge('A', 'D', "You will perish");
g.addEdge('A', 'E', "Goodbye");
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph();
// console.log(g.AdjList);