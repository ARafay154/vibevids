import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, Label, Pressable } from '../../components'
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide'

const AppointmentsScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}> 
      <AppHeader
        title={"Appointments"}
      />
      <Label style={styles.nofoundText}>Currenlty no Appointments found.</Label>
    </View>
  )
}

export default AppointmentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white
  },
  nofoundText: {
    textAlign: 'center',
    marginTop: hp(8),
    ...TEXT_STYLE.textMedium
  },
 
})