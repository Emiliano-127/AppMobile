import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function MultipleCheckBox () {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        title='Option 1'
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
      <CheckBox
        title='Option 2'
        checked={checked1}
        onPress={() => setChecked1(!checked1)}
      />
      <CheckBox
        title='Option 3'
        checked={checked2}
        onPress={() => setChecked2(!checked2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
  },
});

