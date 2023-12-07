import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <>
    <Card className="m-4 space-y-5 p-4 border-none !shadow-[inset_0_0_0_1px_#E6E8EC] dark:!shadow-[inset_0_0_0_1px_#353945]" radius="2xl">
      {/* <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton> */}
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] ml-4 rounded-lg">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="laptop:flex laptop:justify-end">
          <Skeleton className="w-[75px] rounded-lg laptop:mr-1">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex laptop:justify-end desktop:justify-end tv:justify-end">
        <Skeleton className="w-[100px] rounded-lg mr-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>

    <Card className="m-4 space-y-5 p-4 border-none !shadow-[inset_0_0_0_1px_#E6E8EC] dark:!shadow-[inset_0_0_0_1px_#353945]" radius="2xl">
      {/* <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton> */}
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] ml-4 rounded-lg">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="laptop:flex laptop:justify-end">
          <Skeleton className="w-[75px] rounded-lg laptop:mr-1">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex laptop:justify-end desktop:justify-end tv:justify-end">
        <Skeleton className="w-[100px] rounded-lg mr-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>

    <Card className="m-4 space-y-5 p-4 border-none !shadow-[inset_0_0_0_1px_#E6E8EC] dark:!shadow-[inset_0_0_0_1px_#353945]" radius="2xl">
      {/* <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton> */}
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] ml-4 rounded-lg">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="laptop:flex laptop:justify-end">
          <Skeleton className="w-[75px] rounded-lg laptop:mr-1">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex laptop:justify-end desktop:justify-end tv:justify-end">
        <Skeleton className="w-[100px] rounded-lg mr-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>

    <Card className="m-4 space-y-5 p-4 border-none !shadow-[inset_0_0_0_1px_#E6E8EC] dark:!shadow-[inset_0_0_0_1px_#353945]" radius="2xl">
      {/* <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton> */}
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] ml-4 rounded-lg">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="laptop:flex laptop:justify-end">
          <Skeleton className="w-[75px] rounded-lg laptop:mr-1">
            <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
        <div className="flex laptop:justify-end desktop:justify-end tv:justify-end">
        <Skeleton className="w-[100px] rounded-lg mr-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[100px] rounded-lg mx-1">
            <div className="h-4 w-1/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
    </>
  );
}
