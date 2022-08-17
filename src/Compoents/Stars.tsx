import React, { useEffect, useRef, useState } from 'react';
import { Animated,  } from 'react-native';

export default () => {
    // アニメーションの進行度
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // アニメーションの無限ループ
        Animated.loop(
            Animated.parallel([
                Animated.spring(progress, { 
                    toValue: 500, // 画面の左側から500pxのところまで
                    useNativeDriver: false,
                }),
            ])
        ).start()
    }, []);

    return (
        <Animated.View 
            style={{
                width: 100,
                height: 100,
                backgroundColor: 'orange',
                transform: [{ translateX: progress }],
            }}
        />
    );
};
