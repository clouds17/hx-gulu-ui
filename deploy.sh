rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update commit' &&
git branch -M main &&
git remote add origin https://github.com/clouds17/hx-ui-website.git &&
git push -f -u origin main &&
cd .. &&
echo https://clouds17.github.io/hx-ui-website/index.html