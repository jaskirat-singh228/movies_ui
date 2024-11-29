import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CONTINUE_WATCH1, CONTINUE_WATCH2, CONTINUE_WATCH3, CONTINUE_WATCH4, CONTINUE_WATCH5, CONTINUE_WATCH6, CONTINUE_WATCH7, CONTINUE_WATCH8, DOTS, NEXT_ARROW, PLAY } from '../../asset/Images';

const ContinueWatching = () => {
    const continueWatchigList = [
        {
            id: 1,
            name: 'Brahmastra Part One: Shiva',
            image: CONTINUE_WATCH1,
            leftTime: '22m left'
        },
        {
            id: 2,
            name: 'Salaar: Part 1 - Ceasefire',
            image: CONTINUE_WATCH2,
            leftTime: '2h 49m left'
        },
        {
            id: 3,
            name: '',
            image: CONTINUE_WATCH3,
            leftTime: '29m left'
        },
        {
            id: 4,
            name: '',
            image: CONTINUE_WATCH4,
            leftTime: '2m left'
        },
        {
            id: 5,
            name: '',
            image: CONTINUE_WATCH5,
            leftTime: '1h 23m left'
        },
        {
            id: 6,
            name: '',
            image: CONTINUE_WATCH6,
            leftTime: '2h 1m left'
        },
        {
            id: 7,
            name: '',
            image: CONTINUE_WATCH7,
            leftTime: '20m left'
        },
        {
            id: 8,
            name: '',
            image: CONTINUE_WATCH8,
            leftTime: '43m left'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hideArrow, setHideArrow] = useState(true);
    const flatListRef = useRef(null);

    const scrollToIndex = useCallback((index) => {
        if (flatListRef.current && index >= 0 && index < continueWatchigList.length) {
            flatListRef.current.scrollToIndex({ animated: true, index });
            setCurrentIndex(index);
        }
    }, [continueWatchigList.length]);

    const onPressArrow = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < continueWatchigList.length) {
            scrollToIndex(nextIndex);
        }
    };

    useEffect(() => {
        if (currentIndex !== continueWatchigList.length - 1) {
            setHideArrow(true);
        } else {
            setHideArrow(false);
        }
    }, [currentIndex, continueWatchigList.length]);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Continue Watching for Amit</Text>
                {
                    hideArrow && (
                        <TouchableOpacity
                            onPress={onPressArrow}
                            style={{ justifyContent: 'center', width: 20, alignItems: 'flex-end' }}>
                            <Image
                                source={NEXT_ARROW}
                                style={{ tintColor: 'white', height: 14, width: 14 }} />
                        </TouchableOpacity>
                    )
                }
            </View>
            <FlatList
                ref={flatListRef}
                data={continueWatchigList}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 10, marginLeft: 5, width: 200 }}>
                        <TouchableOpacity>
                            <Image
                                style={{ height: 120, width: 200, borderRadius: 4 }}
                                source={item.image}
                            />
                            <Image
                                source={PLAY}
                                style={{ tintColor: 'white', height: 15, width: 15, position: 'absolute', top: 95, left: 8 }}
                            />
                            <View style={styles.watchLineView} />
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 0.85 }}>
                                    <Text numberOfLines={1} style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>{item.name}</Text>
                                </View>
                                <View style={{ flex: 0.15 }}>
                                    <Image
                                        source={DOTS}
                                        style={{ tintColor: 'white', height: 18, width: 20 }}
                                    />
                                </View>
                            </View>
                            <Text style={{ color: 'gray', fontSize: 15, fontWeight: '500' }}>{item.leftTime}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    watchLineView: {
        height: 3,
        backgroundColor: '#0E46A3',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        marginTop: -3
    }
});

export default ContinueWatching;
