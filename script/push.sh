#!/bin/bash
for package in `ls packages`; do
    echo $package
    pushd packages/$package
    npm publish --access=public --registry https://registry.npmjs.org
    popd
done
