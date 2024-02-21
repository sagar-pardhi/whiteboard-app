"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider, useSelf } from "@/liveblocks.config";
import { ReactNode } from "react";

interface RoomProps {
  children: React.ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  const info = useSelf((me) => me.info);

  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
