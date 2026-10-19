const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const serviceDetails=[
{title:"Vehicle Tracking",description:"Track vehicles in real time and review where they have been. GPS tracking can help you monitor routes, set geofences, receive movement or ignition alerts, and improve visibility over vehicles and assets.",benefits:["Live location and route history","Geofencing and configurable alerts","Better visibility for dispatch and security"]},
{title:"Fleet Management",description:"Manage day-to-day fleet operations from one place. Review vehicle locations and journeys, monitor utilisation and idle time, support dispatch decisions, and use fleet data to help improve productivity and control operating costs.",benefits:["Fleet-wide vehicle visibility","Journey and utilisation review","Data to help improve efficiency"]},
{title:"School Bus Tracking",description:"Help schools and parents stay informed about school transport. Live vehicle location and route monitoring can improve visibility of bus journeys, support arrival updates where configured, and help transport teams respond to delays.",benefits:["Monitor bus routes and journey progress","Improve transport-team visibility","Support safer, more accountable school transport"]},
{title:"Fuel Monitoring",description:"Gain better visibility into fuel use with compatible fuel sensors and tracking hardware. Monitor fuel levels and usage trends, and configure alerts for unusual drops that may indicate possible fuel loss. Accuracy depends on the sensor and installation.",benefits:["Track fuel levels with compatible sensors","Identify unusual fuel-level changes","Help manage fuel use and operating costs"]},
{title:"Video Telematics",description:"Use in-vehicle cameras and compatible video telematics equipment to review road events and driving behaviour. Depending on the hardware, features may include event clips, driver coaching, live video or incident evidence.",benefits:["Review driving events and road footage","Support driver coaching and safety","Evidence for incident review where supported"]},
{title:"Vehicle Recovery",description:"Support vehicle security and recovery with location tracking, movement alerts and authorised remote immobilisation where compatible hardware and safe installation allow it. Recovery outcomes depend on signal, vehicle conditions and response time.",benefits:["Movement alerts and vehicle location","Immobilisation only on compatible systems","Coordinate response with authorised recovery teams"]}
];
const modal=document.getElementById('service-modal');
if(modal){
 const title=modal.querySelector('#service-modal-title'),description=modal.querySelector('#service-modal-description'),list=modal.querySelector('#service-modal-benefits');
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
 document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{
   const item=serviceDetails[Number(button.dataset.service)]; if(!item)return;
   title.textContent=item.title;description.textContent=item.description;list.innerHTML='';
   item.benefits.forEach(benefit=>{const li=document.createElement('li');li.textContent=benefit;list.appendChild(li)});
   modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');modal.querySelector('.modal-close').focus();
 }));
 modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}