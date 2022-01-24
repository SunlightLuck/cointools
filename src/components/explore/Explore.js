import { FiImage } from 'react-icons/fi';
import ActVec from "../../assets/Vector.png";

function Explore() {
    const captions = [
        "Pancake Swap",
        "Spliterland",
        "Alien Worlds",
        "Axie Infinity",
        "Atomic Assets",
        "MOBOX:Infinity",
        "Upland",
        "Farmers World",
        "Trader joe",
        "Bomb Crypto"];

    return (
        <div id={"explore"}>
            For more to explore
            <div className="comment" style={{ marginTop: "50px" }}>
                Peerless, actionable, multichain data
            </div>
            <div className="comment">
                and coverage
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "40px",
                width: "70%",
                marginTop: "50px",
                cursor: "pointer"
            }}>
                <div className="explore_cat">
                    9, 004
                    <div className="subtext">
                        Tokens
                    </div>
                </div>
                <div className="explore_cat">
                    2, 287
                    <div className="subtext">
                        NFT Collections
                    </div>
                </div>
                <div className="explore_cat">
                    33
                    <div className="subtext">
                        Markets
                    </div>
                </div>
                <div className="explore_cat">
                    103
                    <div className="subtext">
                        DEXs
                    </div>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "40px",
                width: "70%",
                marginTop: "50px",
                cursor: "pointer"
            }}>
                <div className="explore_tab" style={{ color: "#373F41" }}>
                    top Dapps
                </div>
                <div className="explore_tab">
                    top NFT collection
                </div>
                <div className="explore_tab">
                    top DeFi projects
                </div>
                <div className="explore_tab">
                    top token
                </div>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                width: "100%",
                marginTop: "50px",
                padding: "15px",
                background: "white",
                color: "black"
            }}>
                <div className="explore_detail">
                    <div style={{ display: "flex", flex: "1.5" }}></div>
                    <div style={{ display: "flex", flex: "1" }}>Category</div>
                    <div style={{ display: "flex", flex: "1" }}>Balance</div>
                    <div style={{ display: "flex", flex: "1" }}>User</div>
                    <div style={{ display: "flex", flex: "1" }}>Volume</div>
                    <div style={{ display: "flex", flex: "1" }}>Activity</div>
                </div>
                {captions.map((each, i) =>
                    <div className="explore_detail" key={i}>
                        <div style={{ display: "flex", flexDirection: "column", flex: "1.5" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", columnGap: "10px" }}>
                                <div style={{ width: "22px", height: "22px", borderRadius: "5px", background: "#C4C4C4" }}>
                                    <FiImage sie={10} />
                                </div>
                                {each}
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", columnGap: "5px" }}>
                                <div style={{ width: "12px", height: "12px", borderRadius: "12px", background: "#C4C4C4" }}></div>
                                BSC
                                <div style={{ width: "12px", height: "12px", borderRadius: "12px", background: "#C4C4C4" }}></div>
                                Wax
                            </div>
                        </div>
                        <div style={{ display: "flex", flex: "1" }}>
                            Defi
                        </div>
                        <div style={{ display: "flex", flex: "1" }}>$2.79B</div>
                        <div style={{ display: "flex", flex: "1", flexDirection: "column", textAlign: 'left' }}>
                            474.29k
                            <div style={{ fontSize: "calc(8px + 0.8vmin)", marginLeft: "25px", textAlign: "left" }}>
                                +927k
                            </div>
                        </div>
                        <div style={{ display: "flex", flex: "1" }}>432.51M</div>
                        <div style={{ display: "flex", flex: "1" }}>
                            <img src={ActVec} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Explore;