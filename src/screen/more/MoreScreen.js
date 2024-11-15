import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader, CustomIcon, Label, Logo, Pressable } from '../../components'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { MORE_MENU } from '../../assets/data/DummyData'

const MoreScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <AppHeader
        centerComp={<Logo />}
      />

      {
        MORE_MENU.map((item,index)=>(
          <Pressable key={index} style={styles.cardContainer} disabled={!item?.enable} onPress={()=>navigation.navigate(item?.route,{title:item?.text})}>
          <Label style={styles.cardTitle}>{item?.text}</Label>
          <CustomIcon name={"chevron-forward"} family='Ionicons' size={hp(2.5)} />
        </Pressable>
  
        ))
      }

   
    </View>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor:COLOR.white
    
  },
  cardContainer:{
    ...commonStyles.justifyView_m05,
    backgroundColor:COLOR.white,
    paddingVertical: hp(2),
    paddingHorizontal: wp(6),
    borderRadius: hp(1.5),
    shadowColor:COLOR.darkBlue,               // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position (iOS)
    shadowOpacity: 0.8,                // Shadow opacity (iOS)
    shadowRadius: 4,                  // Shadow blur radius (iOS)
    elevation: 3,
    marginVertical:hp(1)
  },
  cardTitle:{
    ...TEXT_STYLE.textBold
  }
})