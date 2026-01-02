import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll, getMetadata, updateMetadata } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAkkaUNcMQ2hCLcnPjt18paDDvbVmewQF0",
  authDomain: "tong-tong-d4fef.firebaseapp.com",
  databaseURL: "https://tong-tong-d4fef-default-rtdb.firebaseio.com",
  projectId: "tong-tong-d4fef",
  storageBucket: "tong-tong-d4fef.firebasestorage.app",
  messagingSenderId: "545777958194",
  appId: "1:545777958194:web:bc3508ffbfb1f4efdceb2b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Elements
const uploadBtn = document.getElementById('uploadBtn');
const groupUpload = document.getElementById('groupUpload');
const uploaderName = document.getElementById('uploaderName');
const uploadedPhotos = document.getElementById('uploadedPhotos');

// Upload photos
uploadBtn.addEventListener('click', async () => {
  const files = groupUpload.files;
  const uploader = uploaderName.value || "Unknown";
  const date = new Date().toLocaleString();

  if(files.length === 0){
    alert("Select file(s) to upload!");
    return;
  }

  for (let file of files) {
    const storageRef = ref(storage, `group_photos/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    await updateMetadata(storageRef, { customMetadata: { uploader, date } });
  }

  alert("Uploaded successfully!");
  groupUpload.value = "";
  uploaderName.value = "";
  loadPhotos();
});

// Load all uploaded photos
async function loadPhotos() {
  uploadedPhotos.innerHTML = "";
  const listRef = ref(storage, 'group_photos');
  const res = await listAll(listRef);

  for (let itemRef of res.items) {
    const url = await getDownloadURL(itemRef);
    let meta = { customMetadata: { uploader: "Unknown", date: "Unknown" } };
    try { meta = await getMetadata(itemRef); } catch(e){ console.log(e); }

    uploadedPhotos.innerHTML += `
      <div class="gallery-card">
        <img src="${url}">
        <p>${meta.customMetadata?.uploader || "Unknown"} - ${meta.customMetadata?.date || "Unknown"}</p>
        <button class="deleteBtn" data-path="${itemRef.fullPath}">Delete</button>
        <a href="${url}" download>Download</a>
      </div>
    `;
  }

  // Delete functionality
  document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const path = btn.dataset.path;
      if(confirm("Are you sure you want to delete this photo?")){
        const delRef = ref(storage, path);
        await deleteObject(delRef);
        alert("Deleted successfully!");
        loadPhotos();
      }
    });
  });
}

// Load gallery on page start
loadPhotos();
