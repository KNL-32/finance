import { loadData, saveData } from "./storage.js";

export let records = loadData();

export function addRecord(record) {
  records.push(record);
  saveData(records);
}

export function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
  saveData(records);
}

/* Stores the records array
Adds new records
Deletes records
Updates records */