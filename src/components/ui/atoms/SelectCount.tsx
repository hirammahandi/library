import { FC } from "react";

type SelectCountProps = {
  countValue: number;
  loading?: boolean;
  handleRefetchOnCount: (value: number) => void;
};

const SelectCount: FC<SelectCountProps> = ({ countValue, loading, handleRefetchOnCount }) => {
  return (
    <label>
      Count:{" "}
      <select
        name="count"
        id="count"
        disabled={loading}
        value={countValue}
        onChange={({ target }) => handleRefetchOnCount(Number(target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="100">100</option>
      </select>
    </label>
  );
};

export default SelectCount;
