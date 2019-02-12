import { addSuccessToast } from "../../messageToasts/actions";
//import { dispatch } from "d3";
import { t } from "@superset-ui/translation";

export function testPrintToast() {
  console.log("onJSFile");
  return dispatch => {
     addSuccessToast(t('Test Toast message'));
  }
  
}
