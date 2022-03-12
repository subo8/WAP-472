/**
 * hcmc.js
 * @author Byambadorj
 * @since 2022-03-11
 */
"use strict";

import { Patient } from "./model/patient.js";

//Avoid global namespace pollution
$(function () {

    const patientData = [];

    $("#formNewPatient").submit(function (event) {
        event.preventDefault();

        const id = $("#patientIdNumber").val();
        const first = $("#firstName").val();
        const middle = $("#middleInitials").val();
        const last = $("#lastName").val();
        const dob = $("#dateOfBirth").val();
        const department = $("#ddlDepartment").val();
        const out = $('input[name="radioIsOutPatient"]:checked').val();

        console.log(department);

        const newPatient = new Patient(id, first, middle, last, dob, department, out);
        patientData.push(newPatient);
        createPatient(newPatient);

        $("#patientIdNumber").val("");
        $("#firstName").val("");
        $("#middleInitials").val("");
        $("#lastName").val("");
        $("#dateOfBirth").val("");
        $("#ddlDepartment").val("");
        $('input[name="radioIsOutPatient"]:checked').val("");
    });

    //Check box validation
    $('input[type=checkbox]').change(function () {
        if (patientData.length > 0) {
            $("#tbodyPatientsList tr").remove();
            let data = [];

            //Check only patient checked
            if ($(`#${this.id}`).prop("checked") && this.id == "chkShowOutPatients") {
                data = patientData.filter(p => p.getOutPatient() === "Yes");
            } else {
                data = patientData;
            }
            //Check only elder patient
            if ($(`#${this.id}`).prop("checked") && this.id == "chkElderlyPatients") {
                data = data.filter(p => p.getDob() <= "1956-01-01");
            }
            data.forEach(p => createPatient(p));
        }
    });

    //Create new patient to the row
    function createPatient(newPatient) {
        const tbdPatients = document.querySelector("#tbodyPatientsList");
        const newRow = tbdPatients.insertRow(-1);

        //ID
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${newPatient.getId()}`);
        newCellRowId.appendChild(strNewRowId);

        //First Name
        const newCellFirstName = newRow.insertCell(1);
        const strNewRowFirstName = document.createTextNode(`${newPatient.getFirst()}`);
        newCellFirstName.appendChild(strNewRowFirstName);

        //Middle
        const newCellMiddle = newRow.insertCell(2);
        const strNewRowMiddle = document.createTextNode(`${newPatient.getMiddle()}`);
        newCellMiddle.appendChild(strNewRowMiddle);

        //Last Name
        const newCellLastName = newRow.insertCell(3);
        const strNewLastName = document.createTextNode(`${newPatient.getLast()}`);
        newCellLastName.appendChild(strNewLastName);

        //DOB
        const newCellDOB = newRow.insertCell(4);
        const strNewDob = document.createTextNode(`${newPatient.getDob()}`);
        newCellDOB.appendChild(strNewDob);

        //Department
        const newCellDepartment = newRow.insertCell(5);
        const strNewDepartment = document.createTextNode(`${newPatient.getDepartment()}`);
        newCellDepartment.appendChild(strNewDepartment);

        //Out-patient
        const newCellOut = newRow.insertCell(6);
        const strNewOut = document.createTextNode(`${newPatient.getOutPatient()}`);
        newCellOut.appendChild(strNewOut);
        console.log("Patient info created");
    }
});