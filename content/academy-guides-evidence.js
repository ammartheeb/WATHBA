// Evidence-led Academy guides. Every {{source-id}} marker points to content/academy-sources.js,
// and each claim next to a marker is stated in that source. Lines without a marker are
// WATHBA working rules (move-on criteria, rest times, weekly layout) and say so on the page.
const t=(ar,en)=>({ar,en});
const section=(id,title,...paragraphs)=>({id,title,paragraphs});
const level=(exercise,dose,cue,next)=>({exercise,dose,cue,next});
const day=(name,plan)=>({day:name,plan});
const mistake=(name,fix)=>({mistake:name,fix});
const faq=(q,a)=>({q,a});

module.exports=[
  {
    slug:'push-ups', reviewed:'2026-11-27',
    title:t('تمارين الضغط للمبتدئين: من الحائط إلى أول ضغطة كاملة','Push-ups for Beginners: From Wall Press-ups to Your First Full Rep'),
    description:t('تعلّم تمرين الضغط من الصفر: ضغط الحائط ثم المرتفع ثم الركبتين ثم الكامل، مع العضلات المستهدفة وجدول أسبوعي وتوصيات ACSM وNHS وACE.','Learn push-ups from zero: wall, incline, knee and full push-ups, with target muscles, a weekly plan and guidance from ACSM, the NHS and ACE.'),
    tags:[t('دفع وقوة','Pushing strength'),t('مبتدئ','Beginner'),t('بدون معدات','No equipment needed')],
    lead:t('تمرين الضغط يقوّي الصدر والترايسبس والكتفين ويحتاج جذعًا ثابتًا. إذا لم تستطع ضغطة كاملة بعد، ابدأ من الحائط وخفّض زاوية جسمك خطوة بخطوة حتى تصل إلى الأرض.','The push-up builds the chest, triceps and shoulders and needs a braced trunk. If you cannot do a full rep yet, start at the wall and lower your body angle step by step until you reach the floor.'),
    summary:[
      t('ابدأ بالمرحلة التي تنفّذ فيها 3 مجموعات من 5–10 تكرارات بجسم مستقيم. تقترح NHS ضغط الحائط بهذا المقدار للمبتدئ {{nhs-strength}}.','Start at the stage where you can do 3 sets of 5–10 reps with a straight body. The NHS suggests the wall press-up at this dose for beginners {{nhs-strength}}.'),
      t('الترتيب من الأسهل للأصعب: الحائط، ثم سطح مرتفع، ثم الركبتين، ثم الضغط الكامل، ثم القدمان مرتفعتان. قياسات القوة تؤكد أن الركبتين واليدين المرتفعتين أخف، والقدمين المرتفعتين أثقل {{ebben-2011}}.','Easiest to hardest: wall, raised surface, knees, full push-up, then feet raised. Force measurements confirm that knee and hands-raised push-ups are lighter and feet-raised push-ups heavier {{ebben-2011}}.'),
      t('تمرّن يومين في الأسبوع على الأقل. هذه توصية NHS وACSM لتمارين القوة {{nhs-adults}} {{acsm-2026}}.','Train at least 2 days a week, as the NHS and ACSM recommend for strength work {{nhs-adults}} {{acsm-2026}}.'),
      t('قاعدة وثبة للانتقال: عندما تكمل 3 مجموعات من 10 تكرارات نظيفة في جلستين متتاليتين، انتقل للمرحلة التالية.','WATHBA rule for moving on: once you complete 3 sets of 10 clean reps in two sessions in a row, go to the next stage.'),
      t('إذا تعب رسغك، اضغط على مقابض أو باراليتس ليبقى الرسغ مستقيمًا؛ دراسة على قوى الرسغ رجّحت أن الرسغ المستقيم أكثر أمانًا {{wrist-2018}}.','If your wrists complain, press on handles or parallettes to keep the wrist straight; a study of wrist forces concluded that a neutral wrist is likely safer {{wrist-2018}}.')
    ],
    images:{
      hero:{file:'dheeb-push-up-hero',character:'dheeb',pose:'side view, halfway down in a push-up, body in one straight line from head to heels, calm and controlled.',alt:t('ذيب ينزل في تمرين الضغط بجسم مستقيم','Dheeb lowering into a push-up with a straight body')},
      muscles:{file:'muscles-push-ups',character:'dheeb',pose:'side view at the top of a full push-up. Arms straight, hands under the shoulders, body in one straight line from head to heels.',red:{strong:'chest, triceps (back of the upper arm), front of the shoulder',light:'abdominal muscles, and the serratus on the side of the rib cage'},alt:t('ذيب في وضع الضغط، والعضلات العاملة ملوّنة بالأحمر','Dheeb in a push-up with the working muscles shaded red')},
      mistake:{file:'sakhr-push-up-sagging',character:'sakhr',pose:'side view in a push-up showing a clear mistake: his low back sags toward the floor, hips dropped, head hanging down. He looks tired.',alt:t('صخر يهبط ظهره في تمرين الضغط، وهذا خطأ شائع','Sakhr letting his low back sag in a push-up, a common mistake')},
      closing:{file:'sakhr-wall-push-up',character:'sakhr',pose:'side view doing a wall press-up: standing at arm\'s length from a plain wall drawn with thin ink lines, hands flat on the wall at chest level, elbows bent and close to his sides.',alt:t('صخر يتمرن على ضغط الحائط','Sakhr doing a wall press-up')}
    },
    muscles:{
      primary:[t('الصدر: العضلة الصدرية الكبرى {{ace-push-up}}','Chest: pectoralis major {{ace-push-up}}'),t('خلف الذراع: الترايسبس {{ace-push-up}}','Back of the arm: triceps {{ace-push-up}}'),t('مقدمة الكتف: الدالية الأمامية {{calatayud-2014}}','Front of the shoulder: anterior deltoid {{calatayud-2014}}')],
      secondary:[t('جانب القفص الصدري: المنشارية الأمامية، تثبّت لوح الكتف {{calatayud-2014}}','Side of the rib cage: serratus anterior, which steadies the shoulder blade {{calatayud-2014}}'),t('البطن: المستقيمة والمائلة الخارجية، تمنع هبوط الظهر {{calatayud-2014}} {{ace-push-up}}','Abdominals: rectus abdominis and external oblique, which stop the low back sagging {{calatayud-2014}} {{ace-push-up}}')],
      note:t('لا تحتاج أن تعزل عضلة بعينها. الضغط حركة تعمل فيها هذه العضلات معًا، وتغيير مكان اليدين يغيّر نسبة العمل بينها فقط.','You do not need to isolate one muscle. The push-up works these muscles together; moving your hands only shifts the share of work between them.')
    },
    sections:[
      section('technique',t('كيف تبدو الضغطة الصحيحة؟','What does a good push-up look like?'),
        t('شدّ عضلات البطن قبل أن تنزل، وأبقِ الرأس على خط العمود الفقري. لا تترك أسفل الظهر يهبط ولا الوركين يرتفعان. انزل حتى يلامس صدرك أو ذقنك الأرض، ثم ادفع الأرض بعيدًا عنك {{ace-push-up}}.','Brace your abdominals before you lower, and keep your head in line with your spine. Do not let the low back sag or the hips hike. Lower until your chest or chin touches the floor, then push the floor away from you {{ace-push-up}}.'),
        t('المدى الكامل مهم: مراجعة ACSM لعام 2026 وجدت أن القوة تتحسن أكثر مع مدى حركة كامل {{acsm-2026}}. لذلك ضغطة كاملة على الركبتين أفضل من نصف ضغطة على القدمين.','Full range matters: the 2026 ACSM review found that strength improves more with a complete range of motion {{acsm-2026}}. A full knee push-up beats a half push-up on the toes.')),
      section('hands',t('أين أضع يديّ؟','Where should my hands go?'),
        t('ابدأ بيدين تحت الكتفين تقريبًا. عندما قارن باحثون القبضة الضيقة بالواسعة، كان نشاط الصدر والترايسبس أعلى مع القبضة الضيقة {{cogley-2005}}.','Start with your hands roughly under your shoulders. When researchers compared narrow and wide hand positions, chest and triceps activity was higher with the narrow one {{cogley-2005}}.'),
        t('إبقاء المرفقين قرب الجسم يحوّل جزءًا من العمل إلى الترايسبس، وقد يخفف الضغط على مفصل الكتف {{ace-push-up}}. إذا شعرت بضيق في مقدمة الكتف، جرّب هذا الوضع قبل أن تزيد التكرارات.','Keeping the elbows close to your sides shifts work toward the triceps and may reduce stress on the shoulder joint {{ace-push-up}}. If the front of your shoulder feels pinched, try this before adding reps.')),
      section('why',t('لماذا يستحق الضغط مكانًا في تمرينك؟','Why is the push-up worth a place in your training?'),
        t('منظمة الصحة العالمية توصي بتمارين تقوية العضلات بانتظام لكل الأعمار، إلى جانب 150–300 دقيقة أسبوعيًا من النشاط الهوائي المتوسط {{who-2020}}. الضغط طريقة لتقوية الصدر والذراعين والكتفين دون أي جهاز.','The World Health Organization recommends regular muscle-strengthening activity at every age, alongside 150–300 minutes of moderate aerobic activity a week {{who-2020}}. The push-up trains the chest, arms and shoulders with no equipment at all.'),
        t('في دراسة تابعت رجال إطفاء 10 سنوات، كان من يكمل أكثر من 40 ضغطة أقل عرضة لأمراض القلب بوضوح ممن يكمل أقل من 10 {{yang-2019}}. هذا ارتباط وليس سببًا مثبتًا، لكنه يوضح أن عدد الضغطات مؤشر بسيط على اللياقة.','In a study that followed firefighters for 10 years, men who completed more than 40 push-ups had a markedly lower risk of heart disease than men completing fewer than 10 {{yang-2019}}. It is an association rather than proven cause, but it shows push-up count is a simple marker of fitness.'),
        t('والضغط ليس تمرينًا خفيفًا عند إضافة مقاومة: الضغط مع حزام مقاومة أعطى نشاطًا مشابهًا لتمرين البنش برس بأحمال عالية {{calatayud-2014}}.','Nor is it a light exercise once you add resistance: banded push-ups produced muscle activity similar to a heavy bench press {{calatayud-2014}}.'))
    ],
    ladderNote:t('كل مرحلة أصعب من التي قبلها لأن نسبة أكبر من وزنك تقع على يديك {{ebben-2011}}. المقادير في الجدول للمبتدئ، وعمود «انتقل عندما» قاعدة عملية من وثبة.','Each stage is harder because more of your body weight rests on your hands {{ebben-2011}}. Doses are for beginners, and the “Move on when” column is a WATHBA working rule.'),
    levels:[
      level(t('ضغط الحائط','Wall press-up'),t('3 × 5–10 {{nhs-strength}}','3 × 5–10 {{nhs-strength}}'),t('قف على بعد ذراع من الحائط، واليدان بمستوى الصدر، والمرفقان قرب الجسم {{nhs-strength}}.','Stand at arm\'s length, hands at chest level, elbows by your sides {{nhs-strength}}.'),t('تكمل 3 × 10 بجسم مستقيم في جلستين متتاليتين.','You complete 3 × 10 with a straight body in two sessions in a row.')),
      level(t('ضغط على سطح مرتفع','Incline push-up'),t('3 × 6–10','3 × 6–10'),t('يداك على طاولة ثابتة أو درجة. كلما انخفض السطح زادت الصعوبة {{ebben-2011}}.','Hands on a sturdy table or step. The lower the surface, the harder it gets {{ebben-2011}}.'),t('تكمل 3 × 10 على سطح بارتفاع الركبة تقريبًا.','You complete 3 × 10 on a surface about knee height.')),
      level(t('ضغط على الركبتين','Knee push-up'),t('3 × 6–10','3 × 6–10'),t('خط مستقيم من الركبتين إلى الرأس، والبطن مشدود {{ace-push-up}}.','A straight line from knees to head, abdominals braced {{ace-push-up}}.'),t('تكمل 3 × 10 والصدر يلامس الأرض كل مرة.','You complete 3 × 10 with your chest reaching the floor every rep.')),
      level(t('نزول بطيء من الضغط الكامل','Slow full-push-up negatives'),t('3 × 3–5، نزول في 3 ثوانٍ','3 × 3–5, 3-second lowering'),t('ابدأ من وضع الضغط الكامل وانزل ببطء، ثم ارجع للأعلى على ركبتيك.','Start at the top of a full push-up, lower slowly, then return to the top on your knees.'),t('تتحكم بالنزول كاملًا لـ3 ثوانٍ في كل تكرار.','You control the full 3-second descent on every rep.')),
      level(t('الضغط الكامل','Full push-up'),t('3 × أكبر عدد نظيف','3 × max clean reps'),t('القدمان مضمومتان، والصدر أو الذقن يلامس الأرض، وادفع الأرض بعيدًا {{ace-push-up}}.','Feet together, chest or chin to the floor, push the floor away {{ace-push-up}}.'),t('تكمل 3 × 15 دون أن يهبط الظهر.','You complete 3 × 15 without the low back sagging.')),
      level(t('ضغط والقدمان مرتفعتان','Feet-elevated push-up'),t('3 × 6–12','3 × 6–12'),t('القدمان على درجة ثابتة؛ هذا الشكل يضع حملًا أكبر على اليدين {{ebben-2011}}.','Feet on a stable step; this variation puts more load on the hands {{ebben-2011}}.'),t('تكمل 3 × 12، ثم أضف حزام مقاومة {{calatayud-2014}}.','You complete 3 × 12; then add a resistance band {{calatayud-2014}}.'))
    ],
    program:[
      t('تمرّن على الضغط يومين أو ثلاثة في الأسبوع، وأعط العضلة يومًا للراحة بين الجلستين. ACSM وجدت أن 2–3 مجموعات وجلستين أسبوعيًا على الأقل تحسّن القوة {{acsm-2026}}، ولا حاجة للتمرين حتى الفشل في كل مجموعة؛ لم يغيّر ذلك النتائج بشكل ثابت {{acsm-2026}}.','Train push-ups on 2 or 3 days a week with a rest day between sessions. ACSM found that 2–3 sets and at least 2 sessions a week improve strength {{acsm-2026}}, and that training every set to failure did not consistently change results {{acsm-2026}}.'),
      t('الراحة بين المجموعات 60–90 ثانية قاعدة من وثبة. توقّف عن المجموعة عندما يبدأ الشكل بالانهيار، لا عندما تعجز تمامًا.','Resting 60–90 seconds between sets is a WATHBA rule. End a set when your form starts to break, not when you cannot move at all.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إحماء 5 دقائق، ثم 3 مجموعات من مرحلتك الحالية، ثم مجموعتان من المرحلة الأسهل.','5-minute warm-up, 3 sets at your current stage, then 2 sets of the easier stage.')),
      day(t('الثلاثاء','Tuesday'),t('راحة من الضغط. مشي أو نشاط هوائي ضمن الـ150 دقيقة الأسبوعية {{who-2020}}.','No push-ups. A walk or other aerobic activity toward the weekly 150 minutes {{who-2020}}.')),
      day(t('الأربعاء','Wednesday'),t('3 مجموعات من مرحلتك الحالية، وحاول زيادة تكرار واحد على الأقل في إحداها.','3 sets at your current stage, and try to add at least one rep to one set.')),
      day(t('الجمعة','Friday'),t('اختياري: 3 مجموعات نزول بطيء، أو جلسة ثالثة بنفس مرحلتك.','Optional: 3 sets of slow negatives, or a third session at your current stage.'))
    ],
    mistakes:[
      mistake(t('هبوط الظهر أو ارتفاع الوركين.','Low back sagging or hips hiking.'),t('شدّ البطن والأرداف قبل النزول، وارجع لمرحلة أسهل إذا لم يبق جسمك خطًا واحدًا {{ace-push-up}}.','Brace your abdominals and glutes before lowering, and drop a stage if your body will not stay in one line {{ace-push-up}}.')),
      mistake(t('نصف تكرار.','Half reps.'),t('انزل حتى يقترب الصدر من الأرض؛ المدى الكامل يبني قوة أكثر {{acsm-2026}}. خفّف المرحلة بدل أن تقصّر الحركة.','Lower until your chest nears the floor; full range builds more strength {{acsm-2026}}. Use an easier stage instead of shortening the movement.')),
      mistake(t('القفز للضغط الكامل قبل الأوان.','Jumping to full push-ups too early.'),t('التزم بقاعدة الانتقال: 3 × 10 نظيفة في جلستين متتاليتين.','Stick to the move-on rule: 3 clean sets of 10 in two sessions in a row.')),
      mistake(t('ألم الرسغ مع اليد المفرودة على الأرض.','Wrist pain with the palm flat on the floor.'),t('استخدم مقابض أو باراليتس ليبقى الرسغ مستقيمًا {{wrist-2018}}، وتوقّف إذا استمر الألم.','Use handles or parallettes to keep the wrist straight {{wrist-2018}}, and stop if the pain persists.')),
      mistake(t('التمرين حتى العجز كل يوم.','Going to failure every day.'),t('الفشل في كل مجموعة لا يحسّن النتائج بشكل ثابت {{acsm-2026}}، والراحة بين الجلسات جزء من التقدم.','Failure on every set does not reliably improve results {{acsm-2026}}, and rest between sessions is part of progress.'))
    ],
    faqs:[
      faq(t('هل أعمل تمارين الضغط كل يوم؟','Should I do push-ups every day?'),t('ليس ضروريًا. NHS توصي بتمارين القوة يومين في الأسبوع على الأقل، وACSM وجدت أن جلستين أسبوعيًا أو أكثر تحسّن القوة. للمبتدئ نقترح يومين إلى ثلاثة غير متتالية.','It is not necessary. The NHS recommends strength exercise on at least 2 days a week, and ACSM found 2 or more weekly sessions improve strength. For beginners we suggest 2–3 non-consecutive days.')),
      faq(t('كم ضغطة يعمل المبتدئ؟','How many push-ups should a beginner do?'),t('تقترح NHS لضغط الحائط 3 مجموعات من 5–10 تكرارات. ابدأ بالمرحلة التي تكمل فيها هذا المقدار بجسم مستقيم، ثم زد التكرارات تدريجيًا.','The NHS suggests 3 sets of 5–10 wall press-ups. Start at the stage where you can complete that with a straight body, then add reps gradually.')),
      faq(t('هل ضغط الحائط مفيد فعلًا؟','Are wall push-ups actually useful?'),t('نعم. هو تمرين القوة الذي تقترحه NHS للمبتدئ، وهو أخف أشكال الضغط، فيبني القاعدة قبل الانتقال للسطح المرتفع والأرض.','Yes. It is the strength exercise the NHS suggests for beginners and the lightest push-up form, so it builds a base before incline and floor push-ups.')),
      faq(t('هل تمارين الضغط تكبّر الصدر؟','Do push-ups build the chest?'),t('الضغط يشغّل الصدر بشكل أساسي. مراجعة ACSM لعام 2026 وجدت أن نمو العضلة يتحسن مع 10 مجموعات أسبوعيًا أو أكثر لكل عضلة، والضغط مع حزام مقاومة يقترب من نشاط البنش برس الثقيل.','The push-up mainly works the chest. ACSM\'s 2026 review found muscle growth improves with 10 or more weekly sets per muscle, and banded push-ups approach the muscle activity of a heavy bench press.')),
      faq(t('هل تمارين الضغط مناسبة للنساء؟','Are push-ups suitable for women?'),t('نعم، بنفس التدرّج. توصيات NHS ومنظمة الصحة العالمية تشمل كل البالغين، ودراسة قياس قوى الضغط لم تجد فرقًا بين الرجال والنساء في أشكال الضغط المختلفة.','Yes, with the same progression. NHS and WHO guidance covers all adults, and the study measuring push-up forces found no difference between men and women across the variations.')),
      faq(t('ما الفرق بين الضغط على الأرض والضغط على الباراليتس؟','What is the difference between floor push-ups and parallettes?'),t('على الباراليتس يبقى الرسغ مستقيمًا بدل أن ينثني للخلف، ودراسة على قوى الرسغ رجّحت أن هذا أكثر أمانًا. والارتفاع يسمح لك بالنزول أعمق عندما تكون جاهزًا.','On parallettes the wrist stays straight instead of bending back, which a wrist-force study concluded is likely safer. The height also lets you go deeper once you are ready.'))
    ],
    related:['first-pull-up','dips','parallettes','beginner'],
    products:['steel-wood-parallettes','full-wooden-parallettes','resistance-bands'],
    sources:['nhs-strength','ebben-2011','nhs-adults','acsm-2026','wrist-2018','ace-push-up','calatayud-2014','cogley-2005','who-2020','yang-2019']
  },
  {
    slug:'first-pull-up', reviewed:'2026-11-27',
    title:t('كيف تعمل أول عقلة؟ سلّم تدرّج من الصفر مع المصادر','How to Do Your First Pull-up: A Step-by-Step Ladder from Zero'),
    description:t('طريقة الوصول لأول عقلة من الصفر: التعلق، سحب الكتف، العقلة بالمطاط، النزول البطيء، مع العضلات المستهدفة وجدول أسبوعي وتوصيات ACE وACSM.','Get your first pull-up from zero: hangs, scapular pulls, band-assisted reps and slow negatives, with target muscles, a weekly plan and ACE and ACSM guidance.'),
    tags:[t('سحب وقوة','Pulling strength'),t('مبتدئ إلى متوسط','Beginner to intermediate'),t('بار عقلة','Pull-up bar')],
    lead:t('العقلة تحتاج ظهرًا وذراعين قويين وقبضة ثابتة وجذعًا مشدودًا. إذا لم تستطع عقلة واحدة بعد، فلن تصل إليها بمحاولتها كل يوم، بل بتدريب أجزائها: التعلق، ثم السحب المساعد، ثم النزول البطيء.','A pull-up needs a strong back and arms, a steady grip and a braced trunk. If you cannot do one yet, trying it every day will not get you there; training its parts will: hangs, assisted pulls and slow negatives.'),
    summary:[
      t('اتبع سلّم ACE: التعلق بذراعين ممدودتين، ثم بذراعين مثنيتين، ثم النزول البطيء، ثم العقلة الجزئية، ثم العقلة بالمطاط، ثم العقلة الكاملة {{ace-progressions}}.','Follow the ACE ladder: straight-arm hang, flexed-arm hang, slow negatives, partial pull-ups, band-assisted pull-ups, then the full pull-up {{ace-progressions}}.'),
      t('في تمارين التحضير مثل العقلة بالمطاط والنزول البطيء، يقترح مقال ACE من 2 إلى 4 مجموعات من 8–12 تكرارًا {{ace-pull-up-moves}}.','For preparatory drills such as band-assisted pull-ups and slow negatives, an ACE article suggests 2–4 sets of 8–12 reps {{ace-pull-up-moves}}.'),
      t('تمرّن جلستين في الأسبوع على الأقل؛ ACSM وجدت أن هذا التكرار يحسّن القوة {{acsm-2026}}.','Train at least 2 sessions a week; ACSM found this frequency improves strength {{acsm-2026}}.'),
      t('العضلة الأكثر عملًا هي الظهرية العريضة، ثم البايسبس {{youdas-2010}}. قبضة الشن-أب بالكفين نحوك تشغّل البايسبس والصدر أكثر {{youdas-2010}}.','The hardest-working muscle is the latissimus dorsi, then the biceps {{youdas-2010}}. A chin-up grip with palms facing you uses the biceps and chest more {{youdas-2010}}.'),
      t('قاعدة وثبة للانتقال: أكمل المقدار المكتوب لكل مرحلة في جلستين متتاليتين قبل الصعود للتي بعدها.','WATHBA rule for moving on: complete each stage\'s dose in two sessions in a row before stepping up.')
    ],
    images:{
      hero:{file:'dheeb-pull-up-hero',character:'dheeb',pose:'front view at the top of a pull-up, chin above a plain horizontal black steel bar, palms facing forward, legs straight and together, calm and controlled.',alt:t('ذيب في أعلى العقلة والذقن فوق البار','Dheeb at the top of a pull-up, chin over the bar')},
      muscles:{file:'muscles-pull-up',character:'sakhr',pose:'three-quarter back view at the top of a pull-up, chin above a plain horizontal black steel bar, palms facing forward, legs straight and together.',red:{strong:'the latissimus dorsi (the large muscles on both sides of the back) and the biceps',light:'the area between the shoulder blades (middle and lower trapezius), the back of the shoulder, and the forearms'},alt:t('صخر في العقلة، والعضلات العاملة ملوّنة بالأحمر','Sakhr in a pull-up with the working muscles shaded red')},
      mistake:{file:'sakhr-pull-up-swinging',character:'sakhr',pose:'hanging from a plain horizontal black steel bar while swinging and kicking his legs forward to get up, shoulders shrugged up to his ears. A clear mistake.',alt:t('صخر يتأرجح ويركل برجليه ليصعد على البار، وهذا خطأ شائع','Sakhr swinging and kicking to get over the bar, a common mistake')},
      closing:{file:'dheeb-dead-hang',character:'dheeb',pose:'front view in a calm straight-arm hang from a plain horizontal black steel bar, shoulders drawn down away from the ears, feet off the floor, legs together.',alt:t('ذيب يتعلق على البار بذراعين ممدودتين','Dheeb in a straight-arm hang from the bar')}
    },
    muscles:{
      primary:[t('جانب الظهر: الظهرية العريضة، وهي الأعلى نشاطًا في العقلة {{youdas-2010}}','Side of the back: latissimus dorsi, the most active muscle in the pull-up {{youdas-2010}}'),t('مقدمة الذراع: البايسبس {{youdas-2010}} {{ace-pull-up}}','Front of the arm: biceps {{youdas-2010}} {{ace-pull-up}}')],
      secondary:[t('خلف الكتف: تحت الشوكة {{youdas-2010}}','Back of the shoulder: infraspinatus {{youdas-2010}}'),t('بين لوحي الكتف: شبه المنحرفة السفلية والوسطى {{youdas-2010}} {{dickie-2017}}','Between the shoulder blades: lower and middle trapezius {{youdas-2010}} {{dickie-2017}}'),t('الساعد: العضدية الكعبرية، تعمل أكثر في مرحلة الصعود {{dickie-2017}}','Forearm: brachioradialis, which works more on the way up {{dickie-2017}}'),t('الجذع: الصدر وعضلات الظهر والبطن تثبّت الجسم {{youdas-2010}}','Trunk: chest, spinal erectors and obliques steady the body {{youdas-2010}}')],
      note:t('العقلة تبدأ من الكتفين قبل الذراعين: الدراسة وجدت أن شبه المنحرفة السفلية والصدر يبدآن الحركة، ثم يكملها البايسبس والظهرية العريضة {{youdas-2010}}. لهذا يبدأ السلّم بسحب الكتف.','The pull-up starts at the shoulders, not the arms: the lower trapezius and chest begin the movement and the biceps and lats finish it {{youdas-2010}}. That is why the ladder begins with scapular pulls.')
    },
    sections:[
      section('technique',t('كيف تبدو العقلة الصحيحة؟','What does a good pull-up look like?'),
        t('امسك البار وكفاك للأمام، واسحب كتفيك للخلف وللأسفل قبل أن تثني ذراعيك. اسحب جسمك دون تأرجح حتى يصل ذقنك لمستوى البار، ثم انزل ببطء حتى تمتد ذراعاك بالكامل {{ace-pull-up}}.','Grip the bar palms forward and draw your shoulders back and down before bending your arms. Pull without swinging until your chin is level with the bar, then lower slowly to fully straight arms {{ace-pull-up}}.'),
        t('المدى الكامل من ذراعين ممدودتين إلى الذقن فوق البار هو ما يبني القوة؛ ACSM وجدت أن القوة تتحسن أكثر مع مدى حركة كامل {{acsm-2026}}.','A full range, from straight arms to chin over the bar, is what builds strength; ACSM found strength improves more through a complete range of motion {{acsm-2026}}.')),
      section('grips',t('عقلة أم شن-أب؟ وما الفرق بين القبضات؟','Pull-up or chin-up? How do grips differ?'),
        t('في الشن-أب تكون الكفّان نحوك، فيعمل البايسبس والصدر أكثر. في العقلة تكون الكفّان للأمام، فتعمل شبه المنحرفة السفلية أكثر {{youdas-2010}}. الظهرية العريضة تعمل بقوة في الحالتين.','In a chin-up your palms face you and the biceps and chest work harder. In a pull-up your palms face away and the lower trapezius works harder {{youdas-2010}}. The lats work hard in both.'),
        t('القبضة العلوية شغّلت منتصف شبه المنحرفة أكثر من القبضة المحايدة التي تكون فيها الكفان متقابلتين {{dickie-2017}}. اختر القبضة المريحة لكتفيك، وغيّرها لاحقًا للتنويع.','The overhand grip worked the middle trapezius more than a neutral grip with palms facing each other {{dickie-2017}}. Pick the grip that suits your shoulders and vary it later.')),
      section('home-bar',t('اختيار عقلة حائط للبيت في الأردن','Choosing a wall pull-up bar for home in Jordan'),
        t('قبل الشراء قِس المساحة فوق رأسك وأمام البار، وتأكد من نوع الحائط وطريقة التثبيت. بروز العقلة عن الحائط، مثل 60 أو 90 سم في عقلة وثبة، هو المسافة بين البار والحائط: كلما زاد، ابتعد جسمك ووجهك وركبتاك عن الحائط أثناء الحركة.','Before buying, measure the space above your head and in front of the bar, and check the wall type and fixing method. The bar\'s projection, such as 60 or 90 cm on the WATHBA bar, is the distance from bar to wall: the more projection, the further your body, face and knees stay from the wall as you move.'),
        t('للنزول البطيء والعقلة بالمطاط تحتاج أن تصل إلى أعلى البار بأمان، عبر درجة أو صندوق ثابت تحته.','For slow negatives and band-assisted reps you need a safe way to reach the top of the bar, such as a sturdy step or box beneath it.'))
    ],
    ladderNote:t('السلّم مأخوذ من ترتيب ACE للتدرّج نحو العقلة {{ace-progressions}}، والمقادير من مقال ACE لتمارين التحضير {{ace-pull-up-moves}} أو من وثبة حيث لا يحدد المصدر رقمًا. عمود «انتقل عندما» قاعدة عملية من وثبة.','The ladder follows ACE\'s order of pull-up progressions {{ace-progressions}}; doses come from ACE\'s preparatory-exercise article {{ace-pull-up-moves}} or from WATHBA where no source gives a number. The “Move on when” column is a WATHBA working rule.'),
    levels:[
      level(t('ثبات الجسم المجوّف','Hollow hold'),t('3 × 15–20 ثانية','3 × 15–20 seconds'),t('على ظهرك، ارفع الكتفين والرجلين قليلًا والصق أسفل الظهر بالأرض {{ace-progressions}}.','On your back, lift shoulders and legs slightly and press your low back into the floor {{ace-progressions}}.'),t('تثبت 3 × 20 ثانية دون أن يرتفع أسفل الظهر.','You hold 3 × 20 seconds without the low back lifting.')),
      level(t('التعلق بذراعين ممدودتين','Straight-arm hang'),t('3 × 15–30 ثانية','3 × 15–30 seconds'),t('تعلّق والكتفان مشدودان للأسفل، ثم جرّب سحب الكتفين دون ثني المرفقين {{ace-progressions}} {{ace-pull-up}}.','Hang with shoulders drawn down, then practise pulling the shoulders down without bending the elbows {{ace-progressions}} {{ace-pull-up}}.'),t('تتعلق 30 ثانية ثلاث مرات بثبات.','You hang for 30 seconds three times, steadily.')),
      level(t('التعلق بذراعين مثنيتين','Flexed-arm hang'),t('3 × 5–15 ثانية','3 × 5–15 seconds'),t('اصعد بدرجة حتى يكون ذقنك فوق البار، وابقَ هناك {{ace-progressions}}.','Use a step to get your chin over the bar and hold there {{ace-progressions}}.'),t('تثبت 15 ثانية ثلاث مرات.','You hold for 15 seconds three times.')),
      level(t('النزول البطيء','Slow negatives'),t('3 × 3–5، نزول في 3–5 ثوانٍ','3 × 3–5, 3–5-second lowering'),t('ابدأ والذقن فوق البار وانزل ببطء حتى تمتد الذراعان. النزول الأبطأ أصعب ويسرّع اكتساب القوة، وألم العضلات بعده متوقع {{ace-pull-up-moves}}.','Start chin over the bar and lower slowly to straight arms. A slower descent is harder and speeds strength gains; expect some soreness afterwards {{ace-pull-up-moves}}.'),t('تتحكم في نزول 5 ثوانٍ في كل تكرار.','You control a 5-second descent on every rep.')),
      level(t('العقلة بالمطاط','Band-assisted pull-up'),t('2–4 × 8–12 {{ace-pull-up-moves}}','2–4 × 8–12 {{ace-pull-up-moves}}'),t('اربط حزام مقاومة بالبار وضع فيه قدمك أو ركبتك. خفّف قوة الحزام تدريجيًا {{ace-progressions}}.','Loop a resistance band over the bar under your foot or knee. Move to lighter bands over time {{ace-progressions}}.'),t('تكمل 3 × 8 بأخف حزام لديك.','You complete 3 × 8 with your lightest band.')),
      level(t('العقلة الكاملة','Full pull-up'),t('3–5 محاولات من 1–3 تكرارات','3–5 attempts of 1–3 reps'),t('دون قفز أو تأرجح، من ذراعين ممدودتين إلى الذقن فوق البار {{ace-pull-up}}.','No jumping or swinging, from straight arms to chin over the bar {{ace-pull-up}}.'),t('تكمل 3 × 5، ثم ابدأ بإضافة وزن {{ace-progressions}}.','You complete 3 × 5; then start adding weight {{ace-progressions}}.'))
    ],
    program:[
      t('تمرّن على العقلة جلستين أو ثلاثًا في الأسبوع مع يوم راحة بينها؛ ACSM وجدت أن جلستين أسبوعيًا أو أكثر و2–3 مجموعات تحسّن القوة، وأن التمرين في بداية الجلسة أفضل للقوة {{acsm-2026}}. لذلك ضع تمارين العقلة أول الجلسة بعد الإحماء.','Train pull-ups 2 or 3 times a week with rest days between. ACSM found that 2 or more weekly sessions and 2–3 sets improve strength, and that exercises done at the start of a session gain more strength {{acsm-2026}}. So put pull-up work first, right after the warm-up.'),
      t('اعمل مرحلتين متجاورتين في كل جلسة: مرحلتك الحالية، والمرحلة التي قبلها لزيادة الحجم. الراحة 90 ثانية إلى دقيقتين بين المجموعات قاعدة من وثبة.','Work two neighbouring stages per session: your current stage and the one below for extra volume. Resting 90 seconds to 2 minutes between sets is a WATHBA rule.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إحماء، ثم 3 مجموعات من مرحلتك الحالية، ثم 2 من المرحلة الأسهل، ثم ثبات الجسم المجوّف.','Warm-up, 3 sets at your current stage, 2 at the easier stage, then hollow holds.')),
      day(t('الإثنين','Monday'),t('راحة من السحب. يمكنك تمرين الضغط أو الرجلين.','No pulling. Push-ups or legs are fine.')),
      day(t('الثلاثاء','Tuesday'),t('3 مجموعات من مرحلتك الحالية، وحاول زيادة ثانية أو تكرار واحد.','3 sets at your current stage, trying to add one second or one rep.')),
      day(t('الخميس','Thursday'),t('نزول بطيء 3 × 3–5، ثم تعلق بذراعين ممدودتين حتى قبل التعب الكامل.','Slow negatives 3 × 3–5, then straight-arm hangs stopped short of full fatigue.'))
    ],
    mistakes:[
      mistake(t('محاولة العقلة الكاملة كل يوم.','Trying a full pull-up every day.'),t('التكرار اليومي للمحاولة نفسها لا يبني القوة. درّب أجزاء الحركة جلستين إلى ثلاث أسبوعيًا {{acsm-2026}}.','Repeating the same failed attempt daily does not build strength. Train the parts of the movement 2–3 times a week {{acsm-2026}}.')),
      mistake(t('التأرجح أو الركل للوصول للبار.','Swinging or kicking up to the bar.'),t('اسحب بتحكم دون تأرجح {{ace-pull-up}}، وارجع للعقلة بالمطاط إذا احتجت الزخم.','Pull under control without swinging {{ace-pull-up}}, and go back to band-assisted reps if you need momentum.')),
      mistake(t('السحب بالذراعين والكتفان مرتفعان للأذنين.','Pulling with the arms while the shoulders creep up to the ears.'),t('اسحب الكتفين للخلف وللأسفل أولًا {{ace-pull-up}}؛ هذا ما يبدأ الحركة فعليًا {{youdas-2010}}.','Draw the shoulders back and down first {{ace-pull-up}}; that is what actually starts the movement {{youdas-2010}}.')),
      mistake(t('نصف عقلة من الأعلى.','Half reps from the top.'),t('انزل حتى تمتد الذراعان بالكامل في كل تكرار {{ace-pull-up}} {{acsm-2026}}.','Lower to fully straight arms on every rep {{ace-pull-up}} {{acsm-2026}}.')),
      mistake(t('السقوط في النزول.','Dropping on the way down.'),t('النزول المتحكم فيه جزء أساسي من التمرين ويسرّع اكتساب القوة {{ace-pull-up-moves}}.','The controlled descent is a core part of the exercise and speeds strength gains {{ace-pull-up-moves}}.'))
    ],
    faqs:[
      faq(t('كم أحتاج من الوقت لأعمل أول عقلة؟','How long until my first pull-up?'),t('لا يوجد رقم ثابت؛ يعتمد على وزنك وقوتك الحالية وانتظامك. لم نجد مصدرًا موثوقًا يحدد مدة، لذلك لا نعطيك وعدًا. الأهم أن تتقدم في السلّم أسبوعًا بعد أسبوع.','There is no fixed answer; it depends on your weight, current strength and consistency. We found no reliable source that gives a timeline, so we will not promise one. What matters is moving up the ladder week by week.')),
      faq(t('هل العقلة أصعب من الشن-أب؟','Is the pull-up harder than the chin-up?'),t('الحركتان تشغّلان الظهرية العريضة بقوة. في الشن-أب يعمل البايسبس والصدر أكثر، وفي العقلة تعمل شبه المنحرفة السفلية أكثر. ابدأ بالقبضة الأريح لكتفيك.','Both work the lats hard. The chin-up uses more biceps and chest; the pull-up uses more lower trapezius. Start with the grip that feels best for your shoulders.')),
      faq(t('هل أتمرن على العقلة كل يوم؟','Should I train pull-ups every day?'),t('ليس ضروريًا. ACSM وجدت أن جلستين أسبوعيًا أو أكثر تحسّن القوة. نقترح جلستين إلى ثلاث مع يوم راحة بينها.','It is not necessary. ACSM found that 2 or more sessions a week improve strength. We suggest 2–3 sessions with a rest day between them.')),
      faq(t('هل حزام المقاومة مفيد للعقلة؟','Do resistance bands help with pull-ups?'),t('نعم. العقلة بالمطاط جزء من سلّم ACE نحو العقلة الكاملة، ومن تمارين التحضير التي يقترحها مقال ACE بمقدار 2–4 مجموعات من 8–12 تكرارًا.','Yes. Band-assisted pull-ups are part of the ACE ladder toward a full pull-up and one of the preparatory drills an ACE article suggests at 2–4 sets of 8–12 reps.')),
      faq(t('هل العقلة المنزلية على الحائط مناسبة للمبتدئ؟','Is a wall-mounted home bar suitable for a beginner?'),t('نعم، بشرط تثبيتها على حائط مناسب وأن تصل إليها بأمان. المبتدئ يستعملها للتعلق والنزول البطيء والعقلة بالمطاط قبل العقلة الكاملة.','Yes, as long as it is fixed to a suitable wall and you can reach it safely. Beginners use it for hangs, negatives and band-assisted reps before full pull-ups.')),
      faq(t('هل بروز 90 سم مخصص للمحترفين فقط؟','Is a 90 cm projection only for advanced athletes?'),t('لا. البروز هو المسافة بين البار والحائط، ويعطي مساحة أكبر لجسمك أمام الحائط. لا يحدد مستواك.','No. Projection is the distance from the bar to the wall and gives your body more room in front of the wall. It does not define your level.'))
    ],
    related:['push-ups','monkey-bars','swiss-ladder','beginner'],
    products:['wall-pull-up-bar','resistance-bands'],
    sources:['ace-progressions','ace-pull-up-moves','acsm-2026','youdas-2010','ace-pull-up','dickie-2017']
  },
  {
    slug:'beginner', reviewed:'2026-11-27',
    title:t('كاليستنكس للمبتدئين: كيف تبدأ من الصفر في البيت','Calisthenics for Beginners: How to Start from Zero at Home'),
    description:t('ما هو الكاليستنكس وكيف تبدأه في البيت: أربع حركات أساسية، جدول أسبوعي للمبتدئين، ومتى تتقدم، بحسب توصيات منظمة الصحة العالمية وACSM وNHS.','What calisthenics is and how to start at home: four basic movements, a beginner weekly plan and when to progress, based on WHO, ACSM and NHS guidance.'),
    tags:[t('مبتدئ','Beginner'),t('تمارين بوزن الجسم','Bodyweight training'),t('في البيت','At home')],
    lead:t('الكاليستنكس تدريب قوة تستخدم فيه وزن جسمك بدل الأوزان. تبدأه بأربع حركات: دفع وسحب ورجلين وجذع، وتجعل كل حركة أسهل أو أصعب بتغيير زاوية جسمك. لا تحتاج أن تشتري شيئًا في الأسبوع الأول.','Calisthenics is strength training that uses your body weight instead of weights. You start with four movements, a push, a pull, a leg exercise and a trunk hold, and make each easier or harder by changing your body angle. You need to buy nothing in week one.'),
    summary:[
      t('الكاليستنكس يبني القوة فعلًا: تدريب الضغط المتدرج 3 أيام أسبوعيًا لـ4 أسابيع رفع القوة بشكل مشابه لتمرين البنش برس {{kotarsky-2018}}.','Calisthenics really builds strength: progressive push-up training 3 days a week for 4 weeks raised strength much like bench-press training {{kotarsky-2018}}.'),
      t('تمرّن على كل العضلات الكبرى يومين في الأسبوع على الأقل {{nhs-adults}} {{acsm-2026}}، وأضف 150–300 دقيقة نشاطًا هوائيًا متوسطًا أسبوعيًا مثل المشي السريع {{who-2020}}.','Train all major muscle groups on at least 2 days a week {{nhs-adults}} {{acsm-2026}}, and add 150–300 minutes of moderate aerobic activity such as brisk walking each week {{who-2020}}.'),
      t('أربع حركات تكفي للبداية: ضغط، وسحب، وقرفصاء، وبلانك. كل واحدة لها نسخة أسهل للمبتدئ {{ace-progressions}}.','Four movements are enough to start: a push-up, a pull, a squat and a plank. Each has an easier beginner version {{ace-progressions}}.'),
      t('2–3 مجموعات لكل حركة تكفي، ولا حاجة للتمرين حتى العجز {{acsm-2026}}.','2–3 sets per movement are enough, and you do not need to train to failure {{acsm-2026}}.'),
      t('قاعدة وثبة: عندما تكمل أعلى رقم في النطاق بشكل نظيف في جلستين متتاليتين، انتقل للنسخة الأصعب.','WATHBA rule: once you hit the top of the rep range cleanly in two sessions in a row, move to the harder version.')
    ],
    images:{
      hero:{file:'dheeb-beginner-hero',character:'dheeb',pose:'standing calmly front view with arms relaxed, as if welcoming a beginner.',alt:t('ذيب يستقبل المبتدئين في أكاديمية وثبة','Dheeb welcoming beginners to WATHBA Academy')},
      muscles:{file:'muscles-beginner',character:'dheeb',pose:'standing front view in a relaxed athletic stance, arms slightly away from the body so the chest, arms, abdomen and legs are all visible.',red:{strong:'chest, back of the upper arms, abdominal muscles, front of the thighs and the buttocks',light:'shoulders and calves'},alt:t('ذيب واقفًا، والعضلات التي تعمل في تمارين البداية ملوّنة بالأحمر','Dheeb standing with the muscles used in the starter exercises shaded red')},
      mistake:{file:'sakhr-squat-heels-up',character:'sakhr',pose:'side view in a bodyweight squat showing a clear mistake: heels lifted off the floor, back rounded forward, knees pushed far past the toes.',alt:t('صخر يرفع كعبيه ويقوّس ظهره في القرفصاء، وهذا خطأ شائع','Sakhr lifting his heels and rounding his back in a squat, a common mistake')},
      closing:{file:'sakhr-plank',character:'sakhr',pose:'side view holding a forearm plank, body in one straight line from head to heels.',alt:t('صخر يثبت في تمرين البلانك','Sakhr holding a plank')}
    },
    muscles:{
      primary:[t('الدفع: الصدر والترايسبس ومقدمة الكتف في الضغط {{ace-push-up}}','Push: chest, triceps and front shoulders in the push-up {{ace-push-up}}'),t('الرجلان: الفخذان والأرداف في القرفصاء {{ace-squat}}','Legs: thighs and glutes in the squat {{ace-squat}}'),t('السحب: الظهر والبايسبس في العقلة والتعلق {{ace-pull-up}}','Pull: back and biceps in pull-ups and hangs {{ace-pull-up}}')],
      secondary:[t('الجذع: البطن وأسفل الظهر تحافظ على استقامة الجسم في كل الحركات {{ace-push-up}} {{ace-squat}}','Trunk: abdominals and low back keep the body straight in every movement {{ace-push-up}} {{ace-squat}}'),t('القبضة والساعد في حركات التعلق','Grip and forearms in hanging movements')],
      note:t('هذه هي مجموعات العضلات الكبرى التي توصي NHS بتدريبها يومين في الأسبوع: الرجلان والوركان والظهر والبطن والصدر والكتفان والذراعان {{nhs-adults}}.','These are the major muscle groups the NHS recommends training twice a week: legs, hips, back, abdomen, chest, shoulders and arms {{nhs-adults}}.')
    },
    sections:[
      section('what',t('ما هو الكاليستنكس؟','What is calisthenics?'),
        t('الكاليستنكس تدريب قوة يكون فيه وزن جسمك هو المقاومة. تغيّر الصعوبة بزاوية الجسم ونقطة الارتكاز: الضغط على الحائط أخف من الضغط على الركبتين، وهذا أخف من الضغط الكامل {{ebben-2011}}.','Calisthenics is strength training where your body weight is the resistance. You change the difficulty with body angle and points of support: a wall push-up is lighter than a knee push-up, which is lighter than a full push-up {{ebben-2011}}.'),
        t('وهو ليس تمرينًا خفيفًا: الضغط بحمل مضبوط مرتين أسبوعيًا لمدة 8 أسابيع زاد حجم الصدر والترايسبس وقوتهما بقدر مشابه للبنش برس {{kikuchi-2017}}.','Nor is it light training: push-ups at a matched load twice a week for 8 weeks grew the chest and triceps and their strength about as much as the bench press {{kikuchi-2017}}.')),
      section('four',t('الحركات الأربع الأساسية','The four basic movements'),
        t('الدفع: ابدأ بضغط الحائط ثم الضغط على سطح مرتفع، واخفض السطح تدريجيًا {{nhs-strength}} {{ace-progressions}}. التفاصيل في دليل تمارين الضغط.','Push: start with wall press-ups, then incline push-ups, lowering the surface over time {{nhs-strength}} {{ace-progressions}}. Details are in the push-up guide.'),
        t('الرجلان: القرفصاء بوزن الجسم. ادفع الوركين للخلف وللأسفل، وانزل حتى يصبح الفخذان موازيين للأرض تقريبًا أو حتى يبدأ كعباك بالارتفاع، والركبتان على خط إصبع القدم الثاني {{ace-squat}}. إذا صعبت، اجلس على كرسي وقم منه ببطء {{nhs-strength}}.','Legs: the bodyweight squat. Push your hips back and down and lower until your thighs are about parallel or your heels start to lift, knees tracking over the second toe {{ace-squat}}. If that is hard, sit down onto a chair and stand up slowly {{nhs-strength}}.'),
        t('السحب: التعلق من بار ثابت ثم السحب المساعد، كما في دليل أول عقلة {{ace-progressions}}. لا ترتجل نقطة تعليق على باب أو أثاث.','Pull: hang from a solid bar, then assisted pulls, as in the first pull-up guide {{ace-progressions}}. Never improvise a hanging point on a door or furniture.'),
        t('الجذع: البلانك هو أول خطوة في سلسلة الضغط عند ACE {{ace-progressions}}. ابدأ على الركبتين إذا لزم، وأبقِ الجسم خطًا واحدًا.','Trunk: the plank is the first step in the ACE push-up chain {{ace-progressions}}. Start on your knees if needed, keeping your body in one line.'))
    ],
    ladderNote:t('كل حركة لها نسخة سهلة وأصعب. المقادير للمبتدئ، والأرقام غير المرتبطة بمصدر وعمود «انتقل عندما» قواعد عملية من وثبة.','Each movement has an easy and a harder version. Doses are for beginners; numbers without a source and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('الجلوس والوقوف من كرسي','Sit-to-stand'),t('5 تكرارات، كلما أبطأ كان أفضل {{nhs-strength}}','5 reps, the slower the better {{nhs-strength}}'),t('قم بقوة رجليك لا يديك، واجلس ببطء {{nhs-strength}}.','Stand using your legs, not your arms, and sit slowly {{nhs-strength}}.'),t('تكمل 3 × 10 ببطء دون استعمال اليدين.','You complete 3 × 10 slowly without using your hands.')),
      level(t('القرفصاء بوزن الجسم','Bodyweight squat'),t('2–3 × 8–12','2–3 × 8–12'),t('الوركان للخلف، والفخذان قرب الموازاة، والظهر مستقيم {{ace-squat}}.','Hips back, thighs near parallel, back flat {{ace-squat}}.'),t('تكمل 3 × 15 بالشكل نفسه.','You complete 3 × 15 with the same form.')),
      level(t('ضغط الحائط ثم المائل','Wall, then incline push-up'),t('3 × 5–10 {{nhs-strength}}','3 × 5–10 {{nhs-strength}}'),t('اخفض السطح تدريجيًا كلما تقدمت {{ace-progressions}}.','Lower the surface as you improve {{ace-progressions}}.'),t('تكمل 3 × 10 على سطح بارتفاع الركبة.','You complete 3 × 10 on a knee-height surface.')),
      level(t('البلانك','Plank'),t('2–3 × 15–30 ثانية','2–3 × 15–30 seconds'),t('جسم مستقيم من الرأس للكعبين، دون هبوط الوركين.','A straight line from head to heels without the hips sagging.'),t('تثبت 3 × 45 ثانية، ثم انتقل لثبات وضع الضغط {{ace-progressions}}.','You hold 3 × 45 seconds; then move to a push-up-position plank {{ace-progressions}}.')),
      level(t('التعلق من بار ثابت','Hang from a solid bar'),t('3 × 10–30 ثانية','3 × 10–30 seconds'),t('الكتفان مشدودان للأسفل بعيدًا عن الأذنين {{ace-pull-up}}.','Shoulders drawn down away from the ears {{ace-pull-up}}.'),t('تتعلق 30 ثانية ثلاث مرات، ثم ابدأ دليل أول عقلة.','You hang 30 seconds three times; then start the first pull-up guide.'))
    ],
    program:[
      t('ابدأ بجلستين في الأسبوع على يومين غير متتاليين، وكل جلسة تشمل الحركات الأربع. هذا يحقق توصية تدريب كل العضلات الكبرى يومين أسبوعيًا {{nhs-adults}} {{acsm-2026}}. أضف جلسة ثالثة بعد شهر إذا كان تعافيك جيدًا.','Start with two sessions a week on non-consecutive days, each covering all four movements. That meets the advice to train every major muscle group twice a week {{nhs-adults}} {{acsm-2026}}. Add a third session after a month if you recover well.'),
      t('الراحة 60–120 ثانية بين المجموعات قاعدة من وثبة. سجّل تمرينك: الحركة والتكرارات ومدى صعوبتها، وزد تكرارًا واحدًا عندما تستطيع.','Resting 60–120 seconds between sets is a WATHBA rule. Log each session: the movement, the reps and how hard it felt, and add one rep when you can.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إحماء 5 دقائق، ثم 2–3 مجموعات من كل حركة: قرفصاء، ضغط، تعلق أو سحب، بلانك.','5-minute warm-up, then 2–3 sets of each movement: squat, push-up, hang or pull, plank.')),
      day(t('الإثنين','Monday'),t('مشي سريع 30 دقيقة {{who-2020}}.','30 minutes of brisk walking {{who-2020}}.')),
      day(t('الأربعاء','Wednesday'),t('نفس جلسة الأحد، وحاول زيادة تكرار واحد في حركة أو اثنتين.','The same session as Sunday, trying to add one rep to one or two movements.')),
      day(t('الخميس أو الجمعة','Thursday or Friday'),t('مشي أو نشاط هوائي آخر لتكمل 150 دقيقة في الأسبوع {{who-2020}}.','A walk or other aerobic activity to reach 150 minutes for the week {{who-2020}}.'))
    ],
    mistakes:[
      mistake(t('البدء بالمهارات الصعبة.','Starting with hard skills.'),t('ابدأ بالنسخة السهلة من كل حركة وتقدّم خطوة خطوة؛ هكذا صُممت سلاسل التدرّج {{ace-progressions}}.','Start each movement at its easy version and progress one step at a time; that is how progression chains are designed {{ace-progressions}}.')),
      mistake(t('تدريب الصدر والذراعين فقط.','Training only chest and arms.'),t('درّب الرجلين والظهر والجذع أيضًا؛ التوصية تشمل كل العضلات الكبرى {{nhs-adults}}.','Train legs, back and trunk too; the guidance covers every major muscle group {{nhs-adults}}.')),
      mistake(t('رفع الكعبين أو تقويس الظهر في القرفصاء.','Heels lifting or back rounding in the squat.'),t('انزل فقط حتى قبل أن يحدث ذلك {{ace-squat}}، واستعمل كرسيًا خلفك كمرجع.','Lower only until just before that happens {{ace-squat}}, using a chair behind you as a target.')),
      mistake(t('التمرين كل يوم حتى الإنهاك.','Training to exhaustion every day.'),t('جلستان إلى ثلاث كافية، والتمرين حتى العجز لا يحسّن النتائج بشكل ثابت {{acsm-2026}}.','Two or three sessions are enough, and training to failure does not reliably improve results {{acsm-2026}}.'))
    ],
    faqs:[
      faq(t('ما هي تمارين الكاليستنكس؟','What are calisthenics exercises?'),t('تمارين قوة بوزن الجسم مثل الضغط والعقلة والقرفصاء والبلانك والديبس. تغيّر صعوبتها بتغيير زاوية الجسم ونقطة الارتكاز بدل إضافة أوزان.','Bodyweight strength exercises such as push-ups, pull-ups, squats, planks and dips. You change their difficulty by changing body angle and support instead of adding weights.')),
      faq(t('هل الكاليستنكس يبني عضلات؟','Does calisthenics build muscle?'),t('نعم. في دراسة، الضغط بحمل مضبوط مرتين أسبوعيًا لـ8 أسابيع زاد حجم الصدر والترايسبس بقدر مشابه للبنش برس، وفي أخرى رفع تدريب الضغط المتدرج القوة مثل البنش برس.','Yes. In one study, push-ups at a matched load twice a week for 8 weeks grew the chest and triceps about as much as the bench press; in another, progressive push-up training raised strength like the bench press did.')),
      faq(t('كم مرة أتمرن في الأسبوع؟','How often should I train?'),t('يومين على الأقل لكل العضلات الكبرى، بحسب NHS وACSM. للمبتدئ نقترح جلستين على يومين غير متتاليين، ثم ثلاثًا بعد شهر.','At least 2 days a week for all major muscle groups, per the NHS and ACSM. For beginners we suggest two sessions on non-consecutive days, then three after a month.')),
      faq(t('هل أستطيع ممارسة الكاليستنكس في البيت بدون معدات؟','Can I do calisthenics at home without equipment?'),t('نعم للضغط والقرفصاء والبلانك. السحب يحتاج نقطة تعليق ثابتة مثل بار عقلة مثبت جيدًا؛ لا تستعمل الأبواب أو الأثاث.','Yes for push-ups, squats and planks. Pulling needs a solid hanging point such as a properly fixed pull-up bar; never use doors or furniture.')),
      faq(t('هل الكاليستنكس مناسب للنساء؟','Is calisthenics suitable for women?'),t('نعم، بنفس التدرّج. توصيات منظمة الصحة العالمية وNHS تشمل كل البالغين.','Yes, with the same progression. WHO and NHS guidance covers all adults.')),
      faq(t('هل يجب أن أعمل عقلة من أول يوم؟','Do I need to do a pull-up on day one?'),t('لا. ابدأ بالتعلق والسحب المساعد، واتبع سلّم دليل أول عقلة.','No. Start with hangs and assisted pulls, and follow the ladder in the first pull-up guide.'))
    ],
    related:['push-ups','first-pull-up','parallettes','dips'],
    products:['wall-pull-up-bar','resistance-bands','steel-wood-parallettes'],
    sources:['kotarsky-2018','nhs-adults','acsm-2026','who-2020','ace-progressions','ace-push-up','ace-squat','ace-pull-up','ebben-2011','kikuchi-2017','nhs-strength']
  },
  {
    slug:'dips', reviewed:'2026-11-27',
    title:t('تمارين الديبس على المتوازي: من الدعم إلى أول عدة كاملة','Parallel Bar Dips: From Support Holds to Your First Full Rep'),
    description:t('تعلّم الديبس على المتوازي: العضلات المستهدفة، الفرق بين ديبس الكرسي والمتوازي والحلقات، سلّم تدرّج وجدول أسبوعي، بحسب دراسات منشورة وتوصيات ACSM.','Learn parallel bar dips: target muscles, bench vs bar vs ring dips, a progression ladder and weekly plan, based on published studies and ACSM guidance.'),
    tags:[t('دفع وقوة','Pushing strength'),t('مبتدئ إلى متوسط','Beginner to intermediate'),t('متوازي','Parallel bars')],
    lead:t('الديبس تنزل فيه بجسمك بين مسكتين ثم تدفعه للأعلى. هو من أقوى تمارين الصدر والترايسبس بوزن الجسم، ويبدأ بالثبات في وضع الدعم قبل أي نزول.','In a dip you lower your body between two handles and press it back up. It is one of the strongest bodyweight exercises for the chest and triceps, and it starts with a steady support hold before any lowering.'),
    summary:[
      t('ديبس المتوازي يستهدف الصدر والترايسبس بفعالية، وشكل الحركة لا يتغير كثيرًا حتى مع التعب {{mckenzie-fatigue-2022}}.','Bar dips target the chest and triceps effectively, and technique holds up well even with fatigue {{mckenzie-fatigue-2022}}.'),
      t('الترتيب: ديبس الكرسي، ثم المتوازي، ثم الحلقات. نشاط العضلات في المتوازي أعلى من الكرسي، والحلقات مشابهة للمتوازي مع عمل أكبر لبعض العضلات {{mckenzie-dips-2022}}.','The order: bench dips, then bar dips, then ring dips. Muscle activity is higher on bars than on a bench, and rings are similar to bars with some muscles working harder {{mckenzie-dips-2022}}.'),
      t('إذا كان كتفك حساسًا، انتبه لديبس الكرسي: يحتاج مدًى أكبر لمدّ الكتف للخلف {{mckenzie-dips-2022}}.','If your shoulder is sensitive, be careful with bench dips: they need a greater shoulder-extension range {{mckenzie-dips-2022}}.'),
      t('تمرّن جلستين أسبوعيًا على الأقل بـ2–3 مجموعات {{acsm-2026}}.','Train at least 2 sessions a week with 2–3 sets {{acsm-2026}}.'),
      t('قاعدة وثبة: لا تبدأ الديبس قبل أن تثبت 3 × 20 ثانية في وضع الدعم بكتفين ثابتين.','WATHBA rule: do not start dips until you can hold 3 × 20 seconds in support with steady shoulders.')
    ],
    images:{
      hero:{file:'dheeb-dips-hero',character:'dheeb',pose:'side view at the bottom of a dip between two plain parallel steel bars, elbows bent about 90 degrees, torso slightly leaning forward, legs straight under him, calm and controlled.',alt:t('ذيب في أسفل حركة الديبس على المتوازي','Dheeb at the bottom of a parallel bar dip')},
      muscles:{file:'muscles-dips',character:'dheeb',pose:'three-quarter front view in a straight-arm support at the top of a dip between two plain parallel steel bars.',red:{strong:'chest and triceps (back of the upper arms)',light:'front of the shoulders and the abdominal muscles'},alt:t('ذيب في وضع الدعم على المتوازي، والعضلات العاملة ملوّنة بالأحمر','Dheeb in support on parallel bars with the working muscles shaded red')},
      mistake:{file:'sakhr-dips-shrugged',character:'sakhr',pose:'side view at the bottom of a dip between two plain parallel steel bars showing a clear mistake: shoulders shrugged up to his ears and rolled forward, sinking far too deep, looking strained.',alt:t('صخر ينزل أعمق من اللازم وكتفاه مرفوعتان في الديبس، وهذا خطأ شائع','Sakhr sinking too deep with shrugged shoulders in a dip, a common mistake')},
      closing:{file:'sakhr-support-hold',character:'sakhr',pose:'front view holding a straight-arm support on two plain parallel steel bars, feet off the floor, knees slightly bent, proud.',alt:t('صخر يثبت في وضع الدعم على المتوازي','Sakhr holding a support on parallel bars')}
    },
    muscles:{
      primary:[t('الصدر: العضلة الصدرية الكبرى {{mckenzie-fatigue-2022}}','Chest: pectoralis major {{mckenzie-fatigue-2022}}'),t('خلف الذراع: الترايسبس {{mckenzie-fatigue-2022}} {{mckenzie-dips-2022}}','Back of the arm: triceps {{mckenzie-fatigue-2022}} {{mckenzie-dips-2022}}')],
      secondary:[t('مقدمة الكتف وعضلات تثبيت الكتف، ويزيد عملها مع التعب {{mckenzie-fatigue-2022}}','Front shoulder and shoulder stabilisers, which work harder as you tire {{mckenzie-fatigue-2022}}'),t('الجذع: يحافظ على وضع الجسم بين المسكتين','Trunk: holds your body position between the handles')],
      note:t('في ديبس الكرسي يأخذ الترايسبس معظم العمل، وفي المتوازي والحلقات يرتفع نشاط العضلات أكثر {{mckenzie-dips-2022}}.','In bench dips the triceps does most of the work; on bars and rings muscle activity rises further {{mckenzie-dips-2022}}.')
    },
    sections:[
      section('technique',t('كيف تبدو عدة الديبس الصحيحة؟','What does a good dip look like?'),
        t('ابدأ في وضع الدعم: ذراعان ممدودتان، والكتفان مشدودان للأسفل بعيدًا عن الأذنين، والجسم ثابت دون تأرجح. انزل بثني المرفقين مع ميل خفيف للجذع للأمام، ثم ادفع حتى تمتد الذراعان.','Start in support: arms straight, shoulders drawn down away from the ears, body still with no swinging. Lower by bending the elbows with a slight forward lean, then press until the arms are straight.'),
        t('العمق: ACSM وجدت أن المدى الأكبر يبني قوة أكثر {{acsm-2026}}، لكن الديبس يضع الكتف في مدًى كبير. قاعدة وثبة: انزل فقط للعمق الذي يبقى فيه الكتف مريحًا والمرفقان قرب الجسم، وزد العمق تدريجيًا.','Depth: ACSM found a larger range builds more strength {{acsm-2026}}, but the dip takes the shoulder through a big range. WATHBA rule: lower only as deep as your shoulder stays comfortable with elbows close to your sides, and add depth gradually.')),
      section('types',t('ديبس الكرسي أم المتوازي أم الحلقات؟','Bench, bar or ring dips?'),
        t('ديبس الكرسي، ويداك على كرسي خلفك، يركّز على الترايسبس لكنه يدفع الكتف إلى مدّ أكبر للخلف؛ لذلك انتبه له إذا كان لديك ألم في الكتف {{mckenzie-dips-2022}}.','Bench dips, with your hands on a bench behind you, focus on the triceps but push the shoulder into more extension; take care with them if your shoulder hurts {{mckenzie-dips-2022}}.'),
        t('ديبس المتوازي هو الخطوة التالية المنطقية لأن نشاط العضلات فيه أعلى {{mckenzie-dips-2022}}. الحلقات تتحرك، فتحتاج تحكمًا أكبر وتزيد عمل بعض العضلات؛ ابدأها بعد إتقان المتوازي {{mckenzie-dips-2022}}.','Bar dips are the logical next step because muscle activity is higher {{mckenzie-dips-2022}}. Rings move, so they demand more control and make some muscles work harder; start them after mastering bars {{mckenzie-dips-2022}}.')),
      section('equipment',t('أي متوازي يناسبك في البيت؟','Which dip station suits your home?'),
        t('المتوازي المثبت على الحائط يوفر مساحة الأرض، ويحتاج حائطًا مناسبًا ومساحة أمامه لركبتيك. المتوازي الأرضي يحتاج أرضية مستوية ومساحة للقواعد، والكبير منه يعطي ارتفاعًا كافيًا لتنزل دون أن تلمس قدماك الأرض. قِس مساحتك قبل الاختيار.','A wall-mounted dip station saves floor space but needs a suitable wall and room for your knees. Floor parallel bars need level ground and room for the bases; the large version gives enough height to lower without your feet touching the floor. Measure your space before choosing.'))
    ],
    ladderNote:t('السلّم يبدأ بالدعم ثم ينتقل من الأسهل للأصعب كما في المقارنة بين أنواع الديبس {{mckenzie-dips-2022}}. المقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The ladder starts with support, then moves from easier to harder dips as in the comparison of dip types {{mckenzie-dips-2022}}. Doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('ثبات الدعم','Support hold'),t('3 × 10–20 ثانية','3 × 10–20 seconds'),t('ذراعان ممدودتان، كتفان للأسفل، جسم ثابت.','Straight arms, shoulders down, body still.'),t('تثبت 3 × 20 ثانية بكتفين ثابتين.','You hold 3 × 20 seconds with steady shoulders.')),
      level(t('ديبس بمساعدة القدمين','Foot-assisted dips'),t('3 × 5–8','3 × 5–8'),t('قدماك على الأرض أو على درجة تخفف جزءًا من الوزن.','Feet on the floor or a step to take some of the weight.'),t('تكمل 3 × 8 بأقل مساعدة.','You complete 3 × 8 with minimal help.')),
      level(t('النزول البطيء','Slow negatives'),t('3 × 3–5، نزول في 3–5 ثوانٍ','3 × 3–5, 3–5-second lowering'),t('ابدأ من الأعلى وانزل ببطء، ثم ارجع للأعلى بمساعدة قدميك.','Start at the top, lower slowly, then return to the top with your feet.'),t('تتحكم في 5 ثوانٍ نزولًا في كل تكرار.','You control a 5-second descent every rep.')),
      level(t('ديبس المتوازي الكامل','Full bar dip'),t('3 × 3–8','3 × 3–8'),t('للعمق المريح للكتف، دون تأرجح {{mckenzie-fatigue-2022}}.','To a shoulder-comfortable depth, without swinging {{mckenzie-fatigue-2022}}.'),t('تكمل 3 × 10 نظيفة.','You complete 3 clean sets of 10.')),
      level(t('ديبس الحلقات','Ring dips'),t('3 × 3–6','3 × 3–6'),t('ثبّت الحلقات قرب جسمك؛ عدم الثبات يزيد عمل العضلات {{mckenzie-dips-2022}}.','Keep the rings close to your body; the instability makes muscles work harder {{mckenzie-dips-2022}}.'),t('تكمل 3 × 8، ثم فكّر بوزن إضافي على المتوازي.','You complete 3 × 8; then consider added weight on bars.'))
    ],
    program:[
      t('جلستان إلى ثلاث في الأسبوع مع يوم راحة بينها، و2–3 مجموعات من مرحلتك {{acsm-2026}}. ضع الديبس في أول الجلسة بعد الإحماء، لأن التمارين في بداية الجلسة تكسب قوة أكثر {{acsm-2026}}.','Two or three sessions a week with a rest day between, and 2–3 sets at your stage {{acsm-2026}}. Put dips first after the warm-up, since exercises at the start of a session gain more strength {{acsm-2026}}.'),
      t('الراحة 90 ثانية إلى دقيقتين بين المجموعات قاعدة من وثبة. ادمج الديبس مع العقلة في نفس الجلسة لتوازن الدفع والسحب.','Resting 90 seconds to 2 minutes between sets is a WATHBA rule. Pair dips with pull-ups in the same session to balance pushing and pulling.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إحماء للكتفين، ثم 3 مجموعات من مرحلتك في الديبس، ثم 3 مجموعات من مرحلتك في العقلة.','Shoulder warm-up, 3 sets at your dip stage, then 3 sets at your pull-up stage.')),
      day(t('الثلاثاء','Tuesday'),t('راحة من الدفع، أو رجلين وجذع.','No pushing, or legs and trunk.')),
      day(t('الأربعاء','Wednesday'),t('3 مجموعات نزول بطيء، ثم ثبات دعم 2 × 20 ثانية.','3 sets of slow negatives, then 2 × 20-second support holds.')),
      day(t('الجمعة','Friday'),t('اختياري: نفس جلسة الأحد مع محاولة زيادة تكرار واحد.','Optional: Sunday\'s session, trying to add one rep.'))
    ],
    mistakes:[
      mistake(t('الكتفان مرفوعتان للأذنين.','Shoulders shrugged up to the ears.'),t('اشدّهما للأسفل قبل كل عدة، وارجع لثبات الدعم إذا لم تستطع.','Draw them down before every rep, and go back to support holds if you cannot.')),
      mistake(t('النزول العميق على حساب الكتف.','Sinking deep at the shoulder\'s expense.'),t('انزل للعمق المريح وزده تدريجيًا؛ الكتف يعمل في مدًى كبير في الديبس {{mckenzie-dips-2022}}.','Lower to a comfortable depth and add more gradually; the shoulder works through a big range in dips {{mckenzie-dips-2022}}.')),
      mistake(t('البدء بالحلقات.','Starting on rings.'),t('أتقن المتوازي أولًا؛ الحلقات تحتاج تحكمًا أكبر {{mckenzie-dips-2022}}.','Master bars first; rings need more control {{mckenzie-dips-2022}}.')),
      mistake(t('التأرجح والركل للصعود.','Swinging and kicking up.'),t('استعمل قدميك كمساعدة مقصودة على الأرض أو درجة بدل الزخم.','Use your feet as deliberate assistance on the floor or a step instead of momentum.'))
    ],
    faqs:[
      faq(t('ما العضلات التي يشغّلها الديبس؟','Which muscles do dips work?'),t('الصدر والترايسبس بشكل أساسي، مع مقدمة الكتف وعضلات تثبيت الكتف والجذع. دراسة على ديبس المتوازي وجدت أنه يستهدف الصدر والترايسبس بفعالية.','Mainly the chest and triceps, plus the front shoulder, shoulder stabilisers and trunk. A study of bar dips found they target the chest and triceps effectively.')),
      faq(t('أيهما أسهل: ديبس الكرسي أم المتوازي؟','Which is easier, bench dips or bar dips?'),t('ديبس الكرسي أخف ونشاط العضلات فيه أقل، لذلك المتوازي خطوة تالية مناسبة. لكن ديبس الكرسي يحتاج مدًى أكبر لمدّ الكتف للخلف، فانتبه له إذا كان كتفك يؤلمك.','Bench dips are lighter with less muscle activity, so bar dips are a suitable next step. But bench dips need more shoulder extension, so take care if your shoulder hurts.')),
      faq(t('كم أنزل في الديبس؟','How deep should I go in a dip?'),t('للعمق الذي يبقى فيه كتفك مريحًا والمرفقان قرب جسمك، وزده تدريجيًا. المدى الأكبر يبني قوة أكثر، لكن ليس على حساب الألم.','To the depth where your shoulder stays comfortable and your elbows stay close, increasing it gradually. A larger range builds more strength, but not at the cost of pain.')),
      faq(t('هل أحتاج متوازي أرضي أم على الحائط؟','Do I need floor bars or a wall-mounted station?'),t('الحائطي يوفر مساحة الأرض ويحتاج حائطًا مناسبًا، والأرضي يحتاج أرضية مستوية ومساحة للقواعد. اختر بحسب مساحتك ونوع جدارك.','A wall station saves floor space but needs a suitable wall; floor bars need level ground and room for the bases. Choose by your space and wall type.')),
      faq(t('متى أنتقل لديبس الحلقات؟','When should I move to ring dips?'),t('بعد أن تكمل 3 مجموعات من 10 ديبس نظيفة على المتوازي. الحلقات مشابهة للمتوازي في نشاط العضلات لكنها تحتاج تحكمًا أكبر.','Once you can do 3 clean sets of 10 bar dips. Rings give similar muscle activity to bars but demand more control.'))
    ],
    related:['push-ups','rings','first-pull-up','parallettes'],
    products:['wall-mounted-dip-bars','freestanding-parallel-bars-large','freestanding-parallel-bars-small'],
    sources:['mckenzie-fatigue-2022','mckenzie-dips-2022','acsm-2026']
  },
  {
    slug:'rings', reviewed:'2026-11-27',
    title:t('تمارين حلقات الجمباز للمبتدئين: التعليق والدعم والسحب والدفع','Gymnastic Rings for Beginners: Setup, Support, Pulling and Pushing'),
    description:t('كيف تبدأ التمرين على حلقات الجمباز: التعليق الآمن، ثبات الدعم، السحب والضغط والديبس على الحلقات، ولماذا هي أصعب من البار، بحسب دراسات منشورة.','How to start on gymnastic rings: safe setup, support holds, ring rows, push-ups and dips, and why rings are harder than bars, based on published studies.'),
    tags:[t('تحكم وثبات','Control and stability'),t('متوسط','Intermediate'),t('حلقات جمباز','Gymnastic rings')],
    lead:t('الحلقات تتحرك في كل اتجاه، فتجبر عضلاتك على العمل لتثبيتها. لهذا تمرين بسيط مثل الضغط أو الديبس يصبح أصعب على الحلقات. ابدأ بحركات تكون فيها قدماك على الأرض.','Rings move in every direction, so your muscles must work to steady them. That is why a simple push-up or dip gets harder on rings. Start with movements where your feet stay on the floor.'),
    summary:[
      t('عدم ثبات الحلقات يزيد عمل العضلات: في الماسل أب عملت الذراعان والساعدان أكثر على الحلقات منها على البار {{walker-muscle-up-2023}}، وفي الديبس عملت ثلاث عضلات أكثر {{mckenzie-dips-2022}}.','Ring instability raises muscle demand: in the muscle-up the arms and forearms worked harder on rings than on a bar {{walker-muscle-up-2023}}, and in dips three muscles worked harder {{mckenzie-dips-2022}}.'),
      t('الضغط المعلّق، أي على الحلقات، فعّال جدًا لتشغيل عضلات البطن، بينما يعطي الضغط الثابت عملًا أكبر للصدر ومقدمة الكتف {{calatayud-2014}}.','Suspended push-ups, as on rings, are highly effective for the abdominals, while stable push-ups give the chest and front shoulder more work {{calatayud-2014}}.'),
      t('تعلّم الحركة على البار أو المتوازي أولًا ثم انقلها للحلقات؛ الباحثون يقترحون تعلم الماسل أب على البار أولًا لأنه أسهل {{walker-muscle-up-2023}}.','Learn a movement on a bar or parallel bars first, then take it to rings; researchers suggest learning the muscle-up on a bar first because it is easier {{walker-muscle-up-2023}}.'),
      t('تمرّن جلستين أسبوعيًا على الأقل {{acsm-2026}}.','Train at least 2 sessions a week {{acsm-2026}}.'),
      t('قاعدة وثبة: لا تنتقل لحركة تكون فيها قدماك في الهواء قبل أن تثبت 3 × 20 ثانية في دعم الحلقات دون اهتزاز كبير.','WATHBA rule: do not move to feet-off-the-floor movements until you can hold 3 × 20 seconds in a ring support without heavy shaking.')
    ],
    images:{
      hero:{file:'dheeb-rings-hero',character:'dheeb',pose:'front view holding a steady straight-arm support on two plain wooden gymnastic rings hanging from straps, rings close to his hips, calm.',alt:t('ذيب في وضع الدعم على حلقات الجمباز','Dheeb in a support hold on gymnastic rings')},
      muscles:{file:'muscles-rings',character:'sakhr',pose:'side view doing a ring row: body leaning back under two plain wooden gymnastic rings hanging from straps, heels on the floor, body straight, chest pulled up to the rings.',red:{strong:'the large back muscles (latissimus dorsi) and the biceps',light:'the forearms, the area between the shoulder blades, and the abdominal muscles'},alt:t('صخر يسحب جسمه على الحلقات، والعضلات العاملة ملوّنة بالأحمر','Sakhr doing a ring row with the working muscles shaded red')},
      mistake:{file:'sakhr-rings-flared',character:'sakhr',pose:'front view in a ring support showing a clear mistake: the rings drifting wide away from his body, arms shaking, shoulders shrugged up.',alt:t('صخر تبتعد الحلقات عن جسمه في وضع الدعم، وهذا خطأ شائع','Sakhr letting the rings drift wide in a support hold, a common mistake')},
      closing:{file:'sakhr-ring-push-up',character:'sakhr',pose:'side view doing a push-up with his hands on two plain wooden gymnastic rings hanging low near the floor, body straight.',alt:t('صخر يعمل ضغطًا على الحلقات','Sakhr doing a ring push-up')}
    },
    muscles:{
      primary:[t('السحب على الحلقات: الظهر والبايسبس والساعد، ويزيد عمل الذراع والساعد مع عدم الثبات {{walker-muscle-up-2023}}','Pulling on rings: back, biceps and forearms, with arms and forearms working harder because of the instability {{walker-muscle-up-2023}}'),t('الدفع على الحلقات: الصدر والترايسبس {{mckenzie-dips-2022}} {{calatayud-2014}}','Pushing on rings: chest and triceps {{mckenzie-dips-2022}} {{calatayud-2014}}')],
      secondary:[t('البطن: الضغط المعلّق يشغّلها بقوة {{calatayud-2014}}','Abdominals: suspended push-ups work them hard {{calatayud-2014}}'),t('أعلى شبه المنحرفة والساعد للتحكم بالحلقات {{walker-muscle-up-2023}}','Upper trapezius and forearms to control the rings {{walker-muscle-up-2023}}')],
      note:t('ما يميّز الحلقات ليس عضلات جديدة، بل جهد أكبر لنفس العضلات لكي تمنع الحلقات من الحركة.','Rings do not add new muscles; they make the same muscles work harder to keep the rings still.')
    },
    sections:[
      section('setup',t('كيف تعلّق الحلقات بأمان؟','How do you hang rings safely?'),
        t('علّق الحزامين على نقطة ثابتة تتحمل وزنك مع الحركة، مثل بار عقلة مثبت جيدًا، وتأكد أن الحلقتين على نفس الارتفاع وأن الأبزيم مقفل قبل أن تضع وزنك. قاعدة وثبة: اختبر التعليق بوزنك وقدماك على الأرض قبل أي حركة.','Hang both straps from a solid point that holds your weight in motion, such as a properly fixed pull-up bar, check the rings are level and the buckles are locked before loading them. WATHBA rule: test the setup with your feet on the floor before any movement.'),
        t('غيّر الصعوبة بتغيير ارتفاع الحلقات: الحلقات المنخفضة لتمارين الضغط والسحب المائل، والمرتفعة للدعم والديبس.','Change difficulty with ring height: low rings for push-ups and rows, high rings for support and dips.')),
      section('why',t('لماذا الحلقات أصعب من البار؟','Why are rings harder than a bar?'),
        t('البار ثابت، أما الحلقات فتتحرك. في مقارنة الماسل أب على الحلقات والبار، زاد نشاط الذراع والساعد وأعلى شبه المنحرفة على الحلقات، دون تغيير كبير في مثبتات الكتف {{walker-muscle-up-2023}}. وفي الديبس كان نشاط العضلات على الحلقات مشابهًا للمتوازي مع زيادة في ثلاث عضلات {{mckenzie-dips-2022}}.','A bar stays put; rings move. Comparing ring and bar muscle-ups, the arms, forearms and upper trapezius worked harder on rings, with little change in shoulder stabilisers {{walker-muscle-up-2023}}. In dips, muscle activity on rings was similar to bars, with three muscles working harder {{mckenzie-dips-2022}}.'),
        t('والضغط على الحلقات يغيّر توزيع العمل: يزيد عمل البطن والترايسبس، بينما يأخذ الصدر ومقدمة الكتف عملًا أكبر في الضغط الثابت {{calatayud-2014}}.','Ring push-ups shift the work: more for the abdominals and triceps, while the chest and front shoulder work harder in stable push-ups {{calatayud-2014}}.'))
    ],
    ladderNote:t('السلّم من الأثبت للأقل ثباتًا، مستندًا إلى المقارنات بين البار والحلقات {{mckenzie-dips-2022}} {{walker-muscle-up-2023}}. المقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The ladder runs from most to least stable, based on the bar-versus-ring comparisons {{mckenzie-dips-2022}} {{walker-muscle-up-2023}}. Doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('السحب المائل على الحلقات','Ring row'),t('3 × 6–10','3 × 6–10'),t('كعباك على الأرض، والجسم مستقيم، واسحب صدرك للحلقات. كلما كان جسمك أقرب للأفقي زادت الصعوبة.','Heels on the floor, body straight, pull your chest to the rings. The more horizontal your body, the harder it gets.'),t('تكمل 3 × 10 والجسم قريب من الأفقي.','You complete 3 × 10 with your body near horizontal.')),
      level(t('الضغط على الحلقات','Ring push-up'),t('3 × 5–10','3 × 5–10'),t('ابدأ والحلقات أعلى من الأرض قليلًا، وأبقها قرب جسمك {{calatayud-2014}}.','Start with the rings a little above the floor and keep them close to your body {{calatayud-2014}}.'),t('تكمل 3 × 10 دون أن تبتعد الحلقات.','You complete 3 × 10 without the rings drifting.')),
      level(t('دعم الحلقات','Ring support hold'),t('3 × 10–20 ثانية','3 × 10–20 seconds'),t('ذراعان ممدودتان، والحلقات ملاصقة للوركين، والكتفان للأسفل.','Straight arms, rings against your hips, shoulders down.'),t('تثبت 3 × 20 ثانية دون اهتزاز كبير.','You hold 3 × 20 seconds without heavy shaking.')),
      level(t('ديبس الحلقات','Ring dip'),t('3 × 3–6','3 × 3–6'),t('بعد إتقان ديبس المتوازي؛ الحلقات تزيد عمل بعض العضلات {{mckenzie-dips-2022}}.','After mastering bar dips; rings make some muscles work harder {{mckenzie-dips-2022}}.'),t('تكمل 3 × 8 نظيفة.','You complete 3 clean sets of 8.')),
      level(t('عقلة الحلقات','Ring pull-up'),t('3 × 3–6','3 × 3–6'),t('بعد العقلة الكاملة على البار؛ دع الحلقات تدور طبيعيًا مع يديك.','After a full bar pull-up; let the rings rotate naturally with your hands.'),t('تكمل 3 × 6، ثم تعلّم الماسل أب على البار أولًا {{walker-muscle-up-2023}}.','You complete 3 × 6; then learn the muscle-up on a bar first {{walker-muscle-up-2023}}.'))
    ],
    program:[
      t('جلستان أسبوعيًا على الأقل {{acsm-2026}}. ابدأ بحركة سحب وحركة دفع وثبات دعم في كل جلسة، 2–3 مجموعات لكل منها {{acsm-2026}}.','At least two sessions a week {{acsm-2026}}. Start each session with a pull, a push and a support hold, 2–3 sets each {{acsm-2026}}.'),
      t('الراحة 90 ثانية بين المجموعات قاعدة من وثبة. إذا بدأت الحلقات تهتز بشدة أو تبتعد عن جسمك، فقد انتهت المجموعة.','Resting 90 seconds between sets is a WATHBA rule. When the rings start shaking hard or drifting away, the set is over.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('سحب مائل 3 مجموعات، ضغط على الحلقات 3 مجموعات، دعم 3 × 10–20 ثانية.','Ring rows 3 sets, ring push-ups 3 sets, support 3 × 10–20 seconds.')),
      day(t('الثلاثاء','Tuesday'),t('راحة من الحلقات، أو رجلين ومشي.','No rings, or legs and walking.')),
      day(t('الأربعاء','Wednesday'),t('نفس جلسة الأحد، واخفض زاوية جسمك قليلًا في السحب.','The same as Sunday, lowering your body angle slightly in the rows.')),
      day(t('الجمعة','Friday'),t('اختياري: دعم وديبس أو عقلة حسب مرحلتك.','Optional: support plus dips or pull-ups for your stage.'))
    ],
    mistakes:[
      mistake(t('ابتعاد الحلقات عن الجسم.','Rings drifting away from the body.'),t('أبقها ملاصقة لجسمك، وارجع لحركة أثبت إذا لم تستطع.','Keep them against your body, and drop to a more stable movement if you cannot.')),
      mistake(t('البدء بالحركات المعلقة بالكامل.','Starting with fully hanging movements.'),t('ابدأ بالسحب المائل والضغط وقدماك على الأرض، ثم الدعم.','Start with rows and push-ups with your feet down, then support holds.')),
      mistake(t('تعلّم المهارة على الحلقات مباشرة.','Learning a skill straight on rings.'),t('تعلمها على البار أو المتوازي أولًا؛ الحلقات أصعب {{walker-muscle-up-2023}}.','Learn it on a bar or parallel bars first; rings are harder {{walker-muscle-up-2023}}.')),
      mistake(t('حلقتان على ارتفاعين مختلفين.','Rings at different heights.'),t('اضبطهما على نفس الارتفاع وافحص الأبزيم قبل كل جلسة.','Set them level and check the buckles before every session.'))
    ],
    faqs:[
      faq(t('هل حلقات الجمباز مناسبة للمبتدئ؟','Are gymnastic rings suitable for beginners?'),t('نعم، بحركات تكون فيها القدمان على الأرض مثل السحب المائل والضغط. الحركات المعلقة بالكامل مثل الديبس والعقلة تأتي بعد إتقانها على البار والمتوازي.','Yes, with feet-down movements such as rows and push-ups. Fully hanging moves such as dips and pull-ups come after mastering them on a bar and parallel bars.')),
      faq(t('لماذا الضغط على الحلقات أصعب؟','Why are ring push-ups harder?'),t('لأن الحلقات تتحرك، فتعمل البطن والترايسبس أكثر لتثبيت الجسم. دراسة وجدت أن الضغط المعلّق فعّال جدًا لتشغيل عضلات البطن.','Because the rings move, your abdominals and triceps work harder to steady you. A study found suspended push-ups highly effective for the abdominals.')),
      faq(t('أين أعلّق الحلقات في البيت؟','Where should I hang rings at home?'),t('على نقطة ثابتة تتحمل وزنك وهو يتحرك، مثل بار عقلة مثبت جيدًا. لا تعلقها على باب أو أنابيب أو أثاث.','From a solid point that holds your moving body weight, such as a properly fixed pull-up bar. Never hang them from a door, pipes or furniture.')),
      faq(t('هل أتعلم الماسل أب على الحلقات أم البار؟','Should I learn the muscle-up on rings or a bar?'),t('على البار أولًا. الدراسة التي قارنت الاثنين اقترحت أن الماسل أب على البار أسهل للتعلم، لأن الحلقات تحتاج عملًا أكبر من الذراعين.','On a bar first. The study comparing the two suggested the bar muscle-up is easier to learn, because rings demand more from the arms.'))
    ],
    related:['dips','first-pull-up','push-ups','beginner'],
    products:['gymnastic-rings','wall-pull-up-bar'],
    sources:['walker-muscle-up-2023','mckenzie-dips-2022','calatayud-2014','acsm-2026']
  },
  {
    slug:'parallettes', reviewed:'2026-11-27',
    title:t('ما هي الباراليتس؟ وكيف تتدرّب عليها: الضغط والدعم والـL-sit','What Are Parallettes? Push-ups, Support Holds and the L-sit'),
    description:t('الباراليتس للمبتدئ والمتقدم: لماذا تريح الرسغ، تمارين الضغط والدعم والـL-sit عليها، سلّم تدرّج وجدول أسبوعي، وكيف تختار بين الحديد والخشب.','Parallettes for beginners and beyond: why they ease the wrist, push-ups, support holds and L-sits, a progression ladder, a weekly plan and steel versus wood.'),
    tags:[t('دفع وتحكم','Pushing and control'),t('مبتدئ إلى متقدم','Beginner to advanced'),t('باراليتس','Parallettes')],
    lead:t('الباراليتس زوج من المقابض القصيرة القريبة من الأرض. تمسكها بقبضة كاملة فيبقى رسغك مستقيمًا، وتستخدمها للضغط والدعم ورفع الرجلين ومهارات التوازن.','Parallettes are a pair of short handles close to the floor. You grip them fully so your wrist stays straight, and use them for push-ups, support holds, leg raises and balance skills.'),
    summary:[
      t('على الباراليتس يبقى الرسغ مستقيمًا بدل أن ينثني للخلف، ودراسة على قوى الرسغ رجّحت أن هذا أكثر أمانًا {{wrist-2018}}.','On parallettes your wrist stays straight instead of bending back, which a wrist-force study concluded is likely safer {{wrist-2018}}.'),
      t('الضغط المتدرج يبني القوة فعلًا: 3 أيام أسبوعيًا لـ4 أسابيع رفع القوة مثل البنش برس {{kotarsky-2018}}.','Progressive push-ups really build strength: 3 days a week for 4 weeks raised strength like the bench press {{kotarsky-2018}}.'),
      t('ابدأ بالضغط والدعم، ثم ثبات الركبتين المرفوعتين، ثم الـL-sit. قاعدة وثبة: لا تنتقل قبل 3 × 20 ثانية نظيفة في المرحلة الحالية.','Start with push-ups and support holds, then a tuck hold, then the L-sit. WATHBA rule: do not move on before 3 clean 20-second holds at your current stage.'),
      t('تمرّن جلستين أسبوعيًا على الأقل بـ2–3 مجموعات {{acsm-2026}}.','Train at least 2 sessions a week with 2–3 sets {{acsm-2026}}.'),
      t('الباراليتس لا تعالج ألمًا في الرسغ؛ إذا استمر الألم توقف واستشر مختصًا.','Parallettes do not treat wrist pain; if pain persists, stop and get it checked.')
    ],
    images:{
      hero:{file:'dheeb-parallettes-hero',character:'dheeb',pose:'side view holding a tuck support on a pair of low parallettes (plain dark steel bases with light wooden handles): arms straight, knees tucked to the chest, feet off the floor.',alt:t('ذيب يثبت والركبتان مرفوعتان على الباراليتس','Dheeb in a tuck hold on parallettes')},
      muscles:{file:'muscles-parallettes',character:'dheeb',pose:'front three-quarter view in an L-sit on a pair of low parallettes (plain dark steel bases with light wooden handles): arms straight, legs straight out in front, parallel to the floor.',red:{strong:'the abdominal muscles, the triceps, and the front of the thighs (hip flexors)',light:'the chest, the front of the shoulders, and the forearms'},alt:t('ذيب في وضع L-sit على الباراليتس، والعضلات العاملة ملوّنة بالأحمر','Dheeb in an L-sit on parallettes with the working muscles shaded red')},
      mistake:{file:'sakhr-parallettes-shrugged',character:'sakhr',pose:'side view trying a support hold on a pair of low parallettes showing a clear mistake: shoulders shrugged up to his ears, back rounded, elbows bent, feet dragging on the floor.',alt:t('صخر يرفع كتفيه ويقوّس ظهره في الدعم على الباراليتس، وهذا خطأ شائع','Sakhr shrugging and rounding in a parallettes support, a common mistake')},
      closing:{file:'sakhr-parallettes-push-up',character:'sakhr',pose:'side view doing a push-up with his hands on a pair of low parallettes, body straight, chest lowered between the handles.',alt:t('صخر يعمل ضغطًا على الباراليتس','Sakhr doing a push-up on parallettes')}
    },
    muscles:{
      primary:[t('في الضغط: الصدر والترايسبس ومقدمة الكتف {{ace-push-up}} {{kikuchi-2017}}','In push-ups: chest, triceps and front shoulders {{ace-push-up}} {{kikuchi-2017}}'),t('في الدعم والـL-sit: الترايسبس والكتفان يحملان الجسم، والبطن ومقدمة الفخذ ترفع الرجلين','In supports and L-sits: triceps and shoulders hold the body up, abdominals and hip flexors lift the legs')],
      secondary:[t('الساعد والقبضة: تمسك المقبض طوال الحركة','Forearms and grip: holding the handle throughout'),t('المنشارية الأمامية: تثبّت لوح الكتف في الضغط {{calatayud-2014}}','Serratus anterior: steadies the shoulder blade in push-ups {{calatayud-2014}}')],
      note:t('عضلات الضغط مصدرها الدراسات المذكورة. عضلات الدعم والـL-sit وصف تشريحي من وثبة، لأننا لم نجد دراسة منشورة تقيس هذه الحركة تحديدًا.','The push-up muscles come from the cited studies. The support and L-sit muscles are a WATHBA anatomical description, as we found no published study measuring these moves specifically.')
    },
    sections:[
      section('what',t('ما الفرق بين الباراليتس والمتوازي؟','How are parallettes different from parallel bars?'),
        t('الباراليتس قصيرة وقريبة من الأرض، تحملها وتضعها حيث تريد، وتستخدم للضغط والدعم والـL-sit. المتوازي أعلى، ويستخدم للديبس الكامل لأن جسمك يحتاج مسافة لينزل. القطعتان تخدمان تمارين مختلفة رغم تشابه الاسم.','Parallettes are short and low, portable, and used for push-ups, supports and L-sits. Parallel bars are taller and used for full dips, because your body needs room to lower. Similar names, different jobs.')),
      section('wrist',t('لماذا تريح الباراليتس الرسغ؟','Why are parallettes easier on the wrist?'),
        t('في الضغط على الأرض ينثني الرسغ للخلف، وعلى المقبض يبقى مستقيمًا. دراسة قاست قوى الرسغ في الحالتين ورجّحت أن الرسغ المستقيم أكثر أمانًا، لأن الأربطة قد تتحمل حملًا أكبر عند ثني الرسغ للخلف {{wrist-2018}}.','In a floor push-up the wrist bends back; on a handle it stays straight. A study measuring wrist forces in both positions concluded the straight wrist is likely safer, because ligaments may take more load when the wrist bends back {{wrist-2018}}.'),
        t('والارتفاع يتيح لك النزول أعمق من الأرض. المدى الأكبر يبني قوة أكثر {{acsm-2026}}، لكن زد العمق تدريجيًا بحسب راحة كتفك.','The height also lets you lower deeper than the floor allows. A larger range builds more strength {{acsm-2026}}, but add depth gradually as your shoulders allow.')),
      section('choose',t('حديد بمقبض خشب أم خشب كامل؟','Steel with a wooden grip, or all wood?'),
        t('لدى وثبة خياران: قاعدة حديد مع مقبض خشب زان، وباراليتس خشب زان كاملة. الحديد أثقل وأثبت للحركات الديناميكية، والخشب أخف للحمل والتنقل. القياسات والتفاصيل في صفحة كل منتج.','WATHBA offers two options: steel bases with a beech grip, and all-beech parallettes. Steel is heavier and steadier for dynamic moves; wood is lighter to carry. Dimensions and details are on each product page.'))
    ],
    ladderNote:t('مراحل الضغط تتبع سلسلة ACE {{ace-progressions}}. مراحل الدعم والـL-sit والمقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The push-up stages follow the ACE chain {{ace-progressions}}. The support and L-sit stages, the doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('الضغط على الباراليتس على الركبتين','Knee push-up on parallettes'),t('3 × 6–10','3 × 6–10'),t('رسغ مستقيم، وجسم مستقيم من الركبتين للرأس {{ace-push-up}}.','Straight wrist, straight line from knees to head {{ace-push-up}}.'),t('تكمل 3 × 10 والصدر بين المقبضين.','You complete 3 × 10 with your chest between the handles.')),
      level(t('الضغط الكامل على الباراليتس','Full push-up on parallettes'),t('3 × 5–12','3 × 5–12'),t('انزل أعمق من مستوى المقابض تدريجيًا {{acsm-2026}}.','Lower below handle level gradually {{acsm-2026}}.'),t('تكمل 3 × 12.','You complete 3 × 12.')),
      level(t('الدعم والقدمان على الأرض','Support with feet down'),t('3 × 10–20 ثانية','3 × 10–20 seconds'),t('ادفع جسمك للأعلى، والكتفان بعيدتان عن الأذنين.','Press tall with your shoulders away from your ears.'),t('تثبت 3 × 20 ثانية.','You hold 3 × 20 seconds.')),
      level(t('ثبات الركبتين المرفوعتين','Tuck hold'),t('3 × 5–15 ثانية','3 × 5–15 seconds'),t('ارفع قدميك والركبتان قرب الصدر، دون أن يميل الزوج.','Lift your feet with knees near the chest, without tipping the pair.'),t('تثبت 3 × 15 ثانية.','You hold 3 × 15 seconds.')),
      level(t('L-sit برجل واحدة ثم الرجلين','One-leg, then full L-sit'),t('3 × 5–10 ثوانٍ','3 × 5–10 seconds'),t('مدّ رجلًا واحدة ثم الأخرى، والرجلان موازيتان للأرض.','Extend one leg, then the other, legs parallel to the floor.'),t('تثبت L-sit كاملًا 3 × 10 ثوانٍ.','You hold a full L-sit for 3 × 10 seconds.'))
    ],
    program:[
      t('جلستان أسبوعيًا على الأقل، 2–3 مجموعات لكل تمرين {{acsm-2026}}. في دراسة الضغط المتدرج تدرّب المشاركون 3 أيام أسبوعيًا {{kotarsky-2018}}.','At least two sessions a week, 2–3 sets per exercise {{acsm-2026}}. In the progressive push-up study, participants trained 3 days a week {{kotarsky-2018}}.'),
      t('الراحة 60–90 ثانية بين المجموعات قاعدة من وثبة. ضع الباراليتس على أرض مستوية غير زلقة وتأكد أنها لا تهتز قبل كل جلسة.','Resting 60–90 seconds between sets is a WATHBA rule. Place the parallettes on level, non-slip ground and check they do not rock before every session.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('ضغط من مرحلتك 3 مجموعات، ثم دعم أو ثبات ركبتين 3 مجموعات.','Push-ups at your stage, 3 sets, then support or tuck holds, 3 sets.')),
      day(t('الثلاثاء','Tuesday'),t('راحة من الدفع، أو عقلة ورجلين.','No pushing, or pull-ups and legs.')),
      day(t('الأربعاء','Wednesday'),t('نفس جلسة الأحد مع زيادة تكرار أو ثانيتين.','Sunday\'s session, adding one rep or two seconds.')),
      day(t('الجمعة','Friday'),t('اختياري: جلسة ثالثة، كما في دراسة الضغط المتدرج {{kotarsky-2018}}.','Optional: a third session, as in the progressive push-up study {{kotarsky-2018}}.'))
    ],
    mistakes:[
      mistake(t('رفع الكتفين في الدعم.','Shrugging in support.'),t('ادفع المقابض للأسفل لتبتعد كتفاك عن أذنيك، وارجع للدعم والقدمان على الأرض إذا لم تستطع.','Push the handles down so your shoulders move away from your ears, and go back to feet-down support if you cannot.')),
      mistake(t('الضغط على حافة المقبض.','Loading the edge of the handle.'),t('أمسك منتصف المقبض بقبضة كاملة ليبقى الرسغ مستقيمًا {{wrist-2018}}.','Grip the middle of the handle fully so your wrist stays straight {{wrist-2018}}.')),
      mistake(t('محاولة L-sit كامل من البداية.','Going for a full L-sit too soon.'),t('ابدأ بثبات الركبتين المرفوعتين، ثم رجل واحدة.','Start with tuck holds, then one leg at a time.')),
      mistake(t('أرضية زلقة أو غير مستوية.','A slippery or uneven floor.'),t('افحص ثبات الزوج قبل وضع وزنك عليه.','Check the pair is steady before putting weight on it.'))
    ],
    faqs:[
      faq(t('هل الباراليتس للمحترفين فقط؟','Are parallettes only for advanced athletes?'),t('لا. المبتدئ يبدأ بالضغط على الركبتين والدعم والقدمان على الأرض، والمتقدم يتدرب على الـL-sit ومهارات التوازن. الحركة هي التي تتغير.','No. Beginners start with knee push-ups and feet-down supports; advanced athletes train L-sits and balance skills. The movement changes, not the equipment.')),
      faq(t('هل الضغط على الباراليتس أفضل من الأرض؟','Are parallettes push-ups better than floor push-ups?'),t('يبقى فيه الرسغ مستقيمًا، وهو وضع رجّحت دراسة أنه أكثر أمانًا للرسغ، ويتيح النزول أعمق. العضلات العاملة نفسها.','The wrist stays straight, a position a study concluded is likely safer, and you can lower deeper. The muscles worked are the same.')),
      faq(t('هل الباراليتس تعالج ألم الرسغ؟','Do parallettes fix wrist pain?'),t('لا. قد تكون أريح لأن الرسغ يبقى مستقيمًا، لكنها لا تعالج إصابة. إذا استمر الألم توقف واستشر مختصًا.','No. They may feel better because the wrist stays straight, but they do not treat an injury. If pain persists, stop and see a professional.')),
      faq(t('هل تصلح الباراليتس للديبس؟','Can I do dips on parallettes?'),t('الباراليتس المنخفضة لا تعطي مسافة كافية لديبس كامل. للديبس استخدم متوازيًا أعلى.','Low parallettes do not give enough clearance for full dips. Use taller parallel bars for dips.')),
      faq(t('حديد أم خشب؟','Steel or wood?'),t('الحديد بمقبض خشب أثقل وأثبت للحركات الديناميكية، والخشب الكامل أخف للحمل. اختر بحسب استعمالك ومساحتك.','Steel with a wooden grip is heavier and steadier for dynamic moves; all-wood is lighter to carry. Choose by how and where you train.'))
    ],
    related:['push-ups','dips','beginner','rings'],
    products:['steel-wood-parallettes','full-wooden-parallettes'],
    sources:['wrist-2018','kotarsky-2018','acsm-2026','ace-push-up','kikuchi-2017','calatayud-2014','ace-progressions']
  },
  {
    slug:'grip', reviewed:'2026-11-27',
    title:t('تقوية القبضة للكاليستنكس: التعلق والهاند جريبر والجريب تيب','Grip Strength for Calisthenics: Hangs, Hand Grippers and Grip Tape'),
    description:t('كيف تقوّي قبضتك للعقلة والمونكي بار: التعلق، الهاند جريبر، ومتى يفيد الجريب تيب، ولماذا ترتبط قوة القبضة بالصحة بحسب دراسة The Lancet.','How to build grip for pull-ups and monkey bars: hangs, hand grippers and when grip tape helps, plus why grip strength is linked to health in a Lancet study.'),
    tags:[t('قبضة وساعد','Grip and forearms'),t('كل المستويات','All levels'),t('تعلق','Hanging')],
    lead:t('القبضة القوية ليست قدرة واحدة: إغلاق اليد على الهاند جريبر شيء، والتمسك بالبار وأنت معلّق شيء آخر. تدرّب على النوع الذي يحدّ تمرينك.','Grip is not one ability: closing a hand gripper is one thing, holding a bar while you hang is another. Train the kind that limits your training.'),
    summary:[
      t('قوة القبضة مؤشر صحي: في دراسة على قرابة 140 ألف شخص في 17 دولة، ارتبط كل انخفاض 5 كغ في القبضة بزيادة 16% في خطر الوفاة لأي سبب {{leong-grip-2015}}.','Grip strength is a health marker: in a study of nearly 140,000 people in 17 countries, each 5 kg lower grip was linked to a 16% higher risk of death from any cause {{leong-grip-2015}}.'),
      t('للعقلة والمونكي بار، أهم تمرين هو التعلق نفسه: ابدأ بتعلق بذراعين ممدودتين ثم بذراعين مثنيتين {{ace-progressions}}.','For pull-ups and monkey bars, the key drill is hanging itself: start with a straight-arm hang, then a flexed-arm hang {{ace-progressions}}.'),
      t('الساعد يعمل أكثر في مرحلة الصعود من العقلة {{dickie-2017}}، لذلك تتعب القبضة أولًا عند كثير من المبتدئين.','The forearm works harder on the way up in a pull-up {{dickie-2017}}, which is why grip often tires first in beginners.'),
      t('تمرّن على القبضة يومين أو ثلاثة أسبوعيًا ضمن جلساتك، لا كل يوم {{acsm-2026}}.','Train grip 2 or 3 days a week inside your sessions, not daily {{acsm-2026}}.'),
      t('الجريب تيب يحسّن ملمس المقبض ولا يقوّي اليد. قاعدة وثبة: لا تغطي به تشققًا أو مقبضًا متحركًا.','Grip tape improves the handle surface but does not strengthen the hand. WATHBA rule: never use it to hide a crack or a loose handle.')
    ],
    images:{
      hero:{file:'dheeb-grip-hero',character:'dheeb',pose:'front view in a calm straight-arm hang from a plain horizontal black steel bar, close-up feel with the hands and forearms clearly drawn gripping the bar, feet off the floor.',alt:t('ذيب يتعلق ويداه ممسكتان بالبار بقوة','Dheeb hanging with a firm grip on the bar')},
      muscles:{file:'muscles-grip',character:'dheeb',pose:'standing front view squeezing a hand gripper in his right hand, forearm turned slightly so the inside of the forearm is visible.',red:{strong:'the forearm muscles (inside and top of the forearm) and the muscles of the hand',light:'the biceps'},alt:t('ذيب يضغط الهاند جريبر، وعضلات الساعد ملوّنة بالأحمر','Dheeb squeezing a hand gripper with the forearm muscles shaded red')},
      mistake:{file:'sakhr-grip-slipping',character:'sakhr',pose:'hanging from a plain horizontal black steel bar showing a clear mistake: holding the bar only with his fingertips, hands slipping, face tilted up in worry.',alt:t('صخر يمسك البار بأطراف أصابعه فقط وينزلق، وهذا خطأ شائع','Sakhr holding the bar only with his fingertips and slipping, a common mistake')},
      closing:{file:'sakhr-flexed-hang',character:'sakhr',pose:'front view holding a flexed-arm hang with his chin above a plain horizontal black steel bar, determined.',alt:t('صخر يثبت والذقن فوق البار','Sakhr holding a flexed-arm hang')}
    },
    muscles:{
      primary:[t('الساعد: العضلات التي تغلق الأصابع، والعضدية الكعبرية التي تعمل أكثر في الصعود {{dickie-2017}}','Forearm: the finger flexors, and the brachioradialis, which works harder on the way up {{dickie-2017}}'),t('عضلات اليد نفسها','The muscles of the hand itself')],
      secondary:[t('البايسبس عند ثني الذراعين في التعلق {{youdas-2010}}','The biceps when the arms bend in a hang {{youdas-2010}}'),t('الكتف والظهر للحفاظ على وضع التعلق {{ace-pull-up}}','Shoulders and back to hold the hanging position {{ace-pull-up}}')],
      note:t('وصف عضلات اليد والساعد التي تغلق الأصابع وصف تشريحي من وثبة؛ الدراسات المذكورة قاست العضدية الكعبرية والبايسبس فقط.','The hand and finger-flexor description is a WATHBA anatomical note; the cited studies measured only the brachioradialis and biceps.')
    },
    sections:[
      section('types',t('ثلاثة أنواع من القبضة','Three kinds of grip'),
        t('قوة الإغلاق: أن تغلق يدك على شيء يقاومك، مثل الهاند جريبر. تحمّل التعلق: أن تبقى ممسكًا بالبار مدة طويلة تحت وزن جسمك. وسطح الإمساك: إذا كان المقبض مبللًا أو أملس، ستنزلق يدك حتى لو كانت قوية.','Crushing strength: closing your hand against resistance, as with a hand gripper. Hanging endurance: holding a bar for a long time under your body weight. Surface: if the handle is wet or slick, your hand slips even when it is strong.'),
        t('قاعدة وثبة: لا تتوقع أن يرفع الجريبر مدة تعليقك تلقائيًا. إذا كان هدفك العقلة أو المونكي بار، اجعل التعلق هو تمرينك الأساسي والجريبر إضافة.','WATHBA rule: do not expect a gripper to raise your hang time automatically. If your goal is pull-ups or monkey bars, make hanging your main drill and the gripper an extra.')),
      section('health',t('لماذا تهمّ قوة القبضة؟','Why does grip strength matter?'),
        t('في دراسة PURE المنشورة في The Lancet، كانت قوة القبضة مؤشرًا على خطر الوفاة القلبية أقوى من ضغط الدم الانقباضي: كل 5 كغ أقل ارتبطت بزيادة 17% في الوفاة القلبية {{leong-grip-2015}}. هذا ارتباط، والباحثون أنفسهم يطلبون دراسات تثبت أن تقوية القبضة تقلل الخطر {{leong-grip-2015}}.','In the PURE study in The Lancet, grip strength predicted cardiovascular death better than systolic blood pressure: each 5 kg lower was linked to 17% higher cardiovascular death {{leong-grip-2015}}. It is an association, and the authors themselves call for research on whether building grip lowers the risk {{leong-grip-2015}}.')),
      section('tape',t('متى يفيد الجريب تيب؟','When does grip tape help?'),
        t('الجريب تيب يغيّر ملمس المقبض فيقلل الانزلاق، خاصة مع العرق. لا يقوّي اليد ولا يعالج ألمًا. ركّبه على مقبض نظيف وجاف وسليم، واستبدله عندما تتحرك أطرافه.','Grip tape changes the handle surface to reduce slipping, especially with sweat. It does not strengthen the hand or treat pain. Fit it to a clean, dry, sound handle and replace it when the edges lift.'))
    ],
    ladderNote:t('مراحل التعلق تتبع سلسلة ACE للعقلة {{ace-progressions}}. المقادير وعمود «انتقل عندما» ومراحل الجريبر قواعد عملية من وثبة.','The hanging stages follow the ACE pull-up chain {{ace-progressions}}. Doses, the “Move on when” column and the gripper stages are WATHBA working rules.'),
    levels:[
      level(t('تعلق والقدمان مدعومتان','Foot-supported hang'),t('3 × 15–30 ثانية','3 × 15–30 seconds'),t('قدماك على درجة تخفف جزءًا من الوزن، والقبضة كاملة حول البار.','Feet on a step to take some weight, a full grip around the bar.'),t('تكمل 3 × 30 ثانية.','You complete 3 × 30 seconds.')),
      level(t('التعلق بذراعين ممدودتين','Straight-arm hang'),t('3 × 10–30 ثانية','3 × 10–30 seconds'),t('الكتفان مشدودان للأسفل، دون تأرجح {{ace-pull-up}}.','Shoulders drawn down, no swinging {{ace-pull-up}}.'),t('تتعلق 45 ثانية ثلاث مرات.','You hang 45 seconds three times.')),
      level(t('التعلق بذراعين مثنيتين','Flexed-arm hang'),t('3 × 5–15 ثانية','3 × 5–15 seconds'),t('الذقن فوق البار، وتعمل البايسبس والساعد معًا {{ace-progressions}}.','Chin over the bar, biceps and forearms working together {{ace-progressions}}.'),t('تثبت 3 × 15 ثانية.','You hold 3 × 15 seconds.')),
      level(t('الهاند جريبر','Hand gripper'),t('2–3 × 8–12 لكل يد','2–3 × 8–12 per hand'),t('أغلق ببطء وافتح ببطء، والمعصم مستقيم، دون مساعدة اليد الأخرى.','Close slowly and open slowly with a straight wrist, without help from the other hand.'),t('تكمل 3 × 12 بسهولة، فانتقل لمقاومة أعلى.','You complete 3 × 12 easily; move to a stiffer gripper.'))
    ],
    program:[
      t('أضف القبضة في نهاية جلستين أو ثلاث أسبوعيًا، بعد العقلة لا قبلها، حتى لا تتعب يداك قبل التمرين الأساسي. 2–3 مجموعات تكفي {{acsm-2026}}.','Add grip work at the end of 2 or 3 sessions a week, after pull-ups rather than before, so your hands are fresh for the main work. 2–3 sets are enough {{acsm-2026}}.'),
      t('الراحة 60–90 ثانية قاعدة من وثبة. ألم الساعد المستمر ليس علامة نجاح؛ خفف الحجم إذا بقي في اليوم التالي.','Resting 60–90 seconds is a WATHBA rule. Lasting forearm pain is not a sign of success; cut the volume if it is still there the next day.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('بعد العقلة: تعلق 3 مجموعات من مرحلتك.','After pull-ups: 3 sets of hangs at your stage.')),
      day(t('الثلاثاء','Tuesday'),t('هاند جريبر 2–3 مجموعات لكل يد.','Hand gripper, 2–3 sets per hand.')),
      day(t('الأربعاء','Wednesday'),t('بعد العقلة: تعلق بذراعين مثنيتين 3 مجموعات.','After pull-ups: 3 sets of flexed-arm hangs.')),
      day(t('باقي الأيام','Other days'),t('راحة لليدين.','Rest for your hands.'))
    ],
    mistakes:[
      mistake(t('الإمساك بأطراف الأصابع.','Holding with the fingertips.'),t('لفّ أصابعك وإبهامك حول البار بالكامل.','Wrap your fingers and thumb fully around the bar.')),
      mistake(t('تدريب القبضة قبل العقلة.','Training grip before pull-ups.'),t('ضعه بعدها حتى لا تحدّ يداك المتعبتان تمرينك الأساسي.','Do it after, so tired hands do not limit your main work.')),
      mistake(t('الاعتماد على الجريبر وحده.','Relying only on the gripper.'),t('إذا كان هدفك التعلق، تدرّب على التعلق نفسه {{ace-progressions}}.','If hanging is the goal, train hanging itself {{ace-progressions}}.')),
      mistake(t('تغطية مقبض تالف بالجريب تيب.','Taping over a damaged handle.'),t('افحص المقبض أولًا؛ الشريط لا يصلح عيبًا في المعدّة.','Check the handle first; tape does not fix a fault in the equipment.'))
    ],
    faqs:[
      faq(t('هل الهاند جريبر يكفي للعقلة؟','Is a hand gripper enough for pull-ups?'),t('لا. الجريبر يقوّي إغلاق اليد، أما العقلة فتحتاج تحمّل التعلق تحت وزن جسمك. اجعل التعلق تمرينك الأساسي والجريبر إضافة.','No. A gripper builds hand closing, while pull-ups need hanging endurance under your body weight. Make hanging your main drill and the gripper an extra.')),
      faq(t('هل أتدرب على القبضة كل يوم؟','Should I train grip every day?'),t('لا حاجة. يومان أو ثلاثة أسبوعيًا ضمن جلساتك تكفي، مع راحة لليدين بينها.','No need. Two or three days a week inside your sessions is enough, with rest days for your hands.')),
      faq(t('لماذا يقولون إن قوة القبضة مهمة للصحة؟','Why is grip strength said to matter for health?'),t('لأن دراسة كبيرة في The Lancet وجدت أن ضعف القبضة يرتبط بزيادة خطر الوفاة وأمراض القلب، وكانت مؤشرًا أقوى من ضغط الدم الانقباضي. هذا ارتباط وليس إثباتًا أن تقوية القبضة وحدها تحمي.','Because a large Lancet study found weaker grip linked to higher risk of death and heart disease, a stronger predictor than systolic blood pressure. It is an association, not proof that grip training alone protects you.')),
      faq(t('هل ألم الساعد يعني أن التمرين ناجح؟','Does forearm pain mean the training is working?'),t('لا. التعب الخفيف طبيعي، أما الألم الذي يبقى لليوم التالي فعلامة على حجم زائد. خففه.','No. Mild fatigue is normal; pain that lasts into the next day means too much volume. Cut back.')),
      faq(t('هل الجريب تيب يقوّي القبضة؟','Does grip tape make my grip stronger?'),t('لا. يحسّن ملمس المقبض ويقلل الانزلاق فقط.','No. It only improves the handle surface and reduces slipping.'))
    ],
    related:['first-pull-up','monkey-bars','rings','beginner'],
    products:['hand-gripper','grip-tape','wall-pull-up-bar'],
    sources:['leong-grip-2015','ace-progressions','dickie-2017','acsm-2026','youdas-2010','ace-pull-up']
  },
  {
    slug:'monkey-bars', reviewed:'2026-11-27',
    title:t('كيف تتدرّب على المونكي بار؟ القبضة والانتقال خطوة بخطوة','How to Train on Monkey Bars: Grip and Traversing Step by Step'),
    description:t('تعلّم الانتقال على المونكي بار: التعلق، نقل اليد، تحمل القبضة، سلّم تدرّج وجدول أسبوعي، والعضلات العاملة بحسب دراسات العقلة.','Learn to traverse monkey bars: hangs, hand transfers, grip endurance, a progression ladder and weekly plan, and the muscles involved per pull-up studies.'),
    tags:[t('سحب وقبضة','Pulling and grip'),t('مبتدئ إلى متوسط','Beginner to intermediate'),t('مونكي بار','Monkey bars')],
    lead:t('المونكي بار مجموعة قضبان تنتقل بينها بيديك. التحدي ليس القبضة وحدها: عليك أن تنقل وزنك من يد ليد بتوقيت هادئ، وأن تعرف كيف تنزل قبل أن تتعب.','Monkey bars are a row of rungs you cross hand over hand. The challenge is not grip alone: you shift your weight from hand to hand with calm timing, and you plan how to get down before you tire.'),
    summary:[
      t('المونكي بار يجمع التعلق والسحب: العضلة الظهرية العريضة والبايسبس هما الأعلى عملًا في السحب {{youdas-2010}}، والساعد يحمل وزنك طوال المسار.','Monkey bars combine hanging and pulling: the lats and biceps do the most work when pulling {{youdas-2010}}, and the forearms carry your weight the whole way.'),
      t('ابدأ بالتعلق قبل الانتقال: تعلق بذراعين ممدودتين ثم مثنيتين {{ace-progressions}}، والكتفان للأسفل دون تأرجح {{ace-pull-up}}.','Hang before you traverse: straight-arm then flexed-arm hangs {{ace-progressions}}, shoulders down and no swinging {{ace-pull-up}}.'),
      t('قاعدة وثبة: لا تبدأ الانتقال قبل أن تتعلق 30 ثانية ثلاث مرات، وحدد دائمًا نقطة نزول في منتصف المسار.','WATHBA rule: do not start traversing until you can hang 30 seconds three times, and always plan a mid-route exit.'),
      t('القبضة القوية مفيدة صحيًا أيضًا: ضعفها ارتبط بزيادة خطر الوفاة في دراسة The Lancet {{leong-grip-2015}}.','A strong grip matters for health too: weaker grip was linked to higher mortality in a Lancet study {{leong-grip-2015}}.'),
      t('تمرّن جلستين أسبوعيًا على الأقل {{acsm-2026}}، وراعِ تعب الساعدين إذا كانت عندك جلسة عقلة في نفس الأسبوع.','Train at least twice a week {{acsm-2026}}, minding forearm fatigue if you also do pull-up sessions that week.')
    ],
    images:{
      hero:{file:'dheeb-monkey-bars-hero',character:'dheeb',pose:'side view mid-traverse on horizontal monkey bars (a plain black steel ladder overhead), one hand on a rung and the other reaching for the next, body calm, feet off the ground.',alt:t('ذيب ينتقل بين قضبان المونكي بار','Dheeb crossing the monkey bars')},
      muscles:{file:'muscles-monkey-bars',character:'sakhr',pose:'three-quarter back view hanging from one rung of plain black steel monkey bars with his right hand while reaching forward with his left hand.',red:{strong:'the forearm of the hanging arm, and the large back muscles (latissimus dorsi)',light:'the biceps and the back of the shoulders'},alt:t('صخر معلق بيد واحدة على المونكي بار، والعضلات العاملة ملوّنة بالأحمر','Sakhr hanging by one hand on monkey bars with the working muscles shaded red')},
      mistake:{file:'sakhr-monkey-bars-swinging',character:'sakhr',pose:'on plain black steel monkey bars showing a clear mistake: swinging wildly with legs kicking, lunging for a far rung with one hand, the other hand slipping.',alt:t('صخر يتأرجح بقوة ويقفز لقضيب بعيد، وهذا خطأ شائع','Sakhr swinging wildly and lunging for a far rung, a common mistake')},
      closing:{file:'sakhr-monkey-bars-done',character:'sakhr',pose:'standing below plain black steel monkey bars after finishing the route, one hand raised in a victory sign.',alt:t('صخر بعد أن أنهى مسار المونكي بار','Sakhr after finishing the monkey bars')}
    },
    muscles:{
      primary:[t('الساعد والقبضة: يحملان وزنك في كل لحظة على المسار، والعضدية الكعبرية تعمل أكثر عند السحب {{dickie-2017}}','Forearms and grip: they carry your weight at every moment, with the brachioradialis working harder when you pull {{dickie-2017}}'),t('الظهر: الظهرية العريضة، الأعلى نشاطًا في حركات السحب {{youdas-2010}}','Back: the lats, the most active muscle in pulling movements {{youdas-2010}}')],
      secondary:[t('البايسبس وخلف الكتف {{youdas-2010}}','Biceps and the back of the shoulder {{youdas-2010}}'),t('الجذع: يمنع التأرجح الزائد بين النقلات','Trunk: stops excess swinging between reaches')],
      note:t('الدراسات المذكورة قاست العقلة لا المونكي بار؛ نستخدمها لأن الانتقال يعتمد على التعلق والسحب نفسيهما.','The cited studies measured pull-ups, not monkey bars; we use them because traversing relies on the same hanging and pulling.')
    },
    sections:[
      section('plan',t('خطط للبداية والنهاية قبل أن تتعلق','Plan your start and exit before you hang'),
        t('افحص أن القضبان جافة، وأن المسافة بينها تناسبك، وأن الأرض تحتها آمنة للنزول. حدد كيف تصل لأول قضيب وكيف تنزل من منتصف المسار إذا تعبت. قاعدة وثبة: لا تجعل الإفلات عند العجز خطة نهاية.','Check the rungs are dry, the spacing suits you and the ground below is safe to drop onto. Decide how you reach the first rung and how you get down mid-route if you tire. WATHBA rule: letting go at failure is not an exit plan.')),
      section('transfer',t('تعلّم نقل اليد قبل رفع القدمين','Learn the hand transfer before lifting your feet'),
        t('على جهاز منخفض، أبقِ قدميك على الأرض وامسك قضيبًا بيديك. انقل وزنك قليلًا إلى يد، ثم حرر الأخرى وضعها على القضيب التالي دون نفض الجسم. بعد أن يصبح ذلك سهلًا، خفف دعم القدمين تدريجيًا.','On a low setup, keep your feet on the ground and hold a rung with both hands. Shift some weight to one hand, then free the other and place it on the next rung without jerking your body. Once that is easy, reduce foot support gradually.'),
        t('في التعلق، أبقِ كتفيك مشدودتين للأسفل ولا تتأرجح {{ace-pull-up}}. التأرجح الهادئ الصغير يساعد التوقيت، أما الركل والقفز للقضيب البعيد فيزيد خطر الانزلاق.','While hanging, keep your shoulders drawn down and avoid swinging {{ace-pull-up}}. A small, calm sway helps timing; kicking and lunging for far rungs raises the risk of slipping.')),
      section('grip',t('قوة القبضة أم تحمّلها؟','Grip strength or grip endurance?'),
        t('المونكي بار يحتاج تحمّل القبضة أكثر من قوتها القصوى، لأن يدك تبقى ممسكة طوال المسار. تقدّم بزيادة عدد النقلات أو وقت التعلق، لا بالاثنين معًا. التفاصيل في دليل تقوية القبضة.','Monkey bars need grip endurance more than maximal grip, because your hands hold on the whole route. Progress by adding reaches or hang time, not both at once. Details are in the grip guide.'))
    ],
    ladderNote:t('مراحل التعلق من سلسلة ACE {{ace-progressions}}. مراحل الانتقال والمقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The hanging stages come from the ACE chain {{ace-progressions}}. The traversing stages, doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('التعلق بذراعين ممدودتين','Straight-arm hang'),t('3 × 15–30 ثانية','3 × 15–30 seconds'),t('الكتفان للأسفل، دون تأرجح {{ace-pull-up}}.','Shoulders down, no swinging {{ace-pull-up}}.'),t('تتعلق 30 ثانية ثلاث مرات.','You hang 30 seconds three times.')),
      level(t('نقلات والقدمان مدعومتان','Reaches with feet supported'),t('3 × 4 نقلات','3 × 4 reaches'),t('على جهاز منخفض، انقل يدًا بعد يد دون نفض.','On a low setup, move hand over hand without jerking.'),t('تكمل 3 جولات بهدوء.','You complete 3 rounds smoothly.')),
      level(t('انتقال قصير','Short traverse'),t('3 × 2–4 نقلات','3 × 2–4 reaches'),t('القدمان في الهواء، مع نقطة نزول واضحة.','Feet off the ground, with a clear exit point.'),t('تكمل 3 × 4 نقلات دون تأرجح كبير.','You complete 3 × 4 reaches without big swings.')),
      level(t('مسار كامل','Full route'),t('3 × 4–8 نقلات','3 × 4–8 reaches'),t('توقيت هادئ وقبضة كاملة في كل نقلة.','Calm timing and a full grip on every reach.'),t('تعبر المسار 3 مرات بثبات، ثم جرّب تخطي قضيب.','You cross the route 3 times steadily; then try skipping a rung.'))
    ],
    program:[
      t('جلستان أسبوعيًا على الأقل {{acsm-2026}}، مع يوم راحة بينهما. إذا كانت عندك جلسات عقلة، اجعل المونكي بار في يوم مختلف أو بعد العقلة بحجم أقل، لأن الساعدين يتعبان من الاثنين.','At least two sessions a week {{acsm-2026}} with a rest day between. If you also do pull-up sessions, put monkey bars on a different day or after pull-ups at lower volume, since both tire the forearms.'),
      t('الراحة 90 ثانية بين الجولات قاعدة من وثبة.','Resting 90 seconds between rounds is a WATHBA rule.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('تعلق 3 مجموعات، ثم 3 جولات من مرحلتك في الانتقال.','3 sets of hangs, then 3 rounds of traversing at your stage.')),
      day(t('الثلاثاء','Tuesday'),t('راحة لليدين، أو رجلين ودفع.','Rest for the hands, or legs and pushing.')),
      day(t('الأربعاء','Wednesday'),t('نفس جلسة الأحد، مع نقلة إضافية واحدة إذا كانت سهلة.','Sunday\'s session, adding one reach if it feels easy.')),
      day(t('الجمعة','Friday'),t('اختياري: تعلق بذراعين مثنيتين 3 مجموعات.','Optional: 3 sets of flexed-arm hangs.'))
    ],
    mistakes:[
      mistake(t('الركل والقفز للقضيب البعيد.','Kicking and lunging for far rungs.'),t('انقل وزنك بهدوء ولا تتأرجح {{ace-pull-up}}.','Shift your weight calmly and avoid swinging {{ace-pull-up}}.')),
      mistake(t('البدء بمسار كامل.','Starting with a full route.'),t('ابدأ بنقلات والقدمان مدعومتان، ثم مسار قصير.','Start with supported reaches, then a short route.')),
      mistake(t('لا خطة للنزول.','No exit plan.'),t('حدد قبل أن تبدأ كيف تنزل من منتصف المسار.','Decide before you start how to get down mid-route.')),
      mistake(t('المونكي بار مباشرة بعد جلسة عقلة ثقيلة.','Monkey bars right after a heavy pull-up session.'),t('الساعد متعب، فالقبضة تنزلق أسرع. خفف الحجم أو غيّر اليوم.','Your forearms are tired and your grip slips sooner. Cut the volume or change the day.'))
    ],
    faqs:[
      faq(t('هل المونكي بار تمرين ظهر أم قبضة؟','Is monkey bars a back or a grip exercise?'),t('الاثنان. الساعد والقبضة يحملان وزنك طوال المسار، والظهر والبايسبس يعملان عند السحب والوصول للقضيب التالي.','Both. Forearms and grip carry your weight the whole way, while the back and biceps work as you pull and reach for the next rung.')),
      faq(t('هل أنتقل يدًا بعد يد أم باليدين على نفس القضيب؟','Hand over hand, or both hands on each rung?'),t('ابدأ باليدين على نفس القضيب في كل نقلة لأنه أسهل، ثم انتقل ليد بعد يد عندما تصبح النقلات هادئة.','Start with both hands on each rung because it is easier, then go hand over hand once your reaches are calm.')),
      faq(t('هل المونكي بار بديل عن بار العقلة؟','Do monkey bars replace a pull-up bar?'),t('لا تمامًا. المونكي بار يضيف الانتقال والتحمل، والعقلة تبني قوة السحب في مكان واحد. يكمل كل منهما الآخر.','Not fully. Monkey bars add travel and endurance; a pull-up bar builds pulling strength in one place. They complement each other.')),
      faq(t('هل أستخدم قفازات؟','Should I wear gloves?'),t('ليس ضروريًا. الأهم أن تكون القضبان واليدان جافة. إذا كانت يداك تتعرقان كثيرًا، فالجريب تيب على القضبان خيار.','Not necessary. Dry rungs and hands matter most. If your hands sweat a lot, grip tape on the rungs is an option.'))
    ],
    related:['grip','first-pull-up','rings','beginner'],
    products:['monkey-bars','hand-gripper','multi-rig'],
    sources:['youdas-2010','ace-progressions','ace-pull-up','leong-grip-2015','acsm-2026','dickie-2017']
  },
  {
    slug:'jump-rope', reviewed:'2026-11-27',
    title:t('نط الحبل للمبتدئين: التقنية وبرنامج البداية وكم يحرق','Jump Rope for Beginners: Technique, a Starter Plan and Calories'),
    description:t('تعلّم نط الحبل من الصفر: التقنية، برنامج ACE للمبتدئين، شدة النشاط من موسوعة الأنشطة البدنية، كم سعرة يحرق تقريبًا، وكيف تدمجه مع الكاليستنكس.','Learn to jump rope from zero: technique, the ACE beginner workout, intensity from the Compendium of Physical Activities, rough calorie burn and how to combine it with calisthenics.'),
    tags:[t('لياقة وقلب','Conditioning'),t('مبتدئ','Beginner'),t('حبل','Jump rope')],
    lead:t('نط الحبل نشاط هوائي شديد في مساحة صغيرة. تبدأ بقفزة منخفضة وهبوط هادئ وجولات قصيرة، ثم تطيل الجولات تدريجيًا.','Jumping rope is vigorous cardio in a small space. You start with a low jump, a soft landing and short rounds, then lengthen the rounds over time.'),
    summary:[
      t('نط الحبل نشاط شديد: 8.3 MET بالسرعة البطيئة، و11.8 بالمتوسطة، و12.3 بالسريعة، أي أكثر من 8 أضعاف طاقة الراحة {{compendium-2024}}.','Jumping rope is vigorous: 8.3 METs at a slow pace, 11.8 moderate and 12.3 fast, over 8 times resting energy use {{compendium-2024}}.'),
      t('منظمة الصحة العالمية توصي بـ75–150 دقيقة أسبوعيًا من النشاط الشديد، أو 150–300 من المتوسط {{who-2020}}. نط الحبل من النشاط الشديد.','WHO recommends 75–150 minutes a week of vigorous or 150–300 of moderate activity {{who-2020}}. Jumping rope counts as vigorous.'),
      t('برنامج ACE للمبتدئ: 18 جولة، 15 ثانية عمل و15 ثانية راحة، وحركات سهلة مثل الهرولة في المكان {{ace-rope}}.','The ACE beginner plan: 18 rounds of 15 seconds work and 15 seconds rest, with easy moves such as jogging in place {{ace-rope}}.'),
      t('إذا لم تعتد التمارين عالية التأثير، ابدأ بحركات المبتدئ، وأحمِ جسمك وهدّئه، وراجع الطبيب أولًا {{ace-rope}}.','If you are new to high-impact exercise, start with the beginner moves, warm up and cool down, and check with a doctor first {{ace-rope}}.'),
      t('قاعدة وثبة: زد شيئًا واحدًا كل أسبوع، المدة أو عدد الجولات أو السرعة، لا الثلاثة معًا.','WATHBA rule: increase one thing a week, duration, rounds or speed, never all three.')
    ],
    images:{
      hero:{file:'dheeb-jump-rope-hero',character:'dheeb',pose:'front view jumping rope, feet just off the floor, rope passing under his feet in a smooth arc, elbows close to his sides, relaxed.',alt:t('ذيب ينط الحبل بهدوء','Dheeb jumping rope calmly')},
      muscles:{file:'muscles-jump-rope',character:'dheeb',pose:'side view landing softly from a small rope jump, on the balls of the feet with knees slightly bent, rope behind him.',red:{strong:'the calves and the front of the thighs',light:'the forearms and shoulders, and the abdominal muscles'},alt:t('ذيب يهبط من قفزة الحبل، والعضلات العاملة ملوّنة بالأحمر','Dheeb landing from a rope jump with the working muscles shaded red')},
      mistake:{file:'sakhr-jump-rope-high',character:'sakhr',pose:'front view jumping rope showing a clear mistake: jumping far too high with knees pulled up, arms swinging wide over his head, the rope tangled at his feet.',alt:t('صخر يقفز عاليًا جدًا ويحرك ذراعيه بعيدًا فيعلق الحبل، وهذا خطأ شائع','Sakhr jumping too high with wide arms and tangling the rope, a common mistake')},
      closing:{file:'sakhr-jump-rope-rest',character:'sakhr',pose:'standing relaxed after a round, the jump rope hanging from one hand, catching his breath, smiling posture.',alt:t('صخر يرتاح بين جولات الحبل','Sakhr resting between jump rope rounds')}
    },
    muscles:{
      primary:[t('السمانة: تحمل القفز والهبوط على مقدمة القدم','Calves: they absorb every jump and landing on the balls of the feet'),t('القلب والرئتان: الحبل نشاط هوائي شديد {{compendium-2024}}','Heart and lungs: rope jumping is vigorous aerobic work {{compendium-2024}}')],
      secondary:[t('مقدمة الفخذ والأرداف في الهبوط المرن','Thighs and glutes in the soft landing'),t('الساعد والكتفان في تدوير الحبل، والبطن لثبات الجذع','Forearms and shoulders to turn the rope, and the abdominals for a steady trunk')],
      note:t('وصف العضلات هنا تشريحي من وثبة، لأن المصادر المذكورة تقيس شدة النشاط لا العضلات.','The muscle description here is a WATHBA anatomical note, since the cited sources measure intensity, not muscles.')
    },
    sections:[
      section('technique',t('التقنية: يد هادئة وقفزة صغيرة','Technique: quiet hands, small jump'),
        t('قف مستقيمًا، والمرفقان قرب جسمك، والكتفان مرتخيان. حرّك الحبل من الرسغين لا من الكتفين. اقفز بالقدر الذي يكفي لمرور الحبل فقط، واهبط على مقدمة قدميك بركبتين مرنتين.','Stand tall with elbows close to your body and relaxed shoulders. Turn the rope from the wrists, not the shoulders. Jump only high enough for the rope to pass, and land on the balls of your feet with soft knees.'),
        t('إذا كان الحبل يعلق، تدرّب على الإيقاع بدون حبل أولًا، أو أمسك المقبضين بيد واحدة ودوّره بجانبك وأنت تقفز.','If the rope keeps catching, practise the rhythm without a rope first, or hold both handles in one hand and turn it at your side as you jump.')),
      section('calories',t('كم سعرة يحرق نط الحبل؟','How many calories does jumping rope burn?'),
        t('الشدة تقاس بوحدة MET، أي كم مرة تزيد طاقتك عن الراحة. نط الحبل البطيء 8.3 MET، والمتوسط 11.8، والسريع 12.3 {{compendium-2024}}.','Intensity is measured in METs, how many times your energy use exceeds rest. Slow rope jumping is 8.3 METs, moderate 11.8 and fast 12.3 {{compendium-2024}}.'),
        t('تقدير تقريبي بالمعادلة الشائعة، السعرات تقريبًا تساوي MET × الوزن بالكيلو × الساعات: شخص وزنه 70 كغ ينط ببطء 10 دقائق فعلية يحرق قرابة 95 سعرة. هذا تقدير من وثبة، ويختلف من شخص لآخر، والراحة بين الجولات لا تُحسب.','A rough estimate using the common formula, calories ≈ MET × body weight in kg × hours: a 70 kg person jumping slowly for 10 actual minutes burns roughly 95 calories. This is a WATHBA estimate; it varies by person, and rest between rounds does not count.')),
      section('combine',t('كيف تدمجه مع الكاليستنكس؟','How to combine it with calisthenics'),
        t('إذا كان هدفك قوة العقلة أو الضغط، ضع الحبل بعد تمارين القوة أو في يوم منفصل، حتى لا تتعب قبل التمرين الأساسي. جولات خفيفة لدقيقتين تصلح إحماءً. الحبل يساعدك على إكمال دقائق النشاط الهوائي الأسبوعية {{who-2020}}.','If pull-up or push-up strength is your goal, put the rope after strength work or on a separate day, so you are not tired before the main work. Two easy minutes make a good warm-up. The rope helps you reach your weekly aerobic minutes {{who-2020}}.'),
        t('اختر أرضية مستوية غير زلقة وحذاءً مناسبًا، وتأكد أن السقف وما حولك خالٍ من العوائق. إذا سبب القفز ألمًا في مفصل، أوقفه.','Choose a level, non-slip floor and suitable shoes, and make sure the ceiling and surroundings are clear. If jumping hurts a joint, stop.'))
    ],
    ladderNote:t('المستويات وأوقات العمل والراحة من برنامج ACE {{ace-rope}}. مرحلة القفز بدون حبل وعمود «انتقل عندما» قواعد عملية من وثبة.','Levels and work-rest times come from the ACE workout {{ace-rope}}. The no-rope stage and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('إيقاع بدون حبل','Rhythm without a rope'),t('6 × 15 ثانية','6 × 15 seconds'),t('قفزات صغيرة على مقدمة القدم مع تحريك الرسغين كأنك تدوّر حبلًا.','Small hops on the balls of your feet while turning your wrists as if holding a rope.'),t('تكمل الجولات بإيقاع ثابت دون تعب في السمانة.','You complete the rounds at a steady rhythm without calf fatigue.')),
      level(t('مبتدئ','Beginner'),t('18 × 15 ثانية عمل و15 راحة {{ace-rope}}','18 × 15 seconds on, 15 off {{ace-rope}}'),t('هرولة في المكان للأمام وللخلف، وقفز متبادل {{ace-rope}}.','Jogging forward and backward and hop-scotch jumps {{ace-rope}}.'),t('تكمل 18 جولة دون أن يعلق الحبل كثيرًا، في جلستين متتاليتين.','You complete 18 rounds with few misses in two sessions in a row.')),
      level(t('متوسط','Intermediate'),t('18 × 30 ثانية عمل و30 راحة {{ace-rope}}','18 × 30 seconds on, 30 off {{ace-rope}}'),t('قفز جانبي، وقفزتان مع كل دورة، وقفز على رجل واحدة {{ace-rope}}.','Side hops, double jumps and single-leg hops {{ace-rope}}.'),t('تكمل 18 جولة بإيقاع ثابت.','You complete 18 rounds at a steady rhythm.')),
      level(t('متقدم','Advanced'),t('18 × 60 ثانية عمل و60 راحة {{ace-rope}}','18 × 60 seconds on, 60 off {{ace-rope}}'),t('رفع الركبتين، والتقاطع، والقفزة المزدوجة {{ace-rope}}.','High knees, criss-cross and double unders {{ace-rope}}.'),t('حافظ على جولاتك وغيّر الحركات للتنويع.','Hold your rounds and vary the moves.'))
    ],
    program:[
      t('2–3 جلسات أسبوعيًا تكفي للبداية. جلسة ACE تستغرق 15–25 دقيقة مع الراحة، مع إحماء وتهدئة {{ace-rope}}.','2–3 sessions a week are enough to start. The ACE session takes 15–25 minutes including rest, with a warm-up and cool-down {{ace-rope}}.'),
      t('راقب السمانة في اليوم التالي. إذا بقيت متعبة أو مؤلمة، خفف الجولات قبل أن تزيد. قاعدة وثبة: لا تنط الحبل يوميًا في الأسابيع الأولى.','Watch your calves the next day. If they are still tired or sore, cut rounds before adding more. WATHBA rule: do not jump daily in the first weeks.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('تمارين القوة، ثم 10 جولات حبل من مستواك.','Strength work, then 10 rope rounds at your level.')),
      day(t('الإثنين','Monday'),t('جلسة ACE كاملة من مستواك {{ace-rope}}.','A full ACE session at your level {{ace-rope}}.')),
      day(t('الأربعاء','Wednesday'),t('تمارين القوة، ثم دقيقتان حبل خفيف كإحماء قبلها.','Strength work, with two easy rope minutes as a warm-up before it.')),
      day(t('الخميس أو الجمعة','Thursday or Friday'),t('جلسة ACE ثانية، أو مشي سريع إذا كانت السمانة متعبة.','A second ACE session, or a brisk walk if your calves are tired.'))
    ],
    mistakes:[
      mistake(t('القفز عاليًا جدًا.','Jumping far too high.'),t('اقفز بالقدر الذي يمر فيه الحبل فقط.','Jump only high enough for the rope to pass.')),
      mistake(t('تدوير الحبل من الكتفين.','Turning the rope from the shoulders.'),t('المرفقان قرب الجسم، والحركة من الرسغين.','Elbows close, the movement from the wrists.')),
      mistake(t('الهبوط على الكعبين بقوة.','Landing hard on the heels.'),t('اهبط على مقدمة القدم بركبتين مرنتين.','Land on the balls of your feet with soft knees.')),
      mistake(t('زيادة المدة والسرعة والجولات معًا.','Raising duration, speed and rounds together.'),t('غيّر شيئًا واحدًا في الأسبوع.','Change one thing a week.'))
    ],
    faqs:[
      faq(t('كم سعرة يحرق نط الحبل؟','How many calories does jumping rope burn?'),t('نط الحبل البطيء 8.3 MET بحسب موسوعة الأنشطة البدنية. تقديرًا، شخص وزنه 70 كغ يحرق قرابة 95 سعرة في 10 دقائق قفز فعلية ببطء، وأكثر بالسرعة الأعلى. الرقم يختلف من شخص لآخر.','Slow rope jumping is 8.3 METs per the Compendium of Physical Activities. As an estimate, a 70 kg person burns roughly 95 calories in 10 actual minutes of slow jumping, more at higher speed. It varies by person.')),
      faq(t('كم دقيقة أنط الحبل يوميًا؟','How many minutes a day should I jump rope?'),t('لا حاجة ليوم كامل كل يوم. ابدأ بجلسة ACE للمبتدئ، 18 جولة من 15 ثانية، 2–3 مرات أسبوعيًا، وزد تدريجيًا.','No need for daily sessions. Start with the ACE beginner session, 18 rounds of 15 seconds, 2–3 times a week, and build up gradually.')),
      faq(t('هل نط الحبل يكفي كتمرين كامل؟','Is jumping rope a complete workout?'),t('هو نشاط هوائي ممتاز، لكن منظمة الصحة العالمية توصي أيضًا بتمارين تقوية العضلات. اجمعه مع تمارين الكاليستنكس.','It is excellent aerobic work, but WHO also recommends muscle-strengthening exercise. Combine it with calisthenics.')),
      faq(t('لماذا يعلق الحبل في قدمي؟','Why does the rope keep catching my feet?'),t('غالبًا بسبب التوقيت أو تدوير الحبل من الكتفين. تدرّب على الإيقاع بدون حبل، وأبقِ المرفقين قرب جسمك، وتأكد أن طول الحبل مناسب.','Usually timing, or turning the rope from the shoulders. Practise the rhythm without a rope, keep your elbows close, and check the rope length suits you.')),
      faq(t('هل نط الحبل مناسب للجميع؟','Is jumping rope suitable for everyone?'),t('هو نشاط عالي التأثير. من لم يعتد ذلك يبدأ بحركات المبتدئ ويراجع الطبيب أولًا، ويوقفه إذا سبب ألمًا في المفاصل.','It is high-impact. If you are new to that, start with the beginner moves, check with a doctor first, and stop if your joints hurt.'))
    ],
    related:['beginner','grip','push-ups','dips'],
    products:['jump-rope'],
    sources:['compendium-2024','who-2020','ace-rope']
  },
  {
    slug:'swiss-ladder', reviewed:'2026-11-27',
    title:t('السلم السويدي: الاستخدام والتمارين المناسبة في البيت','Swedish Wall Bars: Uses and Home Exercises'),
    description:t('ما هو السلم السويدي «السويسري» وما فائدته: قرفصاء بمساعدة، إطالات، تعلق ورفع ركبتين، وما الذي لا يفعله مثل زيادة الطول، مع تمارين مستندة إلى NHS وACE.','What Swedish wall bars are for: assisted squats, stretches, hangs and knee raises, and what they do not do, such as making you taller, with exercises based on NHS and ACE.'),
    tags:[t('مرونة وتحكم','Mobility and control'),t('مبتدئ','Beginner'),t('سلم سويدي','Wall bars')],
    lead:t('السلم السويدي، ويُسمى أيضًا السلم السويسري أو Wall Bars، قضبان أفقية متدرجة على هيكل مثبت بالحائط. ميزته أنه يعطيك نقطة إمساك على أي ارتفاع: للمساعدة في القرفصاء، وللإطالة، وللتعلق إذا كان مصممًا لذلك.','Swedish wall bars are horizontal rungs on a frame fixed to the wall. Their strength is a handhold at any height: for assisted squats, for stretching, and for hanging if the frame is designed for it.'),
    summary:[
      t('أفضل استخدام للمبتدئ: نقطة إمساك تساعدك في القرفصاء والتوازن، كما تستعمل NHS ظهر الكرسي في القرفصاء الصغيرة {{nhs-strength}}.','Best beginner use: a handhold for squats and balance, the way the NHS uses a chair back for mini-squats {{nhs-strength}}.'),
      t('يصلح للإطالات التي تحتاج سندًا، مثل إطالة السمانة واليدان على السند {{nhs-flexibility}}.','It suits stretches that need support, such as the calf stretch with your hands on a support {{nhs-flexibility}}.'),
      t('التعلق ورفع الركبتين ممكن فقط إذا كان السلم مصممًا ومثبتًا للتعلق، مع مساحة كافية بينك وبين الحائط.','Hanging and knee raises are possible only if the ladder is designed and fixed for hanging, with enough room between you and the wall.'),
      t('السلم لا يزيد الطول ولا يعالج الظهر؛ لا يوجد مصدر موثوق يقول ذلك.','Wall bars do not make you taller or treat back problems; no reliable source says so.'),
      t('السلم السويدي غير معروض حاليًا في متجر وثبة؛ هذا الدليل للتعلم فقط.','Wall bars are not currently sold in the WATHBA store; this guide is for learning only.')
    ],
    images:{
      hero:{file:'dheeb-wall-bars-hero',character:'dheeb',pose:'side view standing at a set of plain wooden Swedish wall bars fixed to a wall, holding a rung at chest height with both hands, calm.',alt:t('ذيب يقف عند السلم السويدي','Dheeb standing at the Swedish wall bars')},
      muscles:{file:'muscles-wall-bars',character:'sakhr',pose:'side view doing an assisted squat while holding a rung of plain wooden Swedish wall bars at chest height, thighs near parallel, back straight.',red:{strong:'the front of the thighs and the buttocks',light:'the calves and the abdominal muscles'},alt:t('صخر يعمل قرفصاء بمساعدة السلم السويدي، والعضلات العاملة ملوّنة بالأحمر','Sakhr doing an assisted squat at the wall bars with the working muscles shaded red')},
      mistake:{file:'sakhr-wall-bars-forced-stretch',character:'sakhr',pose:'at plain wooden Swedish wall bars showing a clear mistake: one leg hoisted very high on an upper rung, forcing a split stretch, body twisted, wincing posture.',alt:t('صخر يجبر جسمه على إطالة قسرية على السلم، وهذا خطأ شائع','Sakhr forcing an extreme stretch on the wall bars, a common mistake')},
      closing:{file:'sakhr-wall-bars-hang',character:'sakhr',pose:'back view in a calm hang from the top rung of plain wooden Swedish wall bars, arms straight, feet just off the floor.',alt:t('صخر يتعلق من أعلى السلم السويدي','Sakhr hanging from the top of the wall bars')}
    },
    muscles:{
      primary:[t('في القرفصاء بمساعدة: الفخذان والأرداف {{ace-squat}}','In assisted squats: thighs and glutes {{ace-squat}}'),t('في التعلق ورفع الركبتين: القبضة والظهر والبطن','In hangs and knee raises: grip, back and abdominals')],
      secondary:[t('السمانة في الإطالة والوقوف على أطراف القدمين {{nhs-flexibility}}','Calves in stretches and heel raises {{nhs-flexibility}}'),t('الكتفان في التعلق {{ace-pull-up}}','Shoulders in hangs {{ace-pull-up}}')],
      note:t('العضلات تتبع التمرين لا الجهاز: السلم نقطة إمساك، والتمرين الذي تعمله عليه هو الذي يحدد العضلات.','The muscles follow the exercise, not the equipment: the ladder is a handhold, and what you do on it decides which muscles work.')
    },
    sections:[
      section('uses',t('ما فائدة السلم السويدي؟','What are wall bars good for?'),
        t('القرفصاء بمساعدة: امسك قضيبًا بمستوى صدرك وانزل في القرفصاء. القضيب يعطيك توازنًا لتنزل بشكل صحيح: الوركان للخلف والظهر مستقيم والركبتان على خط القدم {{ace-squat}}. NHS تستعمل ظهر الكرسي بنفس الفكرة في القرفصاء الصغيرة {{nhs-strength}}، وACE تبدأ سلسلة القرفصاء بقرفصاء بمساعدة {{ace-progressions}}.','Assisted squats: hold a rung at chest height and squat. The rung gives you balance to move well: hips back, back flat, knees in line with your feet {{ace-squat}}. The NHS uses a chair back the same way for mini-squats {{nhs-strength}}, and ACE starts its squat chain with an assisted squat {{ace-progressions}}.'),
        t('الإطالة: السلم سند ثابت لإطالة السمانة والجوانب {{nhs-flexibility}}. أطل بهدوء ولا تجبر جسمك على مدى أكبر بثقل وزنك.','Stretching: the ladder is a steady support for calf and side stretches {{nhs-flexibility}}. Stretch gently and never force extra range with your body weight.')),
      section('limits',t('ما الذي لا يفعله السلم؟','What wall bars do not do'),
        t('لا يزيد الطول، ولا يعالج آلام الظهر، ولم نجد مصدرًا موثوقًا يقول غير ذلك. إذا كان هدفك علاجًا أو تأهيلًا، فهذا يحتاج تقييمًا من مختص.','They do not make you taller or treat back pain, and we found no reliable source saying otherwise. Rehabilitation needs assessment by a professional.'),
        t('ليس كل سلم سويدي يصلح للتعلق أو العقلة: بعضها قريب جدًا من الحائط، فلا يترك مساحة لوجهك وركبتيك. افحص تعليمات الجهاز والتثبيت قبل أن تتعلق.','Not every set of wall bars suits hanging or pull-ups: some sit too close to the wall to leave room for your face and knees. Check the manufacturer\'s instructions and the fixing before you hang.'))
    ],
    ladderNote:t('القرفصاء بمساعدة من سلسلة ACE {{ace-progressions}}، والإطالة من NHS {{nhs-flexibility}}. التعلق ورفع الركبتين والمقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The assisted squat is from the ACE chain {{ace-progressions}}, the stretch from the NHS {{nhs-flexibility}}. Hangs, knee raises, doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('إطالة السمانة على السلم','Calf stretch at the ladder'),t('3 مرات لكل رجل {{nhs-flexibility}}','3 times each leg {{nhs-flexibility}}'),t('اليدان على قضيب، والرجل الخلفية مستقيمة والكعب على الأرض {{nhs-flexibility}}.','Hands on a rung, back leg straight, heel down {{nhs-flexibility}}.'),t('جزء من الإحماء في كل جلسة.','Part of every warm-up.')),
      level(t('القرفصاء بمساعدة','Assisted squat'),t('2–3 × 8–12','2–3 × 8–12'),t('امسك قضيبًا بمستوى الصدر، وانزل حتى يقترب الفخذان من الموازاة {{ace-squat}}.','Hold a rung at chest height and lower until your thighs near parallel {{ace-squat}}.'),t('تكمل 3 × 12 بدون شدّ على القضيب، فانتقل للقرفصاء الحرة.','You complete 3 × 12 without pulling on the rung; move to free squats.')),
      level(t('التعلق والقدمان مدعومتان','Foot-supported hang'),t('3 × 10–20 ثانية','3 × 10–20 seconds'),t('فقط على سلم مصمم للتعلق، والكتفان للأسفل {{ace-pull-up}}.','Only on a ladder designed for hanging, shoulders down {{ace-pull-up}}.'),t('تتعلق 3 × 20 ثانية بثبات.','You hang 3 × 20 seconds steadily.')),
      level(t('رفع الركبتين معلقًا','Hanging knee raise'),t('2–3 × 4–8','2–3 × 4–8'),t('ظهرك للسلم، وارفع ركبتيك للصدر ببطء دون تأرجح.','Back to the ladder, lift your knees to your chest slowly without swinging.'),t('تكمل 3 × 8 بتحكم.','You complete 3 × 8 under control.'))
    ],
    program:[
      t('استخدم السلم ضمن جلساتك يومين في الأسبوع على الأقل، فهذا يكمل توصية تدريب كل العضلات الكبرى {{nhs-adults}} {{acsm-2026}}. ابدأ بالإطالة كإحماء، ثم القرفصاء، ثم التعلق إن كان مناسبًا.','Use the ladder in your sessions at least twice a week, toward the advice to train all major muscle groups {{nhs-adults}} {{acsm-2026}}. Warm up with the stretch, then squats, then hangs if suitable.'),
      t('الراحة 60–90 ثانية قاعدة من وثبة. توقف إذا لاحظت حركة غير طبيعية في التثبيت أو تشققًا في القضبان.','Resting 60–90 seconds is a WATHBA rule. Stop if you notice any unusual movement in the fixing or a crack in a rung.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إطالة السمانة، ثم 3 مجموعات قرفصاء بمساعدة، ثم تعلق إن أمكن.','Calf stretch, 3 sets of assisted squats, then hangs if possible.')),
      day(t('الثلاثاء','Tuesday'),t('تمارين ضغط أو مشي.','Push-ups or a walk.')),
      day(t('الأربعاء','Wednesday'),t('نفس جلسة الأحد، وأضف رفع الركبتين إذا كان التعلق ثابتًا.','Sunday\'s session, adding knee raises if your hang is steady.')),
      day(t('أي يوم','Any day'),t('إطالة خفيفة لدقائق، بلا إجبار.','A few minutes of gentle stretching, never forced.'))
    ],
    mistakes:[
      mistake(t('الإطالة القسرية بوزن الجسم.','Forcing stretches with body weight.'),t('أطل بهدوء وبالمدى المريح {{nhs-flexibility}}.','Stretch gently within a comfortable range {{nhs-flexibility}}.')),
      mistake(t('التعلق على سلم غير مصمم لذلك.','Hanging from a ladder not built for it.'),t('افحص تعليمات الجهاز والتثبيت والمسافة من الحائط أولًا.','Check the instructions, the fixing and the wall clearance first.')),
      mistake(t('الشدّ بقوة على القضيب في القرفصاء.','Hauling on the rung in squats.'),t('القضيب للتوازن فقط؛ رجلاك تقومان بالعمل.','The rung is for balance only; your legs do the work.')),
      mistake(t('التأرجح في رفع الركبتين.','Swinging in knee raises.'),t('ارفع ببطء، وقلل المدى إذا لزم.','Lift slowly, and shorten the range if needed.'))
    ],
    faqs:[
      faq(t('هل السلم السويدي معروض للبيع في وثبة؟','Does WATHBA sell Swedish wall bars?'),t('غير معروض حاليًا ضمن منتجات المتجر. هذا الدليل للتعلم وفهم الاستخدام فقط.','Not currently in the store. This guide is for learning and understanding their use only.')),
      faq(t('هل التعلق على السلم السويدي يطوّل القامة؟','Does hanging on wall bars make you taller?'),t('لا. لم نجد مصدرًا موثوقًا يثبت ذلك، فلا نعد به.','No. We found no reliable source showing that, so we do not promise it.')),
      faq(t('هل السلم السويدي بديل عن بار العقلة؟','Can wall bars replace a pull-up bar?'),t('ليس دائمًا. كثير منها قريب من الحائط، فلا يترك مساحة للعقلة الكاملة. بار العقلة البارز عن الحائط أنسب للسحب.','Not always. Many sit close to the wall and leave no room for a full pull-up. A bar that projects from the wall is better for pulling.')),
      faq(t('ما أفضل تمرين للمبتدئ على السلم؟','What is the best beginner exercise on wall bars?'),t('القرفصاء بمساعدة وإطالة السمانة. القضيب يعطيك توازنًا لتتعلم الحركة بشكل صحيح.','Assisted squats and the calf stretch. The rung gives you balance to learn good form.'))
    ],
    related:['beginner','first-pull-up','grip','rings'],
    products:[],
    sources:['nhs-strength','nhs-flexibility','ace-squat','ace-progressions','ace-pull-up','nhs-adults','acsm-2026']
  },
  {
    slug:'weekly-plan', reviewed:'2026-11-27',
    title:t('جدول تمارين كاليستنكس للمبتدئين: خطة أسبوعية كاملة','Beginner Calisthenics Weekly Plan: A Complete Training Week'),
    description:t('جدول كاليستنكس أسبوعي للمبتدئين: كم يومًا تتمرن، كم مجموعة لكل عضلة، وكيف تتقدم أسبوعًا بعد أسبوع، مبني على مراجعات علمية وتوصيات ACSM وNHS.','A beginner calisthenics weekly plan: how many days, how many sets per muscle and how to progress week by week, built on systematic reviews and ACSM and NHS guidance.'),
    tags:[t('برنامج','Program'),t('مبتدئ','Beginner'),t('جسم كامل','Full body')],
    lead:t('أفضل جدول للمبتدئ بسيط: جلسات للجسم كله يومين أو ثلاثة في الأسبوع، وفي كل جلسة دفع وسحب ورجلان وجذع. الأهم من عدد الأيام هو مجموع العمل الذي تنجزه في الأسبوع.','The best beginner plan is simple: full-body sessions 2 or 3 days a week, each with a push, a pull, legs and trunk. Total weekly work matters more than the number of days.'),
    summary:[
      t('تمرّن على كل العضلات الكبرى يومين أسبوعيًا على الأقل {{nhs-adults}} {{acsm-2026}}.','Train every major muscle group at least 2 days a week {{nhs-adults}} {{acsm-2026}}.'),
      t('عدد الأيام أقل أهمية مما تظن: عندما يتساوى مجموع العمل الأسبوعي، لا يفرق تقسيمه على يومين أو أربعة في القوة {{grgic-frequency-2018}} ولا في نمو العضلة {{schoenfeld-frequency-2019}}.','Days matter less than you think: with equal total weekly work, splitting it over 2 or 4 days makes no clear difference to strength {{grgic-frequency-2018}} or muscle growth {{schoenfeld-frequency-2019}}.'),
      t('المجموعات هي المهمة: كل مجموعة أسبوعية إضافية ارتبطت بنمو أكبر {{schoenfeld-volume-2017}}، وACSM تذكر 10 مجموعات أسبوعيًا أو أكثر للعضلة {{acsm-2026}}.','Sets are what count: each extra weekly set was linked to more growth {{schoenfeld-volume-2017}}, and ACSM cites 10 or more weekly sets per muscle {{acsm-2026}}.'),
      t('ابدأ بـ3 جلسات للجسم كله، 2–3 مجموعات لكل حركة، ولا حاجة للتمرين حتى العجز {{acsm-2026}}.','Start with 3 full-body sessions, 2–3 sets per movement, with no need to train to failure {{acsm-2026}}.'),
      t('قاعدة وثبة: كل أسبوعين أضف مجموعة واحدة لكل حركة، أو انتقل لنسخة أصعب، لا الاثنين معًا.','WATHBA rule: every two weeks add one set per movement or move to a harder version, not both.')
    ],
    images:{
      hero:{file:'dheeb-weekly-plan-hero',character:'dheeb',pose:'standing front view holding a blank clipboard in one hand and pointing at it with the other, as if explaining a training plan.',alt:t('ذيب يشرح الجدول الأسبوعي','Dheeb explaining the weekly plan')},
      muscles:{file:'muscles-weekly-plan',character:'sakhr',pose:'standing front view in a relaxed athletic stance, arms slightly away from the body so the chest, arms, abdomen and legs are all visible.',red:{strong:'chest, back of the upper arms, the large back muscles visible at the sides, front of the thighs, buttocks',light:'shoulders, abdominal muscles and calves'},alt:t('صخر واقفًا، والعضلات التي يغطيها الجدول ملوّنة بالأحمر','Sakhr standing with the muscles the plan covers shaded red')},
      mistake:{file:'sakhr-overtraining',character:'sakhr',pose:'sitting on the floor exhausted, slumped forward with arms resting on his knees, head hanging down, after training too hard.',alt:t('صخر منهك بعد التمرين كل يوم حتى العجز، وهذا خطأ شائع','Sakhr exhausted after training to failure every day, a common mistake')},
      closing:{file:'dheeb-sakhr-high-five',character:'dheeb',pose:'front view raising one open hand for a high five, smiling posture, as if congratulating someone on finishing a week of training.',alt:t('ذيب يحتفل بإكمال أسبوع تمرين','Dheeb celebrating a completed training week')}
    },
    muscles:{
      primary:[t('الدفع: الصدر والترايسبس ومقدمة الكتف {{ace-push-up}}','Push: chest, triceps and front shoulders {{ace-push-up}}'),t('السحب: الظهر والبايسبس {{ace-pull-up}}','Pull: back and biceps {{ace-pull-up}}'),t('الرجلان: الفخذان والأرداف {{ace-squat}}','Legs: thighs and glutes {{ace-squat}}')],
      secondary:[t('الجذع: البطن وأسفل الظهر في البلانك وكل الحركات','Trunk: abdominals and low back in the plank and every movement'),t('السمانة والقبضة','Calves and grip')],
      note:t('الجدول يغطي مجموعات العضلات الكبرى التي توصي NHS بتدريبها: الرجلان والوركان والظهر والبطن والصدر والكتفان والذراعان {{nhs-adults}}.','The plan covers the major muscle groups the NHS says to train: legs, hips, back, abdomen, chest, shoulders and arms {{nhs-adults}}.')
    },
    sections:[
      section('days',t('كم يومًا أتمرن في الأسبوع؟','How many days a week?'),
        t('الحد الأدنى يومان لكل العضلات الكبرى {{nhs-adults}}. مراجعة لـ22 دراسة وجدت أن مكاسب القوة تزيد مع عدد الجلسات، لكن السبب هو زيادة مجموع العمل؛ عندما تساوى الحجم لم يفرق عدد الأيام {{grgic-frequency-2018}}. ونفس النتيجة لنمو العضلة في مراجعة لـ25 دراسة {{schoenfeld-frequency-2019}}.','The minimum is 2 days for all major muscle groups {{nhs-adults}}. A review of 22 studies found strength gains rise with sessions, but because total work rises; with volume equal, the number of days made no difference {{grgic-frequency-2018}}. A review of 25 studies found the same for muscle growth {{schoenfeld-frequency-2019}}.'),
        t('الخلاصة العملية: اختر عدد الأيام الذي تستطيع الالتزام به. نقترح للمبتدئ 3 جلسات للجسم كله، لأنها تجمع حجمًا كافيًا مع راحة يوم بين كل جلستين.','The practical takeaway: pick the number of days you can stick to. For beginners we suggest 3 full-body sessions, which give enough volume with a rest day between sessions.')),
      section('sets',t('كم مجموعة لكل عضلة؟','How many sets per muscle?'),
        t('نمو العضلة يزيد مع عدد المجموعات الأسبوعية {{schoenfeld-volume-2017}}، وACSM وجدت أن 10 مجموعات أسبوعيًا أو أكثر للعضلة تعزز النمو، وأن 2–3 مجموعات في التمرين تكفي للقوة {{acsm-2026}}.','Muscle growth rises with weekly sets {{schoenfeld-volume-2017}}; ACSM found 10 or more weekly sets per muscle enhance growth and 2–3 sets per exercise suffice for strength {{acsm-2026}}.'),
        t('في جدولنا: 3 جلسات × 3 مجموعات = 9 مجموعات أسبوعيًا لكل حركة أساسية في البداية، ثم تصل لـ10 وأكثر بإضافة مجموعة كل أسبوعين.','In our plan: 3 sessions × 3 sets = 9 weekly sets per main movement at first, reaching 10 and more as you add a set every two weeks.')),
      section('progress',t('كيف تتقدم أسبوعًا بعد أسبوع؟','How do you progress week by week?'),
        t('القاعدة في كل دليل من أدلتنا: عندما تكمل أعلى رقم في النطاق بشكل نظيف في جلستين متتاليتين، انتقل للنسخة الأصعب. أمثلة النسخ الأصعب في سلاسل التدرّج عند ACE {{ace-progressions}}.','The rule in each of our guides: once you hit the top of the range cleanly in two sessions in a row, move to the harder version. ACE progression chains show what the harder versions look like {{ace-progressions}}.'),
        t('التدرّج بوزن الجسم يبني القوة فعلًا: 3 أيام أسبوعيًا من الضغط المتدرج لـ4 أسابيع رفعت القوة مثل البنش برس {{kotarsky-2018}}.','Bodyweight progression really builds strength: 3 days a week of progressive push-ups for 4 weeks raised strength like the bench press did {{kotarsky-2018}}.'))
    ],
    ladderNote:t('هذه مراحل الجدول على 12 أسبوعًا. الحجم مبني على المصادر {{acsm-2026}} {{schoenfeld-volume-2017}}، والتقسيم الزمني وعمود «انتقل عندما» قواعد عملية من وثبة.','These are the plan\'s stages over 12 weeks. Volume follows the sources {{acsm-2026}} {{schoenfeld-volume-2017}}; the timeline and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('الأسابيع 1–2: التعلّم','Weeks 1–2: learning'),t('3 جلسات × 2 مجموعة لكل حركة','3 sessions × 2 sets per movement'),t('ركّز على الشكل في النسخة السهلة من كل حركة.','Focus on form in the easy version of each movement.'),t('تؤدي كل الحركات بشكل صحيح دون ألم.','You do every movement correctly without pain.')),
      level(t('الأسابيع 3–4: الحجم','Weeks 3–4: volume'),t('3 جلسات × 3 مجموعات (9 أسبوعيًا)','3 sessions × 3 sets (9 a week)'),t('نفس الحركات، وزد تكرارًا كلما أمكن.','Same movements, adding a rep when you can.'),t('تصل لأعلى النطاق في حركتين على الأقل.','You reach the top of the range in at least two movements.')),
      level(t('الأسابيع 5–8: التدرّج','Weeks 5–8: progression'),t('3 جلسات × 3–4 مجموعات (9–12 أسبوعيًا)','3 sessions × 3–4 sets (9–12 a week)'),t('انتقل للنسخة الأصعب في كل حركة تتقنها {{ace-progressions}}.','Move to the harder version of each movement you master {{ace-progressions}}.'),t('تكمل 10 مجموعات أسبوعيًا أو أكثر لكل حركة {{acsm-2026}}.','You complete 10 or more weekly sets per movement {{acsm-2026}}.')),
      level(t('الأسابيع 9–12: التثبيت','Weeks 9–12: consolidation'),t('3–4 جلسات × 3–4 مجموعات','3–4 sessions × 3–4 sets'),t('أضف جلسة رابعة إذا كان تعافيك جيدًا، أو أضف حركة مهارة.','Add a fourth session if you recover well, or add a skill movement.'),t('اختبر نفسك: أقصى عدد ضغط وعقلة، وقارنه بأسبوعك الأول.','Test yourself: max push-ups and pull-ups, compared with week one.'))
    ],
    program:[
      t('كل جلسة: إحماء 5 دقائق، ثم الحركات الأربع بالترتيب: سحب، دفع، رجلان، جذع. ضع الحركة الأصعب عليك أولًا، لأن التمرين في بداية الجلسة يكسب قوة أكثر {{acsm-2026}}.','Each session: a 5-minute warm-up, then the four movements in order: pull, push, legs, trunk. Put your hardest movement first, since exercises at the start of a session gain more strength {{acsm-2026}}.'),
      t('الراحة 60–120 ثانية بين المجموعات قاعدة من وثبة. أضف 150 دقيقة على الأقل من المشي أو نشاط هوائي متوسط في الأسبوع {{who-2020}}.','Resting 60–120 seconds between sets is a WATHBA rule. Add at least 150 minutes of walking or other moderate aerobic activity a week {{who-2020}}.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('جسم كامل: عقلة أو تعلق، ضغط، قرفصاء، بلانك. 3 مجموعات لكل حركة.','Full body: pull-up or hang, push-up, squat, plank. 3 sets each.')),
      day(t('الإثنين','Monday'),t('مشي سريع 30–40 دقيقة {{who-2020}}.','Brisk walk, 30–40 minutes {{who-2020}}.')),
      day(t('الثلاثاء','Tuesday'),t('جسم كامل: نفس الحركات، وحاول زيادة تكرار في حركة أو اثنتين.','Full body: the same movements, trying to add a rep to one or two.')),
      day(t('الأربعاء','Wednesday'),t('راحة أو إطالة خفيفة.','Rest or gentle stretching.')),
      day(t('الخميس','Thursday'),t('جسم كامل: نفس الحركات. في الأسابيع 5–8 جرّب النسخة الأصعب هنا.','Full body: the same movements. In weeks 5–8, try the harder versions here.')),
      day(t('الجمعة والسبت','Friday and Saturday'),t('مشي أو نط حبل خفيف، وراحة.','A walk or easy jump rope, and rest.'))
    ],
    mistakes:[
      mistake(t('التمرين كل يوم حتى العجز.','Training to failure every day.'),t('3 جلسات تكفي، والتمرين حتى العجز لا يحسّن النتائج بشكل ثابت {{acsm-2026}}.','Three sessions are enough, and failure training does not reliably improve results {{acsm-2026}}.')),
      mistake(t('تغيير البرنامج كل أسبوع.','Changing the program every week.'),t('التقدم يأتي من زيادة المجموعات والنسخ الأصعب في نفس الحركات {{schoenfeld-volume-2017}}.','Progress comes from adding sets and harder versions of the same movements {{schoenfeld-volume-2017}}.')),
      mistake(t('نسيان الرجلين والسحب.','Skipping legs and pulling.'),t('الجدول يشمل كل العضلات الكبرى عمدًا {{nhs-adults}}.','The plan covers every major muscle group on purpose {{nhs-adults}}.')),
      mistake(t('القلق من عدد الأيام.','Worrying about the number of days.'),t('مجموع العمل الأسبوعي أهم من توزيعه {{grgic-frequency-2018}}؛ اختر ما تستطيع الالتزام به.','Total weekly work matters more than how it is spread {{grgic-frequency-2018}}; choose what you can stick to.'))
    ],
    faqs:[
      faq(t('ما أفضل جدول تمارين كاليستنكس للمبتدئين؟','What is the best beginner calisthenics schedule?'),t('3 جلسات للجسم كله في الأسبوع على أيام غير متتالية، في كل جلسة سحب ودفع ورجلان وجذع، 2–3 مجموعات لكل حركة، مع زيادة تدريجية في المجموعات والصعوبة.','Three full-body sessions a week on non-consecutive days, each with a pull, a push, legs and trunk, 2–3 sets per movement, gradually adding sets and difficulty.')),
      faq(t('هل الأفضل يومين أم ثلاثة أم أربعة؟','Is 2, 3 or 4 days best?'),t('مراجعات علمية وجدت أن عدد الأيام لا يفرق كثيرًا عندما يتساوى مجموع العمل الأسبوعي. يومان هما الحد الأدنى، وثلاثة تسهّل جمع حجم كافٍ.','Systematic reviews found the number of days matters little when total weekly work is equal. Two days is the minimum; three make it easier to reach enough volume.')),
      faq(t('كم مجموعة أعمل لكل عضلة؟','How many sets per muscle?'),t('ACSM ذكرت أن 10 مجموعات أسبوعيًا أو أكثر للعضلة تعزز النمو، و2–3 مجموعات في التمرين تكفي للقوة. ابدأ بأقل وزد تدريجيًا.','ACSM cites 10 or more weekly sets per muscle for growth and 2–3 sets per exercise for strength. Start lower and build up.')),
      faq(t('هل أقسّم الجسم على أيام مثل الجيم؟','Should I split body parts like in the gym?'),t('ليس ضروريًا للمبتدئ. جلسات الجسم الكامل أبسط وتعطي كل عضلة تدريبًا عدة مرات في الأسبوع، والمهم في النهاية مجموع المجموعات.','Not necessary for beginners. Full-body sessions are simpler and train each muscle several times a week; total sets are what count in the end.')),
      faq(t('متى أرى نتيجة؟','When will I see results?'),t('في دراسة الضغط المتدرج تحسنت القوة خلال 4 أسابيع، وفي دراسة أخرى زاد حجم العضلة خلال 8 أسابيع. النتائج تختلف من شخص لآخر.','In the progressive push-up study strength improved within 4 weeks, and in another study muscle size grew within 8 weeks. Results vary by person.'))
    ],
    related:['beginner','push-ups','first-pull-up','home'],
    products:['wall-pull-up-bar','steel-wood-parallettes','resistance-bands'],
    sources:['nhs-adults','acsm-2026','grgic-frequency-2018','schoenfeld-frequency-2019','schoenfeld-volume-2017','ace-push-up','ace-pull-up','ace-squat','ace-progressions','kotarsky-2018','who-2020']
  },
  {
    slug:'home', reviewed:'2026-11-27',
    title:t('تمارين كاليستنكس في البيت بدون معدات: ماذا تحتاج فعلًا؟','Calisthenics at Home with No Equipment: What You Really Need'),
    description:t('تمارين كاليستنكس في البيت للمبتدئين بدون معدات: الضغط والقرفصاء والبلانك، كيف تجعلها أصعب بلا أوزان، ومتى تحتاج بار عقلة، مع دراسات منشورة.','Calisthenics at home with no equipment: push-ups, squats and planks, how to make them harder without weights, and when you need a pull-up bar, with published studies.'),
    tags:[t('في البيت','At home'),t('بدون معدات','No equipment'),t('مبتدئ','Beginner')],
    lead:t('تستطيع أن تبدأ الكاليستنكس في غرفة صغيرة بلا أي جهاز: الضغط والقرفصاء والبلانك تكفي للدفع والرجلين والجذع. الشيء الوحيد الذي يحتاج معدّة هو السحب، وهنا يأتي بار العقلة.','You can start calisthenics in a small room with no equipment: push-ups, squats and planks cover pushing, legs and trunk. The one thing that needs equipment is pulling, and that is where a pull-up bar comes in.'),
    summary:[
      t('تمارين البيت تبني عضلًا حقيقيًا: الضغط بحمل مضبوط مرتين أسبوعيًا لـ8 أسابيع زاد حجم الصدر والترايسبس مثل البنش برس {{kikuchi-2017}}.','Home training builds real muscle: push-ups at a matched load twice a week for 8 weeks grew the chest and triceps like the bench press {{kikuchi-2017}}.'),
      t('بدون أوزان، تجعل الحركة أصعب بتغيير زاوية الجسم: الضغط على الحائط ثم المرتفع ثم الأرض ثم القدمان مرتفعتان {{ebben-2011}} {{ace-progressions}}.','Without weights, you make a movement harder by changing body angle: wall, incline, floor, then feet-raised push-ups {{ebben-2011}} {{ace-progressions}}.'),
      t('برنامج بسيط يومين أسبوعيًا على الأقل يحقق توصية تمارين القوة {{nhs-adults}}، ومعه 150 دقيقة مشي أو نشاط متوسط {{who-2020}}.','A simple plan at least twice a week meets the strength guideline {{nhs-adults}}, plus 150 minutes of walking or moderate activity {{who-2020}}.'),
      t('السحب يحتاج نقطة تعليق ثابتة. قاعدة وثبة: لا ترتجل على باب أو طاولة أو أنبوب؛ استعمل بار عقلة مثبتًا جيدًا.','Pulling needs a solid hanging point. WATHBA rule: never improvise on a door, table or pipe; use a properly fixed pull-up bar.'),
      t('أول ما تشتريه إن أردت: بار عقلة، ثم حزام مقاومة. الباقي إضافات.','The first things to buy, if you want: a pull-up bar, then a resistance band. Everything else is extra.')
    ],
    images:{
      hero:{file:'dheeb-home-hero',character:'dheeb',pose:'side view doing a push-up on the floor of a simple room, a plain doorway and a small rug drawn with thin ink lines in the background.',alt:t('ذيب يتمرن بالضغط في غرفة البيت','Dheeb doing push-ups in a room at home')},
      muscles:{file:'muscles-home',character:'sakhr',pose:'side view at the bottom of a bodyweight squat, thighs parallel to the floor, arms reaching forward for balance, back flat.',red:{strong:'the front of the thighs and the buttocks',light:'the calves, the hamstrings and the abdominal muscles'},alt:t('صخر في القرفصاء، والعضلات العاملة ملوّنة بالأحمر','Sakhr in a squat with the working muscles shaded red')},
      mistake:{file:'sakhr-door-hang',character:'sakhr',pose:'trying to hang from the top edge of a plain interior door that is bending, a clear dangerous mistake, worried posture.',alt:t('صخر يتعلق على باب البيت، وهذا خطأ خطير','Sakhr hanging from a door, a dangerous mistake')},
      closing:{file:'dheeb-home-pull-up',character:'dheeb',pose:'front view doing a pull-up on a plain black steel pull-up bar mounted on a wall, chin over the bar.',alt:t('ذيب يتمرن على بار عقلة مثبت في البيت','Dheeb doing pull-ups on a wall-mounted bar at home')}
    },
    muscles:{
      primary:[t('الضغط: الصدر والترايسبس ومقدمة الكتف {{ace-push-up}} {{kikuchi-2017}}','Push-ups: chest, triceps and front shoulders {{ace-push-up}} {{kikuchi-2017}}'),t('القرفصاء: الفخذان والأرداف {{ace-squat}}','Squats: thighs and glutes {{ace-squat}}')],
      secondary:[t('البلانك والجذع: البطن وأسفل الظهر {{ace-push-up}}','Plank and trunk: abdominals and low back {{ace-push-up}}'),t('السحب، عند توفر بار: الظهر والبايسبس {{ace-pull-up}}','Pulling, once you have a bar: back and biceps {{ace-pull-up}}')],
      note:t('بدون بار، يبقى الظهر أقل عضلة تتدرب في البيت. لذلك نعتبر بار العقلة أول إضافة تستحق الشراء.','Without a bar, the back is the least-trained muscle at home. That is why we see a pull-up bar as the first purchase worth making.')
    },
    sections:[
      section('works',t('هل تمارين البيت تكفي فعلًا؟','Is home training really enough?'),
        t('نعم للبداية وأبعد منها. في دراسة، زاد الضغط المعدّل، مثل الضغط على الركبتين، حجم الصدر والترايسبس وقوتهما بقدر البنش برس {{kikuchi-2017}}. وفي أخرى، رفع الضغط المتدرج 3 أيام أسبوعيًا القوة مثل البنش برس خلال 4 أسابيع {{kotarsky-2018}}.','Yes, for starting and beyond. In one study, modified push-ups such as knee push-ups grew the chest and triceps and their strength as much as the bench press {{kikuchi-2017}}. In another, progressive push-ups 3 days a week raised strength like the bench press within 4 weeks {{kotarsky-2018}}.')),
      section('harder',t('كيف تجعل التمرين أصعب بدون أوزان؟','How to make it harder without weights'),
        t('غيّر زاوية الجسم: كلما زاد الوزن على يديك صعب الضغط؛ الضغط والقدمان مرتفعتان أثقل من العادي، والضغط على الركبتين أخف {{ebben-2011}}. في القرفصاء، انزل أبطأ أو أعمق ضمن الشكل الصحيح {{ace-squat}}.','Change your body angle: the more weight on your hands, the harder the push-up; feet-raised push-ups are heavier than regular ones and knee push-ups lighter {{ebben-2011}}. In squats, lower more slowly or deeper within good form {{ace-squat}}.'),
        t('أبطئ النزول: النزول البطيء يجعل الحركة أصعب {{ace-pull-up-moves}}، وACSM وجدت أن التركيز على النزول يعزز النمو {{acsm-2026}}. وأضف مجموعات: كل مجموعة أسبوعية إضافية ارتبطت بنمو أكبر {{schoenfeld-volume-2017}}.','Slow the lowering: a slower descent makes a movement harder {{ace-pull-up-moves}}, and ACSM found eccentric emphasis enhances growth {{acsm-2026}}. Add sets: each extra weekly set was linked to more growth {{schoenfeld-volume-2017}}.')),
      section('space',t('المكان والأمان في البيت','Space and safety at home'),
        t('تحتاج مساحة بطول جسمك تقريبًا على أرض غير زلقة. للضغط على سطح مرتفع استعمل شيئًا ثابتًا لا ينزلق، مثل درجة سلم أو طاولة مثبتة. للسحب لا تستعمل الأبواب أو الأثاث أو الأنابيب؛ بار عقلة مثبت على حائط مناسب هو الحل الآمن.','You need floor space about your body length on a non-slip surface. For incline push-ups use something that will not move, such as a stair step or a fixed table. For pulling, never use doors, furniture or pipes; a bar fixed to a suitable wall is the safe option.'))
    ],
    ladderNote:t('مراحل الضغط والقرفصاء من NHS وACE {{nhs-strength}} {{ace-progressions}}. المقادير وعمود «انتقل عندما» قواعد عملية من وثبة.','The push-up and squat stages come from the NHS and ACE {{nhs-strength}} {{ace-progressions}}. Doses and the “Move on when” column are WATHBA working rules.'),
    levels:[
      level(t('الجلوس والوقوف من كرسي','Sit-to-stand'),t('3 × 5–10، ببطء {{nhs-strength}}','3 × 5–10, slowly {{nhs-strength}}'),t('قم برجليك لا بيديك {{nhs-strength}}.','Stand using your legs, not your arms {{nhs-strength}}.'),t('تكمل 3 × 10 ببطء، فانتقل للقرفصاء الحرة.','You complete 3 × 10 slowly; move to free squats.')),
      level(t('القرفصاء بوزن الجسم','Bodyweight squat'),t('3 × 10–15','3 × 10–15'),t('الوركان للخلف، والفخذان قرب الموازاة {{ace-squat}}.','Hips back, thighs near parallel {{ace-squat}}.'),t('تكمل 3 × 15، ثم أبطئ النزول لـ3 ثوانٍ.','You complete 3 × 15; then slow the descent to 3 seconds.')),
      level(t('الضغط المائل أو على الركبتين','Incline or knee push-up'),t('3 × 6–10','3 × 6–10'),t('اخفض السطح تدريجيًا {{ace-progressions}}.','Lower the surface over time {{ace-progressions}}.'),t('تكمل 3 × 10 على الركبتين.','You complete 3 × 10 on your knees.')),
      level(t('الضغط الكامل','Full push-up'),t('3 × أكبر عدد نظيف','3 × max clean reps'),t('الجسم خط واحد، والصدر قرب الأرض {{ace-push-up}}.','One straight line, chest near the floor {{ace-push-up}}.'),t('تكمل 3 × 15، فانتقل للقدمين المرتفعتين {{ebben-2011}}.','You complete 3 × 15; move to feet-raised {{ebben-2011}}.')),
      level(t('البلانك','Plank'),t('3 × 20–45 ثانية','3 × 20–45 seconds'),t('خط مستقيم من الرأس للكعبين {{ace-progressions}}.','A straight line from head to heels {{ace-progressions}}.'),t('تثبت 3 × 45 ثانية.','You hold 3 × 45 seconds.'))
    ],
    program:[
      t('جلستان إلى ثلاث في الأسبوع، كل جلسة قرفصاء وضغط وبلانك، 2–3 مجموعات لكل حركة {{acsm-2026}}. عندما يتوفر بار عقلة، أضف التعلق أو العقلة كأول حركة.','Two or three sessions a week, each with squats, push-ups and a plank, 2–3 sets per movement {{acsm-2026}}. Once you have a pull-up bar, add hangs or pull-ups as the first movement.'),
      t('الجلسة تأخذ 20–30 دقيقة مع الراحة. الراحة 60–90 ثانية قاعدة من وثبة.','A session takes 20–30 minutes including rest. Resting 60–90 seconds is a WATHBA rule.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('قرفصاء، ضغط، بلانك: 3 مجموعات لكل منها.','Squats, push-ups, plank: 3 sets each.')),
      day(t('الإثنين','Monday'),t('مشي 30 دقيقة {{who-2020}}.','A 30-minute walk {{who-2020}}.')),
      day(t('الثلاثاء','Tuesday'),t('نفس جلسة الأحد، مع نزول أبطأ في القرفصاء.','Sunday\'s session, with a slower squat descent.')),
      day(t('الخميس','Thursday'),t('نفس الجلسة، وحاول تكرارًا إضافيًا في الضغط.','The same session, trying one more push-up rep.')),
      day(t('الجمعة','Friday'),t('مشي أو نط حبل خفيف.','A walk or easy jump rope.'))
    ],
    mistakes:[
      mistake(t('التعلق على الباب أو الأثاث.','Hanging from doors or furniture.'),t('قد ينكسر أو يسقط. استعمل بار عقلة مثبتًا جيدًا فقط.','It can break or fall. Use only a properly fixed pull-up bar.')),
      mistake(t('الضغط على سطح ينزلق.','Push-ups on a surface that slides.'),t('استعمل درجة أو سطحًا ثابتًا لا يتحرك.','Use a step or a surface that cannot move.')),
      mistake(t('نفس العدد كل مرة لأشهر.','The same reps for months.'),t('زد مجموعة أو صعّب الزاوية؛ التقدم يأتي من الحمل المتزايد {{schoenfeld-volume-2017}}.','Add a set or a harder angle; progress comes from increasing load {{schoenfeld-volume-2017}}.')),
      mistake(t('تمرين الدفع فقط.','Training only pushing.'),t('أضف القرفصاء والبلانك، وبار عقلة للسحب عندما تستطيع {{nhs-adults}}.','Add squats and planks, and a bar for pulling when you can {{nhs-adults}}.'))
    ],
    faqs:[
      faq(t('ما هي أفضل تمارين كاليستنكس في البيت للمبتدئين؟','What are the best home calisthenics exercises for beginners?'),t('القرفصاء والضغط والبلانك، وكل واحد له نسخة سهلة: الجلوس والوقوف من كرسي، وضغط الحائط، والبلانك على الركبتين. وعند توفر بار عقلة، أضف التعلق.','Squats, push-ups and planks, each with an easy version: sit-to-stand, wall push-ups and knee planks. With a pull-up bar, add hangs.')),
      faq(t('هل تمارين البيت تبني عضلات بدون أوزان؟','Can home training build muscle without weights?'),t('نعم. دراسة وجدت أن الضغط المعدّل زاد حجم الصدر والترايسبس بقدر البنش برس، والتقدم يأتي من تغيير زاوية الجسم وإضافة المجموعات.','Yes. A study found modified push-ups grew the chest and triceps as much as the bench press; progress comes from changing body angle and adding sets.')),
      faq(t('كم دقيقة أتمرن في البيت؟','How long should a home session be?'),t('20–30 دقيقة تكفي، يومين إلى ثلاثة أسبوعيًا، مع مشي في الأيام الأخرى.','20–30 minutes is enough, 2–3 days a week, with walking on other days.')),
      faq(t('كيف أتمرن الظهر في البيت بدون معدات؟','How do I train my back at home with no equipment?'),t('هذا أصعب جزء بدون معدات، لأن الظهر يحتاج حركة سحب ونقطة تعليق ثابتة. لا ترتجل على الأبواب. بار عقلة مثبت على حائط مناسب هو الحل الآمن والأبسط.','That is the hardest part without equipment, because the back needs pulling and a solid hanging point. Do not improvise on doors. A bar fixed to a suitable wall is the safest, simplest solution.')),
      faq(t('ما أول معدّة أشتريها للبيت؟','What should I buy first for home?'),t('بار عقلة، لأنه يفتح لك حركات السحب التي لا تستطيع عملها بدونه. ثم حزام مقاومة للمساعدة في العقلة.','A pull-up bar, because it unlocks the pulling you cannot do without one. Then a resistance band to assist pull-ups.'))
    ],
    related:['beginner','weekly-plan','push-ups','first-pull-up'],
    products:['wall-pull-up-bar','resistance-bands','steel-wood-parallettes'],
    sources:['kikuchi-2017','ebben-2011','ace-progressions','nhs-adults','who-2020','ace-push-up','ace-squat','ace-pull-up','kotarsky-2018','ace-pull-up-moves','acsm-2026','schoenfeld-volume-2017','nhs-strength']
  },
  {
    slug:'wall-handstand', reviewed:'2026-11-27',
    title:t('الوقوف على اليدين على الحائط: خطوات للمبتدئين بأمان','Wall Handstand for Beginners: Safe Steps to Your First Hold'),
    description:t('تعلّم الوقوف على اليدين على الحائط خطوة بخطوة: التحضير، البطن للحائط، الثبات، العضلات العاملة، وكيف تحمي رسغك وكتفك، بحسب مراجعة علمية لحركة الوقوف على اليدين.','Learn the wall handstand step by step: preparation, chest-to-wall holds, balance, the muscles involved and protecting wrists and shoulders, based on a systematic review of the handstand.'),
    tags:[t('توازن ومهارة','Balance and skill'),t('مبتدئ إلى متوسط','Beginner to intermediate'),t('بدون معدات','No equipment')],
    lead:t('الوقوف على اليدين مهارة توازن قبل أن تكون مهارة قوة. الحائط يعطيك الأمان لتبني القوة في الكتفين والرسغين، وتتعلم شكل الجسم المستقيم، قبل أن تحاول الوقوف حرًا.','The handstand is a balance skill before it is a strength skill. The wall gives you safety to build shoulder and wrist strength and learn a straight body line before you try it free.'),
    summary:[
      t('التوازن في الوقوف على اليدين يأتي أساسًا من الرسغين: الأصابع والكفان تصحح الميل، والكتفان والوركان يساعدان عندما لا يكفي ذلك {{macdonald-handstand-2025}}.','Handstand balance comes mainly from the wrists: fingers and palms correct the lean, with shoulders and hips helping when that is not enough {{macdonald-handstand-2025}}.'),
      t('عضلات الرسغ هي الأعلى نشاطًا، ثم أعلى شبه المنحرفة ومقدمة الكتف والترايسبس {{kochanowicz-handstand-2018}}. لذلك جهّز رسغيك وكتفيك أولًا.','The wrist muscles are the most active, then the upper trapezius, front shoulder and triceps {{kochanowicz-handstand-2018}}. So prepare your wrists and shoulders first.'),
      t('لا تنظر لصدرك: ثني الرقبة يضعف الأداء، وإغلاق العينين يقلل الثبات {{macdonald-handstand-2025}}. انظر للأرض بين يديك.','Do not look at your chest: flexing the neck impairs performance and closing the eyes reduces stability {{macdonald-handstand-2025}}. Look at the floor between your hands.'),
      t('ألم الكتف شائع في الرياضات المعتمدة على الوقوف على اليدين {{angioi-handstand-2026}}. أبقِ ذراعيك ممدودتين بالكامل، وتوقف عند الألم.','Shoulder pain is common in handstand sports {{angioi-handstand-2026}}. Keep your arms fully straight and stop if it hurts.'),
      t('قاعدة وثبة: لا تحاول الوقوف الحر قبل أن تثبت 3 × 30 ثانية والبطن للحائط بجسم مستقيم.','WATHBA rule: do not try a free handstand until you can hold 3 × 30 seconds chest-to-wall with a straight body.')
    ],
    images:{
      hero:{file:'dheeb-wall-handstand-hero',character:'dheeb',pose:'side view in a chest-to-wall handstand against a plain wall drawn with thin ink lines: arms fully straight, body in one straight line, toes lightly touching the wall, hands about a palm\'s width from the wall.',alt:t('ذيب واقف على يديه وبطنه للحائط','Dheeb in a chest-to-wall handstand')},
      muscles:{file:'muscles-wall-handstand',character:'sakhr',pose:'side view in a chest-to-wall handstand against a plain wall, arms straight, body in a straight line.',red:{strong:'the forearms and wrists, the shoulders (front deltoid) and the upper trapezius beside the neck',light:'the triceps and the abdominal muscles'},alt:t('صخر واقف على يديه على الحائط، والعضلات العاملة ملوّنة بالأحمر','Sakhr in a wall handstand with the working muscles shaded red')},
      mistake:{file:'sakhr-handstand-banana',character:'sakhr',pose:'back-to-wall handstand showing a clear mistake: lower back heavily arched in a banana shape, elbows bent, head tucked to look at his chest.',alt:t('صخر يقوّس ظهره ويثني مرفقيه وهو واقف على يديه، وهذا خطأ شائع','Sakhr arching his back and bending his elbows in a handstand, a common mistake')},
      closing:{file:'dheeb-pike-hold',character:'dheeb',pose:'side view in a pike hold: hands on the floor, hips high above the shoulders, feet resting on a low sturdy box, arms straight, forming an upside-down L shape.',alt:t('ذيب في وضعية البايك على صندوق كتحضير للوقوف على اليدين','Dheeb in a box pike hold as handstand preparation')}
    },
    muscles:{
      primary:[t('الساعد والرسغ: عضلات ثني الرسغ هي الأعلى نشاطًا وتتحكم في التوازن {{kochanowicz-handstand-2018}}','Forearm and wrist: the wrist flexors are the most active and control balance {{kochanowicz-handstand-2018}}'),t('الكتف: أعلى شبه المنحرفة ومقدمة الكتف تحملان الجسم {{kochanowicz-handstand-2018}}','Shoulder: the upper trapezius and front deltoid hold the body up {{kochanowicz-handstand-2018}}')],
      secondary:[t('الترايسبس: يبقي المرفقين ممدودين {{kochanowicz-handstand-2018}}','Triceps: keeps the elbows locked {{kochanowicz-handstand-2018}}'),t('البطن والأرداف: تبقي الجسم خطًا مستقيمًا','Abdominals and glutes: keep the body in one straight line')],
      note:t('الأقوى عضليًا توازنه أفضل في الوقوف على اليدين {{macdonald-handstand-2025}}، لذلك يبدأ السلّم بتمارين قوة قبل الحائط.','Stronger athletes balance better in the handstand {{macdonald-handstand-2025}}, which is why the ladder starts with strength work before the wall.')
    },
    sections:[
      section('balance',t('كيف تتوازن على يديك؟','How do you balance on your hands?'),
        t('مثل ما تتوازن على قدميك بالكاحلين، تتوازن على يديك بالرسغين والأصابع: إذا ملت للأمام اضغط بأصابعك في الأرض، وإذا ملت للخلف خفف الضغط. الدراسات تسميها «استراتيجية الرسغ»، وإذا لم تكفِ يستخدم الجسم الكتفين والوركين والمرفقين {{macdonald-handstand-2025}}.','Just as your ankles balance you on your feet, your wrists and fingers balance you on your hands: lean forward and press your fingertips down, lean back and ease off. Studies call this the wrist strategy; when it is not enough the body uses the shoulders, hips and elbows {{macdonald-handstand-2025}}.'),
        t('الرأس مهم: ثني الرقبة لتنظر لصدرك يضعف الأداء، وإغلاق العينين يقلل الثبات {{macdonald-handstand-2025}}. انظر للأرض بين يديك أو أمامهما قليلًا.','Head position matters: tucking the chin to look at your chest impairs performance, and closing your eyes reduces stability {{macdonald-handstand-2025}}. Look at the floor between or just ahead of your hands.')),
      section('wall',t('البطن للحائط أم الظهر للحائط؟','Chest to wall or back to wall?'),
        t('في وضع الظهر للحائط تركل برجليك للأعلى ويسند الحائط كعبيك، وكثيرون يقوّسون ظهرهم فيه. في وضع البطن للحائط تمشي بقدميك على الحائط للأعلى، فيسهل أن تبقي الجسم مستقيمًا. قاعدة وثبة: ابدأ بالبطن للحائط.','Back to wall, you kick up and the wall catches your heels, and many people arch their back. Chest to wall, you walk your feet up the wall, which makes a straight line easier. WATHBA rule: start chest to wall.'),
        t('للنزول من وضع البطن للحائط، امشِ بيديك بعيدًا عن الحائط وأنزل قدميك ببطء. تدرّب على النزول قبل أن تحاول البقاء طويلًا.','To come down from chest to wall, walk your hands away from the wall and lower your feet slowly. Practise coming down before trying to stay up long.')),
      section('safety',t('احمِ رسغيك وكتفيك','Protect your wrists and shoulders'),
        t('الرسغ يحمل وزنك كله هنا، وعضلاته هي الأعلى نشاطًا {{kochanowicz-handstand-2018}}. أحمِ الرسغين قبل كل جلسة، وابدأ بمدة قصيرة. والرسغ هنا مثني للخلف تحت وزن الجسم كله، ودراسة على قوى الرسغ وجدت أن الأربطة قد تتحمل حملًا أكبر في هذا الوضع {{wrist-2018}}، فلا تتجاهل ألم الرسغ.','Your wrists carry all your weight here and their muscles are the most active {{kochanowicz-handstand-2018}}. Warm them up before every session and start with short holds. Here the wrist is bent back under your full weight, and a wrist-force study found ligaments may take more load in that position {{wrist-2018}}, so do not ignore wrist pain.'),
        t('ألم الكتف شائع عند من يمارسون الوقوف على اليدين، ومن لديهم ألم كانت أذرعهم أكثر انثناءً {{angioi-handstand-2026}}. ادفع الأرض بعيدًا وأبقِ المرفقين ممدودين بالكامل.','Shoulder pain is common in handstand practitioners, and those with pain held more bent arms {{angioi-handstand-2026}}. Push the floor away and keep your elbows fully locked.'))
    ],
    ladderNote:t('ترتيب السلّم والمقادير وعمود «انتقل عندما» قواعد عملية من وثبة؛ المصادر تشرح العضلات والتوازن والسلامة، ولم نجد مصدرًا موثوقًا يحدد سلّم تدرّج بأرقام.','The ladder order, doses and the “Move on when” column are WATHBA working rules; the sources explain muscles, balance and safety, and we found no reliable source giving a numbered progression.'),
    levels:[
      level(t('البلانك وثبات وضع الضغط','Plank and top push-up hold'),t('3 × 30–45 ثانية','3 × 30–45 seconds'),t('ذراعان ممدودتان وجسم مستقيم.','Straight arms and a straight body.'),t('تثبت 3 × 45 ثانية.','You hold 3 × 45 seconds.')),
      level(t('البايك على صندوق','Box pike hold'),t('3 × 15–30 ثانية','3 × 15–30 seconds'),t('اليدان على الأرض والقدمان على صندوق ثابت، والوركان فوق الكتفين.','Hands on the floor, feet on a sturdy box, hips over the shoulders.'),t('تثبت 3 × 30 ثانية والذراعان ممدودتان.','You hold 3 × 30 seconds with straight arms.')),
      level(t('المشي على الحائط','Wall walk'),t('3 × 2–4 صعود ونزول','3 × 2–4 walk-ups'),t('امشِ بقدميك على الحائط واقترب بيديك، ثم انزل بنفس الطريقة.','Walk your feet up the wall as your hands come closer, then reverse it.'),t('تصل لقرب الحائط وتنزل بتحكم.','You get close to the wall and come down under control.')),
      level(t('البطن للحائط','Chest-to-wall hold'),t('3 × 15–30 ثانية','3 × 15–30 seconds'),t('اليدان على بعد كف تقريبًا من الحائط، والنظر للأرض بين يديك {{macdonald-handstand-2025}}.','Hands about a palm from the wall, eyes on the floor between your hands {{macdonald-handstand-2025}}.'),t('تثبت 3 × 30 ثانية بجسم مستقيم.','You hold 3 × 30 seconds with a straight body.')),
      level(t('رفع القدمين عن الحائط','Toe pulls off the wall'),t('5–8 محاولات قصيرة','5–8 short attempts'),t('من وضع البطن للحائط، ارفع قدمًا ثم الأخرى عن الحائط وتوازن بأصابعك {{macdonald-handstand-2025}}.','From chest to wall, lift one foot then both off the wall and balance with your fingers {{macdonald-handstand-2025}}.'),t('تتوازن 5 ثوانٍ بعيدًا عن الحائط؛ تعلّم بعدها النزول الآمن قبل الوقوف الحر.','You balance 5 seconds off the wall; learn a safe exit before free handstands.'))
    ],
    program:[
      t('تمرّن على الوقوف على اليدين 3 أيام أسبوعيًا بجلسات قصيرة، 10–15 دقيقة في بداية الجلسة بعد الإحماء، لأن المهارة تحتاج جسمًا غير متعب. هذا التوقيت قاعدة من وثبة.','Practise 3 days a week in short blocks, 10–15 minutes at the start of a session after the warm-up, because skill work needs a fresh body. That timing is a WATHBA rule.'),
      t('قوة الكتفين والترايسبس تدعم التوازن {{macdonald-handstand-2025}}، فاستمر في تمارين الضغط والديبس جلستين أسبوعيًا على الأقل {{acsm-2026}}.','Shoulder and triceps strength support balance {{macdonald-handstand-2025}}, so keep training push-ups and dips at least twice a week {{acsm-2026}}.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('إحماء الرسغين والكتفين، ثم 10 دقائق من مرحلتك، ثم تمارين الضغط.','Wrist and shoulder warm-up, 10 minutes at your stage, then push-ups.')),
      day(t('الثلاثاء','Tuesday'),t('إحماء، ثم 10 دقائق من مرحلتك، ثم عقلة ورجلين.','Warm-up, 10 minutes at your stage, then pull-ups and legs.')),
      day(t('الخميس','Thursday'),t('إحماء، ثم 15 دقيقة: مرحلتك والمرحلة التي قبلها.','Warm-up, then 15 minutes: your stage and the one before.')),
      day(t('باقي الأيام','Other days'),t('راحة للرسغين.','Rest for your wrists.'))
    ],
    mistakes:[
      mistake(t('تقويس الظهر «شكل الموزة».','Arching into a banana shape.'),t('ابدأ بالبطن للحائط، وشدّ البطن والأرداف.','Start chest to wall and squeeze your abs and glutes.')),
      mistake(t('ثني المرفقين.','Bent elbows.'),t('ادفع الأرض وأبقِ الذراعين ممدودتين؛ الأذرع المنثنية ارتبطت بحمل أكبر على المفاصل {{angioi-handstand-2026}}.','Push the floor and keep your arms locked; bent arms were linked to higher joint loading {{angioi-handstand-2026}}.')),
      mistake(t('النظر للصدر.','Looking at your chest.'),t('انظر للأرض بين يديك؛ ثني الرقبة يضعف الأداء {{macdonald-handstand-2025}}.','Look at the floor between your hands; neck flexion impairs performance {{macdonald-handstand-2025}}.')),
      mistake(t('الركل بقوة للوقوف الحر.','Kicking hard into a free handstand.'),t('تعلّم النزول الآمن أولًا، وتدرّب في مساحة خالية بعيدًا عن الأثاث.','Learn a safe exit first and practise in a clear space away from furniture.'))
    ],
    faqs:[
      faq(t('كيف أتعلم الوقوف على اليدين على الحائط؟','How do I learn a wall handstand?'),t('ابدأ بالبلانك والبايك على صندوق، ثم المشي على الحائط، ثم الثبات والبطن للحائط. انظر للأرض بين يديك وأبقِ ذراعيك ممدودتين.','Start with planks and box pikes, then wall walks, then chest-to-wall holds. Look at the floor between your hands and keep your arms straight.')),
      faq(t('هل الوقوف على اليدين يحتاج قوة أم توازن؟','Does a handstand need strength or balance?'),t('الاثنين. التوازن يأتي أساسًا من الرسغين والأصابع، والمراجعة العلمية وجدت أن الأقوى عضليًا توازنه أفضل.','Both. Balance comes mainly from the wrists and fingers, and the systematic review found stronger athletes balance better.')),
      faq(t('هل الوقوف على اليدين مضر للرسغ؟','Is the handstand bad for the wrists?'),t('الرسغ يحمل وزنك كله، وعضلاته هي الأعلى نشاطًا. أحمِه جيدًا، وابدأ بمدد قصيرة، وتوقف إذا شعرت بألم مستمر.','Your wrists carry your whole weight and their muscles are the most active. Warm them up well, start with short holds, and stop with lasting pain.')),
      faq(t('البطن للحائط أم الظهر للحائط؟','Chest to wall or back to wall?'),t('نقترح البطن للحائط للمبتدئ، لأنه يسهّل الجسم المستقيم ويقلل تقويس الظهر.','We suggest chest to wall for beginners, because it makes a straight line easier and reduces arching.')),
      faq(t('هل أستعمل الباراليتس للوقوف على اليدين؟','Should I use parallettes for handstands?'),t('ممكن لاحقًا، فهي تغيّر وضع الرسغ. لكن ابدأ على الأرض قرب الحائط حتى تتقن الأساس.','Later, perhaps; they change the wrist position. Start on the floor by the wall until you master the basics.'))
    ],
    related:['push-ups','parallettes','dips','beginner'],
    products:['steel-wood-parallettes','full-wooden-parallettes'],
    sources:['macdonald-handstand-2025','kochanowicz-handstand-2018','angioi-handstand-2026','wrist-2018','acsm-2026']
  },
  {
    slug:'more-pull-ups', reviewed:'2026-11-27',
    title:t('كيف تزيد عدد العقلة؟ برنامج بعد أول عقلة','How to Do More Pull-ups: A Plan After Your First Rep'),
    description:t('زد عدد العقلة بعد أول عقلة: المجموعات الأسبوعية، عدد الأيام، النزول البطيء، القبضات المختلفة، ومتى تضيف وزنًا، بحسب ACSM ومراجعات علمية.','Do more pull-ups after your first rep: weekly sets, training days, slow negatives, grip variety and when to add weight, based on ACSM and systematic reviews.'),
    tags:[t('سحب وقوة','Pulling strength'),t('متوسط','Intermediate'),t('بار عقلة','Pull-up bar')],
    lead:t('بعد أول عقلة، يأتي التقدم من مجموع العمل الذي تنجزه في الأسبوع، لا من محاولة أقصى عدد كل يوم. وزّع العقلات على مجموعات نظيفة، وأضف مجموعات تدريجيًا.','After your first pull-up, progress comes from total weekly work, not from maxing out every day. Spread your reps over clean sets and add sets gradually.'),
    summary:[
      t('المجموع الأسبوعي هو ما يهم: مكاسب القوة زادت مع عدد الجلسات بسبب زيادة الحجم، وعندما تساوى الحجم لم يفرق عدد الأيام {{grgic-frequency-2018}}.','Weekly total is what counts: strength gains rose with sessions because volume rose; with volume equal, the number of days made no difference {{grgic-frequency-2018}}.'),
      t('ACSM: 2–3 مجموعات، ومدى حركة كامل، وجلستان أسبوعيًا على الأقل للقوة، والتركيز على النزول يعزز النمو {{acsm-2026}}.','ACSM: 2–3 sets, a full range of motion and at least 2 sessions a week for strength, with eccentric emphasis for growth {{acsm-2026}}.'),
      t('لا تتمرن حتى العجز في كل مجموعة؛ لم يغيّر ذلك النتائج بشكل ثابت {{acsm-2026}}. قاعدة وثبة: أوقف المجموعة قبل العجز بعقلة أو اثنتين.','Do not go to failure every set; it did not reliably change results {{acsm-2026}}. WATHBA rule: end each set one or two reps short of failure.'),
      t('النزول البطيء أصعب ويسرّع اكتساب القوة {{ace-pull-up-moves}}، وأفضل طريقة لإضافة حجم بعد أن تنتهي عقلاتك الكاملة.','Slow negatives are harder and speed strength gains {{ace-pull-up-moves}}, a good way to add volume once your full reps run out.'),
      t('عندما تتجاوز 10 عقلات نظيفة، أضف وزنًا؛ العقلة بوزن إضافي هي آخر خطوة في سلّم ACE {{ace-progressions}}.','Past 10 clean pull-ups, add weight; weighted pull-ups are the last step in the ACE ladder {{ace-progressions}}.')
    ],
    images:{
      hero:{file:'dheeb-more-pull-ups-hero',character:'dheeb',pose:'front view mid pull-up on a plain black steel bar, elbows half bent, body straight and still, focused.',alt:t('ذيب في منتصف العقلة','Dheeb halfway through a pull-up')},
      muscles:{file:'muscles-more-pull-ups',character:'dheeb',pose:'back view at the top of a pull-up on a plain black steel bar, chin over the bar, elbows pulled down to his sides.',red:{strong:'the large back muscles (latissimus dorsi) and the biceps',light:'the area between the shoulder blades, the back of the shoulders and the forearms'},alt:t('ذيب في أعلى العقلة من الخلف، والعضلات العاملة ملوّنة بالأحمر','Dheeb at the top of a pull-up from behind with the working muscles shaded red')},
      mistake:{file:'sakhr-half-reps',character:'sakhr',pose:'on a plain black steel bar doing half reps: elbows still bent at the bottom, never reaching straight arms, chin far below the bar, rushing.',alt:t('صخر يعمل نصف عقلة دون أن يمد ذراعيه، وهذا خطأ شائع','Sakhr doing half reps without straightening his arms, a common mistake')},
      closing:{file:'sakhr-weighted-pull-up',character:'sakhr',pose:'front view doing a pull-up on a plain black steel bar while wearing a simple dip belt with a small weight plate hanging between his legs, proud.',alt:t('صخر يعمل عقلة بوزن إضافي','Sakhr doing a weighted pull-up')}
    },
    muscles:{
      primary:[t('الظهرية العريضة، الأعلى نشاطًا في العقلة {{youdas-2010}}','The lats, the most active muscle in the pull-up {{youdas-2010}}'),t('البايسبس، ويعمل أكثر في الشن-أب {{youdas-2010}}','The biceps, which work harder in the chin-up {{youdas-2010}}')],
      secondary:[t('شبه المنحرفة الوسطى، وتعمل أكثر مع القبضة العلوية {{dickie-2017}}','Middle trapezius, which works harder with an overhand grip {{dickie-2017}}'),t('الساعد والعضدية الكعبرية، وتعمل أكثر في الصعود {{dickie-2017}}','Forearms and brachioradialis, which work harder on the way up {{dickie-2017}}')],
      note:t('تغيير القبضة يغيّر توزيع العمل بين العضلات {{youdas-2010}} {{dickie-2017}}، لذلك ننوّع القبضات في البرنامج.','Changing grip shifts the work between muscles {{youdas-2010}} {{dickie-2017}}, which is why the plan varies grips.')
    },
    sections:[
      section('volume',t('السر في المجموع الأسبوعي','The secret is weekly volume'),
        t('مراجعة لـ22 دراسة وجدت أن من يتمرن أكثر في الأسبوع يكسب قوة أكثر، لكن لأنه ينجز عملًا أكثر؛ عندما تساوى الحجم لم يفرق عدد الأيام {{grgic-frequency-2018}}. ونمو العضلة يزيد مع كل مجموعة أسبوعية إضافية {{schoenfeld-volume-2017}}.','A review of 22 studies found people who train more often gain more strength, because they do more work; with volume equal, days made no difference {{grgic-frequency-2018}}. Muscle growth rises with each extra weekly set {{schoenfeld-volume-2017}}.'),
        t('عمليًا: إذا كان أقصى عدد لك 5 عقلات، فـ5 مجموعات من 3 عقلات نظيفة أفضل من محاولة الـ5 مرة واحدة. توزيع العقلات على مجموعات أقل من أقصاك قاعدة عملية من وثبة.','In practice: if your max is 5, five sets of 3 clean reps beat one all-out set of 5. Spreading reps over sets below your max is a WATHBA working rule.')),
      section('negatives',t('النزول البطيء لزيادة الحجم','Slow negatives to add volume'),
        t('النزول البطيء أصعب ويسرّع اكتساب القوة، مع احتمال ألم عضلي بعده {{ace-pull-up-moves}}. وACSM وجدت أن التركيز على مرحلة النزول يعزز نمو العضلة {{acsm-2026}}.','A slow descent is harder and speeds strength gains, with likely soreness afterwards {{ace-pull-up-moves}}. ACSM found eccentric emphasis enhances muscle growth {{acsm-2026}}.'),
        t('أضف 2–3 مجموعات نزول بطيء بعد مجموعاتك الكاملة، عندما لا تستطيع عقلة كاملة نظيفة أخرى.','Add 2–3 sets of slow negatives after your full sets, once you cannot do another clean full rep.')),
      section('grips',t('نوّع القبضة','Vary your grip'),
        t('في الشن-أب، والكفان نحوك، يعمل البايسبس والصدر أكثر؛ وفي العقلة بالقبضة العلوية تعمل شبه المنحرفة السفلية أكثر {{youdas-2010}}. والقبضة العلوية تشغّل منتصف شبه المنحرفة أكثر من المحايدة {{dickie-2017}}.','In a chin-up, palms facing you, the biceps and chest work harder; in an overhand pull-up the lower trapezius works harder {{youdas-2010}}. The overhand grip works the middle trapezius more than a neutral grip {{dickie-2017}}.'),
        t('في الشن-أب، اسحب الكتفين للخلف وللأسفل وأبقِ الرسغ مستقيمًا، ولا تضغط على كتفك {{ace-chin-up}}.','In the chin-up, draw the shoulders back and down, keep the wrists neutral, and never force the shoulder {{ace-chin-up}}.'))
    ],
    ladderNote:t('مراحل الحجم ونطاقات العقلات وعمود «انتقل عندما» قواعد عملية من وثبة مبنية على مبدأ زيادة الحجم {{grgic-frequency-2018}} {{schoenfeld-volume-2017}}؛ الوزن الإضافي من سلسلة ACE {{ace-progressions}}.','The volume stages, rep ranges and the “Move on when” column are WATHBA rules built on the principle of adding volume {{grgic-frequency-2018}} {{schoenfeld-volume-2017}}; added weight comes from the ACE chain {{ace-progressions}}.'),
    levels:[
      level(t('من 1 إلى 3 عقلات','1 to 3 reps'),t('5–6 مجموعات × 1–2، ثم 2 نزول بطيء','5–6 sets × 1–2, then 2 slow negatives'),t('عقلات منفردة نظيفة مع راحة كاملة.','Clean singles with full rest.'),t('تكمل 6 × 2.','You complete 6 × 2.')),
      level(t('من 4 إلى 6 عقلات','4 to 6 reps'),t('5 مجموعات × 3','5 sets × 3'),t('أوقف المجموعة قبل العجز بعقلة أو اثنتين {{acsm-2026}}.','Stop each set one or two reps short of failure {{acsm-2026}}.'),t('تكمل 5 × 4.','You complete 5 × 4.')),
      level(t('من 7 إلى 10 عقلات','7 to 10 reps'),t('4–5 مجموعات × 5–6','4–5 sets × 5–6'),t('نوّع بين العقلة والشن-أب في جلسات مختلفة {{youdas-2010}}.','Alternate pull-ups and chin-ups across sessions {{youdas-2010}}.'),t('تكمل 4 × 8.','You complete 4 × 8.')),
      level(t('أكثر من 10 عقلات','More than 10 reps'),t('3–4 مجموعات × 4–6 بوزن إضافي','3–4 sets × 4–6 with added weight'),t('ابدأ بوزن خفيف على حزام أو حقيبة {{ace-progressions}}.','Start with a light weight on a belt or backpack {{ace-progressions}}.'),t('تكمل 4 × 6، فزد الوزن قليلًا.','You complete 4 × 6; add a little weight.'))
    ],
    program:[
      t('جلستان إلى ثلاث للعقلة في الأسبوع، في بداية الجلسة بعد الإحماء، لأن التمارين في البداية تكسب قوة أكثر {{acsm-2026}}. هدفك الأول أن تصل لـ10 مجموعات أسبوعيًا أو أكثر للظهر {{acsm-2026}}.','Two or three pull-up sessions a week, first in the session after the warm-up, since early exercises gain more strength {{acsm-2026}}. Aim first for 10 or more weekly sets for the back {{acsm-2026}}.'),
      t('الراحة 2–3 دقائق بين مجموعات العقلة قاعدة من وثبة. اختبر أقصى عدد كل 4 أسابيع فقط، لا كل جلسة.','Resting 2–3 minutes between pull-up sets is a WATHBA rule. Test your max only every 4 weeks, not every session.')
    ],
    week:[
      day(t('الأحد','Sunday'),t('عقلة بقبضة علوية: مجموعات مرحلتك، ثم 2 نزول بطيء.','Overhand pull-ups: your stage sets, then 2 slow negatives.')),
      day(t('الثلاثاء','Tuesday'),t('شن-أب: مجموعات مرحلتك {{ace-chin-up}}.','Chin-ups: your stage sets {{ace-chin-up}}.')),
      day(t('الخميس','Thursday'),t('عقلة بقبضة علوية: نفس الأحد مع مجموعة إضافية إذا كانت سهلة.','Overhand pull-ups: like Sunday, adding a set if it felt easy.')),
      day(t('كل 4 أسابيع','Every 4 weeks'),t('اختبار أقصى عدد في بداية جلسة مرتاحة، ثم انتقل للمرحلة المناسبة.','A max test at the start of a fresh session, then move to the matching stage.'))
    ],
    mistakes:[
      mistake(t('محاولة أقصى عدد كل يوم.','Maxing out every day.'),t('التقدم من مجموع العمل الأسبوعي {{grgic-frequency-2018}}، لا من اختبار يومي.','Progress comes from total weekly work {{grgic-frequency-2018}}, not daily testing.')),
      mistake(t('نصف عقلة لزيادة العدد.','Half reps to pad the count.'),t('ابدأ كل عقلة من ذراعين ممدودتين {{ace-pull-up}}؛ المدى الكامل يبني قوة أكثر {{acsm-2026}}.','Start every rep from straight arms {{ace-pull-up}}; full range builds more strength {{acsm-2026}}.')),
      mistake(t('التأرجح والركل.','Swinging and kicking.'),t('اسحب دون تأرجح {{ace-pull-up}}. العقلة المتأرجحة لا تعدّ في هذا البرنامج.','Pull without swinging {{ace-pull-up}}. Kipping reps do not count in this plan.')),
      mistake(t('العجز في كل مجموعة.','Failure on every set.'),t('أوقف المجموعة قبل العجز؛ التمرين حتى الفشل لم يحسّن النتائج بشكل ثابت {{acsm-2026}}.','Stop short of failure; failure training did not reliably improve results {{acsm-2026}}.'))
    ],
    faqs:[
      faq(t('كيف أزيد عدد العقلة بسرعة؟','How can I increase my pull-ups quickly?'),t('زد مجموع العقلات النظيفة في الأسبوع بتوزيعها على مجموعات أقل من أقصى عدد لك، وأضف النزول البطيء، وتمرّن جلستين إلى ثلاث أسبوعيًا.','Raise your total clean reps per week by spreading them over sets below your max, add slow negatives, and train 2–3 times a week.')),
      faq(t('هل أتمرن على العقلة كل يوم لأزيد العدد؟','Should I do pull-ups every day to get more?'),t('ليس ضروريًا. مراجعة علمية وجدت أن الفائدة من مجموع العمل لا من عدد الأيام. جلستان إلى ثلاث بحجم كافٍ تكفي.','Not necessary. A systematic review found the benefit comes from total work, not the number of days. Two or three sessions with enough volume do the job.')),
      faq(t('كم مجموعة أعمل؟','How many sets should I do?'),t('ابدأ بـ4–6 مجموعات قصيرة في الجلسة، وارفع المجموع الأسبوعي تدريجيًا إلى 10 مجموعات أو أكثر، كما تذكر ACSM للنمو.','Start with 4–6 short sets per session and build the weekly total to 10 or more, as ACSM cites for growth.')),
      faq(t('متى أضيف وزنًا للعقلة؟','When should I add weight to pull-ups?'),t('عندما تتجاوز 10 عقلات نظيفة. العقلة بوزن إضافي هي آخر خطوة في سلّم ACE للتدرّج.','Once you pass 10 clean reps. Weighted pull-ups are the last step in the ACE progression ladder.')),
      faq(t('هل الشن-أب يساعد في زيادة العقلة؟','Do chin-ups help my pull-ups?'),t('نعم. الحركتان تشغّلان الظهرية العريضة بقوة، والشن-أب يضيف عملًا للبايسبس. التنويع يضيف حجمًا دون تكرار نفس الحمل.','Yes. Both work the lats hard, and chin-ups add biceps work. Alternating adds volume without repeating the same load.'))
    ],
    related:['first-pull-up','grip','weekly-plan','monkey-bars'],
    products:['wall-pull-up-bar','resistance-bands','grip-tape'],
    sources:['grgic-frequency-2018','acsm-2026','ace-pull-up-moves','ace-progressions','youdas-2010','dickie-2017','schoenfeld-volume-2017','ace-chin-up','ace-pull-up']
  }
];
