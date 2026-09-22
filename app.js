const KEY="familyPlannerLocalV2";
const USDA_KEY_STORAGE="familyPlannerUsdaApiKey";
const NAV=[["home","⌂","Home"],["food","◫","Food"],["recipes","▤","Recipes"],["meals","◉","Meals"],["groceries","✓","List"],["budget","$","Budget"],["tax","%","Tax"],["medical","✚","Medical"],["driving","↗","Drive"],["business","▣","Business"],["reports","▥","Reports"],["settings","⚙","Settings"]];
const RECIPES=[
{id:"greekChicken",name:"Greek Chicken",servings:6,cost:10,tags:["protein"],q:"Greek chicken recipe",ing:[["chicken",2,"lb"],["lemon",2,"count"],["plain yogurt",8,"oz"]]},
{id:"bakedPotato",name:"Baked Potato Night",servings:4,cost:6,tags:["cheap","calcium"],q:"baked potato dinner recipe",ing:[["russet potatoes",2,"lb"],["cheddar",6,"oz"],["sour cream",8,"oz"]]},
{id:"chickenPasta",name:"Creamy Chicken Pasta",servings:6,cost:9,tags:["protein","calcium"],q:"creamy chicken pasta recipe",ing:[["chicken",1,"lb"],["pasta",16,"oz"],["cream",8,"oz"],["Parmesan",4,"oz"]]},
{id:"pizza",name:"Sheet Pan Cheese Pizza",servings:6,cost:9,tags:["cheap","calcium"],q:"sheet pan cheese pizza recipe",ing:[["flour",32,"oz"],["pizza sauce",14,"oz"],["mozzarella",16,"oz"]]},
{id:"chili",name:"Bean Chili",servings:6,cost:8,tags:["cheap","protein"],q:"budget bean chili recipe",ing:[["beans",3,"cans"],["diced tomatoes",2,"cans"],["onion",1,"count"]]},
{id:"mac",name:"Homemade Mac & Cheese",servings:4,cost:5,tags:["cheap","calcium"],q:"homemade mac and cheese recipe",ing:[["macaroni",8,"oz"],["cheddar",8,"oz"],["milk",12,"oz"]]},
{id:"chickenRice",name:"Chicken & Rice",servings:6,cost:8,tags:["cheap","protein"],q:"budget chicken and rice recipe",ing:[["rice",12,"oz"],["chicken",1,"lb"],["mixed vegetables",12,"oz"]]},
{id:"pastaCeci",name:"Pasta e Ceci",servings:4,cost:6,tags:["cheap","protein"],q:"site:giallozafferano.com pasta e ceci recipe",ing:[["pasta",12,"oz"],["chickpeas",2,"cans"],["tomato paste",1,"can"]]},
{id:"marrySoup",name:"Marry Me Chicken Soup",servings:6,cost:10,tags:["protein","calcium"],q:"Marry Me Chicken Soup recipe",ing:[["chicken",1.5,"lb"],["cream",8,"oz"],["Parmesan",4,"oz"],["spinach",6,"oz"],["sun dried tomatoes",5,"oz"]]},
{id:"stuffedShells",name:"Stuffed Shells",servings:6,cost:12,tags:["protein","calcium"],q:"stuffed shells ricotta mozzarella recipe",ing:[["jumbo shells",12,"oz"],["ricotta",15,"oz"],["mozzarella",12,"oz"],["pasta sauce",24,"oz"]]},
{id:"sliders",name:"Ham + Turkey Slider Split",servings:6,cost:13.5,tags:["protein","calcium"],q:"ham turkey sliders Hawaiian rolls recipe",ing:[["slider rolls",12,"count"],["ham",8,"oz"],["turkey",8,"oz"],["cheese",8,"oz"]]},
{id:"chickenParm",name:"Chicken Parmesan",servings:4,cost:8.5,tags:["protein","calcium"],q:"budget chicken parmesan recipe",ing:[["chicken",1.5,"lb"],["pasta sauce",16,"oz"],["mozzarella",8,"oz"],["breadcrumbs",4,"oz"]]},
{id:"tacoBowls",name:"Slow Cooker Chicken Taco Bowls",servings:6,cost:10.5,tags:["protein","cheap"],q:"slow cooker chicken taco bowl recipe",ing:[["chicken",1.5,"lb"],["beans",2,"cans"],["rice",12,"oz"],["salsa",16,"oz"]]},
{id:"homemadeNuggets",name:"Homemade Chicken Nuggets",servings:4,cost:5.5,tags:["protein","cheap"],q:"homemade chicken nuggets recipe",ing:[["chicken",1,"lb"],["breadcrumbs",4,"oz"],["eggs",2,"count"]]},
{id:"pastaFagioli",name:"Pasta e Fagioli",servings:6,cost:7,tags:["protein","cheap"],q:"site:giallozafferano.com pasta e fagioli recipe",ing:[["pasta",10,"oz"],["beans",2,"cans"],["diced tomatoes",1,"can"],["onion",1,"count"]]},
{id:"broccoliCass",name:"Chicken Broccoli Casserole",servings:6,cost:9,tags:["protein","calcium"],q:"chicken broccoli casserole recipe",ing:[["chicken",1.5,"lb"],["broccoli",16,"oz"],["rice",10,"oz"],["cheddar",8,"oz"]]},
{id:"quesadillas",name:"Chicken Quesadillas",servings:4,cost:7.5,tags:["protein","calcium"],q:"chicken quesadilla recipe",ing:[["chicken",1,"lb"],["tortillas",8,"count"],["cheddar",8,"oz"],["salsa",8,"oz"]]},
{id:"burgers",name:"Hamburger Night",servings:4,cost:10,tags:["protein"],q:"simple homemade hamburgers recipe",ing:[["ground beef",1.5,"lb"],["burger buns",4,"count"],["cheddar",4,"oz"]]},
{id:"loadedPotatoes",name:"Loaded Chicken Baked Potatoes",servings:4,cost:8,tags:["protein","calcium"],q:"loaded chicken baked potato recipe",ing:[["russet potatoes",2,"lb"],["chicken",1,"lb"],["cheddar",6,"oz"],["sour cream",8,"oz"]]}
];
const RECIPE_META={
 greekChicken:{appliances:["stove","oven"]},bakedPotato:{appliances:["oven","air fryer"]},chickenPasta:{appliances:["stove"]},pizza:{appliances:["oven","mixer"]},chili:{appliances:["stove","Instant Pot","Crock Pot"]},mac:{appliances:["stove","Instant Pot"]},chickenRice:{appliances:["stove","Instant Pot"]},pastaCeci:{appliances:["stove"]},marrySoup:{appliances:["stove","Crock Pot"]},stuffedShells:{appliances:["stove","oven"]},sliders:{appliances:["oven"]},chickenParm:{appliances:["stove","oven","air fryer"]},tacoBowls:{appliances:["Crock Pot"]},homemadeNuggets:{appliances:["air fryer","oven"]},pastaFagioli:{appliances:["stove"]},broccoliCass:{appliances:["stove","oven"]},quesadillas:{appliances:["stove"]},burgers:{appliances:["stove","air fryer"]},loadedPotatoes:{appliances:["oven","air fryer"]}
};
const ALL_APPLIANCES=["fridge/freezer","stove","air fryer","mixer","blender","toaster","bread machine","Instant Pot","Crock Pot"];
RECIPES.forEach(r=>Object.assign(r,RECIPE_META[r.id]||{}, {rating:r.rating??null,ratingCount:r.ratingCount??null,sourceName:r.sourceName||"Household recipe",sourceUrl:r.sourceUrl||"",sourceLicense:r.sourceLicense||"Household"}));
const blank=()=>({version:8,profileLoaded:false,view:"home",householdLabel:"My Household",ebtBudget:0,ebtCardBalance:"",ebtBalanceUpdated:"",dinnerSlots:30,zip:"",prices:[],essentials:[],inventory:[],cookbook:[],catalogProducts:[],ingredientLinks:{},deals:[],lastProductLookup:null,lastSafetyCheck:null,plan:{},cooked:{},purchased:{},purchaseCost:{},priceHistory:[],income:{salaryAnnual:0,withholdingPct:0,tipNights:0,tipsAvg:0,tipsLow:0,tipsHigh:0,note:""},incomeSources:[],incomeCalendarMonth:"",taxProfile:{taxYear:2026,filingStatus:"hoh",federalMode:"auto",federalPct:12,federalDeductionMode:"standard",federalCustomDeduction:0,federalOtherDeductions:0,federalCredits:0,federalExtraAnnual:0,ncMode:"auto",ncPct:3.99,ncDeductionMode:"standard",ncCustomDeduction:0,ncAdjustments:0,ncCredits:0,ncExtraAnnual:0,socialSecurityPct:6.2,medicarePct:1.45,additionalMedicare:true},taxItems:[],medical:{items:[],calendarMonth:""},bills:[],dailyExpenses:[],otherCash:0,lastBackupAt:"",shoppingMode:"lowest",itemOverrides:{},storeOffers:[],calendarMonth:"",actualMonth:"",actualHistory:{},assets:[],liabilities:[],sinkingFunds:[],business:{name:"My Business",cash:0,taxReservePct:0,ownerDraw:0,householdTransfer:0,revenue:[],expenses:[],reserves:[],assets:[],liabilities:[],notes:""},fuel:{pricePerGal:0,priceUpdated:"",mpg:"",station:"",routes:[]}});
let state=(()=>{try{return Object.assign(blank(),JSON.parse(localStorage.getItem(KEY)||"{}"))}catch{return blank()}})();
(()=>{let b=blank();state.income=Object.assign({},b.income,state.income||{});state.taxProfile=Object.assign({},b.taxProfile,state.taxProfile||{});state.medical=Object.assign({},b.medical,state.medical||{});state.fuel=Object.assign({},b.fuel,state.fuel||{});state.business=Object.assign({},b.business,state.business||{});["prices","essentials","inventory","cookbook","catalogProducts","deals","priceHistory","incomeSources","taxItems","bills","dailyExpenses","storeOffers","assets","liabilities","sinkingFunds"].forEach(k=>{if(!Array.isArray(state[k]))state[k]=[]});if(!state.ingredientLinks||typeof state.ingredientLinks!=="object")state.ingredientLinks={};if(!Array.isArray(state.medical.items))state.medical.items=[];["revenue","expenses","reserves","assets","liabilities"].forEach(k=>{if(!Array.isArray(state.business[k]))state.business[k]=[]});state.version=8})();
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], n=v=>Number.isFinite(+v)?+v:0, money=v=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n(v)), esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m])), search=q=>"https://www.google.com/search?q="+encodeURIComponent(q);
const save=()=>localStorage.setItem(KEY,JSON.stringify(state)), ym=()=>new Date().toISOString().slice(0,7), days=()=>new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
function styleMoneyDecimals(root=document.querySelector("#app")){
  if(!root)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()){
    const node=walker.currentNode,parent=node.parentElement;
    if(!parent||parent.closest(".money-decimal")||parent.matches("input,textarea,option,script,style"))continue;
    if(/\$[\d,]+\.\d{2,6}/.test(node.nodeValue||""))nodes.push(node);
  }
  nodes.forEach(node=>{
    const text=node.nodeValue||"",re=/(\$[\d,]+)(\.\d{2,6})/g;
    let last=0,m,frag=document.createDocumentFragment();
    while((m=re.exec(text))){
      if(m.index>last)frag.append(document.createTextNode(text.slice(last,m.index)));
      frag.append(document.createTextNode(m[1]));
      const cents=document.createElement("span");cents.className="money-decimal";cents.textContent=m[2];frag.append(cents);
      last=re.lastIndex;
    }
    if(last<text.length)frag.append(document.createTextNode(text.slice(last)));
    node.replaceWith(frag);
  });
}
const mdiff=(a,b)=>{let A=(a||ym()).split("-").map(Number),B=(b||ym()).split("-").map(Number);return(B[0]-A[0])*12+B[1]-A[1]};
const due=b=>{let d=mdiff(b.startMonth,ym());return d>=0&&d%Math.max(1,n(b.frequencyMonths)||1)===0};
const essentialsTotal=()=>state.essentials.reduce((s,e)=>s+n(e.qty)*n(e.unitPrice),0);
function normalizePlan(){
  if(!state.plan||typeof state.plan!=="object")state.plan={};
  Object.entries(state.plan).forEach(([id,v])=>{
    if(typeof v==="number"){let old=Math.max(1,n(v));state.plan[id]={count:old,dates:[],prepared:Math.min(old,n((state.cooked||{})[id])),addedAt:0}}
    else if(!v||typeof v!=="object"){delete state.plan[id]}
    else{v.count=Math.max(1,n(v.count)||Math.max(1,(Array.isArray(v.dates)?v.dates.length:0)));v.dates=Array.isArray(v.dates)?[...new Set(v.dates.filter(Boolean))]:[];v.prepared=Math.min(v.count,Math.max(0,n(v.prepared)));v.addedAt=n(v.addedAt)}
  });
}
normalizePlan();
const planEntry=id=>state.plan[id]||null;
const planCount=e=>e?Math.max(1,n(e.count)||1):0;
const preparedFor=e=>e?Math.min(planCount(e),Math.max(0,n(e.prepared))):0;
const remainingFor=e=>Math.max(0,planCount(e)-preparedFor(e));
const plannedCount=()=>Object.values(state.plan).reduce((s,e)=>s+planCount(e),0);
const preparedCount=()=>Object.values(state.plan).reduce((s,e)=>s+preparedFor(e),0);
const remainingPlanned=()=>Object.values(state.plan).reduce((s,e)=>s+remainingFor(e),0);
const remainingMeals=()=>Math.max(0,n(state.dinnerSlots)-preparedCount());
const planTotal=()=>Object.entries(state.plan).reduce((s,[id,e])=>s+planCount(e)*(recipeById(id)?.cost||0),0);
const foodLeft=()=>n(state.ebtBudget)-essentialsTotal()-planTotal();
const batches=()=>plannedCount(), slots=()=>Math.max(0,n(state.dinnerSlots)-plannedCount()), target=()=>slots()?Math.max(0,foodLeft()/slots()):0;
const repeats=r=>Math.max(0,Math.min(slots(),Math.floor(Math.max(0,foodLeft())/Math.max(.01,r.cost))));
const recipeById=id=>RECIPES.find(r=>r.id===id)||state.cookbook.find(r=>r.id===id);
const fullCookbook=()=>[...RECIPES,...state.cookbook.filter(r=>!RECIPES.some(x=>x.id===r.id))];
const activeRecipes=()=>Object.entries(state.plan).filter(([,e])=>remainingFor(e)>0).map(([id,e])=>({recipe:recipeById(id),entry:e})).filter(x=>x.recipe);
const expectedMealCost=r=>r.ing.reduce((s,i)=>{let buy=Math.max(0,n(i[1])-inventoryQty(i[0],i[2])),v=ingredientExpected(i[0],buy,i[2]);return s+(v==null?0:v)},0);
const invKey=(name,unit)=>String(name||"").trim().toLowerCase()+"|"+String(unit||"").trim().toLowerCase();
const inventoryQty=(name,unit)=>state.inventory.filter(i=>invKey(i.name,i.unit)===invKey(name,unit)).reduce((s,i)=>s+n(i.qty),0);
const salaryGross=()=>n(state.income.salaryAnnual)/12, tips=rate=>n(rate??state.income.tipsAvg)*n(state.income.tipNights)*52/12;
const TAX_2026={
 federal:{
  standard:{single:16100,mfs:16100,mfj:32200,qss:32200,hoh:24150},
  brackets:{
   single:[[12400,.10],[50400,.12],[105700,.22],[201775,.24],[256225,.32],[640600,.35],[Infinity,.37]],
   mfs:[[12400,.10],[50400,.12],[105700,.22],[201775,.24],[256225,.32],[384350,.35],[Infinity,.37]],
   mfj:[[24800,.10],[100800,.12],[211400,.22],[403550,.24],[512450,.32],[768700,.35],[Infinity,.37]],
   qss:[[24800,.10],[100800,.12],[211400,.22],[403550,.24],[512450,.32],[768700,.35],[Infinity,.37]],
   hoh:[[17700,.10],[67450,.12],[105700,.22],[201750,.24],[256200,.32],[640600,.35],[Infinity,.37]]
  }
 },
 nc:{rate:.0399,standard:{single:12750,mfs:12750,mfj:25500,qss:25500,hoh:19125}},
 fica:{ssRate:.062,ssBase:184500,medicareRate:.0145,additionalMedicareRate:.009,additionalMedicareWithholdingThreshold:200000}
};
const filingStatus=()=>["single","mfs","mfj","qss","hoh"].includes(state.taxProfile?.filingStatus)?state.taxProfile.filingStatus:"hoh";
const filingStatusLabel=()=>({single:"Single",mfs:"Married filing separately",mfj:"Married filing jointly",qss:"Qualifying surviving spouse",hoh:"Head of household"})[filingStatus()];
function taxFromBrackets(taxable,brackets){
 let tax=0,prev=0,left=Math.max(0,n(taxable));
 for(const [top,rate] of brackets){if(left<=0)break;let width=Math.min(left,top-prev);tax+=width*rate;left-=width;prev=top}
 return tax;
}
function payrollGrossMonthRaw(month=ym()){
 if(state.incomeSources.length)return state.incomeSources.flatMap(s=>incomeDatesForMonth(s,month).map(()=>s)).filter(s=>s.taxMode==="payroll").reduce((sum,s)=>sum+n(s.amount),0);
 return salaryGross()+tips();
}
function annualizedSourceGross(s){
 const amount=n(s.amount),cad=s.cadence||"monthly";
 if(cad==="daily")return amount*365;
 if(cad==="weekly")return amount*52;
 if(cad==="biweekly")return amount*26;
 if(cad==="twice-monthly")return amount*24;
 if(cad==="tips")return amount*Math.max(1,n(s.daysPerWeek)||1)*52;
 if(cad==="random")return amount;
 return amount*12;
}
const payrollGrossAnnual=()=>state.incomeSources.length?state.incomeSources.filter(s=>s.taxMode==="payroll").reduce((sum,s)=>sum+annualizedSourceGross(s),0):(salaryGross()+tips())*12;
const federalDeduction=()=>state.taxProfile.federalDeductionMode==="custom"?Math.max(0,n(state.taxProfile.federalCustomDeduction)):TAX_2026.federal.standard[filingStatus()];
const ncDeduction=()=>state.taxProfile.ncDeductionMode==="custom"?Math.max(0,n(state.taxProfile.ncCustomDeduction)):TAX_2026.nc.standard[filingStatus()];
function payrollTaxBreakdown(){
 const gross=Math.max(0,payrollGrossAnnual()),tp=state.taxProfile||{},status=filingStatus();
 const fedTaxable=Math.max(0,gross-federalDeduction()-Math.max(0,n(tp.federalOtherDeductions)));
 const fedBase=taxFromBrackets(fedTaxable,TAX_2026.federal.brackets[status]);
 const federal=tp.federalMode==="manual"?gross*Math.max(0,n(tp.federalPct))/100:Math.max(0,fedBase-Math.max(0,n(tp.federalCredits)))+Math.max(0,n(tp.federalExtraAnnual));
 const ncTaxable=Math.max(0,gross+ n(tp.ncAdjustments)-ncDeduction());
 const nc=tp.ncMode==="manual"?gross*Math.max(0,n(tp.ncPct))/100:Math.max(0,ncTaxable*TAX_2026.nc.rate-Math.max(0,n(tp.ncCredits)))+Math.max(0,n(tp.ncExtraAnnual));
 const ssRate=Math.max(0,n(tp.socialSecurityPct))/100,medRate=Math.max(0,n(tp.medicarePct))/100;
 const socialSecurity=Math.min(gross,TAX_2026.fica.ssBase)*ssRate;
 const medicare=gross*medRate+((tp.additionalMedicare!==false)?Math.max(0,gross-TAX_2026.fica.additionalMedicareWithholdingThreshold)*TAX_2026.fica.additionalMedicareRate:0);
 const total=federal+nc+socialSecurity+medicare;
 return{gross,fedTaxable,federal,ncTaxable,nc,socialSecurity,medicare,total,effectivePct:gross?total/gross*100:0};
}
const payrollTaxPct=()=>payrollTaxBreakdown().effectivePct;
const sourceNet=s=>{let gross=n(s.amount);return s.taxMode==="payroll"?gross*(1-payrollTaxPct()/100):gross};
const legacyNet=()=>Math.max(0,(salaryGross()+tips())*(1-payrollTaxPct()/100));
const salaryNet=()=>Math.max(0,salaryGross()*(1-payrollTaxPct()/100));
const dateKey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function incomeDatesForMonth(s,month){
  let [y,m]=String(month||ym()).split("-").map(Number),last=new Date(y,m,0).getDate(),out=[],start=s.startDate?new Date(s.startDate+"T12:00:00"):new Date(y,m-1,1,12),cad=s.cadence||"monthly",monthStart=new Date(y,m-1,1,12),monthEnd=new Date(y,m-1,last,12);
  const push=d=>{if(d>=monthStart&&d<=monthEnd)out.push(dateKey(d))};
  if(cad==="random"){push(start);return out}
  if(cad==="monthly"){push(new Date(y,m-1,Math.min(last,start.getDate()),12));return out}
  if(cad==="twice-monthly"){let d1=Math.min(last,start.getDate()),d2=Math.min(last,d1+15);push(new Date(y,m-1,d1,12));if(d2!==d1)push(new Date(y,m-1,d2,12));return out}
  let step=cad==="daily"?1:cad==="weekly"?7:cad==="biweekly"?14:cad==="tips"?Math.max(1,Math.round(7/Math.max(1,n(s.daysPerWeek)||1))):7;
  let d=new Date(start);while(d<monthStart)d.setDate(d.getDate()+step);while(d<=monthEnd){push(d);d=new Date(d);d.setDate(d.getDate()+step)}return out;
}
const incomeSourceEvents=month=>state.incomeSources.flatMap(s=>incomeDatesForMonth(s,month).map(date=>({date,source:s,gross:n(s.amount),net:sourceNet(s)})));
const flexibleIncomeMonth=month=>incomeSourceEvents(month||ym()).reduce((sum,e)=>sum+e.net,0);
const income=()=>state.incomeSources.length?flexibleIncomeMonth(ym())+n(state.business?.householdTransfer):legacyNet()+n(state.business?.householdTransfer);
const ebtIncome=()=>n(state.ebtBudget), householdResources=()=>income()+ebtIncome();
const billsMonth=()=>state.bills.filter(due).reduce((s,b)=>s+n(b.amount),0), billsAvg=()=>state.bills.reduce((s,b)=>s+n(b.amount)/Math.max(1,n(b.frequencyMonths)||1),0);
const dailyMonth=()=>state.dailyExpenses.reduce((s,d)=>s+n(d.amountPerDay)*days(),0), weeklyMiles=()=>state.fuel.routes.reduce((s,r)=>s+(n(r.miles)>0&&n(r.days)>0?n(r.miles)*n(r.days):0),0), monthlyMiles=()=>weeklyMiles()*52/12;
const fuelCost=()=>n(state.fuel.mpg)>0?monthlyMiles()/n(state.fuel.mpg)*n(state.fuel.pricePerGal):null, cashLeft=()=>income()-billsMonth()-dailyMonth()-(fuelCost()||0)-n(state.otherCash), assetTotal=()=>state.assets.reduce((s,a)=>s+n(a.value),0), assetLowTotal=()=>state.assets.reduce((s,a)=>s+(a.value!==""&&a.value!=null?n(a.value):n(a.valueLow)),0), assetHighTotal=()=>state.assets.reduce((s,a)=>s+(a.value!==""&&a.value!=null?n(a.value):n(a.valueHigh||a.valueLow)),0), liabilityTotal=()=>state.liabilities.reduce((s,a)=>s+n(a.balance),0), netWorth=()=>assetTotal()-liabilityTotal(), netWorthLow=()=>assetLowTotal()-liabilityTotal(), netWorthHigh=()=>assetHighTotal()-liabilityTotal();
const precise=v=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:6}).format(n(v));
const reserveMonthly=f=>f.basis==="miles"?(n(f.intervalMiles)>0?n(f.targetAmount)*monthlyMiles()/n(f.intervalMiles):0):(n(f.everyMonths)>0?n(f.targetAmount)/n(f.everyMonths):0);
const sinkingMonthly=()=>state.sinkingFunds.reduce((s,f)=>s+reserveMonthly(f),0);
const householdOutflow=()=>billsMonth()+dailyMonth()+(fuelCost()||0)+n(state.otherCash)+sinkingMonthly()+medicalMonthly()+taxItemMonthly();
const householdAfterReserves=()=>income()-householdOutflow();
const householdIncomeGap=()=>Math.max(0,-householdAfterReserves());
const monthlyEq=x=>{let cad=x.cadence||"recurring";if(cad==="annual")return n(x.amount)/12;if(cad==="one-time"||cad==="random")return 0;return n(x.amount)/Math.max(1,n(x.everyMonths)||1)};
const taxItemMonthly=()=>state.taxItems.reduce((s,x)=>s+n(x.expected)/Math.max(1,n(x.everyMonths)||1),0);
const medicalMonthly=()=>state.medical.items.reduce((s,x)=>s+n(x.expected)/Math.max(1,n(x.everyMonths)||1),0);
const taxActualTotal=()=>state.taxItems.reduce((s,x)=>s+n(x.actual),0);
const medicalActualTotal=()=>state.medical.items.reduce((s,x)=>s+n(x.actual),0);
const dueGeneric=(x,m)=>{if(!x.startMonth)return false;let d=mdiff(x.startMonth,m);return d>=0&&d%Math.max(1,n(x.everyMonths)||1)===0};
const businessRevenue=()=>state.business.revenue.reduce((s,x)=>s+monthlyEq(x),0);
const businessExpenses=()=>state.business.expenses.reduce((s,x)=>s+monthlyEq(x),0);
const businessReserveLines=()=>state.business.reserves.reduce((s,x)=>s+monthlyEq(x),0);
const businessOperatingProfit=()=>businessRevenue()-businessExpenses();
const businessTaxReserve=()=>Math.max(0,businessOperatingProfit())*Math.max(0,n(state.business.taxReservePct))/100;
const businessAfterReserve=()=>businessOperatingProfit()-businessTaxReserve()-businessReserveLines();
const businessAfterOwner=()=>businessAfterReserve()-n(state.business.householdTransfer);
const businessAssetTotal=()=>state.business.assets.reduce((s,a)=>s+n(a.value),0);
const businessLiabilityTotal=()=>state.business.liabilities.reduce((s,a)=>s+n(a.balance),0);
const businessNetWorth=()=>businessAssetTotal()-businessLiabilityTotal();
const businessRevenueTarget=()=>{let p=Math.min(.99,Math.max(0,n(state.business.taxReservePct)/100));return businessExpenses()+businessReserveLines()+n(state.business.ownerDraw)/(1-p)};
const businessRevenueGap=()=>Math.max(0,businessRevenueTarget()-businessRevenue());
const businessRunway=()=>{let burn=Math.max(0,-businessAfterOwner());return burn>0?n(state.business.cash)/burn:null};
const daysInMonth=m=>{let [y,mo]=String(m||ym()).split("-").map(Number);return new Date(y,mo,0).getDate()};
const billsBudgetForMonth=m=>state.bills.filter(b=>{let d=mdiff(b.startMonth||m,m);return d>=0&&d%Math.max(1,n(b.frequencyMonths)||1)===0}).reduce((s,b)=>s+n(b.amount),0);
const dailyBudgetForMonth=m=>state.dailyExpenses.reduce((s,d)=>s+n(d.amountPerDay)*daysInMonth(m),0);
function actualBucket(){
  if(!state.actualMonth)state.actualMonth=ym();
  if(!state.actualHistory||typeof state.actualHistory!=="object")state.actualHistory={};
  if(!state.actualHistory[state.actualMonth]||typeof state.actualHistory[state.actualMonth]!=="object")state.actualHistory[state.actualMonth]={};
  return state.actualHistory[state.actualMonth];
}
function householdBvaRows(){
  let m=state.actualMonth||ym();
  return[
    {key:"income",label:"Net household income",budget:income(),type:"income"},
    {key:"bills",label:"Bills",budget:billsBudgetForMonth(m),type:"expense"},
    {key:"daily",label:"Daily expenses",budget:dailyBudgetForMonth(m),type:"expense"},
    {key:"fuel",label:"Fuel",budget:fuelCost()||0,type:"expense"},
    {key:"other",label:"Other / unlisted",budget:n(state.otherCash),type:"expense"},
    {key:"reserves",label:"Sinking-fund contributions",budget:sinkingMonthly(),type:"expense"},
    {key:"food",label:"Food / EBT spending",budget:n(state.ebtBudget),type:"expense"}
  ];
}
function businessBvaRows(){
  return[
    {key:"businessRevenue",label:"Revenue",budget:businessRevenue(),type:"income"},
    {key:"businessExpenses",label:"Operating expenses",budget:businessExpenses(),type:"expense"},
    {key:"businessTax",label:"Tax reserve",budget:businessTaxReserve(),type:"expense"},
    {key:"businessDraw",label:"Owner draw",budget:n(state.business.ownerDraw),type:"expense"}
  ];
}
const actualNum=(bucket,key)=>bucket[key]===""||bucket[key]==null?null:n(bucket[key]);
const favorableVariance=(row,actual)=>actual==null?null:(row.type==="income"?actual-row.budget:row.budget-actual);

const canon=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]/g,"");

const cleanBarcode=v=>String(v||"").replace(/\D/g,"");
const barcodeCore=v=>cleanBarcode(v).replace(/^0+/,"")||"0";
const barcodeSame=(a,b)=>barcodeCore(a)===barcodeCore(b);
const stripHtml=s=>String(s||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim();

function parsePackageMeasure(quantity){
  let s=String(quantity||"").trim();
  let m=s.match(/([\d.]+)\s*(lbs?|pounds?|ounces?|oz|kg|kilograms?|grams?|g|ml|millilit(?:er|re)s?|l|lit(?:er|re)s?|ct|count)\b/i);
  if(!m)return{amount:1,unit:"package"};
  let amount=n(m[1]),u=String(m[2]).toLowerCase().replace(/\./g,"");
  if(["lbs","pound","pounds"].includes(u))u="lb";
  if(["ounce","ounces"].includes(u))u="oz";
  if(["kilogram","kilograms"].includes(u))u="kg";
  if(["gram","grams"].includes(u))u="g";
  if(["milliliter","milliliters","millilitre","millilitres"].includes(u))u="ml";
  if(["liter","liters","litre","litres"].includes(u))u="l";
  if(["ct"].includes(u))u="count";
  if(u==="kg")return{amount:amount*1000,unit:"g"};
  if(u==="l")return{amount:amount*1000,unit:"ml"};
  return{amount,unit:u};
}
function productByGtin(gtin){return (state.catalogProducts||[]).find(p=>barcodeSame(p.gtin,gtin))||null}
function cacheCatalogProduct(p){
  let i=(state.catalogProducts||[]).findIndex(x=>barcodeSame(x.gtin,p.gtin));
  if(i>=0)state.catalogProducts[i]=Object.assign({},state.catalogProducts[i],p);
  else state.catalogProducts.unshift(p);
  state.lastProductLookup=p;
}
function linkedProductForIngredient(name){
  let gtin=state.ingredientLinks?.[canon(name)];
  return gtin?(state.storeOffers||[]).find(p=>p.gtin&&barcodeSame(p.gtin,gtin))||null:null;
}
function dealMatchesProduct(d,p){
  if(d.gtin&&p.gtin&&barcodeSame(d.gtin,p.gtin))return true;
  let a=canon(d.product),b=canon(p.name);
  return !!a&&(a===b||a.includes(b)||b.includes(a));
}
function effectivePackagePrice(p,store){
  let o=p.offers?.[store],base=n(o?.price);
  if(base<=0)return{price:Infinity,deal:null,base};
  let best=base,bestDeal=null,today=new Date().toISOString().slice(0,10);
  (state.deals||[]).forEach(d=>{
    if(d.store&&d.store!=="Any"&&d.store!==store)return;
    if(d.expires&&d.expires<today)return;
    if(!dealMatchesProduct(d,p))return;
    let v=n(d.value),candidate=base;
    if(d.type==="price"&&v>0)candidate=v;
    else if(d.type==="amount"&&v>0)candidate=Math.max(0,base-v);
    else if(d.type==="percent"&&v>0)candidate=Math.max(0,base*(1-v/100));
    if(candidate<best){best=candidate;bestDeal=d}
  });
  return{price:best,deal:bestDeal,base};
}
function bestDealForProduct(p){
  let hits=STORE_NAMES.map(store=>{let x=effectivePackagePrice(p,store);return{store,...x}}).filter(x=>x.deal&&Number.isFinite(x.price));
  return hits.sort((a,b)=>a.price-b.price)[0]||null;
}
function dealForIngredient(name,unit){
  let p=pricedProduct(name,unit);
  if(p){let hit=bestDealForProduct(p);if(hit)return hit}
  let today=new Date().toISOString().slice(0,10);
  let d=(state.deals||[]).find(d=>!d.gtin&&(!d.expires||d.expires>=today)&&canon(d.product)&&canon(name).includes(canon(d.product)));
  return d?{store:d.store||"Any",deal:d,price:null,base:null}:null;
}
function parseRecipeIngredients(text){
  let out=[];
  String(text||"").split(/\n+/).map(x=>x.trim()).filter(Boolean).forEach(line=>{
    let p=line.split("|").map(x=>x.trim());
    if(p.length>=3&&p[0]&&n(p[1])>0&&p[2])out.push([p[0],n(p[1]),p[2]]);
  });
  return out;
}
function recipeLiveCost(r){
  let known=0,missing=0,onHand=0,needItems=0;
  (r.ing||[]).forEach(i=>{
    let have=inventoryQty(i[0],i[2]),buy=Math.max(0,n(i[1])-have);
    if(buy<=0){onHand++;return}
    needItems++;
    let v=ingredientExpected(i[0],buy,i[2]);
    if(v==null)missing++;else known+=v;
  });
  return{known,missing,onHand,needItems,total:(r.ing||[]).length};
}
async function fetchJsonOk(url){
  let r=await fetch(url,{cache:"no-store"});
  if(r.status===404)return null;
  if(!r.ok)throw new Error("Source returned "+r.status);
  return r.json();
}
async function checkProductSafety(product){
  let out={gtin:product.gtin,name:product.name,checkedAt:new Date().toISOString(),fda:[],fsis:[],errors:[]};
  let queries=[];
  if(product.gtin)queries.push('code_info:"'+String(product.gtin).replace(/"/g,"")+'"');
  let phrase=String(product.name||"").replace(/[^a-zA-Z0-9 ]/g," ").replace(/\s+/g," ").trim().split(" ").slice(0,5).join(" ");
  if(phrase)queries.push('product_description:"'+phrase+'"');
  for(const q of queries){
    try{
      let data=await fetchJsonOk("https://api.fda.gov/food/enforcement.json?search="+encodeURIComponent(q)+"&sort=report_date:desc&limit=10");
      (data?.results||[]).forEach(x=>{if(!out.fda.some(y=>y.recall_number===x.recall_number))out.fda.push(x)});
    }catch(err){out.errors.push("FDA: "+(err?.message||"lookup failed"))}
  }
  try{
    let term=product.gtin||String(product.name||"").split(/\s+/).slice(0,3).join(" ");
    let data=await fetchJsonOk("https://www.fsis.usda.gov/fsis/api/recall/v/1?field_product_items_value="+encodeURIComponent(term));
    let rows=Array.isArray(data)?data:(data?.results||data?.data||[]);
    let core=canon(product.name).slice(0,20),gt=barcodeCore(product.gtin);
    out.fsis=(rows||[]).filter(x=>{let blob=canon(JSON.stringify(x));return (gt&&blob.includes(gt))||(core&&blob.includes(core))}).slice(0,10);
  }catch(err){out.errors.push("USDA FSIS live lookup unavailable: "+(err?.message||"lookup failed"))}
  state.lastSafetyCheck=out;save();
  if($("#productSafety"))$("#productSafety").innerHTML=safetyHtml(out);
  return out;
}
async function lookupProductByBarcode(){
  let status=$("#productLookupStatus"),code=cleanBarcode($("#barcodeLookup")?.value);
  if(code.length<8){status.textContent="Enter an 8–14 digit UPC / GTIN.";return}
  status.textContent="Looking up "+code+"…";
  try{
    let fields="code,product_name,brands,quantity,categories,ingredients_text,nutriments,image_front_small_url";
    let data=await fetchJsonOk("https://world.openfoodfacts.org/api/v3/product/"+encodeURIComponent(code)+"?fields="+fields),raw=data?.product;
    if(!raw){data=await fetchJsonOk("https://world.openfoodfacts.org/api/v2/product/"+encodeURIComponent(code)+".json?fields="+fields);raw=data?.product}
    if(!raw)throw new Error("Product not found in Open Food Facts");
    let m=parsePackageMeasure(raw.quantity);
    let product={gtin:String(raw.code||code),name:raw.product_name||("UPC "+code),brand:raw.brands||"",quantityText:raw.quantity||"",packageAmount:m.amount,packageUnit:m.unit,category:raw.categories||"",ingredients:raw.ingredients_text||"",image:raw.image_front_small_url||"",sourceName:"Open Food Facts",sourceLicense:"ODbL",sourceUrl:"https://world.openfoodfacts.org/product/"+encodeURIComponent(raw.code||code),checkedAt:new Date().toISOString(),nutrients:raw.nutriments||{}};
    let apiKey=localStorage.getItem(USDA_KEY_STORAGE)||"";
    if(apiKey){
      try{
        let ud=await fetchJsonOk("https://api.nal.usda.gov/fdc/v1/foods/search?api_key="+encodeURIComponent(apiKey)+"&query="+encodeURIComponent(code)+"&pageSize=25");
        let hit=(ud?.foods||[]).find(x=>x.gtinUpc&&barcodeSame(x.gtinUpc,code));
        if(hit){product.usdaFdcId=hit.fdcId;product.usdaDescription=hit.description||"";product.usdaDataType=hit.dataType||""}
      }catch{}
    }
    cacheCatalogProduct(product);save();render();
    status=$("#productLookupStatus");if(status)status.textContent="Found "+product.name+". Checking recalls and warnings…";
    await checkProductSafety(product);
    status=$("#productLookupStatus");if(status)status.textContent="Found and saved "+product.name+". Safety sources checked.";
  }catch(err){console.error(err);status=$("#productLookupStatus");if(status)status.textContent="Lookup failed: "+(err?.message||"unknown source error")}
}
function addCatalogProductToPrices(gtin,alias){
  let p=productByGtin(gtin);if(!p)return;
  let name=String(alias||"").trim()||p.name;
  let existing=(state.storeOffers||[]).find(x=>x.gtin&&barcodeSame(x.gtin,p.gtin));
  if(existing){existing.name=name;existing.sourceName=p.sourceName;existing.sourceUrl=p.sourceUrl}
  else state.storeOffers.push({id:"gtin-"+p.gtin,gtin:p.gtin,name,displayName:p.name,need:p.packageAmount||1,unit:p.packageUnit||"package",sourceName:p.sourceName,sourceUrl:p.sourceUrl,offers:{}});
  if(String(alias||"").trim())state.ingredientLinks[canon(alias)]=p.gtin;
  render();
}
function addCatalogProductToInventory(gtin){
  let p=productByGtin(gtin);if(!p)return;
  let m=parsePackageMeasure(p.quantityText);
  let existing=state.inventory.find(x=>x.gtin&&barcodeSame(x.gtin,p.gtin));
  if(existing){existing.onHand=true;existing.qty=n(existing.qty)+(m.amount||1)}
  else state.inventory.push({id:"inv-gtin-"+p.gtin,gtin:p.gtin,name:p.name,category:"Food",onHand:true,qty:m.amount||1,unit:m.unit||"package",minQty:""});
  render();
}
function addRecipeFromBuilder(){
  let title=$("#recipeTitle").value.trim();
  let servings=Math.max(1,n($("#recipeServings").value)||4);
  let ing=parseRecipeIngredients($("#recipeIngredients").value);
  if(!title){alert("Enter a recipe title.");return}
  if(!ing.length){alert("Add ingredients as: ingredient | quantity | unit");return}
  let tags=$("#recipeTags").value.split(",").map(x=>x.trim()).filter(Boolean);
  let appliances=$("#recipeAppliances").value.split(",").map(x=>x.trim()).filter(Boolean);
  let known=0;ing.forEach(i=>{let v=ingredientExpected(i[0],i[1],i[2]);if(v!=null)known+=v});
  state.cookbook.push({id:"recipe-"+Date.now(),name:title,servings,cost:known||0,tags,appliances,ing,q:title+" recipe",sourceName:$("#recipeSourceName").value.trim()||"User-added recipe",sourceUrl:$("#recipeSourceUrl").value.trim(),sourceLicense:$("#recipeLicense").value,instructions:$("#recipeInstructions").value.trim(),rating:null,ratingCount:null});
  ["recipeTitle","recipeSourceName","recipeSourceUrl","recipeIngredients","recipeTags","recipeAppliances","recipeInstructions"].forEach(id=>$("#"+id).value="");
  $("#recipeServings").value=4;render();
}
function safetyHtml(s){
  if(!s)return'<div class="empty">No product safety check run yet.</div>';
  let parts=[];
  (s.fda||[]).forEach(x=>parts.push('<div class="notice section"><b>Possible FDA recall match · '+esc(x.classification||"classification not listed")+'</b><div class="small">'+esc(x.product_description||"")+'</div><div class="small">'+esc(x.reason_for_recall||"")+'</div><div class="small">Recall '+esc(x.recall_number||"")+' · status '+esc(x.status||"")+' · reported '+esc(x.report_date||"")+'</div><div class="small">Verify package UPC, lot/date and distribution before treating this as your exact product.</div></div>'));
  (s.fsis||[]).forEach(x=>{
    let title=x.field_title||x.title||x.field_recall_number||"USDA FSIS recall/public health alert";
    let summary=stripHtml(x.field_summary||x.summary||x.field_product_items||"");
    parts.push('<div class="notice section"><b>Possible USDA FSIS match</b><div class="small">'+esc(stripHtml(title))+'</div><div class="small">'+esc(summary.slice(0,700))+'</div><div class="small">Verify the official FSIS notice, establishment/lot codes and dates.</div></div>');
  });
  if(!parts.length)parts.push('<div class="notice section"><b>No matching recall record found in the live checks.</b><div class="small">This is not a guarantee of safety. Also review current official alerts and advisories.</div></div>');
  if((s.errors||[]).length)parts.push('<div class="small section">'+esc(s.errors.join(" · "))+'</div>');
  return parts.join("");
}
function renderProductSources(){
  if(!$("#productLookupResult"))return;
  let p=state.lastProductLookup;
  $("#productLookupResult").innerHTML=p?'<div class="card"><div class="split"><div><h3>'+esc(p.name)+'</h3><div class="small">'+esc(p.brand)+(p.quantityText?' · '+esc(p.quantityText):'')+'</div></div><span class="tag">'+esc(p.gtin)+'</span></div><div class="small section">Source: '+esc(p.sourceName)+' · '+esc(p.sourceLicense)+(p.usdaFdcId?' · USDA FDC '+esc(p.usdaFdcId):'')+'</div><div class="grid g2 section"><label><span>Recipe ingredient alias (optional)</span><input class="field" id="productIngredientAlias" placeholder="e.g. chicken"></label><div class="tools"><button class="btn primary catalogPrice" data-gtin="'+esc(p.gtin)+'">Add to price matrix</button><button class="btn catalogInventory" data-gtin="'+esc(p.gtin)+'">Add to inventory</button><button class="btn catalogSafety" data-gtin="'+esc(p.gtin)+'">Recheck safety</button></div></div><a class="btn section" href="'+esc(p.sourceUrl)+'" target="_blank" rel="noopener">Open product source</a></div>':'<div class="empty">Look up a UPC / GTIN to create a sourced product record.</div>';
  $("#productSafety").innerHTML=safetyHtml(state.lastSafetyCheck);
  $("#productCatalog").innerHTML=(state.catalogProducts||[]).slice(0,12).map(x=>'<div class="row"><div><b>'+esc(x.name)+'</b><div class="small">'+esc(x.gtin)+' · '+esc(x.sourceName||"source")+(x.quantityText?' · '+esc(x.quantityText):'')+'</div></div><div class="tools"><button class="btn catalogPrice" data-gtin="'+esc(x.gtin)+'">Prices</button><button class="btn catalogSafety" data-gtin="'+esc(x.gtin)+'">Safety</button><button class="btn danger catalogRemove" data-gtin="'+esc(x.gtin)+'">×</button></div></div>').join("")||'<div class="empty">No sourced products cached yet.</div>';
  $("#dealRows").innerHTML=(state.deals||[]).map((d,i)=>'<div class="row"><div class="grid g2" style="width:100%"><input class="field dealProduct" data-i="'+i+'" placeholder="Product name" value="'+esc(d.product||"")+'"><input class="field dealGtin" data-i="'+i+'" inputmode="numeric" placeholder="UPC / GTIN" value="'+esc(d.gtin||"")+'"><select class="field dealStore" data-i="'+i+'">'+["Any"].concat(STORE_NAMES).map(s=>'<option '+((d.store||"Any")===s?'selected':'')+'>'+esc(s)+'</option>').join("")+'</select><select class="field dealType" data-i="'+i+'"><option value="price" '+(d.type==="price"?'selected':'')+'>Sale price</option><option value="amount" '+(d.type==="amount"?'selected':'')+'>Amount off</option><option value="percent" '+(d.type==="percent"?'selected':'')+'>Percent off</option></select><input class="field dealValue" data-i="'+i+'" type="number" step=".01" placeholder="Value" value="'+(d.value??"")+'"><input class="field dealExpires" data-i="'+i+'" type="date" value="'+esc(d.expires||"")+'"><input class="field dealSource" data-i="'+i+'" type="url" placeholder="Coupon / source URL" value="'+esc(d.sourceUrl||"")+'"></div><button class="btn danger dealRemove" data-i="'+i+'">×</button></div>').join("")||'<div class="empty">No coupons or promotions entered yet.</div>';
}
function renderRecipeIntelligence(){
  if(!$("#recipeIntelligence"))return;
  let ranked=fullCookbook().map(r=>({r,live:recipeLiveCost(r)})).sort((a,b)=>a.live.missing-b.live.missing||a.live.known-b.live.known||b.live.onHand-a.live.onHand).slice(0,10);
  $("#recipeIntelligence").innerHTML=ranked.map(x=>'<div class="row"><div><b>'+esc(x.r.name)+'</b><div class="small">'+x.live.onHand+'/'+x.live.total+' ingredients covered · '+(x.live.missing?x.live.missing+' unpriced':'all needed ingredients priced')+' · '+esc(x.r.sourceName||"Household recipe")+(x.r.sourceLicense?' · '+esc(x.r.sourceLicense):'')+'</div></div><b>'+money(x.live.known)+(x.live.missing?' + ?':'')+'</b></div>').join("")||'<div class="empty">No recipes available.</div>';
}

function pricedProduct(name,unit){
  let linked=linkedProductForIngredient(name);if(linked)return linked;
  let a=canon(name),u=canon(unit);
  return (state.storeOffers||[]).find(p=>{let b=canon(p.name);return (a===b||a.includes(b)||b.includes(a))&&(!u||!canon(p.unit)||u===canon(p.unit))})||null;
}
function ingredientExpected(name,qty,unit){
  let p=pricedProduct(name,unit);if(!p)return null;
  let temp={...p,need:n(qty)};
  let costs=STORE_NAMES.map(s=>offerCost(temp,s)).filter(Number.isFinite);
  return costs.length?Math.min(...costs):null;
}
function recipeExpected(r){
  let vals=r.ing.map(i=>ingredientExpected(i[0],i[1],i[2]));
  return vals.some(v=>v==null)?{known:vals.reduce((s,v)=>s+(v||0),0),complete:false}:{known:vals.reduce((s,v)=>s+v,0),complete:true};
}
function grocery(){
  let m={};
  const add=(name,q,u,src)=>{let k=name+"|"+u;if(!m[k])m[k]={key:k,name,qty:0,unit:u,sources:new Set};m[k].qty+=n(q);m[k].sources.add(src)};
  state.essentials.forEach(e=>n(e.qty)>0&&add(e.name,e.qty,e.unit,"essential"));
  Object.entries(state.plan).forEach(([id,e])=>{let r=recipeById(id),need=remainingFor(e);if(r&&need>0)r.ing.forEach(i=>add(i[0],i[1]*need,i[2],r.name))});
  state.inventory.forEach(i=>{let need=Math.max(0,n(i.minQty)-n(i.qty));if(need>0)add(i.name,need,i.unit||"item","inventory restock")});
  return Object.values(m).map(x=>{let have=inventoryQty(x.name,x.unit),buy=Math.max(0,x.qty-have),expected=ingredientExpected(x.name,buy,x.unit);return{...x,have,buy,expected}}).filter(x=>x.buy>0);
}
const mealDateLabel=d=>{try{return new Date(d+"T12:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"})}catch{return d}};
function mealCardHtml(r){
  let e=planEntry(r.id),planned=!!e,count=planCount(e),prepared=preparedFor(e),remaining=remainingFor(e),dates=e?.dates||[];
  let h='<div class="card recipe '+(planned?'plannedMeal':'')+'"><div class="split"><h3>'+esc(r.name)+'</h3>'+(planned?'<span class="tag">PLANNED</span>':'')+'</div>';
  h+='<div class="tags">'+r.tags.map(t=>'<span class="tag">'+esc(t)+'</span>').join('')+'</div>';
  h+='<div class="small">'+r.servings+' servings · '+money(r.cost)+'/batch</div>';h+='<div class="small">'+(r.rating!=null?('★ '+r.rating+(r.ratingCount!=null?' · '+Number(r.ratingCount).toLocaleString()+' ratings':'')):'Household recipe')+(r.appliances?.length?' · '+r.appliances.join(', '):'')+'</div>';
  if(planned){
    h+='<div class="kpi section"><span>Occurrences</span><b>'+count+'</b></div><div class="kpi"><span>Prepared</span><b>'+prepared+'</b></div><div class="kpi"><span>Still to prepare</span><b>'+remaining+'</b></div>';
    h+='<div class="tools section"><input class="field mealDate" style="max-width:175px" data-id="'+r.id+'" type="date"><button class="btn addMealDate" data-id="'+r.id+'">Add date</button></div>';
    h+='<div class="dateChips">'+(dates.length?dates.map(d=>'<button class="dateChip removeMealDate" data-id="'+r.id+'" data-date="'+esc(d)+'" title="Remove date">'+esc(mealDateLabel(d))+' ×</button>').join(''):'<span class="small">Unscheduled</span>')+'</div>';
  }else h+='<div class="kpi section"><span>Fits budget</span><b>'+repeats(r)+' more</b></div>';
  h+='<div class="tools section"><button class="btn '+(planned?'green':'primary')+' toggleMeal" data-id="'+r.id+'">'+(planned?'Active ✓':'Choose recipe')+'</button>';
  if(planned)h+='<button class="btn green preparedMeal" data-id="'+r.id+'" '+(remaining<1?'disabled':'')+'>Prepared</button><button class="btn revertMeal" data-id="'+r.id+'" '+(prepared<1?'disabled':'')+'>Revert</button>';
  h+='<a class="btn" href="'+search(r.q)+'" target="_blank" rel="noopener">Recipe</a></div></div>';
  return h;
}
function plannedMealRowHtml(id,e){
  let r=recipeById(id);if(!r)return"";
  let dates=e.dates||[],dateText=dates.length?dates.map(d=>mealDateLabel(d).replace(/, \d{4}$/,"")).join(", "):"unscheduled";
  let ing=r.ing.map(i=>{let have=inventoryQty(i[0],i[2]),short=Math.max(0,n(i[1])-have);return '<div class="small">'+esc(i[0])+' · '+n(i[1])+' '+esc(i[2])+' · '+(short?'shop '+short+' '+esc(i[2]):'inventory ✓')+'</div>'}).join("");
  let source=r.sourceUrl?'<a class="btn" href="'+esc(r.sourceUrl)+'" target="_blank" rel="noopener">Source recipe</a>':'<a class="btn" href="'+search(r.q)+'" target="_blank" rel="noopener">Recipe</a>';
  return '<div class="card activeRecipe"><div class="split"><div><b>'+esc(r.name)+'</b><div class="small">'+remainingFor(e)+' remaining of '+planCount(e)+' · '+esc(dateText)+'</div></div><span class="tag">'+preparedFor(e)+' prepared</span></div><div class="section">'+ing+'</div><div class="tools section">'+source+'<button class="btn green preparedMeal" data-id="'+id+'" '+(remainingFor(e)<1?'disabled':'')+'>Prepared</button><button class="btn revertMeal" data-id="'+id+'" '+(preparedFor(e)<1?'disabled':'')+'>Revert</button></div></div>';
}


const STORE_NAMES=["Walmart","Lidl","Lowes Foods","Family Dollar","Costco"];
const offerCost=(p,store)=>{let o=p.offers?.[store],ep=effectivePackagePrice(p,store);if(!o||!Number.isFinite(ep.price)||n(o.amount)<=0||n(p.need)<=0)return Infinity;return Math.ceil(n(p.need)/n(o.amount))*ep.price};
function autoStorePlan(mode=state.shoppingMode){
  let items=(state.storeOffers||[]).filter(p=>n(p.need)>0), assignments=[], stores=[];
  const candidate=(allowed)=>{
    let rows=items.map(p=>{let choices=allowed.map(s=>({store:s,cost:offerCost(p,s)})).filter(x=>Number.isFinite(x.cost)).sort((a,b)=>a.cost-b.cost);return{p,choice:choices[0]||null}});
    return{allowed,rows,missing:rows.filter(x=>!x.choice).length,total:rows.reduce((s,x)=>s+(x.choice?.cost||0),0)};
  };
  if(mode==="lowest"){
    let x=candidate(STORE_NAMES);assignments=x.rows.map(x=>({product:x.p,store:x.choice?.store||"",cost:x.choice?.cost??null}));stores=[...new Set(assignments.map(x=>x.store).filter(Boolean))];
  }else if(mode==="one"){
    let best=STORE_NAMES.map(s=>candidate([s])).sort((a,b)=>a.missing-b.missing||a.total-b.total)[0];
    assignments=best.rows.map(x=>({product:x.p,store:x.choice?.store||"",cost:x.choice?.cost??null}));stores=best.allowed;
  }else{
    let pairs=[];for(let i=0;i<STORE_NAMES.length;i++)for(let j=i+1;j<STORE_NAMES.length;j++)pairs.push(candidate([STORE_NAMES[i],STORE_NAMES[j]]));
    let best=pairs.sort((a,b)=>a.missing-b.missing||a.total-b.total)[0]||candidate(STORE_NAMES.slice(0,2));
    assignments=best.rows.map(x=>({product:x.p,store:x.choice?.store||"",cost:x.choice?.cost??null}));stores=best.allowed;
  }
  assignments=assignments.map(a=>{let o=state.itemOverrides?.[a.product.id];if(o&&Number.isFinite(offerCost(a.product,o)))return{...a,store:o,cost:offerCost(a.product,o),override:true};return a});
  return{assignments,total:assignments.reduce((s,a)=>s+(a.cost||0),0),missing:assignments.filter(a=>a.cost==null).length,stores:[...new Set(assignments.map(a=>a.store).filter(Boolean))]};
}
function renderStoreComparison(){
  if(!state.storeOffers)state.storeOffers=[];
  $("#shoppingMode").value=state.shoppingMode||"lowest";
  $("#storeMatrixHead").innerHTML="<tr><th>Product / Need</th>"+STORE_NAMES.map(s=>"<th>"+s+"</th>").join("")+"<th></th></tr>";
  $("#storeMatrixBody").innerHTML=state.storeOffers.map((p,i)=>"<tr><td><b>"+esc(p.name)+"</b><div class='small'>Need</div><div class='tools'><input class='field needQty' style='width:86px' data-i='"+i+"' type='number' step='.1' value='"+n(p.need)+"'><span class='small'>"+esc(p.unit||"unit")+"</span></div></td>"+STORE_NAMES.map(s=>{let o=p.offers?.[s]||{};return"<td><div class='small'>"+esc(o.pack||"")+"</div><div class='tools'><span>$</span><input class='field offerPrice' style='width:82px' data-i='"+i+"' data-store='"+esc(s)+"' type='number' step='.01' value='"+(o.price??"")+"'></div><div class='tools'><input class='field offerAmount' style='width:72px' data-i='"+i+"' data-store='"+esc(s)+"' type='number' step='.1' value='"+(o.amount??"")+"'><span class='small'>"+esc(p.unit||"unit")+"</span></div><a class='small' target='_blank' rel='noopener' href='"+search(p.name+" "+s+" price "+(state.zip||""))+"'>check</a></td>"}).join("")+"<td><button class='btn danger removeStoreItem' data-i='"+i+"'>×</button></td></tr>").join("")||"<tr><td colspan='7'><div class='empty'>Import a profile with store prices or add a product.</div></td></tr>";
  let plan=autoStorePlan();
  $("#shopOptimizeSummary").innerHTML="<b>"+(state.shoppingMode==="lowest"?"Lowest price per item":state.shoppingMode==="one"?"Best one-store shop":"Best two-store shop")+"</b><br>"+(plan.stores.length?"Stores: "+plan.stores.join(" + "):"No priced stores yet")+" · Known basket "+money(plan.total)+(plan.missing?" · "+plan.missing+" item(s) still unpriced":"");
  $("#optimizedBasket").innerHTML=plan.assignments.map(a=>{let opts=STORE_NAMES.filter(s=>Number.isFinite(offerCost(a.product,s))).map(s=>"<option "+(s===a.store?"selected":"")+" value='"+esc(s)+"'>"+esc(s)+" · "+money(offerCost(a.product,s))+"</option>").join("");return"<div class='row'><div><b>"+esc(a.product.name)+"</b><div class='small'>Need "+n(a.product.need)+" "+esc(a.product.unit||"unit")+"</div></div><select class='field itemStoreOverride' style='max-width:230px' data-id='"+esc(a.product.id)+"'><option value=''>Auto</option>"+opts+"</select></div>"}).join("")||"<div class='empty'>Set a Need quantity above to include a product in the optimizer.</div>";
  $$(".itemStoreOverride").forEach(x=>{let v=state.itemOverrides?.[x.dataset.id]||"";x.value=v;x.onchange=()=>{state.itemOverrides[x.dataset.id]=x.value;if(!x.value)delete state.itemOverrides[x.dataset.id];render()}});
}
function monthInfo(monthStr){let [y,m]=String(monthStr||ym()).split("-").map(Number);return{y,m,date:new Date(y,m-1,1)}}
function dueInMonth(b,monthStr){let d=mdiff(b.startMonth||monthStr,monthStr);return d>=0&&d%Math.max(1,n(b.frequencyMonths)||1)===0}
function renderIncomeCalendar(){
  if(!state.incomeCalendarMonth)state.incomeCalendarMonth=ym();
  let {y,m,date}=monthInfo(state.incomeCalendarMonth),last=new Date(y,m,0).getDate(),first=date.getDay(),events=incomeSourceEvents(state.incomeCalendarMonth);
  $("#incomeCalLabel").textContent=date.toLocaleDateString(undefined,{month:"long",year:"numeric"});
  let gross=events.reduce((s,e)=>s+e.gross,0),net=events.reduce((s,e)=>s+e.net,0),withholding=Math.max(0,gross-net);
  $("#incomeCalStats").innerHTML=[["Expected gross",precise(gross)],["Estimated withholding",precise(withholding)],["Expected net",precise(net)]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");
  let cells=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>"<div class='calDow'>"+x+"</div>");
  for(let i=0;i<first;i++)cells.push("<div class='calCell muted'></div>");
  for(let d=1;d<=last;d++){let ds=y+"-"+String(m).padStart(2,"0")+"-"+String(d).padStart(2,"0"),es=events.filter(e=>e.date===ds);cells.push("<div class='calCell'><b>"+d+"</b>"+es.map(e=>"<div class='calBill'>"+esc(e.source.name||"Income")+"<br><strong>+"+money(e.net)+"</strong><br><small>"+money(e.gross)+" gross</small></div>").join("")+"</div>")}
  $("#incomeCalendar").innerHTML="<div class='calgrid'>"+cells.join("")+"</div>";
}
function shiftIncomeCalendar(delta){let {y,m}=monthInfo(state.incomeCalendarMonth||ym()),d=new Date(y,m-1+delta,1);state.incomeCalendarMonth=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");render()}
function renderMedicalCalendar(){
  if(!state.medical.calendarMonth)state.medical.calendarMonth=ym();let {y,m,date}=monthInfo(state.medical.calendarMonth),last=new Date(y,m,0).getDate(),first=date.getDay();
  $("#medCalLabel").textContent=date.toLocaleDateString(undefined,{month:"long",year:"numeric"});
  let cells=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>"<div class='calDow'>"+x+"</div>");
  for(let i=0;i<first;i++)cells.push("<div class='calCell muted'></div>");
  for(let d=1;d<=last;d++){let xs=state.medical.items.filter(x=>dueGeneric(x,state.medical.calendarMonth)&&Math.min(last,Math.max(1,n(x.dueDay)||1))===d);cells.push("<div class='calCell'><b>"+d+"</b>"+xs.map(x=>"<div class='calBill'>"+esc(x.name||"Medical")+"<br><strong>"+money(x.expected)+"</strong></div>").join("")+"</div>")}
  $("#medicalCalendar").innerHTML="<div class='calgrid'>"+cells.join("")+"</div>";
}
function shiftMedicalCalendar(delta){let {y,m}=monthInfo(state.medical.calendarMonth||ym()),d=new Date(y,m-1+delta,1);state.medical.calendarMonth=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");render()}
function renderBillCalendar(){
  if(!state.calendarMonth)state.calendarMonth=ym();let {y,m,date}=monthInfo(state.calendarMonth),last=new Date(y,m,0).getDate(),first=date.getDay();
  $("#calLabel").textContent=date.toLocaleDateString(undefined,{month:"long",year:"numeric"});
  let cells=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>"<div class='calDow'>"+x+"</div>");
  for(let i=0;i<first;i++)cells.push("<div class='calCell muted'></div>");
  for(let d=1;d<=last;d++){let bs=state.bills.filter(b=>n(b.dueDay)>0&&dueInMonth(b,state.calendarMonth)&&Math.min(Math.max(1,n(b.dueDay)),last)===d);cells.push("<div class='calCell'><b>"+d+"</b>"+bs.map(b=>"<div class='calBill'>"+esc(b.name)+"<br><strong>"+money(b.amount)+"</strong></div>").join("")+"</div>")}
  $("#billCalendar").innerHTML="<div class='calgrid'>"+cells.join("")+"</div>";
}
function shiftCalendar(delta){let {y,m}=monthInfo(state.calendarMonth||ym()),d=new Date(y,m-1+delta,1);state.calendarMonth=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");render()}
function icsEscape(s){return String(s??"").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;")}
function exportBillsIcal(){
  let start=monthInfo(ym()), lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Family Planner//Bills//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH"];
  for(let k=0;k<12;k++){let d=new Date(start.y,start.m-1+k,1),ms=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0"),last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();state.bills.filter(b=>n(b.dueDay)>0&&dueInMonth(b,ms)).forEach(b=>{let day=Math.min(Math.max(1,n(b.dueDay)),last),ds=d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(day).padStart(2,"0");lines.push("BEGIN:VEVENT","UID:"+icsEscape((b.id||b.name)+"-"+ds+"@family-planner"),"DTSTAMP:"+new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),"DTSTART;VALUE=DATE:"+ds,"SUMMARY:"+icsEscape("Bill: "+b.name+" - "+money(b.amount)),"DESCRIPTION:"+icsEscape("Family Planner bill. Amount: "+money(b.amount)),"END:VEVENT")})}
  lines.push("END:VCALENDAR");let file=new File([lines.join("\r\n")],"family-planner-bills.ics",{type:"text/calendar"});shareOrDownload(file,"Family Planner bill calendar");
}
function budgetLines(){
  let out=["FAMILY PLANNER - HOME + BUSINESS","Generated "+new Date().toLocaleString(),"",
  "HOUSEHOLD INCOME","Gross salary avg: "+precise(salaryGross()),"Gross tips avg: "+precise(tips()),"Estimated salary net under tax profile: "+precise(salaryNet()),"Modeled net cash income: "+precise(income()),"EBT food benefit: "+precise(ebtIncome()),"Total household resources: "+precise(householdResources()),"",
  "HOUSEHOLD CASH OUT","Bills due this month: "+precise(billsMonth()),"Daily expenses: "+precise(dailyMonth()),"Fuel: "+(fuelCost()==null?"MPG needed":precise(fuelCost())),"Other/unlisted: "+precise(state.otherCash),"Sinking-fund reserve: "+precise(sinkingMonthly()),"After all planned outflow: "+precise(householdAfterReserves()),"Additional household income needed: "+precise(householdIncomeGap()),"",
  "HOUSEHOLD POSITION","Assets entered: "+precise(assetTotal()),"Liabilities entered: "+precise(liabilityTotal()),"Net worth entered: "+precise(netWorth()),"",
  "BILLS"];
  state.bills.forEach(b=>out.push(b.name+" ["+(b.category||"Other")+"] - "+precise(b.amount)+" - due "+(b.dueDay||"not set")+" - every "+(b.frequencyMonths||1)+" month(s)"));
  out.push("","RESERVES / SINKING FUNDS");
  state.sinkingFunds.forEach(f=>out.push(f.name+" ["+(f.category||"Other")+"] - future cost "+(f.targetAmount===""?"not set":precise(f.targetAmount))+" - monthly reserve "+precise(reserveMonthly(f))));
  out.push("","FOOD BENEFIT BUDGET","Food budget: "+precise(state.ebtBudget),"Essentials: "+precise(essentialsTotal()),"Selected meals: "+precise(planTotal()),"Food remaining: "+precise(foodLeft()),"",
  "DRIVING","Known monthly miles: "+monthlyMiles().toLocaleString(undefined,{maximumFractionDigits:6})+" mi","Gas rate: "+precise(state.fuel.pricePerGal)+"/gal","MPG: "+(state.fuel.mpg||"not set"),"",
  "BUSINESS - "+(state.business.name||"My Business"),"Monthly revenue: "+precise(businessRevenue()),"Monthly operating expenses: "+precise(businessExpenses()),"Operating profit: "+precise(businessOperatingProfit()),"Tax reserve: "+precise(businessTaxReserve()),"Desired owner draw: "+precise(state.business.ownerDraw),"Actual transfer to household: "+precise(state.business.householdTransfer),"After reserve + actual transfer: "+precise(businessAfterOwner()),"Revenue needed for target: "+precise(businessRevenueTarget()),"Additional revenue needed: "+precise(businessRevenueGap()),"Business cash: "+precise(state.business.cash),"Business assets: "+precise(businessAssetTotal()),"Business liabilities: "+precise(businessLiabilityTotal()),"Business net worth: "+precise(businessNetWorth()));
  if(state.business.revenue.length){out.push("","BUSINESS REVENUE STREAMS");state.business.revenue.forEach(x=>out.push((x.name||"Revenue")+" - "+precise(x.amount)+" every "+(x.everyMonths||1)+" month(s)"))}
  if(state.business.expenses.length){out.push("","BUSINESS EXPENSES");state.business.expenses.forEach(x=>out.push((x.name||"Expense")+" - "+precise(x.amount)+" every "+(x.everyMonths||1)+" month(s)"))}
  let ab=actualBucket();
  out.push("","BUDGET VS ACTUAL - "+(state.actualMonth||ym()));
  householdBvaRows().forEach(r=>{let a=actualNum(ab,r.key),v=favorableVariance(r,a);out.push(r.label+": budget "+precise(r.budget)+" | actual "+(a==null?"not entered":precise(a))+" | favorable variance "+(v==null?"not entered":precise(v)))});
  out.push("","BUSINESS BUDGET VS ACTUAL - "+(state.actualMonth||ym()));
  businessBvaRows().forEach(r=>{let a=actualNum(ab,r.key),v=favorableVariance(r,a);out.push(r.label+": budget "+precise(r.budget)+" | actual "+(a==null?"not entered":precise(a))+" | favorable variance "+(v==null?"not entered":precise(v)))});
  return out
}
function makePdf(lines){
  const clean=s=>String(s).replace(/[^\x20-\x7E]/g," ").replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");
  let wrapped=[];lines.forEach(l=>{let s=String(l);if(!s){wrapped.push("");return}while(s.length>86){let cut=s.lastIndexOf(" ",86);if(cut<30)cut=86;wrapped.push(s.slice(0,cut));s=s.slice(cut).trim()}wrapped.push(s)});
  let pages=[];for(let i=0;i<wrapped.length;i+=48)pages.push(wrapped.slice(i,i+48));
  let objs=["<< /Type /Catalog /Pages 2 0 R >>","", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"];let kids=[];
  pages.forEach((pg,idx)=>{let pageObj=4+idx*2,contentObj=pageObj+1;kids.push(pageObj+" 0 R");let stream="BT /F1 11 Tf 48 760 Td 14 TL "+pg.map((l,j)=>(j?"T* ":"")+"("+clean(l)+") Tj").join(" ")+" ET";objs[pageObj-1]="<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents "+contentObj+" 0 R >>";objs[contentObj-1]="<< /Length "+stream.length+" >>\\nstream\\n"+stream+"\\nendstream"});
  objs[1]="<< /Type /Pages /Kids ["+kids.join(" ")+"] /Count "+pages.length+" >>";
  let pdf="%PDF-1.4\\n",offs=[0];objs.forEach((o,i)=>{offs[i+1]=pdf.length;pdf+=(i+1)+" 0 obj\\n"+o+"\\nendobj\\n"});let xref=pdf.length;pdf+="xref\\n0 "+(objs.length+1)+"\\n0000000000 65535 f \\n";for(let i=1;i<=objs.length;i++)pdf+=String(offs[i]).padStart(10,"0")+" 00000 n \\n";pdf+="trailer\\n<< /Size "+(objs.length+1)+" /Root 1 0 R >>\\nstartxref\\n"+xref+"\\n%%EOF";return new Blob([pdf],{type:"application/pdf"})
}
async function shareOrDownload(file,title){try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title})}else{let a=document.createElement("a");a.href=URL.createObjectURL(file);a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}}catch(e){if(e?.name!=="AbortError"){let a=document.createElement("a");a.href=URL.createObjectURL(file);a.download=file.name;a.click()}}}
async function shareBudgetPdf(){let blob=makePdf(budgetLines()),file=new File([blob],"family-planner-budget-"+ym()+".pdf",{type:"application/pdf"});await shareOrDownload(file,"Family Planner budget")}
function shell(){document.querySelector("#app").innerHTML=`
<div class="shell">
<header class="top"><div class="topin"><div class="brand"><div class="logo">FP</div><div><b>Family Planner</b><small id="labelTop"></small></div></div><div class="pill">Standalone · local-only data</div></div></header>
<nav class="tabs" id="tabs"></nav>
<main>
<section class="view" data-v="home"><div class="hero"><div class="panel"><div class="eyebrow">Separate origin</div><h1>Food, bills and driving — kept on its own site.</h1><p class="muted">This public app shell contains no household profile values. Import your private JSON on this device to use your real numbers.</p><div class="notice section" id="setup"></div></div><div class="panel"><div class="eyebrow">This month</div><div class="value greenText" id="cashHero"></div><div class="kpi section"><span>Planned food left</span><b id="foodHero"></b></div><div class="kpi"><span>Known miles</span><b id="milesHero"></b></div><div class="kpi"><span>Fuel</span><b id="fuelHero"></b></div></div></div><div class="grid g4 stats section" id="homeStats"></div><div class="card section"><div class="split"><div><h2>Household</h2><div class="small">Identity and local shopping area belong with the household, not app settings.</div></div></div><div class="grid g2 section"><label><span>Household label</span><input class="field" id="houseLabel"></label><label><span>Shopping / local ZIP</span><input class="field" id="zip"></label></div></div></section>
<section class="view" data-v="food"><div class="panel"><div class="split"><div><div class="eyebrow">Food budget</div><h2>EBT + inventory + store comparison</h2><p class="muted">Monthly benefit and card balance are different. The monthly benefit is the amount planned for this month; the actual EBT card balance can include carryover and only changes when purchases post. Planned essentials and selected meals reduce the plan, not the card balance.</p></div><label class="stat" style="display:block;min-width:250px"><small>EBT card balance</small><div style="display:flex;align-items:center;gap:7px;margin-top:7px"><span class="value greenText" style="font-size:32px">$</span><input class="field" id="ebtCardBalance" inputmode="decimal" type="number" min="0" step=".01" placeholder="0.00" aria-label="Current EBT card balance" style="font-size:32px;font-weight:850;color:var(--green);padding:4px 6px;min-height:52px;width:100%"></div></label></div><div class="grid g4 stats section" id="foodBudgetStats"></div><label class="section" style="max-width:260px"><span>Dinner slots / month</span><input class="field" id="dinnerSlots" type="number" min="1" step="1"></label><div class="notice section"><b>Plan vs. card</b><div class="small" id="ebtBalanceMeta">Card balance is tracked separately from the monthly meal plan.</div></div></div><div class="card section"><div class="split"><div><h2>Inventory</h2><div class="small">Food, household, personal-care and pet supplies can all live here. Leave quantity blank if you only know that something is on hand.</div></div><button class="btn" id="addInventory">+ Inventory item</button></div><div class="grid g4 stats section" id="inventoryStats"></div><div class="tablewrap section"><table><thead><tr><th>Item</th><th>Category</th><th>On hand</th><th>Qty</th><th>Unit</th><th>Restock at</th><th>Need</th><th></th></tr></thead><tbody id="inventoryRows"></tbody></table></div></div><div class="card section"><div class="split"><div><h2>Shopping strategy</h2><div class="small">Automatically minimize the basket with one store, two stores, or the lowest price for every item.</div></div><select class="field" id="shoppingMode" style="max-width:260px"><option value="lowest">Lowest price per item</option><option value="one">Best one-store shop</option><option value="two">Best two-store shop</option></select></div><div id="shopOptimizeSummary" class="notice section"></div><div id="optimizedBasket" class="section"></div></div><div class="card section"><div class="split"><div><h2>Store price matrix</h2><div class="small">“Need” is the comparison quantity for this month. Change any price or package amount after checking the store.</div></div><button class="btn" id="addStoreItem">+ Product</button></div><div class="tablewrap section"><table class="priceMatrix"><thead id="storeMatrixHead"></thead><tbody id="storeMatrixBody"></tbody></table></div></div><div class="card section"><div class="split"><h2>Monthly essentials</h2><button class="btn" id="addEssential">+ Essential</button></div><div class="tablewrap section"><table><thead><tr><th>Item</th><th>Qty</th><th>Unit</th><th>Price</th><th>Total</th><th></th></tr></thead><tbody id="essentialRows"></tbody></table></div></div></section>
<section class="view" data-v="recipes"><div class="panel"><div class="split"><div><div class="eyebrow">Recipe Book</div><h2>Current family meals</h2><p class="muted">Every meal in the planner lives here with its batch ingredients, servings and current expected batch cost. Planning and shopping use the same recipe data.</p></div><div class="stat"><small>Recipes</small><div class="value blueText" id="recipeCount"></div></div></div><div class="tools section"><input class="field" id="recipeBookSearch" placeholder="Find a recipe or ingredient"></div></div><div class="grid g2 section" id="recipeBook"></div></section>
<section class="view" data-v="meals"><div class="panel"><div class="split"><div><div class="eyebrow">Cookbook</div><h2>Full Cookbook</h2><p class="muted">Browse household recipes plus researched recipes that fit the appliances you own. External recipes should show their source rating and rating count so a 5-star score with only a few reviews is not treated the same as a heavily reviewed recipe.</p></div><div class="stat"><small>Active meals to prepare</small><div class="value blueText" id="mealRemaining"></div></div></div><div class="tools section"><input class="field" id="mealSearch" placeholder="Search cookbook"><select class="field" id="applianceFilter"><option value="">All appliances</option><option>stove</option><option>oven</option><option>air fryer</option><option>mixer</option><option>blender</option><option>toaster</option><option>bread machine</option><option>Instant Pot</option><option>Crock Pot</option></select><button class="btn primary" id="recipeSearch">Find more highly rated recipes</button></div><div class="small section">Available: fridge/freezer · stove · air fryer · mixer · blender · toaster · bread machine · Instant Pot · Crock Pot</div></div><div class="grid g3 section" id="recipes"></div><div class="card section"><div class="split"><div><h2>Active Cookbook</h2><div class="small">Choosing a recipe copies it here. It stays until every planned occurrence is prepared. Revert returns a prepared occurrence.</div></div><small id="mealMeta"></small></div><div id="planRows"></div></div></section>
<section class="view" data-v="groceries"><div class="panel"><div class="split"><div><div class="eyebrow">Shopping list</div><h2>Inventory shortages only</h2><div class="small">Expected uses stored comparison prices. Enter actual paid amounts to measure savings and price increases over time. SNAP/EBT-eligible food is treated as sales-tax-free; non-food and non-eligible items use the actual paid amount you enter.</div></div><div class="stat"><small>Purchased</small><div class="value greenText" id="purchasePct"></div></div></div><div class="grid g3 stats section" id="shoppingStats"></div></div><div class="card section" id="shopping"></div></section>
<section class="view" data-v="budget"><div class="panel"><div class="split"><div><div class="eyebrow">Budget</div><h2>Exact household financial picture</h2><p class="muted">No intermediate accounting rounding. Derived values keep full calculation precision; the detailed display shows up to six decimals.</p></div><div class="tools"><button class="btn green" id="shareBudgetPdf">Share Budget PDF</button><div class="stat"><small>After reserves</small><div class="value amberText" id="budgetLeft"></div></div></div></div></div><div class="grid g2 section"><div class="card"><div class="split"><div><h2>Income sources</h2><div class="small">Add each job, tips, benefit, or other income source using its real cadence.</div></div><button class="btn" id="addIncomeSource">+ Income source</button></div><div class="grid g3 section">
<label><span>Tax year</span><select class="field taxProfileField" data-k="taxYear"><option value="2026">2026</option></select></label>
<label><span>Filing status</span><select class="field taxProfileField" data-k="filingStatus"><option value="single">Single</option><option value="hoh">Head of household</option><option value="mfj">Married filing jointly</option><option value="mfs">Married filing separately</option><option value="qss">Qualifying surviving spouse</option></select></label>
<label><span>Federal calculation</span><select class="field taxProfileField" data-k="federalMode"><option value="auto">2026 bracket estimate</option><option value="manual">Manual %</option></select></label>
<label><span>NC calculation</span><select class="field taxProfileField" data-k="ncMode"><option value="auto">2026 NC estimate</option><option value="manual">Manual %</option></select></label>
<label><span>Federal manual %</span><input class="field taxProfileField" data-k="federalPct" type="number" step=".01"></label>
<label><span>NC manual %</span><input class="field taxProfileField" data-k="ncPct" type="number" step=".01"></label>
</div><div class="small section">Automatic mode annualizes payroll income and applies the selected 2026 filing status. Use Manual % when an employer's actual withholding or a special situation is a better planning number.</div><div class="tablewrap section"><table><thead><tr><th>Source</th><th>Gross each</th><th>Cadence</th><th>Start / next date</th><th>Times/wk</th><th>Tax treatment</th><th></th></tr></thead><tbody id="incomeSourceRows"></tbody></table></div><label class="section"><span>EBT food benefit / month</span><input class="field" id="ebtBudget" type="number" step=".01"></label><label class="section"><span>Notes / deductions not modeled</span><textarea class="field" id="incomeNote"></textarea></label><div id="incomeSummary" class="section"></div></div><div class="card"><h2>Cash picture</h2><div id="cashSummary" class="section"></div><label class="section"><span>Other / unlisted expenses</span><input class="field" id="otherCash" type="number"></label></div></div><div class="card section"><div class="split"><div><h2>Income calendar</h2><div class="small">Expected deposits by date, including daily, weekly, bi-weekly, twice-monthly, monthly, tips, and one-off/random income.</div></div><div class="tools"><button class="btn" id="incCalPrev">‹</button><b id="incomeCalLabel"></b><button class="btn" id="incCalNext">›</button></div></div><div class="grid g3 stats section" id="incomeCalStats"></div><div id="incomeCalendar" class="calendar section"></div></div><div class="card section"><div class="split"><div><h2>Budget vs actual</h2><div class="small">Actual values are stored by month. Positive variance means favorable: more income than budgeted or less spending than budgeted.</div></div><label style="min-width:170px"><span>Month</span><input class="field" id="actualMonth" type="month"></label></div><div class="grid g4 stats section" id="bvaStats"></div><div class="tablewrap section"><table><thead><tr><th>Category</th><th>Budgeted</th><th>Actual</th><th>Favorable variance</th></tr></thead><tbody id="bvaRows"></tbody></table></div></div><div class="card section"><div class="split"><div><h2>Gross, net, insurance + position</h2><div class="small">Net worth is separate from monthly cash flow. Insurance, rent, utilities and subscriptions are expenses unless an unpaid balance is actually owed.</div></div></div><div class="grid g4 stats section" id="exactFinanceStats"></div><div class="grid g2 section"><div><div class="split"><h3>Assets</h3><button class="btn" id="addAsset">+ Asset</button></div><div id="assetRows" class="section"></div></div><div><div class="split"><h3>Liabilities</h3><button class="btn" id="addLiability">+ Liability</button></div><div id="liabilityRows" class="section"></div></div></div></div><div class="card section"><div class="split"><h2>Bills</h2><button class="btn" id="addBill">+ Bill</button></div><div class="tablewrap section"><table><thead><tr><th>Bill</th><th>Category</th><th>Amount</th><th>Due</th><th>Every N mo</th><th>Starts</th><th></th></tr></thead><tbody id="billRows"></tbody></table></div></div><div class="card section"><div class="split"><div><h2>Reserves + sinking funds</h2><div class="small">Turn irregular costs into exact monthly reserves. Use month-based cycles for household/personal costs and mileage-based cycles for vehicle maintenance.</div></div><button class="btn" id="addSinking">+ Reserve</button></div><div class="grid g4 stats section" id="reserveStats"></div><div class="tablewrap section"><table><thead><tr><th>Item</th><th>Category</th><th>On hand</th><th>Basis</th><th>Future cost</th><th>Every months / miles</th><th>Monthly reserve</th><th></th></tr></thead><tbody id="sinkingRows"></tbody></table></div></div><div class="card section"><div class="split"><div><h2>Bill calendar</h2><div class="small">Shows bills in the selected month. Export creates an iCal file for the next 12 months.</div></div><div class="tools"><button class="btn" id="calPrev">‹</button><b id="calLabel"></b><button class="btn" id="calNext">›</button><button class="btn primary" id="exportIcal">Export iCal</button></div></div><div id="billCalendar" class="calendar section"></div></div><div class="card section"><div class="split"><h2>Daily cash expenses</h2><button class="btn" id="addDaily">+ Daily</button></div><div id="dailyRows"></div></div></section>
<section class="view" data-v="tax"><div class="panel"><div class="split"><div><div class="eyebrow">Tax</div><h2>Withholding, obligations + reserves</h2><p class="muted">Payroll withholding is modeled separately from business reserves and fixed tax obligations. These are planning values, not tax advice.</p></div><div class="stat"><small>Payroll profile</small><div class="value amberText" id="taxProfileTotal"></div></div></div></div><div class="grid g2 section"><div class="card"><h2>Payroll tax profile</h2>
<div class="grid g2 section">
<label><span>Tax year</span><select class="field taxProfileField" data-k="taxYear"><option value="2026">2026</option></select></label>
<label><span>Filing status</span><select class="field taxProfileField" data-k="filingStatus"><option value="single">Single</option><option value="hoh">Head of household</option><option value="mfj">Married filing jointly</option><option value="mfs">Married filing separately</option><option value="qss">Qualifying surviving spouse</option></select></label>
<label><span>Federal method</span><select class="field taxProfileField" data-k="federalMode"><option value="auto">2026 brackets</option><option value="manual">Manual %</option></select></label>
<label><span>NC method</span><select class="field taxProfileField" data-k="ncMode"><option value="auto">2026 NC tax</option><option value="manual">Manual %</option></select></label>
<label><span>Federal manual %</span><input class="field taxProfileField" data-k="federalPct" type="number" step=".01"></label>
<label><span>NC manual %</span><input class="field taxProfileField" data-k="ncPct" type="number" step=".01"></label>
<label><span>Federal deduction</span><select class="field taxProfileField" data-k="federalDeductionMode"><option value="standard">Standard deduction</option><option value="custom">Custom / itemized</option></select></label>
<label><span>Custom federal deduction</span><input class="field taxProfileField" data-k="federalCustomDeduction" type="number" step=".01"></label>
<label><span>Other federal deductions</span><input class="field taxProfileField" data-k="federalOtherDeductions" type="number" step=".01" placeholder="Tips, overtime, etc. if eligible"></label>
<label><span>Federal annual credits</span><input class="field taxProfileField" data-k="federalCredits" type="number" step=".01"></label>
<label><span>Extra federal withholding / year</span><input class="field taxProfileField" data-k="federalExtraAnnual" type="number" step=".01"></label>
<label><span>NC deduction</span><select class="field taxProfileField" data-k="ncDeductionMode"><option value="standard">Standard deduction</option><option value="custom">Custom / itemized</option></select></label>
<label><span>Custom NC deduction</span><input class="field taxProfileField" data-k="ncCustomDeduction" type="number" step=".01"></label>
<label><span>NC taxable-income adjustments</span><input class="field taxProfileField" data-k="ncAdjustments" type="number" step=".01"></label>
<label><span>NC annual credits</span><input class="field taxProfileField" data-k="ncCredits" type="number" step=".01"></label>
<label><span>Extra NC withholding / year</span><input class="field taxProfileField" data-k="ncExtraAnnual" type="number" step=".01"></label>
<label><span>Social Security %</span><input class="field taxProfileField" data-k="socialSecurityPct" type="number" step=".01"></label>
<label><span>Medicare %</span><input class="field taxProfileField" data-k="medicarePct" type="number" step=".01"></label>
<label style="display:flex;gap:10px;align-items:center"><input class="check taxProfileCheck" data-k="additionalMedicare" type="checkbox"><span>Include 0.9% Additional Medicare withholding over $200,000</span></label>
</div>
<div class="notice section"><b>2026 planning model</b><div class="small" id="taxRuleMeta"></div></div>
<div id="taxPayrollSummary" class="section"></div></div><div class="card"><h2>Business withholding</h2><label><span>Business tax reserve %</span><input class="field" id="taxBusinessPct" type="number" step=".01"></label><div id="taxBusinessSummary" class="section"></div></div></div><div class="card section"><div class="split"><div><h2>Tax obligations</h2><div class="small">Use fixed obligations for annual, quarterly or one-time taxes and fees. Track expected and actual amounts separately.</div></div><button class="btn" id="addTaxItem">+ Tax item</button></div><div class="tablewrap section"><table><thead><tr><th>Item</th><th>Scope</th><th>Expected</th><th>Every N months</th><th>Starts</th><th>Actual</th><th></th></tr></thead><tbody id="taxRows"></tbody></table></div><div class="grid g3 stats section" id="taxStats"></div></div></section>
<section class="view" data-v="medical"><div class="panel"><div class="split"><div><div class="eyebrow">Medical</div><h2>Health costs + future obligations</h2><p class="muted">Track premiums, prescriptions, visits, dental, vision, devices and other medical costs separately from ordinary household bills.</p></div><div class="stat"><small>Monthly equivalent</small><div class="value amberText" id="medicalMonthly"></div></div></div></div><div class="card section"><div class="split"><h2>Medical expenses</h2><button class="btn" id="addMedical">+ Medical item</button></div><div class="tablewrap section"><table><thead><tr><th>Item</th><th>Type</th><th>Expected</th><th>Every N months</th><th>Starts</th><th>Actual</th><th>Notes</th><th></th></tr></thead><tbody id="medicalRows"></tbody></table></div><div class="grid g3 stats section" id="medicalStats"></div></div><div class="card section"><div class="split"><div><h2>Medical calendar</h2><div class="small">Shows expected recurring medical costs in the selected month.</div></div><div class="tools"><button class="btn" id="medCalPrev">‹</button><b id="medCalLabel"></b><button class="btn" id="medCalNext">›</button></div></div><div id="medicalCalendar" class="calendar section"></div></div></section>
<section class="view" data-v="driving"><div class="panel"><div class="split"><div><div class="eyebrow">Driving</div><h2>Route-based fuel estimate</h2></div><div class="stat"><small>Monthly fuel</small><div class="value amberText" id="fuelEstimate"></div></div></div></div><div class="grid g3 section"><label class="card"><span>Gas price / gallon</span><input class="field" id="gasPrice" type="number" step=".01"></label><label class="card"><span>Vehicle MPG</span><input class="field" id="mpg" type="number" step=".1"></label><div class="card"><label><span>Station / search phrase</span><input class="field" id="station"></label><a class="btn section" id="gasSearch" target="_blank" rel="noopener">Check gas price</a></div></div><div class="grid g4 stats section" id="driveStats"></div><div class="card section"><div class="split"><h2>Route legs</h2><button class="btn" id="addRoute">+ Route</button></div><div class="tablewrap section"><table><thead><tr><th>Route</th><th>Miles</th><th>Days/week</th><th>Weekly</th><th></th></tr></thead><tbody id="routeRows"></tbody></table></div></div></section>
<section class="view" data-v="business"><div class="panel"><div class="split"><div><div class="eyebrow">Business</div><h2>Revenue, runway and owner income</h2><p class="muted">Business money stays separate from household cash. The planner shows operating profit, reserve, owner draw and the additional revenue needed to support that draw.</p></div><div class="stat"><small>Revenue gap</small><div class="value amberText" id="businessGap"></div></div></div></div><div class="grid g4 stats section" id="businessStats"></div><div class="grid g2 section"><div class="card"><h2>Business plan</h2><div class="grid g2 section"><label><span>Business name</span><input class="field" id="businessName"></label><label><span>Cash available</span><input class="field" id="businessCash" type="number" step=".01"></label><label><span>Tax reserve %</span><input class="field" id="businessTax" type="number" step=".01"></label><label><span>Desired owner draw / month</span><input class="field" id="businessDraw" type="number" step=".01"></label><label><span>Actual transfer to household / month</span><input class="field" id="businessTransfer" type="number" step=".01"></label></div><label class="section"><span>Notes</span><textarea class="field" id="businessNotes"></textarea></label></div><div class="card"><h2>Target math</h2><div id="businessTarget" class="section"></div></div></div><div class="grid g2 section"><div class="card"><div class="split"><div><h2>Revenue streams</h2><div class="small">Track subscriptions, donations, Kickstarter, Bitcoin, sales, grants, and random income separately.</div></div><div class="tools"><button class="btn" id="seedBizRevenue">Common channels</button><button class="btn" id="addBizRevenue">+ Revenue</button></div></div><div id="bizRevenueRows" class="section"></div></div><div class="card"><div class="split"><div><h2>Business expenses</h2><div class="small">Current and anticipated infrastructure, services, insurance, legal/accounting and other operating costs.</div></div><div class="tools"><button class="btn" id="seedBizCosts">Common costs</button><button class="btn" id="addBizExpense">+ Expense</button></div></div><div id="bizExpenseRows" class="section"></div></div></div><div class="card section"><div class="split"><div><h2>Business reserves / withholding</h2><div class="small">Set aside money before spending it. Use this for tax, insurance, legal/accounting, hosting growth, or other future obligations.</div></div><button class="btn" id="addBizReserve">+ Reserve</button></div><div id="bizReserveRows" class="section"></div></div><div class="card section"><div class="split"><div><h2>Business budget vs actual</h2><div class="small">Uses the same selected month as the household comparison.</div></div><span class="pill" id="businessActualMonth"></span></div><div class="tablewrap section"><table><thead><tr><th>Category</th><th>Budgeted</th><th>Actual</th><th>Favorable variance</th></tr></thead><tbody id="businessBvaRows"></tbody></table></div></div><div class="card section"><div class="split"><div><h2>Business position</h2><div class="small">Assets and liabilities affect business net worth; they do not automatically change monthly profit.</div></div></div><div class="grid g2 section"><div><div class="split"><h3>Assets</h3><button class="btn" id="addBizAsset">+ Asset</button></div><div id="bizAssetRows" class="section"></div></div><div><div class="split"><h3>Liabilities</h3><button class="btn" id="addBizLiability">+ Liability</button></div><div id="bizLiabilityRows" class="section"></div></div></div></div></section>
<section class="view" data-v="reports"><div class="panel"><div class="split"><div><div class="eyebrow">Reports</div><h2>Household + business intelligence</h2><p class="muted">Percent-based dashboards stay fluid on phones and larger screens. Reports use the planner data already stored on this device.</p></div><label style="width:min(100%,190px)"><span>Report month</span><input class="field" id="reportMonth" type="month"></label></div><div class="grid g4 stats section" id="reportHeadline"></div></div><div class="grid g2 section"><div class="card"><h2>Cash allocation</h2><div id="reportCashBars" class="section"></div></div><div class="card"><h2>Income + withholding</h2><div id="reportIncomeBars" class="section"></div></div></div><div class="grid g2 section"><div class="card"><h2>Household budget vs actual</h2><div id="reportVariance" class="section"></div></div><div class="card"><h2>Business health</h2><div id="reportBusiness" class="section"></div></div></div><div class="grid g2 section"><div class="card"><h2>Food + shopping</h2><div id="reportFood" class="section"></div></div><div class="card"><h2>Position + obligations</h2><div id="reportPosition" class="section"></div></div></div></section>
<section class="view" data-v="settings"><div class="panel"><div class="eyebrow">Settings</div><h2>Backup, privacy + app</h2><p class="muted">Household, food, meal and business values are edited in the sections where they are used. Settings is only for the app itself.</p></div><div class="card section"><div class="tools"><label class="btn primary">Restore JSON File<input hidden id="importFile" type="file" accept=".json,application/json,text/plain,application/octet-stream"></label><button class="btn" id="clipboardImportBtn">Import Clipboard</button><button class="btn green" id="shareBackupBtn">Save Backup to iCloud</button><button class="btn" id="exportBtn">Download Backup</button><button class="btn danger" id="resetBtn">Clear device</button></div><label class="section"><span>Paste planner JSON</span><textarea class="field" id="importJsonText" rows="5" placeholder="Paste a Family Planner backup here if iPhone Files will not hand the JSON to the Home Screen app."></textarea></label><button class="btn primary" id="pasteImportBtn">Import Pasted JSON</button><div class="card section"><h3>Quick setup code</h3><div class="small">This bypasses iPhone file and clipboard import completely. Type a short setup code and apply it directly to this installed planner.</div><div class="tools section"><input class="field" id="setupCode" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="Enter setup code"><button class="btn primary" id="applySetupCode">Apply code</button></div></div><div class="notice section" id="importStatus">No import attempted in this session.</div><div class="small section" id="backupStatus"></div><div class="small">App build: v31</div><div class="notice section"><b>iPhone Home Screen app:</b> a JSON downloaded in ChatGPT or Safari does not automatically enter the installed planner. Save it to Files, then use Restore JSON File from inside this app. If Files does not expose it, use Import Clipboard or paste the JSON above.</div><div class="notice section">Backup: use “Save Backup to iCloud,” then choose Save to Files → iCloud Drive. Internet searches stay separate and never write into planner storage automatically.</div><div class="notice section"><b>Privacy:</b> planner values stay in this browser unless you export or share a backup yourself.</div><div class="notice section"><b>iPhone:</b> Safari → Share → Add to Home Screen.</div></div></section>
</main></div><div class="bottom" id="bottom"></div>`;
}
function nav(){let top=NAV.map(x=>`<button data-nav="${x[0]}">${x[2]}</button>`).join("");$("#tabs").innerHTML=top;$("#bottom").innerHTML=NAV.map(x=>`<button data-nav="${x[0]}"><b>${x[1]}</b>${x[2]}</button>`).join("");$$("[data-nav]").forEach(b=>b.onclick=()=>show(b.dataset.nav))}
function show(v){state.view=v;$$(".view").forEach(x=>x.classList.toggle("active",x.dataset.v===v));$$("[data-nav]").forEach(x=>x.classList.toggle("active",x.dataset.nav===v));save();scrollTo({top:0,behavior:"smooth"})}
const pct=(a,b)=>b?100*n(a)/n(b):0;
const barRow=(label,value,max,suffix="")=>'<div class="reportBarRow"><div class="split"><span>'+esc(label)+'</span><b>'+esc(value)+'</b></div><div class="reportTrack"><div class="reportFill" style="width:'+Math.max(0,Math.min(100,n(max)))+'%"></div></div>'+suffix+'</div>';
function renderReports(){
  let month=$("#reportMonth")?.value||state.actualMonth||ym(),events=incomeSourceEvents(month),gross=state.incomeSources.length?events.reduce((s,e)=>s+e.gross,0):salaryGross()+tips(),net=state.incomeSources.length?events.reduce((s,e)=>s+e.net,0):salaryNet()+tips(),withheld=Math.max(0,gross-net),bill=billsBudgetForMonth(month),daily=dailyBudgetForMonth(month),fuel=n(fuelCost()),reserve=sinkingMonthly(),med=medicalMonthly(),tax=taxItemMonthly(),out=bill+daily+fuel+n(state.otherCash)+reserve+med+tax,resources=net+n(state.business.householdTransfer)+ebtIncome(),cashIncome=net+n(state.business.householdTransfer),savings=cashIncome-out,ab=state.actualHistory?.[month]||{},actualSpend=["bills","daily","fuel","other"].reduce((s,k)=>s+(ab[k]===""||ab[k]==null?0:n(ab[k])),0),actualKnown=["bills","daily","fuel","other"].some(k=>ab[k]!==""&&ab[k]!=null);
  $("#reportHeadline").innerHTML=[["Cash income",precise(cashIncome)],["EBT",precise(ebtIncome())],["Planned outflow",precise(out)],["Planned surplus / gap",precise(savings)]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");
  let maxOut=Math.max(1,bill,daily,fuel,reserve,med,tax,n(state.otherCash));$("#reportCashBars").innerHTML=[["Bills",bill],["Daily",daily],["Fuel",fuel],["Household reserves",reserve],["Medical",med],["Tax obligations",tax],["Other",n(state.otherCash)]].map(x=>barRow(x[0],precise(x[1]),pct(x[1],maxOut))).join("");
  $("#reportIncomeBars").innerHTML=barRow("Net household cash",precise(cashIncome),pct(cashIncome,Math.max(1,resources)))+barRow("EBT food resources",precise(ebtIncome()),pct(ebtIncome(),Math.max(1,resources)))+barRow("Payroll withholding",precise(withheld),pct(withheld,Math.max(1,gross)))+'<div class="small section">Withholding: '+pct(withheld,Math.max(1,gross)).toLocaleString(undefined,{maximumFractionDigits:2})+'% of modeled gross payroll.</div>';
  $("#reportVariance").innerHTML=actualKnown?barRow("Budgeted core spending",precise(bill+daily+fuel+n(state.otherCash)),100)+barRow("Actual entered",precise(actualSpend),pct(actualSpend,Math.max(1,bill+daily+fuel+n(state.otherCash))))+'<div class="kpi"><span>Favorable variance</span><b class="'+((bill+daily+fuel+n(state.otherCash)-actualSpend)>=0?"greenText":"redText")+'">'+precise(bill+daily+fuel+n(state.otherCash)-actualSpend)+'</b></div>':'<div class="empty">Enter actual spending in Budget to activate variance reporting.</div>';
  let br=businessRevenue(),be=businessExpenses(),bres=businessReserveLines()+businessTaxReserve(),bp=businessOperatingProfit();$("#reportBusiness").innerHTML=barRow("Revenue",precise(br),100)+barRow("Operating costs",precise(be),pct(be,Math.max(1,br)))+barRow("Reserves / withholding",precise(bres),pct(bres,Math.max(1,br)))+'<div class="kpi"><span>Operating margin</span><b>'+pct(bp,Math.max(1,br)).toLocaleString(undefined,{maximumFractionDigits:2})+'%</b></div><div class="kpi"><span>Revenue gap to target</span><b>'+precise(businessRevenueGap())+'</b></div>';
  let gl=grocery(),expected=gl.reduce((s,x)=>s+n(x.expected),0),actual=gl.reduce((s,x)=>s+n(state.purchaseCost[x.key]),0),entered=gl.filter(x=>state.purchaseCost[x.key]!==""&&state.purchaseCost[x.key]!=null).length;$("#reportFood").innerHTML='<div class="kpi"><span>Shopping shortages</span><b>'+gl.length+'</b></div><div class="kpi"><span>Expected basket</span><b>'+precise(expected)+'</b></div><div class="kpi"><span>Actual prices entered</span><b>'+entered+'</b></div><div class="kpi"><span>Actual entered total</span><b>'+precise(actual)+'</b></div><div class="kpi"><span>Prepared / planned</span><b>'+preparedCount()+' / '+plannedCount()+'</b></div>';
  $("#reportPosition").innerHTML='<div class="kpi"><span>Assets</span><b>'+precise(assetLowTotal())+(assetHighTotal()!==assetLowTotal()?'–'+precise(assetHighTotal()):'')+'</b></div><div class="kpi"><span>Liabilities</span><b>'+precise(liabilityTotal())+'</b></div><div class="kpi"><span>Net worth range</span><b>'+precise(netWorthLow())+(netWorthHigh()!==netWorthLow()?'–'+precise(netWorthHigh()):'')+'</b></div><div class="kpi"><span>Medical monthly equivalent</span><b>'+precise(med)+'</b></div><div class="kpi"><span>Fixed tax monthly equivalent</span><b>'+precise(tax)+'</b></div>';
}
function render(){
$("#labelTop").textContent=(state.householdLabel||"My Household")+" · local-only";
$("#setup").textContent=state.profileLoaded?"Private profile loaded on this device.":"No private profile loaded yet. Open Settings to restore your private backup JSON.";
$("#cashHero").textContent=state.profileLoaded?money(householdAfterReserves()):"Import profile";$("#foodHero").textContent=state.profileLoaded?money(foodLeft()):"—";$("#milesHero").textContent=state.profileLoaded?monthlyMiles().toLocaleString(undefined,{maximumFractionDigits:6})+" mi":"—";$("#fuelHero").textContent=fuelCost()==null?"Enter MPG":money(fuelCost());
$("#homeStats").innerHTML=[["Modeled cash income",precise(income())],["EBT food benefit",precise(ebtIncome())],["Total household resources",precise(householdResources())],["Household reserves",precise(sinkingMonthly())],["Income gap",precise(householdIncomeGap())],["Business revenue gap",precise(businessRevenueGap())]].map(x=>`<div class="stat"><small>${x[0]}</small><div class="value">${x[1]}</div></div>`).join("");
$("#ebtCardBalance").value=state.ebtCardBalance??"";
$("#ebtBalanceMeta").textContent=state.ebtBalanceUpdated?"Last updated "+new Date(state.ebtBalanceUpdated+"T12:00:00").toLocaleDateString()+". Planned month remaining is "+money(foodLeft())+".":"Card balance is tracked separately from the monthly meal plan. Planned month remaining is "+money(foodLeft())+".";
$("#foodBudgetStats").innerHTML=[["EBT monthly benefit",money(ebtIncome())],["Monthly essentials planned",money(essentialsTotal())],["Selected meals planned",money(planTotal())],["Planned month remaining",money(foodLeft())]].map(x=>`<div class="stat"><small>${x[0]}</small><div class="value">${x[1]}</div></div>`).join("");
let invOnHand=state.inventory.filter(i=>i.onHand||n(i.qty)>0).length,invLow=state.inventory.filter(i=>n(i.minQty)>0&&n(i.qty)<n(i.minQty)).length,invCats=new Set(state.inventory.map(i=>i.category).filter(Boolean)).size;
$("#inventoryStats").innerHTML=[["Items",state.inventory.length],["On hand",invOnHand],["Low / restock",invLow],["Categories",invCats]].map(x=>`<div class="stat"><small>${x[0]}</small><div class="value">${x[1]}</div></div>`).join("");
$("#inventoryRows").innerHTML=state.inventory.map((i,k)=>{let need=Math.max(0,n(i.minQty)-n(i.qty));return`<tr><td><input class="field invName" data-i="${k}" value="${esc(i.name||"")}"></td><td><input class="field invCat" data-i="${k}" value="${esc(i.category||"Household")}"></td><td><input class="check invOn" data-i="${k}" type="checkbox" ${i.onHand?"checked":""}></td><td><input class="field invQty" data-i="${k}" type="number" step=".01" value="${i.qty??""}"></td><td><input class="field invUnit" data-i="${k}" value="${esc(i.unit||"item")}"></td><td><input class="field invMin" data-i="${k}" type="number" step=".01" value="${i.minQty??""}"></td><td><b>${need?need.toLocaleString(undefined,{maximumFractionDigits:3}):"—"}</b></td><td><button class="btn danger invRemove" data-i="${k}">×</button></td></tr>`}).join("")||`<tr><td colspan="8"><div class="empty">No inventory items yet.</div></td></tr>`;
renderStoreComparison();
$("#essentialRows").innerHTML=state.essentials.map((e,i)=>`<tr><td><input class="field en" data-i="${i}" value="${esc(e.name)}"></td><td><input class="field eq" data-i="${i}" type="number" value="${n(e.qty)}"></td><td><input class="field eu" data-i="${i}" value="${esc(e.unit||"item")}"></td><td><input class="field ep" data-i="${i}" type="number" step=".01" value="${n(e.unitPrice)}"></td><td>${money(n(e.qty)*n(e.unitPrice))}</td><td><button class="btn danger er" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="6"><div class="empty">No essentials yet.</div></td></tr>`;
$("#recipeCount").textContent=RECIPES.length;
let rbq=($("#recipeBookSearch")?.value||"").trim().toLowerCase(),rb=RECIPES.filter(r=>!rbq||r.name.toLowerCase().includes(rbq)||r.ing.some(i=>i[0].toLowerCase().includes(rbq)));
$("#recipeBook").innerHTML=rb.map(r=>{let ex=recipeExpected(r);return '<div class="card"><div class="split"><div><h3>'+esc(r.name)+'</h3><div class="small">'+r.servings+' servings</div></div><div class="stat"><small>Expected batch</small><div class="value">'+(ex.complete?money(ex.known):money(r.cost)+'*')+'</div></div></div><div class="section">'+r.ing.map(i=>{let v=ingredientExpected(i[0],i[1],i[2]);return '<div class="kpi"><span>'+esc(i[0])+' · '+i[1]+' '+esc(i[2])+'</span><b>'+(v==null?'price needed':money(v))+'</b></div>'}).join('')+'</div><div class="small section">'+(ex.complete?'Expected cost uses current store-price records.':'* Recipe estimate is used until every ingredient has a matching store price.')+'</div><div class="tools section"><button class="btn primary recipePlan" data-id="'+r.id+'">'+(planEntry(r.id)?'Planned ✓':'Plan meal')+'</button><a class="btn" href="'+search(r.q)+'" target="_blank" rel="noopener">Recipe search</a></div></div>'}).join("")||'<div class="empty">No matching recipes.</div>';
$("#mealRemaining").textContent=remainingPlanned();let af=$("#applianceFilter")?.value||"";let recipeOrder=fullCookbook().filter(r=>!af||(r.appliances||[]).includes(af)).sort((a,b)=>{let A=planEntry(a.id),B=planEntry(b.id);if(!!A!==!!B)return A?-1:1;if(A&&B)return n(B.addedAt)-n(A.addedAt);let ar=n(a.rating),br=n(b.rating);if(ar!==br)return br-ar;return n(b.ratingCount)-n(a.ratingCount)||a.name.localeCompare(b.name)});$("#recipes").innerHTML=recipeOrder.map(mealCardHtml).join("");
let pe=Object.entries(state.plan).filter(([,e])=>remainingFor(e)>0).sort((a,b)=>n(b[1].addedAt)-n(a[1].addedAt));$("#mealMeta").textContent=remainingPlanned()+" meal"+(remainingPlanned()===1?"":"s")+" to prepare";$("#planRows").innerHTML=pe.map(([id,e])=>plannedMealRowHtml(id,e)).join("")||'<div class="empty">Everything in the active cookbook is prepared.</div>';
let g=grocery(),gd=g.filter(x=>state.purchased[x.key]).length;$("#purchasePct").textContent=(g.length?Math.round(gd/g.length*100):0)+"%";let expectedBasket=g.reduce((s,x)=>s+(x.expected||0),0),actualBasket=g.reduce((s,x)=>s+(state.purchaseCost[x.key]===""||state.purchaseCost[x.key]==null?0:n(state.purchaseCost[x.key])),0),actualEntered=g.some(x=>state.purchaseCost[x.key]!==""&&state.purchaseCost[x.key]!=null),delta=actualEntered?expectedBasket-actualBasket:null;$("#shoppingStats").innerHTML=[["Expected",precise(expectedBasket)],["Actual entered",actualEntered?precise(actualBasket):"—"],["Savings / increase",delta==null?"—":(delta>=0?precise(delta)+" saved":precise(Math.abs(delta))+" over")]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");$("#shopping").innerHTML=g.map(x=>`<div class="row"><div class="tools"><input class="check buy" data-k="${encodeURIComponent(x.key)}" type="checkbox" ${state.purchased[x.key]?"checked":""}><div><b>${esc(x.name)}</b><div class="small">Need ${Math.round(x.qty*100)/100} ${esc(x.unit)} · on hand ${Math.round(x.have*100)/100} · buy ${Math.round(x.buy*100)/100} · expected ${x.expected==null?"price needed":money(x.expected)} · ${[...x.sources].join(" · ")}</div></div></div><div class="tools"><input class="field paid" style="width:92px" data-k="${encodeURIComponent(x.key)}" type="number" step=".01" placeholder="Paid" value="${state.purchaseCost[x.key]??""}"><a class="btn" href="${search(x.name+" grocery price "+state.zip)}" target="_blank" rel="noopener">Price</a></div></div>`).join("")||`<div class="empty">Inventory covers current needs, or no essentials/meals are planned.</div>`;
$$(".income").forEach(x=>x.value=state.income[x.dataset.k]||"");$$(".taxPct").forEach(x=>x.value=state.taxProfile[x.dataset.k]??"");$("#incomeNote").value=state.income.note||"";$("#otherCash").value=state.otherCash||"";$("#budgetLeft").textContent=precise(householdAfterReserves());
$("#incomeSourceRows").innerHTML=state.incomeSources.map((s,i)=>`<tr><td><input class="field isn" data-i="${i}" value="${esc(s.name||"Income")}"></td><td><input class="field isa" data-i="${i}" type="number" step=".01" value="${s.amount??""}"></td><td><select class="field isc" data-i="${i}">${[["daily","Daily"],["weekly","Weekly"],["biweekly","Bi-weekly"],["twice-monthly","Twice a month"],["monthly","Monthly"],["tips","Tips"],["random","Random / one-time"]].map(([v,l])=>`<option value="${v}" ${(s.cadence||"monthly")===v?"selected":""}>${l}</option>`).join("")}</select></td><td><input class="field isd" data-i="${i}" type="date" value="${s.startDate||""}"></td><td><input class="field isw" data-i="${i}" type="number" min="1" max="7" value="${s.daysPerWeek??""}" placeholder="tips"></td><td><select class="field ist" data-i="${i}"><option value="payroll" ${(s.taxMode||"payroll")==="payroll"?"selected":""}>Payroll withholding</option><option value="none" ${s.taxMode==="none"?"selected":""}>No withholding</option><option value="business" ${s.taxMode==="business"?"selected":""}>Business / transfer</option></select></td><td><button class="btn danger isr" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="7"><div class="empty">Add each job, tip stream, or other income source.</div></td></tr>`;
renderIncomeCalendar();
const currentIncomeEvents=incomeSourceEvents(ym()),grossIncome=state.incomeSources.length?currentIncomeEvents.reduce((s,e)=>s+e.gross,0):salaryGross()+tips(),sourceNetTotal=state.incomeSources.length?currentIncomeEvents.reduce((s,e)=>s+e.net,0):legacyNet(),withheld=Math.max(0,grossIncome-sourceNetTotal),insuranceMonth=state.bills.filter(b=>due(b)&&(b.category||"")==="Insurance").reduce((s,b)=>s+n(b.amount),0);
$("#incomeSummary").innerHTML=`<div class="kpi"><span>Expected gross this month</span><b>${precise(grossIncome)}</b></div><div class="kpi"><span>Estimated payroll withholding</span><b>−${precise(withheld)}</b></div><div class="kpi"><span>Business transfer</span><b>${precise(state.business.householdTransfer)}</b></div><div class="kpi"><span>Modeled net cash income</span><b>${precise(income())}</b></div><div class="kpi"><span>Estimated payroll-tax rate · ${esc(filingStatusLabel())}</span><b>${payrollTaxPct().toLocaleString(undefined,{maximumFractionDigits:2})}%</b></div><div class="kpi"><span>EBT food benefit</span><b>${precise(ebtIncome())}</b></div><div class="kpi"><span>Total household resources</span><b>${precise(householdResources())}</b></div><div class="small section">Payroll percentages are editable planning assumptions. EBT remains separate from cash because it is restricted to eligible food.</div>`;
$("#cashSummary").innerHTML=`<div class="kpi"><span>Modeled net income</span><b>${precise(income())}</b></div><div class="kpi"><span>Bills</span><b>−${precise(billsMonth())}</b></div><div class="kpi"><span>Daily expenses</span><b>−${precise(dailyMonth())}</b></div><div class="kpi"><span>Fuel</span><b>${fuelCost()==null?"MPG needed":"−"+precise(fuelCost())}</b></div><div class="kpi"><span>Other</span><b>−${precise(state.otherCash)}</b></div><div class="kpi"><span>Reserves / sinking funds</span><b>−${precise(sinkingMonthly())}</b></div><div class="kpi"><span>After all planned outflow</span><b>${precise(householdAfterReserves())}</b></div><div class="kpi"><span>Additional income needed</span><b>${precise(householdIncomeGap())}</b></div><div class="small section">Average recurring bill load: ${precise(billsAvg())}</div>`;
if(!state.actualMonth)state.actualMonth=ym();$("#actualMonth").value=state.actualMonth;let ab=actualBucket(),hRows=householdBvaRows();
let budgetIncome=hRows.filter(r=>r.type==="income").reduce((s,r)=>s+r.budget,0),actualIncome=hRows.filter(r=>r.type==="income").reduce((s,r)=>s+(actualNum(ab,r.key)||0),0),budgetSpend=hRows.filter(r=>r.type==="expense").reduce((s,r)=>s+r.budget,0),actualSpend=hRows.filter(r=>r.type==="expense").reduce((s,r)=>s+(actualNum(ab,r.key)||0),0);
$("#bvaStats").innerHTML=[["Budgeted income",precise(budgetIncome)],["Actual income entered",precise(actualIncome)],["Budgeted outflow + food",precise(budgetSpend)],["Actual outflow + food",precise(actualSpend)]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");
$("#bvaRows").innerHTML=hRows.map(r=>{let a=actualNum(ab,r.key),v=favorableVariance(r,a);return'<tr><td><b>'+esc(r.label)+'</b></td><td>'+precise(r.budget)+'</td><td><input class="field actualInput" data-key="'+r.key+'" type="number" step=".01" placeholder="Actual" value="'+(ab[r.key]??"")+'"></td><td class="'+(v==null?"":v>=0?"greenText":"redText")+'">'+(v==null?"—":precise(v))+'</td></tr>'}).join("");

let hasAssetRange=state.assets.some(a=>a.value===""||a.value==null?((a.valueLow!==""&&a.valueLow!=null)||(a.valueHigh!==""&&a.valueHigh!=null)):false);$("#exactFinanceStats").innerHTML=`<div class="stat"><small>Gross cash income</small><div class="value blueText">${precise(grossIncome)}</div></div><div class="stat"><small>Modeled net income</small><div class="value greenText">${precise(income())}</div></div><div class="stat"><small>Insurance this month</small><div class="value">${precise(insuranceMonth)}</div></div><div class="stat"><small>Net worth entered</small><div class="value ${netWorthLow()<0?"redText":"greenText"}">${hasAssetRange?precise(netWorthLow())+"–"+precise(netWorthHigh()):precise(netWorth())}</div></div>`;
$("#assetRows").innerHTML=state.assets.map((a,i)=>`<div class="row"><div class="grid g2" style="width:100%"><input class="field an" data-i="${i}" value="${esc(a.name||"")}"><input class="field ac" data-i="${i}" value="${esc(a.category||"Asset")}"></div><div class="tools"><input class="field avl" style="width:120px" data-i="${i}" type="number" step=".01" placeholder="Low estimate" value="${a.valueLow??""}"><input class="field avh" style="width:120px" data-i="${i}" type="number" step=".01" placeholder="High estimate" value="${a.valueHigh??""}"><input class="field av" style="width:120px" data-i="${i}" type="number" step=".01" placeholder="Exact value" value="${a.value??""}"><button class="btn danger ar" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No asset values entered yet.</div>`;
$("#liabilityRows").innerHTML=state.liabilities.map((a,i)=>`<div class="row"><div class="grid g2" style="width:100%"><input class="field ln" data-i="${i}" value="${esc(a.name||"")}"><input class="field lc" data-i="${i}" value="${esc(a.category||"Debt")}"></div><div class="tools"><input class="field lv" style="width:130px" data-i="${i}" type="number" step=".01" placeholder="Balance owed" value="${a.balance??""}"><button class="btn danger lr" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No liabilities entered. Bills are expenses, not liabilities unless a balance is actually owed.</div>`;
$("#billRows").innerHTML=state.bills.map((b,i)=>`<tr><td><input class="field bn" data-i="${i}" value="${esc(b.name)}"></td><td><select class="field bc" data-i="${i}">${["Housing","Utilities","Insurance","Subscription","Debt Payment","Other"].map(x=>`<option ${(b.category||"Other")===x?"selected":""}>${x}</option>`).join("")}</select></td><td><input class="field ba" data-i="${i}" type="number" step=".01" value="${n(b.amount)}"></td><td><input class="field bd" data-i="${i}" type="number" value="${b.dueDay||""}"></td><td><input class="field bf" data-i="${i}" type="number" value="${b.frequencyMonths||1}"></td><td><input class="field bs" data-i="${i}" type="month" value="${b.startMonth||ym()}"></td><td><button class="btn danger br" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="7"><div class="empty">No bills entered.</div></td></tr>`;
$("#reserveStats").innerHTML=`<div class="stat"><small>Monthly reserve</small><div class="value amberText">${precise(sinkingMonthly())}</div></div><div class="stat"><small>After reserves</small><div class="value ${householdAfterReserves()<0?"redText":"greenText"}">${precise(householdAfterReserves())}</div></div><div class="stat"><small>Income gap</small><div class="value ${householdIncomeGap()>0?"redText":"greenText"}">${precise(householdIncomeGap())}</div></div><div class="stat"><small>Items tracked</small><div class="value">${state.sinkingFunds.length}</div></div>`;
$("#sinkingRows").innerHTML=state.sinkingFunds.map((f,i)=>`<tr><td><input class="field sfn" data-i="${i}" value="${esc(f.name||"")}"></td><td><input class="field sfc" data-i="${i}" value="${esc(f.category||"Household")}"></td><td><input class="check sfo" data-i="${i}" type="checkbox" ${f.onHand?"checked":""}></td><td><select class="field sfb" data-i="${i}"><option value="months" ${f.basis!=="miles"?"selected":""}>Months</option><option value="miles" ${f.basis==="miles"?"selected":""}>Miles</option></select></td><td><input class="field sfa" data-i="${i}" type="number" step=".01" placeholder="Future cost" value="${f.targetAmount??""}"></td><td>${f.basis==="miles"?`<input class="field sfi" data-i="${i}" type="number" step="1" placeholder="Miles" value="${f.intervalMiles??""}">`:`<input class="field sfe" data-i="${i}" type="number" step=".01" placeholder="Months" value="${f.everyMonths??""}">`}</td><td><b>${precise(reserveMonthly(f))}</b></td><td><button class="btn danger sfr" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="8"><div class="empty">Add household, personal, pet, vehicle, clothing and special-event reserves here.</div></td></tr>`;

renderBillCalendar();
$("#dailyRows").innerHTML=state.dailyExpenses.map((d,i)=>`<div class="row"><div class="grid g2"><input class="field dn" data-i="${i}" value="${esc(d.name)}"><input class="field da" data-i="${i}" type="number" step=".01" value="${n(d.amountPerDay)}"></div><div><b>${money(n(d.amountPerDay)*days())}/mo</b> <button class="btn danger dr" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No daily expenses.</div>`;
const taxCalc=payrollTaxBreakdown(),taxGross=payrollGrossMonthRaw(),taxNet=Math.max(0,taxGross-taxCalc.total/12);
$("#taxProfileTotal").textContent=taxCalc.effectivePct.toLocaleString(undefined,{maximumFractionDigits:2})+"%";
$("#taxBusinessPct").value=state.business.taxReservePct||"";
$$(".taxProfileField").forEach(x=>{let k=x.dataset.k,v=state.taxProfile[k];x.value=v??""});
$$(".taxProfileCheck").forEach(x=>{x.checked=state.taxProfile[x.dataset.k]!==false});
$("#taxRuleMeta").innerHTML=`${esc(filingStatusLabel())} · Federal standard deduction ${money(TAX_2026.federal.standard[filingStatus()])} · NC standard deduction ${money(TAX_2026.nc.standard[filingStatus()])} · NC 3.99% · Social Security wage base ${money(TAX_2026.fica.ssBase)}. Auto mode is an annualized planning estimate, not an employer W-4 withholding table.`;
$("#taxPayrollSummary").innerHTML=`<div class="kpi"><span>Projected annual payroll gross</span><b>${precise(taxCalc.gross)}</b></div><div class="kpi"><span>Federal taxable estimate</span><b>${precise(taxCalc.fedTaxable)}</b></div><div class="kpi"><span>Federal income tax estimate</span><b>−${precise(taxCalc.federal)}</b></div><div class="kpi"><span>NC taxable estimate</span><b>${precise(taxCalc.ncTaxable)}</b></div><div class="kpi"><span>NC income tax estimate</span><b>−${precise(taxCalc.nc)}</b></div><div class="kpi"><span>Social Security estimate</span><b>−${precise(taxCalc.socialSecurity)}</b></div><div class="kpi"><span>Medicare estimate</span><b>−${precise(taxCalc.medicare)}</b></div><div class="kpi"><span>Effective payroll-tax estimate</span><b>${taxCalc.effectivePct.toLocaleString(undefined,{maximumFractionDigits:2})}%</b></div><div class="kpi"><span>Expected payroll gross this month</span><b>${precise(taxGross)}</b></div><div class="kpi"><span>Estimated payroll taxes this month</span><b>−${precise(taxCalc.total/12)}</b></div><div class="kpi"><span>Expected payroll net this month</span><b>${precise(taxNet)}</b></div>`;
$("#taxBusinessSummary").innerHTML=`<div class="kpi"><span>Business operating profit</span><b>${precise(businessOperatingProfit())}</b></div><div class="kpi"><span>Business tax reserve</span><b>−${precise(businessTaxReserve())}</b></div><div class="small section">Business tax reserve is a planning set-aside, not a filed tax calculation.</div>`;
$("#taxRows").innerHTML=state.taxItems.map((x,i)=>`<tr><td><input class="field txn" data-i="${i}" value="${esc(x.name||"Tax")}"></td><td><select class="field txs" data-i="${i}">${["Household","Business","Vehicle","Other"].map(v=>`<option ${(x.scope||"Household")===v?"selected":""}>${v}</option>`).join("")}</select></td><td><input class="field txe" data-i="${i}" type="number" step=".01" value="${x.expected??""}"></td><td><input class="field txf" data-i="${i}" type="number" min="1" value="${x.everyMonths??12}"></td><td><input class="field txm" data-i="${i}" type="month" value="${x.startMonth||ym()}"></td><td><input class="field txa" data-i="${i}" type="number" step=".01" placeholder="Actual" value="${x.actual??""}"></td><td><button class="btn danger txr" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="7"><div class="empty">No fixed tax obligations entered.</div></td></tr>`;
$("#taxStats").innerHTML=[["Monthly equivalent",precise(taxItemMonthly())],["Actual entered",precise(taxActualTotal())],["Business reserve",precise(businessTaxReserve())]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");

$("#medicalMonthly").textContent=precise(medicalMonthly());
$("#medicalRows").innerHTML=state.medical.items.map((x,i)=>`<tr><td><input class="field mdn" data-i="${i}" value="${esc(x.name||"Medical")}"></td><td><select class="field mdt" data-i="${i}">${["Insurance","Prescription","Visit","Dental","Vision","Device","Therapy","Other"].map(v=>`<option ${(x.type||"Other")===v?"selected":""}>${v}</option>`).join("")}</select></td><td><input class="field mde" data-i="${i}" type="number" step=".01" value="${x.expected??""}"></td><td><input class="field mdf" data-i="${i}" type="number" min="1" value="${x.everyMonths??1}"></td><td><input class="field mdm" data-i="${i}" type="month" value="${x.startMonth||ym()}"></td><td><input class="field mda" data-i="${i}" type="number" step=".01" placeholder="Actual" value="${x.actual??""}"></td><td><input class="field mdnotes" data-i="${i}" value="${esc(x.notes||"")}"></td><td><button class="btn danger mdr" data-i="${i}">×</button></td></tr>`).join("")||`<tr><td colspan="8"><div class="empty">No medical costs entered.</div></td></tr>`;
$("#medicalStats").innerHTML=[["Monthly equivalent",precise(medicalMonthly())],["Actual entered",precise(medicalActualTotal())],["Items tracked",state.medical.items.length]].map(x=>'<div class="stat"><small>'+x[0]+'</small><div class="value">'+x[1]+'</div></div>').join("");
renderMedicalCalendar();

$("#gasPrice").value=state.fuel.pricePerGal||"";$("#mpg").value=state.fuel.mpg||"";$("#station").value=state.fuel.station||"";$("#gasSearch").href=search((state.fuel.station||"gas station")+" current regular gas price "+state.zip);$("#fuelEstimate").textContent=fuelCost()==null?"Enter MPG":money(fuelCost());let inc=state.fuel.routes.filter(r=>!(n(r.miles)>0&&n(r.days)>0)).length;$("#driveStats").innerHTML=`<div class="stat"><small>Weekly miles</small><div class="value">${weeklyMiles().toLocaleString(undefined,{maximumFractionDigits:6})}</div></div><div class="stat"><small>Monthly miles</small><div class="value">${monthlyMiles().toLocaleString(undefined,{maximumFractionDigits:6})}</div></div><div class="stat"><small>Incomplete legs</small><div class="value">${inc}</div></div><div class="stat"><small>Gas rate</small><div class="value">${money(state.fuel.pricePerGal)}</div></div>`;
$("#routeRows").innerHTML=state.fuel.routes.map((r,i)=>{let ok=n(r.miles)>0&&n(r.days)>0;return`<tr><td><input class="field rn" data-i="${i}" value="${esc(r.name)}"></td><td><input class="field rm" data-i="${i}" type="number" step=".1" value="${r.miles??""}"></td><td><input class="field rd" data-i="${i}" type="number" value="${r.days??""}"></td><td>${ok?(n(r.miles)*n(r.days)).toFixed(1):"—"}</td><td><button class="btn danger rr" data-i="${i}">×</button></td></tr>`}).join("")||`<tr><td colspan="5"><div class="empty">No route legs.</div></td></tr>`;
$("#businessName").value=state.business.name||"My Business";$("#businessCash").value=state.business.cash||"";$("#businessTax").value=state.business.taxReservePct||"";$("#businessDraw").value=state.business.ownerDraw||"";$("#businessTransfer").value=state.business.householdTransfer||"";$("#businessNotes").value=state.business.notes||"";
let runway=businessRunway();
$("#businessGap").textContent=precise(businessRevenueGap());$("#businessActualMonth").textContent=state.actualMonth||ym();let bb=actualBucket(),brs=businessBvaRows();$("#businessBvaRows").innerHTML=brs.map(r=>{let a=actualNum(bb,r.key),v=favorableVariance(r,a);return'<tr><td><b>'+esc(r.label)+'</b></td><td>'+precise(r.budget)+'</td><td><input class="field actualInput" data-key="'+r.key+'" type="number" step=".01" placeholder="Actual" value="'+(bb[r.key]??"")+'"></td><td class="'+(v==null?"":v>=0?"greenText":"redText")+'">'+(v==null?"—":precise(v))+'</td></tr>'}).join("");
$("#businessStats").innerHTML=`<div class="stat"><small>Monthly revenue</small><div class="value blueText">${precise(businessRevenue())}</div></div><div class="stat"><small>Operating expenses</small><div class="value">${precise(businessExpenses())}</div></div><div class="stat"><small>After reserve + draw</small><div class="value ${businessAfterOwner()<0?"redText":"greenText"}">${precise(businessAfterOwner())}</div></div><div class="stat"><small>Runway</small><div class="value">${runway==null?"No burn":runway.toLocaleString(undefined,{maximumFractionDigits:3})+" mo"}</div></div>`;
$("#businessTarget").innerHTML=`<div class="kpi"><span>Operating profit</span><b>${precise(businessOperatingProfit())}</b></div><div class="kpi"><span>Tax reserve</span><b>−${precise(businessTaxReserve())}</b></div><div class="kpi"><span>Actual household transfer</span><b>−${precise(state.business.householdTransfer)}</b></div><div class="kpi"><span>Desired owner draw target</span><b>${precise(state.business.ownerDraw)}</b></div><div class="kpi"><span>Revenue needed for target</span><b>${precise(businessRevenueTarget())}</b></div><div class="kpi"><span>Additional revenue needed</span><b>${precise(businessRevenueGap())}</b></div><div class="kpi"><span>Business net worth entered</span><b>${precise(businessNetWorth())}</b></div>`;
$("#bizRevenueRows").innerHTML=state.business.revenue.map((x,i)=>`<div class="row"><div class="grid g2" style="width:100%"><input class="field brn" data-i="${i}" value="${esc(x.name||"")}"><select class="field brt" data-i="${i}">${["Subscription","Donation","Kickstarter","Bitcoin","Sale","Grant","Other"].map(v=>`<option ${(x.type||"Other")===v?"selected":""}>${v}</option>`).join("")}</select></div><div class="tools"><input class="field bra" style="width:115px" data-i="${i}" type="number" step=".01" placeholder="Amount" value="${x.amount??""}"><select class="field brc" data-i="${i}"><option value="recurring" ${(x.cadence||"recurring")==="recurring"?"selected":""}>Recurring</option><option value="annual" ${x.cadence==="annual"?"selected":""}>Annual</option><option value="random" ${x.cadence==="random"?"selected":""}>Random</option><option value="one-time" ${x.cadence==="one-time"?"selected":""}>One-time</option></select><input class="field bre" style="width:100px" data-i="${i}" type="number" step=".01" placeholder="Every mo" value="${x.everyMonths??1}"><button class="btn danger brr" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No business revenue yet.</div>`;
$("#bizExpenseRows").innerHTML=state.business.expenses.map((x,i)=>`<div class="row"><div class="grid g2" style="width:100%"><input class="field ben" data-i="${i}" value="${esc(x.name||"")}"><select class="field bet" data-i="${i}">${["AI / Software","AWS / Hosting","GitHub / Dev","Insurance","Legal / Accounting","Payment fees","Marketing","Other"].map(v=>`<option ${(x.type||"Other")===v?"selected":""}>${v}</option>`).join("")}</select></div><div class="tools"><input class="field bea" style="width:115px" data-i="${i}" type="number" step=".01" placeholder="Amount" value="${x.amount??""}"><input class="field bee" style="width:110px" data-i="${i}" type="number" step=".01" placeholder="Every mo" value="${x.everyMonths??1}"><button class="btn danger ber" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No business expenses entered.</div>`;
$("#bizReserveRows").innerHTML=state.business.reserves.map((x,i)=>`<div class="row"><div class="grid g2" style="width:100%"><input class="field bsn" data-i="${i}" value="${esc(x.name||"Reserve")}"><select class="field bst" data-i="${i}">${["Tax","Insurance","Legal / Accounting","Hosting growth","Emergency","Other"].map(v=>`<option ${(x.type||"Other")===v?"selected":""}>${v}</option>`).join("")}</select></div><div class="tools"><input class="field bsa" style="width:115px" data-i="${i}" type="number" step=".01" placeholder="Amount" value="${x.amount??""}"><input class="field bse" style="width:110px" data-i="${i}" type="number" step=".01" placeholder="Every mo" value="${x.everyMonths??1}"><button class="btn danger bsr" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No additional business reserves entered.</div>`;
$("#bizAssetRows").innerHTML=state.business.assets.map((a,i)=>`<div class="row"><input class="field ban" data-i="${i}" value="${esc(a.name||"")}"><div class="tools"><input class="field bav" style="width:130px" data-i="${i}" type="number" step=".01" placeholder="Value" value="${a.value??""}"><button class="btn danger bar" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No business assets entered.</div>`;
$("#bizLiabilityRows").innerHTML=state.business.liabilities.map((a,i)=>`<div class="row"><input class="field bln" data-i="${i}" value="${esc(a.name||"")}"><div class="tools"><input class="field blv" style="width:130px" data-i="${i}" type="number" step=".01" placeholder="Balance owed" value="${a.balance??""}"><button class="btn danger blr" data-i="${i}">×</button></div></div>`).join("")||`<div class="empty">No business liabilities entered.</div>`;

if($("#reportMonth")){$("#reportMonth").value=state.actualMonth||ym();renderReports();}
$("#houseLabel").value=state.householdLabel||"";$("#ebtBudget").value=state.ebtBudget||"";$("#dinnerSlots").value=state.dinnerSlots||30;$("#zip").value=state.zip||"";$("#backupStatus").textContent=(state.lastImportAt?"Last import: "+new Date(state.lastImportAt).toLocaleString()+(state.lastImportSource?" · "+state.lastImportSource:"")+" · ":"")+(state.lastBackupAt?"Last backup: "+new Date(state.lastBackupAt).toLocaleString():"No backup recorded on this device yet.");
styleMoneyDecimals();bind();save();
}
function bind(){
[["isn","name"],["isa","amount"],["isc","cadence"],["isd","startDate"],["isw","daysPerWeek"],["ist","taxMode"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{let s=state.incomeSources[+x.dataset.i];s[k]=["amount","daysPerWeek"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".isr").forEach(x=>x.onclick=()=>{state.incomeSources.splice(+x.dataset.i,1);render()});
const taxNumericKeys=new Set(["taxYear","federalPct","federalCustomDeduction","federalOtherDeductions","federalCredits","federalExtraAnnual","ncPct","ncCustomDeduction","ncAdjustments","ncCredits","ncExtraAnnual","socialSecurityPct","medicarePct"]);
$$(".taxProfileField").forEach(x=>x.onchange=()=>{let k=x.dataset.k;state.taxProfile[k]=taxNumericKeys.has(k)?(x.value===""?0:n(x.value)):x.value;render()});
$$(".taxProfileCheck").forEach(x=>x.onchange=()=>{state.taxProfile[x.dataset.k]=x.checked;render()});
[["txn","name"],["txs","scope"],["txe","expected"],["txf","everyMonths"],["txm","startMonth"],["txa","actual"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{let q=state.taxItems[+x.dataset.i];q[k]=["expected","everyMonths","actual"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".txr").forEach(x=>x.onclick=()=>{state.taxItems.splice(+x.dataset.i,1);render()});
[["mdn","name"],["mdt","type"],["mde","expected"],["mdf","everyMonths"],["mdm","startMonth"],["mda","actual"],["mdnotes","notes"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{let q=state.medical.items[+x.dataset.i];q[k]=["expected","everyMonths","actual"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".mdr").forEach(x=>x.onclick=()=>{state.medical.items.splice(+x.dataset.i,1);render()});

if($("#recipeBookSearch"))$("#recipeBookSearch").oninput=()=>render();
$$(".recipePlan").forEach(x=>x.onclick=()=>{let id=x.dataset.id;if(state.plan[id])delete state.plan[id];else state.plan[id]={count:1,dates:[],prepared:0,addedAt:Date.now()};render()});

$$(".needQty").forEach(x=>x.onchange=()=>{state.storeOffers[+x.dataset.i].need=n(x.value);render()});$$(".offerPrice").forEach(x=>x.onchange=()=>{let p=state.storeOffers[+x.dataset.i],s=x.dataset.store;p.offers=p.offers||{};p.offers[s]=p.offers[s]||{};p.offers[s].price=x.value===""?"":n(x.value);render()});$$(".offerAmount").forEach(x=>x.onchange=()=>{let p=state.storeOffers[+x.dataset.i],s=x.dataset.store;p.offers=p.offers||{};p.offers[s]=p.offers[s]||{};p.offers[s].amount=x.value===""?"":n(x.value);render()});$$(".removeStoreItem").forEach(x=>x.onclick=()=>{state.storeOffers.splice(+x.dataset.i,1);render()});
[["invName","name"],["invCat","category"],["invQty","qty"],["invUnit","unit"],["invMin","minQty"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.inventory[+x.dataset.i][k]=["qty","minQty"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".invOn").forEach(x=>x.onchange=()=>{state.inventory[+x.dataset.i].onHand=x.checked;render()});$$(".invRemove").forEach(x=>x.onclick=()=>{state.inventory.splice(+x.dataset.i,1);render()});
[["en","name"],["eq","qty"],["eu","unit"],["ep","unitPrice"]].forEach(([c,k])=>$$("."+c).forEach(x=>x.onchange=()=>{state.essentials[+x.dataset.i][k]=["qty","unitPrice"].includes(k)?n(x.value):x.value;render()}));$$(".er").forEach(x=>x.onclick=()=>{state.essentials.splice(+x.dataset.i,1);render()});
$$(".toggleMeal").forEach(x=>x.onclick=()=>{let id=x.dataset.id;if(state.plan[id])delete state.plan[id];else{let r=recipeById(id);if(r)state.plan[id]={count:1,dates:[],prepared:0,addedAt:Date.now()}}render()});
$$(".addMealDate").forEach(x=>x.onclick=()=>{let id=x.dataset.id,e=state.plan[id],input=$('.mealDate[data-id="'+id+'"]');if(!e||!input?.value)return;let d=input.value;if(!e.dates.includes(d)){if(e.dates.length>0)e.count=planCount(e)+1;e.dates.push(d);e.dates.sort()}input.value="";render()});
$$(".removeMealDate").forEach(x=>x.onclick=()=>{let e=state.plan[x.dataset.id];if(!e)return;let idx=e.dates.indexOf(x.dataset.date);if(idx>=0){e.dates.splice(idx,1);if(e.count>1)e.count--;e.prepared=Math.min(e.prepared,e.count)}render()});
$$(".preparedMeal").forEach(x=>x.onclick=()=>{let e=state.plan[x.dataset.id];if(e&&remainingFor(e)>0)e.prepared=preparedFor(e)+1;render()});
$$(".revertMeal").forEach(x=>x.onclick=()=>{let e=state.plan[x.dataset.id];if(e&&preparedFor(e)>0)e.prepared=preparedFor(e)-1;render()});
$$(".buy").forEach(x=>x.onchange=()=>{state.purchased[decodeURIComponent(x.dataset.k)]=x.checked;render()});$$(".paid").forEach(x=>x.onchange=()=>{let k=decodeURIComponent(x.dataset.k),v=x.value===""?"":n(x.value);state.purchaseCost[k]=v;if(v!==""){let item=grocery().find(i=>i.key===k);state.priceHistory.push({date:new Date().toISOString().slice(0,10),key:k,name:item?.name||k.split("|")[0],unit:item?.unit||"",qty:item?.buy||"",expected:item?.expected??"",actual:v})}render()});$$(".actualInput").forEach(x=>x.onchange=()=>{let b=actualBucket();b[x.dataset.key]=x.value===""?"":n(x.value);render()});
[["bn","name"],["bc","category"],["ba","amount"],["bd","dueDay"],["bf","frequencyMonths"],["bs","startMonth"]].forEach(([c,k])=>$$("."+c).forEach(x=>x.onchange=()=>{state.bills[+x.dataset.i][k]=["amount","dueDay","frequencyMonths"].includes(k)?n(x.value):x.value;render()}));$$(".br").forEach(x=>x.onclick=()=>{state.bills.splice(+x.dataset.i,1);render()});
[["an","name"],["ac","category"],["av","value"],["avl","valueLow"],["avh","valueHigh"]].forEach(([c,k])=>$$("."+c).forEach(x=>x.onchange=()=>{state.assets[+x.dataset.i][k]=["value","valueLow","valueHigh"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".ar").forEach(x=>x.onclick=()=>{state.assets.splice(+x.dataset.i,1);render()});
[["ln","name"],["lc","category"],["lv","balance"]].forEach(([c,k])=>$$("."+c).forEach(x=>x.onchange=()=>{state.liabilities[+x.dataset.i][k]=k==="balance"?(x.value===""?"":n(x.value)):x.value;render()}));$$(".lr").forEach(x=>x.onclick=()=>{state.liabilities.splice(+x.dataset.i,1);render()});
$$(".dn").forEach(x=>x.onchange=()=>{state.dailyExpenses[+x.dataset.i].name=x.value;render()});$$(".da").forEach(x=>x.onchange=()=>{state.dailyExpenses[+x.dataset.i].amountPerDay=n(x.value);render()});$$(".dr").forEach(x=>x.onclick=()=>{state.dailyExpenses.splice(+x.dataset.i,1);render()});
$$(".sfn").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].name=x.value;render()});$$(".sfc").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].category=x.value;render()});$$(".sfo").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].onHand=x.checked;render()});$$(".sfb").forEach(x=>x.onchange=()=>{let q=state.sinkingFunds[+x.dataset.i];q.basis=x.value;render()});$$(".sfa").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].targetAmount=x.value===""?"":n(x.value);render()});$$(".sfe").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].everyMonths=x.value===""?"":n(x.value);render()});$$(".sfi").forEach(x=>x.onchange=()=>{state.sinkingFunds[+x.dataset.i].intervalMiles=x.value===""?"":n(x.value);render()});$$(".sfr").forEach(x=>x.onclick=()=>{state.sinkingFunds.splice(+x.dataset.i,1);render()});
[["isn","name"],["isa","amount"],["isc","cadence"],["isd","startDate"],["isw","daysPerWeek"],["ist","taxMode"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.incomeSources[+x.dataset.i][k]=["amount","daysPerWeek"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".isr").forEach(x=>x.onclick=()=>{state.incomeSources.splice(+x.dataset.i,1);render()});
[["txn","name"],["txs","scope"],["txe","expected"],["txf","everyMonths"],["txm","startMonth"],["txa","actual"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.taxItems[+x.dataset.i][k]=["expected","everyMonths","actual"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".txr").forEach(x=>x.onclick=()=>{state.taxItems.splice(+x.dataset.i,1);render()});
[["mdn","name"],["mdt","type"],["mde","expected"],["mdf","everyMonths"],["mdm","startMonth"],["mda","actual"],["mdnotes","notes"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.medical.items[+x.dataset.i][k]=["expected","everyMonths","actual"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".mdr").forEach(x=>x.onclick=()=>{state.medical.items.splice(+x.dataset.i,1);render()});
[["brn","name"],["brt","type"],["bra","amount"],["brc","cadence"],["bre","everyMonths"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.business.revenue[+x.dataset.i][k]=["amount","everyMonths"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".brr").forEach(x=>x.onclick=()=>{state.business.revenue.splice(+x.dataset.i,1);render()});
[["ben","name"],["bet","type"],["bea","amount"],["bee","everyMonths"]].forEach(([cl,k])=>$$("."+cl).forEach(x=>x.onchange=()=>{state.business.expenses[+x.dataset.i][k]=["amount","everyMonths"].includes(k)?(x.value===""?"":n(x.value)):x.value;render()}));$$(".ber").forEach(x=>x.onclick=()=>{state.business.expenses.splice(+x.dataset.i,1);render()});
$$(".bsn").forEach(x=>x.onchange=()=>{state.business.reserves[+x.dataset.i].name=x.value;render()});$$(".bst").forEach(x=>x.onchange=()=>{state.business.reserves[+x.dataset.i].type=x.value;render()});$$(".bsa").forEach(x=>x.onchange=()=>{state.business.reserves[+x.dataset.i].amount=x.value===""?"":n(x.value);render()});$$(".bse").forEach(x=>x.onchange=()=>{state.business.reserves[+x.dataset.i].everyMonths=x.value===""?"":n(x.value);render()});$$(".bsr").forEach(x=>x.onclick=()=>{state.business.reserves.splice(+x.dataset.i,1);render()});
$$(".ban").forEach(x=>x.onchange=()=>{state.business.assets[+x.dataset.i].name=x.value;render()});$$(".bav").forEach(x=>x.onchange=()=>{state.business.assets[+x.dataset.i].value=x.value===""?"":n(x.value);render()});$$(".bar").forEach(x=>x.onclick=()=>{state.business.assets.splice(+x.dataset.i,1);render()});
$$(".bln").forEach(x=>x.onchange=()=>{state.business.liabilities[+x.dataset.i].name=x.value;render()});$$(".blv").forEach(x=>x.onchange=()=>{state.business.liabilities[+x.dataset.i].balance=x.value===""?"":n(x.value);render()});$$(".blr").forEach(x=>x.onclick=()=>{state.business.liabilities.splice(+x.dataset.i,1);render()});
$$(".rn").forEach(x=>x.onchange=()=>{state.fuel.routes[+x.dataset.i].name=x.value;render()});$$(".rm").forEach(x=>x.onchange=()=>{state.fuel.routes[+x.dataset.i].miles=x.value===""?"":n(x.value);render()});$$(".rd").forEach(x=>x.onchange=()=>{state.fuel.routes[+x.dataset.i].days=x.value===""?"":n(x.value);render()});$$(".rr").forEach(x=>x.onclick=()=>{state.fuel.routes.splice(+x.dataset.i,1);render()});
}
function readPlannerFile(file){
  return new Promise((resolve,reject)=>{
    if(!file)return reject(new Error("No file selected"));
    try{
      if(typeof file.text==="function"){
        file.text().then(resolve).catch(()=>fallback());
      }else fallback();
    }catch{fallback()}
    function fallback(){
      try{
        const reader=new FileReader();
        reader.onerror=()=>reject(reader.error||new Error("Could not read file"));
        reader.onload=()=>resolve(String(reader.result||""));
        reader.readAsText(file);
      }catch(err){reject(err)}
    }
  });
}
function setImportStatus(message,kind=""){
  const el=$("#importStatus");
  if(!el)return;
  el.textContent=message;
  el.className="notice section"+(kind?" "+kind:"");
}
function applyPlannerSetupCode(code){
  const raw=String(code||"").toUpperCase().replace(/\s+/g,"").trim();
  if(!raw.startsWith("FP26-"))throw new Error("Code must start FP26-");
  const parts=raw.split("-").slice(1);
  const statusMap={S:"single",SINGLE:"single",HOH:"hoh",MFJ:"mfj",MFS:"mfs",QSS:"qss"};
  let status=null,replaceIncome=false,dependents17=0,ebtBalance=null,ebtBudget=null,zip=null,wage=null,tipsAmt=null;
  for(const p of parts){
    if(statusMap[p]){status=statusMap[p];continue}
    if(p==="R"){replaceIncome=true;continue}
    if(/^D17\d*$/.test(p)){dependents17=Math.max(1,n(p.slice(3))||1);continue}
    if(/^E\d+$/.test(p)){ebtBalance=n(p.slice(1))/100;continue}
    if(/^B\d+(?:\.\d+)?$/.test(p)){ebtBudget=n(p.slice(1));continue}
    if(/^Z\d{5}$/.test(p)){zip=p.slice(1);continue}
    let m=p.match(/^W(\d+(?:\.\d+)?)([WBM])$/);if(m){wage={amount:n(m[1]),cadence:m[2]==="W"?"weekly":m[2]==="B"?"biweekly":"monthly"};continue}
    m=p.match(/^T(\d+(?:\.\d+)?)([WBM])$/);if(m){tipsAmt={amount:n(m[1]),cadence:m[2]==="W"?"weekly":m[2]==="B"?"biweekly":"monthly"};continue}
  }
  if(!status)throw new Error("Filing status missing");
  const base=blank().taxProfile;
  state.taxProfile=Object.assign({},base,state.taxProfile||{},{
    taxYear:2026,filingStatus:status,federalMode:"auto",federalDeductionMode:"standard",
    federalCustomDeduction:0,federalOtherDeductions:0,federalCredits:dependents17*500,federalExtraAnnual:0,
    ncMode:"auto",ncPct:3.99,ncDeductionMode:"standard",ncCustomDeduction:0,ncAdjustments:0,ncCredits:0,ncExtraAnnual:0,
    socialSecurityPct:6.2,medicarePct:1.45,additionalMedicare:true
  });
  if(replaceIncome)state.incomeSources=[];
  if(wage){
    state.incomeSources=state.incomeSources.filter(x=>x.id!=="quick-primary-wage");
    state.incomeSources.push({id:"quick-primary-wage",name:"Primary wages",amount:wage.amount,cadence:wage.cadence,startDate:"",daysPerWeek:"",taxMode:"payroll"});
  }
  if(tipsAmt){
    state.incomeSources=state.incomeSources.filter(x=>x.id!=="quick-tips");
    state.incomeSources.push({id:"quick-tips",name:"Reported tips / second job",amount:tipsAmt.amount,cadence:tipsAmt.cadence,startDate:"",daysPerWeek:"",taxMode:"payroll"});
  }
  if(ebtBalance!=null){state.ebtCardBalance=ebtBalance;state.ebtBalanceUpdated=new Date().toISOString().slice(0,10)}
  if(ebtBudget!=null)state.ebtBudget=ebtBudget;
  if(zip)state.zip=zip;
  if(!String(state.householdLabel||"").trim())state.householdLabel="My Household";
  state.profileLoaded=true;state.lastImportAt=new Date().toISOString();state.lastImportSource="Quick setup code";state.view="home";
  save();
  const verify=JSON.parse(localStorage.getItem(KEY)||"{}");
  if(verify.taxProfile?.filingStatus!==status)throw new Error("iPhone did not persist the setup");
  render();show("home");
  return true;
}
async function restorePlannerRaw(raw,sourceLabel="import"){
  let x;
  try{
    raw=String(raw||"").replace(/^\uFEFF/,"").trim();
    if(!raw)throw new Error("Selected file was empty");
    if(raw.startsWith("```"))raw=raw.replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/,"").trim();
    let a=raw.indexOf("{"),z=raw.lastIndexOf("}");
    if(a<0||z<a)throw new Error("No JSON object found");
    if(a>0||z<raw.length-1)raw=raw.slice(a,z+1);
    x=JSON.parse(raw);
  }catch(err){
    console.error(err);
    setImportStatus("Import failed: "+(err?.message||"invalid JSON"),"");
    alert("Could not read this as Family Planner JSON.");
    return false;
  }
  try{
    let base=blank();
    state=Object.assign(base,x,{version:7,profileLoaded:true});
    state.income=Object.assign({},base.income,x.income||{});
    state.taxProfile=Object.assign({},base.taxProfile,x.taxProfile||{});
    state.medical=Object.assign({},base.medical,x.medical||{});
    state.fuel=Object.assign({},base.fuel,x.fuel||{});
    state.business=Object.assign({},base.business,x.business||{});
    state.cooked=(x.cooked&&typeof x.cooked==="object")?x.cooked:{};
    ["prices","essentials","inventory","cookbook","priceHistory","incomeSources","taxItems","bills","dailyExpenses","storeOffers","assets","liabilities","sinkingFunds"].forEach(k=>{if(!Array.isArray(state[k]))state[k]=[]});
    if(!Array.isArray(state.medical.items))state.medical.items=[];
    if(!state.plan||typeof state.plan!=="object")state.plan={};
    if(!state.cooked||typeof state.cooked!=="object")state.cooked={};
    normalizePlan();
    if(!state.purchased||typeof state.purchased!=="object")state.purchased={};
    if(!state.purchaseCost||typeof state.purchaseCost!=="object")state.purchaseCost={};
    if(!state.itemOverrides||typeof state.itemOverrides!=="object")state.itemOverrides={};
    if(!state.actualHistory||typeof state.actualHistory!=="object")state.actualHistory={};
    if(!state.actualMonth)state.actualMonth=ym();
    ["revenue","expenses","reserves","assets","liabilities"].forEach(k=>{if(!Array.isArray(state.business[k]))state.business[k]=[]});
    state.view="home";
    state.lastImportAt=new Date().toISOString();
    state.lastImportSource=sourceLabel;
    save();
    const verify=JSON.parse(localStorage.getItem(KEY)||"{}");
    if(!verify.profileLoaded||verify.householdLabel!==state.householdLabel)throw new Error("Local storage verification failed");
    render();
    show("home");
    alert("Planner data imported successfully.");
    return true;
  }catch(err){
    console.error(err);
    setImportStatus("Import failed after parsing: "+(err?.message||"restore error"),"");
    alert("The JSON parsed, but this app version could not save it on this device.");
    return false;
  }
}
function setupEvents(){
$("#addIncomeSource").onclick=()=>{state.incomeSources.push({id:"inc"+Date.now(),name:"Income source",amount:"",cadence:"monthly",startDate:new Date().toISOString().slice(0,10),daysPerWeek:"",taxMode:"payroll"});render()};
$("#addTaxItem").onclick=()=>{state.taxItems.push({id:"tax"+Date.now(),name:"Tax / fee",scope:"Household",expected:"",everyMonths:12,startMonth:ym(),actual:""});render()};
$("#addMedical").onclick=()=>{state.medical.items.push({id:"med"+Date.now(),name:"Medical cost",type:"Other",expected:"",everyMonths:1,startMonth:ym(),dueDay:1,actual:"",notes:""});render()};
$("#addBizReserve").onclick=()=>{state.business.reserves.push({id:"bres"+Date.now(),name:"Business reserve",type:"Other",amount:"",everyMonths:1});render()};
$("#seedBizRevenue").onclick=()=>{[["Subscriptions","Subscription"],["Donations","Donation"],["Kickstarter","Kickstarter"],["Bitcoin","Bitcoin"]].forEach(([name,type])=>{if(!state.business.revenue.some(x=>x.type===type))state.business.revenue.push({id:"rev"+Date.now()+type,name,type,amount:"",cadence:type==="Subscription"?"recurring":"random",everyMonths:1})});render()};
$("#seedBizCosts").onclick=()=>{[["ChatGPT","AI / Software",20,1],["AWS","AWS / Hosting","",1],["GitHub","GitHub / Dev","",1],["Business insurance","Insurance","",1],["Legal / accounting","Legal / Accounting","",1]].forEach(([name,type,amount,everyMonths])=>{if(!state.business.expenses.some(x=>x.name===name))state.business.expenses.push({id:"exp"+Date.now()+name,name,type,amount,everyMonths})});render()};

$("#addStoreItem").onclick=()=>{state.storeOffers.push({id:"p"+Date.now(),name:"New product",need:1,unit:"unit",offers:{}});render()};$("#addInventory").onclick=()=>{state.inventory.push({id:"inv"+Date.now(),name:"New inventory item",category:"Household",onHand:true,qty:"",unit:"item",minQty:""});render()};$("#addSinking").onclick=()=>{state.sinkingFunds.push({id:"sf"+Date.now(),name:"New reserve",category:"Household",onHand:true,basis:"months",targetAmount:"",everyMonths:"",intervalMiles:""});render()};$("#addBizRevenue").onclick=()=>{state.business.revenue.push({id:"rev"+Date.now(),name:"Revenue stream",type:"Other",amount:"",cadence:"recurring",everyMonths:1});render()};$("#addBizExpense").onclick=()=>{state.business.expenses.push({id:"exp"+Date.now(),name:"Business expense",type:"Other",amount:"",everyMonths:1});render()};$("#addBizAsset").onclick=()=>{state.business.assets.push({id:"ba"+Date.now(),name:"Business asset",value:""});render()};$("#addBizLiability").onclick=()=>{state.business.liabilities.push({id:"bl"+Date.now(),name:"Business liability",balance:""});render()};$("#addEssential").onclick=()=>{state.essentials.push({id:"e"+Date.now(),name:"New essential",qty:1,unit:"item",unitPrice:0,store:""});render()};$("#addAsset").onclick=()=>{state.assets.push({id:"a"+Date.now(),name:"New asset",category:"Asset",value:"",valueLow:"",valueHigh:""});render()};$("#addLiability").onclick=()=>{state.liabilities.push({id:"l"+Date.now(),name:"New liability",category:"Debt",balance:""});render()};$("#addBill").onclick=()=>{state.bills.push({id:"b"+Date.now(),name:"New bill",category:"Other",amount:0,dueDay:"",frequencyMonths:1,startMonth:ym()});render()};$("#addDaily").onclick=()=>{state.dailyExpenses.push({id:"d"+Date.now(),name:"Daily expense",amountPerDay:0});render()};$("#addRoute").onclick=()=>{state.fuel.routes.push({id:"r"+Date.now(),name:"Route leg",miles:"",days:""});render()};
$$(".income").forEach(x=>x.onchange=()=>{state.income[x.dataset.k]=n(x.value);render()});$("#incomeNote").onchange=e=>{state.income.note=e.target.value;render()};$("#otherCash").onchange=e=>{state.otherCash=n(e.target.value);render()};$("#gasPrice").onchange=e=>{state.fuel.pricePerGal=n(e.target.value);state.fuel.priceUpdated=new Date().toISOString().slice(0,10);render()};$("#mpg").onchange=e=>{state.fuel.mpg=e.target.value===""?"":n(e.target.value);render()};$("#station").onchange=e=>{state.fuel.station=e.target.value;render()};
$("#houseLabel").onchange=e=>{state.householdLabel=e.target.value||"My Household";render()};$("#ebtBudget").onchange=e=>{state.ebtBudget=n(e.target.value);render()};$("#dinnerSlots").onchange=e=>{state.dinnerSlots=Math.max(1,n(e.target.value)||30);render()};$("#ebtCardBalance").onchange=e=>{state.ebtCardBalance=e.target.value===""?"":n(e.target.value);state.ebtBalanceUpdated=new Date().toISOString().slice(0,10);render()};$("#zip").onchange=e=>{state.zip=e.target.value.trim();render()};$("#businessName").onchange=e=>{state.business.name=e.target.value||"My Business";render()};$("#businessCash").onchange=e=>{state.business.cash=e.target.value===""?0:n(e.target.value);render()};$("#businessTax").onchange=e=>{state.business.taxReservePct=e.target.value===""?0:n(e.target.value);render()};$("#taxBusinessPct").onchange=e=>{state.business.taxReservePct=e.target.value===""?0:n(e.target.value);render()};$("#businessDraw").onchange=e=>{state.business.ownerDraw=e.target.value===""?0:n(e.target.value);render()};$("#businessTransfer").onchange=e=>{state.business.householdTransfer=e.target.value===""?0:n(e.target.value);render()};$("#businessNotes").onchange=e=>{state.business.notes=e.target.value;save()};
$("#actualMonth").onchange=e=>{state.actualMonth=e.target.value||ym();actualBucket();render()};$("#reportMonth").onchange=e=>{state.actualMonth=e.target.value||ym();actualBucket();render()};$("#shoppingMode").onchange=e=>{state.shoppingMode=e.target.value;state.itemOverrides={};render()};$("#recipeSearch").onclick=()=>{let q=$("#mealSearch").value.trim()||"dinner";let a=$("#applianceFilter").value;open(search(q+" highly rated 5 star recipe "+a),"_blank","noopener")};$("#applianceFilter").onchange=()=>render();$("#incCalPrev").onclick=()=>shiftIncomeCalendar(-1);$("#incCalNext").onclick=()=>shiftIncomeCalendar(1);$("#medCalPrev").onclick=()=>shiftMedicalCalendar(-1);$("#medCalNext").onclick=()=>shiftMedicalCalendar(1);$("#calPrev").onclick=()=>shiftCalendar(-1);$("#calNext").onclick=()=>shiftCalendar(1);$("#exportIcal").onclick=exportBillsIcal;$("#shareBudgetPdf").onclick=shareBudgetPdf;
const backupFile=()=>{let stamp=new Date().toISOString().replace(/[:.]/g,"-");return new File([JSON.stringify(state,null,2)],"family-planner-backup-"+stamp+".json",{type:"application/json"})};$("#shareBackupBtn").onclick=async()=>{let file=backupFile();try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:"Family Planner backup",text:"Private Family Planner backup"});state.lastBackupAt=new Date().toISOString();render()}else{$("#exportBtn").click()}}catch(e){if(e?.name!=="AbortError")$("#exportBtn").click()}};$("#exportBtn").onclick=()=>{let file=backupFile(),a=document.createElement("a");a.href=URL.createObjectURL(file);a.download=file.name;a.click();state.lastBackupAt=new Date().toISOString();save();render();setTimeout(()=>URL.revokeObjectURL(a.href),500)};
$("#importFile").onchange=async e=>{
  const input=e.target,file=input.files?.[0];
  if(!file){setImportStatus("No file selected.");return}
  setImportStatus("Reading "+file.name+" · "+file.size.toLocaleString()+" bytes…");
  try{
    const raw=await readPlannerFile(file);
    setImportStatus("File read. Parsing "+file.name+"…");
    await restorePlannerRaw(raw,file.name);
  }catch(err){
    console.error(err);
    setImportStatus("Could not read "+file.name+": "+(err?.message||"unknown iPhone file error"));
    alert("iPhone returned the file, but the planner could not read its contents. Try Import Clipboard or paste the JSON below.");
  }finally{input.value=""}
};
$("#pasteImportBtn").onclick=async()=>{let raw=$("#importJsonText").value;if(!raw.trim()){alert("Paste the planner JSON first.");return}await restorePlannerRaw(raw)};
$("#applySetupCode").onclick=()=>{try{const code=$("#setupCode").value;applyPlannerSetupCode(code);alert("Quick setup applied successfully.")}catch(err){console.error(err);setImportStatus("Setup code failed: "+(err?.message||"unknown error"));alert("Setup code failed: "+(err?.message||"unknown error"))}};
$("#clipboardImportBtn").onclick=async()=>{try{let raw=await navigator.clipboard.readText();if(!raw.trim())throw new Error("Clipboard empty");$("#importJsonText").value=raw;await restorePlannerRaw(raw)}catch(err){alert("Clipboard import was blocked or empty. Paste the JSON into the box below instead.")}};
$("#resetBtn").onclick=()=>{if(confirm("Clear all planner data from this browser?")){state=blank();render();show("home")}};
}
shell();nav();setupEvents();state.view="home";render();show("home");
window.addEventListener("pageshow",()=>{if(document.visibilityState==="visible")show("home")});
if("serviceWorker"in navigator){
  let swRefreshing=false;
  navigator.serviceWorker.addEventListener("controllerchange",()=>{
    if(swRefreshing)return;
    swRefreshing=true;
    location.reload();
  });
  addEventListener("load",()=>navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(async r=>{
    try{await r.update()}catch{}
    if(r.waiting)try{r.waiting.postMessage({type:"SKIP_WAITING"})}catch{}
  }).catch(()=>{}));
}