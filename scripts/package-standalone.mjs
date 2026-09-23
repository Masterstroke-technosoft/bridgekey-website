// Post-build packaging for Next.js `output: 'standalone'`.
// Copies public/ and .next/static into .next/standalone, then tars it up.
import { cpSync, existsSync, renameSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const root = process.cwd();
const standalone = join(root, '.next', 'standalone');

if (!existsSync(standalone)) {
  console.error('.next/standalone not found — is `output: "standalone"` set in next.config?');
  process.exit(1);
}

const copy = (from, to) => {
  if (!existsSync(from)) return;
  cpSync(from, to, { recursive: true });
  console.log(`copied ${from} -> ${to}`);
};

copy(join(root, 'public'), join(standalone, 'public'));
copy(join(root, '.next', 'static'), join(standalone, '.next', 'static'));

const tarball = join(standalone, 'build.tar.gz');
rmSync(tarball, { force: true });

// Stage one level up, then move into place. Writing the archive inside the tree
// being archived makes tar exit 1 on a cosmetic "file changed as we read it"
// warning, which would break the `&&` chain in `npm run build`. Staging in
// .next/ (rather than the OS temp dir) keeps the move on the same drive.
const staged = join(root, '.next', 'build.tar.gz.tmp');
rmSync(staged, { force: true });
try {
  // --force-local: without it tar reads the `D:` in an absolute Windows path as
  // a remote host spec and fails with "Cannot connect to D: resolve failed".
  execFileSync('tar', ['--force-local', '-czf', staged, '.'], {
    cwd: standalone,
    stdio: 'inherit',
  });
  renameSync(staged, tarball);
} finally {
  rmSync(staged, { force: true });
}
console.log(`created ${tarball}`);
