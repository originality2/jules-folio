# jules-folio

Portfolio website for **Jules Kostalova** — Filmmaker & Social Media Manager based in Prague, Czech Republic.

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- Plain CSS (no UI framework)
- Purely static content — no backend

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport intro with name, role, and CTAs |
| **About** | Bio, skills & tools |
| **Film Work** | 6 selected projects across short film, documentary, branded content and experimental formats |
| **Social Media** | Services overview and 3 client case studies with key metrics |
| **Contact** | Email, Instagram, Vimeo, and LinkedIn links |

## Development

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # ESLint
```

## GitHub Actions: S3 deploy

This repo includes a workflow at [.github/workflows/deploy-s3.yml](.github/workflows/deploy-s3.yml) and a deploy script at [scripts/deploy_to_s3.sh](scripts/deploy_to_s3.sh).

- The pipeline can run on pushes, pull requests, and manual dispatch.
- The script always checks the branch and only uploads on `main`.
- Upload destination is `s3://$S3_BUCKET` using `aws s3 sync dist/ ... --delete`.

Set these repository secrets in GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (for example `eu-central-1`)
- `S3_BUCKET` (bucket name only, no `s3://` prefix)
