# GitHub Pages Deployment Script
# Run this script to deploy your portfolio to GitHub Pages

Write-Host "🚀 Bufolio - GitHub Pages Deployment Helper" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git repository not initialized!" -ForegroundColor Red
    Write-Host "Run: git init" -ForegroundColor Yellow
    exit 1
}

# Check if remote is set
$remote = git remote -v 2>$null
if (-not $remote) {
    Write-Host "⚠️  No remote repository configured!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please follow these steps:" -ForegroundColor Cyan
    Write-Host "1. Create a new repository on GitHub named 'Bufolio'" -ForegroundColor White
    Write-Host "2. Run the following command (replace YOUR_USERNAME):" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/Bufolio.git" -ForegroundColor Green
    Write-Host ""
    exit 1
}

Write-Host "✅ Git repository configured" -ForegroundColor Green
Write-Host "📍 Remote: $($remote -split "`n" | Select-Object -First 1)" -ForegroundColor Gray
Write-Host ""

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Uncommitted changes detected" -ForegroundColor Yellow
    Write-Host ""
    
    $response = Read-Host "Do you want to commit all changes? (y/n)"
    if ($response -eq 'y' -or $response -eq 'Y') {
        $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        }
        
        Write-Host "Adding files..." -ForegroundColor Cyan
        git add .
        
        Write-Host "Committing..." -ForegroundColor Cyan
        git commit -m $commitMessage
        
        Write-Host "✅ Changes committed" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to your GitHub repository" -ForegroundColor White
    Write-Host "2. Click on 'Settings' tab" -ForegroundColor White
    Write-Host "3. Click on 'Pages' in the left sidebar" -ForegroundColor White
    Write-Host "4. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "5. Wait for the deployment to complete (check 'Actions' tab)" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Your site will be available at:" -ForegroundColor Cyan
    
    # Try to extract username from remote URL
    $remoteUrl = git remote get-url origin
    if ($remoteUrl -match 'github\.com[:/]([^/]+)/') {
        $username = $matches[1]
        Write-Host "   https://$username.github.io/Bufolio/" -ForegroundColor Green
    } else {
        Write-Host "   https://YOUR_USERNAME.github.io/Bufolio/" -ForegroundColor Green
    }
} else {
    Write-Host ""
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Please check the error message above" -ForegroundColor Yellow
}

Write-Host ""
