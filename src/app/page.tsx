// @ts-nocheck
"use client";
import { useState, useEffect } from "react";

const defaults = {
  "22KT GOLD": Array.from({ length: 20 }, (_, i) => ({
    id: `g${i}`, tab: "22KT GOLD",
    name: `22KT Gold ${["Ring","Chain","Jhumka","Bangle","Pendant"][i%5]} ${i+1}`,
    price: 15000 + i*3000, mrp: 20000 + i*3000,
    mainImg: `https://picsum.photos/seed/gold${i+1}/500/500`,
    hoverImg: `https://picsum.photos/seed/gold${i+1}h/500/500`
  })),
  "BRIDAL SETS": Array.from({ length: 20 }, (_, i) => ({
    id: `b${i}`, tab: "BRIDAL SETS",
    name: `Bridal Set ${i+1}`, price: 45000 + i*4000, mrp: 60000 + i*4000,
    mainImg: `https://picsum.photos/seed/bridal${i+1}/500/500`,
    hoverImg: `https://picsum.photos/seed/bridal${i+1}h/500/500`
  })),
  "TEMPLE JEWELLERY": Array.from({ length: 20 }, (_, i) => ({
    id: `t${i}`, tab: "TEMPLE JEWELLERY",
    name: `Temple Jewellery ${i+1}`, price: 35000 + i*3500, mrp: 50000 + i*3500,
    mainImg: `https://picsum.photos/seed/temple${i+1}/500/500`,
    hoverImg: `https://picsum.photos/seed/temple${i+1}h/500/500`
  })),
  "DAILY WEAR": Array.from({ length: 20 }, (_, i) => ({
    id: `d${i}`, tab: "DAILY WEAR",
    name: `Daily Wear ${i+1}`, price: 8000 + i*1500, mrp: 12000 + i*1500,
    mainImg: `https://picsum.photos/seed/daily${i+1}/500/500`,
    hoverImg: `https://picsum.photos/seed/daily${i+1}h/500/500`
  })),
};

export default function Home() {
  const [tab, setTab] = useState("22KT GOLD");
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const custom = JSON.parse(localStorage.getItem("soni_custom_products") || "[]");
    const hide = localStorage.getItem("soni_hide_defaults") === "true";
    setList(hide? custom : [...custom,...Object.values(defaults).flat()]);
  }, []);

  const products = list.filter((p:any)=>p.tab===tab);
  const show = products.length > 0? products : (defaults as any)[tab];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-[#d4af37] font-black tracking-widest text-sm md:text-lg">SONI JEWELLERS PANIPAT</h1>
          <a href="/admin" className="bg-[#d4af37] text-black px-5 py-2 rounded-full text-xs font-bold">+ ADD</a>
        </div>
        <div className="max-w-[1400px] mx-auto flex gap-2 px-4 pb-3 overflow-x-auto">
          {Object.keys(defaults).map(t => (
            <button key={t} onClick={()=>setTab(t)} className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap ${tab===t? "bg-[#d4af37] text-black" : "bg-[#1a1a1a] text-white"}`}>{t}</button>
          ))}
        </div>
      </header>

      {/* Welcome */}
      <section className="bg-[#fff8e1] text-center py-10 px-4 border-b">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">Welcome to Soni Jewellers ✨</h2>
        <p className="text-gray-600 mt-2 text-sm">80+ Designs - 20 in each category | Panipat's Most Trusted</p>
        <span className="inline-block mt-3 bg-black text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-bold">PURE 22KT HALLMARK GOLD</span>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {show.map((p:any) => (
          <div key={p.id} className="group border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <img src={p.mainImg} alt={p.name} className="w-full h-full object-cover group-hover:opacity-0 transition duration-300 absolute inset-0" />
              <img src={p.hoverImg} alt="" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0" />
            </div>
            <div className="p-3">
              <p className="text-[13px] font-semibold truncate">{p.name}</p>
              <div className="flex gap-2 items-center mt-1">
                <p className="text-sm font-black">₹{p.price.toLocaleString()}</p>
                <p className="text-[11px] line-through text-gray-400">₹{p.mrp.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}