// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
const BRAND_NAME = "SONI JEWELLERS PANIPAT";
const TABS = ["22KT GOLD","BRIDAL SETS","TEMPLE JEWELLERY","DAILY WEAR"] as const;
const ORIGINAL_PRODUCTS = [
  {id:"1",tab:"22KT GOLD",name:"Kundan Gold Ring",price:25000,mrp:35000,mainImg:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",images:["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"]},
  {id:"2",tab:"22KT GOLD",name:"Antique Gold Chain",price:45000,mrp:60000,mainImg:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",images:["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"]},
  {id:"3",tab:"BRIDAL SETS",name:"Bridal Kundan Set",price:125000,mrp:150000,mainImg:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",images:["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"]},
  {id:"4",tab:"TEMPLE JEWELLERY",name:"Temple Lakshmi Haar",price:85000,mrp:100000,mainImg:"https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600",images:["https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600"]},
  {id:"5",tab:"DAILY WEAR",name:"Daily Wear Earrings",price:12000,mrp:18000,mainImg:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",images:["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"]},
];

export default function Home(){
  const [activeTab,setActiveTab]=useState("22KT GOLD");
  const [custom,setCustom]=useState<any[]>([]);
  const [hideDefaults,setHideDefaults]=useState(false);
  const [selected,setSelected]=useState<any>(null);
  useEffect(()=>{
    setCustom(JSON.parse(localStorage.getItem("soni_custom_products")||"[]"));
    setHideDefaults(localStorage.getItem("soni_hide_defaults")==="true");
    const h=()=>{ setCustom(JSON.parse(localStorage.getItem("soni_custom_products")||"[]")); setHideDefaults(localStorage.getItem("soni_hide_defaults")==="true"); };
    window.addEventListener("storage",h); return()=>window.removeEventListener("storage",h);
  },[]);
  const all = hideDefaults? custom : [...custom,...ORIGINAL_PRODUCTS];
  const filtered = all.filter((p:any)=>p.tab===activeTab);
  return (
    <div className="min-h-screen bg-[#fefcf8]">
      <div className="sticky top-0 z-20 bg-[#0d0b0b] text-[#d4af37] p-3 flex justify-between items-center">
        <h1 className="font-black text-lg tracking-widest">{BRAND_NAME}</h1>
        <div className="flex gap-3"><a href="/admin" className="bg-[#d4af37] text-black px-4 py-1.5 rounded-full text-xs font-black">+ ADD</a></div>
      </div>
      <div className="bg-black flex gap-2 p-2 overflow-x-auto">
        {TABS.map(t=><button key={t} onClick={()=>setActiveTab(t)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${activeTab===t?'bg-[#d4af37] text-black':'bg-[#1a1a1a] text-white'}`}>{t}</button>)}
      </div>
      {hideDefaults && <div className="bg-green-100 text-green-700 text-center text-xs p-2 font-bold">✅ Sirf tumhare add kiye hue products dikh rahe hain</div>}
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {filtered.length===0 && <p className="col-span-4 text-center py-20 text-gray-400">Koi product nahi. Admin me jake + ADD karo.<br/><a href="/admin" className="text-[#d4af37] font-bold underline">Admin pe jao</a></p>}
        {filtered.map((p:any)=><div key={p.id} onClick={()=>setSelected(p)} className="bg-white rounded-2xl border overflow-hidden cursor-pointer"><img src={p.mainImg} className="w-full h-44 object-cover"/><div className="p-3"><p className="text-xs font-bold truncate">{p.name}</p><p className="text-sm font-black">₹{p.price}</p><p className="text-[10px] line-through text-gray-400">₹{p.mrp}</p></div></div>)}
      </div>
      {selected && <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden"><img src={selected.mainImg} className="w-full h-64 object-cover"/><div className="p-4"><h2 className="font-bold">{selected.name}</h2><p className="font-black text-lg">₹{selected.price}</p><button onClick={()=>setSelected(null)} className="w-full mt-3 bg-black text-white py-2 rounded-full">Close</button></div></div></div>}
    </div>
  );
}
