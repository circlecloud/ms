# sponge bukkit
TYPE=sponge
npx tsc src/build.ts --outDir dist
cd dist
rm -rf temp
mkdir -p temp
node build.js ${TYPE}
cd ../
rm -rf src/typings
mkdir -p src/typings/${TYPE}
cp dist/temp/* src/typings/${TYPE}/ -R
