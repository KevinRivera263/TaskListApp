module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native" +
      "|@react-native(-community)?" +
      "|expo(nent)?" +
      "|@expo(nent)?" +
      "|expo-modules-core" +
      "|@expo-google-fonts" +
      "|react-navigation" +
      "|@react-navigation/.*" +
      "|react-redux)/)"
  ],
};
