var wordCounter = function(string){
  var
  words = string.split(" "),
  resultsHash = {1:[],2:[]},
  results = [],
  poppedWord = "",
  count = 1;

  while(words.length !== 0) {
    poppedWord = words.pop();
    count = 1;
    while (words.indexOf(poppedWord) !== -1) {
      words.splice(words.indexOf(poppedWord),1);
      count += 1;
    }
    resultsHash[count].push(poppedWord);
  }
  resultsHash[1].sort();
  resultsHash[2].sort();

  results = resultsHash[2].concat(resultsHash[1]);

  return results;
};
