import React from "react";
import PropTypes from "prop-types";
import "./Select.scss";

const Select = ({ options, selectedOptions, onChange, allowMultiple = false }) => {

    const onClickOption = (e) => {
        const { target: { dataset: { value } } } = e;
        if (!allowMultiple) {
            onChange(value);
            return
        }

        let newOptions = []
        if (selectedOptions.includes(value)) {
            newOptions = selectedOptions.filter(el => el !== value)
        } else {
            newOptions = [...selectedOptions, value]
        }

        onChange(newOptions)
    }

    return (
        <div className="select" onClick={onClickOption}>
            {options.map(el => (
                <div
                    className={`option${selectedOptions.includes(el.value) ? " selected" : ""}`}
                    key={el.value}
                    data-value={el.value}
                >
                    {el.label}
                </div>
            )
            )}
        </div>
    );
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })),
    selectedOptions: PropTypes.array,
    onChange: PropTypes.func,
    allowMultiple: PropTypes.bool,
};

export default Select;