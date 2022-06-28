import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import { logo } from '../assets'
import Home from '../pages/Home'
import { MyTabs } from './Bottomtabs'

const Sidebar = () => {
    const Drawer = createDrawerNavigator()

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView>
                <View style={{ padding: normalize(20), alignItems: "center", justifyContent: "center" }}>
                    <Image source={logo} style={{ width: normalize(100), height: normalize(100) }} />
                </View>
                <View style={{ paddingLeft: normalize(20) }}>
                    <Text>Login atau buat akun baru</Text>
                    <View style={{ flexDirection: "row", marginTop: normalize(20) }}>
                        <View style={{ width: normalize(100), height: normalize(35), backgroundColor: "#1693BF", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Icon name='sign-in' color={"white"} size={15} />
                                <Text style={{ color: "white", marginLeft: normalize(10) }}>Masuk</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: normalize(100), height: normalize(35), backgroundColor: "#808080", borderRadius: 10, alignItems: "center", justifyContent: "center", marginLeft: normalize(10) }}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Icon name='user-plus' color={"white"} size={15} />
                                <Text style={{ color: "white", marginLeft: normalize(10) }}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <View style={{ marginTop: normalize(30), flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Icon name='home' size={normalize(25)} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: normalize(20), marginLeft: normalize(20) }}>Beranda</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Icon5 name='clipboard-list' size={normalize(25)} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Pesanan</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                            <Icon5 name='bell' size={normalize(25)} />
                            <Text style={{ fontSize: normalize(20), marginLeft: normalize(22) }}>Notifikasi</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                            <Icon name='ticket' size={normalize(25)} />
                            <Text style={{ fontSize: normalize(20), marginLeft: normalize(19) }}>Promo</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "#808080", fontSize: normalize(18), fontWeight: "500" }}>Preferensi</Text>
                        <View style={{ width: normalize(25), backgroundColor: "#808080", height: normalize(5), marginLeft: 'auto', marginRight: normalize(10) }} />
                    </View>

                    <View style={{ marginTop: normalize(10) }}>
                        <TouchableOpacity>
                            <View style={{ marginTop: normalize(10), flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Icon5 name='user' size={normalize(25)} />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Akun</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Icon name='cog' size={normalize(25)} />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Pengaturan</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: "#808080", fontSize: normalize(18), fontWeight: "500" }}>Bantuan & Privasi</Text>
                        <View style={{ width: normalize(25), backgroundColor: "#808080", height: normalize(5), marginLeft: 'auto', marginRight: normalize(10) }} />
                    </View>

                    <View style={{ marginTop: normalize(10) }}>
                        <TouchableOpacity>
                            <View style={{ marginTop: normalize(10), flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Icon5 name='question-circle' size={normalize(25)} />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Hubungi CS Kami</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Icon5 name='info-circle' size={normalize(25)} />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Ketentuan Umum</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginTop: normalize(20), flexDirection: "row", alignItems: "center" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Icon5 name='shield-alt' size={normalize(25)} />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ fontSize: normalize(20), marginLeft: normalize(25) }}>Kebijakan Privasi</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Home' component={MyTabs} options={{ drawerLabel: "Beranda" }} />
        </Drawer.Navigator>
    )
}

export { Sidebar }