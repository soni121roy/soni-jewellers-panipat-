"use client";
import { useState } from "react";

const PRODUCTS = [
  {id:"1", tab:"22KT GOLD", name:"22KT Gold Floral Leaf Motif with Tassel", price:4676, mrp:8264, img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"},
  {id:"2", tab:"22KT GOLD", name:"Kundan Gold Ring", price:2500, mrp:3500, img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"},
  {id:"3", tab:"BRIDAL SETS", name:"Gold-Plated Kundan Studded & Beaded Set", price:6699, mrp:12699, img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"},
  {id:"4", tab:"BRIDAL SETS", name:"Gold Bridal Jewellery Set for Women", price:1631, mrp:16631, img:"https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600"},
  {id:"5", tab:"BRIDAL SETS", name:"Golden Polished Bridal Necklace Set", price:4309, mrp:12399, img:"https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600"},
  {id:"6", tab:"TEMPLE JEWELLERY", name:"Lucky Jewellery Bridal Dulhan Alloy Set", price:2607, mrp:17607, img:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"},
  {id:"7", tab:"TEMPLE JEWELLERY", name:"Bridal jewellery Sets In Gold Look Finish", price:6699, mrp:12699, img:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"},
  {id:"8", tab:"DAILY WEAR", name:"Regal 22k Gold Necklace Earrings Set", price:6999, mrp:14134, img:"https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600"},
];

const TABS = ["22KT GOLD","BRIDAL SETS","TEMPLE JEWELLERY","DAILY WEAR"];

export default function Home(){
  const [activeTab, setActiveTab] = useState("22KT GOLD");
  const filtered = PRODUCTS.filter(p=>p.tab===activeTab);
  return(
    <div className="min-h-screen bg-[#fffbf0]">
      <div className="bg-black text-[#d4af37] p-4 font-black flex justify-between">
        <span>SONI JEWELLERS PANIPAT</span>
        <a href="/admin" className="bg-[#d4af37] text-black px-4 py-1 rounded-full text-xs">+ ADD</a>
      </div>
      <div className="bg-black flex gap-2 p-3 overflow-x-auto">
        {TABS.map(t=>(
          <button key={t} onClick={()=>setActiveTab(t)} className={`px-4 py-2 rounded-full text-xs font-bold ${activeTab===t?'bg-[#d4af37] text-black':'bg-[#222] text-white'}`}>{t}</button>
        ))}
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {filtered.map(p=>(
          <div key={p.id} className="bg-white rounded-xl border overflow-hidden">
            <img src={p.img} className="w-full h-52 object-cover" />
            <div className="p-3"><p className="text-xs font-bold truncate">{p.name}</p><p className="font-black">₹{p.price}</p><p className="text-[10px] line-through text-gray-400">₹{p.mrp}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}