import HyperFormula from 'hyperformula';
import { COL_NO, ROW_NO } from './constants';
import { SAMPLE_FORMULA_DATA } from './fakedata';

console.log(`%c Using HyperFormula ${HyperFormula.version}`, 'color: blue; font-weight: bold');

// Create an empty HyperFormula instance.
const hf = HyperFormula.buildEmpty({
  licenseKey: "gpl-v3",
  maxColumns: COL_NO,
  maxRows: ROW_NO,
});

// Add a new sheet and get its id.
const sheetName = hf.addSheet("mysheet");
const sheetId = hf.getSheetId(sheetName) as number;

hf.setCellContents({ row: 0, col: 0, sheet: sheetId }, SAMPLE_FORMULA_DATA)

export { hf, sheetId, sheetName };

