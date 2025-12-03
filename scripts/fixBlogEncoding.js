const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'backend', 'data', 'blogData.js');
const backupPath = filePath + '.backup.' + Date.now();

if (!fs.existsSync(filePath)) {
  console.error('blogData.js not found at', filePath);
  process.exit(1);
}

const raw = fs.readFileSync(filePath, 'utf8');

const replacements = [
  [/â€”/g, '—'],
  [/â€“/g, '–'],
  [/â€™/g, '’'],
  [/â€œ/g, '“'],
  [/â€�/g, '”'],
  [/â€˜/g, '‘'],
  [/â€¢/g, '•'],
  [/â€¦/g, '…'],
  [/Ã©/g, 'é'],
  [/â„¢/g, '™'],
  [/â€º/g, '>'],
  [/â”œ/g, '├'],
  [/â”€/g, '─'],
  [/â”‚/g, '│'],
  [/â””/g, '└'],
  [/â”/g, '┐'],
  [/â”¤/g, '┤'],
  [/âŒ/g, '✖'],
  [/âœ…/g, '✓'],
  [/Â±/g, '±'],
  [/Â©/g, '©'],
  [/Â®/g, '®'],
  [/Â/g, '']
];

let out = raw;
replacements.forEach(([pat, repl]) => {
  out = out.replace(pat, repl);
});

if (out === raw) {
  console.log('No replacements necessary — file looks clean or mappings did not match.');
  process.exit(0);
}

// Backup original
fs.copyFileSync(filePath, backupPath);
fs.writeFileSync(filePath, out, 'utf8');
console.log('Rewrote', filePath);
console.log('Backup created at', backupPath);

// Quick report: count remaining mojibake-like sequences
const checks = [/â/g, /Ã/g, /Â/g];
checks.forEach(rx => {
  const m = out.match(rx);
  console.log(rx + ' occurrences:', m ? m.length : 0);
});

console.log('Done. Restart your Node server to pick up changes.');
