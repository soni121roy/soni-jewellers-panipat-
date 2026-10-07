// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
const BRAND_NAME = "SONI JEWELLERS ";
const TABS = ["22KT GOLD","BRIDAL SETS","TEMPLE JEWELLERY","DAILY WEAR"] as const;
const ORIGINAL_PRODUCTS = [
  {id:"1",tab:"22KT GOLD",name:"Kundan Gold Ring",price:25000,mrp:35000,mainImg:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",images:["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"]},
];

export default function Home(){
  const [activeTab,setActiveTab]=useState("22KT GOLD");
  const [custom,setCustom]=useState<any[]>([]);
  const [hideDefaults,setHideDefaults]=useState(false);
  const [selected,setSelected]=useState<any>(null);

  const load = ()=>{
    try{
      const c = JSON.parse(localStorage.getItem("soni_custom_products")||"[]");
      setCustom(c);
      setHideDefaults(localStorage.getItem("soni_hide_defaults")==="true");
    }catch{}
  };

  useEffect(()=>{
    load();
    window.addEventListener("focus", load);
    window.addEventListener("storage", load);
    const i = setInterval(load, 1000); // har second check karega
    return ()=>{ window.removeEventListener("focus", load); clearInterval(i); }
  },[]);

  const all = hideDefaults? custom : [...custom,...ORIGINAL_PRODUCTS];
  const filtered = all.filter((p:any)=> p.tab === activeTab);

  return (
    <div className="min-h-screen bg-[#fefcf8]">
      <div className="bg-[#0d0b0b] text-[#d4af37] p-3 flex justify-between"><h1 className="font-black">{BRAND_NAME}</h1><a href="/admin" className="bg-[#d4af37] text-black px-4 py-1.5 rounded-full text-xs font-black">+ ADD</a></div>
      <div className="bg-black flex gap-2 p-2 overflow-x-auto"><button onClick={load} className="bg-white text-black px-3 py-2 rounded-full text-[10px] font-bold">🔄 REFRESH</button>{TABS.map(t=><button key={t} onClick={()=>setActiveTab(t)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${activeTab===t?'bg-[#d4af37] text-black':'bg-[#1a1a1a] text-white'}`}>{t}</button>)}</div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {filtered.length===0 && <p className="col-span-4 text-center py-20 text-gray-400">Is tab me kuch nahi hai. Admin me add karo. Total tumhare products: {custom.length}</p>}
        {filtered.map((p:any)=><div key={p.id} onClick={()=>setSelected(p)} className="bg-white rounded-2xl border overflow-hidden"><img src={p.mainImg} className="w-full h-44 object-cover"/><div className="p-3"><p className="text-xs font-bold truncate">{p.name}</p><p className="text-sm font-black">₹{p.price}</p></div></div>)}
      </div>
      {selected && <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden"><img src={selected.mainImg} className="w-full h-64 object-cover"/><div className="p-4"><h2 className="font-bold">{selected.name}</h2><p className="font-black">₹{selected.price}</p><button onClick={()=>setSelected(null)} className="w-full mt-3 bg-black text-white py-2 rounded-full">Close</button></div></div></div>}
    </div>
  );
}