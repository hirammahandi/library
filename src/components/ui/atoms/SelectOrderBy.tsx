import { OrderBy } from "@/context";
import { useGlobalState } from "@/hooks";

const SelectOrderBy = () => {
  const { handleChangeOrderBy, orderBy } = useGlobalState();
  return (
    <label style={{ width: "max-content" }}>
      Order:{" "}
      <select
        name="order-by"
        id="order-by"
        value={orderBy}
        onChange={({ target }) => handleChangeOrderBy(target.value as OrderBy)}
        style={{ alignSelf: "self-start", marginBottom: 10 }}
      >
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </label>
  );
};

export default SelectOrderBy;
