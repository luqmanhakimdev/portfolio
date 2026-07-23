# Luqman Hakim — Portfolio

Site: [luqmanhakim.dev](https://luqmanhakim.dev)

SvelteKit + Svelte 5 portfolio, deployed to Cloudflare Pages.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
npm run deploy   # build + wrangler pages deploy (local)
```

## Deploy (GitHub Actions → Cloudflare Pages)

Workflow: `.github/workflows/deploy-pages.yml`  
Builds on push/PR to `main`/`master`, then deploys the **luqmanhakim-dev** Pages project.

### 1. Create API token

Cloudflare → **My Profile** → **API Tokens** → **Create Token**:

- Use **Edit Cloudflare Workers** (includes Pages), or custom with Cloudflare Pages Edit

### 2. Add GitHub secrets

Repo → **Settings** → **Secrets and variables** → **Actions**:

| Secret | Value |
|--------|--------|
| `CLOUDFLARE_API_TOKEN` | token from step 1 |
| `CLOUDFLARE_ACCOUNT_ID` | Workers & Pages → Account ID |

### 3. Push

```bash
git push origin main
```

### 4. Attach custom domain `luqmanhakim.dev`

After the first deploy:

1. Cloudflare dashboard → **Workers & Pages** → **luqmanhakim-dev**
2. **Custom domains** → **Set up a custom domain** → `luqmanhakim.dev` (and `www` if you want)
3. If the domain is already on Cloudflare DNS, it will add the right records automatically  
   If DNS is elsewhere, point:
   - `luqmanhakim.dev` → CNAME to `luqmanhakim-dev.pages.dev` (or follow the dashboard instructions)
   - Optional: `www` → CNAME to `luqmanhakim-dev.pages.dev`

Customize content in `src/lib/data/content.ts`.
