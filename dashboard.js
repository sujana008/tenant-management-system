// Navigation between pages
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        if (target) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show target section
            document.getElementById(target).classList.remove('hidden');
            
            // Update active menu item
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Charts initialization
document.addEventListener('DOMContentLoaded', function() {
    // Rent Collection Chart
    const rentCtx = document.getElementById('rentChart').getContext('2d');
    const rentChart = new Chart(rentCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Rent Collected',
                data: [16500, 16800, 17200, 17500, 17800, 18000, 18200, 18500, 18800, 18420],
                backgroundColor: 'rgba(67, 97, 238, 0.7)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Occupancy Chart
    const occupancyCtx = document.getElementById('occupancyChart').getContext('2d');
    const occupancyChart = new Chart(occupancyCtx, {
        type: 'doughnut',
        data: {
            labels: ['Occupied', 'Vacant', 'Under Maintenance'],
            datasets: [{
                data: [85, 10, 5],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(243, 156, 18, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Button hover effects
document.querySelectorAll('.btn, .action-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add Tenant Button
document.getElementById('addTenantBtn')?.addEventListener('click', function() {
    alert('Tenant creation form would open here');
});

// Action buttons
//document.querySelectorAll('.action-btn').forEach(btn => {
  //  btn.addEventListener('click', function() {
    //    const action = this.textContent.toLowerCase();
      //  const row = this.closest('tr');
        //const name = row.querySelector('td:first-child').textContent;
        //
        //switch(action) {
          //  case 'edit':
            //    alert(`Editing ${name}'s record`);
              //  break;
            //case 'delete':
              //  if(confirm(`Are you sure you want to delete ${name}'s record?`)) {
                //    row.remove();
                  //  alert(`${name}'s record has been deleted`);
                //}
                //break;
            //case 'resolve':
              //  const statusCell = row.querySelector('.status');
                //statusCell.textContent = 'Resolved';
                //statusCell.className = 'status status-resolved';
                //this.textContent = 'Reopen';
                //this.classList.remove('resolve');
                //this.classList.add('delete');
                //alert(`Marked ${name}'s issue as resolved`);
                //break;
       // }
    //});
//});


//edited
// Update the action buttons section to include edit functionality
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.textContent.toLowerCase();
        const row = this.closest('tr');
        const name = row.querySelector('td:first-child').textContent;
        
        switch(action) {
            case 'edit':
                // You can implement edit functionality here
                alert(`Editing ${name}'s record - implement edit form here`);
                break;
            case 'delete':
                if(confirm(`Are you sure you want to delete ${name}'s record?`)) {
                    row.remove();
                }
                break;
            case 'resolve':
                const statusCell = row.querySelector('td:nth-last-child(2)');
                statusCell.innerHTML = '<span class="status status-resolved">Resolved</span>';
                this.textContent = 'Reopen';
                this.classList.remove('resolve');
                this.classList.add('delete');
                break;
            case 'reopen':
                const statusCellReopen = row.querySelector('td:nth-last-child(2)');
                statusCellReopen.innerHTML = '<span class="status status-open">Open</span>';
                this.textContent = 'Resolve';
                this.classList.remove('delete');
                this.classList.add('resolve');
                break;
        }
    });
});

//edited till 

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput?.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    document.querySelectorAll('table tbody tr').forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(searchTerm) ? '' : 'none';
    });
});


//edited
// Add Tenant Form Modal
const addTenantModal = `
    <div id="tenantModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>Add New Tenant</h3>
            <form id="tenantForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="tenantName" required>
                </div>
                <div class="form-group">
                    <label>Unit</label>
                    <input type="text" id="tenantUnit" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="tenantEmail" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" id="tenantPhone" required>
                </div>
                <div class="form-group">
                    <label>Rent Amount ($)</label>
                    <input type="number" id="tenantRent" required>
                </div>
                <div class="form-group">
                    <label>Lease End Date</label>
                    <input type="date" id="tenantLeaseEnd" required>
                </div>
                <button type="submit" class="btn btn-primary">Add Tenant</button>
            </form>
        </div>
    </div>
`;

// Add this CSS for the modal to dashboard.css
const modalCSS = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    .modal-content {
        background-color: white;
        margin: 10% auto;
        padding: 20px;
        border-radius: 10px;
        width: 50%;
        max-width: 500px;
    }
    .close-btn {
        float: right;
        font-size: 24px;
        cursor: pointer;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
    }
    .form-group input {
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid var(--light-gray);
    }
`;

// Add this to the document head
document.head.insertAdjacentHTML('beforeend', `<style>${modalCSS}</style>`);

// Add Tenant Button functionality
document.getElementById('addTenantBtn')?.addEventListener('click', function() {
    document.body.insertAdjacentHTML('beforeend', addTenantModal);
    const modal = document.getElementById('tenantModal');
    modal.style.display = 'block';
    
    // Close modal when X is clicked
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Handle form submission
    document.getElementById('tenantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('tenantName').value;
        const unit = document.getElementById('tenantUnit').value;
        const email = document.getElementById('tenantEmail').value;
        const phone = document.getElementById('tenantPhone').value;
        const rent = document.getElementById('tenantRent').value;
        const leaseEnd = document.getElementById('tenantLeaseEnd').value;
        
        // Add to table
        const table = document.querySelector('#tenants table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${unit}</td>
            <td>${email}<br>${phone}</td>
            <td>$${rent}</td>
            <td>${new Date(leaseEnd).toLocaleDateString()}</td>
            <td><span class="status status-paid">Active</span></td>
            <td>
                <button class="action-btn edit">Edit</button>
                <button class="action-btn delete">Delete</button>
            </td>
        `;
        table.appendChild(newRow);
        
        // Close modal
        modal.remove();
        
        // Reattach event listeners to new buttons
        attachActionButtonListeners();
    });
});

// Function to attach event listeners to action buttons
function attachActionButtonListeners() {
    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.querySelector('td:first-child').textContent;
            if(confirm(`Are you sure you want to delete ${name}'s record?`)) {
                row.remove();
            }
        });
    });
}

// Call this initially
attachActionButtonListeners();
// Add Payment Form Modal
const addPaymentModal = `
    <div id="paymentModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>Record Payment</h3>
            <form id="paymentForm">
                <div class="form-group">
                    <label>Tenant Name</label>
                    <input type="text" id="paymentTenant" required>
                </div>
                <div class="form-group">
                    <label>Unit</label>
                    <input type="text" id="paymentUnit" required>
                </div>
                <div class="form-group">
                    <label>Amount ($)</label>
                    <input type="number" id="paymentAmount" required>
                </div>
                <div class="form-group">
                    <label>Payment Date</label>
                    <input type="date" id="paymentDate" required>
                </div>
                <div class="form-group">
                    <label>Due Date</label>
                    <input type="date" id="paymentDueDate" required>
                </div>
                <div class="form-group">
                    <label>Payment Method</label>
                    <select id="paymentMethod" required>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Check">Check</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Record Payment</button>
            </form>
        </div>
    </div>
`;

// Add Payment Button functionality
document.querySelector('#payments .btn-primary')?.addEventListener('click', function() {
    document.body.insertAdjacentHTML('beforeend', addPaymentModal);
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'block';
    
    // Close modal when X is clicked
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Handle form submission
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const tenant = document.getElementById('paymentTenant').value;
        const unit = document.getElementById('paymentUnit').value;
        const amount = document.getElementById('paymentAmount').value;
        const date = document.getElementById('paymentDate').value;
        const dueDate = document.getElementById('paymentDueDate').value;
        const method = document.getElementById('paymentMethod').value;
        
        // Add to table
        const table = document.querySelector('#payments table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${tenant}</td>
            <td>${unit}</td>
            <td>$${amount}</td>
            <td>${new Date(date).toLocaleDateString()}</td>
            <td>${new Date(dueDate).toLocaleDateString()}</td>
            <td>${method}</td>
            <td><span class="status status-paid">Paid</span></td>
        `;
        table.appendChild(newRow);
        
        // Close modal
        modal.remove();
    });
});

// Add Complaint Form Modal
const addComplaintModal = `
    <div id="complaintModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>New Complaint</h3>
            <form id="complaintForm">
                <div class="form-group">
                    <label>Tenant Name</label>
                    <input type="text" id="complaintTenant" required>
                </div>
                <div class="form-group">
                    <label>Unit</label>
                    <input type="text" id="complaintUnit" required>
                </div>
                <div class="form-group">
                    <label>Issue Description</label>
                    <textarea id="complaintIssue" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label>Date Reported</label>
                    <input type="date" id="complaintDate" required>
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <select id="complaintPriority" required>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit Complaint</button>
            </form>
        </div>
    </div>
`;

// Add Complaint Button functionality
document.querySelector('#complaints .btn-primary')?.addEventListener('click', function() {
    document.body.insertAdjacentHTML('beforeend', addComplaintModal);
    const modal = document.getElementById('complaintModal');
    modal.style.display = 'block';
    
    // Close modal when X is clicked
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Handle form submission
    document.getElementById('complaintForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const tenant = document.getElementById('complaintTenant').value;
        const unit = document.getElementById('complaintUnit').value;
        const issue = document.getElementById('complaintIssue').value;
        const date = document.getElementById('complaintDate').value;
        const priority = document.getElementById('complaintPriority').value;
        
        // Generate complaint ID
        const complaintId = `#COMP-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Add to table
        const table = document.querySelector('#complaints table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${complaintId}</td>
            <td>${tenant}</td>
            <td>${unit}</td>
            <td>${issue}</td>
            <td>${new Date(date).toLocaleDateString()}</td>
            <td><span class="status status-${priority === 'High' ? 'overdue' : 'pending'}">${priority}</span></td>
            <td><span class="status status-open">Open</span></td>
            <td>
                <button class="action-btn edit">Edit</button>
                <button class="action-btn resolve">Resolve</button>
            </td>
        `;
        table.appendChild(newRow);
        
        // Close modal
        modal.remove();
        
        // Reattach event listeners to new buttons
        attachActionButtonListeners();
    });
});