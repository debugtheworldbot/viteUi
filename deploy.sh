rm -rf dist &&
yarn build &&
cd dist &&
git init
git add .
git commit -m "update"
git branch -M main
git remote add origin git@github.com:debugtheworldbot/cz-vue3Ui.git &&
git push -u  -f origin main &&
cd -
echo  https://debugtheworldbot.github.io/cz-vue3Ui