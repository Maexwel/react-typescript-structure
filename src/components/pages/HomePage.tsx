import React from 'react';
import { IconButton } from '../ui/buttons';
import { DataTable } from '../ui/table';
import { Icon, Grid } from '@material-ui/core';

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
                onSelectionChange={(rows: any) => alert(JSON.stringify(rows))}
            />
        </div>
    );
};