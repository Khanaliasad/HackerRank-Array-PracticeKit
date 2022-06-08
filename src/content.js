document.getElementById("app").innerHTML = `
<h1>Hacker Rank<br>
Interview Prepare Counting Valleys</h1>
<div>
  <p>An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
<Br>
<ul>
<li>
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
</li>
<li>
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
</li>

</ul>
<h3>Example</h3>
 
  
  The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.
  
<h3>Function Description</h3>
  Complete the countingValleys function in the editor below.
  <rb>
  countingValleys has the following parameter(s):
  <br>
  <li>int steps: the number of steps on the hike
  </li>
  <li>string path: a string describing the path
  </li>
  <h3>Returns<h3>  
  <li>  int: the number of valleys traversed
  </li>
  <h3>Input Format</h3>
    
  <article> The first line contains an integer , the number of steps in the hike.
  The second line contains a single string , of  characters that describe the path.</p>
</article>
  </div>
`;
