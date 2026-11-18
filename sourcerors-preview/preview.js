/* Public sample-only Sourcerors visualization. No backend, credentials, storage, payments or tracking. */
(() => {
  'use strict';
  const firms = Object.freeze([
    {id:'moss', name:'Moss & Ember Studio',city:'Winston-Salem',state:'NC',type:'Independent maker', initial:'M',about:'A fictional neighborhood studio making handcrafted home goods and running seasonal workshops.',job:'Seasonal Studio Assistant',summary:'Help prepare gift packages, label orders and welcome customers.',employment:'Part-time · Example position',contact:'Not published in demo',website:'Not connected in demo'},
    {id:'oak', name:'Oakline Workshop',city:'Winston-Salem',state:'NC',type:'Independent manufacturer',initial:'O',about:'A fictional local workshop creating home accessories, small-batch furniture and practical gifts.',job:'Fulfillment Coordinator',summary:'Coordinate inventory, packing and local pickups with a small team.',employment:'Full-time · Example position',contact:'Not published in demo',website:'Not connected in demo'},
    {id:'atlas',name:'Atlas Printworks',city:'Greensboro',state:'NC',type:'Independent print shop',initial:'A',about:'A fictional printing and packaging partner for local shops and community organizations.',job:'Print Production Assistant',summary:'Prepare print runs, check proofs and pack customer deliveries.',employment:'Part-time · Example position',contact:'Not published in demo',website:'Not connected in demo'},
    {id:'river',name:'Riverbend Home Supply',city:'Durham',state:'NC',type:'Retail & delivery',initial:'R',about:'A fictional home supply store specializing in locally sourced products and in-person help.',job:'Store Associate',summary:'Help customers find products and organize in-store pickup.',employment:'Flexible · Example position',contact:'Not published in demo',website:'Not connected in demo'}
  ]);
  const products = Object.freeze([
    {id:'candle',name:'Winter Pine Soy Candle',seller:'Moss & Ember Studio',description:'Hand-poured pine-scented candle. Example catalog item.',emoji:'🕯️',tags:'pine candle winter scented soy holiday home'},
    {id:'lamp',name:'Starlight Table Lamp',seller:'Oakline Workshop',description:'Warm ambient lighting. Example catalog item.',emoji:'💡',tags:'lamp lighting desk starlight ambient'},
    {id:'bag',name:'Woven Market Tote',seller:'Atlas Printworks',description:'Reusable woven tote for groceries and gifts. Example item.',emoji:'👜',tags:'bag tote gift woven shopper'},
    {id:'wood',name:'Oak Keepsake Box',seller:'Oakline Workshop',description:'Small decorative wooden storage box. Example item.',emoji:'🎁',tags:'oak wooden box gift keepsake'},
    {id:'plant',name:'Ceramic Herb Planter',seller:'Riverbend Home Supply',description:'Compact planter for windowsills. Example item.',emoji:'🪴',tags:'ceramic planter plant herb pot'}
  ]);
  const state = {page:'work',query:'',city:'all',selectedFirm:null,selectedProduct:null,productQuery:'',application:false,accepted:false,notification:'',consent:false};
  const $ = s=>document.querySelector(s);
  const escapeHTML = value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
  const button=(text,action,cls='')=>'<button class="btn '+cls+'" type="button" data-action="'+escapeHTML(action)+'">'+text+'</button>';
  const tabs={
    work:{title:'Get to the<br/><em>Source.</em>',sub:'Find real opportunities. Discover independent businesses. Connect directly with people.',kicker:'REAL PEOPLE · REAL BUSINESSES · REAL CONNECTIONS'},
    earn:{title:'Meet people.<br/><em>Make progress.</em>',sub:'Your applications, invitations and interview decisions belong to you.',kicker:'02 / HUMAN CONVERSATIONS'},
    products:{title:'Seen it somewhere?<br/><em>Find it again.</em>',sub:'Discover original sellers and products with clear information about every match.',kicker:'03 / EXACT SELLER DISCOVERY'},
    account:{title:'Your account.<br/><em>Your rules.</em>',sub:'Your private information should follow your consent, not an advertising algorithm.',kicker:'04 / YOUR IDENTITY'}
  };
  function notify(message){state.notification=message;}
  function firmCard(f){
    const jobMatches=(f.name+' '+f.about+' '+f.job+' '+f.city+' '+f.type).toLowerCase();
    if(state.query&&!jobMatches.includes(state.query.toLowerCase()))return '';
    if(state.city!=='all'&&f.city!==state.city)return '';
    return '<article class="card"><div class="card-top"><div class="identity"><div class="avatar" aria-hidden="true">'+escapeHTML(f.initial)+'</div><div><h3>'+escapeHTML(f.name)+'</h3><div class="micro">'+escapeHTML(f.city)+', NC</div></div></div><span class="pill gold">Fictional</span></div><p>'+escapeHTML(f.about)+'</p><div class="row"><span class="pill">'+escapeHTML(f.job)+'</span><span class="pill outlined">'+escapeHTML(f.type)+'</span></div><div class="actions" style="margin-top:12px">'+button('About · Careers · Apply','firm:'+f.id)+'</div></article>';
  }
  function work(){
    if(state.selectedFirm){
      const f=firms.find(x=>x.id===state.selectedFirm);
      if(!f){state.selectedFirm=null;return work();}
      return '<section class="layout"><div class="stack"><article class="panel"><div class="between"><span class="label">SOURCE-FIRST ORGANIZATION PROFILE</span><span class="pill gold">FICTIONAL EXAMPLE</span></div><h2 style="margin-top:12px">'+escapeHTML(f.name)+'</h2><p>'+escapeHTML(f.about)+'</p><dl class="company-data"><dt>Location</dt><dd>'+escapeHTML(f.city)+', '+escapeHTML(f.state)+'</dd><dt>Business website</dt><dd><em>'+escapeHTML(f.website)+'</em></dd><dt>Public contact</dt><dd><em>'+escapeHTML(f.contact)+'</em></dd><dt>Careers</dt><dd><em>Example positions shown below</em></dd></dl><hr/><h3>'+escapeHTML(f.job)+'</h3><p>'+escapeHTML(f.summary)+'</p><div class="row"><span class="pill outlined">'+escapeHTML(f.employment)+'</span></div><div class="actions" style="margin-top:15px">'+button('← All organizations','back','secondary')+button('Apply (demo only)','show-apply')+'</div></article>'+ (state.consent?applyConfirmation(f):'')+'</div><div class="stack"><section class="panel"><h3>What would be shared?</h3><p>In the real application, candidates must approve the exact information each employer receives. This demo collects no name, email, phone or résumé.</p><div class="info"><strong>Not shared</strong><p>Shopping history, browsing history and applications to other businesses never become hiring evidence.</p></div></section></div></section>';
    }
    const filtered=firms.map(firmCard).filter(Boolean);
    return '<div class="layout"><div class="stack"><section class="panel"><div class="between"><div><span class="label">FIND WORK</span><h2>Start where you are.</h2></div><span class="pill">User-controlled filters</span></div><form id="workSearch"><div class="field"><label for="workInput">Position, company or product skill</label><input id="workInput" name="query" placeholder="Try studio, fulfillment, printer…" autocomplete="off" value="'+escapeHTML(state.query)+'"/></div><div class="field-grid"><div class="field"><label for="cityInput">Sample location</label><select name="city" id="cityInput"><option value="all">All locations</option><option value="Winston-Salem">Winston-Salem</option><option value="Greensboro">Greensboro</option><option value="Durham">Durham</option></select></div><div class="field"><label>Search control</label><button type="submit" class="btn full-width">Show opportunities</button></div></div><span class="micro">Demo businesses are sorted alphabetically, never by AI score. Location is a user-selected sample filter.</span></form></section><section class="panel"><div class="between"><h2>Organizations near the pilot</h2><span class="pill outlined">'+filtered.length+' example'+(filtered.length===1?'':'s')+'</span></div><div class="results">'+(filtered.join('')||'<div class="empty"><strong>No sample businesses matched.</strong><p>Try removing the search term or widening the location filter.</p>'+button('Clear filters','clear-work','secondary')+'</div>')+'</div></section></div><div class="stack"><div class="panel"><span class="label">WHY SOURCERORS?</span><h3>AI helps you find, not impersonate.</h3><p>AI can organize, explain and recommend results, but applicants, employers, sellers, customers and other people must represent themselves. See the business source, make your choice and contact people directly.</p><div class="info"><strong>Human-controlled decisions</strong><p>AI may explain a listing, but only an actual employer can issue an invitation or select a candidate.</p></div></div><div class="panel"><h3>Transparent coverage</h3><p>These four examples are invented for interface testing. The real Sourcerors application requires verified companies and source-linked openings.</p><span class="pill gold">Not live job listings</span></div></div></div>';
  }
  function applyConfirmation(f){
    if(!state.application){
      return '<section class="panel"><h3>Application permissions</h3><p>This is a safe simulation: no information leaves your device, and no real account is created.</p><label class="checkbox"><input id="applyConsent" type="checkbox"/><span>I understand this will only simulate an application to '+escapeHTML(f.name)+'.</span></label><div class="actions" style="margin-top:12px">'+button('Confirm demo application','confirm-apply')+button('Cancel','cancel-apply','secondary')+'</div></section>';
    }
    return '<section class="panel"><div class="info"><strong>Demo application acknowledged</strong><p>No data was sent to an employer. Continue to the interviews page to explore the next step.</p></div><div class="actions" style="margin-top:12px">'+button('Go to interviews','goto:earn')+'</div></section>';
  }
  function earn(){
    return '<div class="layout"><div class="stack"><section class="panel"><div class="between"><div><span class="label">INTERVIEW WORKSPACE</span><h2>Real conversations come first.</h2></div><span class="pill gold">DEMONSTRATION</span></div>'+(state.application?'<article class="card"><div class="between"><strong>Application · '+escapeHTML(firms.find(f=>f.id===state.selectedFirm)?.job||'Sample position')+'</strong><span class="pill">Demo acknowledged</span></div><p>A fictional hiring manager has invited you for an illustrative interview.</p><div class="info"><strong>Interview invitation (simulation)</strong><p>Suggested conversation: Thursday, 3:00 PM (example only). No actual person or calendar is involved.</p><p>Status: '+(state.accepted?'Accepted in demo':'Awaiting your decision')+'</p></div><div class="actions" style="margin-top:13px">'+(state.accepted?button('Explore products','goto:products'):button('Accept example invitation','accept-invite')+button('Decline example invitation','decline-invite','secondary'))+'</div></article>':'<div class="empty"><strong>No sample applications yet.</strong><p>Explore a fictional organization in Work and simulate an application to see the interview flow.</p>'+button('Discover work','goto:work')+'</div>')+'</section><section class="panel"><h3>Optional paid interviews</h3><div class="info gold"><strong>Not enabled</strong><p>There are no deposits, wages, escrow accounts, pending rewards or payouts in this demonstration.</p></div><p>Actual compensation would require independently reviewed terms, approved payment providers and relevant legal safeguards.</p></section></div><div class="stack"><section class="panel"><span class="label">HUMAN AUTHORITY</span><h3>Who makes each decision?</h3><ol class="steps"><li>The applicant chooses whom to contact.</li><li>A verified human manager invites the candidate.</li><li>The applicant accepts or declines.</li><li>Payments remain disabled until independently approved.</li></ol></section></div></div>';
  }
  function productCard(p){
    return '<article class="product"><div class="product-art" aria-hidden="true">'+p.emoji+'</div><div class="product-content"><span class="pill gold">Sample product</span><h3>'+escapeHTML(p.name)+'</h3><p>'+escapeHTML(p.seller)+'</p>'+button('Inspect match','product:'+p.id,'secondary')+'</div></article>';
  }
  function productsView(){
    if(state.selectedProduct){
      const p=products.find(x=>x.id===state.selectedProduct);
      if(!p){state.selectedProduct=null;return productsView();}
      return '<div class="layout"><div class="stack"><section class="panel"><div class="between"><span class="label">SOURCE AND SELLER DETAILS</span><span class="pill gold">SIMULATED CATALOG</span></div><h2>'+escapeHTML(p.name)+'</h2><p>'+escapeHTML(p.description)+'</p><dl class="company-data"><dt>Seller</dt><dd>'+escapeHTML(p.seller)+'</dd><dt>Match</dt><dd>Text-based candidate match only</dd><dt>Official website</dt><dd><em>Not available for fictional seller</em></dd><dt>Shipping promise</dt><dd><em>Unknown — no promise made</em></dd></dl><div class="actions">'+button('← Return to product results','close-product','secondary')+button('Continue job search','goto:work')+'</div></section></div><div class="stack"><section class="panel"><h3>No invented certainty</h3><p>The real system must distinguish exact product identification from similar-looking alternatives, and seller claims from verified facts.</p></section></div></div>';
    }
    const needle=state.productQuery.trim().toLowerCase();
    const shown=products.filter(p=>!needle||[p.name,p.description,p.seller,p.tags].join(' ').toLowerCase().includes(needle));
    return '<div class="layout"><div class="stack"><section class="panel"><span class="label">REDISCOVER PRODUCTS</span><h2>What was that item?</h2><p>Describe what you remember from a social video or a conversation. Sourcerors should find the original source—not bury it beneath substitutes.</p><form id="productSearch"><div class="field"><label for="productInput">Product description</label><input id="productInput" name="query" autocomplete="off" value="'+escapeHTML(state.productQuery)+'" placeholder="Try candle, tote, lamp or oak"/></div><button type="submit" class="btn">Search example catalog</button></form><p class="micro">No saved videos, social-media histories, private accounts or third-party services are accessed.</p></section><section class="panel"><div class="between"><h2>Seller listings</h2><span class="pill outlined">'+shown.length+' example products</span></div>'+(shown.length?'<div class="product-grid">'+shown.map(productCard).join('')+'</div>':'<div class="empty"><strong>No example products match.</strong><p>Try another keyword. A missing result never becomes an invented seller.</p>'+button('Show all products','clear-products','secondary')+'</div>')+'</section></div><div class="stack"><section class="panel"><h3>How matches work</h3><ol class="steps"><li>Describe the item in your own words.</li><li>Find original merchant sources and attributed sellers.</li><li>Keep exact and similar matches separate.</li><li>Confirm stock, price and shipping with the seller.</li></ol></section><div class="info"><strong>Your shopping stays independent.</strong><p>Employers cannot read product searches or use them to decide on a candidate.</p></div></div></div>';
  }
  function account(){
    return '<div class="layout"><div class="stack"><section class="panel"><span class="label">ACCOUNT DESIGN PREVIEW</span><h2>Your identity is not inventory.</h2><p>One account may support work, interviews and shopping, but it never gives every business automatic access to your personal information.</p><div class="metrics"><div class="metric"><strong>Human</strong><small>Hiring decisions</small></div><div class="metric"><strong>Consent</strong><small>Information sharing</small></div><div class="metric"><strong>Visible</strong><small>Sources and uncertainty</small></div><div class="metric"><strong>Separate</strong><small>Work and shopping data</small></div></div><div class="actions" style="margin-top:16px">'+button('Reset example interactions','reset','secondary')+'</div></section></div><div class="stack"><section class="panel"><h3>No sign-in here</h3><p>This temporary public preview intentionally does not accept passwords, names, phone numbers, job applications or payment information.</p><div class="info gold"><strong>Real accounts are not on GitHub Pages.</strong><p>The separately tested server implementation remains private and must pass production security review before public applicants can register.</p></div></section></div></div>';
  }
  const fundingReasons = Object.freeze({
    work: {
      title:'Why work discovery deserves support',
      text:'Applicants need reliable employer sources, and businesses need to hear from real applicants. Funding could help verify organizations, expand local coverage, keep applications free, and test whether user-directed search makes opportunities easier to find. This demo does not measure hiring outcomes.'
    },
    earn: {
      title:'Why interviews should stay human',
      text:'A hiring manager, not an impersonating bot, should decide whether to invite someone. Funding would help build secure invitations, identity review, notifications, accessibility, and fraud protections. Paid interviews remain a separate legal and payment-provider milestone—not a current earning opportunity.'
    },
    products: {
      title:'Why independent sellers need a direct path',
      text:'Shoppers often remember the product but lose the seller. Funding could support merchant onboarding and source-linked product matching so users can compare exact and possible matches without mistaking AI suggestions for the original creator. Real inventory and delivery information are not part of this demo.'
    },
    account: {
      title:'Why privacy is part of the product',
      text:'One account must not mean unrestricted sharing of personal information. Funding would help protect applicant records, separate shopping data from hiring, add account recovery and deletion, and fund independent security and accessibility checks before any public registration.'
    }
  });
  function render(){
    const t=tabs[state.page];
    $('#heroKicker').textContent=t.kicker;
    $('#heroTitle').innerHTML=t.title;
    $('#heroBody').textContent=t.sub;
    document.querySelectorAll('[data-tab]').forEach(el=>{const active=el.dataset.tab===state.page;el.classList.toggle('is-active',active);el.setAttribute('aria-current',active?'page':'false');});
    $('#page').innerHTML=({work,earn,products:productsView,account}[state.page])();
    const explanation=fundingReasons[state.page];$('#fundingContextTitle').textContent=explanation.title;$('#fundingContextText').textContent=explanation.text;
    const n=$('#notice');n.hidden=!state.notification;n.textContent=state.notification||'';
    const city=$('#cityInput');if(city)city.value=state.city;
  }
  document.addEventListener('click',event=>{
    const b=event.target.closest('button');if(!b)return;
    if(b.dataset.tab){state.page=b.dataset.tab;state.notification='';render();return;}
    const action=b.dataset.action;if(!action)return;
    state.notification='';
    if(action.startsWith('goto:'))state.page=action.slice(5);
    else if(action.startsWith('firm:')){state.selectedFirm=action.slice(5);state.consent=false;state.application=false;state.accepted=false;}
    else if(action==='back'){state.selectedFirm=null;state.consent=false;}
    else if(action==='show-apply')state.consent=true;
    else if(action==='cancel-apply')state.consent=false;
    else if(action==='confirm-apply'){
      if(!$('#applyConsent')?.checked){notify('Check the acknowledgement first. This preview submits nothing to an employer.');}
      else{state.application=true;notify('Simulated application created for preview only. Nothing was transmitted or stored.');}
    }
    else if(action==='accept-invite'){state.accepted=true;notify('Simulated invitation accepted. No calendar or employer was contacted.');}
    else if(action==='decline-invite'){state.application=false;state.accepted=false;notify('Simulated invitation declined.');}
    else if(action.startsWith('product:'))state.selectedProduct=action.slice(8);
    else if(action==='close-product')state.selectedProduct=null;
    else if(action==='clear-products')state.productQuery='';
    else if(action==='clear-work'){state.query='';state.city='all';}
    else if(action==='reset'){Object.assign(state,{page:'work',query:'',city:'all',selectedFirm:null,selectedProduct:null,productQuery:'',application:false,accepted:false,notification:'',consent:false});}
    render();
  });
  document.addEventListener('submit',event=>{
    event.preventDefault();
    if(event.target.id==='workSearch'){state.query=$('#workInput').value.trim().slice(0,120);state.city=$('#cityInput').value;state.selectedFirm=null;state.notification='';}
    if(event.target.id==='productSearch'){state.productQuery=$('#productInput').value.trim().slice(0,120);state.selectedProduct=null;state.notification='';}
    render();
  });
  render();
})();
