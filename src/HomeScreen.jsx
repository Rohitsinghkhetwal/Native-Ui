import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Platform, Image, TextInput , ScrollView, TouchableOpacity} from "react-native";
import data from './Vehical/Vehcial.json';
import face from "./icons/face.png";
import menu from "./icons/menu.png";
import Glass from "./icons/magnifying-glass.png";

import imge_v1 from "./Vehicals/v-1.png";
import imge_v2 from "./Vehicals/v-2.png";
import imge_v3 from "./Vehicals/v-3.png";
import imge_v4 from "./Vehicals/v-4.png";

const HomeScreen = ({ navigation }) => {
  const [Vehicles, setVehicles] = useState(data.vehicles);
  const [filter, setfilter] = useState(data.vehicles);

  const GetImage = (Id) => {
    if (Id == 1) return imge_v1;
    if (Id == 2) return imge_v2;
    if (Id == 3) return imge_v3;
    if (Id == 4) return imge_v4;
  }

  const searchInput = (input) => {
    const SmallCase = input.toLowerCase();
    const result = Vehicles.filter((items) => (
      items.make.toLowerCase().includes(SmallCase)
    ))
    console.log("this is my fav console", result);
    setfilter(result);
  }

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={menu}
            resizeMode="contain"
            style={styles.menuStyling}
          />
          <Image
            source={face}
            resizeMode="contain"
            style={styles.faceStyling}
          />
        </View>

        <View style={styles.TitleSection}>
          <Text style={styles.titleTxt}>Rent a Car</Text>
        </View>
        <View style={styles.SearchSection}>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => searchInput(text)}
            />
            <View style={styles.img}>
              <Image
                source={Glass}
                resizeMode="contain"
                style={styles.magnifying_glass}
              />
            </View>
          </View>
        </View>
        <View style={styles.TypesSection}>
          <Text style={styles.textActive}>All</Text>
          <Text style={styles.textType}>Suv</Text>
          <Text style={styles.textType}>Sedan</Text>
          <Text style={styles.textType}>Mpv</Text>
          <Text style={styles.textType}>Hatchback</Text>
        </View>

        <View style={styles.ListSection}>
          <Text style={styles.textSection}>Most Rented</Text>

          <ScrollView style={styles.elementPallet}>
            {filter.map((items) => (
              <TouchableOpacity style={styles.element} 
              key={items.id}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Info', {id: items.id})}
              >
                <View style={styles.infoArea}>
                  <Text style={styles.infoName}>
                    {items.make} {items.model}
                  </Text>
                  <Text style={styles.infoSub}>
                    {items.type} {items.transmission}
                  </Text>
                  <Text style={styles.infoPrice}>
                    ${items.price_per_day}/day
                  </Text>
                </View>
                <View style={styles.ImageContainer}>
                  <Image
                    source={GetImage(items.id)}
                    resizeMode="contain"
                    style={styles.images}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    paddingHorizontal: 25,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  menuStyling: {
    width: 30,
  },
  faceStyling: {
    width: 40,
  },
  TitleSection: {
    marginTop: 15,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: "600",
  },
  // searchBar styling

  SearchSection: {
    marginTop: 20,
  },
  searchBox: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
  },
  magnifying_glass: {
    height: 40,
    width: 40,
  },
  searchInput: {
    width: 290,
    height: 40,
  },

  // listing
  TypesSection: {
    marginTop: 20,
    flexDirection: "row",
  },
  textActive: {
    fontSize: 15,
    marginRight: 25,
    fontWeight: "bold",
    color: "black",
  },
  textType: {
    fontSize: 15,
    marginRight: 30,
    fontWeight: "500",
    color: "#696969",
  },
  //Car listing
  ListSection: {
    marginTop: 20,
  },
  textSection: {
    fontSize: 16,
    fontWeight: "500",
  },

  images: {
    height: 65,
    width: 120,
  },
  elementPallet: {
    height: 500,
    width: "100%",
    marginTop: 20,
    
  },
  element: {
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 20,
    padding: 20,
    marginBottom: 13,
    elevation: 5
  },
  infoArea: {
    flex: 1,
  },
  infoName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 10,
    fontWeight: "400"
  },
  infoPrice: {
    fontSize: 10,
    fontWeight: "600",
    position: 'absolute',
    bottom: -5,
    color: "#696969"
  }
});

export default HomeScreen;
