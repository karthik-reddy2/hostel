// Sample Data for Demo
let expenses = [];
let tenants = [
  { name: 'John Doe', room: 101, due: 500 },
  { name: 'Jane Smith', room: 102, due: 600 },
];
let rooms = [
  { roomNumber: 101, status: 'Occupied' },
  { roomNumber: 102, status: 'Available' },
  { roomNumber: 103, status: 'Occupied' },
];

// Update the dashboard with the total income and expenses
function updateDashboard() {
  const totalIncome = tenants.reduce((sum, tenant) => sum + tenant.due, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  document.getElementById('income').textContent = totalIncome;
  document.getElementById('expenses-summary').textContent = totalExpenses;
  document.getElementById('available-rooms').textContent = rooms.filter(room => room.status === 'Available').length;
}

// Handle adding an expense
document.getElementById('expense-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  
  if (expenseName && !isNaN(expenseAmount)) {
    expenses.push({ name: expenseName, amount: expenseAmount });
    updateExpenseList();
    updateDashboard();
  }
});

// Update the expense list UI
function updateExpenseList() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.textContent = ${expense.name}: $${expense.amount};
    expenseList.appendChild(li);
  });
}

// Display tenants
function updateTenantList() {
  const tenantList = document.getElementById('tenant-list');
  tenantList.innerHTML = '';
  tenants.forEach((tenant) => {
    const div = document.createElement('div');
    div.textContent = ${tenant.name} (Room ${tenant.room}) - Due: $${tenant.due};
    tenantList.appendChild(div);
  });
}

// Display rooms
function updateRoomList() {
  const roomList = document.getElementById('room-list');
  roomList.innerHTML = '';
  rooms.forEach((room) => {
    const div = document.createElement('div');
    div.textContent = Room ${room.roomNumber}: ${room.status};
    roomList.appendChild(div);
  });
}

// Initial updates
updateExpenseList();
updateTenantList();
updateRoomList();
updateDashboard();