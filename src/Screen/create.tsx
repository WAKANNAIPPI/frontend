import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, PanResponder, Animated } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas"

const canvasRef: any = React.createRef();

const LineComponent = (props: any) => {
    useEffect (() => {
        canvasRef.current.width =  600;
        canvasRef.current.height = 600;
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        ctx.strokeStyle = "white"
    }, []);

    const [ lineDrawFlag, setLineDrawFlag ] = useState(false);
    const [ starRedrawFlag, setStarRedrawFlag ] = useState(false);
    const [ touchedStarMarkFlag, setTouchedStarMarkFlag ] = useState(0); //タッチ時の星の有無と種類を判別フラグ
    const [ touchedStarOrder, setTouchedStarOrder ] = useState(1); //タッチ時の星の番号
    const [ stampedStarMarkFlag, setStampedStarMarkFlag ] = useState(0); //星を踏んだ時の判別フラグ
    const [ stampedStarOrder, setStampedStarOrder ] = useState(1); //星を踏んだ時の番号
    const [ lastFlag, setLastFlag ] = useState(0)
    const [ startX, setStartX ] = useState("");
    const [ startY, setStartY ] = useState("");
    const [ currentX, setCurrentX ] = useState("");
    const [ currentY, setCurrentY ] = useState("");
    const [ touchedStarIdPath, setTouchedStarIdPath ] = useState<any>();
    const [ stampedStarIdPath, setStampedStarIdPath ] = useState<any>();
    const [ storedLines, setStoredLines ] = useState([{
        sx: "",
        sy: "",
        fx: "",
        fy: ""
    }]);

    let touchedStar_i: number; //タッチ時の星判別繰り返し用
    let stampedStar_i: number;
    let releasedStar_i: number;
    let touchedId: number;
    let stampedId: number;
        
    function onTouch(e: any) {
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const pre_currentX = e.nativeEvent.locationX;
        const pre_currentY = e.nativeEvent.locationY;

        for (touchedStar_i = 1; touchedStar_i < props.Star.length; touchedStar_i++){
            if ( Math.abs(props.Star[touchedStar_i].starLocationX - (pre_currentX - 300)) <= 50 &&
                 Math.abs(props.Star[touchedStar_i].starLocationY - (pre_currentY - 300)) <= 50 ){
                    setTouchedStarMarkFlag(props.Star[touchedStar_i].starItemId);
                    setTouchedStarOrder(touchedStar_i);
                    setCurrentX( String(props.Star[touchedStar_i].starLocationX + 300) );
                    setCurrentY( String(props.Star[touchedStar_i].starLocationY + 300) );
                    setStartX( String(props.Star[touchedStar_i].starLocationX + 300) );
                    setStartY( String(props.Star[touchedStar_i].starLocationY + 300) );
            }
        }

        setLineDrawFlag(true);
        setStarRedrawFlag(false);
    }

    function onMove(e: any){
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const pre_currentX = e.nativeEvent.locationX;
        const pre_currentY = e.nativeEvent.locationY;

        if (!lineDrawFlag) return;

        Redraw();

        ctx.lineCap = "round";
        ctx.lineJoin  = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        ctx.beginPath();
        ctx.moveTo( Number( startX ), Number( startY ) );
        ctx.lineTo( Number( currentX ), Number( currentY ) );
        ctx.stroke();

        setCurrentX( pre_currentX );
        setCurrentY( pre_currentY );

        for (stampedStar_i = 1; stampedStar_i < props.Star.length; stampedStar_i++){
            if ( Math.abs(props.Star[stampedStar_i].starLocationX - (pre_currentX - 300)) <= 40 &&
                 Math.abs(props.Star[stampedStar_i].starLocationY - (pre_currentY - 300)) <= 40 ){
                    setStampedStarMarkFlag(props.Star[stampedStar_i].starItemId);
                    setStampedStarOrder(stampedStar_i);
            }
            else {
                setStampedStarMarkFlag(0);
            }
        }

    }

    function Redraw(){
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        if(storedLines.length == 1){
            return;
        }

        for(let i = 1; i < storedLines.length; i++){
            ctx.beginPath();
            ctx.moveTo( Number( storedLines[i].sx ), Number( storedLines[i].sy ) );
            ctx.lineTo( Number( storedLines[i].fx ), Number( storedLines[i].fy ) );
            ctx.stroke();
        }
    }

    const onTouchEnd = (e: any) => {
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        setTouchedStarMarkFlag(0);

        const pre_currentX = e.nativeEvent.locationX;
        const pre_currentY = e.nativeEvent.locationY;
    
        for (releasedStar_i = 1; releasedStar_i < props.Star.length; releasedStar_i++){
            if ( Math.abs(props.Star[releasedStar_i].starLocationX - (pre_currentX - 300)) <= 40 &&
                 Math.abs(props.Star[releasedStar_i].starLocationY - (pre_currentY - 300)) <= 40 ) 
                {

                    storedLines.push({
                        sx: startX,
                        sy: startY,
                        fx: String(props.Star[releasedStar_i].starLocationX + 300),
                        fy: String(props.Star[releasedStar_i].starLocationY + 300),
                    })

                    setTouchedStarMarkFlag(0);
                    setStarRedrawFlag(true);
                    
                    Redraw();
            }
            else {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

                for(let i = 1; i < storedLines.length; i++){
                    ctx.beginPath();
                    ctx.moveTo( Number( storedLines[i].sx ), Number( storedLines[i].sy ) );
                    ctx.lineTo( Number( storedLines[i].fx ), Number( storedLines[i].fy ) );
                    ctx.stroke();
                }

                touchedId = touchedStarMarkFlag;
                setTouchedStarMarkFlag(0);

            }
        }
    }

    function TouchedStar() {
        if (!touchedStarMarkFlag){ 
            setLastFlag(0);
            return (<></>)
        }
        else {
            switch(touchedId) {
            case 1:
                setTouchedStarIdPath(require("../Assets/Frame1.png"));
                break;
            case 2:
                setTouchedStarIdPath(require("../Assets/Frame2.png"));
                break;
            case 3:
                setTouchedStarIdPath(require("../Assets/Frame3.png"));
                break;
            case 4:
                setTouchedStarIdPath(require("../Assets/Frame4.png"));
                break;
        }}

        return (
            <View
                style={{position: 'absolute'}}
            >
                <Image
                    style={{
                        transform: [
                            { translateX: props.Star[touchedStarOrder].starLocationX + 275},
                            { translateY: props.Star[touchedStarOrder].starLocationY + 275},
                        ],
                        justifyContent: 'center',
                        alignItems: 'center', 
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 5,
                        width: 50,
                        height: 50,
                    }}
                    source={touchedStarIdPath}
                />
            </View>
        )
    }

    function StampedStar() {
        if (!stampedStarMarkFlag){ 
            setLastFlag(0);
            return (<></>)
        }
        else {
            switch(stampedId) {
            case 1:
                setStampedStarIdPath(require("../Assets/Frame1.png"));
                break;
            case 2:
                setStampedStarIdPath(require("../Assets/Frame2.png"));
                break;
            case 3:
                setStampedStarIdPath(require("../Assets/Frame3.png"));
                break;
            case 4:
                setStampedStarIdPath(require("../Assets/Frame4.png"));
                break;
        }}



        return (
            <View
                style={{position: 'absolute'}}
            >
                <Image
                    style={{
                        transform: [
                            { translateX: props.Star[stampedStarOrder].starLocationX + 275},
                            { translateY: props.Star[stampedStarOrder].starLocationY + 275},
                        ],
                        justifyContent: 'center',
                        alignItems: 'center', 
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 5,
                        width: 50,
                        height: 50,
                    }}
                    source={stampedStarIdPath}
                />
            </View>
        )
    }

    function Last() {
        let starIdPath: any[] = []
        let i: number;

        setLastFlag(0)

        if (!starRedrawFlag) return <></>

        else {
            for (i = 1; i < props.Star.length; i++){
                if (i == touchedStar_i){
                    switch(touchedId) {
                        case 1:
                            starIdPath.push(require("../Assets/Frame1.png"));
                            break;
                        case 2:
                            starIdPath.push(require("../Assets/Frame2.png"));
                            break;
                        case 3:
                            starIdPath.push(require("../Assets/Frame3.png"));
                            break;
                        case 4:
                            starIdPath.push(require("../Assets/Frame4.png"));
                            break;
                    }
                }
                else if(i == stampedStar_i){
                    switch(stampedId) {
                        case 1:
                            starIdPath.push(require("../Assets/Frame1.png"));
                            break;
                        case 2:
                            starIdPath.push(require("../Assets/Frame2.png"));
                            break;
                        case 3:
                            starIdPath.push(require("../Assets/Frame3.png"));
                            break;
                        case 4:
                            starIdPath.push(require("../Assets/Frame4.png"));
                            break;
                    }
                }
            }
        }
        return(
            <>
            { 
                (i == touchedStar_i) ? 
                starIdPath.map( (element, index) => {
                    return (
                        <View 
                            key={index}
                            style={{zIndex: 1000}}
                        >
                            <Image
                                style={{
                                    transform: [
                                        { translateX: props.Star[touchedStar_i].starLocationX + 275 },
                                        { translateY: props.Star[touchedStar_i].starLocationY + 275 },
                                    ],
                                    width: 50,      
                                    height: 50,
                                    position: 'absolute',
                                }}
                                source={element}
                            />
                        </View>
                    )   
                })

                : (i == stampedStar_i) ?
                starIdPath.map( (element, index) => {
                    return (
                        <View 
                            key={index}
                            style={{zIndex: 1000}}
                        >
                            <Image
                                style={{
                                    transform: [
                                        { translateX: props.Star[stampedStar_i].starLocationX + 275 },
                                        { translateY: props.Star[stampedStar_i].starLocationY + 275 },
                                    ],
                                    width: 50,      
                                    height: 50,
                                    position: 'absolute',
                                }}
                                source={element}
                            />
                        </View>
                    )
                })
                : <></>
            }
        </>
        )
        
    }

    return (
        <View>
            <View
                style = {paintStyles.canvas}
                onTouchStart = {onTouch}
                onTouchMove = {onMove}
                onTouchEnd = {onTouchEnd}
            >
                <Canvas ref = {canvasRef} />
                <Text style={{marginLeft: 200}}>{props.Star.length}</Text>
            </View>
            <TouchedStar />
            <StampedStar />
            <Last />
        </View>
    )
}


export const create = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    const pan: any = useRef(new Animated.ValueXY()).current;

    //星に関するstateと変数
    let starIdPath: any[] = [];

    const [ starListCount, setStarListCount ] = useState(1);
    const [ starDrawFlag, setstarDrawFlag ] = useState(true)
    const [ starListFlag, setStarListFlag ] = useState(false);
    const [ starPutFlagId, setStarPutFlagId ] = useState(0);
    const [ starRedrawFlag, setStarRedrawFlag ] = useState(false);
    const [ storedStarsLength, setStoredStarsLength ] = useState(0);
    const [ storedStars, setStoredStars ] = useState([{
        starItemId: 0,
        starLocationX: 0,
        starLocationY: 0,
    }]);

    //returnボタンに関するstateと変数
    const [ returnStar_i, setReturnStar_i ] = useState(0);
    const [ returnLine_i, setReturnLine_i ] = useState(0);

    //ここから星描画
    let si: number = 0;

    function starsButtonAction() {
        if (!starDrawFlag) return;
        setStarListCount((pre_count) => pre_count + 1)
        setStarListCount((pre_count) => {
            (pre_count % 2) ? setStarListFlag(false) : setStarListFlag(true);

            return pre_count
        })
    }

    function StarsItemList() {
        return (
            <View
                style={paintStyles.starListContainer}
            >
                <View
                    style={paintStyles.starListView}
                >
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(1)}
                    >
                        <Image
                            source={require("../Assets/Frame1.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(2)}
                    >
                        <Image
                            source={require("../Assets/Frame2.png")}
                            style={paintStyles.listImage}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(3)}
                    >
                        <Image
                            source={require("../Assets/Frame3.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(4)}
                    >
                        <Image
                            source={require("../Assets/Frame4.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function StarsSelectButtonAction(id: number){
        setStarPutFlagId(id);

        setStarListFlag(false);   
        setStarListCount(starListCount + 1); 
    }

    function StarsPut(props: any){
        const panResponder = useRef(
            PanResponder.create({
                onMoveShouldSetPanResponder: () => true,
                
                onPanResponderGrant: () => {
                    pan.setOffset({
                        x: pan.x.__getValue(),
                        y: pan.y.__getValue()
                    });
                },
                
                onPanResponderMove: Animated.event(
                    [
                        null,
                        { dx: pan.x, dy: pan.y }
                    ],
                    { useNativeDriver: false },
                ),

                onPanResponderRelease: () => {
                    //星座標と星種類を新しい配列要素に保存
                    storedStars.push({
                        starItemId: starPutFlagId,
                        starLocationX: pan.x.__getValue(),
                        starLocationY: pan.y.__getValue()
                    });

                    pan.flattenOffset();
                    pan.x.setValue(0);
                    pan.y.setValue(0);

                    setStarPutFlagId(0);
                    setStarRedrawFlag(true);
                    setStoredStarsLength(storedStars.length)
                }
            })
        ).current;

        return (
            <>
            {
                starPutFlagId == 1 ?
                    <Animated.View
                        style={[
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
                            paintStyles.starAnimatedView,
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Image
                            style={paintStyles.moveImage}
                            source={require("../Assets/Frame1.png")}
                        />
                    </Animated.View>
                : starPutFlagId == 2 ?
                    <Animated.View
                        style={[
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
                            paintStyles.starAnimatedView,
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Image
                            style={paintStyles.moveImage}
                            source={require("../Assets/Frame2.png")}
                        />
                    </Animated.View>
                : starPutFlagId == 3 ?
                    <Animated.View
                        style={[
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
                            paintStyles.starAnimatedView,
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Image
                            style={paintStyles.moveImage}
                            source={require("../Assets/Frame3.png")}
                        />
                    </Animated.View>
                : starPutFlagId == 4 ? 
                    <Animated.View
                        style={[
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
                            paintStyles.starAnimatedView,
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Image
                            style={paintStyles.moveImage}
                            source={require("../Assets/Frame4.png")}
                        />
                    </Animated.View>
                : <></>
            }
            </>
        )
    }

    function StarsRedraw() {
        for (let i = 1; i < storedStars.length - returnStar_i; i++){ //storedStarsLengthは2から
            switch(storedStars[i].starItemId) {
                case 1:
                    starIdPath.push(require("../Assets/Frame1.png"));
                    break;
                case 2:
                    starIdPath.push(require("../Assets/Frame2.png"));
                    break;
                case 3:
                    starIdPath.push(require("../Assets/Frame3.png"));
                    break;
                case 4:
                    starIdPath.push(require("../Assets/Frame4.png"));
                    break;
            }
        };

        return (
            <>
                { starIdPath.map( (element, index) => {
                    return (
                        <View 
                            key={index}
                        >
                            <Image
                                style={{
                                    transform: [
                                        { translateX: storedStars[index + 1].starLocationX - 25 },
                                        { translateY: storedStars[index + 1].starLocationY - 25 },
                                    ],
                                    width: 50,      
                                    height: 50,
                                    position: 'absolute',
                                }}
                                source={element}
                            />
                        </View>
                    )
                    })}
            </>
        )
    }

    function returnButtonAction() {
        if ((storedStars.length - returnStar_i < 2)){
            return;
        }

        if (starDrawFlag || starListFlag){
            setReturnStar_i(returnStar_i + 1);

        }
        else {
            setReturnLine_i(returnLine_i + 1);
        }
    }

    function completionButtonAction() {
        if (starDrawFlag){
            setstarDrawFlag(false);
        }
    }

    return (
        <>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Constellation')}
                style={styles.backButton}
            >
                    <Text style={styles.direction}>
                        ＜
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={completionButtonAction}
                style={styles.completion}
            >
                    <Text style={styles.completionText}>
                        完了
                    </Text>
            </TouchableOpacity>
        </View>

        <View style={paintStyles.paint}>
            {starRedrawFlag
                ? <View
                    style={{
                        flex: 1,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <StarsRedraw />
                </View>
                : <></>
            }

            {!starDrawFlag 
                ? <LineComponent Star={storedStars.slice()}/>
                : <></>
            }

            {starPutFlagId
                ? <View
                    style={paintStyles.starCanvasView}
                >
                    <StarsPut />
                </View>
                : <></>
            }

            {starListFlag
                ? <StarsItemList />
                : <></>
            }
        </View>

        <View style={styles.create}>
            <TouchableOpacity
                style={styles.starsView}
                onPress={starsButtonAction}
            >
                <Image
                    style={styles.starsImage}
                    source={require('../Assets/Create/Star1.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.returnView}
            >
                <Text
                    style={styles.returnText}
                >
                    ←
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goView}
            >
                <Text
                    style={styles.goText}
                >
                    →
                </Text>
            </TouchableOpacity>
            
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 0.16,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#806BFF',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        marginBottom: 7,
    },
    direction: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    completion: {
        height: 30,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43C58C',
        borderRadius: 30,
        marginLeft: 200,
        marginBottom: 15,
    },
    completionText: {
    },

    create: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#806BFF'
    },
    starsView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 140,
    },
    starsImage: {
        width: 40,
        height: 40,
    },
    returnView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginEnd: 20,
    },
    returnText: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    goView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    goText: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
})

const paintStyles = StyleSheet.create({
    paint: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#232946",
    },
    canvas: {
        justifyContent: 'center',
        alignIems: 'center',
    },
    starListContainer: {
        position: 'absolute',
    },
    starListView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#BDBAFA',
        direction: 'inherit',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 500,
        marginEnd: 75,
        width: 250,
        height: 70,
    },
    starCanvasView: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starAnimatedView: {
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: "232946",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        width: 60,
        height: 60,
    },
    moveImage: {
        borderColor: "white",
        width: 50,
        height: 50,
    },
    listImage: {
        marginLeft: 10,
        width: 50,
        height: 50,
    },
    starRedrawView: {
        backgroundColor: "white",
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


