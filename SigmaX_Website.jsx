import { useState, useEffect } from "react";

const C = {
  red: '#D32F2F', redDk: '#B71C1C', redLt: '#FFEBEE',
  navy: '#1A2340', navyDk: '#111827',
  white: '#FFFFFF', offWhite: '#F7F8FA',
  gray: '#64748B', grayLt: '#E2E8F0', text: '#1A2340'
};

const FF = "'Prompt','Sarabun',system-ui,sans-serif";
const FB = "'Sarabun',system-ui,sans-serif";

const DEFAULT = {
  hero: {
    headline: "เติบโตอย่างเป็นระบบ",
    subheadline: "ปลอดภัย ยั่งยืน และแข่งขันได้",
    body: "SigmaX คือกลุ่มธุรกิจที่ช่วยองค์กรเติบโตอย่างเป็นระบบ ปลอดภัย ยั่งยืน และแข่งขันได้ ในรูปแบบที่ปรึกษาและหน่วยธุรกิจเฉพาะทาง",
    cta1: "ดูบริการของเรา",
    cta2: "ปรึกษาฟรี"
  },
  about: {
    title: "บริษัทที่ปรึกษาและผู้ขับเคลื่อนผลลัพธ์",
    body: "เราไม่ใช่เอเจนซี่รับงานทั่วไป แต่คือพาร์ทเนอร์เชิงกลยุทธ์ที่ทำงานด้วยข้อมูล โครงสร้าง และมาตรฐาน เพื่อให้เกิดผลลัพธ์จริง ไม่ใช่แค่ทฤษฎี",
    stat1: "4", stat1label: "Business Units",
    stat2: "50+", stat2label: "โครงการสำเร็จ",
    stat3: "EEC", stat3label: "พื้นที่เชี่ยวชาญ",
    stat4: "3", stat4label: "อุตสาหกรรมหลัก"
  },
  bu: [
    {
      name: "SigmaX Digital Hub",
      label: "Growth & Technology",
      desc: "แก้ปัญหาช่องทางดิจิทัล สร้างระบบคอนเทนต์และยอดขายออนไลน์ที่เติบโตได้จริง",
      pains: "เพจธุรกิจดูไม่น่าเชื่อถือ,ยิงแอดไม่คุ้มค่า ไม่มีคนทัก,ไม่มีระบบคอนเทนต์ที่ต่อเนื่อง,ยอดขายออนไลน์ไม่เติบโต",
      color: C.red, accent: "#FF5252"
    },
    {
      name: "SigmaX Industrial Advisory",
      label: "Risk & Compliance",
      desc: "ระบบ EH&S ที่แน่น กฎหมายและมาตรฐานโรงงาน ลดความเสี่ยงในอุตสาหกรรมอย่างยั่งยืน",
      pains: "ระบบ EH&S ยังไม่แน่น,ไม่มั่นใจเรื่องกฎหมายและสารเคมี,ต้องการลดความเสี่ยงอุบัติเหตุ,ไม่สอดคล้องมาตรฐานโรงงาน",
      color: C.navy, accent: "#4A6FA5"
    },
    {
      name: "SigmaX ESG Advisory",
      label: "Sustainability & Standards",
      desc: "Carbon Footprint, ISO มาตรฐาน ESG ยกระดับความน่าเชื่อถือและความยั่งยืนให้ธุรกิจคุณ",
      pains: "ต้องทำ Carbon Footprint แต่ไม่รู้เริ่มยังไง,ลูกค้าเริ่มขอข้อมูล ESG,ต้องการยกระดับมาตรฐาน,สร้างความน่าเชื่อถือให้ธุรกิจ",
      color: "#2E7D32", accent: "#4CAF50"
    },
    {
      name: "SigmaX Ventures",
      label: "Investment & Brands",
      desc: "สร้างแบรนด์ใหม่ ธุรกิจ F&B และโมเดลธุรกิจที่เติบโตได้ ด้วยทีมผู้เชี่ยวชาญที่ลงมือปฏิบัติ",
      pains: "อยากสร้างแบรนด์ใหม่แต่ขาดคนช่วยคิด,อยากทำธุรกิจ F&B อย่างเป็นระบบ,อยากมีทีมช่วยปั้นโมเดลธุรกิจ,ต้องการพาร์ทเนอร์เชิงกลยุทธ์",
      color: "#6A1B9A", accent: "#AB47BC"
    }
  ],
  contact: {
    title: "พร้อมเริ่มต้นหรือยัง?",
    body: "ปรึกษาผู้เชี่ยวชาญได้ฟรีในการนัดหมายครั้งแรก ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด",
    email: "hello@sigmax.co.th",
    phone: "+66 XX-XXX-XXXX",
    line: "@sigmax",
    address: "ชลบุรี / EEC, ประเทศไทย"
  },
  footer: {
    tagline: "Growing Businesses. Systematically.",
    copy: "© 2025 SigmaX Group. All rights reserved."
  }
};

function AdminField({ label, value, onChange, multiline }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: C.gray, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>
        {label}
      </label>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={3}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${C.grayLt}`, fontSize: 14, fontFamily: FB, resize: "vertical", boxSizing: "border-box", lineHeight: 1.6, outline: "none" }} />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${C.grayLt}`, fontSize: 14, fontFamily: FB, boxSizing: "border-box", outline: "none" }} />
      )}
    </div>
  );
}

export default function App() {
  const [c, setC] = useState(DEFAULT);
  const [adminOpen, setAdminOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [pw, setPw] = useState("");
  const [tab, setTab] = useState("hero");
  const [draft, setDraft] = useState(null);
  const [saved, setSaved] = useState(false);
  const [cpClicks, setCpClicks] = useState(0);
  const [hovBU, setHovBU] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", bu: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = "@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;600;700;900&family=Sarabun:wght@300;400;500;700&display=swap');";
    document.head.appendChild(s);
    (async () => {
      try {
        const r = await window.storage.get("sx_v1_content");
        if (r) setC(JSON.parse(r.value));
      } catch {}
    })();
  }, []);

  const saveContent = async (newC) => {
    try {
      await window.storage.set("sx_v1_content", JSON.stringify(newC));
      setC(newC); setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {}
  };

  const openAdmin = () => { setDraft(JSON.parse(JSON.stringify(c))); setAdminOpen(true); };

  const handleLogin = () => {
    if (pw === "sigmax2024") { openAdmin(); setLoginOpen(false); setPw(""); }
    else alert("รหัสผ่านไม่ถูกต้อง");
  };

  const handleCpClick = () => {
    const n = cpClicks + 1; setCpClicks(n);
    if (n >= 5) { setLoginOpen(true); setCpClicks(0); }
  };

  const upDraft = (sec, field, val) => setDraft(p => ({ ...p, [sec]: { ...p[sec], [field]: val } }));
  const upBU = (i, field, val) => setDraft(p => { const bu = [...p.bu]; bu[i] = { ...bu[i], [field]: val }; return { ...p, bu }; });

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email) { alert("กรุณากรอกชื่อและอีเมล"); return; }
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", email: "", phone: "", bu: "" });
  };

  const BtnRed = ({ children, onClick, style = {} }) => (
    <button onClick={onClick} style={{ background: C.red, color: C.white, border: "none", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: FB, ...style }}>{children}</button>
  );

  return (
    <div style={{ fontFamily: FB, color: C.text, overflowX: "hidden", background: C.white }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: C.navy, height: 66, padding: "0 6%", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 24px rgba(0,0,0,0.35)" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: FF, fontWeight: 900, fontSize: 24, color: C.red, letterSpacing: -1 }}>Sigma</span>
          <span style={{ fontFamily: FF, fontWeight: 900, fontSize: 24, color: C.white, letterSpacing: -1 }}>X</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["หน้าหลัก", "บริการ", "เกี่ยวกับเรา", "Insights"].map(l => (
            <span key={l} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{l}</span>
          ))}
          <BtnRed style={{ padding: "9px 22px", fontSize: 14 }}>ติดต่อเรา</BtnRed>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{ background: C.navy, minHeight: "92vh", display: "flex", alignItems: "center", padding: "80px 6%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-8%", top: "5%", width: 560, height: 560, borderRadius: "50%", border: "90px solid rgba(211,47,47,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "4%", top: "28%", width: 320, height: 320, borderRadius: "50%", border: "48px solid rgba(211,47,47,0.11)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "55%", bottom: "12%", width: 240, height: 2, background: "rgba(211,47,47,0.25)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "55%", bottom: "16%", width: 120, height: 2, background: "rgba(211,47,47,0.15)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 720, position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-block", background: "rgba(211,47,47,0.14)", border: "1px solid rgba(211,47,47,0.4)", color: "#FF8A80", borderRadius: 4, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: 2.5, marginBottom: 28, textTransform: "uppercase" }}>
            Business Consulting &amp; Advisory Group
          </div>
          <h1 style={{ fontFamily: FF, fontWeight: 900, fontSize: "clamp(52px,7vw,84px)", color: C.white, lineHeight: 1.05, marginBottom: 12 }}>{c.hero.headline}</h1>
          <h2 style={{ fontFamily: FF, fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", color: C.red, lineHeight: 1.05, marginBottom: 32 }}>{c.hero.subheadline}</h2>
          <p style={{ fontSize: 18, lineHeight: 1.85, color: "rgba(255,255,255,0.72)", marginBottom: 44, maxWidth: 580 }}>{c.hero.body}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <BtnRed style={{ padding: "15px 36px", fontSize: 16 }}>{c.hero.cta1}</BtnRed>
            <button style={{ background: "transparent", color: C.white, border: "1.5px solid rgba(255,255,255,0.38)", borderRadius: 8, padding: "15px 36px", fontWeight: 600, fontSize: 16, cursor: "pointer", fontFamily: FB }}>{c.hero.cta2}</button>
          </div>
        </div>
      </section>

      <div style={{ height: 5, background: `linear-gradient(90deg,${C.red},${C.redDk} 55%,${C.navy})` }} />

      {/* ─── ABOUT ─── */}
      <section style={{ padding: "88px 6%", background: C.offWhite }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", gap: "6%", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 400px" }}>
            <div style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Who We Are</div>
            <h2 style={{ fontFamily: FF, fontWeight: 800, fontSize: "clamp(28px,3vw,38px)", color: C.navy, lineHeight: 1.2, marginBottom: 20 }}>{c.about.title}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: C.gray, marginBottom: 40 }}>{c.about.body}</p>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[[c.about.stat1, c.about.stat1label],[c.about.stat2, c.about.stat2label],[c.about.stat3, c.about.stat3label],[c.about.stat4, c.about.stat4label]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FF, fontWeight: 900, fontSize: 38, color: C.red, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: C.gray, fontWeight: 500, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 340px" }}>
            {[
              { title: "น่าเชื่อถือ & ฉลาด", desc: "นำเสนอด้วยข้อมูล ความรู้เชิงลึก และความเชี่ยวชาญระดับมืออาชีพ" },
              { title: "เป็นระบบ & ทันสมัย", desc: "มีโครงสร้าง มีแบบแผน ชัดเจน และปรับตัวเข้ากับยุคดิจิทัลเสมอ" },
              { title: "ลงมือทำได้จริง", desc: "ไม่ใช่แค่ทฤษฎี แต่ให้ผลลัพธ์ที่จับต้องได้และนำไปใช้ได้ทันที" }
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20, padding: "20px 22px", background: C.white, borderRadius: 12, borderLeft: `4px solid ${C.red}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: C.red, marginTop: 7, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: C.navy, marginBottom: 5 }}>{v.title}</div>
                  <div style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS UNITS ─── */}
      <section style={{ padding: "88px 6%", background: C.white }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Our Services</div>
            <h2 style={{ fontFamily: FF, fontWeight: 900, fontSize: 44, color: C.navy }}>4 Business Units</h2>
            <p style={{ fontSize: 17, color: C.gray, marginTop: 12 }}>เลือกหน่วยธุรกิจที่ตรงกับความต้องการและปัญหาของคุณ</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {c.bu.map((bu, i) => (
              <div key={i} onMouseEnter={() => setHovBU(i)} onMouseLeave={() => setHovBU(null)}
                style={{ borderRadius: 16, overflow: "hidden", transition: "transform .22s,box-shadow .22s", transform: hovBU === i ? "translateY(-7px)" : "none", boxShadow: hovBU === i ? "0 20px 52px rgba(0,0,0,0.17)" : "0 4px 22px rgba(0,0,0,0.08)", cursor: "pointer" }}>
                <div style={{ background: bu.color, padding: "28px 24px 22px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: 8 }}>{bu.label}</div>
                  <h3 style={{ fontFamily: FF, fontWeight: 800, fontSize: 19, color: C.white, lineHeight: 1.3 }}>{bu.name}</h3>
                </div>
                <div style={{ background: C.white, padding: "20px 24px 28px", borderTop: `3px solid ${bu.accent || bu.color}` }}>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.75, marginBottom: 18 }}>{bu.desc}</p>
                  <div style={{ fontSize: 11, fontWeight: 700, color: C.navy, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>ปัญหาที่เราแก้</div>
                  {bu.pains.split(",").map((p, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 7 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: bu.color, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "#52525B", lineHeight: 1.55 }}>{p.trim()}</span>
                    </div>
                  ))}
                  <button style={{ marginTop: 22, width: "100%", background: "transparent", color: bu.color, border: `1.5px solid ${bu.color}`, borderRadius: 8, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: FB }}>
                    ดูรายละเอียด →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US BANNER ─── */}
      <section style={{ background: C.navy, padding: "88px 6%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "6%", top: "15%", width: 360, height: 360, borderRadius: "50%", border: "70px solid rgba(211,47,47,0.07)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Why SigmaX</div>
          <h2 style={{ fontFamily: FF, fontWeight: 900, fontSize: "clamp(34px,5vw,50px)", color: C.white, lineHeight: 1.15, marginBottom: 20 }}>
            เราไม่ใช่แค่<span style={{ color: C.red }}> เอเจนซี่</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, marginBottom: 44 }}>
            เราคือพาร์ทเนอร์เชิงกลยุทธ์ที่ทำงานด้วยข้อมูล โครงสร้าง และมาตรฐาน ให้คำปรึกษาพร้อมลงมือปฏิบัติจริง
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {["Growth", "Intelligence", "Advisory", "Strategy", "Performance", "Standards", "Business Outcomes"].map(kw => (
              <span key={kw} style={{ background: "rgba(211,47,47,0.14)", border: "1px solid rgba(211,47,47,0.35)", color: "#FF8A80", borderRadius: 6, padding: "7px 16px", fontSize: 13, fontWeight: 600 }}>{kw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section style={{ padding: "88px 6%", background: C.offWhite }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", gap: "6%", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 380px", marginBottom: 24 }}>
            <div style={{ color: C.red, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Contact Us</div>
            <h2 style={{ fontFamily: FF, fontWeight: 800, fontSize: 40, color: C.navy, marginBottom: 16, lineHeight: 1.15 }}>{c.contact.title}</h2>
            <p style={{ fontSize: 17, color: C.gray, lineHeight: 1.85, marginBottom: 36 }}>{c.contact.body}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[["✉", c.contact.email], ["☎", c.contact.phone], ["●", `LINE: ${c.contact.line}`], ["◎", c.contact.address]].map(([ic, tx]) => (
                <div key={tx} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: C.redLt, display: "flex", alignItems: "center", justifyContent: "center", color: C.red, fontSize: 16, flexShrink: 0 }}>{ic}</div>
                  <span style={{ fontSize: 15, color: C.navy, fontWeight: 500 }}>{tx}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 380px" }}>
            <div style={{ background: C.white, borderRadius: 18, padding: "36px", boxShadow: "0 8px 44px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontFamily: FF, fontWeight: 800, fontSize: 22, color: C.navy, marginBottom: 26 }}>นัด Kickoff Brief กับทีมเรา</h3>
              {formSent ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <div style={{ fontFamily: FF, fontWeight: 700, fontSize: 22, color: C.navy, marginBottom: 10 }}>ส่งข้อมูลสำเร็จ!</div>
                  <div style={{ fontSize: 15, color: C.gray }}>ทีมงาน SigmaX จะติดต่อกลับภายใน 24 ชั่วโมง</div>
                </div>
              ) : (
                <>
                  {[{ label: "ชื่อ-นามสกุล *", key: "name", type: "text", ph: "คุณชื่ออะไร?" }, { label: "อีเมล *", key: "email", type: "email", ph: "email@company.com" }, { label: "เบอร์โทรศัพท์", key: "phone", type: "tel", ph: "08X-XXX-XXXX" }].map(f => (
                    <div key={f.key} style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} value={formData[f.key]} onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1.5px solid ${C.grayLt}`, fontSize: 15, fontFamily: FB, boxSizing: "border-box", outline: "none" }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 6 }}>หน่วยธุรกิจที่สนใจ</label>
                    <select value={formData.bu} onChange={e => setFormData(p => ({ ...p, bu: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: `1.5px solid ${C.grayLt}`, fontSize: 15, fontFamily: FB, background: C.white, boxSizing: "border-box" }}>
                      <option value="">เลือก Business Unit</option>
                      {c.bu.map(b => <option key={b.name}>{b.name}</option>)}
                    </select>
                  </div>
                  <BtnRed onClick={handleFormSubmit} style={{ width: "100%", padding: "14px", fontSize: 16 }}>ส่งข้อมูลติดต่อ →</BtnRed>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: C.navyDk, padding: "52px 6% 28px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 36, marginBottom: 44 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontFamily: FF, fontWeight: 900, fontSize: 30, color: C.red }}>Sigma</span>
                <span style={{ fontFamily: FF, fontWeight: 900, fontSize: 30, color: C.white }}>X</span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 240, lineHeight: 1.7 }}>{c.footer.tagline}</p>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 18 }}>Business Units</div>
              {c.bu.map(b => <div key={b.name} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 9, lineHeight: 1.5 }}>{b.name}</div>)}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 18 }}>ติดต่อเรา</div>
              {[c.contact.email, c.contact.phone, `LINE: ${c.contact.line}`, c.contact.address].map(t => (
                <div key={t} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 9, lineHeight: 1.5 }}>{t}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span onClick={handleCpClick} style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", cursor: "default", userSelect: "none" }} title="© Click 5× to open admin">{c.footer.copy}</span>
            <div style={{ display: "flex", gap: 28 }}>
              {["Privacy Policy", "Terms of Use"].map(l => (
                <span key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── LOGIN MODAL ─── */}
      {loginOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
          <div style={{ background: C.white, borderRadius: 18, padding: "44px 40px", width: 380, boxShadow: "0 28px 88px rgba(0,0,0,0.5)" }}>
            <div style={{ fontFamily: FF, fontWeight: 800, fontSize: 24, color: C.navy, marginBottom: 8 }}>🔐 Admin Access</div>
            <p style={{ fontSize: 14, color: C.gray, marginBottom: 26 }}>กรุณาใส่รหัสผ่านเพื่อเข้าสู่ระบบ CMS</p>
            <input type="password" placeholder="รหัสผ่าน" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: `1.5px solid ${C.grayLt}`, fontSize: 15, fontFamily: FB, marginBottom: 16, boxSizing: "border-box", outline: "none" }} />
            <div style={{ display: "flex", gap: 12 }}>
              <BtnRed onClick={handleLogin} style={{ flex: 1, padding: "12px" }}>เข้าสู่ระบบ</BtnRed>
              <button onClick={() => { setLoginOpen(false); setPw(""); }} style={{ flex: 1, background: C.offWhite, color: C.gray, border: "none", borderRadius: 8, padding: "12px", fontWeight: 600, fontSize: 15, cursor: "pointer", fontFamily: FB }}>ยกเลิก</button>
            </div>
            <p style={{ fontSize: 11, color: C.grayLt, textAlign: "center", marginTop: 16 }}>Default: sigmax2024</p>
          </div>
        </div>
      )}

      {/* ─── ADMIN CMS PANEL ─── */}
      {adminOpen && draft && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 201, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: 520, background: C.white, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "-10px 0 48px rgba(0,0,0,0.25)" }}>

            {/* CMS Header */}
            <div style={{ background: C.navy, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div>
                <div style={{ fontFamily: FF, fontWeight: 700, fontSize: 17, color: C.white }}>⚙ SigmaX CMS</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>แก้ไขเนื้อหาเว็บไซต์</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => saveContent(draft)} style={{ background: saved ? "#2E7D32" : C.red, color: C.white, border: "none", borderRadius: 8, padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: FB, transition: "background .3s" }}>
                  {saved ? "✓ บันทึกแล้ว" : "บันทึก"}
                </button>
                <button onClick={() => setAdminOpen(false)} style={{ background: "rgba(255,255,255,0.1)", color: C.white, border: "none", borderRadius: 8, padding: "8px 14px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>✕</button>
              </div>
            </div>

            {/* Tab Bar */}
            <div style={{ display: "flex", borderBottom: `2px solid ${C.grayLt}`, overflowX: "auto", flexShrink: 0, background: C.offWhite }}>
              {[{ k: "hero", l: "Hero" }, { k: "about", l: "About" }, { k: "bu", l: "BU" }, { k: "contact", l: "Contact" }, { k: "footer", l: "Footer" }].map(t => (
                <button key={t.k} onClick={() => setTab(t.k)} style={{ padding: "12px 20px", border: "none", background: "none", fontWeight: tab === t.k ? 700 : 500, color: tab === t.k ? C.red : C.gray, borderBottom: `2px solid ${tab === t.k ? C.red : "transparent"}`, marginBottom: -2, cursor: "pointer", whiteSpace: "nowrap", fontSize: 13, fontFamily: FB }}>
                  {t.l}
                </button>
              ))}
            </div>

            {/* Edit Area */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px 22px" }}>

              {tab === "hero" && (
                <div>
                  <AdminField label="หัวข้อหลัก (บรรทัด 1)" value={draft.hero.headline} onChange={v => upDraft("hero", "headline", v)} />
                  <AdminField label="หัวข้อรอง (บรรทัด 2 / สีแดง)" value={draft.hero.subheadline} onChange={v => upDraft("hero", "subheadline", v)} />
                  <AdminField label="เนื้อหา Hero" value={draft.hero.body} onChange={v => upDraft("hero", "body", v)} multiline />
                  <AdminField label="ปุ่ม CTA 1 (สีแดง)" value={draft.hero.cta1} onChange={v => upDraft("hero", "cta1", v)} />
                  <AdminField label="ปุ่ม CTA 2 (outline)" value={draft.hero.cta2} onChange={v => upDraft("hero", "cta2", v)} />
                </div>
              )}

              {tab === "about" && (
                <div>
                  <AdminField label="หัวข้อ About" value={draft.about.title} onChange={v => upDraft("about", "title", v)} />
                  <AdminField label="เนื้อหา" value={draft.about.body} onChange={v => upDraft("about", "body", v)} multiline />
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 12, marginTop: 24, textTransform: "uppercase", letterSpacing: 1 }}>สถิติ (4 ช่อง)</div>
                  {[["stat1","stat1label"],["stat2","stat2label"],["stat3","stat3label"],["stat4","stat4label"]].map(([n,l],i) => (
                    <div key={n} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div style={{ flex: "0 0 90px" }}>
                        <label style={{ fontSize: 11, color: C.gray }}>ตัวเลข</label>
                        <input value={draft.about[n]} onChange={e => upDraft("about", n, e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: `1px solid ${C.grayLt}`, fontSize: 14, fontFamily: FB, boxSizing: "border-box", marginTop: 4, outline: "none" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: 11, color: C.gray }}>ป้ายกำกับ</label>
                        <input value={draft.about[l]} onChange={e => upDraft("about", l, e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: `1px solid ${C.grayLt}`, fontSize: 14, fontFamily: FB, boxSizing: "border-box", marginTop: 4, outline: "none" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "bu" && (
                <div>
                  {draft.bu.map((bu, i) => (
                    <div key={i} style={{ marginBottom: 32, padding: "18px 16px", borderRadius: 12, border: `2px solid ${bu.color}28`, background: `${bu.color}06` }}>
                      <div style={{ fontFamily: FF, fontWeight: 700, fontSize: 13, color: bu.color, marginBottom: 14 }}>BU {i + 1} — {bu.label}</div>
                      <AdminField label="ชื่อ Business Unit" value={bu.name} onChange={v => upBU(i, "name", v)} />
                      <AdminField label="Tag / Category" value={bu.label} onChange={v => upBU(i, "label", v)} />
                      <AdminField label="คำอธิบายบริการ" value={bu.desc} onChange={v => upBU(i, "desc", v)} multiline />
                      <AdminField label="Pain Points (คั่นด้วย ,)" value={bu.pains} onChange={v => upBU(i, "pains", v)} multiline />
                    </div>
                  ))}
                </div>
              )}

              {tab === "contact" && (
                <div>
                  <AdminField label="หัวข้อ Contact" value={draft.contact.title} onChange={v => upDraft("contact", "title", v)} />
                  <AdminField label="คำอธิบาย" value={draft.contact.body} onChange={v => upDraft("contact", "body", v)} multiline />
                  <AdminField label="Email" value={draft.contact.email} onChange={v => upDraft("contact", "email", v)} />
                  <AdminField label="โทรศัพท์" value={draft.contact.phone} onChange={v => upDraft("contact", "phone", v)} />
                  <AdminField label="LINE ID" value={draft.contact.line} onChange={v => upDraft("contact", "line", v)} />
                  <AdminField label="ที่อยู่" value={draft.contact.address} onChange={v => upDraft("contact", "address", v)} />
                </div>
              )}

              {tab === "footer" && (
                <div>
                  <AdminField label="Tagline ใต้โลโก้" value={draft.footer.tagline} onChange={v => upDraft("footer", "tagline", v)} />
                  <AdminField label="Copyright Text" value={draft.footer.copy} onChange={v => upDraft("footer", "copy", v)} />
                  <div style={{ marginTop: 32, padding: "16px", background: C.offWhite, borderRadius: 10, border: `1px solid ${C.grayLt}` }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.navy, marginBottom: 8 }}>💡 วิธีเข้า Admin</div>
                    <div style={{ fontSize: 13, color: C.gray, lineHeight: 1.7 }}>
                      คลิก Copyright ที่ Footer 5 ครั้งติดกัน จะเปิด Login Modal<br />
                      รหัสผ่านเริ่มต้น: <strong>sigmax2024</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ padding: "14px 22px", borderTop: `1px solid ${C.grayLt}`, background: C.offWhite, flexShrink: 0 }}>
              <p style={{ fontSize: 12, color: C.gray, textAlign: "center", margin: 0 }}>
                กด "บันทึก" เพื่อบันทึกการเปลี่ยนแปลง — ข้อมูลถูกเก็บในระบบ Storage
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
