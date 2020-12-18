import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { Image } from "react-native";
import { InAppBrowser } from "react-native-inappbrowser-reborn";
import { BaseConfig } from "../../base/dto/BaseConfig";
import { useTracked } from "../../base/utils/context";
import theme from "../../theme/theme";
import Box from "../components/box";
import BoxCenter from "../components/box-center";
import Toast from "react-native-toast-message";

import {
  Browser,
  Bus,
  Cctv,
  Logout,
  OpenBook,
  RoadSign,
  Shop,
} from "../components/icons";
import ProfilePhoto from "../components/profile-photo";
import { SidemenuItem } from "../components/side-menu-item";
import Text from "../components/text";
import TouchableButton from "../components/touchable-button";
import UserService from "../services/UserService";

export default function DrawerContent({ navigation }) {
  const _UserService = new UserService();
  const [state, dispatch] = useTracked();
  const noPhoto = require("../../assets/nouser.png");

  const removeUser = async () => {
    await _UserService.removeStorage(BaseConfig.APP_USER_STORAGE_NAME);
    dispatch({ IsLoggedIn: false, UserInfo: null, User: null });
    navigation.closeDrawer();
    Toast.show({
      type: "success",
      position: "bottom",
      visibilityTime: 5000,
      text1: "Çıkış Yaptınız",
      text2:
        "Başarıyla Çıkış Yaptınız",
    });
   navigation.navigate("Profile");
    
  };

  return (
    <DrawerContentScrollView>
      <BoxCenter
        as={TouchableButton}
        onPress={() => navigation.navigate("Profile")}
        py={20}
      >
        <Box>
          {state.IsLoggedIn ? (
            state.UserInfo?.Photo ? (
              <ProfilePhoto
                height={115}
                width={115}
                source={{ uri: state.UserInfo?.Photo }}
              />
            ) : (
              <ProfilePhoto height={115} width={115} source={noPhoto} />
            )
          ) : (
            <ProfilePhoto height={115} width={115} source={noPhoto} />
          )}
        </Box>
        <Text
          pt={20}
          fontSize={18}
          fontFamily="semibold"
          color={theme.colors.black}
        >
          {state.IsLoggedIn ? state.UserInfo?.Name + ' ' + state.UserInfo?.Surname : "GİRİŞ YAP"}
        </Text>
      </BoxCenter>
      <Box flex={1}>
        <SidemenuItem
          onPress={() => navigation.navigate("Campaign")}
          title="İndirimli İşletmeler"
          icon={<Shop width={30} height={30} />}
        ></SidemenuItem>
        <SidemenuItem
          onPress={() => navigation.navigate("CityGuide")}
          title="Alanya Rehberi"
          icon={<RoadSign width={30} height={30} />}
        ></SidemenuItem>
        <SidemenuItem
          onPress={() => navigation.navigate("BusTime")}
          title="Otobüs Saatleri"
          icon={<Bus width={30} height={30} />}
        ></SidemenuItem>
        <SidemenuItem
          onPress={() => navigation.navigate("CityCamera")}
          title="Şehir Kameraları"
          icon={<Cctv width={30} height={30} />}
        ></SidemenuItem>
        <SidemenuItem
          onPress={() =>
            InAppBrowser.open(
              "https://www.alanya.bel.tr/Documents/Ogrenci_Rehberi/Mobile/"
            )
          }
          title="Öğrenciler İçin Rehber"
          icon={<OpenBook width={30} height={30} />}
        ></SidemenuItem>
        <SidemenuItem
          onPress={() => console.log("İş Başvuruları")}
          title="İş Başvuruları"
          icon={<Browser width={30} height={30} />}
        ></SidemenuItem>
        {state.IsLoggedIn && (
          <SidemenuItem
            onPress={removeUser}
            title="Çıkış Yap"
            icon={<Logout width={30} height={30} />}
          ></SidemenuItem>
        )}
      </Box>

      <BoxCenter py={20}>
        <Box
          style={{
            height: 80,
            opacity: 0.6,
          }}
          as={Image}
          resizeMode="contain"
          source={require("../../assets/belediye-logo.png")}
        />
        <Text
          style={{
            opacity: 0.6,
          }}
        >
          ALANYA BELEDİYESİ
        </Text>

        <Box
          as={Image}
          style={{
            opacity: 0.6,
            width: 180,
            height: 40,
          }}
          resizeMode="center"
          source={require("../../assets/logo.png")}
        />

        <Box
          as={TouchableButton}
          onPress={() => InAppBrowser.open("https://www.tulparyazilim.com.tr")}
        >
          <Image
            style={{
              width: 80,
              opacity: 0.6,
            }}
            resizeMode="contain"
            source={require("../../assets/tulpar-logo.png")}
          />
        </Box>
      </BoxCenter>
    </DrawerContentScrollView>
  );
}
