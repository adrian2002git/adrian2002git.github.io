<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
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
    echo 'Success';
} else {
    echo 'Failed!'.$res.PHP_EOL;
}

echo "Finished Extracting";