# Netlify Deployment Guide for Rajasthan Trip Plan

## Files Created for Netlify Deployment

1. **`/app/frontend/public/_redirects`** - Handles client-side routing
2. **`/app/frontend/netlify.toml`** - Netlify build configuration

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Build the Production Version**
   ```bash
   cd /app/frontend
   yarn build
   ```

2. **Deploy to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `build` folder from `/app/frontend/build`
   - Your site will be live!

### Option 2: Connect GitHub Repository

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings will be auto-detected from `netlify.toml`:
     - Build command: `yarn build`
     - Publish directory: `build`
   - Click "Deploy site"

### Option 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd /app/frontend
   yarn build
   netlify deploy --prod
   ```

## Important Notes

- The `_redirects` file ensures all routes (like `/package/1`, `/contact`) work correctly
- Without this file, you'll get 404 errors on page refresh or direct URL access
- The `netlify.toml` file provides additional configuration for automated deployments

## Environment Variables (If needed in future)

If you add backend API calls, set environment variables in Netlify:
1. Go to Site settings → Environment variables
2. Add `REACT_APP_BACKEND_URL` with your backend URL

## Testing Your Deployment

After deployment, test these URLs:
- Homepage: `https://your-site.netlify.app/`
- Package detail: `https://your-site.netlify.app/package/1`
- Contact page: `https://your-site.netlify.app/contact`

All should work without 404 errors!

## Troubleshooting

**Issue**: Still getting 404 errors
**Solution**: Make sure `_redirects` file is in the `build` folder after running `yarn build`. Check Netlify deploy logs.

**Issue**: Build fails
**Solution**: Check that all dependencies are in `package.json` and `yarn.lock` is committed.

**Issue**: Blank page
**Solution**: Check browser console for errors. Make sure environment variables are set correctly.
