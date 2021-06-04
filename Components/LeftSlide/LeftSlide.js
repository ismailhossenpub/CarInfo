/*  
💥 Title : LeftSlide
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 04/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Animated, TouchableOpacity } from "react-native";

const LeftSlide = ({ setVisible, visibile }) => {
  const transAnim = useRef(new Animated.Value(-300)).current;
  const [isTrue, setIsTrue] = useState(false);

  const handleHide = () => {
    // setVisible(!visibile);
    Animated.timing(transAnim, {
      toValue: -300,
      duration: 400,
    }).start();
    setIsTrue(true);
  };

  const handleShow = () => {
    Animated.timing(transAnim, {
      toValue: 0,
      duration: 400,
    }).start();
    setIsTrue(false);
  };

  React.useEffect(() => {
    if (isTrue) {
      handleShow();
      console.log("showCalled");
    } else {
      handleHide();
      console.log("HideCalled");
    }
  }, [visibile]);

  return (
    <>
      <Animated.View
        style={{
          left: transAnim,
          position: "absolute",
          height: "100%",
          width: 300,
          top: 0,
          backgroundColor: "#fff",
          zIndex: 20,
        }}
      >
        <View style={styles.leftLideWrapper}>
          <View style={styles.content}>
            <TouchableOpacity onPress={handleHide}>
              <View style={styles.buttonBehave}>
                <Text style={styles.text}>Show All</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttonBehave}>
              <Text style={styles.text}>Cars</Text>
            </View>
            <View style={styles.buttonBehave}>
              <Text style={styles.text}>Bikes</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  leftLideWrapper: {
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 100,
    padding: 10,
  },
  buttonBehave: {
    width: "100%",
    backgroundColor: "#f2f5f4",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default LeftSlide;
