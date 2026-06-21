import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const bundledNode = path.join(
  process.env.USERPROFILE || '',
  '.cache',
  'codex-runtimes',
  'codex-primary-runtime',
  'dependencies',
  'node',
  'bin',
  'node.exe',
);

const nodeBin = existsSync(bundledNode) ? bundledNode : process.execPath;
const rawArgs = process.argv.slice(2).filter((arg) => arg !== '--');
const [command, ...rest] = rawArgs;
const args = command === 'dev' ? rest : rawArgs;

const result = spawnSync(nodeBin, [viteBin, ...args], {
  cwd: root,
  env: process.env,
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
