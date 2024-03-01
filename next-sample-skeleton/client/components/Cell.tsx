import { useEffect, useState } from "react";

type Props = {
  getValue: any,
  row: any,
  column: any,
  table: any
}

const EditableCell = ({ column, getValue, row, table }: Props) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`p-2`}
    />
  );
};
export default EditableCell;