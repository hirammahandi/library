import styled from "styled-components";

type DividerProps = {
  orientation: "horizontal" | "vertical";
};

const Divider = styled.hr<DividerProps>((props) =>
  props.orientation === "horizontal"
    ? {
        margin: "8px 0",
        flexShrink: 0,
        borderWidth: " 0px 0px thin",
        borderStyle: "solid",
        borderColor: "#858282",
      }
    : {
        margin: "0px 4px",
        flexShrink: "0",
        borderWidth: "0px thin 0px 0px",
        borderStyle: "solid",
        borderColor: "#858282",
        height: "auto",
        alignSelf: "stretch",
      }
);

export default Divider;
