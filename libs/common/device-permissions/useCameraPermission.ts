import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Camera } from "expo-camera";

export const useCameraPermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else {
        setHasPermission(false);
        Alert.alert(
          "Quyền truy cập Camera bị từ chối",
          "Vui lòng vào Cài đặt và cấp quyền Camera cho ứng dụng.",
          [{ text: "OK" }]
        );
      }
    })();
  }, []);

  return hasPermission;
};
