import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`;
        const getCountries = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setCountries(response);
            setSearchedCountries(response)
        }; getCountries();
    }, []);

    const handleSearch = (text) => {
        const country = countries?.filter(country => country?.name?.common?.toLowerCase()?.includes(text.toLowerCase));
        setSearchedCountries(country);
    };

    return (
        <View style={{marginBottom: "10px"}}>
            <Text>Total Countries: {searchedCountries?.length}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleSearch}
            />
            <ScrollView>
                {
                    searchedCountries?.map((country, index) => <Country
                        key={index}
                        country={country}
                    />)
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
