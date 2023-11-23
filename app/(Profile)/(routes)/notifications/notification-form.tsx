// NotificationForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import { NOTIFICATIONS } from "@/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import NotificationDialog from "./notification-dialog";

interface Notification {
  label: string;
  description: string;
  note: string;
}

export const NotificationForm: React.FC = () => {
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);

  const openDialog = (notification: Notification) => {
    setSelectedNotification(notification);
  };

  const closeDialog = () => {
    setSelectedNotification(null);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/notification");
  //     const json = await res.json();
  //     console.log({ json });
  //     if (json.notifications.length < 1) {
  //       // create profile

  //       const postres = await fetch("/api/notification", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           title: "String",
  //           message: "String",
  //         }),
  //       });
  //       const postjson = await postres.json();
  //       console.log({ postjson });
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h3 className="my-3 text-lg font-medium">Notifications</h3>
      <div className="space-y-4">
        {NOTIFICATIONS.map((notification: Notification, index) => (
          <Card key={index} className="flex items-center">
            <div className="flex-1">
              <CardHeader>
                <CardTitle>{notification.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>{notification.description}</p>
              </CardContent>
            </div>
            <CardFooter className="flex items-center">
              <NotificationDialog
                label={notification.label}
                description={notification.description}
                note={notification.note}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
