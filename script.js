

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
    phone: '01773255299',
    facebook: 'https://www.facebook.com/Sagorahmed3280',
    photos: [
      'picture/sagor/pic1.jpeg',
      'picture/sagor/pic2.jpeg',
      'picture/sagor/pic3.jpeg',
      'picture/sagor/pic4.jpeg',
      'picture/sagor/pic5.jpeg',
      'picture/sagor/pic6.jpeg',
      'picture/sagor/pic7.jpeg',
      'picture/sagor/pic8.jpeg',
      'picture/sagor/pic9.jpeg',
      'picture/sagor/pic10.jpeg',
      'picture/sagor/pic11.jpeg',
      'picture/sagor/pic12.jpeg',
      'picture/sagor/pic13.jpeg',
      'picture/sagor/pic14.jpeg',
    ]
  },
  {
    name: 'Moumit Hasan (mgi)',
    profile: 'picture/momit.jpeg',
    phone: '01571469912',
    facebook: 'https://www.facebook.com/moumit784',
    photos: [
      'picture/momit/pic1.jpeg',
      'picture/momit/pic2.jpeg',
      'picture/momit/pic3.jpeg',
      'picture/momit/pic4.jpeg',
      'picture/momit/pic5.jpeg',
      'picture/momit/pic6.jpeg',
      'picture/momit/pic7.jpeg',
      'picture/momit/pic8.jpeg',
      'picture/momit/pic9.jpeg',
      'picture/momit/pic10.jpeg',
      'picture/momit/pic11.jpeg',
      'picture/momit/pic12.jpeg',
      'picture/momit/pic13.jpeg',
      'picture/momit/pic14.jpeg'
    ]
  },
  {
    name: 'Morad Hosen (morga)',
    profile: 'picture/morad.jpeg',
    phone: '01746153743',
    facebook: 'https://www.facebook.com/md.morad.hosen.509378',
    photos: [
      'picture/morad/pic1.jpeg',
      'picture/morad/pic2.jpeg',
      'picture/morad/pic3.jpeg',
      'picture/morad/pic4.jpeg',
      'picture/morad/pic5.jpeg',
      'picture/morad/pic6.jpeg',
      'picture/morad/pic7.jpeg',
      'picture/morad/pic8.jpeg',
      'picture/morad/pic9.jpeg',
      'picture/morad/pic10.jpeg',
      'picture/morad/pic11.jpeg',
      'picture/morad/pic12.jpeg',
      'picture/morad/pic13.jpeg',
      'picture/morad/pic14.jpeg'
    ]
  },
  {
    name: 'Moinol Hasan (dam)',
    profile: 'picture/mohin.jpeg',
    phone: '01310334236',
    facebook: 'https://www.facebook.com/kibriamoin0609',
    photos: [
      'picture/moin/pic1.jpeg',
      'picture/moin/pic2.jpeg',
      'picture/moin/pic3.jpeg',
      'picture/moin/pic4.jpeg',
      'picture/moin/pic5.jpeg',
      'picture/moin/pic6.jpeg',
      'picture/moin/pic7.jpeg',
      'picture/moin/pic8.jpeg',
      'picture/moin/pic9.jpeg',
      'picture/moin/pic10.jpeg',
      'picture/moin/pic11.jpeg',
      'picture/moin/pic12.jpeg',
      'picture/moin/pic13.jpeg',
      'picture/moin/pic14.jpeg'
    ]
  },
  {
    name: 'Mohammod naim (ban)',
    profile: 'picture/naim.jpeg',
    phone: '01789389942',
    facebook: 'https://www.facebook.com/arafat9942',
    photos: [
      'picture/naim/pic1.jpeg',
      'picture/naim/pic2.jpeg',
      'picture/naim/pic3.jpeg',
      'picture/naim/pic4.jpeg',
      'picture/naim/pic5.jpeg',
      'picture/naim/pic6.jpeg',
      'picture/naim/pic7.jpeg',
      'picture/naim/pic8.jpeg',
      'picture/naim/pic9.jpeg',
      'picture/naim/pic10.jpeg',
      'picture/naim/pic11.jpeg',
      'picture/naim/pic12.jpeg',
      'picture/naim/pic13.jpeg',
      'picture/naim/pic14.jpeg'
    ]
  },
  {
    name: 'Md Rahim (Ram)',
    profile: 'picture/rahim.jpeg',
    phone: '01608788446',
    facebook: 'https://www.facebook.com/txcrahim01',
    photos: [
      'picture/rahim/pic1.jpeg',
      'picture/rahim/pic2.jpeg',
      'picture/rahim/pic3.jpeg',
      'picture/rahim/pic4.jpeg',
      'picture/rahim/pic5.jpeg',
      'picture/rahim/pic6.jpeg',
      'picture/rahim/pic7.jpeg',
      'picture/rahim/pic8.jpeg',
      'picture/rahim/pic9.jpeg',
      'picture/rahim/pic10.jpeg',
      'picture/rahim/pci11.jpeg',
      'picture/rahim/pic12.jpeg',
      'picture/rahim/pic13.jpeg',
      'picture/rahim/pic14.jpeg',
     

    ]
  },
  {
    name: 'Moin Hasan (kala)',
    profile: 'picture/moin.jpeg',
    phone: '01948862269',
    facebook: 'https://www.facebook.com/md.mohin.688551',
    photos: [
      'picture/mohin/pic1.jpeg',
      'picture/mohin/pic2.jpeg',
      'picture/mohin/pic3.jpeg',
      'picture/mohin/pic4.jpeg',
      'picture/mohin/pic5.jpeg',
      'picture/mohin/pic6.jpeg',
      'picture/mohin/pic7.jpeg',
      'picture/mohin/pic8.jpeg',
      'picture/mohin/pic9.jpeg',
      'picture/mohin/pic10.jpeg',
      'picture/mohin/pic11.jpeg',
      'picture/mohin/pic12.jpeg',
      'picture/mohin/pic13.jpeg',
      'picture/mohin/pic14.jpeg'
    ]
  },
  {
    name: 'Saif Ahmed (Foisa)',
    profile: 'picture/saif.jpeg',
    phone: '01733884503',
    facebook: 'https://www.facebook.com/saifahmed1081',
    photos: [
      'picture/saif/pic1.jpeg',
      'picture/saif/pic2.jpeg',
      'picture/saif/pic3.jpeg',
      'picture/saif/pic4.jpeg',
      'picture/saif/pic5.jpeg',
      'picture/saif/pic6.jpeg',
      'picture/saif/pic7.jpeg',
      'picture/saif/pic8.jpeg',
      'picture/saif/pic9.jpeg',
      'picture/saif/pic10.jpeg',
      'picture/saif/pic11.jpeg',
      'picture/saif/pic12.jpeg',
      'picture/saif/pic13.jpeg',
      'picture/saif/pic14.jpeg'
    ]
  },
  {
    name: 'Shovon Majomder (mgi buzz)',
    profile: 'picture/sovon.jpeg',
    phone: '01878895843',
    facebook: 'https://www.facebook.com/iss.shovon',
    photos: [
      'picture/sovon/pic1.jpeg',
      'picture/sovon/pic2.jpeg',
      'picture/sovon/pic3.jpeg',
      'picture/sovon/pic4.jpeg',
      'picture/sovon/pic5.jpeg',
      'picture/sovon/pic6.jpeg',
      'picture/sovon/pic7.jpeg',
      'picture/sovon/pic8.jpeg',
      'picture/sovon/pic9.jpeg',
      'picture/sovon/pic10.jpeg',
      'picture/sovon/pic11.jpeg',
      'picture/sovon/pic12.jpeg',
      'picture/sovon/pic13.jpeg',
      'picture/sovon/pic14.jpeg'
    ]
  },
  {
    name: 'Samad Islam (moda)',
    profile: 'picture/samad.jpeg',
    phone: '01941873645',
    facebook: 'https://www.facebook.com/samad.islam.131198',
    photos: [
      'picture/samad/pic1.jpeg',
      'picture/samad/pic2.jpeg',
      'picture/samad/pic3.jpeg',
      'picture/samad/pic4.jpeg',
      'picture/samad/pic5.jpeg',
      'picture/samad/pic6.jpeg',
      'picture/samad/pic7.jpeg',
      'picture/samad/pic8.jpeg',
      'picture/samad/pic9.jpeg',
      'picture/samad/pic10.jpeg',
      'picture/samad/pic11.jpeg',
      'picture/samad/pic12.jpeg',
      'picture/samad/pic13.jpeg',
      'picture/samad/pic14.jpeg'
    ]
  },


  {
    name: 'Mehedi hasan (Motex)',
    profile: 'picture/mehedi.jpeg',
    phone: '01410248052',
    facebook: 'https://www.facebook.com/mehedimotex',
    photos: [
      'picture/mehedi/pic1.jpeg',
      'picture/mehedi/pic2.jpeg',
      'picture/mehedi/pic3.jpeg',
      'picture/mehedi/pic4.jpeg',
      'picture/mehedi/pic5.jpeg',
      'picture/mehedi/pic6.jpeg',
      'picture/mehedi/pic7.jpeg',
      'picture/mehedi/pic8.jpeg',
      'picture/mehedi/pic9.jpeg',
      'picture/mehedi/pic10.jpeg',
      'picture/mehedi/pic11.jpeg',
      'picture/mehedi/pic12.jpeg',
      'picture/mehedi/pic13.jpeg',
      'picture/mehedi/pic14.jpeg',
    ]
  },


  {
    name: 'group',
    profile: 'picture/bg.jpeg',
    phone: 'Group Photos',
    
   
    photos: [
      'picture/group/pic1.jpg',
      'picture/group/pic2.jpg',
      'picture/group/pic3.jpg',
      'picture/group/pic4.jpg',
      'picture/group/pic5.jpg',
      'picture/group/pic6.jpeg',
      'picture/group/pic7.jpeg',
      'picture/group/pic8.jpg',
      'picture/group/pic9.jpg',
      'picture/group/pic10.jpeg',
      'picture/group/pic11.jpeg',
      'picture/group/pic12.jpeg',
      'picture/group/pic13.jpg',
      'picture/group/pic14.jpg',
      'picture/group/pic15.jpg',
      'picture/group/pic16.jpg',
      'picture/group/pic17.jpg',
      'picture/group/pic18.jpg',
      'picture/group/pic19.jpg',
      'picture/group/pic20.jpg',
      'picture/group/pic21.jpg',
      'picture/group/pic22.jpg',
      'picture/group/pic23.jpg',
      'picture/group/pic24.jpg',
      'picture/group/pic25.jpg',
      'picture/group/pic26.jpg',
      'picture/group/pic27.jpg',
      'picture/group/pic28.jpg',
      'picture/group/pic29.jpg',
      'picture/group/pic30.jpg',
      'picture/group/pic31.jpg',
      'picture/group/pic32.jpg',
      'picture/group/pic33.jpg',
      'picture/group/pic34.jpg',
      'picture/group/pic35.jpg',
      'picture/group/pic36.jpg',
      
    
    
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
// document.getElementById("openGroup").onclick = ()=>{
//   document.querySelector(".center-container").style.display = "none";
//   groupModal.style.display = "block";
// };
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


