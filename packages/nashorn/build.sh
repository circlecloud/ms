npx tsc src/build.ts --outDir dist
cd dist
rm -rf temp
mkdir -p temp
node build.js
cd ../
rm -rf src/typings
mkdir -p src/typings/bukkit
cp dist/temp/* src/typings/bukkit/ -R
