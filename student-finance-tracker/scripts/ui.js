import { addRecord } from "./state.js";
import { validateField, patterns } from "./validators.js";

const form = document.getElementById("transactionForm");
const errorBox = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value.trim();

  if (!validateField("description", description)) {
    return showError("Invalid description");
  }

  if (patterns.duplicate.test(description)) {
    return showError("Duplicate word detected");
  }

  if (!validateField("amount", amount)) {
    return showError("Invalid amount");
  }

  if (!validateField("category", category)) {
    return showError("Invalid category");
  }

  if (!validateField("date", date)) {
    return showError("Invalid date format");
  }

  const newRecord = {
    id: "txn_" + Date.now(),
    description,
    amount: parseFloat(amount),
    category,
    date,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  addRecord(newRecord);
  form.reset();
  errorBox.textContent = "Transaction added successfully";
});

function showError(msg) {
  errorBox.textContent = msg;
}
