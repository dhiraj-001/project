import { getSheetData } from "./services/excelService.js";

const bugs = getSheetData("Fact_Bug_Reports");

console.log(bugs[0]);