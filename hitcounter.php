<?php
$filename = "hitcount.txt"; // file to store hit count

// check if the file exists, if not create it and set hit count to 0
if (!file_exists($filename)) {
  file_put_contents($filename, "0");
}

// read the hit count from the file and increment it
$count = file_get_contents($filename);
$count++;
file_put_contents($filename, $count);
?>
