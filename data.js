function Data() {
  let dataRecords = undefined;
  function saveToStorage() {
    localStorage.setItem("key-TotalLoan", JSON.stringify(dataRecords));
  }

  function loadFromStorage() {
    dataRecords = JSON.parse(localStorage.getItem("key-TotalLoan"));
    return dataRecords;
  }

  return { saveToStorage, loadFromStorage };
}

const dataInstance = Data();

dataInstance.loadFromStorage();

export default dataInstance;
