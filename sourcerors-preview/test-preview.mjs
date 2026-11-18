import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const html=readFileSync(new URL('./index.html', import.meta.url),'utf8');
const css=readFileSync(new URL('./preview.css', import.meta.url),'utf8');
const script=readFileSync(new URL('./preview.js', import.meta.url),'utf8');

function mount(){
  const els=Object.fromEntries(['#heroKicker','#heroTitle','#heroBody','#page','#supportPage','#notice','#cityInput'].map(selector=>[selector,{textContent:'',innerHTML:'',hidden:selector==='#supportPage',value:'',setAttribute(){}}]));
  const nav=Array.from({length:5},()=>({dataset:{},classList:{toggle(){}},setAttribute(){}}));
  const events={};
  const location={hash:''};
  const sandbox={
    document:{
      querySelector:selector=>els[selector]||null,
      querySelectorAll:()=>nav,
      addEventListener:(type,fn)=>events[type]=fn
    },
    window:{addEventListener(){},scrollTo(){}},
    history:{replaceState(_a,_b,url){location.hash=url}},
    location,
    console
  };
  runInNewContext(script,sandbox,{filename:'preview.js'});
  function tab(name){events.click({target:{closest:selector=>selector==='button'?{dataset:{tab:name}}:null}})}
  function action(name){events.click({target:{closest:selector=>selector==='button'?{dataset:{action:name}}:null}})}
  return {els,tab,action};
}
test('mission brand and guarded public sample preview are visible',()=>{
  assert.match(html,/Get to the Source/);
  assert.match(html,/AI can show you results without impersonating the source/);
  assert.match(html,/Fictional examples/);
  assert.match(html,/No donations are collected on this page/);
  assert.match(html,/name="robots" content="noindex,nofollow"/);
});
test('crowdfunding is separate and hidden from normal experiences',()=>{
  assert.match(html,/<section id="supportPage"[^>]*hidden>/);
  assert.match(html,/data-tab="support"/);
  assert.match(css,/\[hidden\]\{display:none!important\}/);
  const {els,tab}=mount();
  assert.equal(els['#supportPage'].hidden,true);
  assert.match(els['#page'].innerHTML,/GUIDED SAMPLE/);
  tab('support');
  assert.equal(els['#supportPage'].hidden,false);
  assert.equal(els['#page'].hidden,true);
  tab('work');
  assert.equal(els['#supportPage'].hidden,true);
  assert.equal(els['#page'].hidden,false);
});
test('work sample opens a fictional local employer and consent flow',()=>{
  const {els,action}=mount();
  action('sample:work');
  assert.match(els['#page'].innerHTML,/Moss &amp; Ember Studio/);
  assert.match(els['#page'].innerHTML,/FICTIONAL EXAMPLE/);
  assert.match(els['#page'].innerHTML,/Apply \(demo only\)/);
  action('show-apply');
  assert.match(els['#page'].innerHTML,/Application permissions/);
});
test('interview sample is a simulated human invitation, not a payment',()=>{
  const {els,action,tab}=mount();
  tab('earn');
  assert.match(els['#page'].innerHTML,/GUIDED SAMPLE/);
  action('sample:earn');
  assert.match(els['#page'].innerHTML,/Interview invitation \(simulation\)/);
  assert.match(els['#page'].innerHTML,/No actual person or calendar/);
  assert.match(els['#page'].innerHTML,/Not enabled/);
  action('accept-invite');
  assert.match(els['#page'].innerHTML,/Accepted in demo/);
});
test('product sample preloads a pine search and keeps source uncertainty',()=>{
  const {els,action,tab}=mount();
  tab('products');action('sample:products');
  assert.match(els['#page'].innerHTML,/value="pine"/);
  assert.match(els['#page'].innerHTML,/Winter Pine Soy Candle/);
  action('product:candle');
  assert.match(els['#page'].innerHTML,/Unknown — no promise made/);
});
test('account privacy sample shows separate purpose-bound permissions',()=>{
  const {els,action,tab}=mount();
  tab('account');action('sample:account');
  assert.match(els['#page'].innerHTML,/privacy-example/);
  assert.match(els['#page'].innerHTML,/Hiring manager/);
  assert.match(els['#page'].innerHTML,/Merchant/);
  assert.match(els['#page'].innerHTML,/AI assistant/);
  assert.match(els['#page'].innerHTML,/No personal data is entered or sent/);
});
test('sample-only preview does not call network, store credentials or accept payments',()=>{
  assert.doesNotMatch(script,/\bfetch\s*\(/);
  assert.doesNotMatch(script,/\blocalStorage\b/);
  assert.doesNotMatch(script,/\bsessionStorage\b/);
  assert.doesNotMatch(script,/\bXMLHttpRequest\b/);
  assert.doesNotMatch(html,/<input[^>]+type=["'](?:password|email)["']/i);
  assert.match(html,/Campaign not opened/);
});
