// Apply one transparent attribution to every training article and equipment guide.
const fs = require('node:fs');
const path = require('node:path');
function applyEditorial(root) {
  for (const file of fs.readdirSync(root).filter(f => /^(academy|equipment-).*\.html$/.test(f))) {
    const location = path.join(root,file), en = file.endsWith('-en.html');
    let html = fs.readFileSync(location,'utf8');
    html = html.replace(/<!-- WATHBA_EDITORIAL_START -->[\s\S]*?<!-- WATHBA_EDITORIAL_END -->\n?/g,'')
      .replace(/<p[^>]*data-wathba-article-author[^>]*>[\s\S]*?<\/p>/g,'')
      .replace(/<span class="academy-eyebrow">(?:مراجعة 25 سبتمبر 2026 · أكاديمية وثبة|Reviewed 25 September 2026 · WATHBA Academy)<\/span>/g,'')
      .replace(/<p>(?:تحرير أكاديمية وثبة · مراجعة|WATHBA Academy editorial · reviewed) <time[^>]*>[^<]*<\/time><\/p>/g,'');
    const attribution = en ? 'Prepared by WATHBA Academy' : 'إعداد أكاديمية وثبة';
    const note = en
      ? 'Editorial responsibility: WATHBA Academy. Sources are linked in each guide. Training examples are general guidance for healthy adults and should be adapted to your ability.'
      : 'المسؤولية التحريرية: أكاديمية وثبة. المراجع مرتبطة داخل كل دليل. الأمثلة التدريبية إرشاد عام للبالغين الأصحاء وتُعدّل بحسب القدرة.';
    const block = `<!-- WATHBA_EDITORIAL_START --><aside class="wathba-editorial-note" aria-label="${en?'Content preparation and review':'إعداد المحتوى ومراجعته'}"><p data-wathba-article-author><strong>${attribution}</strong></p><p>${note}</p></aside><!-- WATHBA_EDITORIAL_END -->`;
    html = html.replace('</main>',block+'\n</main>');
    fs.writeFileSync(location,html);
  }
}
module.exports = {applyEditorial};
