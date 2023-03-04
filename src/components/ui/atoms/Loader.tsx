import { Ring } from "@uiball/loaders";
import { FC } from "react";

type LoaderProps = {
  size: number;
};

const Loader: FC<LoaderProps> = ({ size }) => (
  <Ring size={size} lineWeight={5} speed={2} color="#E3B04B" />
);

export default Loader;
