var wordCounter = function(string){
  var
  words = string.split(" "),
  resultsHash = {1:[]},
  results = [],
  poppedWord = "",
  count = 1,
  temp = [];

  while(words.length !== 0) {
    poppedWord = words.pop();
    count = 1;
    while (words.indexOf(poppedWord) !== -1) {
      words.splice(words.indexOf(poppedWord),1);
      count += 1;
    }
    if (resultsHash[count]){
      resultsHash[count].push(poppedWord);
    }else{
      resultsHash[count] = [poppedWord];
    }
  }

  Object.getOwnPropertyNames(resultsHash).forEach(function(property){
    temp = resultsHash[property].sort();
    results = temp.concat(results);
  });



  return results;
};
