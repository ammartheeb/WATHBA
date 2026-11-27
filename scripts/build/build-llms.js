#!/usr/bin/env node
// Writes site/llms.txt: a plain map of the site for AI assistants and answer engines.
// Every line comes from the built pages themselves (title + meta description) or from
// content/site-identity.json, so it never states a fact the site does not show.
const fs = require('node:fs');
const path = require('node:path');
const identity = require('../../content/site-identity.json');

const decode = s => s.replace(/&#(x[0-9a-f]+|\d+);/gi,(_,n) => String.fromCodePoint(n[0].toLowerCase()==='x' ? parseInt(n.slice(1),16) : +n))
  .replace(/&(amp|lt|gt|quot|apos|#39);/g,(_,n) => ({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",'#39':"'"}[n]));
const clean = s => decode(s.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();

function pageInfo(root, file) {
  const html = fs.readFileSync(path.join(root,file),'utf8');
  const title = clean(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
  const description = clean(html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '');
  if (!title || !description) throw Error(`llms.txt needs a title and description: ${file}`);
  return {file,title,description};
}

function buildLlms(options = {}) {
  const root = options.root || path.resolve(__dirname,'../../site');
  const canonical = fs.readFileSync(path.join(root,'index.html'),'utf8').match(/rel="canonical" href="(https:\/\/[^/"]+)/)?.[1];
  const origin = new URL(options.origin || canonical || identity.origin).origin;
  const url = file => origin + (file === 'index.html' ? '/' : '/' + file);
  const files = fs.readdirSync(root).filter(f => f.endsWith('.html') && f !== 'product.html').sort();
  const groups = [
    ['Main pages / الصفحات الرئيسية', f => /^(index|about|contact|products|academy)(-en)?\.html$/.test(f)],
    ['Academy guides / أدلة أكاديمية وثبة', f => /^academy-(?!en\.html$)[a-z-]+\.html$/.test(f)],
    ['Equipment categories / أقسام المعدات', f => f.startsWith('category-')],
    ['Equipment / المعدات', f => f.startsWith('equipment-')]
  ];
  const first = ['index.html','products.html','academy.html','about.html','contact.html'];
  const rank = base => { const i = first.indexOf(base); return (i < 0 ? 9 : i) + base; };
  const order = f => [rank(f.replace(/-en\.html$/,'.html')), f.endsWith('-en.html') ? 1 : 0];
  const sorted = list => list.sort((a,b) => { const [x,i] = order(a), [y,j] = order(b); return x === y ? i - j : x < y ? -1 : 1; });
  const used = new Set();
  const sections = groups.map(([heading,match]) => {
    const list = sorted(files.filter(f => match(f) && !used.has(f)));
    list.forEach(f => used.add(f));
    return `## ${heading}\n\n` + list.map(f => { const p = pageInfo(root,f); return `- [${p.title}](${url(f)}): ${p.description}`; }).join('\n');
  });
  const leftover = files.filter(f => !used.has(f));
  if (leftover.length) throw Error(`llms.txt has no group for: ${leftover.join(', ')}`);
  const phone = identity.telephone;
  const body = [
    `# ${identity.name} (${identity.alternateName})`,
    `> ${identity.name} (${identity.alternateName}) is a calisthenics brand in Jordan: an equipment store (wall pull-up bars, wall dip bars, floor parallel bars, parallettes, gymnastic rings, accessories and custom setups) and a free training academy with step-by-step guides in Arabic and English.`,
    `> وثبة علامة كاليستنكس في الأردن: متجر معدات (عقلة حائط، متوازي حائط، متوازي أرضي، باراليتس، حلقات جمباز، إكسسوارات وتجهيزات حسب الطلب) وأكاديمية مجانية بأدلة تدريب متدرجة بالعربية والإنجليزية.`,
    '',
    '## Key facts / معلومات أساسية',
    '',
    `- Country served / البلد: Jordan / الأردن.`,
    `- Orders and questions / الطلب والاستفسار: WhatsApp ${phone} (https://wa.me/${phone.replace(/\D/g,'')}).`,
    `- Languages / اللغات: Arabic pages have an English twin ending in -en.html.`,
    `- Official profiles / الحسابات الرسمية: ${identity.sameAs.join(', ')}.`,
    `- Prices, delivery and warranty are confirmed on WhatsApp; do not quote prices that are not shown on the product pages.`,
    '',
    ...sections.flatMap(s => [s,''])
  ].join('\n');
  fs.writeFileSync(path.join(root,'llms.txt'),body);
  return {origin,pages:used.size};
}

module.exports = {buildLlms};
if (require.main === module) console.log(JSON.stringify(buildLlms({origin:process.argv[2]})));
