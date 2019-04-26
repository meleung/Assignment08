/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function bankAccount(ownerName) {
    "use strict";
    var balance = 0, owner = ownerName.trim();
    
    return {
        withdraw: function (withdrawalAmount) {
            if (withdrawalAmount > balance) {
                window.alert("Not enough money in account!");
            } else {
                balance -= withdrawalAmount;
            }
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
        },
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return owner;
        }
    };
}

function updateDisplay(account) {
    "use strict";
    $("display").innerHTML = account.getOwnerName() + "'s account: $" + account.getBalance();
}

function depositToAccount(account) {
    "use strict";
    var depositAmount;
    depositAmount = parseInt(window.prompt("Enter an amount to deposit"), 10);
    
    if (isNaN(depositAmount)) {
        window.alert("Invalid amount entered");
    } else {
        account.deposit(depositAmount);
    }
}

function withdrawFromAccount(account) {
    "use strict";
    var withdrawAmount;
    withdrawAmount = parseInt(window.prompt("Enter an amount to withdraw"), 10);
    
    if (isNaN(withdrawAmount)) {
        window.alert("Invalid amount entered");
    } else {
        account.withdraw(withdrawAmount);
    }
}

function nameClickHandler() {
    "use strict";
    var name, account;
    
    name = window.prompt("Please enter an account name");
    account = bankAccount(name);
    
    $("deposit").onclick = function () {
        depositToAccount(account);
        updateDisplay(account);
    };
    $("withdrawal").onclick = function () {
        withdrawFromAccount(account);
        updateDisplay(account);
    };
    
    updateDisplay(account);
}

function noAccountHandler() {
    "use strict";
    window.alert("Must enter an account name");
}

function main() {
    "use strict";
    
    $("name").onclick = nameClickHandler;
    $("deposit").onclick = noAccountHandler;
    $("withdrawal").onclick = noAccountHandler;
}

window.addEventListener("load", main);