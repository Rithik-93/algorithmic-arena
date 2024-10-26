
## Implement Trie (Prefix Tree)
A trie (pronounced as &quot;try&quot;) or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class: Trie() Initializes the trie object. void insert(String word) Inserts the string word into the trie. boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise. boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise. Example 1: Input [&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;] [[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]] Output [null, null, true, false, true, null, true] Explanation Trie trie = new Trie(); trie.insert(&quot;apple&quot;); trie.search(&quot;apple&quot;); // return True trie.search(&quot;app&quot;); // return False trie.startsWith(&quot;app&quot;); // return True trie.insert(&quot;app&quot;); trie.search(&quot;app&quot;); // return True Constraints: 1 &lt;= word.length, prefix.length &lt;= 2000 word and prefix consist only of lowercase English letters. At most 3 * 104 calls in total will be made to insert, search, and startsWith.

#### Test case 1

Input

```
N/A
```

Output

```
N/A
```

#### Test case 2

Input

```
N/A
```

Output

```
N/A
```
  