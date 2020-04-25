import React, { Component } from 'react';
import { Conditions, Input } from "vtex.styleguide";

function SimpleInputObject({ value, onChange }: any) {
    return <Input value={value || ''} onChange={(e: { target: { value: any; }; }) => onChange(e.target.value)} />
}

export default class Detail extends Component {
    constructor(props: any) {
        super(props)

        this.state = {

        }
    }

    public render() {

        const { operator, simpleStatements }: any = this.state
        
        return (

            

        )
    }
}