import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function NewSkeletonContainer() {
  return (
    <Stack spacing={1}>
      <Skeleton
        height={190}
        animation="wave"
        variant="rectangular"
        width={850}
      />
      <Skeleton variant="rectangular" width={850} height={20} />
      <Skeleton variant="rectangular" width={850} height={20} />
      <div className=" flex gap-6">
        <Skeleton variant="rounded" width={183} height={50} />
        <Skeleton variant="rounded" width={183} height={50} />
      </div>
      <Skeleton
        height={70}
        animation="wave"
        variant="rectangular"
        width={850}
      />
    </Stack>
  );
}
