# Companion UI Builder - Deployment Guide

## 🚀 Quick Deploy to Vercel

This is a **TanStack Start** application optimized for Vercel deployment.

### Prerequisites

- Node.js 22.x or later
- npm/yarn/bun/pnpm package manager
- Vercel account (free tier available)

### Option 1: One-Click Deploy (Recommended)

1. Click the button below:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pantherlord0508-ops/companion-ui-builder)

2. Vercel will automatically:
   - Detect the framework (Vite)
   - Set up the build command
   - Configure the output directory
   - Deploy your app

### Option 2: GitHub Integration (Automatic Deployments)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Search for and select `pantherlord0508-ops/companion-ui-builder`
5. Vercel auto-detects:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

**Benefits**:
- Automatic deployments on every push to `main`
- Pull request preview deployments
- Automatic rollbacks

### Option 3: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📝 Environment Variables

### Setting Environment Variables in Vercel

1. Go to **Project Settings** → **Environment Variables**
2. Add variables for each environment:
   - **Development**: `npm run dev`
   - **Preview**: Pull request deployments
   - **Production**: Main branch deployments

### Public Variables (Client-side)

Prefix with `VITE_` to expose to browser:

```env
VITE_APP_NAME=Companion UI Builder
VITE_APP_URL=https://your-domain.com
VITE_API_URL=https://api.your-domain.com
```

### Secret Variables (Server-only)

Do NOT prefix with `VITE_` - only available in `.server.ts` files:

```env
DATABASE_URL=
API_SECRET_KEY=
STRIPE_SECRET=
```

## 🏗️ Build Configuration

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "nodeVersion": "22.x",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

**Key Settings**:
- **buildCommand**: Compiles TypeScript and optimizes assets
- **outputDirectory**: `dist/` contains production-ready files
- **nodeVersion**: Matches TanStack Start requirements
- **rewrites**: Routes all traffic to index for SPA routing

## 🔍 Project Structure

```
src/
├── routes/              # File-based routing (TanStack Router)
│   ├── __root.tsx       # Root layout with providers
│   ├── index.tsx        # Home page (/)
│   ├── profile.tsx      # Profile page (/profile)
│   ├── explore.tsx      # Explore page (/explore)
│   └── article.tsx      # Article page (/article)
├── components/          # React components
├── hooks/               # Custom React hooks
├── lib/
│   ├── config.server.ts # Server-only configuration
│   ├── error-capture.ts # Error handling
│   ├── error-page.ts    # Error UI
│   └── utils.ts         # Utility functions
├── styles.css           # Global styles (Tailwind)
├── router.tsx           # Router configuration
├── start.ts             # TanStack Start setup
└── server.ts            # Server entry point

public/                  # Static assets
```

## 🔒 Security Checklist

- [ ] No secrets committed to git (use `.env.local`)
- [ ] Environment variables configured in Vercel dashboard
- [ ] `.vercelignore` excludes unnecessary files
- [ ] No debugging code in production builds
- [ ] CORS headers configured if needed
- [ ] Security headers added in `vercel.json`

## 📊 Performance Optimization

### TanStack Start Features

- **Automatic Code Splitting**: Routes are split into separate chunks
- **SSR**: Server-side rendering for better SEO and initial load
- **Streaming**: Progressive rendering for faster perceived performance

### Monitoring

- Use **Vercel Analytics** to track performance
- Monitor **Web Vitals**: LCP, FID, CLS
- Check **Error Tracking** in Vercel dashboard

## 🐛 Troubleshooting

### Build Fails on Vercel

**Problem**: Build works locally but fails on Vercel

**Solutions**:
1. Check Node.js version matches (22.x)
2. Verify all dependencies in `package.json` (not dev-only)
3. Check build logs in Vercel dashboard
4. Ensure `.env` variables are set in Vercel

### Type Errors

**Problem**: TypeScript errors during build

```bash
# Verify types locally
npm run build

# Check specific file
npx tsc --noEmit
```

### Missing Dependencies

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Verify build
npm run build
```

### Routes Not Working

**Check**:
1. Routes follow TanStack naming conventions
2. `src/routes/__root.tsx` contains `<Outlet />`
3. `routeTree.gen.ts` includes all routes (auto-generated)

## 📚 Resources

- [TanStack Start Docs](https://tanstack.com/start/latest)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Documentation](https://vercel.com/docs)

## 🆘 Support

For issues:

1. Check [Existing Issues](https://github.com/pantherlord0508-ops/companion-ui-builder/issues)
2. Create a [New Issue](https://github.com/pantherlord0508-ops/companion-ui-builder/issues/new)
3. Review error logs in Vercel dashboard

## 📖 Additional Reading

### TanStack Start Specifics

- **Server Functions**: Use `@tanstack/react-start` for server logic
- **Middleware**: Custom middleware in `src/start.ts`
- **Error Handling**: Centralized error handling in `src/server.ts`
- **Environment Variables**: Use `process.env` in `.server.ts` files

### Vercel Best Practices

- Use environment variables for sensitive data
- Enable "Ignore Build Step" to skip rebuilds when unnecessary
- Set up custom domains and SSL
- Use Vercel Analytics for performance monitoring
- Configure branch protection rules

---

**Last Updated**: 2026-06-08
**TanStack Start Version**: Latest
**Node Version**: 22.x
