/* ============================================================
   iLovePhone Business Canvas Dashboard — DATA
   แก้ไขไฟล์นี้เพื่ออัปเดตสถานะ Dashboard
   Sub-Agent อัปเดตที่นี่ → CEO รีเฟรช = เห็นล่าสุด
   อัปเดตล่าสุด: 17 ก.ค. 2026 00:22
   ============================================================ */

/* ---------- BMC DATA ---------- */
const BMC = [
  {k:"a-kp",ico:"🤝",t:"Key Partners",sub:"คู่ค้าหลัก",items:[
    "OHO — gateway เชื่อม LINE OA @ilovephone (ฐาน 15k)",
    "Render — cloud hosting บอต (Pro, Starter ไม่หลับ)",
    "Pinecone — vector database (KB 2,969 ชุด)",
    "OpenAI — embedding + GPT engine",
    "LINE Platform — ช่องทางลูกค้าหลัก",
    "ผู้จัดจำหน่ายมือถือ/อะไหล่ + สถาบันสินเชื่อ",
    "พันธมิตรแฟรนไชส์ & Solar partner"]},
  {k:"a-ka",ico:"⚙️",t:"Key Activities",sub:"กิจกรรมหลัก",items:[
    "ขายมือถือใหม่ + รับซื้อ/ขายมือสอง",
    "งานซ่อมมือถือ (ราคากลางโปร่งใส)",
    "สินเชื่อ/ผ่อนชำระ",
    "สอน — คอร์สเรียนซ่อม (คอร์ส 1–4)",
    "ติดตั้งระบบบริหารร้าน + Solar",
    "พัฒนา/ดูแล AI Chatbot + KB"]},
  {k:"a-kr",ico:"🏛️",t:"Key Resources",sub:"ทรัพยากรหลัก",items:[
    "เครือข่ายสาขา + ทีมช่าง/แอดมิน",
    "แบรนด์ iLovePhone + ราคากลางทางการ 2,406 รายการ",
    "ระบบ IT: LINE bot, server.js, Pinecone KB",
    "ฐานความรู้ 2,969 vectors",
    "องค์ความรู้คอร์สสอนซ่อม + คู่มือ SOP"]},
  {k:"a-vp",ico:"❤️",t:"Value Propositions",sub:"คุณค่าที่ส่งมอบ",items:[
    "'บริการคือหัวใจ ไอเลิฟโฟน'",
    "ราคากลางโปร่งใส ตรวจสอบได้ ไม่บวกเกิน",
    "ผ่อนง่าย — บัตรประชาชนใบเดียว",
    "สะดวก ปลอดภัย ไม่เสียเวลา มั่นใจว่าเลือกถูก",
    "ตอบไว 24/7 ผ่าน AI + แอดมินคนจริง",
    "มาตรฐานเดียวกันทุกสาขา"]},
  {k:"a-cr",ico:"💬",t:"Customer Relationships",sub:"ความสัมพันธ์ลูกค้า",items:[
    "LINE Bot ตอบอัตโนมัติ 24/7 (grounded จาก KB จริง)",
    "Handoff ส่งต่อแอดมินคนจริงเคสเสี่ยง/ลูกค้าขอ",
    "บริการหลังการขาย + ติดตามงานซ่อม",
    "คอร์สเรียน — สร้างคอมมูนิตี้ช่าง"]},
  {k:"a-ch",ico:"📡",t:"Channels",sub:"ช่องทาง",items:[
    "หน้าร้านสาขา (Owned Branch)",
    "LINE OA @ilovephone / @lovephone-group",
    "เว็บ academy.lovephonegroup.com",
    "Facebook & โซเชียล",
    "เครือข่ายแฟรนไชส์ & Agent"]},
  {k:"a-cs",ico:"🎯",t:"Customer Segments",sub:"กลุ่มลูกค้า",items:[
    "ผู้ใช้มือถือทั่วไป (ซื้อ/ซ่อม/ผ่อน)",
    "ลูกค้ามือสอง (รับซื้อ-ขายแลกเปลี่ยน)",
    "ช่างซ่อม / ผู้อยากเรียนซ่อม",
    "ผู้สนใจลงทุนแฟรนไชส์ร้านมือถือ",
    "ลูกค้า Solar / ระบบบริหารร้าน"]},
  {k:"a-co",ico:"💸",t:"Cost Structure",sub:"โครงสร้างต้นทุน",items:[
    "ค่าเช่าสาขา + ค่าตกแต่ง",
    "เงินเดือนพนักงาน/ช่าง/แอดมิน",
    "ต้นทุนสต็อกเครื่อง + อะไหล่",
    "IT: Render + Pinecone + OpenAI + โดเมน",
    "การตลาด/คอนเทนต์ + ต้นทุนสินเชื่อ"]},
  {k:"a-rv",ico:"💰",t:"Revenue Streams",sub:"แหล่งรายได้",items:[
    "ขายมือถือใหม่ + มือสอง (margin)",
    "ค่าบริการซ่อม (ตามราคากลาง)",
    "ดอกเบี้ย/ค่าธรรมเนียมผ่อน",
    "ค่าธรรมเนียมแฟรนไชส์ + royalty",
    "ค่าคอร์สเรียนซ่อม",
    "ขาย/ติดตั้ง Solar + ระบบบริหารร้าน"]}
];

/* ---------- AGENTS DATA ---------- */
const AGENTS = [
  {av:"💰",name:'CFO · "ร่ำรวย"',role:"การเงิน · Cash Flow · ROI",duty:"กางตัวเลข ดูต้นทุน กำไร ราคา และความคุ้มค่าทุกการลงทุน",task:"<b>ราคากลาง</b> 2,406 รายการ · <b>บัญชีพาร์ตเนอร์</b> MASTER เสร็จ · <b>สาขาแม่ริม</b> รอเริ่ม",st:"standby",stt:"Standby",q:'"เดี๋ยวผมกางตัวเลขให้ก่อนนะครับท่าน คุ้มไม่คุ้มรู้กัน 💸"'},
  {av:"📋",name:'COO · "ระเบียบ"',role:"ปฏิบัติการ · SOP · มาตรฐานสาขา",duty:"วางขั้นตอนให้ทำซ้ำได้เป๊ะทุกสาขา ดูแลงานติดตั้งระบบ",task:"<b>Handoff</b> แผนเสร็จ ✅ · <b>OHO Migration</b> แผนเสร็จ",st:"wait",stt:"รอเริ่ม",q:'"ขอจัดเป็นขั้นเป็นตอนนะคะ จะได้ทำซ้ำได้เป๊ะทุกสาขา ✅"'},
  {av:"💻",name:'CTO · "โค้ด"',role:"เทคนิค · บอต · Server · DNS",duty:"ดูแลบอต LINE, server, automation, โดเมน/DNS",task:"<b>Staff Dashboard</b> v2 ✅ · <b>OCR Stock</b> ✅ · <b>Handoff</b> LIVE ✅ · domain ✅ · lead ✅",st:"active",stt:"Staff Dashboard v2 เสร็จ",q:'"เรื่องนี้จิ๊บ ๆ ค่ะพี่ เดี๋ยวหนูจัดให้ 🛠️"'},
  {av:"🎨",name:'CMO · "ปัง"',role:"การตลาด · คอนเทนต์ · แบรนด์",duty:"คิดแคมเปญ คอนเทนต์ และดูแลภาพลักษณ์แบรนด์",task:"<b>คอนเทนต์ Academy</b> ทุกวัน 07:30 + FB post · <b>แบรนด์</b> + โซเชียล",st:"active",stt:"คอนเทนต์ทุกวัน",q:'"อันนี้ต้องปังค่ะพี่! เดี๋ยวหนูคิดมุมสนุก ๆ ให้ ✨"'},
  {av:"🚀",name:'Growth · "ไกล"',role:"กลยุทธ์ · ขยายสาขา · แฟรนไชส์",duty:"มองยาว 3-5-10 ปี วางหมากขยายเครือข่ายทั่วประเทศ",task:"<b>สาขาแม่ริม</b> กำลังเปิด · <b>Business Canvas Dashboard</b> ✅ · roadmap แฟรนไชส์",st:"active",stt:"เปิดสาขาแม่ริม",q:'"มองไกลไว้ก่อนครับ ปีนี้วางหมาก ปีหน้าขยาย 🌏"'},
  {av:"🛡️",name:'Legal/Risk · "กันชน"',role:"กฎหมาย · สัญญา · ความเสี่ยง",duty:"เป็นกันชนให้ CEO เตือนความเสี่ยงตรง ๆ ก่อนตัดสินใจ",task:"<b>สัญญาแฟรนไชส์</b> · PDPA ข้อมูลลูกค้า OHO",st:"standby",stt:"Standby",q:'"ขอเบรกตรงนี้ก่อนครับ มีความเสี่ยงที่ต้องชั่งน้ำหนัก ⚠️"'}
];

/* ---------- TIMELINE DATA ---------- */
const TL = {
  past:[
    {when:"พ.ค.–มิ.ย. 2026",t:"รากฐาน AI Chatbot",items:["วางสถาปัตยกรรม LINE-first + n8n MVP","ติดตั้ง n8n LaunchAgent บน Mac","ออกแบบ schema lead + intent router"],badge:"foundation"},
    {when:"24 มิ.ย. 2026",t:"ตั้งโปรเจกต์ + ราคากลาง",items:["ตั้งโฟลเดอร์โปรเจกต์เป็น source of truth","เริ่ม ingest ความรู้เข้า KB","วางระบบ daily-notes"],badge:"setup"},
    {when:"25 มิ.ย. 2026",t:"ขึ้น Cloud สมบูรณ์",items:["เขียน server.js เอง (Express+Pinecone+GPT)","Deploy Render — ilovephone-line-bot (Starter ไม่หลับ)","ราคากลางทางการ 2,406 รายการเข้า KB","KB รวม 2,969 vectors + คอร์ส 1–4"],badge:"milestone"},
    {when:"25 มิ.ย. 2026",t:"ตั้งทีม AI C-level",items:["CEO อนุมัติ roster 6 agent + คาแรกเตอร์","วาง owner map ใน _INDEX.md","บอตตอบจริงผ่าน LINE — ราคา+ผ่อน ✓"],badge:"team"},
    {when:"27 มิ.ย. 2026",t:"เว็บ Academy ✅",items:["academy.lovephonegroup.com → WordPress สำเร็จ","DNS A records + SSL เขียว + HTTP 200","เจ้าของ: CTO·โค้ด"],badge:"launch"},
    {when:"27 มิ.ย. 2026",t:"Lead Capture ✅",items:["เก็บ lead จาก LINE bot ลง Google Sheet","detectIntent 5 ประเภท (ผ่อน/คอร์ส/รับซื้อ/ซ่อม/ซื้อ)","deploy + ทดสอบสำเร็จบน Render"],badge:"launch"},
    {when:"27 มิ.ย. 2026",t:"Handoff System — โค้ดเสร็จ ✅",items:["ระบบส่งต่อบอท→แอดมิน ครบ 8 ข้อ","State machine: BOT→PENDING→HUMAN + auto-release 30 นาที","แจ้งกลุ่ม LINE + buttons [รับเคส][ดูแชท]","เจ้าของ: CTO·โค้ด · deploy + ทดสอบผ่าน"],badge:"launch"},
    {when:"28 มิ.ย. 2026",t:"เว็บกลยุทธ์แยก Academy/Business",items:["ทีมโหวต 3-0 แยกเว็บ","Academy: academy.lovephonegroup.com (WordPress)","Business: business.lovephonegroup.com (รอเริ่ม)","DNS ผ่าน LnwShop — A Record → WordPress.com"],badge:"milestone"},
    {when:"29 มิ.ย. 2026",t:"Business Canvas Dashboard ✅",items:["Dashboard BMC + Agent Center + Timeline","3 มิติ: อดีต · ปัจจุบัน · อนาคต","เจ้าของ: Growth·ไกล"],badge:"launch"},
    {when:"3 ก.ค. 2026",t:"Agent Team Dashboard v3 ✅",items:["Dashboard + Google Sheets Backend","SVG Workflow Diagram + เส้นกระพริบ Active Agent","เจ้าของ: CTO·โค้ด"],badge:"launch"},
    {when:"4 ก.ค. 2026",t:"OCR Stock System ✅",items:["ถ่ายรูปใบเสร็จ/IMEI → แปลงเป็นสต๊อก","Google Cloud Vision API + Google Sheets","Deploy บน Render เดิม ค่าเพิ่ม $0"],badge:"launch"},
    {when:"10 ก.ค. 2026",t:"Timeline 10 Web Platforms ✅",items:["เพิ่ม Milestone 6 เว็บในเครือ iLovePhone","SVG Workflow + เส้นกระพริบ Active Agent"],badge:"milestone"},
    {when:"13 ก.ค. 2026",t:"เปิดสาขา ปตท.แม่ริม",items:["แฟรนไชส์ใหม่ บันทึกตั้งแต่วันแรก","โครงสร้างไฟล์ template สำหรับสาขาถัดไป","เจ้าของ: Growth·ไกล"],badge:"milestone"},
    {when:"16 ก.ค. 2026",t:"Staff Dashboard ผ่อนมือถือ ✅",items:["ระบบติดตามไฟแนนซ์ลูกค้า ผ่อนมือถือเชียงใหม่.com/staff","Login + แยกสิทธิ์ Admin/Staff + RLS + PDF","SECURITY DEFINER functions 7 ตัว bypass RLS","แยกยี่ห้อ 18 แบรนด์ + dropdown"],badge:"launch"},
    {when:"17 ก.ค. 2026",t:"Staff Dashboard v2 ✅",items:["แก้ RLS infinite recursion + Google OAuth","ลบ Lovable branding (favicon + tagger)","เพิ่มตัวกรองวันที่ + ดาวน์โหลด CSV (Admin)","แยกคอลัมน์ยี่ห้อ/รุ่น ค้นหาง่ายขึ้น"],badge:"launch"}
  ],
  now:[
    {when:"กำลังทำ",t:"Staff Dashboard — งานค้าง",items:["แก้ Supabase URL Config (Punycode ถูกต้อง)","เพิ่ม mr.khunphol@gmail.com เป็น Google OAuth test user","ทดสอบ Google Login หลังแก้ URL"],owner:"CEO",progress:60},
    {when:"กำลังทำ",t:"เปิดสาขา ปตท.แม่ริม",items:["โคลนระบบบัญชี MASTER จาก 89 พลาซ่า","SOP/มาตรฐานสาขา/อุปกรณ์","ระบบ IT (SeniorSoft/LINE/ปิดยอด)","สัญญาแฟรนไชส์/ใบอนุญาต","บันทึกค่าใช้จ่ายทุกบาทตั้งแต่วันแรก"],owner:"Growth·ไกล + ทุก Agent",progress:15},
    {when:"แผนเสร็จ",t:"OHO Migration",items:["ย้าย @ilovephone (ฐาน 15k) มาบอตใหม่","ผ่าน OHO gateway — ระวังข้อมูล/PDPA","รอ CEO อนุมัติเริ่ม"],owner:"CTO·โค้ด + COO·ระเบียบ",progress:10},
    {when:"รอข้อมูล",t:"ระบบบัญชีพาร์ตเนอร์ 89 พลาซ่า",items:["รอข้อมูลครบ 3–6 เดือนจาก CEO","MASTER 10 ชีท + ARCHITECTURE.md เสร็จแล้ว"],owner:"CFO·ร่ำรวย",progress:20}
  ],
  future:[
    {when:"ระยะ 1 ปี",t:"ปักหมุดมาตรฐาน",items:["ทำ SOP สาขาให้ทำซ้ำได้เป๊ะ","AI Bot ครบทุก use-case (ขาย/ซ่อม/ผ่อน)","ปิด migration OHO + รวมฐานลูกค้า 15k","Dashboard การเงิน/ปฏิบัติการเรียลไทม์"]},
    {when:"ระยะ 3 ปี",t:"ขยายเครือข่าย",items:["เปิดแฟรนไชส์หลายจังหวัด","ระบบบริหารร้านมือถือเป็นสินค้าขาย","Academy ป้อนช่างเข้าระบบสาขา","Solar เป็นสายรายได้เสริมที่ชัดเจน"]},
    {when:"ระยะ 5 ปี",t:"แบรนด์ที่ลูกค้าไว้ใจที่สุด",items:["เครือข่าย iLovePhone ทั่วประเทศ","Owned + Franchise + Partner + Agent มาตรฐานเดียว","แพลตฟอร์มบริหารร้านมือถือระดับประเทศ","องค์กรยั่งยืน มีระบบ มีกำไร ขยายได้"]}
  ]
};

/* ---------- DASHBOARD META ---------- */
const DASH_META = {
  updatedAt: "17 ก.ค. 2026 00:22",
  updatedBy: "น้องเลิฟ"
};
