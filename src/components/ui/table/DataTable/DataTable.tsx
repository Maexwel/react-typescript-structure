import React from 'react';
import MaterialTable from 'material-table';
import { useTheme } from '@material-ui/core';

// Type def
// Base column def
type ColumnProps = {
    title: string,
    field: string,
    type?: "boolean" | "numeric" | "time" | "date" | "datetime" | "currency" | undefined,
    render?: (rowData: object) => 'string' | undefined | JSX.Element,
};

// Options def
type OptionProps = {
    filtering?: boolean,
    sorting?: boolean,
    selection?: boolean,
    exportButton?: boolean,
    rowStyle?: any,
    actionsColumnIndex?: number,
    headerStyle?: object,
};

// Action def (action in columns on multi selected items)
// Or action in row (it depends if this is a select item or not)
type ActionProps = {
    tooltip?: string,
    icon: string,
    onClick: (evt: Event, data: any) => void | undefined,
    isFreeAction:boolean,
};

// Global props
type DataTableProps = {
    title: string,
    columns: Array<ColumnProps>
    data: Array<object>,
    options?: OptionProps,
    actions?: Array<ActionProps>,
    onSelectionChange?: (rows: any) => void | undefined,
};

// Override of material-table library
// cf : https://material-table.com
export const DataTable = ({ title, columns, data, options, actions, onSelectionChange }: DataTableProps) => {
    const theme = useTheme(); // Get global theme

    return (
        <MaterialTable
            title={title}
            columns={columns}
            data={data}
            options={{
                padding: 'dense',
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: theme.palette.grey[200],
                },
                rowStyle: {
                    padding: 0,
                },
                ...options
            }}
            actions={actions}
            onSelectionChange={onSelectionChange}
            localization={{
                body: {
                    emptyDataSourceMessage: 'Aucune données à afficher',
                    filterRow: {
                        filterTooltip: 'Filtrer'
                    },
                },
                toolbar: {
                    searchTooltip: 'Rechercher',
                    searchPlaceholder: 'Rechercher',
                    nRowsSelected: '{0} ligne(s) sélectionnée(s)',
                    exportTitle: 'Exporter',
                },
                pagination: {
                    labelRowsSelect: 'Lignes',
                    labelDisplayedRows: '{from}-{to} sur {count}',
                    firstTooltip: 'Première page',
                    previousTooltip: 'Précédent',
                    nextTooltip: 'Suivant',
                    lastTooltip: 'Dernière page',
                }
            }}
        />
    );
};