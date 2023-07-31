import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Blood = () => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 1, name: 'A+' },
    { id: 2, name: 'O+' },
    { id: 3, name: 'B+' },
    { id: 4, name: 'AB+' },
    { id: 5, name: 'A-' },
    { id: 6, name: 'O-' },
    { id: 7, name: 'B-' },
    { id: 8, name: 'AB-' },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Selecione seu tipo de sangue</Text>
      <View style={{ flexDirection: "row"}}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => setSelected(option.id)}
            style={{
              borderWidth: 1,
              borderColor: selected === option.id ? '#000' : '#fff',
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
              borderRadius: 50,
              backgroundColor: "red",
              marginRight: 10
            }}
          >
            <Text>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Blood;