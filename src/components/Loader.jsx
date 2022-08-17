import { Skeleton } from "@mui/material";

export default function Loader({ height, width }) {
  return (
    <Skeleton
      style={{
        position: "absolute",
        width: width ? width : "80%",
        height: height ? height : "80%",
      }}
    />
  );
}
