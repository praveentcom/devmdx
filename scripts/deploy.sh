#!/bin/bash

# DevCard Deployment Script
# This script can be used for manual deployments or testing

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required environment variables are set
check_env_vars() {
    local missing_vars=()
    
    if [ -z "$CD_SSH_IP" ]; then missing_vars+=("CD_SSH_IP"); fi
    if [ -z "$CD_SSH_USERNAME" ]; then missing_vars+=("CD_SSH_USERNAME"); fi
    if [ -z "$CD_SSH_WEBSITE_URL" ]; then missing_vars+=("CD_SSH_WEBSITE_URL"); fi
    
    if [ ${#missing_vars[@]} -ne 0 ]; then
        print_error "Missing required environment variables:"
        for var in "${missing_vars[@]}"; do
            echo "  - $var"
        done
        echo ""
        echo "Please set these variables before running the deployment:"
        echo "  export CD_SSH_IP='your-server-ip'"
        echo "  export CD_SSH_USERNAME='your-ssh-username'"
        echo "  export CD_SSH_WEBSITE_URL='your-domain.com'"
        echo ""
        echo "Optional:"
        echo "  export CD_SSH_PORT='22'  # Default SSH port"
        exit 1
    fi
}

# Main deployment function
deploy() {
    print_status "Starting deployment to $CD_SSH_WEBSITE_URL..."
    
    # Set default SSH port if not specified
    SSH_PORT=${CD_SSH_PORT:-22}
    
    # Get current git repository URL
    REPO_URL=$(git config --get remote.origin.url)
    if [ -z "$REPO_URL" ]; then
        print_error "Could not determine git repository URL"
        exit 1
    fi
    
    print_status "Repository: $REPO_URL"
    print_status "Target server: $CD_SSH_USERNAME@$CD_SSH_IP:$SSH_PORT"
    print_status "Website URL: $CD_SSH_WEBSITE_URL"
    
    # SSH and execute deployment commands
    ssh -p $SSH_PORT "$CD_SSH_USERNAME@$CD_SSH_IP" << DEPLOY_SCRIPT
        set -e
        
        # Variables
        WEBSITE_URL="$CD_SSH_WEBSITE_URL"
        REPO_URL="$REPO_URL"
        APP_DIR="/root/apps/\$WEBSITE_URL"
        NGINX_SITE="/etc/nginx/sites-available/\$WEBSITE_URL"
        NGINX_ENABLED="/etc/nginx/sites-enabled/\$WEBSITE_URL"
        
        echo "🚀 Starting deployment for \$WEBSITE_URL..."
        
        # Create app directory if it doesn't exist
        mkdir -p \$APP_DIR
        cd \$APP_DIR
        
        # Clone or update repository
        if [ -d ".git" ]; then
            echo "📦 Updating existing repository..."
            git fetch origin
            git reset --hard origin/main
        else
            echo "📦 Cloning repository..."
            git clone \$REPO_URL .
        fi
        
        # Preserve existing data directory
        if [ -d "data" ]; then
            echo "💾 Preserving existing data directory..."
        else
            echo "📝 No existing data directory found"
        fi
        
        # Create .env from .env.example if not exists
        if [ ! -f ".env" ] && [ -f ".env.example" ]; then
            echo "⚙️  Creating .env from .env.example..."
            cp .env.example .env
            echo "PORT=3000" >> .env
        fi
        
        # Install dependencies
        echo "📋 Installing dependencies..."
        npm ci --production
        
        # Initialize data if needed
        if [ ! -d "data" ]; then
            echo "🔧 Initializing data directory..."
            npm run init -- --skip
        fi
        
        # Build the application
        echo "🏗️  Building application..."
        npm run build
        
        # Check if NGINX configuration exists
        if [ ! -f "\$NGINX_SITE" ]; then
            echo "❌ NGINX configuration not found at \$NGINX_SITE"
            echo "Please create NGINX configuration manually before deployment."
            echo "See .github/DEPLOYMENT.md for setup instructions."
            exit 1
        else
            echo "✅ NGINX configuration found"
        fi
        
        # Test NGINX configuration
        echo "🔍 Testing NGINX configuration..."
        nginx -t
        
        # Stop existing PM2 process if running
        pm2 stop \$WEBSITE_URL 2>/dev/null || true
        pm2 delete \$WEBSITE_URL 2>/dev/null || true
        
        # Start application with PM2
        echo "🚀 Starting application with PM2..."
        pm2 start npm --name "\$WEBSITE_URL" -- run start
        pm2 save
        
        # Reload NGINX
        systemctl reload nginx
        
        echo "✅ Deployment completed successfully!"
        echo "🌐 Website should be available at: http://\$WEBSITE_URL"
        
        # Show PM2 status
        pm2 list
DEPLOY_SCRIPT
    
    print_success "Deployment completed successfully!"
    print_success "🌐 Website should be available at: http://$CD_SSH_WEBSITE_URL"
}

# Main script execution
main() {
    echo "DevCard Deployment Script"
    echo "========================="
    echo ""
    
    check_env_vars
    deploy
}

# Show help if requested
if [[ "$1" == "--help" || "$1" == "-h" ]]; then
    echo "DevCard Deployment Script"
    echo "========================="
    echo ""
    echo "This script deploys your DevCard application to a remote server via SSH."
    echo ""
    echo "Required environment variables:"
    echo "  CD_SSH_IP         - Server IP address"
    echo "  CD_SSH_USERNAME   - SSH username"
    echo "  CD_SSH_WEBSITE_URL - Domain name for the website"
    echo ""
    echo "Optional environment variables:"
    echo "  CD_SSH_PORT       - SSH port (default: 22)"
    echo ""
    echo "Usage:"
    echo "  ./scripts/deploy.sh"
    echo ""
    echo "Example:"
    echo "  export CD_SSH_IP='192.168.1.100'"
    echo "  export CD_SSH_USERNAME='root'"
    echo "  export CD_SSH_WEBSITE_URL='mydevcard.com'"
    echo "  ./scripts/deploy.sh"
    exit 0
fi

main
