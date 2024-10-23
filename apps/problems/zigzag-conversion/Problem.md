## Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

#### Test case 1

Input

```
Input: s = "PAYPALISHIRING" 
numRows = 3
```

Output

```
"PAHNAPLSIIGYIR"
```

#### Test case 2

Input

```
s = "PAYPALISHIRING" 
numRows = 4
```

Output

```
"PINALSIGYAHRPI"
```

#### Test case 3

Input

```
s = "A" 
numRows = 1
```

Output

```
"A"
```