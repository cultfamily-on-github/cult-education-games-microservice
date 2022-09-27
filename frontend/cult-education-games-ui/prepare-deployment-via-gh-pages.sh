# this is probably only necessary if you deploy via gh pages

sed -i'' -e 's/href="\//href=".\//g' ./dist/index.html

rm -rf ./../../docs-backup 
cp -r ./../../docs ./../../docs-backup 
rm -rf ./../../docs 
cp -r ./dist ./../../docs