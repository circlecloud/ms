#!/bin/bash
DISTTAG=${1:latest}
for package in `ls packages`; do
    echo $package
    pushd packages/$package
    pnpm publish --tag ${DISTTAG} --access=public --registry https://registry.npmjs.org
    popd
done
