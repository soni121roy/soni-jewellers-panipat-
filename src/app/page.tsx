// @ts-nocheck
"use client";
import { useState } from "react";

const IMGS = {
  "22KT GOLD": [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
  ],
 "BRIDAL SETS": [
  "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
],
  "TEMPLE JEWELLERY": [
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
  ],
  "DAILY WEAR": [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
  ],
};

const NAMES = {
  "22KT GOLD": ["22KT Gold Chain","22KT Gold Ring","22KT Gold Bangle","22KT Gold Kada","Gold Coin Pendant"],
  "BRIDAL SETS": ["Bridal Heavy Choker Set","Bridal Long Haar Set","Bridal Dulhan Set","Bridal Rani Haar","Bridal Gold Choker"],
  "TEMPLE JEWELLERY": ["Temple Lakshmi Haar","Temple Antique Choker","Temple Gold Jhumka","Temple Kasina Mala","Temple Antique Bangle"],
  "DAILY WEAR": ["Daily Wear Stud","Daily Thin Chain","Daily Small Ring","Daily Light Pendant","Daily Gold Bracelet"],
};

function gen(){
  const all=[];
  Object.keys(IMGS).forEach(tab=>{
    for(let i=0;i<20;i++){
      const nameList = NAMES[tab as keyof typeof NAMES];
      all.push({
        id: `${tab}-${i}`,
        tab,
        name: `${nameList[i % nameList.length]} ${i+1}`,
        price: 8000 + Math.floor(Math.random()*40000),
        mrp: 15000 + Math.floor(Math.random()*40000),
        img: `${IMGS[tab as keyof typeof IMGS][i % 4]}&seed=${tab}${i}`
      })
    }
  });
  return all;
}

const PRODUCTS = gen();

export default function Home(){
  const [tab,setTab] = useState("22KT GOLD");
  const list = PRODUCTS.filter(p=>p.tab===tab);
  return (
    <div style={{background:"#fff", minHeight:"100vh"}}>
      <header style={{background:"#000", position:"sticky", top:0, zIndex:99}}>
        <div style={{maxWidth:1400, margin:"auto", padding:"14px 16px", display:"flex", justifyContent:"space-between"}}>
          <h1 style={{color:"#d4af37", fontWeight:900, fontSize:18, margin:0}}>SONI JEWELLERS PANIPAT</h1>
          <a href="/admin" style={{background:"#d4af37", color:"#000", padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:800, textDecoration:"none"}}>+ ADD</a>
        </div>
        <div style={{maxWidth:1400, margin:"auto", padding:"0 16px 12px", display:"flex", gap:8, overflowX:"auto"}}>
          {Object.keys(IMGS).map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{padding:"7px 16px", borderRadius:20, fontSize:12, fontWeight:800, border:"none", cursor:"pointer", whiteSpace:"nowrap", background: tab===t? "#d4af37" : "#222", color: tab===t? "#000" : "#fff"}}>{t}</button>
          ))}
        </div>
      </header>
      <div style={{maxWidth:1400, margin:"auto", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, padding:16}}>
        {list.map((p:any)=>(
          <div key={p.id} style={{border:"1px solid #eee", borderRadius:16, overflow:"hidden"}}>
            <img src={p.img} alt={p.name} style={{width:"100%", aspectRatio:"1", objectFit:"cover"}} />
            <div style={{padding:10}}>
              <p style={{fontSize:12, fontWeight:700}}>{p.name}</p>
              <p style={{fontSize:12, color:"#666"}}>{p.tab}</p>
              <p style={{fontSize:13, fontWeight:900}}>₹{p.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}