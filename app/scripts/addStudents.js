//event:add student to list

export function addStudentToList(student) {

    const list = document.querySelector("#student-list")
    const row = document.createElement('tr')

    row.innerHTML = `
    <tr class="shadow-sm">
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.id}</td>
    <td class="td-button">
       <div class="btn btn-sm btn-red delete">Delete</div>
    </td>
    </tr> 
    `
    list.appendChild(row)
}


