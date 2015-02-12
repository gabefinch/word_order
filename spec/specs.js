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
});
