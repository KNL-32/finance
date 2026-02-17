const KEY = "finance:data";

export function loadData() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

///loadData() - retrieves the stored financial records from localStorage
///saveData(data) - takes an array of financial records and saves it to localStorage 