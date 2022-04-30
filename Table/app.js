const submit_btn = document.getElementById('submit-form')
const table = document.getElementById('table')
const project_number = document.getElementById('project-number')
const project_name = document.getElementById('project-name')
const project_ddate = document.getElementById('project-due-date')
const project_budget = document.getElementById('project-budget')


submit_btn.addEventListener('click', ()=>{
    let add_row = table.insertRow()
    let add_number = add_row.insertCell(0)
    let add_name = add_row.insertCell(1)
    let add_date = add_row.insertCell(2)
    let add_budget = add_row.insertCell(3)
    add_number.innerText = project_number.value
    add_name.innerText = project_name.value
    add_date.innerText = project_ddate.value
    add_budget.innerText = project_budget.value
    project_number.value = ''
    project_name.value = ''
    project_ddate.value = ''
    project_budget.value = ''
})