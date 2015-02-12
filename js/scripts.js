var wordCounter = function(string){
  var wordsWithPunctuation = string.toLowerCase().split(/\W/);
  var words = [];

  for(var i = 0; i < wordsWithPunctuation.length; i++){
      if(wordsWithPunctuation[i] !== ""){
        words.push(wordsWithPunctuation[i]);
      }
  }

  var
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
