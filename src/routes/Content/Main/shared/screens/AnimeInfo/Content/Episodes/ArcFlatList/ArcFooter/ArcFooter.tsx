import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Dimensions, Text, View } from "react-native";
import { ThemeContext } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("screen");

const ArcFooter: React.FC<ArcFooterProps> = ({
  onNextEpisodePressed
}: ArcFooterProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback onPress={() => onNextEpisodePressed()}>
      <View
        style={{
          width,
          paddingVertical: theme.spacing?.m,
          paddingRight: theme.spacing?.m,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: theme.colors?.white,
            fontFamily: "Poppins_500Medium",
            fontSize: theme.textSize.s
          }}
        >
          Saison suivante
        </Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={moderateScale(24, 0.1)}
          color="white"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArcFooter;

interface ArcFooterProps {
  onNextEpisodePressed: () => void;
}
