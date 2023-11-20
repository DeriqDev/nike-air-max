import { Text } from "@react-three/drei"

export default function Letter(){
    return <>
        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 1.5, 4]}
        anchorX="left"
        anchorY={"middle"}
        color={"#007A5E"}
        >
            AIR 
        </Text>
        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 1.5, 3.99]}
        anchorX="left"
        anchorY={"middle"}
        color={"#007A5E"}
        >
            AIR
        </Text>
        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 0.85, 4]}
        anchorX="left"
        anchorY={"middle"}
        color={"#FCD116"}
        >
            MAX
        </Text>

        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 0.85, 3.99]}
        anchorX="left"
        anchorY={"middle"}
        color={"#CE1126"}
        >
            MAX
        </Text>

        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 0.2, 4]}
        anchorX="left"
        anchorY={"middle"}
        color={"#FCD116"}
        >
            DAY
        </Text>

        <Text 
        font='./FuturaCondensedExtraBold.otf'
        fontSize={0.75}
        rotation={[0,2,0]}
        position={[0, 0.2, 3.99]}
        anchorX="left"
        anchorY={"middle"}
        color={"#FCD116"}
        >
            DAY
        </Text>
    </>
}