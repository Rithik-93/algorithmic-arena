
## Find the Shortest Superstring
Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them. You may assume that no string in words is a substring of another string in words. Example 1: Input: words = [&quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot;] Output: &quot;alexlovesleetcode&quot; Explanation: All permutations of &quot;alex&quot;,&quot;loves&quot;,&quot;leetcode&quot; would also be accepted. Example 2: Input: words = [&quot;catg&quot;,&quot;ctaagt&quot;,&quot;gcta&quot;,&quot;ttca&quot;,&quot;atgcatc&quot;] Output: &quot;gctaagttcatgcatc&quot; Constraints: 1 &lt;= words.length &lt;= 12 1 &lt;= words[i].length &lt;= 20 words[i] consists of lowercase English letters. All the strings of words are unique.

#### Test case 1

Input

```
words = ["alex","loves","leetcode"]
```

Output

```
"alexlovesleetcode"
```

#### Test case 2

Input

```
words = ["catg","ctaagt","gcta","ttca","atgcatc"]
```

Output

```
"gctaagttcatgcatc"
```
  