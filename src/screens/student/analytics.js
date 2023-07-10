import {
  LineChart,
  BarChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { VictoryPie } from "victory-native";
import { useGetTransactionQuery } from "../../store/apiSlice";

export function Analytics() {
  const [exp, setExp] = useState(false);
  const [income, setIncome] = useState(false);
  const [hidePie, setPie] = useState(true);
  const [expIncome, setExpIncome] = useState(false);
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);
  //const studentId = useSelector((state) => state.auth.user.id);
  const studentId = 6314434;
  const { data, isLoading, error } = useGetTransactionQuery(studentId);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
  const wantedGraphicData = [
    { x: "Expenses", y: 95 },
    { x: "Income", y: 90 },
  ];

  const defaultGraphicData = [
    { x: "Liquid", y: 95 },
    { x: "Iced", y: 90 },
  ];
 
  // const Expense = [
  //   {
  //     key: "1",
  //     userName: "Food",
  //     iconName: "fastfood",
  //     amount: "$350",
  //   },
  //   {
  //     key: "2",
  //     userName: "Shopping",
  //     transactionDate: "16 April 20",
  //     amount: "$150",
  //     iconName: "shopping-bag",

  //     credit: false,
  //   },
  //   {
  //     key: "3",
  //     iconName: "movie",
  //     userName: "Movie",
  //     transactionDate: "05 April 20",
  //     amount: "$364",
  //     credit: false,
  //   },
  //   {
  //     key: "4",
  //     iconName: "cleaning-services",
  //     userName: "Fixing",
  //     transactionDate: "28 March 20",
  //     amount: "$100",
  //     credit: true,
  //   },
  //   {
  //     key: "5",
  //     iconName: "",
  //     userName: "Food",
  //     transactionDate: "14 March 20",
  //     amount: "$450",
  //     credit: true,
  //   },
  //   {
  //     key: "6",
  //     iconName: "",
  //     userName: "Food",
  //     transactionDate: "05 March 20",
  //     amount: "$288",
  //     credit: true,
  //   },
  //   {
  //     key: "7",
  //     iconName: "",
  //     userName: "Food",
  //     transactionDate: "03 March 20",
  //     amount: "$350",
  //     credit: false,
  //   },
  //   {
  //     key: "8",
  //     iconName: "",
  //     userName: "Food",
  //     transactionDate: "01 March 20",
  //     amount: "$350",
  //     credit: true,
  //   },
  // ];
  // //const Income = [
  //   {
  //     key: "1",
  //     userName: "Dad",
  //     iconName: "family-restroom",
  //     amount: "$250",
  //     credit: true,
  //   }, //   movie
  //   {
  //     key: "2",
  //     userName: "Monthly Allowance",
  //     transactionDate: "16 April 20",
  //     amount: "150",
  //     iconName: "attach-money",

  //     credit: true,
  //   },
  //   {
  //     key: "3",
  //     iconName: "money",
  //     userName: "Relatives",
  //     transactionDate: "05 April 20",
  //     amount: "$364",
  //     credit: true,
  //   },
  //   {
  //     key: "4",
  //     iconName: "cleaning-services",
  //     userName: "Fixing",
  //     transactionDate: "28 March 20",
  //     amount: "$100",
  //     credit: true,
  //   },
  // //];

  const transactions = data.data;
  const Income = transactions.filter((x) => x.credit === true);
  const Expense = transactions.filter((x) => x.credit === false);

  const IncomeMonth = [];
  const Incomedate = [];

  const ExpMonth = [];
  const Expdate = [];

  function getDate(data, pushData) {
    data.filter((x) => {
      pushData.push(x.transactionDate.slice(0, 2));
    });
    //    console.log(pushData);
  }
  function getMonth(data, pushData) {
    data.filter((x) => {
      pushData.push(x.transactionDate.slice(3, 8));
    });
    //  console.log(pushData);
  }
  getDate(Income, Incomedate);
  getDate(Expense, Expdate);

  getMonth(Income, IncomeMonth);
  getMonth(Expense, ExpMonth);

function getUnique(Income, comp) {
  const noteAmountMap = Income.reduce((map, item) => {
    const { note, amount } = item;
    map[note] = (map[note] || 0) + parseInt(amount.substring(1)); // Parse and add the amount
    return map;
  }, {});
  
  const uniqueNotes = Object.keys(noteAmountMap);
  
  const mergedObjects = uniqueNotes.map(note => {
    const matchingObjects = Income.filter(item => item.note === note);
    const mergedAmount = matchingObjects.reduce((sum, obj) => sum + parseInt(obj.amount.substring(1)), 0);
    return { note, amount: `${mergedAmount}`, userName: matchingObjects[0].userName };
  });
return mergedObjects;
}
function getUniqueMonth(Income) {
  console.log(Income);
  const noteAmountMap = Income.reduce((map, item) => {
    const { transactionDate, amount } = item;
    console.log(transactionDate);
    map[transactionDate] = (map[transactionDate] || 0) + parseInt(amount.substring(1)); // Parse and add the amount
    return map;
  }, {});
  
  const uniqueNotes = Object.keys(noteAmountMap);
  
  const mergedObjects = uniqueNotes.map(transactionDate => {
    const matchingObjects = Income.filter(item => item.transactionDate === transactionDate);
    const mergedAmount = matchingObjects.reduce((sum, obj) => sum + parseInt(obj.amount.substring(1)), 0);
    return { transactionDate, amount: `${mergedAmount}`, userName: matchingObjects[0].transactionDate };
  });
return mergedObjects;
}
const uniqMonth=getUniqueMonth(Income)
console.log(uniqMonth);
  const mergedObjects=getUnique(Income)
  const mergedObjects2=getUnique(Expense)

  console.log(mergedObjects);


  const linedata = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        data: [90, 45, 28, 80, 90, 43],
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View>
      {hidePie ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <VictoryPie
            animate={{ easing: "exp" }}
            data={graphicData}
            innerRadius={30}
            width={390}
            height={220}
            style={{
              data: {
                fillOpacity: 1,
                color: "#FFF",
                strokeWidth: 2,
              },
              labels: {
                fill: "#000",
              },
            }}
            colorScale={[COLORS.purple, COLORS.green]}
          />
        </View>
      ) : null}
      {exp ? (
        <LineChart
          data={linedata}
          width={Dimensions.get("window").width} // from react-native
          height={190}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {},
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 0,
          }}
        />
      ) : null}
      {income ? (
        <LineChart
          data={linedata}
          width={Dimensions.get("window").width} // from react-native
          height={190}
          chartConfig={{
            backgroundGradientFrom: "#eee",
            backgroundGradientTo: "#eee",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 0,
              marginVertical: 0,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 0,
          }}
        />
      ) : null}
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => {
            setExpIncome(true);
            setExp(true);
            setPie(false);
            setIncome(false);
          }}
        >
          <Text style={styles.bodyTxt}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setExpIncome(false);
            setIncome(true);
            setPie(false);
            setExp(false);
          }}
        >
          <Text style={styles.bodyTxt}>Income</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {expIncome ? (
            <View style={styles.card}>
              <FlatList
                data={mergedObjects2}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <Item data={item} color={styles.PanelRed} />
                )}
              />
            </View>
          ) : (
            <View style={styles.card}>
              <FlatList
                data={mergedObjects}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <Item data={item} color={styles.PanelImage} />
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    width: "100%",
  },
  bodyTxt: {
    paddingBottom: 16,
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 2,
  },
  card: {
    padding: 10,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: "#666",
    padding: 16,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  PanelImage: {
    width: 35,
    height: 35,
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: COLORS.emerald,
  },
  PanelRed: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: COLORS.red,
  },
});

function Item(props) {
  const item = props.data;
  const Colorss = props.color;
  return (
    <View style={styles.PanelItemContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 10 }}>
          <MaterialIcons
            name="settings-input-component"
            //  name={item.iconName}
            color={"#fff"}
            padding={7}
            size={23}
            style={Colorss}
          />
        </View>
        {/* this ia the text container */}
        <View>
          <Text style={{ fontSize: 17, color: "#000" }}>{item.note}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#000", marginHorizontal: 2 }}>
          {item.amount}
        </Text>

        {item.credit ? (
          <MaterialIcons name="arrow-drop-up" size={22} color="green" />
        ) : (
          <MaterialIcons name="arrow-drop-down" size={22} color="#ff3838" />
        )}
      </View>
    </View>
  );
}
