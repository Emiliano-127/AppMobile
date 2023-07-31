import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

const MultipleCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      <Text>Is checked: {isChecked}</Text>
    </TouchableOpacity>
  );
};

export default MultipleCheckBox;