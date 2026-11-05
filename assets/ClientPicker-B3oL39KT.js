import{i as e,t}from"./react-sySUN5R7.js";import{O as n,k as r}from"./button-C4PABAZk.js";import{a as i}from"./x-BLJq4Ycz.js";import{O as a,_ as o,g as s,h as c,m as l,v as u}from"./index-BnZEFyJQ.js";import{b as d,c as f}from"./AdminApp-tl3ZI9TQ.js";import{d as p}from"./queries-xfOGXeJV.js";import{t as m}from"./useDebounced-Bb6NHq8D.js";var h={name:`printer`,size:24,node:[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]};h.node;var g=n(h),_=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),v={domicile:`À domicile`,stop_desk:`Point relais`,boutique:`Retrait en boutique`};function y(e,t){let n=e.customer,r=(e.items??[]).map(e=>`<tr><td>${_(e.product_name)} <small>${_(e.variant_label)}</small></td><td class="n">${e.quantity}</td><td class="n">${u(e.unit_price)}</td><td class="n">${u(e.line_total)}</td></tr>`).join(``),i=`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${_(e.reference)}</title>
<style>
  body{font:14px/1.45 system-ui,sans-serif;color:#111;margin:24px;max-width:720px}
  h1{font-size:20px;margin:0 0 2px} h2{font-size:14px;margin:18px 0 6px;border-bottom:1px solid #ccc;padding-bottom:3px}
  table{width:100%;border-collapse:collapse} td,th{padding:5px 4px;border-bottom:1px solid #e5e5e5;text-align:left;vertical-align:top}
  .n{text-align:right;white-space:nowrap} small{color:#555} .total td{font-weight:700;font-size:16px;border-bottom:0}
  .meta{color:#555;margin:0 0 12px} .box{border:1px solid #bbb;padding:8px;min-height:40px}
  @media print{body{margin:0}}
</style></head><body>
  <h1>${_(t)}</h1>
  <p class="meta">Bon de commande ${_(e.reference)}, ${_(f(e.created_at))}</p>

  <h2>Client</h2>
  <div>${_([n.first_name,n.last_name].filter(Boolean).join(` `))}</div>
  <div>${n.phone?_(o(n.phone)):``}${n.phone2?` / ${_(o(n.phone2))}`:``}</div>
  <div>${_([e.address,e.commune?.name,e.wilaya?.name].filter(Boolean).join(`, `))}</div>
  <div><small>${_(e.delivery_mode?v[e.delivery_mode]:``)}</small></div>
  ${e.customer_note?`<div><small>Note du client : ${_(e.customer_note)}</small></div>`:``}

  <h2>Articles</h2>
  <table><thead><tr><th>Article</th><th class="n">Qté</th><th class="n">Prix</th><th class="n">Total</th></tr></thead><tbody>${r}</tbody>
  <tfoot>
    <tr><td colspan="3" class="n">Sous-total</td><td class="n">${u(e.subtotal)}</td></tr>
    <tr><td colspan="3" class="n">Livraison</td><td class="n">${u(e.delivery_fee)}</td></tr>
    ${e.discount?`<tr><td colspan="3" class="n">Remise</td><td class="n">−${u(e.discount)}</td></tr>`:``}
    <tr class="total"><td colspan="3" class="n">À encaisser</td><td class="n">${u(e.total)}</td></tr>
  </tfoot></table>

  <h2>Notes</h2>
  <div class="box">${_(e.admin_note)}</div>
  <script>window.onload=()=>{window.print()}<\/script>
</body></html>`,a=window.open(``,`_blank`,`width=800,height=900`);return a?(a.document.write(i),a.document.close(),!0):!1}var b={especes:`Espèces`,carte:`Carte`,ccp:`CCP / BaridiMob`,cod:`À la livraison`};function x(e,t){let n=e.customer,r=(e.items??[]).map(e=>`<div class="row"><span>${_(e.product_name)} ${_(e.variant_label)}</span></div><div class="row sub"><span>${e.quantity} x ${u(e.unit_price)}</span><span>${u(e.line_total)}</span></div>${e.list_price&&e.list_price>e.unit_price?`<div class="sub muted">Prix normal ${u(e.list_price)}</div>`:``}`).join(``),i=`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${_(e.reference)}</title>
<style>
  @page{size:80mm auto;margin:0}
  body{width:72mm;margin:3mm 4mm;font:12px/1.35 "Courier New",monospace;color:#000}
  h1{font-size:15px;text-align:center;margin:0 0 2px} .c{text-align:center} .muted{color:#333;font-size:11px}
  .row{display:flex;justify-content:space-between;gap:6px} .sub{padding-left:8px;font-size:11px}
  hr{border:0;border-top:1px dashed #000;margin:6px 0} .total{font-size:15px;font-weight:700}
</style></head><body>
  <h1>${_(t.name)}</h1>
  <div class="c muted">${_(t.address??``)}${t.phone?`<br>${_(o(t.phone))}`:``}</div>
  <hr>
  <div class="row"><span>Ticket ${_(e.reference)}</span><span>${_(f(e.created_at))}</span></div>
  ${e.created_by?`<div class="muted">Vendeur : ${_(e.created_by)}</div>`:``}
  ${n.first_name||n.last_name?`<div class="muted">Client : ${_([n.first_name,n.last_name].filter(Boolean).join(` `))}</div>`:``}
  <hr>
  ${r}
  <hr>
  <div class="row"><span>Sous-total</span><span>${u(e.subtotal)}</span></div>
  ${e.discount?`<div class="row"><span>Remise</span><span>-${u(e.discount)}</span></div>`:``}
  <div class="row total"><span>TOTAL</span><span>${u(e.total)}</span></div>
  <div class="row"><span>Paiement</span><span>${_(b[e.payment_method]??e.payment_method)}</span></div>
  ${e.amount_received===null?``:`<div class="row"><span>Reçu</span><span>${u(e.amount_received)}</span></div><div class="row"><span>Rendu</span><span>${u(e.change_due??0)}</span></div>`}
  <hr>
  <div class="c">Merci de votre visite !</div>
  <script>window.onload=()=>{window.print()}<\/script>
</body></html>`,a=window.open(``,`_blank`,`width=420,height=720`);return a?(a.document.write(i),a.document.close(),!0):!1}function S(e,t){y(e,t)||i.error(`Impossible d'ouvrir la fenêtre d'impression. Autorisez les pop-ups pour ce site.`)}function C(e,t){x(e,t)||i.error(`Impossible d'ouvrir la fenêtre d'impression. Autorisez les pop-ups pour ce site.`)}var w=e(t(),1),T=r(),E={first_name:``,last_name:``,phone:``,wilaya_id:0,commune_id:0},D=`space-y-1 text-sm`,O=`text-muted-foreground`;function k({value:e,onChange:t}){let[n,r]=(0,w.useState)(``),[i,u]=(0,w.useState)(null),f=p(m(n,250)),h=s(),g=l(e.wilaya_id||null),{data:_}=c(),v=_?.default_location;(0,w.useEffect)(()=>{e.wilaya_id===0&&v?.wilaya_id&&t({...e,wilaya_id:v.wilaya_id,commune_id:v.commune_id??0})},[v?.wilaya_id,v?.commune_id,e,t]);let y=e=>{u(e),r(``),t({first_name:e.first_name,last_name:e.last_name,phone:e.phone,wilaya_id:e.wilaya_id??v?.wilaya_id??0,commune_id:e.commune_id??(e.wilaya_id?0:v?.commune_id??0)})},b=n=>{u(null),t({...e,...n})},x=e.first_name.trim()!==``||e.last_name.trim()!==``||e.phone.trim()!==``,S=e.first_name.trim()!==``&&e.last_name.trim()!==``&&e.phone.trim()!==``;return(0,T.jsxs)(`div`,{className:`space-y-3 text-sm`,children:[(0,T.jsxs)(`div`,{className:`relative`,children:[(0,T.jsxs)(`label`,{className:`relative block`,children:[(0,T.jsx)(`span`,{className:`sr-only`,children:`Rechercher un client`}),(0,T.jsx)(a,{className:`pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted-foreground`,"aria-hidden":!0}),(0,T.jsx)(`input`,{type:`search`,value:n,onChange:e=>r(e.target.value),placeholder:`Rechercher un client (nom ou téléphone)`,className:`${d} ps-9`})]}),n.trim().length>=2&&(0,T.jsx)(`ul`,{className:`absolute inset-x-0 top-full z-20 mt-1 max-h-60 overflow-y-auto rounded-md border border-border bg-card shadow-md`,role:`listbox`,children:f.isPending?(0,T.jsx)(`li`,{className:`p-3 text-muted-foreground`,children:`Chargement…`}):f.data?.length===0?(0,T.jsx)(`li`,{className:`p-3 text-muted-foreground`,children:`Aucun client trouvé : remplissez les champs ci-dessous pour le créer.`}):f.data?.map(e=>(0,T.jsx)(`li`,{children:(0,T.jsxs)(`button`,{type:`button`,role:`option`,"aria-selected":!1,onClick:()=>y(e),className:`flex w-full items-center justify-between gap-3 px-3 py-2 text-start hover:bg-accent focus-visible:bg-accent focus-visible:outline-none`,children:[(0,T.jsxs)(`span`,{className:`min-w-0 truncate font-medium`,children:[e.first_name,` `,e.last_name]}),(0,T.jsxs)(`span`,{className:`tnum shrink-0 text-xs text-muted-foreground`,children:[o(e.phone),e.wilaya?` · ${e.wilaya}`:``]})]})},e.id))})]}),i&&(0,T.jsx)(`p`,{className:`rounded-md bg-secondary/60 px-3 py-2`,children:`Client existant : ${i.first_name} ${i.last_name}, ${i.orders_count} commande${i.orders_count>1?`s`:``}.`}),(0,T.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,T.jsxs)(`label`,{className:D,children:[(0,T.jsx)(`span`,{className:O,children:`Prénom`}),(0,T.jsx)(`input`,{className:d,value:e.first_name,onChange:e=>b({first_name:e.target.value}),"aria-invalid":x&&e.first_name.trim()===``})]}),(0,T.jsxs)(`label`,{className:D,children:[(0,T.jsx)(`span`,{className:O,children:`Nom`}),(0,T.jsx)(`input`,{className:d,value:e.last_name,onChange:e=>b({last_name:e.target.value}),"aria-invalid":x&&e.last_name.trim()===``})]}),(0,T.jsxs)(`label`,{className:`${D} col-span-2`,children:[(0,T.jsx)(`span`,{className:O,children:`Téléphone`}),(0,T.jsx)(`input`,{className:d,inputMode:`tel`,value:e.phone,onChange:e=>b({phone:e.target.value}),"aria-invalid":x&&e.phone.trim()===``})]}),(0,T.jsxs)(`label`,{className:D,children:[(0,T.jsx)(`span`,{className:O,children:`Wilaya`}),(0,T.jsxs)(`select`,{className:d,value:e.wilaya_id,onChange:e=>b({wilaya_id:Number(e.target.value),commune_id:0}),children:[(0,T.jsx)(`option`,{value:0,children:`—`}),h.data?.map(e=>(0,T.jsxs)(`option`,{value:e.id,children:[e.code,` – `,e.name]},e.id))]})]}),(0,T.jsxs)(`label`,{className:D,children:[(0,T.jsx)(`span`,{className:O,children:`Commune`}),(0,T.jsxs)(`select`,{className:d,value:e.commune_id,disabled:!e.wilaya_id,onChange:e=>b({commune_id:Number(e.target.value)}),children:[(0,T.jsx)(`option`,{value:0,children:`—`}),g.data?.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})]}),x&&!S&&(0,T.jsx)(`p`,{role:`alert`,className:`text-destructive`,children:`Pour enregistrer le client, indiquez son prénom, son nom et son téléphone.`}),S&&!i&&(0,T.jsx)(`p`,{className:`text-muted-foreground`,children:`Un nouveau client sera créé avec ces informations (s'il n'existe pas déjà avec ce numéro).`})]})}export{g as a,C as i,E as n,S as r,k as t};