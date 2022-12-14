import Trie from "./Trie";

describe("Optimized tests", () => {
  test("should correctly set up empty trie", () => {
    const trie = new Trie();
    expect(trie.isEmpty()).toEqual(true);
  });

  test("should correctly insert value into Trie", () => {
    const words = ["apple", "dog", "app"];
    let trie = new Trie();
    for (const word of words) {
      trie.insert(word);
      expect(trie.search(word)).toEqual(true);
    }
  });

  test("searching for a word", () => {
    const trie = new Trie();
    expect(trie.startsWith("app")).toEqual(false);
    expect(trie.search("apple")).toEqual(false);
    trie.insert("apple");
    expect(trie.search("apple")).toEqual(true);
    expect(trie.startsWith("app")).toEqual(true);
  });
});
