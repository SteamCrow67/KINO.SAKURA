/* ================= ДАННЫЕ ================= */
const FALLBACK = {
  movies: [
      {"id":1,"title":"Блондинка в законе","year":2001,"genres":["комедия","мелодрама"],"director":"Роберт Лукетич","duration":96,"rating":7.8,"hue":325,"emoji":"🎀","img":"Blond.png","tagline":"В розовом — к мечте","description":"Эль Вудс поступает в Гарвардскую школу права, чтобы вернуть парня — и случайно доказывает всем, что розовый цвет и острый ум прекрасно сочетаются."},
  {"id":2,"title":"Интерстеллар","year":2014,"genres":["фантастика","драма"],"director":"Кристофер Нолан","duration":169,"rating":8.7,"hue":230,"emoji":"🚀","img":null,"tagline":"Мы не должны уходить в ночь","description":"Когда Земля перестаёт быть пригодной для жизни, группа исследователей отправляется через червоточину в поисках нового дома для человечества."},
  {"id":3,"title":"Дюна","year":2021,"genres":["фантастика","приключения"],"director":"Дени Вильнёв","duration":155,"rating":8.0,"hue":35,"emoji":"🏜️","img":null,"tagline":"Страх убивает разум","description":"Юный Пол Атрейдес прибывает на пустынную планету Арракис, где ему суждено стать тем, кого веками ждали местные жители."},
  {"id":4,"title":"Тело Дженнифер","year":2009,"genres":["ужасы","комедия"],"director":"Кэри Кусама","duration":102,"rating":7.0,"hue":350,"emoji":"🩸","img":null,"tagline":"Милые девушки кусаются","description":"Чирлидерша Дженнифер после неудачного ритуала обретает вкус к одноклассникам — в прямом смысле. Злой и весёлый хоррор о дружбе и мести, ставший культовым."},
  {"id":5,"title":"Как приручить дракона","year":2010,"genres":["мультфильм","приключения","фэнтези"],"director":"Дин ДеБлуа, Крис Сандерс","duration":98,"rating":7.8,"hue":200,"emoji":"🐉","img":null,"tagline":"Мальчик, который дружил с драконом","description":"Викинг Иккинг сбивает ночную фурию, но вместо убийства решает её приручить. Друзья и весь Берк узнают, что драконы — не враги."},
  {"id":6,"title":"Хорошо быть тихоней","year":2012,"genres":["драма"],"director":"Стивен Чбоски","duration":103,"rating":8.0,"hue":255,"emoji":"🎧","img":null,"tagline":"Мы были бесконечны","description":"Застенчивый Чарли переживает первую любовь, дружбу и тяжёлые воспоминания — и учится, что «быть бесконечным» можно даже в школьном автобусе под микстейп."},
  {"id":7,"title":"Поток","year":2024,"genres":["мультфильм","приключения"],"director":"Гинтс Зилбалодис","duration":85,"rating":8.1,"hue":150,"emoji":"🐈‍⬛","img":null,"tagline":"Кот, потоп и один плот на всех","description":"Чёрный кот остаётся один в затопленном мире. На самодельном плоту он находит странных попутчиков. Анимационная притча без единого слова, взявшая «Оскар»."},
  {"id":8,"title":"Одержимость","year":2014,"genres":["драма","музыка"],"director":"Дэмьен Шазелл","duration":106,"rating":8.5,"hue":280,"emoji":"🥁","img":null,"tagline":"Быть великим или не быть","description":"Барабанщик-новичок Эндру и его жестокий наставник Флетчер идут к совершенству по дороге, устланной кровью и сломанными палочками."}
  ],
  reviews: [
   {"id":1,"movieId":1,"author":"Мия","date":"2026-09-12","rating":9,"likes":42,"text":"Пересматриваю перед сессией, чтобы поверить в себя. «Блондинка в законе» — лучший мотивационный фильм."},
  {"id":2,"movieId":1,"author":"Костя","date":"2026-08-30","rating":8,"likes":18,"text":"Риз Уизерспун тащит фильм на одной улыбке, и это работает."},
  {"id":3,"movieId":2,"author":"Алекс","date":"2026-10-02","rating":9,"likes":31,"text":"Сцена с часами на другой планете — самый честный фильм про время."},
  {"id":4,"movieId":3,"author":"Вера","date":"2026-06-14","rating":9,"likes":27,"text":"Вильнёв снял не фантастику, а космическую оперу. Саундтрек Циммера — отдельный персонаж."},
  {"id":5,"movieId":4,"author":"Даша","date":"2026-09-01","rating":8,"likes":35,"text":"Хоррор-панк про токсичную дружбу, опередивший своё время. Дженнифер — легенда."},
  {"id":6,"movieId":5,"author":"Тимур","date":"2026-04-08","rating":10,"likes":44,"text":"Полёт с Беззубиком под «Test Drive» — каждый раз мурашки."},
  {"id":7,"movieId":6,"author":"Соня","date":"2026-10-21","rating":9,"likes":23,"text":"«И в этот момент мы были бесконечны» — про каждого из нас в семнадцать."},
  {"id":8,"movieId":7,"author":"Лев","date":"2026-03-11","rating":9,"likes":29,"text":"Ни слова диалога, а держит крепче любого блокбастера. Кот на плоту — символ года."},
  {"id":9,"movieId":8,"author":"Марат","date":"2026-05-19","rating":9,"likes":33,"text":"Финальные пять минут — лучший монтаж в кино. «Not my tempo» уже стало цитатой."}

  ]
};

let DATA = { movies: [], reviews: [] };

async function loadData(){
  console.log('🔄 Загрузка данных...');
  try{
    const [m, r] = await Promise.all([
      fetch('data/movies.json').then(x => { if(!x.ok) throw new Error('movies.json'); return x.json(); }),
      fetch('data/reviews.json').then(x => { if(!x.ok) throw new Error('reviews.json'); return x.json(); })
    ]);
    DATA = { movies: m, reviews: r };
    console.log('✅ JSON загружен:', DATA.movies.length, 'фильмов,', DATA.reviews.length, 'отзывов');
  }catch(e){
    console.warn('⚠️ JSON не загрузился:', e.message, '— использую встроенные данные');
    DATA = FALLBACK;
  }
}

/* ================= ХРАНИЛИЩЕ ================= */
const getUserReviews = () => JSON.parse(localStorage.getItem('kino_reviews') || '[]');
const saveUserReview = rev => localStorage.setItem('kino_reviews', JSON.stringify([rev, ...getUserReviews()]));
const deleteUserReview = id => localStorage.setItem('kino_reviews', JSON.stringify(getUserReviews().filter(r => r.id !== id)));
const allReviews = () => [...getUserReviews(), ...DATA.reviews].sort((a,b)=>b.date.localeCompare(a.date));
const getProfile = () => JSON.parse(localStorage.getItem('kino_profile') || '{"name":"Гость","avatar":"🌸"}');
const saveProfile = p => localStorage.setItem('kino_profile', JSON.stringify(p));

/* ================= ХЕЛПЕРЫ ================= */
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const movieById = id => DATA.movies.find(m => m.id === +id);
const fmtDate = d => new Date(d).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'});

function starsHTML(value){
  const full = Math.round(value/2);
  let s = '';
  for(let i=1;i<=5;i++) s += i<=full ? '★' : '<span class="dim">★</span>';
  return `<span class="stars">${s}</span>`;
}

function avgRating(id){
  const rs = allReviews().filter(r=>r.movieId===+id);
  if(!rs.length) return null;
  return rs.reduce((s,r)=>s+r.rating,0)/rs.length;
}

function movieCardHTML(m){
  const avg = avgRating(m.id);
  const score = (avg ?? m.rating).toFixed(1);
  const art = m.img ? `<img src="${m.img}" alt="${esc(m.title)}" loading="lazy">` : `<span>${m.emoji}</span>`;
  return `<a class="card movie-card" href="movie.html?id=${m.id}">
    <div class="poster" style="--hue:${m.hue}">${art}<b class="score">★ ${score}</b></div>
    <h3>${esc(m.title)}</h3>
    <div class="meta">${m.year} · ${m.duration} мин · ${esc(m.director)}</div>
    <div class="genres">${m.genres.map(g=>`<span class="tag">${esc(g)}</span>`).join('')}</div>
  </a>`;
}

function reviewCardHTML(r, showMovie = true){
  const m = movieById(r.movieId);
  return `<div class="card review-card">
    <div class="head">
      <span class="who">🌸 ${esc(r.author)}</span>
      <span class="date">${fmtDate(r.date)}</span>
    </div>
    ${showMovie && m ? `<a class="to-movie mono" href="movie.html?id=${m.id}" style="font-size:.78rem">→ ${esc(m.title)}</a>` : ''}
    <div style="margin:8px 0">${starsHTML(r.rating)} <b class="mono" style="color:#ffd166">${r.rating}/10</b></div>
    <p>${esc(r.text)}</p>
    <div class="foot"><span>❤️ ${r.likes || 0}</span>${r.mine ? `<button class="chip" data-del="${r.id}">удалить</button>` : ''}</div>
  </div>`;
}

function toast(msg){
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2600);
}

/* ================= ОБОЛОЧКА ================= */
const NAV = [
  ['index.html','Главная','home'],
  ['movies.html','Фильмы','movies'],
  ['reviews.html','Отзывы','reviews'],
  ['rating.html','Рейтинг','rating'],
  ['profile.html','Профиль','profile'],
];

function mountChrome(){
  const page = document.body.dataset.page || 'home';
  const activeKey = page === 'movie' ? 'movies' : page;

  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `<div class="wrap nav">
    <a class="logo" href="index.html">🌸 <b>KINO</b>.SAKURA</a>
    <button class="burger" aria-label="меню">☰</button>
    <nav class="nav-links">${NAV.map(([h,l,k])=>`<a href="${h}" class="${k===activeKey?'active':''}">${l}</a>`).join('')}</nav>
  </div>`;
  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `<p>✦ KINO.SAKURA ✦ сделано с любовью к кино 🌸 © ${new Date().getFullYear()}</p>`;
  document.body.appendChild(footer);

  const mq = document.createElement('div');
  mq.className = 'marquee';
  const items = ['🌸 ФИЛЬМЫ','⭐ ОТЗЫВЫ','🎬 РЕЙТИНГ','🍿 СМОТРИ','💖 ЛЮБИМ КИНО','✨ 2026'];
  mq.innerHTML = `<div class="marquee-track">${items.concat(items).map(i=>`<span>✦ ${i} ✦</span>`).join('')}</div>`;
  document.body.insertBefore(mq, footer);

  header.querySelector('.burger').onclick = () =>
    header.querySelector('.nav-links').classList.toggle('open');
}

function mountPetals(){
  for(let i=0;i<12;i++){
    const p = document.createElement('div');
    p.className = 'petal'; p.textContent = '🌸';
    p.style.left = Math.random()*100 + 'vw';
    p.style.fontSize = (10 + Math.random()*14) + 'px';
    p.style.opacity = .25 + Math.random()*.4;
    p.style.animationDuration = (9 + Math.random()*10) + 's';
    p.style.animationDelay = (-Math.random()*12) + 's';
    document.body.appendChild(p);
  }
}

/* ================= СТРАНИЦЫ ================= */
function initHome(){
  const featured = document.getElementById('featured');
  if(!featured) return;
  featured.innerHTML = [...DATA.movies].sort((a,b)=>b.rating-a.rating).slice(0,4).map(movieCardHTML).join('');

  const latest = document.getElementById('latest');
  if(latest) latest.innerHTML = allReviews().slice(0,3).map(r=>reviewCardHTML(r)).join('');

  const stats = document.getElementById('stats');
  if(stats){
    const total = allReviews().length;
    const avg = total ? (allReviews().reduce((s,r)=>s+r.rating,0)/total).toFixed(1) : '—';
    stats.innerHTML = `
      <div class="stat"><div class="n">${DATA.movies.length}</div><div class="l">фильмов</div></div>
      <div class="stat"><div class="n">${total}</div><div class="l">отзывов</div></div>
      <div class="stat"><div class="n">${avg}</div><div class="l">средний балл</div></div>`;
  }
}

function initMovies(){
  const grid = document.getElementById('movies-grid');
  if(!grid){ console.log('❌ movies-grid не найден'); return; }
  console.log('🎬 Каталог:', DATA.movies.length, 'фильмов');
  
  const search = document.getElementById('search');
  const sortSel = document.getElementById('sort');
  let genre = 'все';

  const genres = ['все', ...new Set(DATA.movies.flatMap(m=>m.genres))];
  const chipsEl = document.getElementById('genre-chips');
  if(chipsEl) chipsEl.innerHTML = genres.map(g=>`<button class="chip ${g==='все'?'active':''}" data-g="${g}">${g}</button>`).join('');

  function render(){
    let list = DATA.movies.filter(m =>
      (genre==='все' || m.genres.includes(genre)) &&
      m.title.toLowerCase().includes((search?.value || '').trim().toLowerCase())
    );
    if(sortSel?.value==='rating') list.sort((a,b)=>(avgRating(b.id)??b.rating)-(avgRating(a.id)??a.rating));
    if(sortSel?.value==='year') list.sort((a,b)=>b.year-a.year);
    if(sortSel?.value==='title') list.sort((a,b)=>a.title.localeCompare(b.title,'ru'));
    grid.innerHTML = list.length ? list.map(movieCardHTML).join('') : '<p class="empty">🌸 Ничего не найдено…</p>';
  }

  if(chipsEl) chipsEl.onclick = e => {
    const b = e.target.closest('[data-g]'); if(!b) return;
    genre = b.dataset.g;
    document.querySelectorAll('#genre-chips .chip').forEach(c=>c.classList.toggle('active', c===b));
    render();
  };
  if(search) search.oninput = render;
  if(sortSel) sortSel.onchange = render;
  render();
}

function initMovie(){
  const detail = document.getElementById('detail');
  if(!detail) return;
  
  const id = +new URLSearchParams(location.search).get('id') || 1;
  const m = movieById(id) || DATA.movies[0];
  const avg = avgRating(m.id);
  const reviews = allReviews().filter(r=>r.movieId===m.id);

  // === ВОТ ЭТУ СТРОКУ НУЖНО ДОБАВИТЬ ===
  const art = m.img ? `<img src="${m.img}" alt="${esc(m.title)}">` : `<span>${m.emoji}</span>`;
  // ======================================

  detail.innerHTML = `
    <div class="poster" style="--hue:${m.hue}">
      ${art} 
      <b class="score">★ ${m.rating}</b>
    </div>
    <div>
      <div class="kicker">🌸 фильм #${m.id}</div>
      <h2>${esc(m.title)}</h2>
      <p class="tagline">«${esc(m.tagline)}»</p>
      <div class="big-score">
        <span class="num">${(avg ?? m.rating).toFixed(1)}</span>
        <div>${starsHTML(avg ?? m.rating)}<div class="mono" style="font-size:.72rem;color:var(--muted)">${reviews.length} отзывов · ${m.rating.toFixed(1)} по версии редакции</div></div>
      </div>
      <div class="facts">
        <div class="fact"><b>Год</b><span>${m.year}</span></div>
        <div class="fact"><b>Длительность</b><span>${m.duration} мин</span></div>
        <div class="fact"><b>Режиссёр</b><span>${esc(m.director)}</span></div>
        <div class="fact"><b>Жанры</b><span>${m.genres.join(', ')}</span></div>
      </div>
      <p style="color:#cdd3ee;line-height:1.7">${esc(m.description)}</p>
    </div>`;

   const revTitle = document.getElementById('rev-title');
  const revList = document.getElementById('rev-list');
  if(revTitle) revTitle.textContent = `Отзывы (${reviews.length})`;
  if(revList) revList.innerHTML = reviews.length ? reviews.map(r=>reviewCardHTML(r,false)).join('') : '<p class="empty">Пока пусто — будь первым(ой)! 🌸</p>';

  // === ПОЛЗУНОК: навешиваем обработчик ПОСЛЕ того, как форма точно есть в DOM ===
  const range = document.getElementById('r-rating');
  const val = document.getElementById('r-val');
  
  console.log('🎚️ Ползунок найден:', !!range, 'Значение:', val?.textContent);
  
  if(range && val){
    // Удаляем старые обработчики (на всякий случай)
    range.oninput = null;
    range.addEventListener('input', function(){
      val.textContent = this.value;
      console.log('🎚️ Оценка изменена:', this.value);
    });
  }

  const form = document.getElementById('rev-form');
  if(form) form.onsubmit = e => {
    e.preventDefault();
    const text = document.getElementById('r-text').value.trim();
    if(!text) return;
    saveUserReview({
      id: Date.now(), movieId: m.id, author: getProfile().name,
      date: new Date().toISOString().slice(0,10), rating: +range.value, likes: 0, mine: true, text
    });
    toast('Отзыв опубликован! 🌸');
    e.target.reset(); 
    if(val) val.textContent = '8';
    if(range) range.value = 8;
    initMovie();
  };
}

function initReviews(){
  const list = document.getElementById('all-reviews');
  if(!list) return;
  const minSel = document.getElementById('min-rating');
  const search = document.getElementById('rev-search');

  const movieSelect = document.getElementById('movie-select');
  if(movieSelect) movieSelect.innerHTML = DATA.movies.map(m=>`<option value="${m.id}">${m.emoji} ${m.title}</option>`).join('');

  function render(){
    const min = +minSel?.value || 1;
    const q = (search?.value || '').trim().toLowerCase();
    const rs = allReviews().filter(r =>
      r.rating >= min &&
      (!q || r.text.toLowerCase().includes(q) || r.author.toLowerCase().includes(q) ||
       (movieById(r.movieId)?.title.toLowerCase().includes(q)))
    );
    list.innerHTML = rs.length
      ? `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${rs.map(r=>reviewCardHTML(r)).join('')}</div>`
      : '<p class="empty">Ничего не найдено 🌸</p>';
    const countEl = document.getElementById('rev-count');
    if(countEl) countEl.textContent = `Всего отзывов: ${rs.length}`;
  }

  if(minSel) minSel.onchange = render;
  if(search) search.oninput = render;

  const range = document.getElementById('a-rating'), val = document.getElementById('a-val');
  if(range) range.oninput = () => val.textContent = range.value;

  const form = document.getElementById('add-form');
  if(form) form.onsubmit = e => {
    e.preventDefault();
    const text = document.getElementById('a-text').value.trim();
    if(!text) return;
    saveUserReview({
      id: Date.now(), movieId: +document.getElementById('movie-select').value,
      author: getProfile().name, date: new Date().toISOString().slice(0,10),
      rating: +range.value, likes: 0, mine: true, text
    });
    toast('Спасибо за отзыв! 💖');
    e.target.reset(); if(val) val.textContent = '8';
    render();
  };
  render();
}

function initRating(){
  const top = document.getElementById('top-chart');
  if(!top) return;
  const scored = DATA.movies.map(m => ({
    m, score: avgRating(m.id) ?? m.rating, count: allReviews().filter(r=>r.movieId===m.id).length
  })).sort((a,b)=>b.score-a.score);

  top.innerHTML = scored.map((x,i)=>`
    <div class="rank-row">
      <div class="rank-pos">${i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+(i+1)}</div>
      <div>
        <b>${x.m.emoji} ${esc(x.m.title)}</b>
        <div class="mono" style="font-size:.7rem;color:var(--muted)">${x.m.year} · ${x.count} отзывов</div>
        <div class="bar"><i style="width:${x.score*10}%"></i></div>
      </div>
      <div class="val">${x.score.toFixed(1)}</div>
    </div>`).join('');

  const g = {};
  DATA.movies.forEach(m=>m.genres.forEach(gen=>(g[gen]??=[]).push(avgRating(m.id) ?? m.rating)));
  const genreChart = document.getElementById('genre-chart');
  if(genreChart) genreChart.innerHTML = Object.entries(g).map(([gen,arr])=>{
    const avg = arr.reduce((s,v)=>s+v,0)/arr.length;
    return `<div class="rank-row" style="grid-template-columns:1fr auto">
      <div><b class="mono" style="color:var(--pink2)">#${gen}</b><div class="bar"><i style="width:${avg*10}%"></i></div></div>
      <div class="val">${avg.toFixed(1)}</div></div>`;
  }).join('');

  const total = allReviews().length, my = getUserReviews().length;
  const avgAll = total ? allReviews().reduce((s,r)=>s+r.rating,0)/total : 0;
  const stats = document.getElementById('stats');
  if(stats) stats.innerHTML = `
    <div class="stat"><div class="n">${DATA.movies.length}</div><div class="l">фильмов</div></div>
    <div class="stat"><div class="n">${total}</div><div class="l">отзывов</div></div>
    <div class="stat"><div class="n">${avgAll.toFixed(1)}</div><div class="l">средний балл</div></div>
    <div class="stat"><div class="n">${my}</div><div class="l">моих отзывов</div></div>`;
}

const AVATARS = ['🌸','🌺','🌼','🌻','🌷','💮','🏵️','🥀'];

function initProfile(){
  const nameInput = document.getElementById('p-name');
  if(!nameInput) return;
  nameInput.value = getProfile().name;

  /* ---------- аватарка: клик по кругу открывает выбор ---------- */
  const avatarBtn = document.getElementById('avatar-display');
  const pop = document.getElementById('avatar-pop');

  function renderAvatar(){
    const cur = getProfile().avatar || '🌸';
    avatarBtn.textContent = cur;
    pop.innerHTML = AVATARS.map(a =>
      `<button class="avatar-option ${a===cur?'active':''}" data-av="${a}">${a}</button>`
    ).join('');
  }

  avatarBtn.onclick = e => {
    e.stopPropagation();
    pop.hidden = !pop.hidden;
  };

  pop.onclick = e => {
    const b = e.target.closest('[data-av]'); if(!b) return;
    saveProfile({...getProfile(), avatar: b.dataset.av});
    renderAvatar();
    pop.hidden = true;
    toast('Аватарка обновлена 🌸');
  };

  // закрыть по клику вне меню
  document.addEventListener('click', e => {
    if(!pop.hidden && !pop.contains(e.target) && e.target !== avatarBtn) pop.hidden = true;
  });

  renderAvatar();
  /* ------------------------------------------------------------- */

  function render(){
    const me = getProfile().name;
    const mine = getUserReviews();
    const title = document.getElementById('p-title');
    const sub = document.getElementById('p-sub');
    if(title) title.textContent = `🌸 ${me}`;
    if(sub) sub.textContent = 'зритель и критик';

    const avg = mine.length ? (mine.reduce((s,r)=>s+r.rating,0)/mine.length).toFixed(1) : '—';
    const favGenres = {};
    mine.forEach(r => (movieById(r.movieId)?.genres || []).forEach(g => favGenres[g]=(favGenres[g]||0)+1));
    const fav = Object.keys(favGenres).sort((a,b)=>favGenres[b]-favGenres[a])[0] || '—';

    const stats = document.getElementById('p-stats');
    if(stats) stats.innerHTML = `
      <div class="stat"><div class="n">${mine.length}</div><div class="l">отзывов</div></div>
      <div class="stat"><div class="n">${avg}</div><div class="l">средняя оценка</div></div>
      <div class="stat"><div class="n">${fav}</div><div class="l">любимый жанр</div></div>`;

    const reviews = document.getElementById('p-reviews');
    if(reviews) reviews.innerHTML = mine.length
      ? `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${mine.map(r=>reviewCardHTML(r)).join('')}</div>`
      : '<p class="empty">Ты ещё не оставил(а) ни одного отзыва. Напиши! ✍️</p>';
  }

  // ВАЖНО: сохраняем имя, не затирая аватарку
  nameInput.onchange = () => { saveProfile({...getProfile(), name: nameInput.value.trim() || 'Гость'}); toast('Имя сохранено 🌸'); render(); };

  const reviewsEl = document.getElementById('p-reviews');
  if(reviewsEl) reviewsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-del]'); if(!b) return;
    deleteUserReview(+b.dataset.del); toast('Отзыв удалён'); render();
  });
  render();
}

/* ================= СТАРТ ================= */
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Старт:', document.body.dataset.page);
  mountChrome();
  mountPetals();
  await loadData();
  initHome(); initMovies(); initMovie(); initReviews(); initRating(); initProfile();
});