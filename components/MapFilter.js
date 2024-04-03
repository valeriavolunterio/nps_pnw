import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Fonts } from "../styles/Fonts";

const MapFilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    parks: [],
    places: [],
    experiences: [],
    amenities: [],
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleApplyFilters = () => {
    onFilterChange(filters);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="filter" size={24} color="white" />
        <Text style={styles.filterButtonText}>Filters</Text>
      </Pressable>

      {/* Pop-up filter component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalBackground}>
          <View style={styles.modalBackground}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={styles.topBox}
            ></Pressable>

            <View>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeFilterBtn}
              >
                <Text style={styles.applyButtonText}>Close</Text>
              </Pressable>
            </View>
            <View style={styles.modalContainer}>
              <ScrollView>
                {/* PARKS */}
                <FilterSection title="Parks" style={styles.sectionHeaderText}>
                  <CheckBox style={styles.CheckBox} title="National Park" />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="National Historical Park/Site"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="National Reserve"
                  />
                </FilterSection>

                {/* PLACES */}
                {/* <FilterSection title="Places">
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Geological"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Historical"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Overlook"
                  />
                </FilterSection> */}

                {/* Experiences */}
                {/* <FilterSection title="Experiences">
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Backcountry Hiking"
                  />

                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Camping"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Climbing"
                  />
                </FilterSection> */}

                {/* Amenities */}
                {/* <FilterSection
                  title="Amenities"
                  style={styles.sectionHeaderText}
                >
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Accessibility"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Parking"
                  />
                  <CheckBox
                    value={filters.parks.includes("park")}
                    title="Public Restrooms"
                  />
                </FilterSection> */}
              </ScrollView>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.applyButton}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const FilterSection = ({ title, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.sectionHeader}
      >
        <Text style={styles.sectionHeaderText}>{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={32}
          color="black"
        />
      </TouchableOpacity>
      {expanded && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(80, 114, 87, 0.8)",
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
  },
  filterSection: {
    padding: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButtonText: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: "bold",
    color: Colors.white,
  },
  closeFilterBtn: {
    position: "absolute",
    bottom: 0,
    right: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(80, 114, 87, 0.8)",
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
  },
  closeFilterText: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: "bold",
    color: Colors.white,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
    zIndex: -99,
  },
  modalContainer: {
    backgroundColor: "#FFF9F5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "75%",
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
  },
  applyButton: {
    backgroundColor: "#507257",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 50,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    marginLeft: 10,
    backgroundColor: "#FBF3EE",
  },
  CheckBox: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  topBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export default MapFilterComponent;
