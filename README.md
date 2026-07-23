# Luqman Hakim — Portfolio

Site: [luqmanhakim.dev](https://luqmanhakim.dev)

SvelteKit + Svelte 5 portfolio, deployed to Cloudflare Workers.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
npm run deploy   # build + wrangler deploy (local)
```

## Deploy (GitHub Actions → Cloudflare Workers)

Workflow: `.github/workflows/deploy-pages.yml`  
Builds on push/PR to `main`/`master`, then runs `wrangler deploy` for Worker **`luqmanhakim-dev`**.

Default URL: `https://luqmanhakim-dev.<your-subdomain>.workers.dev`

### 1. Create API token

Cloudflare → **My Profile** → **API Tokens** → **Create Token**:

- Use **Edit Cloudflare Workers**

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

1. Cloudflare → **Workers & Pages** → **luqmanhakim-dev**
2. **Settings** → **Domains & Routes** (or **Triggers** / **Custom Domains**)
3. Add `luqmanhakim.dev` (and `www` if you want)

If the domain is on Cloudflare DNS, records are usually configured for you.

Customize content in `src/lib/data/content.ts`.
