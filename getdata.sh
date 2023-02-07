#!/usr/bin/env bash
if (( $# > 0 )); then destination=$1; else destination="."; fi
# Check for required commands
required=(awk grep lynx wget); missing=()
for command in ${required[@]}; do
	hash $command 2>/dev/null || missing+=($command)
done
if (( ${#missing[@]} > 0 )); then
	echo "[FATAL] could not find command(s): ${missing[@]}. Exiting!"
	exit 1
fi
# Edit these two variables as needed (example usage for 'The MagPi' magazine issues)
sourcepath="https://www.raspberrypi.org/magpi-issues"
pattern="^MagPi[0-9]*.pdf"

echo -n "[GET] Reading source links... "
file=($(lynx -listonly -dump $sourcepath | awk -F'/' '{print $NF}' | grep $pattern))
echo "DONE"
for dl in ${file[@]}; do
	if [[ ! -f $destination/$dl ]]; then
		echo -n "[MISSING] Downloading to $destination/$dl"
		wget -q -P $destination --show-progress $sourcepath/$dl
	else
		echo "[FOUND] Skipping $destination/$dl"
	fi
done