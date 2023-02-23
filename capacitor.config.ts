import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-next-demo",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.64:3000",
    cleartext: true,
  },
};

export default config;
