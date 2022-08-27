import React, {useEffect, useState} from 'react';
import SuperInputText from '../../../common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../../common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../../../common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperSelect from '../../../common/c5-SuperSelect/SuperSelect';
import SuperRadio from '../../../common/c6-SuperRadio/SuperRadio';
import css from './Test.module.css'
import {useDispatch} from 'react-redux';
import {testAC} from '../../../../app/reducers/test-reducer';

const Test = () => {

    const selectOptions = ['1', '2', '3', '4', '5']
    const radioOptions = ['6', '7', '8', '9', '10']

    const [select, setSelect] = useState<string>(selectOptions[1])
    const [radio, setRadio] = useState<string>(radioOptions[3])
    const [spanValue, setSpanValue] = useState<string>('')

    // const test = useSelector<AppStateType, string>(state => state.test.test)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(testAC(spanValue))
    }, [spanValue, dispatch])

    return (
        <div className={css.content}>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperButton>button</SuperButton>
                <SuperButton red>red</SuperButton>
                <SuperButton disabled>disabled</SuperButton>
            </div>
            <div>
                <SuperCheckbox>test checkbox</SuperCheckbox>
            </div>
            <div>
                <SuperEditableSpan
                    value={spanValue}
                    onChangeText={setSpanValue}
                    spanProps={{children: spanValue ? undefined : 'editable span'}}
                />
            </div>
            <div>
                <SuperSelect
                    options={selectOptions}
                    name={'select'}
                    value={select}
                    onChangeOption={setSelect}
                />
            </div>
            <div>
                <SuperRadio
                    options={radioOptions}
                    name={'radio'}
                    value={radio}
                    onChangeOption={setRadio}
                />
            </div>
        </div>
    );
};

export default Test;