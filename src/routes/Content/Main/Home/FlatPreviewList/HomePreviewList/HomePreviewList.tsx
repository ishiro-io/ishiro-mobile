import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { ThemeContext } from "react-native-elements";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

import AnimeCard from "components/AnimeCard";
import { HomeNavigationProps } from "shared/navigation/NavigationProps";

import { SeeMoreCard } from "./SeeMoreCard";

const CARD_WIDTH = moderateScale(125, 0.1);
const CARD_HEIGHT = moderateVerticalScale(210, 0.1);

const HomePreviewList: React.FC<HomePreviewListProps> = ({
  animes,
  title,
  total,
  onSeeMoreCardPress
}: HomePreviewListProps) => {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigation<HomeNavigationProps<"Home">["navigation"]>();

  return (
    <View
      style={{
        flex: 1,
        marginBottom: theme.spacing?.m,
        marginLeft: theme.spacing?.s
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          fontSize: moderateScale(20, 0.25),
          color: theme.colors?.white
        }}
      >
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {animes?.map((item) => {
          return (
            <AnimeCard
              key={item.id}
              title={item.title}
              posterImageUrl={item.posterImage}
              episodeText={
                item.nextEpisode
                  ? "Prochain épisode"
                  : item.lastEpisode
                  ? "Dernier épisode"
                  : undefined
              }
              episodeNumber={item.nextEpisode || item.lastEpisode}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
              onPress={() =>
                navigation.navigate("AnimeInfo", { animeId: item.id })
              }
            />
          );
        })}
        {(!total || total > animes.length) && (
          <SeeMoreCard onPress={onSeeMoreCardPress} />
        )}
      </ScrollView>
    </View>
  );
};

export default HomePreviewList;

export interface HomePreviewListProps {
  animes?: AnimeCardData[];
  title: string;
  total?: number;
  onSeeMoreCardPress: () => void;
}

interface AnimeCardData {
  id: number;
  title: string;
  nextEpisode?: number;
  lastEpisode?: number;
  posterImage?: string;
}
