# Branch Protection Setup

This document outlines the recommended branch protection rules for the DevCard repository to ensure code quality and prevent broken builds from being merged.

## Required Status Checks

To enable automatic PR blocking when builds fail, configure the following branch protection rules for the `main` branch:

### 1. GitHub Repository Settings

Navigate to: **Settings → Branches → Add rule** for `main` branch

### 2. Required Status Checks

Enable the following status checks that must pass before merging:

- ✅ `build-and-test (18.x)` - Build and test on Node.js 18.x
- ✅ `build-and-test (20.x)` - Build and test on Node.js 20.x  
- ✅ `security-audit` - Security vulnerability audit

### 3. Recommended Protection Rules

```yaml
Branch name pattern: main
Protect matching branches: ✅

Restrict pushes that create files:
- Require a pull request before merging: ✅
  - Require approvals: 1
  - Dismiss stale reviews when new commits are pushed: ✅
  - Require review from code owners: ✅ (if CODEOWNERS file exists)

Require status checks to pass before merging: ✅
- Require branches to be up to date before merging: ✅
- Status checks that are required:
  - build-and-test (18.x)
  - build-and-test (20.x)
  - security-audit

Restrict pushes that create matching branches:
- Restrict pushes that create matching branches: ✅
- Allow force pushes: ❌
- Allow deletions: ❌
```

### 4. Additional Recommendations

- **Require signed commits**: Enable for additional security
- **Include administrators**: Apply rules to repository administrators
- **Allow specified actors to bypass**: Only for emergency situations

## Workflow Integration

The CI workflow (`.github/workflows/ci.yml`) will automatically:

1. **Run on every PR** to the `main` branch
2. **Test multiple Node.js versions** (18.x, 20.x) for compatibility
3. **Execute linting** to maintain code style
4. **Perform type checking** to catch TypeScript errors
5. **Build the project** to ensure no build failures
6. **Run security audit** to check for vulnerabilities

## Manual Setup Steps

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Branches**
3. Click **Add rule** 
4. Enter `main` as the branch name pattern
5. Configure the protection settings as outlined above
6. Save the rule

## Testing the Setup

After configuring branch protection:

1. Create a test branch with a breaking change
2. Open a PR to `main`
3. Verify that the CI checks run automatically
4. Confirm that the PR cannot be merged until all checks pass

---

*This setup ensures that only tested, working code reaches the main branch, maintaining the stability of your open source project.*
