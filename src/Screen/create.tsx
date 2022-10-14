import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, PanResponder, Animated, Modal, TextInput } from "react-native";
import { StarsStackNavProp } from "../Navigations";
import { useNavigation } from "@react-navigation/native";
import Canvas from "react-native-canvas";
import axios from "axios";

const baseURL: string = "http://172.20.10.7:8080/auth/OrigConste/Get"

export const canvasRef: any = React.createRef();

let returnLine_i: number = 0;
export let replaceStoredLines: any = [{
    sx: "",
    sy: "",
    fx: "",
    fy: ""
}];
export let replaceStoredStars: any;
export let completionFlag: boolean = false
export let consteName: string = ""

const LineComponent = (props: any) => {
    useEffect (() => {
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        canvasRef.current.width =  600;
        canvasRef.current.height = 600;
        ctx.strokeStyle = "white",
        ctx.lineWidth = 1
        Redraw();
        
    }, [returnLine_i]);

    const [ lineDrawFlag, setLineDrawFlag ] = useState(false);
    const [ starRedrawFlag, setStarRedrawFlag ] = useState(false);
    const [ touchedStarMarkFlag, setTouchedStarMarkFlag ] = useState(0); //タッチ時の星の有無と種類を判別フラグ
    const [ touchedStarOrder, setTouchedStarOrder ] = useState(1); //タッチ時の星の番号
    const [ stampedStarMarkFlag, setStampedStarMarkFlag ] = useState(0); //星を踏んだ時の判別フラグ
    const [ stampedStarOrder, setStampedStarOrder ] = useState(1); //星を踏んだ時の番号
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

    let touchedStar_i: number;
    let releasedStar_i: number;
    let stampedStar_i: number;
    let touchedId: number;
    let stampedId: number;

        
    function onTouch(e: any) {
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
                    setLineDrawFlag(true);
            }
        }
    }

    function onMove(e: any){
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const pre_currentX = e.nativeEvent.locationX;
        const pre_currentY = e.nativeEvent.locationY;

        if (!lineDrawFlag) return;

        Redraw();

        ctx.lineCap = "round";
        ctx.lineJoin  = "round";
        ctx.lineWidth = 1;
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
                    break;
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

        for(let i = 1; i < storedLines.length - returnLine_i; i++){
            ctx.beginPath();
            ctx.moveTo( Number( storedLines[i].sx ), Number( storedLines[i].sy ) );
            ctx.lineTo( Number( storedLines[i].fx ), Number( storedLines[i].fy ) );
            ctx.stroke();
        }
    }

    const onTouchEnd = (e: any) => {
        setTouchedStarMarkFlag(0);

        const pre_currentX = e.nativeEvent.locationX;
        const pre_currentY = e.nativeEvent.locationY;
    
        for (releasedStar_i = 1; releasedStar_i < props.Star.length; releasedStar_i++){
            if ( Math.abs(props.Star[releasedStar_i].starLocationX - (pre_currentX - 300)) <= 40 &&
                 Math.abs(props.Star[releasedStar_i].starLocationY - (pre_currentY - 300)) <= 40 ) 
                {
                    if (returnLine_i) { //returnButton押下時の挙動
                        for (let i = 0; i < returnLine_i; i++) {
                            storedLines.pop();
                        }
                        returnLine_i = 0;
                        props.handleReturnLine_iChange(returnLine_i)
                    }

                    storedLines.push({
                        sx: startX,
                        sy: startY,
                        fx: String(props.Star[releasedStar_i].starLocationX + 300),
                        fy: String(props.Star[releasedStar_i].starLocationY + 300),
                    })
                    setStarRedrawFlag(true);
                    
                    Redraw();

                    replaceStoredLines = storedLines.slice();
            }
            else {
                Redraw();
            }

        }
        setStartX("0");
        setStartY("0");
        setLineDrawFlag(false);
        setTouchedStarMarkFlag(0);
        setStampedStarMarkFlag(0);
    }

    function TouchedStar() {
        if (!touchedStarMarkFlag){ 
            return (<></>)
        }
        else {
            switch(touchedStarMarkFlag) {
            case 1:
                setTouchedStarIdPath(require("../Assets/Create/red.png"));
                break;
            case 2:
                setTouchedStarIdPath(require("../Assets/Create/blue.png"));
                break;
            case 3:
                setTouchedStarIdPath(require("../Assets/Create/yellow.png"));
                break;
            case 4:
                setTouchedStarIdPath(require("../Assets/Create/rare.png"));
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
            return (<></>)
        }
        else {
            switch(stampedId) {
            case 1:
                setStampedStarIdPath(require("../Assets/Create/red.png"));
                break;
            case 2:
                setStampedStarIdPath(require("../Assets/Create/blue.png"));
                break;
            case 3:
                setStampedStarIdPath(require("../Assets/Create/yellow.png"));
                break;
            case 4:
                setStampedStarIdPath(require("../Assets/Create/rare.png"));
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

    return (
        <View>
            <TouchedStar />
            <StampedStar />
            <View
                style = {paintStyles.canvas}
                onTouchStart = {onTouch}
                onTouchMove = {onMove}
                onTouchEnd = {onTouchEnd}
            >
                <Canvas ref={canvasRef}/>
            </View>
        </View>
    )
}


export const create = () => {
    const navigation = useNavigation< StarsStackNavProp<'create'> >();
    const pan: any = useRef(new Animated.ValueXY()).current;

    //星に関するstateと変数
    let starIdPath: any[] = [];

    const [ starListCount, setStarListCount ] = useState(1);
    const [ starDrawFlag, setstarDrawFlag ] = useState(true);
    const [ starListFlag, setStarListFlag ] = useState(false);
    const [ starPutFlagId, setStarPutFlagId ] = useState(0);
    const [ starRedrawFlag, setStarRedrawFlag ] = useState(false);
    const [ storedStarsLength, setStoredStarsLength ] = useState(0);
    const [ storedStars, setStoredStars ] = useState([{
        starItemId: 0,
        starLocationX: 0,
        starLocationY: 0,
    }]);

    const [ returnStar_i, setReturnStar_i ] = useState(0);
    const [ updateReturnLine_i, setUpdateReturnLine_i ] = useState(0);
    const [ completionButtonActionBoolean, setCompletionButtonActionBoolean] = useState(true);
    const [ namingModalVisible, setNamingModalVisible ] = useState(false);
    const [ name, onChangeName ] = useState("");
    const [ updateState, setUpdateState ] = useState(true);

    useEffect(() => {
        setUpdateState(false);
      }, []);

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
                            source={require("../Assets/Create/red.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(2)}
                    >
                        <Image
                            source={require("../Assets/Create/blue.png")}
                            style={paintStyles.listImage}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(3)}
                    >
                        <Image
                            source={require("../Assets/Create/yellow.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => StarsSelectButtonAction(4)}
                    >
                        <Image
                            source={require("../Assets/Create/rare.png")}
                            style={paintStyles.listImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function StarsSelectButtonAction(id: number){
        if (returnStar_i) {
            for (let i = 0; i < returnStar_i; i++) {
                storedStars.pop();
            }
            setReturnStar_i(0);
        }
        

        setStarPutFlagId(id);
        setStarListFlag(false);   
        setStarListCount(starListCount + 1); 
    }

    function StarsPut(){
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
                            source={require("../Assets/Create/red.png")}
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
                            source={require("../Assets/Create/blue.png")}
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
                            source={require("../Assets/Create/yellow.png")}
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
                            source={require("../Assets/Create/rare.png")}
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
                    starIdPath.push(require("../Assets/Create/red.png"));
                    break;
                case 2:
                    starIdPath.push(require("../Assets/Create/blue.png"));
                    break;
                case 3:
                    starIdPath.push(require("../Assets/Create/yellow.png"));
                    break;
                case 4:
                    starIdPath.push(require("../Assets/Create/rare.png"));
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
        if (starDrawFlag){ //星モードの時実行
            if ((storedStars.length - returnStar_i) < 2){
                return;
            }
            else {
                setReturnStar_i(returnStar_i + 1);
            }
        }
        else { //線モードの時実行
            if ((replaceStoredLines.length - returnLine_i) < 2){
                return;
            }
            else {
                returnLine_i++;
                setUpdateReturnLine_i(returnLine_i);
            }
        }
    }

    function forwardButtonAction() {
        if (starDrawFlag){//星モードの時実行
            if (!returnStar_i){ //returnStar_iが0のとき
                return;
            }
            else if (completionButtonActionBoolean){
                setReturnStar_i(returnStar_i - 1);
            }
        }
        else {//線モードの時実行
            if (!returnLine_i){
                return;
            }
            else{
                returnLine_i -= 1;
                setUpdateReturnLine_i(returnLine_i);
            }
        }
    }

    function completionButtonAction() {
        if (starDrawFlag){
            for (let i = 0; i < returnStar_i; i++) {
                storedStars.pop();
            }
            setReturnStar_i(0);
            setstarDrawFlag(false);
            setCompletionButtonActionBoolean(false);
        }
        
        if (!starDrawFlag){
            for (let i = 0; i < returnLine_i; i++){
                replaceStoredLines.pop();
            }
            returnLine_i = 0;

            replaceStoredStars = storedStars.slice();
            completionFlag = true;

            setNamingModalVisible(true);
        }
    }

    function nameCompletionButtonAction() {
        setNamingModalVisible(!namingModalVisible)

        completionFlag = true;

        consteName = name;

        navigation.navigate('Constellation');
    }

    function handleReturnLine_iChange(changed: number) { //親コンポーネントに値を渡すための関数
        setUpdateReturnLine_i(changed) //dummyデータ
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
            {starDrawFlag ?
                <TouchableOpacity
                    onPress={completionButtonAction}
                    style={styles.completion}
                >
                        <Text style={styles.completionText}>
                            次へ
                        </Text>
                </TouchableOpacity>
            : 
                <TouchableOpacity
                    style={styles.completion}
                    onPress={completionButtonAction}
                >
                    <Text style={styles.completionText}>
                        完了
                    </Text>
                </TouchableOpacity>
            }
        </View>

        <View style={paintStyles.paint}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={namingModalVisible}
                onRequestClose={() => {
                    setNamingModalVisible(!namingModalVisible)
                }}
            >
                <View style={modalStyles.modalView}>
                    <View style={modalStyles.namingInsideView}>
                        <View style={modalStyles.namingFrontView}>
                            <Text style={modalStyles.namaewokimeyouText}>名前を決めよう</Text>
                            <TextInput 
                                style={modalStyles.nameInput}
                                onChangeText={onChangeName}
                                value={name}
                                maxLength={10}
                                textAlign={"center"}
                            />
                            <TouchableOpacity
                                style={modalStyles.nameCompletionButton}
                                onPress={nameCompletionButtonAction}
                            >
                                <Text style={modalStyles.nameCompletionText}>決定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
                ? <LineComponent Star={storedStars.slice()} handleReturnLine_iChange={(e: any) => handleReturnLine_iChange(e)}/>
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
            {starDrawFlag ?
                <TouchableOpacity
                    style={styles.starsView}
                    onPress={starsButtonAction}
                >
                    <Image
                        style={styles.starsImage}
                        source={require('../Assets/Create/Star1.png')}
                    />
                </TouchableOpacity>
            : 
                <View 
                    style={styles.starsView}
                >
                    <Image
                        style={styles.starsImage}
                        source={require("../Assets/Create/Line7.png")}
                    />
                </View>
            }       
            <TouchableOpacity
                style={styles.returnView}
                onPress={returnButtonAction}
            >
                <Text
                    style={styles.returnText}
                >
                    ←
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goView}
                onPress={forwardButtonAction}
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
        height: 35,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43C58C',
        borderRadius: 30,
        marginLeft: 190,
        marginBottom: 10,
    },
    completionText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
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

const modalStyles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    namingInsideView: {
        backgroundColor: '#806BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    namingFrontView: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        width: 280,
        height: 220,
    },
    namaewokimeyouText: {
        fontSize: 25,
    },
    nameInput: {
        height: 50,
        width: 200,
        margin: 20,
        marginTop: 45,
        padding: 10,
        backgroundColor: '#C4C4C4'
    },
    nameCompletionButton: {
        height: 35,
        width: 100,
        margin: 10,
        marginTop: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43C58C',
        borderRadius: 30,
    },
    nameCompletionText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
})


