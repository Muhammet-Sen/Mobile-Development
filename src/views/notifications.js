import React, {useState} from "react";
import {Alert, ScrollView, Text, View} from "react-native";
import data from "../../data/controls.json";
import TextField from "../components/TextField";
import Choice from "../components/Choice";
import SelectedItems from "../components/SelectedItems";
import UploadButton from "../components/UploadButton";
import ModalComponent from "../components/ModalComponent";


const Notifications = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(null);
    const [keys, setKeys] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [selectedLang, setSelectedLang] = useState(null); 
    const [selectedMulti, setSelectedMulti] = useState([]);
    const [isValid, setIsValid] = useState(true);
    const [email, setEmail] = useState("");

    const handleModalClick = (params) => {
        setModalVisible(true);
        let values = Object.values(params.items).map((item) => {
            return item;
        });
        setValue(values);
        let keys = Object.keys(params.items).map((item) => {
            return item;
        });
        setKeys(keys);
        params.multiple ? setMultiSelect(true) : setMultiSelect(false);
    };
    const handleSelect = (...item) => {
        let selectedLang;
        if (!multiSelect) {
            selectedLang = {
                key: item[0],
                value: item[1],
            };
            setSelectedLang(selectedLang);
            setModalVisible(false);
        } else {
            let existItem = selectedMulti.find((x) => x === item[1]);
            if (existItem) {
                return { ...selectedMulti };
            } else {
                return setSelectedMulti((selectedMulti) => [...selectedMulti, item[1]]);
            }
        }
    };
    const handleClick = () => {
        if (!selectedLang || selectedMulti.length === 0 || email === "" ) {
            Alert.alert("Lütfen, tüm alanları doldurunuz");
        } else {
            if (!isValid) {
                Alert.alert("Geçersiz Email adresi!");
            } else {
                console.log(selectedLang, selectedMulti, "email:" + email);
                Alert.alert("Talebiniz Alındı.")
                setSelectedMulti([]);
                setSelectedLang(null);
                setEmail("");
            }
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: "center",marginTop:50 }}>
            <ScrollView>
                <View>
                    <Text style={{ marginLeft: 40 ,marginRight:40}}>Fırsatlardan anında haberdar olmak için formu
                        doldurup abone olabilirsiniz. </Text>
                    <Text></Text>
                    {data.controls.map((item, index) => {
                        return item.type === "input" ? (
                            <View
                                key={index}
                                style={{ justifyContent: "center", alignItems: "center" }}
                            >
                                <TextField
                                    item={item}
                                    isValid={isValid}
                                    setIsValid={setIsValid}
                                    email={email}
                                    setEmail={setEmail}
                                />
                            </View>
                        ) : (
                            item.type === "choice" && (
                                <View
                                    key={index}
                                    style={{ justifyContent: "center", alignItems: "center" }}
                                >
                                    <Text></Text>
                                    <Choice item={item} handleModalClick={handleModalClick} />
                                </View>
                            )
                        );
                    })
                    }
                    <View style={{ marginLeft: 40 }}>
                        {selectedLang && (
                            <Text style={{ fontSize: 18 }}>
                                {selectedLang.value}, avantajları sizi bekliyor.
                            </Text>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        backgroundColor: "#ededed",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 30,
                    }}
                >
                    {selectedMulti &&
                    selectedMulti.map((i, index) => {
                        return (
                            <SelectedItems
                                item={i}
                                key={index}
                                setSelectedMulti={setSelectedMulti}
                                selectedMulti={selectedMulti}
                            />
                        );
                    })}
                </View>
                <UploadButton
                    handleClick={handleClick}
                />
                <ModalComponent
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                    value={value}
                    keys={keys}
                    handleSelect={handleSelect}
                />
            </ScrollView>
        </View>
    );
}
export default Notifications;

