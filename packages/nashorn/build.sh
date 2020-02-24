# sponge bukkit jdk bungee nukkit
TYPE=nukkit
TARGET=../types/dist/typings
npx tsc src/build.ts --outDir dist
cd dist
rm -rf temp
mkdir -p temp
node build.js ${TYPE}
cd ../
rm -rf ${TARGET}/${TYPE}
mkdir -p ${TARGET}/${TYPE}
cp dist/temp/* ${TARGET}/${TYPE}/ -R
