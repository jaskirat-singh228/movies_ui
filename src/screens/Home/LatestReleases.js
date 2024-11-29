import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { DOTS, LATEST_RELEASES1, LATEST_RELEASES2, LATEST_RELEASES3, LATEST_RELEASES4, LATEST_RELEASES5, LATEST_RELEASES6, LATEST_RELEASES7, LATEST_RELEASES8, NEXT_ARROW, PLAY } from '../../asset/Images';

const LatestReleases = () => {
    const continueWatchigList = [
        { id: 1, name: 'Munjya', image: LATEST_RELEASES1 },
        { id: 2, name: 'Brahmastra Part One: Shiva', image: LATEST_RELEASES2 },
        { id: 3, name: 'Salaar: Part 1 - Ceasefire', image: LATEST_RELEASES3 },
        { id: 4, name: '', image: LATEST_RELEASES4 },
        { id: 5, name: '', image: LATEST_RELEASES5 },
        { id: 6, name: '', image: LATEST_RELEASES6 },
        { id: 7, name: '', image: LATEST_RELEASES7 },
        { id: 8, name: '', image: LATEST_RELEASES8 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hideArrow, setHideArrow] = useState(true);
    const flatListRef = useRef(null);

    const scrollToIndex = useCallback((index) => {
        if (flatListRef.current && index >= 1 && index < continueWatchigList.length-1) {
            flatListRef.current.scrollToIndex({ animated: true, index });
            setCurrentIndex(index);
        } else {
            setHideArrow(false)
        }
    }, [continueWatchigList.length]);

    const onPressArrow = () => {
        const nextIndex = (currentIndex + 1) % continueWatchigList.length;
        scrollToIndex(nextIndex);
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Latest Releases</Text>
                {
                    hideArrow ?
                        <TouchableOpacity
                            onPress={onPressArrow}
                            style={{ justifyContent: 'center', width: 20, alignItems: 'flex-end' }}>
                            <Image
                                source={NEXT_ARROW}
                                style={{ tintColor: 'white', height: 14, width: 14 }} />
                        </TouchableOpacity>
                        : null
                }
            </View>
            <FlatList
                ref={flatListRef}
                data={continueWatchigList}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity>
                            <Image
                                style={styles.itemImage}
                                source={item.image}
                            />
                            <View style={styles.itemDetails}>
                                <View style={styles.itemTextContainer}>
                                    <Text numberOfLines={1} style={styles.itemText}>{item.name}</Text>
                                </View>
                                <View style={styles.dotsContainer}>
                                    <Image source={DOTS} style={styles.dotsImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
    },
    arrowButton: {
        justifyContent: 'center',
        width: 20,
        alignItems: 'flex-end',
    },
    arrowImage: {
        tintColor: 'white',
        height: 14,
        width: 14,
    },
    itemContainer: {
        marginTop: 10,
        marginLeft: 5,
    },
    itemImage: {
        height: 150,
        width: 130,
        borderRadius: 4,
    },
    itemDetails: {
        flexDirection: 'row',
        marginTop: 5,
        flex: 1,
    },
    itemTextContainer: {
        width: 120,
    },
    itemText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
    },
    dotsContainer: {
        flex: 0.2,
    },
    dotsImage: {
        tintColor: 'white',
        height: 18,
        width: 5,
    },
});

export default LatestReleases;
