import React from "react";
import "./styles.css";

export const App = () => {
    return (
        <>
            <div>
                <input type="text" placeholder="TODO" />
                <button>追加</button>
            </div>
            <div>
                <h3>未完了のTODO</h3>
                <ul>
                    <li>
                        <p>あああ</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                </ul>
            </div>
            <div>
                <h3>完了のTODO</h3>
                <ul>
                    <li>
                        <p>あああ</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </div>
        </>
    );
};
