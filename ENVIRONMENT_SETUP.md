# Environment Configuration Guide

This guide explains how to properly configure environment variables for the portfolio application.

## 🔒 Security Best Practices

### 1. **Never commit sensitive data to version control**

- API keys, secrets, and credentials should never be hardcoded
- Use environment files that are ignored by git
- Use different configurations for development and production

### 2. **Environment Files Structure**

```
src/environments/
├── environment.ts          # Development configuration
├── environment.prod.ts     # Production configuration
└── environment.staging.ts  # Staging configuration (optional)
```

## 📧 EmailJS Configuration

### Step 1: Get your EmailJS credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create an account and set up your email service
3. Get your:
   - Service ID
   - Template ID
   - Public Key

### Step 2: Configure Environment Files

#### Development (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: "your_development_service_id",
    templateId: "your_development_template_id",
    publicKey: "your_development_public_key",
  },
};
```

#### Production (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  emailjs: {
    serviceId: "your_production_service_id",
    templateId: "your_production_template_id",
    publicKey: "your_production_public_key",
  },
};
```

## 🚀 Deployment Strategies

### GitHub Pages / Netlify / Vercel

For static hosting, you can use environment files with build-time replacement:

1. **Build with production environment:**

   ```bash
   ng build --configuration=production
   ```

2. **Environment variables are replaced at build time**

### GitHub Secrets (for CI/CD)

If using GitHub Actions for deployment:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add these secrets:

   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

3. Create a build script that replaces environment values:
   ```yaml
   # .github/workflows/deploy.yml
   - name: Replace environment variables
     run: |
       sed -i 's/your_service_id_here/${{ secrets.EMAILJS_SERVICE_ID }}/g' src/environments/environment.prod.ts
       sed -i 's/your_template_id_here/${{ secrets.EMAILJS_TEMPLATE_ID }}/g' src/environments/environment.prod.ts
       sed -i 's/your_public_key_here/${{ secrets.EMAILJS_PUBLIC_KEY }}/g' src/environments/environment.prod.ts
   ```

### Docker Deployment

For containerized deployments, use environment variables:

```dockerfile
# Dockerfile
ENV EMAILJS_SERVICE_ID=""
ENV EMAILJS_TEMPLATE_ID=""
ENV EMAILJS_PUBLIC_KEY=""
```

## 🛠️ Usage in Components

```typescript
import { environment } from "../../environments/environment";

// Use environment variables
emailjs.init(environment.emailjs.publicKey);
emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, templateParams);
```

## 📝 Local Development Setup

1. Copy the example file:

   ```bash
   cp .env.example .env
   ```

2. Fill in your actual values in `.env`

3. Run the development server:
   ```bash
   ng serve
   ```

## ⚠️ Important Notes

- Never commit real API keys to version control
- Use different keys for development and production
- Regularly rotate your API keys
- Monitor usage in EmailJS dashboard
- Set up rate limiting if needed

## 🔍 Troubleshooting

### Common Issues:

1. **Build errors**: Ensure environment files exist and have correct syntax
2. **EmailJS not working**: Check that API keys are correct and active
3. **Environment not loading**: Verify import paths are correct

### Testing:

```bash
# Test development build
ng serve

# Test production build locally
ng build --configuration=production
ng serve --configuration=production
```
