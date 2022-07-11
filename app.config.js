export default {
  expo: {
    name: "Ishiro",
    slug: "ishiro-mobile",
    version: "0.0.0",
    entryPoint: "./src/app/App.tsx",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    primaryColor: "#CE1126",
    backgroundColor: "#131313",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#131313"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      userInterfaceStyle: "dark",
      bundleIdentifier: "io.ishiro.app",
      buildNumber: "1.0.0.1"
    },
    android: {
      icon: "./src/assets/android_icon.png",
      package: "io.ishiro.app",
      userInterfaceStyle: "dark",
      versionCode: 1
    },
    androidNavigationBar: {
      backgroundColor: "#131313"
    }
  }
};
