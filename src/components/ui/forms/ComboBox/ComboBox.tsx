import React from 'react';
import Select from 'react-select';
import { useTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, Checkbox } from '@material-ui/core';

// Style
// Style
const useStyles = makeStyles((theme) =>
    createStyles({
        label: {
            margin: theme.spacing(1),
        },
    })
);

// Type def
type ComboBoxProps = {
    update?: (selectedOption: any) => void,
    multi?: boolean,
    options: Array<any>,
    disabled?: boolean,
    value?: any | undefined,
    placeholder?: string,
    label: string,
    maxHeight?: number,
};

// ComboBox component
// Display a dropdown list with a filter possibility
// The combobox can be Multiple or not
// Thanks to the great library https://react-select.com/home
export const ComboBox = ({ update, multi = false, options = [], disabled = false, value = undefined, placeholder = '', label = '', maxHeight = 250 }: ComboBoxProps) => {
    const appTheme = useTheme(); // get theme from material-ui
    const [selectedOption, setSelectedOption] = React.useState(); // Selected option when no value is provided
    const classes = useStyles();

    // Style def using react-select
    const styles = {
        option: (provided: any, state: any) => ({
            ...provided,
            cursor: 'pointer',
            color: state.isSelected ? appTheme.palette.common.white : appTheme.palette.text.primary,
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            cursor: 'pointer',
        })
    }
    // Handle select changes
    const handleChange = (selectedOption: any) => {
        try {
            if (selectedOption && selectedOption.value && selectedOption.label) {
                if (update) {
                    update(selectedOption); // Trigger selected option update for upper component
                }
                setSelectedOption(selectedOption); // update internal selected option
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <InputLabel className={classes.label}>{label}</InputLabel>
            <Select
                styles={styles}
                isMulti={multi}
                hideSelectedOptions={false}
                options={options}
                disabled={disabled}
                placeholder={placeholder}
                onChange={handleChange}
                closeMenuOnSelect={false}
                maxMenuHeight={maxHeight}
                value={value ? value : selectedOption}
                theme={theme => ({
                    ...theme, // use base theme
                    colors: {
                        ...theme.colors, // use base colors
                        primary25: appTheme.palette.grey[200], // input color
                        primary: appTheme.palette.primary.main, // selected color/focus color (for the control)
                        neutral50: appTheme.palette.text.hint, // input placeholder color
                        neutral30: appTheme.palette.grey[900], // input hover
                    }
                })}
                components={{
                    Option: Option
                }}
            />
        </div>

    );
};

// // //
// Custom Option component
// https://react-select.com/components#components
type OptionProps = {
    isSelected?: boolean,
    innerProps?: any,
    label?: string,
    isMulti?: boolean,
};
const Option = ({ isSelected, innerProps, label, isMulti }: OptionProps) => {
    return (
        <div {...innerProps}>
            <MenuItem selected={isSelected}>
                {isMulti && <Checkbox checked={isSelected} />}
                <InputLabel>{label}</InputLabel>
            </MenuItem>
        </div >
    );
};