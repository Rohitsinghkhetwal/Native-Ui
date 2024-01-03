import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import data from "./Vehical/Vehcial.json";

import arrow from "./icons/left-arrow.png";
import dots from "./icons/dots.png";
import imge_v1 from "./Vehicals/v-1.png";
import imge_v2 from "./Vehicals/v-2.png";
import imge_v3 from "./Vehicals/v-3.png";
import imge_v4 from "./Vehicals/v-4.png";


const InfoScreen = ({ route, navigation }) => {
  const Vehicles = data.vehicles.filter((element) => element.id == route.params.id )
 

  const GetImage = (Id) => {
    if (Id == 1) return imge_v1;
    if (Id == 2) return imge_v2;
    if (Id == 3) return imge_v3;
    if (Id == 4) return imge_v4;
  };

  console.log("I am the one", Vehicles[0].make);
 
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={arrow}
            resizeMode="contain"
            style={styles.arrowStyling}
          />
          <Text style={styles.txt}>Details</Text>
          <Image
            source={dots}
            resizeMode="contain"
            style={styles.dotsStyling}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={GetImage(route.params.id)}
            resizeMode="contain"
            style={styles.imageStyling}
          />
        </View>

        <View style={styles.descSection}>
          <View style={styles.textPallet}>
            <Text style={styles.modelText}>
              {Vehicles[0].make} {Vehicles[0].model}
            </Text>

            <Text style={styles.topText}>
              <Text style={styles.innerText}>
                ${Vehicles[0].price_per_day}/day
              </Text>
            </Text>
          </View>
          <Text style={styles.modelTop}>
            {Vehicles[0].type} {Vehicles[0].transmission}
          </Text>
          <Text style={styles.desciption}>{Vehicles[0].description}</Text>
          <Text style={styles.propTxt}>Properties</Text>
          <View style={styles.main}>
            <View style={styles.subContainer}>
              <Text style={styles.header}>
                Motor Power: {Vehicles[0].properties.motor_power_hp}
              </Text>
              <Text style={styles.subheader}>
                Fuel: {Vehicles[0].properties.fuel_type}
              </Text>
            </View>

            <View style={styles.markTwo}>
              <Text style={styles.header}>Engine Capacity: {Vehicles[0].properties.engine_capacity_cc} </Text>
              <Text style={styles.subheader}>Traction: {Vehicles[0].properties.traction} </Text>
            </View>

            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Saved")}>
              <Text style={styles.simon}>Rent a Car </Text>


            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    paddingHorizontal: 25,
  },
  txt: {
    fontSize: 16,
    fontWeight: "500",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  arrowStyling: {
    width: 25,
  },
  dotsStyling: {
    width: 25,
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 220,
    width: "90%",
  },
  imageStyling: {
    height: 200,
    width: "100%",
  },
  textPallet: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#696969",
  },
  innerText: {
    fontWeight: "800",
  },
  modelText: {
    fontSize: 19,
    fontWeight: "600",
  },
  modelTop: {
    fontSize: 13,
    fontWeight: "600",
  },
  desciption: {
    fontSize: 14,
    color: "#696969",
    fontWeight: "600",
    marginTop: 20,
    letterSpacing: 0.1,
  },
  propTxt: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  subContainer: {
    marginBottom: 30,
    marginTop: 5,
  },
  header: {
    fontSize: 13,
    fontWeight: "600",
    color: "#696969",
    marginBottom: 2,
  },
  subheader: {
    fontSize: 13,
    fontWeight: "600",
    color: "#696969",
    marginBottom: 2,
  },
  btnContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  simon: {
    color: 'white',
    fontWeight: "600"
  }
});

export default InfoScreen