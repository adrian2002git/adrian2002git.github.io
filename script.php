<?php
$zip = new ZipArchive;

$file_url = 'https://speed.hetzner.de/100MB.bin';
$save_to = 'assets/data.zip';
echo "Downloading...".PHP_EOL;
$content = file_get_contents($file_url);
file_put_contents($save_to, $content);
echo "File downloaded successfully!";

echo "extracting".PHP_EOL;

$res = $zip->open('assets/data.zip');
if ($res === TRUE) {
    $zip->extractTo('assets');
    $zip->close();
    echo 'woot!';
} else {
    echo 'doh!';
}

echo "Finished Extracting";