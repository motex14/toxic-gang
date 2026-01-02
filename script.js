/* ===== BUBBLES ===== */
const container = document.getElementById('bubbles-container');

const bubbleImages = [
  'picture/sagor.jpeg',
  'picture/momit.jpeg',
  'picture/naim.jpeg',
  'picture/mehedi.jpeg',
  'picture/samia.jpeg',
  'picture/morad.jpeg',
  'picture/moin.jpeg',
  'picture/mohin.jpeg',
  'picture/rahim.jpeg',
  'picture/saif.jpeg',
  'picture/sovon.jpeg',
  'picture/samad.jpeg',
  'picture/pic.jpeg',
  'picture/bg.jpeg',
  'picture/mehedi.jpeg',
];

const bubbles = [];

bubbleImages.forEach(img => {
  const b = document.createElement('div');
  b.className = 'bubble';
  const size = 40 + Math.random() * 60;
  b.style.width = b.style.height = size + 'px';
  b.style.left = Math.random() * window.innerWidth + 'px';
  b.style.top = Math.random() * window.innerHeight + 'px';
  b.style.backgroundImage = `url(${img})`;
  container.appendChild(b);

  bubbles.push({
    el: b,
    x: parseFloat(b.style.left),
    y: parseFloat(b.style.top),
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1
  });
});

function animateBubbles() {
  bubbles.forEach(b => {
    b.x += b.vx;
    b.y += b.vy;

    if (b.x < 0 || b.x > window.innerWidth - b.el.offsetWidth) b.vx *= -1;
    if (b.y < 0 || b.y > window.innerHeight - b.el.offsetHeight) b.vy *= -1;

    b.el.style.left = b.x + 'px';
    b.el.style.top = b.y + 'px';
  });
  requestAnimationFrame(animateBubbles);
}
animateBubbles();

/* ===== FRIEND DATA WITH UNIQUE PHOTOS ===== */
const friends = [
  {
    name: 'Sagor Ahmed (Kola)',
    profile: 'picture/sagor.jpeg',
    phone: '0170000001',
    facebook: 'https://facebook.com/sagor',
    photos: [
      'picture/sagor.jpeg','picture/f1_2.jpeg','picture/f1_3.jpeg','picture/f1_4.jpeg',
      'picture/f1_5.jpeg','picture/f1_6.jpeg','picture/f1_7.jpeg','picture/f1_8.jpeg',
      'picture/f1_9.jpeg','picture/f1_10.jpeg','picture/f1_11.jpeg','picture/f1_12.jpeg',
      'picture/f1_13.jpeg','picture/f1_14.jpeg'
    ]
  },
  {
    name: 'Moumit Hasan (mgi)',
    profile: 'picture/f2.jpeg',
    phone: '0170000002',
    facebook: 'https://facebook.com/moumit',
    photos: [
      'picture/f2_1.jpeg','picture/f2_2.jpeg','picture/f2_3.jpeg','picture/f2_4.jpeg',
      'picture/f2_5.jpeg','picture/f2_6.jpeg','picture/f2_7.jpeg','picture/f2_8.jpeg',
      'picture/f2_9.jpeg','picture/f2_10.jpeg','picture/f2_11.jpeg','picture/f2_12.jpeg',
      'picture/f2_13.jpeg','picture/f2_14.jpeg'
    ]
  },
  {
    name: 'Morad Hosen (morga)',
    profile: 'picture/f3.jpeg',
    phone: '0170000003',
    facebook: 'https://facebook.com/morad',
    photos: [
      'picture/f3_1.jpeg','picture/f3_2.jpeg','picture/f3_3.jpeg','picture/f3_4.jpeg',
      'picture/f3_5.jpeg','picture/f3_6.jpeg','picture/f3_7.jpeg','picture/f3_8.jpeg',
      'picture/f3_9.jpeg','picture/f3_10.jpeg','picture/f3_11.jpeg','picture/f3_12.jpeg',
      'picture/f3_13.jpeg','picture/f3_14.jpeg'
    ]
  },
  {
    name: 'Moinol Hasan (dam)',
    profile: 'picture/f4.jpeg',
    phone: '0170000004',
    facebook: 'https://facebook.com/moinol',
    photos: [
      'picture/f4_1.jpeg','picture/f4_2.jpeg','picture/f4_3.jpeg','picture/f4_4.jpeg',
      'picture/f4_5.jpeg','picture/f4_6.jpeg','picture/f4_7.jpeg','picture/f4_8.jpeg',
      'picture/f4_9.jpeg','picture/f4_10.jpeg','picture/f4_11.jpeg','picture/f4_12.jpeg',
      'picture/f4_13.jpeg','picture/f4_14.jpeg'
    ]
  },
  {
    name: 'Mohammod naim (ban)',
    profile: 'picture/f5.jpeg',
    phone: '0170000005',
    facebook: 'https://facebook.com/naim',
    photos: [
      'picture/f5_1.jpeg','picture/f5_2.jpeg','picture/f5_3.jpeg','picture/f5_4.jpeg',
      'picture/f5_5.jpeg','picture/f5_6.jpeg','picture/f5_7.jpeg','picture/f5_8.jpeg',
      'picture/f5_9.jpeg','picture/f5_10.jpeg','picture/f5_11.jpeg','picture/f5_12.jpeg',
      'picture/f5_13.jpeg','picture/f5_14.jpeg'
    ]
  },
  {
    name: 'Md Rahim (Ram)',
    profile: 'picture/f6.jpeg',
    phone: '0170000006',
    facebook: 'https://facebook.com/rahim',
    photos: [
      'picture/f6_1.jpeg','picture/f6_2.jpeg','picture/f6_3.jpeg','picture/f6_4.jpeg',
      'picture/f6_5.jpeg','picture/f6_6.jpeg','picture/f6_7.jpeg','picture/f6_8.jpeg',
      'picture/f6_9.jpeg','picture/f6_10.jpeg','picture/f6_11.jpeg','picture/f6_12.jpeg',
      'picture/f6_13.jpeg','picture/f6_14.jpeg'
    ]
  },
  {
    name: 'Moin Hasan (kala)',
    profile: 'picture/f7.jpeg',
    phone: '0170000007',
    facebook: 'https://facebook.com/moin7',
    photos: [
      'picture/f7_1.jpeg','picture/f7_2.jpeg','picture/f7_3.jpeg','picture/f7_4.jpeg',
      'picture/f7_5.jpeg','picture/f7_6.jpeg','picture/f7_7.jpeg','picture/f7_8.jpeg',
      'picture/f7_9.jpeg','picture/f7_10.jpeg','picture/f7_11.jpeg','picture/f7_12.jpeg',
      'picture/f7_13.jpeg','picture/f7_14.jpeg'
    ]
  },
  {
    name: 'Saif Ahmed (Foisa)',
    profile: 'picture/f8.jpeg',
    phone: '0170000008',
    facebook: 'https://facebook.com/saif',
    photos: [
      'picture/f8_1.jpeg','picture/f8_2.jpeg','picture/f8_3.jpeg','picture/f8_4.jpeg',
      'picture/f8_5.jpeg','picture/f8_6.jpeg','picture/f8_7.jpeg','picture/f8_8.jpeg',
      'picture/f8_9.jpeg','picture/f8_10.jpeg','picture/f8_11.jpeg','picture/f8_12.jpeg',
      'picture/f8_13.jpeg','picture/f8_14.jpeg'
    ]
  },
  {
    name: 'Shovon Majomder (mgi buzz)',
    profile: 'picture/f9.jpeg',
    phone: '0170000009',
    facebook: 'https://facebook.com/shovon',
    photos: [
      'picture/f9_1.jpeg','picture/f9_2.jpeg','picture/f9_3.jpeg','picture/f9_4.jpeg',
      'picture/f9_5.jpeg','picture/f9_6.jpeg','picture/f9_7.jpeg','picture/f9_8.jpeg',
      'picture/f9_9.jpeg','picture/f9_10.jpeg','picture/f9_11.jpeg','picture/f9_12.jpeg',
      'picture/f9_13.jpeg','picture/f9_14.jpeg'
    ]
  },
  {
    name: 'Samad Islam (moda)',
    profile: 'picture/f10.jpeg',
    phone: '0170000010',
    facebook: 'https://facebook.com/samad',
    photos: [
      'picture/f10_1.jpeg','picture/f10_2.jpeg','picture/f10_3.jpeg','picture/f10_4.jpeg',
      'picture/f10_5.jpeg','picture/f10_6.jpeg','picture/f10_7.jpeg','picture/f10_8.jpeg',
      'picture/f10_9.jpeg','picture/f10_10.jpeg','picture/f10_11.jpeg','picture/f10_12.jpeg',
      'picture/f10_13.jpeg','picture/f10_14.jpeg'
    ]
  },
  {
    name: 'group',
    profile: 'picture/bg.jpeg',
    phone: '01560041417',
    
    facebook: 'https://facebook.com/mehedimotex',
    photos: [
      'picture/group_1.jpeg','picture/group_2.jpeg','picture/group_3.jpeg','picture/group_4.jpeg',
      'picture/group_5.jpeg','picture/group_6.jpeg','picture/group_7.jpeg','picture/group_8.jpeg',
      'picture/group_9.jpeg','picture/group_10.jpeg','picture/group_11.jpeg','picture/group_12.jpeg',
      'picture/group_13.jpeg','picture/group_14.jpeg'
    ]
  }
];

/* ===== ELEMENTS ===== */
const cardsContainer = document.getElementById("cardsContainer");
const picturesModal = document.getElementById("picturesModal");
const historyModal = document.getElementById("historyModal");
const historyContent = document.getElementById("historyContent");
const groupModal = document.getElementById("groupModal");
const groupGallery = document.getElementById("groupGallery");
const uploaderName = document.getElementById("uploaderName");
const groupUpload = document.getElementById("groupUpload");
const uploadBtn = document.getElementById("uploadBtn");

/* ===== CREATE FRIEND CARDS ===== */
friends.forEach((f,index)=>{
  cardsContainer.innerHTML += `
    <div class="card">
      <img src="${f.profile}">
      <h3>${f.name}</h3>
      <button onclick="openHistory(${index})">See History</button>
    </div>
  `;
});

/* ===== BUTTONS ===== */
document.getElementById("openPictures").onclick = ()=>{
  document.querySelector(".center-container").style.display = "none";
  picturesModal.style.display = "block";
};
document.getElementById("backFromFriends").onclick = ()=>{
  picturesModal.style.display = "none";
  document.querySelector(".center-container").style.display = "flex";
};
document.getElementById("backFromHistory").onclick = ()=>{
  historyModal.style.display = "none";
  picturesModal.style.display = "block";
};
document.getElementById("openGroup").onclick = ()=>{
  document.querySelector(".center-container").style.display = "none";
  groupModal.style.display = "block";
};
document.getElementById("backFromGroup").onclick = ()=>{
  groupModal.style.display = "none";
  document.querySelector(".center-container").style.display = "flex";
};

/* ===== OPEN HISTORY ===== */
function openHistory(index){
  const f = friends[index];
  picturesModal.style.display = "none";
  historyModal.style.display = "block";

  historyContent.innerHTML = `
    <div class="history-center">
      <img src="${f.profile}" class="history-profile">
      <h2>${f.name}</h2>
      <p>${f.phone}</p>
      ${f.facebook?`<a href="${f.facebook}" target="_blank" class="facebook-btn">Facebook</a>`:""}
    </div>
    <div class="gallery-grid">
      ${f.photos.map(img=>`
        <div class="gallery-card">
          <img src="${img}">
          <a href="${img}" download class="download-btn">Download</a>
        </div>
      `).join('')}
    </div>
  `;
}

/* ===== GROUP UPLOAD ===== */

function renderGroupGallery(){
  groupGallery.innerHTML = "";
  groupPhotos.forEach(p=>{
    groupGallery.innerHTML += `
      <div class="gallery-card">
        <img src="${p.src}">
        <p>${p.uploader} - ${p.date}</p>
        <a href="${p.src}" download class="download-btn">Download</a>
      </div>
    `;
  });
}
renderGroupGallery();

uploadBtn.onclick = ()=>{
  const files = groupUpload.files;
  const uploader = uploaderName.value || "Unknown";
  const date = new Date().toLocaleString();
  for(let f of files){
    const reader = new FileReader();
    reader.onload = (e)=>{
      groupPhotos.push({src:e.target.result, uploader, date});
      renderGroupGallery();
    };
    reader.readAsDataURL(f);
  }
};
