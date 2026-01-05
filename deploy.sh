#!/bin/bash

echo "🚀 Starting GitHub Pages deployment..."

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "❌ Error: You are currently on branch '$current_branch'"
    echo "📋 Please switch to main branch first: git switch main"
    exit 1
fi

echo "✅ Currently on main branch"

# Pull latest changes
echo "📥 Pulling latest changes from remote..."
git pull

# Clean up any old gh-pages branch (local and remote)
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "🗑️ Deleting existing local gh-pages branch..."
    git branch -D gh-pages
fi

if git ls-remote --heads origin gh-pages | grep -q gh-pages; then
    echo "🗑️ Deleting remote gh-pages branch..."
    git push origin --delete gh-pages
    sleep 3
fi

echo "📋 No local gh-pages branch found, continuing..."
echo "📋 No remote gh-pages branch found, continuing..."

# Update refs
echo "🔄 Updating local repository refs..."
git fetch --prune origin

echo "✅ Confirmed: No gh-pages branches exist"

# Deploy using the script defined in package.json
echo "🚀 Building and deploying to GitHub Pages..."
npm run deploy

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo "⏳ Waiting a moment for GitHub Pages to process..."
    sleep 5
    echo "🌐 Your site should be live at: https://juniorduc44.github.io/techticianservices/"
    echo "📋 In your repo Settings > Pages, make sure it's set to:"
    echo "   • Source: Deploy from a branch"
    echo "   • Branch: gh-pages / (root)"
    echo "⏰ Changes may take a few minutes to appear. Try a hard refresh (Ctrl+Shift+R) if needed."
else
    echo "❌ Deployment failed! Check the errors above."
    exit 1
fi