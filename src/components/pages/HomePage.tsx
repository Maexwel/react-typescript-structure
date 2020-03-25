import React from 'react';
import { IconButton } from '../ui/buttons';
import { DataTable } from '../ui/table';
import { Icon, Grid, Paper } from '@material-ui/core';
import { TextField, ComboBox } from '../ui/forms';

// Home page of the application
export const HomePage = () => {

    const data = [
        {
            rue: 'Rue Trieux',
            nbr: 26,
            commune: 'Durbuy',
            cp: 6941,
            localite: 'Bomal',
        },
        {
            rue: 'Rue du poteau',
            nbr: 6,
            commune: 'Durbuy',
            cp: 6941,
            localite: 'Oneux',
        },
        {
            rue: 'Rue de Mulhouse',
            nbr: 48,
            commune: 'Liège',
            cp: 4020,
            localite: 'Liège',
        },
    ];

    return (
        <div>
            <DataTable
                title="Rues"
                columns={[
                    { title: 'Rue', field: 'rue', render: (rowData: any) => <Grid container alignItems="center"><Grid item><Icon>home</Icon></Grid><Grid item>{rowData["rue"]}</Grid></Grid> },
                    { title: 'Numéro', field: 'nbr' },
                    { title: 'Commune', field: 'commune' },
                    { title: 'Code Postal', field: 'cp' },
                    { title: 'Localité', field: 'localite' },
                    {
                        title: 'Actions', field: '',
                        render: (rowData: any) =>
                            <React.Fragment>
                                <IconButton tip="Modifier" icon="edit" onClick={(e) => alert(`Edit ${JSON.stringify(rowData)}`)} />
                                <IconButton tip="Supprimer" icon="delete" onClick={(e) => alert(`Delete ${JSON.stringify(rowData)}`)} />
                            </React.Fragment>
                    }
                ]}
                data={data}
                options={{
                    sorting: true,
                    selection: true,
                    exportButton: true,
                }}
                actions={[{
                    icon: "add",
                    isFreeAction: true,
                    tooltip: "Ajouter une nouvelle rue",
                    onClick: (e) => {  }
                }]}
                onSelectionChange={(rows: any) => alert(JSON.stringify(rows))}
            />
            <Paper>
                <TextField onChange={(e) => { console.log(e.target.value) }} label="test" />
                <ComboBox
                    label="ComboBox example"
                    options={[
                        {
                            label: "Label1",
                            value: "1234"
                        },
                        {
                            label: "Label2",
                            value: "2"
                        },
                        {
                            label: "Label3",
                            value: "5"
                        },
                    ]}
                    multi
                    update={(e) => console.log(e)}
                />
            </Paper>
        </div>
    );
};