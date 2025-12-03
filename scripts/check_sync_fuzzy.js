const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../public/products.json');
const categoryPath = path.join(__dirname, '../src/components/CategoryPage.js');

function normalize(s) {
  return s
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/["'’`.,–‑–—]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const prodList = products.filter(p => !p._comment && p.title).map(p => ({id: String(p.id), title: p.title, n: normalize(p.title)}));

const catRaw = fs.readFileSync(categoryPath, 'utf8');
const entryRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let match;
const notFound = [];
while ((match = entryRegex.exec(catRaw)) !== null) {
  const [full, id, name] = match;
  const n = normalize(name);
  const exact = prodList.find(p => p.n === n);
  if (!exact) {
    // try contains
    const contains = prodList.find(p => p.n.includes(n) || n.includes(p.n));
    if (contains) {
      console.log(`Suggested match for '${name}' (cat id ${id}): product id ${contains.id} -> '${contains.title}'`);
    } else {
      // try fuzzy by Levenshtein distance limited
      const distances = prodList.map(p => ({id: p.id, title: p.title, d: levenshtein(n, p.n)}));
      distances.sort((a,b)=>a.d-b.d);
      const best = distances[0];
      if (best.d <= 8) {
        console.log(`Fuzzy suggestion for '${name}' (cat id ${id}): product id ${best.id} -> '${best.title}' (dist ${best.d})`);
      } else {
        notFound.push({name, id});
      }
    }
  }
}

if (notFound.length) {
  console.log('\nNo matches found for:');
  for (const n of notFound) console.log(n);
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for (let i=0;i<=m;i++) dp[i][0]=i;
  for (let j=0;j<=n;j++) dp[0][j]=j;
  for (let i=1;i<=m;i++){
    for (let j=1;j<=n;j++){
      dp[i][j] = Math.min(
        dp[i-1][j]+1,
        dp[i][j-1]+1,
        dp[i-1][j-1] + (a[i-1]===b[j-1]?0:1)
      );
    }
  }
  return dp[m][n];
}
