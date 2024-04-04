import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/SpotifyCover.png")}
        style={{
          width: "100%",
          height: "50%",
          justifyContent: "center",
        }}
      />
      <Image
        source={require("./assets/SpotifyLogo.png")}
        style={{
          width: 53,
          height: 53,
          justifyContent: "center",
          zIndex: 999,
          marginTop: 340,
          position: "absolute",
        }}
      />
      <View style={styles.signUpContainer}>
        <Text
          style={{
            color: "#fff",
            width: 200,
            height: 65,
            textAlign: "center",
            fontSize: 24,
            fontWeight: "700",
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          Millions of Songs. Free on Spotify.
        </Text>
        <TouchableOpacity style={styles.signUpButton}>
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Sign Up Free
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 337,
            height: 40,
            background: "#121212",
            borderRadius: 45,
            border: "1px solid #fff",
            borderColor: "#fff",
            borderWidth: 1,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 337,
            height: 40,
            background: "#121212",
            borderRadius: 45,
            border: "1px solid #fff",
            borderColor: "#fff",
            borderWidth: 1,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 337,
            height: 40,
            background: "#121212",
            borderRadius: 45,
            border: "1px solid #fff",
            borderColor: "#fff",
            borderWidth: 1,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 337,
            height: 49,
            background: "#121212",
            borderRadius: 45,
            border: "1px solid #fff",
            borderColor: "#fff",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='inverted' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
  },
  signUpContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#1ED760",
    width: 337,
    height: 40,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
});
