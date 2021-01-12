import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../store/reducers/rootReducer";
import {load_data} from "../store/actions/ItemsActions";
import {Table} from "react-bootstrap";
import {IItemsData, IStateItems} from "../store/reducers/ItemsReducer";

const TableS : React.FC = () => {

    const its = useSelector<IRootState, IStateItems>((state : IRootState) => state.items);
    const dispatch = useDispatch();
    const [rows, setRows] = useState<any>(null);


    useEffect(() => {
        dispatch(load_data());
    }, []);

    useEffect(() => {
        if (its !== undefined && 'data' in its) {
            let data = its.data.map((val : IItemsData, index : number) => {
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.sum}</td>
                        <td>{val.ndfl}</td>
                        <td>{val.sumPay}</td>
                    </tr>
                );
            });
            setRows(data);
        }

    }, [its]);

    return(
        <div className="container">
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>На руки</th>
                        <th>НДФЛ</th>
                        <th>В месяц</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    );
};

export default TableS;