# GitHub Pages Deployment Guide

This guide explains how to set up automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Setup Instructions

### Step 1: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:

```
EMAILJS_SERVICE_ID    = your_actual_service_id
EMAILJS_TEMPLATE_ID   = your_actual_template_id  
EMAILJS_PUBLIC_KEY    = your_actual_public_key
```

### Step 2: Enable GitHub Pages

#### Option A: Using GitHub Pages (Recommended)
1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy to the Pages environment

#### Option B: Using gh-pages branch
1. Go to **Settings** → **Pages** 
2. Under **Source**, select **Deploy from a branch**
3. Choose **gh-pages** branch and **/ (root)** folder
4. Use the `deploy-gh-pages.yml` workflow instead

### Step 3: Choose Your Workflow

We've created two workflow options:

#### **Option A: `deploy.yml` (Recommended)**
- Uses GitHub's native Pages deployment
- More modern and secure approach
- Automatic artifact management
- Better integration with GitHub Pages

#### **Option B: `deploy-gh-pages.yml`**
- Uses traditional gh-pages branch
- Compatible with older setups
- Creates a separate branch for deployment files

**Choose one workflow and delete the other** to avoid conflicts.

## 🔧 Workflow Features

### Triggers
- **Automatic**: Runs on every push to `main` branch
- **Manual**: Can be triggered manually from Actions tab
- **Pull Request**: Builds on PRs to `main` (preview only)

### Build Process
1. **Checkout code** from repository
2. **Setup Node.js** environment (version 18)
3. **Install dependencies** using npm ci
4. **Configure environment variables** from GitHub secrets
5. **Build application** using production configuration
6. **Deploy** to GitHub Pages

### Security
- Environment variables are injected at build time
- No sensitive data stored in repository
- Secure token-based authentication

## 📝 Available Scripts

```bash
# Development
npm start                 # Start dev server
npm run build            # Build for development
npm run watch            # Build and watch for changes

# Production
npm run build:prod       # Build for production
npm run deploy           # Build for GitHub Pages
npm run deploy:prod      # Build for GitHub Pages (production config)
npm run preview          # Preview production build locally

# Testing
npm test                 # Run unit tests
npm run lint             # Run linting (if configured)
```

## 🚀 Deployment Process

### Automatic Deployment
1. Push changes to `main` branch
2. GitHub Actions automatically triggers
3. Application is built and deployed
4. Available at: `https://movinsilva.github.io/portfolio_web/`

### Manual Deployment
1. Go to **Actions** tab in GitHub
2. Select the deployment workflow
3. Click **Run workflow**
4. Choose the branch and run

## 🔍 Monitoring Deployments

### Check Deployment Status
1. Go to **Actions** tab
2. View workflow runs and their status
3. Check logs for any errors

### Troubleshooting
- **Build fails**: Check the Actions logs for specific errors
- **Environment variables**: Ensure secrets are properly set
- **Pages not updating**: Check Pages settings and deployment status

## 🌐 Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your `src/assets/` folder:
   ```
   yourdomain.com
   ```

2. Update the base href in package.json:
   ```json
   "deploy": "ng build --output-path docs --base-href /"
   ```

3. Configure DNS settings with your domain provider

## 📊 Performance Optimization

The workflow includes several optimizations:
- **npm ci** for faster, reliable installs
- **Caching** for Node.js dependencies
- **Production builds** with optimizations enabled
- **Artifact compression** for faster deployments

## 🔄 Branch Strategy

### Recommended Flow
```
feature-branch → main → automatic deployment
```

### Development Process
1. Create feature branches from `main`
2. Make changes and test locally
3. Create pull request to `main`
4. Merge PR triggers automatic deployment
5. Monitor deployment in Actions tab

## ⚠️ Important Notes

- **Only push to main when ready to deploy**
- **Test changes locally before pushing**
- **Monitor GitHub Actions usage** (free tier has limits)
- **Keep secrets secure** and rotate them regularly
- **Check deployment logs** if site doesn't update

## 🆘 Troubleshooting Common Issues

### 1. Build Fails
```bash
# Check locally first
npm ci
npm run deploy:prod
```

### 2. Environment Variables Not Working
- Verify secrets are set correctly in GitHub
- Check secret names match exactly
- Ensure no typos in workflow file

### 3. Pages Not Updating
- Check if deployment completed successfully
- Verify Pages is enabled and configured correctly
- Clear browser cache
- Check if custom domain is configured properly

### 4. Permission Errors
- Ensure repository has Pages enabled
- Check if workflow has proper permissions
- Verify branch protection rules don't block deployment
