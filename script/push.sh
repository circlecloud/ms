#!/bin/bash
DISTTAG=${1:latest}
for package in `ls packages`; do
    echo $package
    pushd packages/$package
    npm publish --tag ${DISTTAG} --access=public --registry https://registry.npmjs.org
    popd
done
