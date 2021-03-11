#!/usr/bin/env sh
# abort on errors
set -e
npm run build
cd dist
git init
git add -A
git config --local user.name "AnJaeSeongS2"
git config --local user.email "jindam91@naver.com"
git commit -m 'deploy'
git push -f https://github.com/AnJaeSeongS2/vue-modern-resume.git master:gh-pages
cd -
