import React from "react";
import { View,Dimensions } from "react-native"
import ScatterChart from "react-native-scatter-chart";

const { width, height } = Dimensions.get("window");
type Props ={
    color: string
}
export class StarrySky extends React.Component<Props, {}>{
    render(): React.ReactNode {
        return(
            <View>
                <ScatterChart
                    backgroundColor={this.props.color}
                    data={chartData}
                    chartHeight={height}
                    chartWidth={width}
                />
            </View>
        )
    }
}
const chartData = [
    {
        color: 'white',
        unit: '%',
        values: [
            [0.40, 38],
            [10.0, -35],
            [16.0, -76],
            [19.30, 2],
            [22.20, -13],
            [17.10, -55],
            [2.30, 20],
            [6.0, 42],
            [14.35, 30],
            [4.50, -38],
            [5.40, 70],
            [20.50, -20],
            [8.40, -62],
            [1.0, 60],
            [13.20, -47],
            [22.0, 70],
            [1.45, -12],
            [10.40, -78],
            [14.50, -63],
            [6.40, -24],
            [7.30, 6],
            [8.30, 20],
            [5.40, -34],
            [12.40, 23],
            [18.30, -41],
            [15.40, 30],
            [11.20, -15],
            [12.20, -60],
            [12.20, -18],
            [13.0, 40],
            [20.30, 43],
            [20.40, 12],
            [5.0, -60],
            [17.0, 60],
            [21.10, 6],
            [3.50, -30],
            [2.30, -33],
            [7.0, 22],
            [22.20, -47],
            [17.10, 27],
            [3.20, -52],
            [10.30, -20],
            [2.40, -70],
            [21.20, -58],
            [22.25, 43],
            [10.30, 15],
            [5.25, -20],
            [15.10, -14],
            [10.20, 33],
            [15.0, -40],
            [7.50, 45],
            [18.45, 36],
            [5.40, -77],
            [20.50, -37],
            [7.0, -3],
            [12.30, -70],
            [16.0, -50],
            [21.0, -87],
            [17.10, -5],
            [5.20, 3],
            [19.10, -65],
            [22.30, 17],
            [3.20, 42],
            [1.0, -48],
            [5.30, -52],
            [22.10, -32],
            [0.20, 10],
            [7.40, -32],
            [8.50, -28],
            [3.50, -63],
            [0.30, -35],
            [16.30, -26],
            [18.35, -10],
            [15.35, 10],
            [18.0, -5],
            [10.10, -1],
            [19.40, 18],
            [19.0, -25],
            [4.30, 18],
            [19.0, -52],
            [15.40, -65],
            [2.0, 32],
            [23.45, -68],
            [11.0, 58],
            [15.40, 78],
            [9.30, -45],
            [13.20, -2],
            [7.40, -69],
            [20.10, 25]
        ]
    }
];

