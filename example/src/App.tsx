import Icon from "react-native-vector-icons/Entypo";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  RefreshControl,
  Platform,
  StatusBar,
  useColorScheme,
} from "react-native";
// import {
//   SettingsScreen,
//   SettingsData,
//   Chevron,
// } from "react-native-settings-screen";
import { createSettingsDataFactory } from "./src";
import Colors from "./Colors";

const renderHero = () => (
  <View style={styles.heroContainer}>
    <Image
      source={require("./assets/adaptive-icon.png")}
      style={styles.heroImage}
    />
    <View style={{ flex: 1 }}>
      <Text style={styles.heroTitle}>Jan Söndermann</Text>
      <Text style={styles.heroSubtitle}>jan+git@primlo.com</Text>
    </View>
    {/* <Chevron /> */}
  </View>
);
const fontFamily = Platform.OS === "ios" ? "Avenir" : "sans-serif";
export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  return Colors[theme][colorName];
}
export default function App() {
  const backgroundColor = useThemeColor("background");
  const tintBackground = useThemeColor("tintBackground");
  const color = useThemeColor("text");
  const SettingsData = createSettingsDataFactory();
  const SectionData = SettingsData.createSectionFactory();
  const SectionData1 = SettingsData.createSectionFactory({
    type: "SECTION",
    header: "My Section".toUpperCase(),
    footer:
      "Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    rows: [
      {
        title: "A row",
        showDisclosureIndicator: true,
      },
      { title: "A non-tappable row" },
      {
        title: "This row has a",
        subtitle: "Subtitle",
        showDisclosureIndicator: true,
      },
      {
        title: "Long title. So long long long long long long long",
        subtitle:
          "And so is the subtitle. Even longer longer longer longer longer",
      },
      {
        title: "Switch",
        renderAccessory: () => <Switch value onValueChange={() => {}} />,
      },
      {
        title: "Text",
        renderAccessory: () => (
          <Text style={{ color: "#999", marginRight: 6, fontSize: 18 }}>
            Maybe
          </Text>
        ),
      },
    ],
  });
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" backgroundColor="#8c231a" />
      <View style={styles.navBar}>
        <Text style={styles.navBarTitle}>Settings</Text>
      </View>
      {/* <SettingsScreen data={data} globalTextStyle={{ fontFamily }} /> */}
      <SettingsData.SettingsScreen
        viewStyle={{ backgroundColor: tintBackground }}
        textStyle={{ color }}
      >
        <SettingsData.UserInfo
          source={require("./assets/favicon.png")}
          title="title"
          subTitle="subtitle"
          showDisclosureIndicator={true}
        />
        <SectionData1.Section />
        <SectionData.Section
          viewStyle={{ backgroundColor }}
          textStyle={{ color }}
        >
          <SectionData.SectionHeader children="headerTest" />
          <SectionData.Row
            title="row title"
            isFirst={true}
            showDisclosureIndicator={true}
            viewStyle={{ backgroundColor }}
            titleStyles={{ color }}
          />
          <SectionData.Row
            title="row title2"
            isFirst={false}
            showDisclosureIndicator={true}
            viewStyle={{ backgroundColor }}
            titleStyles={{ color }}
          />
          <SectionData.Row
            title="row title3"
            isFirst={false}
            isLast={true}
            showDisclosureIndicator={true}
          />
        </SectionData.Section>
        <SettingsData.CustomView
          Element={() => (
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                color: "red",
                marginBottom: 40,
                marginTop: -30,
                fontFamily,
              }}
            >
              v1.2.3
            </Text>
          )}
        />
      </SettingsData.SettingsScreen>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
const statusBarHeight = Platform.OS === "ios" ? 35 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    backgroundColor: "#8c231c",
    height: 44 + statusBarHeight,
    alignSelf: "stretch",
    paddingTop: statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  navBarTitle: {
    color: "white",
    fontFamily,
    fontSize: 17,
  },
  heroContainer: {
    marginTop: 40,
    marginBottom: 50,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    flexDirection: "row",
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "black",
    marginHorizontal: 20,
  },
  heroTitle: {
    fontFamily,
    color: "black",
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily,
    color: "#999",
    fontSize: 14,
  },
});
