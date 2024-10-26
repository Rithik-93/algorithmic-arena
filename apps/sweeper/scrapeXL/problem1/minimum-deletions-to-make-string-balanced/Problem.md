
## Minimum Deletions to Make String Balanced
You are given a string s consisting only of characters &#39;a&#39; and &#39;b&#39;​​​​. You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i &lt; j and s[i] = &#39;b&#39; and s[j]= &#39;a&#39;. Return the minimum number of deletions needed to make s balanced. Example 1: Input: s = &quot;aababbab&quot; Output: 2 Explanation: You can either: Delete the characters at 0-indexed positions 2 and 6 (&quot;aababbab&quot; -&gt; &quot;aaabbb&quot;), or Delete the characters at 0-indexed positions 3 and 6 (&quot;aababbab&quot; -&gt; &quot;aabbbb&quot;). Example 2: Input: s = &quot;bbaaaaabb&quot; Output: 2 Explanation: The only solution is to delete the first two characters. Constraints: 1 &lt;= s.length &lt;= 105 s[i] is &#39;a&#39; or &#39;b&#39;​​.

#### Test case 1

Input

```
s = "aababbab"
```

Output

```
2
```

#### Test case 2

Input

```
s = "bbaaaaabb"
```

Output

```
2
```
  