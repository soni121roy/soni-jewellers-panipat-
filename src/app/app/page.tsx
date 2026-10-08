// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const defaultProducts = {
  "22KT GOLD": Array.from({length: 20}, (_, i) => ({
    id: `gold-${i}`, tab: "22KT GOLD",
    name: ["Kundan Gold Ring", "Royal Chain", "Gold Jhumka", "Designer Bangle", "Gold Pendant"][i%5]+` ${i+1}`,
    price: 15000 + i*3500, mrp: 20000 + i*3500,
    mainImg: `https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&q=60&${i}`,
    images: [`https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500`]
  })),
  "BRIDAL SETS": Array.from({length: 20}, (_, i) => ({
    id: `bridal-${i}`, tab: "BRIDAL SETS",
    name: `Bridal Kundan Set ${i+1}`, price: 45000 + i*5000, mrp: 60000 + i*5000,
    mainImg: `https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500&auto=format&q=60&${i}`,
    images: [`https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=500`]
  })),
  "TEMPLE JEWELLERY": Array.from({length: 20}, (_, i) => ({
    id: `temple-${i}`, tab: "TEMPLE JEWELLERY",
    name: `Temple Jewellery ${i+1}`, price: 35000 + i*4000, mrp: 50000 + i*4000,
    mainImg: `https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&auto=format&q=60&${i}`,
    images: [`https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500`]
  })),
  "DAILY WEAR": Array.from({length: 20}, (_, i) => ({
    id: `daily-${i}`, tab: "DAILY WEAR",
    name: `Daily Wear ${i+1}`, price: 8000 + i*2000, mrp: 12000 + i*2000,
    mainImg: `https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&q=60&${i}`,
    images: [`https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500`]
  })),
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("22KT GOLD");
  const [all, setAll] = useState([]);
  const [hideDefault, setHideDefault] = useState(false);

  useEffect(()=>{
    const custom = JSON.parse(localStorage.getItem("soni_custom_products") || "[]");
    const hide = localStorage.getItem("soni_hide_defaults") === "true";
    setHideDefault(hide);
    if(hide) setAll(custom);
    else {
      const flat = Object.values(defaultProducts).flat();
      setAll([...custom,...flat]);
    }
  },[]);

  const filtered = all.filter(p=>p.tab===activeTab);
  const displayList = filtered.length>0? filtered : defaultProducts[activeTab];

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          <h1 className="text-[#d4af37] font-black tracking-widest">SONI JEWELLERS PANIPAT</h1>
          <a href="/admin" className="bg-[#d4af37] text-black px-4 py-1.5 rounded-full text-sm font-bold">+ ADD</a>
        </div>
        <div className="flex gap-2 px-4 md:px-8 pb-3 overflow-x-auto">
          {Object.keys(defaultProducts).map(tab=>(
            <button key={tab} onClick={()=>setActiveTab(tab)} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${activeTab===tab?"bg-[#d4af37] text-black":"bg-[#1a1a1a] text-white"}`}>{tab}</button>
          ))}
        </div>
      </header>

      <section className="bg-[#fff8e1] text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Welcome to Soni Jewellers ✨</h2>
        <p className="text-gray-500 mt-2">80+ designs - 20 in each category | Pure Hallmark Gold</p>
      </section>

      <section className="max-w-[1300px] mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayList.map(p=>(
          <div key={p.id} className="border rounded-2xl overflow-hidden bg-white shadow-sm">
            <img src={p.mainImg || p.img} className="w-full h-48 object-cover"/>
            <div className="p-3">
              <h3 className="text-xs font-semibold truncate">{p.name}</h3>
              <p className="text-sm font-black mt-1">₹{p.price}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}