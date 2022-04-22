# react-native-settings-template

a settings template using react-native

## Installation

```sh
npm install react-native-settings-template
```

## Usage

```TS
import { createSettingsDataFactory } from "react-native-settings-template";

// ...

//Create a SettingsData
const SettingsData = createSettingsDataFactory();

//Create empty SectionData
const SectionData = SettingsData.createSectionFactory();

//Create sectionData with data defined
const SectionData = SettingsData.createSectionFactory();
const SectionData1 = SettingsData.createSectionFactory({
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
```

render

```ts
const App = () => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" backgroundColor="#8c231a" />
      <View style={styles.navBar}>
        <Text style={styles.navBarTitle}>Settings</Text>
      </View>
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
            titleStyles={{ color: 'red' }}
          />
          <SectionData.Row
            title="row title2"
            isFirst={false}
            showDisclosureIndicator={true}
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
  )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
