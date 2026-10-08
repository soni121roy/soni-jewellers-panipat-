// @ts-nocheck
"use client";
import { useState } from "react";

const safeGold = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
];

const PRODUCTS = Array.from({length:80}, (_,i)=>{
  const tabs = ["22KT GOLD","BRIDAL SETS","TEMPLE JEWELLERY","DAILY WEAR"];
  const tab = tabs[Math.floor(i/20)];
  return {
    id: i,
    tab,
    name: `${tab} Design ${ (i%20)+1 }`,
    price: 10000 + i*800,
    mrp: 15000 + i*800,
    img: `${safeGold[i % safeGold.length]}&seed=${i}`
  }
});

export default function Home(){
  const [tab,setTab] = useState("22KT GOLD");
  const list = PRODUCTS.filter(p=>p.tab===tab);
  return (
    <div style={{background:"#fff", minHeight:"100vh"}}>
      <header style={{background:"#000", color:"#fff", position:"sticky", top:0, zIndex:99}}>
        <div style={{maxWidth:1400, margin:"auto", padding:"14px 16px", display:"flex", justifyContent:"space-between"}}>
          <h1 style={{color:"#d4af37", fontWeight:900, fontSize:18, margin:0}}>SONI JEWELLERS PANIPAT</h1>
          <a href="/admin" style={{background:"#d4af37", color:"#000", padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:800, textDecoration:"none"}}>+ ADD</a>
        </div>
        <div style={{maxWidth:1400, margin:"auto", padding:"0 16px 12px", display:"flex", gap:8, overflowX:"auto"}}>
          {["22KT GOLD","BRIDAL SETS","TEMPLE JEWELLERY","DAILY WEAR"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{padding:"7px 16px", borderRadius:20, fontSize:12, fontWeight:800, border:"none", cursor:"pointer", whiteSpace:"nowrap", background: tab===t? "#d4af37" : "#222", color: tab===t? "#000" : "#fff"}}>{t} (20)</button>
          ))}
        </div>
      </header>

      <div style={{maxWidth:1400, margin:"auto", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, padding:16}}>
        {list.map((p:any)=>(
          <div key={p.id} style={{border:"1px solid #eee", borderRadius:16, overflow:"hidden"}}>
            <img
              src={p.img}
              alt={p.name}
              style={{width:"100%", aspectRatio:"1", objectFit:"cover", background:"#faf6e8"}}
              onError={(e:any)=>{ e.target.src = safeGold[0] }}
            />
            <div style={{padding:10}}>
              <p style={{fontSize:12, fontWeight:600}}>{p.name}</p>
              <p style={{fontSize:13, fontWeight:900}}>₹{p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}