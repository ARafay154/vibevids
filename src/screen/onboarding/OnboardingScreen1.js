import { StyleSheet, View, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Label } from '../../components';
import { En } from '../../locales/En';
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide';
import { SCREENS } from '../../enums/AppEnums';


const OnboardingScreen1 = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <Label animation="zoomIn" style={styles.heading}>
        {En.aboutebotCPA}
      </Label>

      <Label animation="fadeInUp" style={styles.subText}>
        {En.aboutDetail}
      </Label>

      <Button
       
        style={styles.btnStyle}
        text={En.next}
        onPress={() => navigation.navigate(SCREENS.ONBOARD_2)}
      />
    </View>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    ...TEXT_STYLE.title,
    textAlign: 'center',
    marginBottom: hp(4),
  },
  subText: {
    ...TEXT_STYLE.bigTextMedium,
    textAlign: 'justify',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  btnStyle: {
    width: "80%",
    marginTop: hp(4),
  },
});