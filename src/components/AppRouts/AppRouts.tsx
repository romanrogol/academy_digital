import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home/Home";
import Setting from "../../page/Setting/Setting";
import Tasks from "../../page/Tasks/Tasks";
import Record from "../../page/Record/Record";
import ModalFilterRate from "../ModalFilterRate/ModalFilterRate";
import ModalFilterReceipt from "../ModalFilterReceipt/ModalFilterReceipt";
import ModalVZNReceipt from "../ModalVZNReceipt/ModalVZNReceipt";
import ModalVZNReceiptItem from "../ModalVZNReceiptItem/ModalVZNReceiptItem";
import ReceiptElementVZN from "../ReceiptElementVZN/ReceiptElementVZN";
import ModalVZNRate from "../ModalVZNRate/ModalVZNRate";
import AddVZNRate from "../AddVZNRate/AddVZNRate";
import ModalVZNRateItem from "../ModalVZNRateItem/ModalVZNRateItem";
import RateElementVZN from "../RateElementVZN/RateElementVZN";
import ModalVZNAddRateItem from "../ModalVZNAddItem/ModalVZNAddItem";
import ElementVZNSearch from "../ElementVZNSearch/ElementVZNSearch";
import ElementVZNChoice from "../ElementVZNChoice/ElementVZNChoice";
import ElementVZNEdit from "../ElementVZNEdit/ElementVZNEdit";
import ElementVZNAdd from "../ElementVZNAdd/ElementVZNAdd";
import ModalScan from "../ModalScan/ModalScan";
import ModalListDepartments from "../ModalListDepartments/ModalListDepartments";
import { Autorization } from "../../page/Autorization/Autorization";

const AppRouts: FC = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Autorization" element={<Autorization />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/record" element={<Record />} />
        <Route path="/scan" element={<ModalScan />} />
        <Route path="/filter_receipt" element={<ModalFilterReceipt />} />
        <Route path="/vzn_receipt" element={<ModalVZNReceipt />} />
        <Route path="/vzn_receipt-info" element={<ModalVZNReceiptItem />} />
        <Route path="/vzn_receipt-element" element={<ReceiptElementVZN />} />
        <Route path="/filter_rate" element={<ModalFilterRate />} />
        <Route path="/vzn_rate" element={<ModalVZNRate />} />
        <Route path="/vzn_rate-info" element={<ModalVZNRateItem />} />
        <Route path="/vzn_rate-element" element={<RateElementVZN />} />
        <Route path="/vzn_rate-add-vzn" element={<AddVZNRate />} />
        <Route
          path="/vzn_rate-add-vzn-info"
          element={<ModalVZNAddRateItem />}
        />
        <Route path="/vzn_rate-add-tmc-add" element={<ElementVZNSearch />} />
        <Route path="/vzn_rate-add-tmc-choice" element={<ElementVZNChoice />} />
        <Route path="/vzn_rate-add-tmc-element" element={<ElementVZNAdd />} />
        <Route path="/vzn_rate-edit-tmc-element" element={<ElementVZNEdit />} />
        <Route path="/modal-list__deport" element={<ModalListDepartments />} />
      </Routes>
    </div>
  );
};

export default AppRouts;
