let projects = JSON.parse(localStorage.getItem('projects')) || [];
  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    finalizeSave(existingImage);
  }

  function finalizeSave(image) {
    const newProject = { title, description, date, progress, image };

    if (editIndex !== null) {
      projects[editIndex] = newProject;
      editIndex = null;
    } else {
      projects.push(newProject);
    }

    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
    resetForm();
    showToast();
  }
}

function editProject(index) {
  const proj = projects[index];

  document.getElementById('title').value = proj.title;
  document.getElementById('description').value = proj.description;
  document.getElementById('date').value = proj.date;
  document.getElementById('progress').value = proj.progress;

  editIndex = index;
  document.getElementById('formTitle').innerText = 'Editando Projeto';
  document.getElementById('cancelBtn').style.display = 'block';
}

function cancelEdit() {
  editIndex = null;
  resetForm();
}

function deleteProject(index) {
  projects.splice(index, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
  renderProjects();
}

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('date').value = '';
  document.getElementById('progress').value = '';
  document.getElementById('image').value = '';
  document.getElementById('formTitle').innerText = 'Novo Projeto';
  document.getElementById('cancelBtn').style.display = 'none';
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

renderProjects();
