describe("wordCounter", function(){
  it("will return an array containing one word given a string containing one word", function(){
    expect(wordCounter("dog")).to.eql(["dog"]);
  });

  it("will return an array of words for a string with all unique words", function(){
    expect(wordCounter("the dog ran")).to.eql(["dog","ran", "the"]);
  });

  it("will return an array of words with order of frequency in the string", function(){
    expect(wordCounter("the dog ran dog")).to.eql(["dog","ran","the"]);
  });

  it("can handle multiple doubled words", function(){
    expect(wordCounter("the dog ran ran dog the cat")).to.eql(["dog","ran","the","cat"]);
  });

  it("can handle tripled words", function(){
    expect(wordCounter("dog dog dog cat cat mouse")).to.eql(["dog", "cat", "mouse"]);
  });

  it("can handle a mix of frequencies that are not consequtive e.g. one word once one word thrice", function(){
      expect(wordCounter("dog cat cat cat")).to.eql(["cat","dog"]);
  });

  it("can handle a mix of letter cases", function(){
    expect(wordCounter("Dog dOg cAt CAT doG MoUse")).to.eql(["dog", "cat", "mouse"]);
  });

  it("can handle puctuation in there", function(){
    expect(wordCounter("Dog, cat, doG.")).to.eql(["dog", "cat"]);
  });

});
