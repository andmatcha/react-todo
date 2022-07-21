import React, { useState } from "react";
import "./styles.css";

export const App = () => {
    const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);

    const [completeTodos, setCompleteTodos] = useState(["ccc"]);

    return (
        <>
            <div className="input-area">
                <input type="text" placeholder="TODO" />
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <h3 className="title">未完了のTODO</h3>
                <ul>
                    {incompleteTodos.map((todo) => (
                        <li key={todo} className="list-row">
                            <p>{todo}</p>
                            <button>完了</button>
                            <button>削除</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="complete-area">
                <h3 className="title">完了のTODO</h3>
                <ul>
                    {completeTodos.map((todo) => (
                        <li key={todo} className="list-row">
                            <p>{todo}</p>
                            <button>戻す</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
