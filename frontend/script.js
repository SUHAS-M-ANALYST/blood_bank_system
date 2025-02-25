// Sample data (replace with API calls later)
let donors = [];
let inventory = [];
let requests = [];

// DOM Elements
const donorForm = document.getElementById('donorForm');
const donorTableBody = document.querySelector('#donorTable tbody');
const inventoryForm = document.getElementById('inventoryForm');
const inventoryTableBody = document.querySelector('#inventoryTable tbody');
const requestForm = document.getElementById('requestForm');
const requestTableBody = document.querySelector('#requestTable tbody');

// Add Donor
donorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const donor = {
    name: document.getElementById('donorName').value,
    bloodGroup: document.getElementById('donorBloodGroup').value,
    contact: document.getElementById('donorContact').value,
    address: document.getElementById('donorAddress').value
  };
  donors.push(donor);
  renderDonors();
  donorForm.reset();
});

// Render Donors
function renderDonors() {
  donorTableBody.innerHTML = '';
  donors.forEach(donor => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${donor.name}</td>
      <td>${donor.bloodGroup}</td>
      <td>${donor.contact}</td>
      <td>${donor.address}</td>
    `;
    donorTableBody.appendChild(row);
  });
}

// Update Inventory
inventoryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const stock = {
    bloodGroup: document.getElementById('inventoryBloodGroup').value,
    units: document.getElementById('inventoryUnits').value
  };
  inventory.push(stock);
  renderInventory();
  inventoryForm.reset();
});

// Render Inventory
function renderInventory() {
  inventoryTableBody.innerHTML = '';
  inventory.forEach(stock => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${stock.bloodGroup}</td>
      <td>${stock.units}</td>
    `;
    inventoryTableBody.appendChild(row);
  });
}

// Submit Request
requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const request = {
    patientName: document.getElementById('patientName').value,
    bloodGroup: document.getElementById('requestBloodGroup').value,
    units: document.getElementById('requestUnits').value,
    hospitalName: document.getElementById('hospitalName').value,
    status: 'Pending'
  };
  requests.push(request);
  renderRequests();
  requestForm.reset();
});

// Render Requests
function renderRequests() {
  requestTableBody.innerHTML = '';
  requests.forEach(request => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${request.patientName}</td>
      <td>${request.bloodGroup}</td>
      <td>${request.units}</td>
      <td>${request.hospitalName}</td>
      <td>${request.status}</td>
    `;
    requestTableBody.appendChild(row);
  });
}

// Initial Render
renderDonors();
renderInventory();
renderRequests();