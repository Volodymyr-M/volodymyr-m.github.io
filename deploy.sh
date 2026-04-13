#!/bin/bash
set -e

# Deploy the Jekyll site to the master branch (GitHub Pages).
# Run this script from the source branch after making changes.

# Ensure we're on the source branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "source" ]; then
    echo "Error: Must be on the 'source' branch. Currently on '$CURRENT_BRANCH'."
    exit 1
fi

# Ensure working tree is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "Error: Working tree is not clean. Commit or stash changes first."
    exit 1
fi

# Build
echo "Building site..."
rm -rf _site .jekyll-cache
JEKYLL_ENV=production /opt/homebrew/opt/ruby/bin/bundle exec jekyll build

# Prepare deploy in a temp directory
SITE_DIR=$(pwd)/_site
DEPLOY_DIR=$(mktemp -d)
REMOTE_URL=$(git remote get-url origin)

echo "Cloning master into temp directory..."
git clone --depth 1 --branch master "$REMOTE_URL" "$DEPLOY_DIR"

cd "$DEPLOY_DIR"

# Remove old content (keep .git)
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} +

# Copy new build
cp -a "$SITE_DIR"/* .
touch .nojekyll
echo "ingantt.com" > CNAME

# Commit and push
git add -A

if git diff --cached --quiet; then
    echo "No changes to deploy."
else
    COMMIT_MSG="Deploy: $(date '+%Y-%m-%d %H:%M')"
    git commit -m "$COMMIT_MSG"
    git push origin master
    echo "Deployed successfully!"
fi

# Cleanup
cd -
rm -rf "$DEPLOY_DIR"
