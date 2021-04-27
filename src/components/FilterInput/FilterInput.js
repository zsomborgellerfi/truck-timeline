import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const FilterInput = ({ trucks, onChange }) => {
  const trucksList = Object.keys(trucks).map((truckId) => trucks[truckId]);
  return (
    <Autocomplete
      id="filter-input"
      options={trucksList}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Filter trucks" variant="outlined" />
      )}
      onChange={onChange}
    />
  );
};
