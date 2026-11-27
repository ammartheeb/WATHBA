// Image slots for Academy guides. A slot is named in the guide data; its picture appears on the
// page only once the owner adds the file (PNG or WebP, any size) to site/assets/images/academy/.
// Until then the page keeps an HTML comment with the expected path. The same data writes
// docs/ACADEMY-IMAGES.md: every requested picture, its status and the prompt for the image tool.
const fs=require('node:fs');
const path=require('node:path');
const site=path.resolve(__dirname,'../../site');
const folder=path.join(site,'assets/images/academy');
const docFile=path.resolve(__dirname,'../../docs/ACADEMY-IMAGES.md');

const SLOTS={
  hero:{ar:'بجانب عنوان الدليل (كمبيوتر فقط)',en:'beside the guide title (desktop only)',desktopOnly:true},
  muscles:{ar:'قسم العضلات المستهدفة',en:'target muscles section',desktopOnly:false},
  mistake:{ar:'قسم الأخطاء الشائعة',en:'common mistakes section',desktopOnly:false},
  closing:{ar:'أسفل الصفحة عند «اختر خطوتك التالية» (كمبيوتر فقط)',en:'page bottom, next to “Choose your next step” (desktop only)',desktopOnly:true}
};
const CHARACTERS={
  dheeb:{ar:'ذيب',refs:['ذيب وقوف متدرج بعد التمرين.png','مرجع أسلوب الخربشة الأساسي.png'],
    text:'Dheeb: a bald athletic man with no facial features, thin hand-drawn black ink scribble lines on a light body, dark athletic shorts above the knee, one black wristband on each wrist, barefoot'},
  sakhr:{ar:'صخر',refs:['مرجع أمامي صخر معتمد.png','مرجع أسلوب الخربشة الأساسي.png'],
    text:'Sakhr: a bald athletic man with no facial features, thin hand-drawn black ink scribble lines on a light body, dark athletic shorts above the knee, one white wristband with thin ink outlines on each wrist, barefoot'}
};

function size(file){
  const b=fs.readFileSync(file);
  if(b.toString('ascii',1,4)==='PNG')return {width:b.readUInt32BE(16),height:b.readUInt32BE(20)};
  if(b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP'){
    const kind=b.toString('ascii',12,16);
    if(kind==='VP8X')return {width:1+b.readUIntLE(24,3),height:1+b.readUIntLE(27,3)};
    if(kind==='VP8 ')return {width:b.readUInt16LE(26)&0x3fff,height:b.readUInt16LE(28)&0x3fff};
    if(kind==='VP8L'){const v=b.readUInt32LE(21);return {width:(v&0x3fff)+1,height:((v>>14)&0x3fff)+1};}
  }
  throw Error('Academy images must be PNG or WebP: '+file);
}
function find(name){
  for(const ext of ['webp','png']){const file=path.join(folder,`${name}.${ext}`);if(fs.existsSync(file))return {src:`assets/images/academy/${name}.${ext}`,...size(file)};}
  return null;
}
// Returns the figure HTML, or a comment that marks the empty slot.
function figure(image,slot,lang,esc){
  if(!image)return '';
  const found=find(image.file),info=SLOTS[slot];
  if(!found)return `<!-- WATHBA_IMAGE_SLOT ${slot}: assets/images/academy/${image.file}.png -->`;
  const alt=image.alt[lang];
  return `<figure class="academy-figure academy-figure--${slot}${info.desktopOnly?' academy-desktop-only':''}"><img src="${found.src}" width="${found.width}" height="${found.height}" loading="lazy" decoding="async" alt="${esc(alt)}">${slot==='muscles'?`<figcaption>${esc(alt)}</figcaption>`:''}</figure>`;
}
function prompt(image){
  const c=CHARACTERS[image.character];
  const lines=[`Use the attached images as the exact character and style reference. Draw the same character, ${c.text}. Keep the exact body build, line style and scribble density of the reference. Do not add hair, a face, or any extra details.`,'',`Pose: ${image.pose}`];
  if(image.red)lines.push('',`Shade these muscles in strong semi-transparent red, with the ink lines still visible through the red: ${image.red.strong}. Shade these in a lighter, paler red: ${image.red.light}. Everything else stays black, white and grey.`);
  lines.push('','Plain pure black background. No glow, no halo, no light behind the character. No text, no labels, no arrows, no logo. Square 1:1 image with the whole body visible and some empty space around it.');
  return lines.join('\n');
}
function writeImageDoc(guides){
  const rows=[],blocks=[];let missing=0,total=0;
  for(const g of guides){
    if(!g.images)continue;
    for(const [slot,image] of Object.entries(g.images)){
      total++;const done=!!find(image.file);if(!done)missing++;
      const c=CHARACTERS[image.character];
      rows.push(`| ${done?'✅ موجودة':'⏳ ناقصة'} | \`${image.file}.png\` | ${c.ar} | ${g.title.ar} | ${SLOTS[slot].ar} |`);
      if(!done)blocks.push(`### ${image.file}.png\n\nالدليل: ${g.title.ar} (\`academy-${g.slug}.html\`). المكان: ${SLOTS[slot].ar}. الشخصية: ${c.ar}.\n\nارفق مع الأمر صور المرجع من ريبو المصنع، مجلد «يوتيوب/وضعيات الشخصيات/وضعيات الشخصيات»: ${c.refs.map(r=>`«${r}»`).join(' و')}.\n\n\`\`\`\n${prompt(image)}\n\`\`\`\n`);
    }
  }
  const doc=`# صور أكاديمية وثبة: ذيب وصخر

هذا الملف يُولَّد تلقائيًا من بيانات الأدلة عند كل بناء (\`scripts/build/academy-images.js\`). لا تعدّله يدويًا.

## كيف تضيف صورة

ولّد الصورة بأداة الصور مستخدمًا الأمر المكتوب تحتها، ثم ارفعها إلى المجلد \`site/assets/images/academy/\` بنفس الاسم تمامًا، بصيغة PNG أو WebP. الصورة تظهر في مكانها في الدليل عند البناء التالي دون أي تعديل في الكود. الصور المكتوب بجانبها «كمبيوتر فقط» تختفي على الموبايل لتوفير المساحة.

قواعد الشخصيات من المرجع 2.1: لا توهج ولا هالة، لا شعر ولا ملامح وجه، رباطا ذيب أسودان ورباطا صخر أبيضان، وخلفية سوداء. اللون الأحمر يُستخدم فقط لتظليل العضلات المستهدفة.

## الحالة: ${total-missing} من ${total} موجودة

| الحالة | اسم الملف | الشخصية | الدليل | المكان |
| --- | --- | --- | --- | --- |
${rows.join('\n')}

## أوامر الصور الناقصة

${blocks.join('\n')}`;
  fs.writeFileSync(docFile,doc);
  return {total,missing};
}
module.exports={figure,writeImageDoc,SLOTS};
