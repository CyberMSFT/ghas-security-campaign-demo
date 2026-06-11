# GHAS Security Campaign Demo - About the Campaign Button

## Question: Where is the "Campaign" button?

The **"Campaign"** button is part of GitHub's **Security Advisory system**. Here's what you need to know:

### What is the Campaign Button For?

The Campaign button is used to:
- 📢 **Publish security advisories** for your project
- 🤝 **Coordinate vulnerability disclosure** with researchers
- ⏱️ **Manage advisory timelines** and public release dates
- 🔐 **Provide responsible disclosure** processes for open source projects

### Why You Might Not See It

The Campaign/Advisory feature appears in the **Security tab** under "Advisories" section when:

1. ✅ Your repository is **public** (it is!)
2. ✅ Security features are **enabled** in Settings
3. ✅ You have proper **permissions** on the repository (you do!)
4. ✅ Your GitHub plan **includes** this feature (available on all plans)

**Check Settings → Code security and analysis** to enable Security Advisories if not already enabled.

---

## What We're Really Demonstrating

This repo demonstrates a **comprehensive security campaign** that is BROADER than just the Campaign button:

### The Complete Security Campaign Includes:

| Feature | What It Does | Where It Shows |
|---------|------------|-----------------|
| **Code Scanning** | Find vulnerabilities in code (SQL injection, XSS, etc.) | Security → Code scanning alerts |
| **Secret Scanning** | Prevent credentials from being committed | Security → Secret scanning alerts |
| **Dependabot** | Track and fix vulnerable dependencies | Security → Dependabot alerts |
| **Security Policy** | Define responsible disclosure process | SECURITY.md file |
| **Branch Protection** | Enforce security reviews before merge | Settings → Branch protection |
| **Security Advisory** (Campaign) | Publish advisories for discovered vulns | Security → Advisories → Campaign |

---

## Expected GHAS Alerts in This Demo

### ✅ Code Scanning Alerts
- SQL Injection vulnerabilities
- Cross-Site Scripting (XSS) flaws
- Path traversal issues
- Command injection risks
- Weak cryptography patterns

### ✅ Secret Scanning Alerts
- AWS Access Keys & Secrets
- GitHub Personal Access Tokens
- Slack Bot Tokens & Webhooks
- Stripe API Keys
- Database passwords
- Private encryption keys

### ✅ Dependabot Alerts
- Express 4.16.2 - Multiple CVEs
- Lodash 4.17.4 - Prototype pollution
- Request 2.88.0 - Deprecated and vulnerable

---

## Demo Flow

1. ✅ **Show Code Scanning** - Security tab → Code scanning alerts
2. ✅ **Show Secret Scanning** - Security tab → Secret scanning alerts  
3. ✅ **Show Dependabot** - Security tab → Dependabot alerts
4. ✅ **Show Security Policy** - SECURITY.md
5. ✅ **Show Branch Protection** - Settings → Branch protection
6. ✅ **Show Campaign/Advisory** - Security → Advisories

---

**Repository**: CyberMSFT/ghas-security-campaign-demo  
**Last Updated**: 2026-06-11
