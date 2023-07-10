import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { Flatlistitem } from "../../components/flatlist/flatlistitems";
import { useGetTransactionQuery } from "../../store/apiSlice";

export function Transactions({ navigation }) {
  console.log('hii');
  const { height } = Dimensions.get("window");
  //const studentId = useSelector((state) => state.auth.user.id);
const studentId = 6314434; 
  const { data, isLoading, error } = useGetTransactionQuery(studentId);
  console.log(data);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }

  const Users = data.data;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 14 }}>
      <View style={{ flex: 1 }}>
        <View style={{ height: height, paddingBottom: 10,marginBottom:50 }}>
          <FlatList
            data={Users}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return <Flatlistitem data={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}
