import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field} from "redux-form";
import ReduxForm from "../components/form/Form";
import {IRootState} from "../store/reducers/rootReducer";
import FormItem from "../components/formItem/FormItem";
import Radio from "../components/radio/Radio";
import Switch from "../components/switch/Switch";
import Input from "../components/input/Input";
import Button, {ButtonState} from "../components/button/Button";
import {save_data} from "../store/actions/ItemsActions";

const Start = () => {

    const state = useSelector((state : IRootState) => state.form.simple);
    const store = useSelector((state : IRootState) => state);
    const dispatch = useDispatch();
    const [options, setOptions] = useState({
        first: 0,
        second: 0,
        third: 0
    });
    const [afterInput, setAfterInput] = useState('&#8381;');

    const save_sum = (res : any) => {
        if(res !== undefined){
            let sum = parseInt(res!.sum) || 0;
            let vars = res!.var;
            let withS = res!.with;

            if(sum === 0){
                alert('Заполните форму');
            }else{
                if(vars == 'day'){
                    setAfterInput('&#8381; в день');
                    sum = sum * 20;
                }else if(vars == 'hour'){
                    setAfterInput('&#8381; в час');
                    sum = sum * 160;
                }

                let nalog = Math.round(sum * 0.13);

                if(withS){
                    dispatch(save_data({
                        sum: sum,
                        ndfl: nalog,
                        sumPay: sum + nalog
                    }));
                }else{
                    dispatch(save_data({
                        sum: sum - nalog,
                        ndfl: nalog,
                        sumPay: sum
                    }));
                }
                alert('Данные отправлены');
            }
        }
    };

    useEffect(() => {
        if(state !== undefined && state.values !== undefined) {
            let sum = parseInt(state.values!.sum) || 0;
            let vars = state.values!.var;
            let withS = state.values!.with;

            if(vars == 'month'){
                setAfterInput('&#8381;');
            }else if(vars == 'mrot'){
                setAfterInput('&#8381;');
            }else if(vars == 'day'){
                setAfterInput('&#8381; в день');
                sum = sum * 20;
            }else if(vars == 'hour'){
                setAfterInput('&#8381; в час');
                sum = sum * 160;
            }

            let nalog = Math.round(sum * 0.13);

            if(withS){
                setOptions({
                    first: sum,
                    second: nalog,
                    third: sum + nalog
                });
            }else{
                setOptions({
                    first: sum - nalog,
                    second: nalog,
                    third: sum
                });
            }
        }
    }, [state]);

    return(
        <div>
            <ReduxForm initialValues={{var: 'month'}} actions={(reset : () => void) =>
                <React.Fragment>
                    <Button type={"submit"} text={"Согласовать"} mode={ButtonState.PRIMARY}/>
                    <Button type={"button"} text={"Очистить"} onClick={reset} mode={ButtonState.SECONDARY}/>
                </React.Fragment>
            } onSubmit={(res : any) => save_sum(res)}>
                <FormItem title="Сумма">
                    <React.Fragment>
                        <Field name="var" label="Оклад за месяц" component={Radio} id="varf" value="month" type="radio"/>
                        <Field name="var" label="МРОТ" component={Radio} id="vars" value="mrot" type="radio" prompt={"МРОТ - минимальный размер оплаты труд. Разный для разных регионов"}/>
                        <Field name="var" label="Оплата за день" component={Radio} id="vart" value="day" type="radio"/>
                        <Field name="var" label="Оплата за чат" component={Radio} id="varh" value="hour" type="radio"/>
                    </React.Fragment>
                </FormItem>
                <FormItem>
                    <Field name="with" type="checkbox" component={Switch} leftText={'Указать с НДФЛ'} rightText={'Без НДФЛ'}/>
                </FormItem>
                <FormItem>
                    <Field name="sum" type="number" component={Input} after={afterInput} placeholder={"Введите сумму"}/>
                </FormItem>
                { state != undefined && state.values != undefined && state.values.sum != undefined &&
                <div className="info">
                    <div>
                        <span>{options.first} &#8381;</span> сотрудник будет получать на руки
                    </div>
                    <div>
                        <span>{options.second} &#8381;</span> НДФЛ, 13% от склада
                    </div>
                    <div>
                        <span>{options.third} &#8381;</span> за сотрудника в месяц
                    </div>
                </div>}
            </ReduxForm>
        </div>
    );
};

export default Start;