# Manual Deployment Guide - Rajasthan Trip Plan

## Step-by-Step Guide for Manual Deployment on Netlify

### Prerequisites
- Download and extract the project zip file
- Install Node.js (v16 or higher) from https://nodejs.org

### Step 1: Install Dependencies

Open Terminal/Command Prompt and navigate to the frontend folder:

```bash
cd path/to/extracted/folder/frontend
```

Install dependencies:
```bash
npm install -g yarn
yarn install
```

**Wait for installation to complete (may take 2-5 minutes)**

### Step 2: Build the Production Version

Run the build command:
```bash
yarn build
```

**Important**: This creates a `build` folder inside the `frontend` directory. This is what you'll deploy to Netlify.

### Step 3: Deploy to Netlify

#### Option A: Drag & Drop (Easiest)

1. Go to https://app.netlify.com
2. Log in or create a free account
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag and drop the **`build`** folder (NOT the frontend folder, just the build folder inside it)
5. Wait for deployment to complete
6. Your site is live!

#### Option B: Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag the **`build`** folder onto the page
3. Your site will be deployed instantly!

### Step 4: Verify Deployment

Test these URLs after deployment:
- Homepage: `https://your-site-name.netlify.app/`
- Package detail: `https://your-site-name.netlify.app/package/1`
- Contact page: `https://your-site-name.netlify.app/contact`

All routes should work without 404 errors!

---

## Common Issues & Solutions

### Issue 1: "404 Page Not Found" on routes
**Cause**: The `_redirects` file is missing or not in the build folder

**Solution**: 
1. Check if `/frontend/public/_redirects` exists
2. If missing, create it with this content:
   ```
   /* /index.html 200
   ```
3. Rebuild: `yarn build`
4. Redeploy the new `build` folder

### Issue 2: "yarn: command not found"
**Solution**:
```bash
npm install -g yarn
```

### Issue 3: Build fails with errors
**Solution**:
1. Delete `node_modules` folder
2. Delete `yarn.lock` file
3. Run `yarn install` again
4. Run `yarn build`

### Issue 4: Blank white page after deployment
**Cause**: Wrong folder deployed

**Solution**: Make sure you deployed the **`build`** folder, not:
- ❌ The entire `frontend` folder
- ❌ The root project folder
- ✅ Only the `build` folder inside `frontend`

### Issue 5: Cannot find the build folder
**Solution**: 
1. Make sure you ran `yarn build` successfully
2. Look inside `frontend/build/` - you should see:
   - `index.html`
   - `static/` folder
   - `_redirects` file

---

## File Checklist Before Building

Make sure these files exist:

- ✅ `/frontend/public/_redirects`
- ✅ `/frontend/netlify.toml`
- ✅ `/frontend/package.json`

If `_redirects` is missing, create it:

**File**: `/frontend/public/_redirects`
**Content**:
```
/* /index.html 200
```

---

## Quick Reference

### Build Command
```bash
cd frontend
yarn install
yarn build
```

### What to Deploy
📁 Deploy this folder: `frontend/build/`

### Netlify Settings (if asked)
- Build command: `yarn build`
- Publish directory: `build`
- Node version: 18

---

## Visual Guide

```
Downloaded Project
│
└─── frontend/
     ├─── public/
     │    └─── _redirects  ← Must have this!
     ├─── src/
     ├─── build/  ← Deploy THIS folder
     │    ├─── index.html
     │    ├─── static/
     │    └─── _redirects  ← Auto-copied here
     ├─── package.json
     └─── netlify.toml
```

---

## Still Having Issues?

1. **Delete the build folder** and rebuild:
   ```bash
   rm -rf build
   yarn build
   ```

2. **Check the build folder** contains `_redirects`:
   ```bash
   ls build/
   # Should see: _redirects, index.html, static/
   ```

3. **Deploy again** using the fresh build folder

4. If still not working, check Netlify deploy logs:
   - Go to your site dashboard
   - Click "Deploys"
   - Click on the latest deploy
   - Check "Deploy log" for errors

---

## Success Checklist

✅ Node.js and Yarn installed  
✅ Dependencies installed (`yarn install`)  
✅ Build created (`yarn build`)  
✅ Build folder contains `_redirects` file  
✅ Deployed the `build` folder (not frontend folder)  
✅ All routes work (home, /package/1, /contact)  

**Your site should now be live without any 404 errors!** 🎉
