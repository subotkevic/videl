set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure (y/n)" -n 1 -r
echo #
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  npm run production
  git add -A
  git commit -m "[Build] $VERSION"
  npm version $VERSION --message "[Release] $VERSION"

  git push
  npm publish
fi
