import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.avif': 'image/avif',
    '.csv': 'text/csv',
    '.pdf': 'application/pdf',
    '.ipynb': 'application/json',
  };
  return types[ext] || 'application/octet-stream';
}

function portfolioStaticAssets() {
  const mappings = [
    { route: '/assets/', source: path.join(rootDir, 'assets'), output: 'assets' },
    { route: '/projects/projectsAll/', source: path.join(rootDir, 'projects', 'projectsAll'), output: path.join('projects', 'projectsAll') },
  ];

  return {
    name: 'portfolio-static-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = mappings.find((item) => req.url?.startsWith(item.route));
        if (!match || !req.url) {
          next();
          return;
        }
        const decoded = decodeURIComponent(req.url.split('?')[0].slice(match.route.length));
        const filePath = path.normalize(path.join(match.source, decoded || 'index.html'));
        if (!filePath.startsWith(match.source) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          next();
          return;
        }
        res.setHeader('Content-Type', contentType(filePath));
        fs.createReadStream(filePath).pipe(res);
      });
    },
    closeBundle() {
      mappings.forEach((item) => {
        if (fs.existsSync(item.source)) {
          fs.cpSync(item.source, path.join(rootDir, 'dist', item.output), { recursive: true });
        }
      });
    },
  };
}

export default defineConfig({
  publicDir: 'public',
  plugins: [react(), portfolioStaticAssets()],
  server: {
    port: 5173,
  },
});
