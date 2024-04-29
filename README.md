# Beanwood Designs
# Reclaimed Wood Art
# Furniture
# Games
# Mosaics

# Do your work on master.
# when you want to release,
# checkout release, merge it up to master, then push it.
# switch back to master when you're done.
# make commits ONLY on master 

git push master
git checkout release
git merge master
git push
git checkout master

npm install
npm run build
npm start

