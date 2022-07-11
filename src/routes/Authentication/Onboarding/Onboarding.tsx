import { Image, View } from "react-native";

const Onboarding = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{
          height: 150,
          width: 150,
          resizeMode: "cover"
        }}
      />

      {/* <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: theme.textSize.l,
          color: theme.colors?.white,
          textAlign: "center",
          paddingHorizontal: theme.spacing?.xl,
          marginVertical: theme.spacing?.xxl
        }}
      >
        Des milliers d'animes que vous pouvez suivre à tout moment.
      </Text> */}

      {/* <Button
        type="outline"
        buttonStyle={{
          borderColor: theme.colors?.primaryLighter,
          borderWidth: moderateScale(2, 0.25)
        }}
        disabledStyle={{ backgroundColor: theme.colors?.grey8 }}
        containerStyle={{
          marginBottom: theme.spacing.s
        }}
        titleStyle={{
          color: theme.colors?.white
        }}
        icon={
          <View style={{ marginRight: theme.spacing?.m }}>
            <FontAwesome name="phone" size={moderateScale(20)} color="white" />
          </View>
        }
        onPress={() => navigation.navigate("AskConfirmPhoneNumberCode")}
        title="Continuer avec mon numéro"
      /> */}
    </View>
  );
};

export default Onboarding;
