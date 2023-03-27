import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 6000)
    }, [])


  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/speed.gif")}
        animation="slideInUp"
        interationCount={1}
        className="h-64 w-64"
      />

      <Animatable.Text
        animation="slideInUp"
        interationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Wainting for restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
