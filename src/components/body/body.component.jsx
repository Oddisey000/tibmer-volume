import React from "react";

import FloatingActionButtonsAdd from "./button-add/button.add.component";
import FloatingActionButtonsDelete from "./button-delete/button.delete.component";
import BasicTextFields from "./text-field/text.field.component";
import DataTable from "./data-table/data.table.component";

const Body = () => {
  return (
    <div id="app-header">
      <BasicTextFields />
      <DataTable />
      <FloatingActionButtonsAdd />
      <FloatingActionButtonsDelete />
    </div>
  );
};

export default Body;