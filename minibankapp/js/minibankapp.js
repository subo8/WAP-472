/**
 * minibankapp.js
 * 
 * @author okalu
 * @since 2022-03-10
 */
"use strict";

import { Account } from "./model/account.js";

console.log("Hello MinibankApp");
// Avoid polluting the Global Environment
// Method 1
// (function() {
//     console.log("Wrapper minibankapp module loaded");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount() {
//         console.log("Account created");
//     }
// })();
// Method 2: using Window.onload
// window.onload = function() {
//         console.log("minibankapp module loaded via window.onload");
//         const formNewAccount = document.getElementById("formNewAccount");
//         formNewAccount.addEventListener("submit", createAccount);
//         function createAccount() {
//             console.log("Account created");
//         }
// };

// Method 3: using JQuery 
$(document).ready(function() {
    console.log("minibankapp module loaded via JQuery");
    const accountsData = [];

    $("#formNewAccount").submit(function(event){
        event.preventDefault();
        console.log(event.target);
        const accountNo = $("#txtAccountNo").val();
        const customerName = $("#txtCustomerName").val();
        const accountType = $("#ddlAccountType").val();
        // const accountData = `AccountNo: ${accountNo}\nCustomerName: ${customerName}\nAccountType: ${accountType}`;
        // alert(accountData);
        const newAccount = new Account(accountNo, customerName, accountType);
        accountsData.push(newAccount);
        createAccount(newAccount, accountsData.length);
        $("#txtAccountNo").val("");
        $("#txtCustomerName").val("");
        $("#ddlAccountType").val("");
    });    

    function createAccount(newAccount, numAccounts) {      
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const nextRowId = numAccounts + 2;
        const strNewRowId = document.createTextNode(`${nextRowId}.`);
        newCellRowId.appendChild(strNewRowId); // a
        const newCellAccountNo = newRow.insertCell(1);
        const strNewRowAccountNo = document.createTextNode(`${newAccount.getAccountNo()}`);
        newCellAccountNo.appendChild(strNewRowAccountNo);
        const newCellCustomerName = newRow.insertCell(2);
        const strNewRowCustomerName = document.createTextNode(`${newAccount.getCustomerName()}`);
        newCellCustomerName.appendChild(strNewRowCustomerName);
        const newCellAccountType = newRow.insertCell(3);
        const strNewRowAccountType = document.createTextNode(`${newAccount.getAccountType()}`);
        newCellAccountType.appendChild(strNewRowAccountType);
        console.log("Account created");
    }
});

