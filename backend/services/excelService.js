import XLSX from "xlsx";

const workbook = XLSX.readFile("./data/workbook.xlsx");

export const getSheetNames = () => {
  return workbook.SheetNames;
};

export const getSheetData = (sheetName) => {
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    return [];
  }

  return XLSX.utils.sheet_to_json(sheet);
};