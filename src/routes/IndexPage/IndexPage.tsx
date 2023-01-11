import  React, {useEffect} from 'react';

import './IndexPage.scss';
import {useBem, useComponents, useSelector, useFetch} from '@steroidsjs/core/hooks';

import Grid from "@steroidsjs/core/ui/list/Grid"

export default function IndexPage() {
    const bem = useBem('IndexPage');

    let resF = useFetch()

    useEffect(()=>{

        //{method: "GET", url: "https://www.cbr.ru/scripts/XML_daily.asp"}


        let res = resF.fetch({method: "GET", url: "https://www.cbr-xml-daily.ru/daily_json.js"})

        console.log("render", res)

    }, [])

    let itemsS = useSelector((state)=>{

        // console.log(state)

    })

    // const comp = useComponents()

    // console.log(comp)

    return (
        <div className={bem.block()}>
            Hii




            <Grid
                listId='CurrencyTable'
                items={items}
                itemsIndexing
                columns={[{
                    valueView: CustomView,
                    // headerView: CheckboxColumn,
                }, ...columns]}
                pagination={{
                    loadMore: true,
                }}
                paginationSize={{
                    defaultValue: 10,
                    sizes: [10, 20, 30]
                    
                }}

                // controls={[{id: 'delete'}, {id: 'view', position: 'right'}]}


                
                load={true}

            >   
                test
            </Grid>

        </div>
    );
}

function testRend(anyP){
    console.log(anyP)
}


function CustomView(props){

    // console.log(props)

    // let childs = props.renderList(props.items)

    // console.log(childs)

    return(
        <div> see

            

        </div>
    )
}


const items = [
    {
        id: 1,
        name: 'Ivan',
        secondName: 'Ivanov',
        work: 'development',

    },
    {
        id: 2,
        name: 'Petr',
        secondName: 'Petrov',
        work: 'manager',
    },
    {
        id: 3,
        name: 'Jhon',
        secondName: 'Doe',
        work: 'designer',
    },
];


const columns = [
    {
        label: 'Name',
        attribute: 'name',
        sortable: true,
        headerView: CustomView,
        // valueView: CustomView
    },
    {
        label: 'Second name',
        attribute: 'secondName',
    },
    {
        label: 'Work',
        attribute: 'work',
    },
];