const CATEGORIES=[
{id:"punctuation",title:"Pontuação"},{id:"spelling",title:"Ortografia"},{id:"slang",title:"Gíria"},
{id:"number",title:"Número → letra"},{id:"abbreviation",title:"Abreviação"},{id:"reduction",title:"Redução"}];

const PHRASES=[
{lang:"pt",text:"Oi, vc vai hj? Tô esperando!!!",tags:["abbreviation","reduction","punctuation"]},
{lang:"pt",text:"Mano, isso foi mto bom kkk",tags:["slang","abbreviation","reduction"]},
{lang:"pt",text:"A gente vai 2moro? rsrs",tags:["slang","number"]},
{lang:"pt",text:"Blz, te vejo dps.",tags:["abbreviation","reduction"]},
{lang:"pt",text:"Nossa!!! Que notícia top!",tags:["slang","punctuation"]},
{lang:"pt",text:"Vc sabe q eu n consigo hj.",tags:["abbreviation","reduction"]},
{lang:"pt",text:"Partiu escola? Tô atrasado kkk.",tags:["slang","reduction","punctuation"]},
{lang:"pt",text:"Amg, manda o link p/ mim.",tags:["abbreviation","reduction"]},
{lang:"pt",text:"Feliz aniversário!!! Tudo de bom pra vc <3",tags:["abbreviation","punctuation"]},
{lang:"pt",text:"Tô mto feliz pq passei!",tags:["abbreviation","reduction"]},
{lang:"es",text:"Hola, ¿q haces? Estoy esperando.",tags:["abbreviation","punctuation"]},
{lang:"es",text:"Tío, esto estuvo súper guay jajaja.",tags:["slang","punctuation"]},
{lang:"es",text:"Nos vemos mañana, xfa.",tags:["abbreviation"]},
{lang:"es",text:"K tal? Todo bien?",tags:["abbreviation","punctuation"]},
{lang:"es",text:"Bro, eso fue brutal jajaj.",tags:["slang","reduction"]},
{lang:"es",text:"Te escribo dps, vale?",tags:["reduction","punctuation"]},
{lang:"es",text:"¿Xq no vienes con nosotros?",tags:["abbreviation","punctuation"]},
{lang:"es",text:"Estoy mto feliz por ti.",tags:["abbreviation","reduction"]},
{lang:"es",text:"Nos vms 2m, ¿vale?",tags:["abbreviation","reduction","number","punctuation"]},
{lang:"es",text:"Kiero hablar cntigo dps.",tags:["spelling","abbreviation","reduction"]}
];

const PT=[
["Qual frase está escrita de acordo com a norma-padrão?","Você foi ontem?",["Vc foi ontem?","Você foi ontem?","Voce foi ontem?","Cê foi ontem?","Você foi onti?"]],
["Qual elemento é uma abreviação comum em mensagens digitais?","vc",["você","vc","voc","vç","vocêe"]],
["Na frase “Tô mto feliz”, “mto” representa:","redução/abreviação",["uma gíria","um erro de concordância","uma redução/abreviação","um número","um sinal de pontuação"]],
["Qual sinal encerra uma pergunta?","?",[".","!",",","?",";"]],
["“Mano” pode funcionar, no contexto apresentado, como:","gíria",["abreviação","gíria","pontuação","número","pronome"]],
["Qual forma é adequada em um texto escolar formal?","Estou muito feliz porque passei.",["Tô mto feliz pq passei!","Estou muito feliz porque passei.","Tô feliz pq passei.","Mto feliz!!!","Passei, blz."]],
["O uso de “kkkk” em mensagens costuma indicar:","recurso informal de expressão",["pontuação formal","recurso informal de expressão","erro obrigatório","abreviação de palavra","número substituindo letra"]],
["Qual frase apresenta pontuação adequada para uma pergunta?","Você vai estudar hoje?",["Você vai estudar hoje.","Você vai estudar hoje!","Você vai estudar hoje?","Você, vai estudar hoje.","Você vai estudar, hoje"]],
["Em “p/ mim”, “p/” é usado como:","abreviação",["gíria","abreviação","erro de acentuação","número","plural"]],
["Em contexto escolar, a escrita digital informal deve ser:","analisada de acordo com o contexto de comunicação",["sempre proibida","sempre usada","analisada de acordo com o contexto de comunicação","sempre corrigida para gíria","usada apenas em provas"]]
];

const ES=[
["¿Cuál oración está escrita de acuerdo con la norma estándar?","Yo estudio español todos los días.",["Yo estudio español todos los días.","Yo estudo español todos los dias.","Yo estudio espanol todos los días.","Yo estudyo español todo dia.","Yo estudiar español todos días."]],
["En mensajes digitales, “q” suele ser una abreviación de:","que",["quién","que","qué","porque","cuando"]],
["En “Nos vms 2m”, “2m” representa:","una sustitución numérica informal",["una preposición","una sustitución numérica informal","una conjugación","una palabra culta","un signo de puntuación"]],
["¿Qué expresión puede funcionar como una expresión coloquial?","¡Qué guay!",["¡Qué guay!","Por consiguiente.","Sin embargo.","Atentamente.","Por lo tanto."]],
["¿Qué signo se usa para cerrar una pregunta en español?","?",[".","!",",","?",";"]],
["“xfa” en un mensaje suele significar:","por favor",["por favor","para nada","por ahora","porque","para allá"]],
["¿Cuál oración presenta una pregunta correctamente puntuada?","¿Dónde estudias español?",["Dónde estudias español.","¿Dónde estudias español?","Dónde ¿estudias español?","¿Dónde estudias español.","Dónde estudias español!"]],
["“K tal?” es una forma:","informal y abreviada",["formal y académica","informal y abreviada","literaria","científica","jurídica"]],
["En un texto académico en español, se recomienda:","usar un registro adecuado al contexto",["usar siempre abreviaciones digitales","usar siempre expresiones coloquiales","usar un registro adecuado al contexto","eliminar toda puntuación","escribir como en un chat"]],
["¿Cuál opción presenta una escritura adecuada?","Quiero hablar contigo después.",["Kiero hablar cntigo dps.","Quiero hablar contigo después.","Quiero ablar contigo despues.","Kiero hablar contigo después.","Quiero hablar cntigo después"]]
];

const state={points:+localStorage.getItem("if_points")||0,right:+localStorage.getItem("if_right")||0,wrong:+localStorage.getItem("if_wrong")||0,activity:+localStorage.getItem("if_activity")||0};
function save(){localStorage.setItem("if_points",state.points);localStorage.setItem("if_right",state.right);localStorage.setItem("if_wrong",state.wrong);localStorage.setItem("if_activity",state.activity);updateStats()}
function updateStats(){homePoints.textContent=state.points;homeRight.textContent=state.right;homeWrong.textContent=state.wrong;homeActivity.textContent=state.activity;const t=state.right+state.wrong;homeProgress.style.width=(t?Math.min(100,state.right/t*100):0)+"%"}
function showTab(id){document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.id===id));document.querySelectorAll(".nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.tab===id));scrollTo({top:0,behavior:"smooth"})}
document.addEventListener("click",e=>{const el=e.target.closest("[data-tab]");if(el){e.preventDefault();showTab(el.dataset.tab)}});

function renderPhrases(lang="all"){
const list=document.querySelector("#phraseList");list.innerHTML="";
PHRASES.filter(p=>lang==="all"||p.lang===lang).forEach((p)=>{
const card=document.createElement("article");card.className="phrase-card";
card.innerHTML=`<div class="phrase-top"><span class="phrase-num">FRASE ${PHRASES.indexOf(p)+1}</span><span class="lang-tag">${p.lang==="pt"?"Português":"Español"}</span></div><div class="phrase-text">“${p.text}”</div><div class="checks">${CATEGORIES.map(c=>`<label class="check-label"><input type="checkbox" value="${c.id}"> ${c.title}</label>`).join("")}</div><div class="phrase-result"></div><button class="primary-btn check-phrase">Conferir resposta</button>`;
card.querySelector(".check-phrase").onclick=()=>{
const selected=[...card.querySelectorAll("input:checked")].map(x=>x.value).sort(),answer=[...p.tags].sort(),result=card.querySelector(".phrase-result");
if(JSON.stringify(selected)===JSON.stringify(answer)){result.className="phrase-result correct";result.textContent="✓ Correto! Você identificou todas as características.";state.points+=10;state.right++}
else{result.className="phrase-result wrong";result.textContent="✗ Confira novamente as características presentes na frase.";state.wrong++}
state.activity++;save()};
list.appendChild(card)})}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderPhrases(b.dataset.lang)});

function setupQuiz(prefix,data){
let index=0,answered=false;
const q=document.querySelector(`#${prefix}Question`),opts=document.querySelector(`#${prefix}Options`),fb=document.querySelector(`#${prefix}Feedback`),next=document.querySelector(`#${prefix}Next`),count=document.querySelector(`#${prefix}Count`),prog=document.querySelector(`#${prefix}Progress`);
function render(){answered=false;fb.textContent="";next.textContent="Responder";count.textContent=`Questão ${index+1} de ${data.length}`;prog.style.width=(index/data.length*100)+"%";q.textContent=data[index][0];opts.innerHTML="";data[index][2].forEach(option=>{const b=document.createElement("button");b.className="option";b.textContent=option;b.onclick=()=>select(b,option);opts.appendChild(b)})}
function select(button,option){if(answered)return;answered=true;const correct=data[index][1];[...opts.children].forEach(b=>{if(b.textContent===correct)b.classList.add("correct-option")});if(option===correct){button.classList.add("correct-option");fb.className="feedback correct";fb.textContent="✓ Resposta correta!";state.points+=10;state.right++}else{button.classList.add("wrong-option");fb.className="feedback wrong";fb.textContent=`✗ A resposta correta é: ${correct}`;state.wrong++}state.activity++;save();next.textContent=index===data.length-1?"Ver resultado":"Próxima questão"}
next.onclick=()=>{if(!answered){fb.className="feedback wrong";fb.textContent="Escolha uma alternativa antes de continuar.";return}if(index<data.length-1){index++;render()}else{q.textContent=`Quiz concluído! Você terminou as ${data.length} questões.`;opts.innerHTML=`<div class="about-card"><h3>Seu desempenho</h3><p>Continue praticando e acompanhe seus acertos e pontos no início da plataforma.</p></div>`;fb.textContent="";next.textContent="Refazer quiz";next.onclick=()=>{index=0;render()};prog.style.width="100%"}};
render()}
document.querySelector("#resetBtn").onclick=()=>{if(confirm("Deseja realmente zerar seu progresso?")){state.points=state.right=state.wrong=state.activity=0;save()}};
renderPhrases();setupQuiz("pt",PT);setupQuiz("es",ES);updateStats();