import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react'
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconFA from "react-native-vector-icons/FontAwesome";

import { banner1, banner2, banner3 } from "../../assets";
// import Carousel from "react-native-snap-carousel";

const Home = ({ navigation, drawer }) => {
    const [search, setSearch] = useState('')
    const onChange = (e) => {
        setSearch(e)
    }

    // const koiProducts = [
    //     {
    //         name: "hiutsuri",
    //         owner: "kimochi koi",
    //         time: "06:13:44",
    //         price: "Rp.50.000",
    //         image: koi1,
    //         video: true
    //     },
    //     {
    //         name: "showa 35cm",
    //         owner: "andre koi blitar",
    //         time: "02:13:44",
    //         price: "Rp.300.000",
    //         image: koi2,
    //         video: false
    //     },
    //     {
    //         name: "Shiro Beko",
    //         owner: "Cito koi",
    //         time: "00:33:44",
    //         price: "Rp.250.000",
    //         image: koi5,
    //         video: false
    //     },
    // ]
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={styles.notification}>
                        <Icon name="bars" size={normalize(25)} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles.searchbar}>
                    <Icon name="search" style={{ marginTop: normalize(10), marginLeft: normalize(10), marginRight: normalize(10) }} size={normalize(20)} color="#51B8DC" />
                    <TextInput style={styles.textinput} keyboardType={"default"} placeholder="Cari dropzone terdekat" defaultValue={search} onChange={onChange} />
                    <View style={styles.label}>
                        <Text>Pilih dari peta</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <ScrollView horizontal style={{ marginTop: normalize(10) }} >
                    <Image style={styles.banner} source={banner1} />
                    <Image style={styles.banner} source={banner2} />
                    <Image style={styles.banner} source={banner3} />
                </ScrollView>
                <View style={{ padding: normalize(10) }}>
                    <Text style={{ fontSize: normalize(18), fontWeight: "500" }}>Layanan</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity>
                            <View style={{ width: normalize(150), height: normalize(50), backgroundColor: "#51B8DC", alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: normalize(15) }}>
                                <Text style={{ color: "white", fontSize: normalize(16), fontWeight: "500" }}>Deep Clean</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ marginLeft: normalize(20), width: normalize(150), height: normalize(50), backgroundColor: "#51B8DC", alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: normalize(15) }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: normalize(16), fontWeight: "500" }}>Unyellowing</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <View style={{ width: normalize(150), height: normalize(50), backgroundColor: "#51B8DC", alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: normalize(15) }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: normalize(16), fontWeight: "500" }}>Repaint</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: normalize(20), width: normalize(150), height: normalize(50), backgroundColor: "#51B8DC", alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: normalize(15) }}>
                            <TouchableOpacity>
                                <Text style={{ color: "white", fontSize: normalize(16), fontWeight: "500" }}>Repair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Promosi */}
                    <View style={{ flexDirection: "row", marginTop: normalize(20), alignItems: "center" }}>
                        <Text style={{ fontSize: normalize(18), fontWeight: "500" }}>Promosi</Text>
                        <TouchableOpacity style={{ marginLeft: 'auto' }}>
                            <Text style={{ borderBottomWidth: 1, borderBottomColor: "#808080" }}>Lihat Semua {">"}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Box Slide */}
                    <View style={{ margin: normalize(15) }}>
                        <ScrollView horizontal>
                            <View style={{ width: normalize(300), height: normalize(175), alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 20, padding: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <IconFA name="ticket" size={50} />
                                    <View style={{ marginLeft: normalize(20) }}>
                                        <Text>Code: TALAS</Text>
                                        <Text>FREE WATER REPELLENT 50ML</Text>
                                        <View style={{ flexDirection: "row", marginTop: normalize(20) }}>
                                            <Icon name="wallet" size={15} />
                                            <Text style={{ marginLeft: normalize(10) }}>Diskon 1</Text>
                                            <Icon style={{ marginLeft: normalize(20) }} name="clock" size={15} />
                                            <Text style={{ marginLeft: normalize(10) }}>31 Jul 2022</Text>
                                        </View>
                                        <View style={{ width: normalize(100), height: normalize(30), marginTop: normalize(20), marginLeft: 'auto', backgroundColor: "red", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                            <TouchableOpacity>
                                                <Text style={{ color: "white" }}>Salin</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: normalize(20), width: normalize(300), height: normalize(175), alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 20, padding: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <IconFA name="ticket" size={50} />
                                    <View style={{ marginLeft: normalize(20) }}>
                                        <Text>Code: TALAS</Text>
                                        <Text>FREE WATER REPELLENT 50ML</Text>
                                        <View style={{ flexDirection: "row", marginTop: normalize(20) }}>
                                            <Icon name="wallet" size={15} />
                                            <Text style={{ marginLeft: normalize(10) }}>Diskon 1</Text>
                                            <Icon style={{ marginLeft: normalize(20) }} name="clock" size={15} />
                                            <Text style={{ marginLeft: normalize(10) }}>31 Jul 2022</Text>
                                        </View>
                                        <View style={{ width: normalize(100), height: normalize(30), marginTop: normalize(20), marginLeft: 'auto', backgroundColor: "red", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                            <TouchableOpacity>
                                                <Text style={{ color: "white" }}>Salin</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: normalize(55),
        backgroundColor: "white",
        padding: normalize(10),
        flexDirection: "row",
    },
    searchbar: {
        width: normalize(280),
        backgroundColor: "#dfdfdf",
        borderRadius: 10,
        marginLeft: normalize(30),
        height: normalize(40),
        paddingLeft: normalize(10),
        flexDirection: "row",
    },
    label: {
        width: normalize(50),
        backgroundColor: "#51B8DC",
        alignItems: "center",
        justifyContent: "center"
    },
    textinput: {
        width: normalize(300),
        height: normalize(40)
    },
    notification: {
        marginLeft: normalize(10),
        marginRight: normalize(10),
        marginTop: normalize(8)
    },
    icon: {
        width: normalize(30),
        height: normalize(30)
    },
    banner: {
        width: normalize(380),
        height: normalize(250)
    },
    text1: {
        color: "blue",
        marginLeft: normalize(10)
    },
    text2: {
        color: "red",
        marginLeft: normalize(10)
    },
    text3: {
        color: "orange",
        marginLeft: normalize(10)
    },
    text4: {
        color: "green",
        marginLeft: normalize(10)
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    pagination: {
        paddingLeft: normalize(10),
        paddingRight: normalize(10),
        flexDirection: "row"
    }
})

export default Home;