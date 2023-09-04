// модификаторы документов

// движение денег
//import doc_issue from "./doc_issue";
import lines_availability from '../../../wb-paperless/server/meta';
import FrmObj from '../../components/LinesAvailability/FrmObj'

export default function ($p) {
  lines_availability($p);
  $p.doc.lines_availability.FrmObj = FrmObj;
  //doc_issue($p);
}
