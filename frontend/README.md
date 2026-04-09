# Rajasthan Trip Plan - Frontend

## Quick Start for Deployment

### 1. Install Dependencies
```bash
yarn install
```

### 2. Build for Production
```bash
yarn build
```

### 3. Deploy to Netlify
Deploy the `build` folder (drag and drop to https://app.netlify.com/drop)

## Important Files

- **`public/_redirects`** - Required for React Router to work on Netlify
- **`netlify.toml`** - Netlify configuration

## Build Output

After running `yarn build`, you'll get a `build` folder containing:
- `index.html`
- `static/` (JS, CSS, images)
- `_redirects` (auto-copied from public/)

## Deployment

**✅ DO**: Deploy the `build` folder  
**❌ DON'T**: Deploy the entire `frontend` folder

## Routes

- `/` - Home page
- `/package/:id` - Package details (e.g., /package/1)
- `/contact` - Contact page

All routes require the `_redirects` file to work on Netlify!

## Contact Details

- Phone: +91 92511 10777
- Address: 22, Chandravihar Colony, Vaishali Nagar, Jaipur, Rajasthan
- Email: info@rajasthantripplan.com

## Need Help?

See `MANUAL_DEPLOYMENT_GUIDE.md` in the parent directory for detailed instructions.
