<Text style={styles.alertHeaderText}>Active Alerts</Text>
{parksAndAlerts
  .filter(({ alert }) => alert) // Filter parks with active alerts
  .slice(0, 3) // Limit to a maximum of 3 parks
  .map(({ park, alert }) => (
    <View key={park.id} style={styles.alertItem}>
      {alert.description.toLowerCase().includes("close") ? (
        <Ionicons name="ios-warning" size={24} color={Colors.red} />
      ) : (
        <Ionicons name="ios-alert" size={24} color={Colors.yellow} />
      )}
      <View style={styles.alertTextContainer}>
        <Text style={Fonts.header4}>{park.fullName}</Text>
        {alert && <Text>{alert.title}</Text>}
      </View>
    </View>
  ))}
</View> */}