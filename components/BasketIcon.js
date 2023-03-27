import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectBesketItems, selectBasketTotal } from "../featured/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBesketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basketTotal} EUR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
