// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
export default function AdminPage() {
  const [tab, setTab] = useState("22KT GOLD");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [list, setList] = useState<any[]>([]);
  useEffect(()=>{ setList(JSON.parse(localStorage.getItem("soni_custom_products") || "[]")); },[]);
  const save = ()=>{
    if(!name ||!price ||!img1) return alert("Name, Price, Image 1 dalo");
    const p = { id: "custom-"+Date.now(), tab, name, price: parseInt(price), mrp: parseInt(mrp)||parseInt(price)+15000, mainImg: img1, images: [img1, img2, img3].filter(Boolean) };
    const n=[p,...list]; localStorage.setItem("soni_custom_products", JSON.stringify(n)); setList(n);
    alert("Ho gaya! Ab main site pe "+tab+" me dikhega"); setName(""); setPrice(""); setMrp(""); setImg1(""); setImg2(""); setImg3("");
  };
  const del = (id:string)=>{ const n=list.filter((x:any)=>x.id!==id); localStorage.setItem("soni_custom_products", JSON.stringify(n)); setList(n); };
  const hide = ()=>{ localStorage.setItem("soni_hide_defaults","true"); alert("Ab mere wale hat gaye, sirf tumhare wale dikhenge"); };
  const show = ()=>{ localStorage.removeItem("soni_hide_defaults"); alert("Default wapas aa gaye"); };
  return (
    <div className="min-h-screen bg-[#fefcf8] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between"><h1 className="text-2xl font-black">Admin Panel</h1><a href="/" className="bg-black text-white px-5 py-2 rounded-full text-sm">Go to Site</a></div>
        <div className="flex gap-2 mt-4"><button onClick={hide} className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold">MERE DEFAULT HATAO - SIRF MERE DIKHAO</button><button onClick={show} className="bg-gray-200 px-4 py-2 rounded-full text-xs font-bold">Default Wapas Lao</button></div>
        <div className="bg-white rounded-2xl border p-6 mt-4">
          <div className="grid gap-3">
            <select value={tab} onChange={e=>setTab(e.target.value)} className="border p-3 rounded-xl font-bold"><option>22KT GOLD</option><option>BRIDAL SETS</option><option>TEMPLE JEWELLERY</option><option>DAILY WEAR</option></select>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Product Name" className="border p-3 rounded-xl"/>
            <input value={price} onChange={e=>setPrice(e.target.value)} type="number" placeholder="Price jaise 45000" className="border p-3 rounded-xl"/>
            <input value={mrp} onChange={e=>setMrp(e.target.value)} type="number" placeholder="MRP jaise 60000" className="border p-3 rounded-xl"/>
            <input value={img1} onChange={e=>setImg1(e.target.value)} placeholder="Image 1 Link - Google se Copy Image Address" className="border p-3 rounded-xl"/>
            <input value={img2} onChange={e=>setImg2(e.target.value)} placeholder="Image 2 Link (optional)" className="border p-3 rounded-xl"/>
            <input value={img3} onChange={e=>setImg3(e.target.value)} placeholder="Image 3 Link (optional)" className="border p-3 rounded-xl"/>
            <button onClick={save} className="bg-[#d4af37] py-3 rounded-full font-black">SAVE KARO</button>
          </div>
        </div>
        <div className="mt-6"><h3 className="font-bold">Tumhare Products ({list.length})</h3><div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">{list.map((p:any)=><div key={p.id} className="bg-white border rounded-xl p-2"><img src={p.mainImg} className="w-full h-28 object-cover rounded-lg"/><p className="text-xs font-bold">{p.name}</p><button onClick={()=>del(p.id)} className="text-red-500 text-[10px]">DELETE</button></div>)}</div></div>
      </div>
    </div>
  );
}