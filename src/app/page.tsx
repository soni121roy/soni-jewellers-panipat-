// @ts-nocheck
"use client";
import { useState } from "react";

const PRODUCTS = [
  // 22KT GOLD - 20
  { id: "g0", tab: "22KT GOLD", name: "22KT Gold Chain 1", price: 12000, mrp: 18000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=g0" },
  { id: "g1", tab: "22KT GOLD", name: "Gold Ring 2", price: 14100, mrp: 20100, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=g1" },
  { id: "g2", tab: "22KT GOLD", name: "Gold Bangle 3", price: 16200, mrp: 22200, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=g2" },
  { id: "g3", tab: "22KT GOLD", name: "Gold Earring 4", price: 18300, mrp: 24300, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=g3" },
  { id: "g4", tab: "22KT GOLD", name: "Gold Pendant 5", price: 20400, mrp: 26400, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=g4" },
  { id: "g5", tab: "22KT GOLD", name: "22KT Gold Chain 6", price: 22500, mrp: 28500, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=g5" },
  { id: "g6", tab: "22KT GOLD", name: "Gold Ring 7", price: 24600, mrp: 30600, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=g6" },
  { id: "g7", tab: "22KT GOLD", name: "Gold Bangle 8", price: 26700, mrp: 32700, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=g7" },
  { id: "g8", tab: "22KT GOLD", name: "Gold Earring 9", price: 28800, mrp: 34800, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=g8" },
  { id: "g9", tab: "22KT GOLD", name: "Gold Pendant 10", price: 30900, mrp: 36900, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=g9" },
  { id: "g10", tab: "22KT GOLD", name: "22KT Gold Chain 11", price: 33000, mrp: 39000, img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80&seed=g10" },
  { id: "g11", tab: "22KT GOLD", name: "Gold Ring 12", price: 35100, mrp: 41100, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=g11" },
  { id: "g12", tab: "22KT GOLD", name: "Gold Bangle 13", price: 37200, mrp: 43200, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=g12" },
  { id: "g13", tab: "22KT GOLD", name: "Gold Earring 14", price: 39300, mrp: 45300, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=g13" },
  { id: "g14", tab: "22KT GOLD", name: "Gold Pendant 15", price: 41400, mrp: 47400, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=g14" },
  { id: "g15", tab: "22KT GOLD", name: "22KT Gold Chain 16", price: 43500, mrp: 49500, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=g15" },
  { id: "g16", tab: "22KT GOLD", name: "Gold Ring 17", price: 45600, mrp: 51600, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=g16" },
  { id: "g17", tab: "22KT GOLD", name: "Gold Bangle 18", price: 47700, mrp: 53700, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=g17" },
  { id: "g18", tab: "22KT GOLD", name: "Gold Earring 19", price: 49800, mrp: 55800, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=g18" },
  { id: "g19", tab: "22KT GOLD", name: "Gold Pendant 20", price: 51900, mrp: 57900, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=g19" },

  // BRIDAL SETS - 20 ALAG
  { id: "b0", tab: "BRIDAL SETS", name: "Bridal Gold Set 1", price: 45000, mrp: 60000, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=b0" },
  { id: "b1", tab: "BRIDAL SETS", name: "Bridal Choker 2", price: 47100, mrp: 62100, img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80&seed=b1" },
  { id: "b2", tab: "BRIDAL SETS", name: "Bridal Long Haar 3", price: 49200, mrp: 64200, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=b2" },
  { id: "b3", tab: "BRIDAL SETS", name: "Bridal Maang Tikka Set 4", price: 51300, mrp: 66300, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=b3" },
  { id: "b4", tab: "BRIDAL SETS", name: "Bridal Gold Necklace 5", price: 53400, mrp: 68400, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=b4" },
  { id: "b5", tab: "BRIDAL SETS", name: "Bridal Gold Set 6", price: 55500, mrp: 70500, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=b5" },
  { id: "b6", tab: "BRIDAL SETS", name: "Bridal Choker 7", price: 57600, mrp: 72600, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=b6" },
  { id: "b7", tab: "BRIDAL SETS", name: "Bridal Long Haar 8", price: 59700, mrp: 74700, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=b7" },
  { id: "b8", tab: "BRIDAL SETS", name: "Bridal Maang Tikka Set 9", price: 61800, mrp: 76800, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=b8" },
  { id: "b9", tab: "BRIDAL SETS", name: "Bridal Gold Necklace 10", price: 63900, mrp: 78900, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=b9" },
  { id: "b10", tab: "BRIDAL SETS", name: "Bridal Gold Set 11", price: 66000, mrp: 81000, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=b10" },
  { id: "b11", tab: "BRIDAL SETS", name: "Bridal Choker 12", price: 68100, mrp: 83100, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=b11" },
  { id: "b12", tab: "BRIDAL SETS", name: "Bridal Long Haar 13", price: 70200, mrp: 85200, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=b12" },
  { id: "b13", tab: "BRIDAL SETS", name: "Bridal Maang Tikka Set 14", price: 72300, mrp: 87300, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=b13" },
  { id: "b14", tab: "BRIDAL SETS", name: "Bridal Gold Necklace 15", price: 74400, mrp: 89400, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=b14" },
  { id: "b15", tab: "BRIDAL SETS", name: "Bridal Gold Set 16", price: 76500, mrp: 91500, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=b15" },
  { id: "b16", tab: "BRIDAL SETS", name: "Bridal Choker 17", price: 78600, mrp: 93600, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=b16" },
  { id: "b17", tab: "BRIDAL SETS", name: "Bridal Long Haar 18", price: 80700, mrp: 95700, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=b17" },
  { id: "b18", tab: "BRIDAL SETS", name: "Bridal Maang Tikka Set 19", price: 82800, mrp: 97800, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=b18" },
  { id: "b19", tab: "BRIDAL SETS", name: "Bridal Gold Necklace 20", price: 84900, mrp: 99900, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=b19" },

  // TEMPLE JEWELLERY - 20 ALAG
  { id: "t0", tab: "TEMPLE JEWELLERY", name: "Temple Gold Necklace 1", price: 35000, mrp: 50000, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=t0" },
  { id: "t1", tab: "TEMPLE JEWELLERY", name: "Temple Lakshmi Haar 2", price: 37100, mrp: 52100, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=t1" },
  { id: "t2", tab: "TEMPLE JEWELLERY", name: "Temple Choker 3", price: 39200, mrp: 54200, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=t2" },
  { id: "t3", tab: "TEMPLE JEWELLERY", name: "Temple Jhumka 4", price: 41300, mrp: 56300, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=t3" },
  { id: "t4", tab: "TEMPLE JEWELLERY", name: "Temple Gold Bangle 5", price: 43400, mrp: 58400, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=t4" },
  { id: "t5", tab: "TEMPLE JEWELLERY", name: "Temple Gold Necklace 6", price: 45500, mrp: 60500, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=t5" },
  { id: "t6", tab: "TEMPLE JEWELLERY", name: "Temple Lakshmi Haar 7", price: 47600, mrp: 62600, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=t6" },
  { id: "t7", tab: "TEMPLE JEWELLERY", name: "Temple Choker 8", price: 49700, mrp: 64700, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=t7" },
  { id: "t8", tab: "TEMPLE JEWELLERY", name: "Temple Jhumka 9", price: 51800, mrp: 66800, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=t8" },
  { id: "t9", tab: "TEMPLE JEWELLERY", name: "Temple Gold Bangle 10", price: 53900, mrp: 68900, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=t9" },
  { id: "t10", tab: "TEMPLE JEWELLERY", name: "Temple Gold Necklace 11", price: 56000, mrp: 71000, img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80&seed=t10" },
  { id: "t11", tab: "TEMPLE JEWELLERY", name: "Temple Lakshmi Haar 12", price: 58100, mrp: 73100, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=t11" },
  { id: "t12", tab: "TEMPLE JEWELLERY", name: "Temple Choker 13", price: 60200, mrp: 75200, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=t12" },
  { id: "t13", tab: "TEMPLE JEWELLERY", name: "Temple Jhumka 14", price: 62300, mrp: 77300, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=t13" },
  { id: "t14", tab: "TEMPLE JEWELLERY", name: "Temple Gold Bangle 15", price: 64400, mrp: 79400, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=t14" },
  { id: "t15", tab: "TEMPLE JEWELLERY", name: "Temple Gold Necklace 16", price: 66500, mrp: 81500, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=t15" },
  { id: "t16", tab: "TEMPLE JEWELLERY", name: "Temple Lakshmi Haar 17", price: 68600, mrp: 83600, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=t16" },
  { id: "t17", tab: "TEMPLE JEWELLERY", name: "Temple Choker 18", price: 70700, mrp: 85700, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=t17" },
  { id: "t18", tab: "TEMPLE JEWELLERY", name: "Temple Jhumka 19", price: 72800, mrp: 87800, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=t18" },
  { id: "t19", tab: "TEMPLE JEWELLERY", name: "Temple Gold Bangle 20", price: 74900, mrp: 89900, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=t19" },

  // DAILY WEAR - 20 ALAG
  { id: "d0", tab: "DAILY WEAR", name: "Daily Gold Chain 1", price: 8000, mrp: 12000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80&seed=d0" },
  { id: "d1", tab: "DAILY WEAR", name: "Daily Gold Stud 2", price: 9500, mrp: 13500, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=d1" },
  { id: "d2", tab: "DAILY WEAR", name: "Daily Gold Ring 3", price: 11000, mrp: 15000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=d2" },
  { id: "d3", tab: "DAILY WEAR", name: "Daily Gold Pendant 4", price: 12500, mrp: 16500, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=d3" },
  { id: "d4", tab: "DAILY WEAR", name: "Daily Gold Bracelet 5", price: 14000, mrp: 18000, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=d4" },
  { id: "d5", tab: "DAILY WEAR", name: "Daily Gold Chain 6", price: 15500, mrp: 19500, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=d5" },
  { id: "d6", tab: "DAILY WEAR", name: "Daily Gold Stud 7", price: 17000, mrp: 21000, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=d6" },
  { id: "d7", tab: "DAILY WEAR", name: "Daily Gold Ring 8", price: 18500, mrp: 22500, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=d7" },
  { id: "d8", tab: "DAILY WEAR", name: "Daily Gold Pendant 9", price: 20000, mrp: 24000, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&auto=format&fit=crop&q=80&seed=d8" },
  { id: "d9", tab: "DAILY WEAR", name: "Daily Gold Bracelet 10", price: 21500, mrp: 25500, img: "https://images.unsplash.com/photo-1588444650733-d0767d9d630d?w=600&auto=format&fit=crop&q=80&seed=d9" },
  { id: "d10", tab: "DAILY WEAR", name: "Daily Gold Chain 11", price: 23000, mrp: 27000, img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f9505a?w=600&auto=format&fit=crop&q=80&seed=d10" },
  { id: "d11", tab: "DAILY WEAR", name: "Daily Gold Stud 12", price: 24500, mrp: 28500, img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&auto=format&fit=crop&q=80&seed=d11" },
  { id: "d12", tab: "DAILY WEAR", name: "Daily Gold Ring 13", price: 26000, mrp: 30000, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80&seed=d12" },
  { id: "d13", tab: "DAILY WEAR", name: "Daily Gold Pendant 14", price: 27500, mrp: 31500, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80&seed=d13" },
  { id: "d14", tab: "DAILY WEAR", name: "Daily Gold Bracelet 15", price: 29000, mrp: 33000, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=80&seed=d14" },
  { id: "d15", tab: "DAILY WEAR", name: "Daily Gold Chain 16", price: 30500, mrp: 34500, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80&seed=d15" },
  { id: "d16", tab: "DAILY WEAR", name: "Daily Gold Stud 17", price: 32000, mrp: 36000, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&auto=format&fit=crop&q=80&seed=d16" },
  { id: "d17", tab: "DAILY WEAR", name: "Daily Gold Ring 18", price: 33500, mrp: 37500, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=80&seed=d17" },
  { id: "d18", tab: "DAILY WEAR", name: "Daily Gold Pendant 19", price: 35000, mrp: 39000, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80&seed=d18" },
  { id: "d19", tab: "DAILY WEAR", name: "Daily Gold Bracelet 20", price: 36500, mrp: 40500, img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop&q=80&seed=d19" },
];

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
      <div style={{background:"#fff8e1", textAlign:"center", padding:"20px"}}>
        <h2 style={{fontSize:24, fontWeight:800, margin:0}}>Welcome to Soni Jewellers ✨</h2>
        <p style={{fontSize:12, color:"#666"}}>80 Pure Gold Designs - Har Tab Me 20 Alag</p>
      </div>
      <div style={{maxWidth:1400, margin:"auto", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, padding:16}}>
        {list.map((p:any)=>(
          <div key={p.id} style={{border:"1px solid #eee", borderRadius:16, overflow:"hidden"}}>
            <img src={p.img} alt={p.name} style={{width:"100%", aspectRatio:"1", objectFit:"cover"}} />
            <div style={{padding:10}}>
              <p style={{fontSize:12, fontWeight:600}}>{p.name}</p>
              <p style={{fontSize:13, fontWeight:900}}>₹{p.price.toLocaleString()} <span style={{fontSize:11, color:"#999", textDecoration:"line-through"}}>₹{p.mrp.toLocaleString()}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}