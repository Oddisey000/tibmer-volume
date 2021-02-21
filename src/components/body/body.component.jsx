import React from "react";

import FloatingActionButtonsAdd from "./button-add/button.add.component";
import FloatingActionButtonsDelete from "./button-delete/button.delete.component";
import BasicTextFields from "./text-field/text.field.component";
import StickyHeadTable from './data-table/data.table.component';

const Body = () => {
  return (
    <div id="app-header">
      <BasicTextFields />
      <StickyHeadTable />
      <FloatingActionButtonsAdd />
      <FloatingActionButtonsDelete />
    </div>
  );
};

export default Body;