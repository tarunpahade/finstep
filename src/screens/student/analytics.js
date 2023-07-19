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
import { VictoryLabel, VictoryPie } from "victory-native";
import { useGetAnalyticsQuery, useGetTransactionQuery } from "../../store/apiSlice";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Pie } from "react-chartjs-2";

export function Analytics() {
  const [exp, setExp] = useState(false);
  const [savings, setSavings] = useState(false);

  const [income, setIncome] = useState(false);
  const [hidePie, setPie] = useState(true);
  const [expIncome, setExpIncome] = useState(false);
  const studentId=useSelector((state) => state.account.account.userId) 
  console.log(studentId,'this is student id');
  
  
  const { data, isLoading, error } = useGetAnalyticsQuery(studentId);

  const socket = io("https://backend-5ig7.onrender.com/");

  useEffect(() => {
    

    socket.on('ApproveTask', (approveTask) => {
if(JSON.parse(approveTask.studentId)===current){
      refetch()

    }
    });
    return () => {
      socket.off('ApproveTask');
    };
  }, []);

    if (isLoading) {
    return  <ActivityIndicator size={'large'} style={{flex:1}} />
  }
  if (error) {
    return <Text>Error{error.error}</Text>;
  }
const { ExpSum,IncSum,SavingsSum,totalAmt,totalAmt2,totalAmt3,uniquemonth,uniquemonth2,uniquemonth3,mergedObjects,mergedObjects2,mergedObjects3,allMerged }=data.data


const wantedGraphicData = [

  { x: `Income ${IncSum}`, y: IncSum},


  { x: `Exp:${ExpSum}`, y: ExpSum},


  { x: `Savings: ${SavingsSum}`, y: SavingsSum},


];
//for income
  const linedata = {
    labels: uniquemonth,
    datasets: [
      {
        data: totalAmt,
        strokeWidth: 2, // optional
      },
      // {
      //   data: totalAmt2,
      //   strokeWidth: 2, // optional
      //   stroke: "#FF0000",
      // },
    ],
  };
  const linedata2 = {
    labels: uniquemonth2,
    datasets: [
      {
        data: totalAmt2,
        strokeWidth: 2, // optional
      },
    ],
  };
  const linedata3 = {
    labels: uniquemonth3,
    datasets: [
      {
        data: totalAmt3,
        strokeWidth: 2, // optional
      },
    ],
  }
  return (
    <View>
      {hidePie ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <VictoryPie
            animate={{ easing: "exp" }}
            data={wantedGraphicData}
            innerRadius={30}
            width={395}
            height={250}
            labelRadius={80} 
            labels={({ datum }) => `${datum.x}`}
          labelPosition={({ index }) => index ? "centroid" : "start"}

            style={{
              data: {
                fillOpacity: 1,
                color: "#FFF",
                strokeWidth: 2,
              },
              labels: {
                fill: "blue",
                
              },
            }}
            colorScale={[COLORS.purple, COLORS.green,COLORS.yellow]}
          />
        </View>
      ) : null}
      {exp ? (
        <LineChart
          data={linedata2}
          width={Dimensions.get("window").width} // from react-native
          height={190}
          chartConfig={{
            backgroundGradientFrom: "#eee",
            backgroundGradientTo: "#eee",
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
      {savings ? (
        <LineChart
          data={linedata3}
          width={Dimensions.get("window").width} // from react-native
          height={190}
          chartConfig={{
            backgroundGradientFrom: "#eee",
            backgroundGradientTo: "#eee",
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
      <View style={styles.body}>
     
      <TouchableOpacity
          onPress={() => {
           setSavings(false);
            setExp(false);
            setPie(true);
            setIncome(false);
          }}
        >
          {hidePie ? (
            <Text style={[styles.bodyTxt]}>Overall</Text>

          ) : (
            <Text style={[styles.bodyTxt,{borderBottomColor:'#eee'}]}>Overall</Text>


          ) }
        </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {
           
            setExp(true);
            setPie(false);
            setIncome(false);
          setSavings(false);

          }}
        >
        {exp ? (
          <Text style={[styles.bodyTxt]}>Expense</Text>

        ) : (
          <Text style={[styles.bodyTxt,{borderBottomColor:'#eee'}]}>Expense</Text>


        ) }
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            
            setIncome(true);
            setPie(false);
            setExp(false);
          setSavings(false);

          }}
        >
        {income ? (
          <Text style={styles.bodyTxt}>Income</Text>
        ) : (
          <Text style={[styles.bodyTxt,{borderBottomColor:'#eee'}]}>Income</Text>


        ) }
        
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
          
          setIncome(false);
          setPie(false);
          setExp(false);
          setSavings(true);
        }}
      >
      {savings ? (
        <Text style={styles.bodyTxt}>Savings</Text>
      ) : (
        <Text style={[styles.bodyTxt,{borderBottomColor:'#eee'}]}>Savings</Text>


      ) }
      
      </TouchableOpacity>
      </View>

      <ScrollView>
        <View >
          {exp ? (
            <View style={styles.card}>
              <FlatList
                data={mergedObjects2}
                keyExtractor={() => Math.random().toString()}
                renderItem={({ item }) => (
                  <Item data={item} color={styles.PanelRed} />
                )}
              />
            </View>
          ) : null}
          {income ? (
            
              <View style={styles.card}>
                <FlatList
                  data={mergedObjects}
                  keyExtractor={() => Math.random().toString()}
                  renderItem={({ item }) => (
                    <Item data={item} color={styles.PanelImage} />
                  )}
                />
              </View>
          ) : null}
          {savings ? (
            <View style={styles.card}>
              <FlatList
                data={mergedObjects3}
                keyExtractor={() => Math.random().toString()}
                renderItem={({ item }) => (
                  <Item data={item} color={styles.PanelImage} />
                )}
            />
            </View>
          ) : null
          }
          {hidePie ? (
            <View style={styles.card}>
              <FlatList
                data={allMerged}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <Item data={item} color={styles.PanelImage} />
                )}
            />
            </View>
          ) : null
          }
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
    marginBottom: '100%',
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
  const Colorss = props.color

  const credit=item.credit
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
          <MaterialIcons name='arrow-drop-up' size={22} color='green' />

        ) : (
          <MaterialIcons name='arrow-drop-down' size={22} color='#ff3838' />
        )}
      </View>
    </View>
  );
}
