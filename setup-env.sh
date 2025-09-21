#!/bin/bash

# Environment Setup Script
# This script creates the environment file from template for local development

echo "🔧 Setting up environment file..."

# Check if environment file already exists
if [ -f "src/environments/environment.ts" ]; then
    echo "⚠️  Environment file already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Create environment file from template
echo "📄 Creating environment.ts from template..."
cp src/environments/environment.template.ts src/environments/environment.ts

echo "✅ Environment file created!"
echo ""
echo "🔑 Next steps:"
echo "1. Edit src/environments/environment.ts with your EmailJS credentials"
echo "2. Replace YOUR_EMAILJS_SERVICE_ID with your actual service ID"
echo "3. Replace YOUR_EMAILJS_TEMPLATE_ID with your actual template ID"
echo "4. Replace YOUR_EMAILJS_PUBLIC_KEY with your actual public key"
echo ""
echo "📚 Get your EmailJS credentials from: https://dashboard.emailjs.com/"
echo ""
echo "🚀 After configuration, run: npm start"
