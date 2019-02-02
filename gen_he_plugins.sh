#!/bin/sh 
# This script generates skeletons the serlo HE plugins from the specification. 
# Only the react components must be written by hand.
#
# This script uses the serlo_specgen program. You can install it for the local user
# using cargo:
#
# cargo install --git https://github.com/serlo/serlo-he-spec

set -e

plugins=$(serlo_specgen list)

while read -r line; do
    hrname=$(echo "$line" | sed "s!@[A-Za-z_-]*/editor-plugin-!!g")
    echo "updating / generating $hrname:"
    if [ ! -d plugins/$hrname ]
    then
        echo "no plugin named $hrname. generate first skeleton first"
        exit 1
    fi
    echo "  generating plugin files..."
    serlo_specgen generate $line -d plugins/

    echo "  patching package.json..."
    jq '. * $patch[0] | del(.dependencies["@serlo/editor-plugin-foobar-renderer"])' \
        --slurpfile patch plugins/$hrname/package_json.patch \
        < plugins/$hrname/package.json | sponge plugins/$hrname/package.json
    jq '. * $patch[0]' --slurpfile \
        patch plugins/$hrname-renderer/package_json.patch \
        < plugins/$hrname-renderer/package.json | sponge plugins/$hrname-renderer/package.json

    echo "  cleaning up"
    rm plugins/$hrname/package_json.patch
    rm plugins/$hrname-renderer/package_json.patch
done <<EOF
$plugins
EOF
