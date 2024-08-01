/* eslint-disable jsx-a11y/accessible-emoji */
import { usePathname } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ResourceItem from '../components/ResourceItem';
import RoundCheckIcon from '../components/RoundCheckIcon';
import useScreens from '../hooks/useScreens';
import { styles } from './styles';

export default function Screen() {
  const [whatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);
  const path = usePathname();
  const { homeScreen, getScreenByPath } = useScreens();

  useEffect(() => {
    getScreenByPath(path);
  }, [getScreenByPath, path]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>{homeScreen?.first_line_message}</Text>
            <Text
              style={[styles.textXL, styles.appTitleText]}
              testID="heading"
              role="heading"
            >
              {homeScreen?.title}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.hero}>
              <View style={styles.heroTitle}>
                <RoundCheckIcon />
                <Text style={[styles.textLg, styles.heroTitleText]}>
                  {homeScreen?.whats_next_section.title}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.whatsNextButton}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text style={[styles.textMd, styles.textCenter]}>
                  {homeScreen?.whats_next_section.button_label}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <View style={[styles.shadowBox]}>
              <Text style={[styles.marginBottomMd, styles.textLg]}>
                {homeScreen?.resources_section.title}
              </Text>
              {homeScreen?.resources_section.items?.map((resource) => (
                <ResourceItem key={resource.id} resource={resource} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
